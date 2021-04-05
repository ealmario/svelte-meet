<script>
  export let label = "";
  export let id = "";
  export let value = "";
  export let type = "";
  export let variant = "";
</script>

<style lang="scss">
  .form-control {
    margin: 1rem;

    input,
    textarea {
      outline: none;
    }
  }
</style>

<div class="form-control">
  <label for={id}>{label}:</label>
  {#if variant === "input"}
    <input 
      type={type} 
      id={id} 
      value={value} 
      on:input
    />
  {:else if variant === "textarea"}
    <textarea 
      rows="6" 
      columns="30" 
      id={id} 
      on:input
    >
    </textarea>
  {/if}
</div>