<script>
    export let text;
    export let type;
</script>

<style lang="scss">
  button {
    background: #318beb;
    border: none;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(2,77,158,0.2);
    color: #fdfdfd;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold !important;
    letter-spacing: 0.25px;
    padding: 0.875rem 1.25rem;
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
</style>

<button type={type}>{text}</button>