export async function askMathMan(question: string) {
	console.log('Asking question...')
	try {
		const response = await fetch('/api/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ question: question })
		})
		if (response.ok) {
			const data = await response.json()
			return data
		}
	} catch (error) {
		console.error(error)
	}
}
export async function askMathManThread(question: string, threadId: string, runId: string) {
	console.log('Asking question...')
	try {
		const response = await fetch('/api/message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ question: question, threadId: threadId, runId: runId })
		})
		if (response.ok) {
			const data = await response.json()
			return data
		}
	} catch (error) {
		console.error(error)
	}
}
