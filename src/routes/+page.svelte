<script lang="ts">
  import mathman from '../assets/mathman.jpg'

  let question = ''

  async function askMathMan(question) {
    const response = fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  function keypressHandler(e: KeyboardEvent) {
    if(e.key !== 'Enter') return
    askMathMan(question)
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
  </div>
  <input bind:value={question} on:keydown={keypressHandler} type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
</main>
