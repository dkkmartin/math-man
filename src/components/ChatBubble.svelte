<script>
  import mathman from '../assets/mathman.jpg'
  import userAvatar from '../assets/CarbonUserAvatarFilled.svg'
  export let message = '';
  export let isAssistant = false
</script>


<div class={`chat ${isAssistant ? 'chat-start' : 'chat-end'}`}>
  <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src={isAssistant ? mathman : userAvatar} />
    </div>
  </div>
  <div class="chat-bubble" style="white-space: pre-wrap;">{message}</div>
</div>
