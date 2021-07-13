<script>
  export let icon = null;
  export let text = null;
  export let selected = false;
  export let onClick = () => {};
</script>

<style lang="scss">
  .badge-container {
    background: #fcd99c;
    border-radius: 12px;
    border: none;
    color: #5e3e08;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    letter-spacing: 0.25px;
    padding: 0.5rem 0.75rem;
    transition: 300ms ease;

    &:focus {
      outline: none;
    }
  }

  .selected {
    background: #f1a727;
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
  class={`badge-container ${selected ? 'selected' : ''}`} 
  type="button"
  on:click={onClick}
>
  <div class="content-container">
    {#if icon !== null}
      <div div class={`icon-container ${icon}`}></div>
    {/if}
    <p class="text">{text}</p>
  </div>
</button>