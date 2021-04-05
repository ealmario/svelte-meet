<script>
    export let text;
    export let type;
</script>

<style lang="scss">
  button {
    background: #468bd8;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;

    &:focus {
      outline: none;
    }
  }
</style>

<button type={type}>{text}</button>