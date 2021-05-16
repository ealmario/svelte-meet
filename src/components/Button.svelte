<script>
    export let text;
    export let type;
    export let variant;

    function buttonType() {
      switch(variant) {
        case 'solid-primary':
          return '';
        case 'outline-primary':
          return 'outline-primary';
        case 'text-primary':
          return 'text-primary';
      }
    }
</script>

<style lang="scss">
  .solid-primary {
    background: #318beb;
    border: 1px solid #318beb00;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(2,77,158,0.2);
    color: #fdfdfd;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold !important;
    letter-spacing: 0.25px;
    padding: 0.875rem 1.25rem;
    transition: 300ms ease;
    width: 100%;

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

  .outline-primary {
    background: #fff;
    border: 1px solid #318beb;
    color: #318beb;

    &:hover {
      background: #318beb20;
      border-color: #3c91ec;
    }

    &:active {
      background: #318beb50;
      border-color: #1572d5;
    }
  }

  .text-primary {
    background: none;
    border: none;
    box-shadow: none;
    color: #318beb;

    &:hover {
      background: none;
      color: #3c91ec;
    }

    &:active {
      background: none;
      color: #1572d5;
    }
  }
</style>

<button 
  type={type} 
  class={`solid-primary ${buttonType()}`} 
  on:click
>
  {text}
</button>