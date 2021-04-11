<script>
    export let text;
    export let type;
</script>

<style lang="scss">
  button {
    background: #e49c15;
    border: none;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    color: #fdfdfd;
    cursor: pointer;
    font-size: 0.875rem;
    padding: 0.75rem 1.25rem;
    transition: 300ms ease;

    &:focus {
      outline: none;
    }

    &:hover {
      background: #ee9f17;
    }
  }
</style>

<button type={type}>{text}</button>