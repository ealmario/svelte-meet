<style lang="scss">
  .fab {
    background: #318beb;
    border: none;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(2,77,158,0.2);
    cursor: pointer;
    padding: 1.25rem;
    transition: 300ms ease;

    &:focus {
      outline: none;
    }

    &:hover {
      background: #3c91ec;
    }
    
    &:active {
      background: #1572d5;
    }
  }

  .plus {
    background: #fcfcfc;
    cursor: pointer;
    -webkit-mask: url('/images/plus.svg') no-repeat center;
    mask: url('/images/plus.svg') no-repeat center;
    height: 1.5rem;
    width: 1.5rem;
  }
</style>

<button class="fab">
  <div class="plus" on:click></div>
</button>