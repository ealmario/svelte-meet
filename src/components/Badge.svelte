<script>
  export let icon = null;
  export let text = null;
</script>

<style lang="scss">
  .badge-container {
    background: #fac56b;
    border-radius: 12px;
    border: none;
    color: #5e3e08;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    letter-spacing: 0.25px;
    padding: 0.5rem 0.75rem;

    &:focus {
      outline: none;
    }
  }

  .icon-container {
    background: #5e3e08;
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem; 
  }

  .content-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .pizza-slice {
    -webkit-mask: url('/images/pizza-slice.svg') no-repeat center;
    mask: url('/images/pizza-slice.svg') no-repeat center;
  }
</style>

<button 
  class="badge-container" 
  type="button"
>
  <div class="content-container">
    {#if icon !== null}
      <div div class={`icon-container ${icon}`}></div>
    {/if}
    <p class="text">{text}</p>
  </div>
</button>