<script lang="ts">
  import mathman from '../assets/mathman.jpg'
  import { askMathMan, askMathManThread } from '$lib/api'
  import ChatBubble from '../components/ChatBubble.svelte'

  let question = '', threadId = '', runId = ''
  let messages: {message: string, isAssistant: boolean}[] = []

  async function keypressHandler(e: KeyboardEvent) {
    if(e.key !== 'Enter') return

    // Append the user's message to the messages array
    messages = [...messages, {message: question, isAssistant: false}]

    let data;
    if(threadId !== '') {
      data = await askMathManThread(question, threadId, runId)
    } else {
      data = await askMathMan(question)
      threadId = data.threadId
      runId = data.runId
    }
    messages = [...messages, {message: data.responseContent, isAssistant: true}]

    // Clear the input field
    question = '';
  }
</script>



<main class="h-screen flex flex-col gap-10 justify-center items-center">
  <h1 class="text-7xl">Math man</h1>
  <div class="h-[500px] border w-[1000px] rounded-md p-4 overflow-auto">
    <div class="chat chat-start">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={mathman} />
        </div>
      </div>
      <div class="chat-bubble">Give me any math question &#128526;</div>
    </div>
    {#each messages as { message, isAssistant } (message)}
  <ChatBubble {message} {isAssistant} />
{/each}
  </div>
  <input bind:value={question} on:keydown={keypressHandler} type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
</main>
