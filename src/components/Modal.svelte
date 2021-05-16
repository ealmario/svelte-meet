<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('close');
  }
</script>

<style lang="scss">
  .close-icon {
    background: #f6b23c;
    cursor: pointer;
    mask: url('/images/close.svg') no-repeat center;
    -webkit-mask: url('/images/close.svg') no-repeat center;
    height: 1.2rem;
    width: 1.2rem;
  }

  .content {
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;
  }
</style>

<div class="modal-overlay" on:click={closeModal}></div>
<div class="modal-container">
  <div class="header">
    <button class="close-icon" on:click={closeModal}></button>
  </div>
  <div class="content">
    <slot />
  </div>
  <div class="footer">
    <slot name="footer"></slot>
  </div>
</div>