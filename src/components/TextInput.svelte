<script>
  export let label = "";
  export let id = "";
  export let value = "";
  export let type = "";
  export let variant = "";
</script>

<style lang="scss">
  .form-control {
    font-size: 0.875rem;
    font-weight: bold !important;
    margin: 1rem;
    position: relative;

    input,
    textarea {
      border: none;
      border-bottom: 2px solid #c6cbd2;
      transition: 300ms ease;

      &:focus {
        border-color: #f6b23c;
        color: #1c2026;
        outline: none;
      }
    }

    input:focus + label,
    input:not([value=""]) + label {
      font-size: 0.75rem;
      top: -0.875rem;
    }

    label {
      color: #717e8e;
      position: absolute;
      top: 0;
      left: 0;
      transition: 300ms ease;
    }
  }
</style>

<div class="form-control">
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
  <label for={id}>{label}:</label>
</div>