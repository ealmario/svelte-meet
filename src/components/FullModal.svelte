<script>
  import { createEventDispatcher } from 'svelte'; 

  export let title;
  export let text;
  export let editMode;

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('close');
  }
</script>

<style lang="scss">
  .modal-container {
    background: #fff;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
  }

  .header {
    border-bottom: 1px solid #ebedef;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.5rem;
    width: 100%;

    .page-title {
      width: 100%;
    }

    h1 {
      font-size: 0.825rem;
      text-align: center;
    }
  }

  .footer {
    background: #fff;
    padding: 0 1rem;
  }

  .back-btn {
    background: #1c2026;
    cursor: pointer;
    height: 1rem;
    width: 1rem;
    -webkit-mask: url('/images/chevron-left.svg') no-repeat center;
    mask: url('/images/chevron-left.svg') no-repeat center;
    margin: 0;
  }
</style>

<div class="modal-container">
  <header class="header">
    <button class="back-btn" on:click={closeModal}></button>
    <div class="page-title">
      <h1>{title}</h1>
    </div>
  </header>
  <div class="content">
    <slot />
  </div>
  <footer class="footer">
    <slot name="footer"></slot>
  </footer>
</div>