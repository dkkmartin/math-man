import { OPENAIKEY } from '$env/static/private'
import OpenAI from 'openai'
import type { RequestHandler } from './$types'

const openai = new OpenAI({
	apiKey: OPENAIKEY
})

async function checkRunStatus(threadId: string, runId: string) {
	let run
	do {
		run = await openai.beta.threads.runs.retrieve(threadId, runId)
		if (run.status === 'completed') {
			break
		}
		// Wait for a short period before checking the status again
		await new Promise((resolve) => setTimeout(resolve, 1000))
	} while (true)

	return run
}

export const POST: RequestHandler = async (request) => {
	const { question } = await request.body.json()
	const run = await openai.beta.threads.createAndRun({
		assistant_id: 'asst_ATfNhLWmCAIPNQHuhzQJcUP8',
		thread: {
			messages: [{ role: 'user', content: question }]
		}
	})

	const completedRun = await checkRunStatus(run.thread_id, run.id)

	const messages = await openai.beta.threads.messages.list(completedRun.thread_id)

	return new Response(JSON.stringify(messages.data[0].content[0].text.value))
}
