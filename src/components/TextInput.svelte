<script>
  export let label = "";
  export let id = "";
  export let value = "";
  export let type = "";
  export let variant = "";
</script>

<style lang="scss">
  .form-control {
    font-weight: bold !important;
    margin-bottom: 2rem;
    position: relative;

    input,
    textarea {
      border: none;
      border-bottom: 2px solid #c6cbd2;
      font-size: 0.875rem;
      font-weight: bold !important;
      transition: 300ms ease;
      width: 100%;


      &:focus {
        border-color: #f6b23c;
        color: #1c2026;
        outline: none;
      }
    }

    input:focus + label,
    textarea:focus + label {
      color: #f6b23c;
      font-size: 0.75rem;
      top: -0.875rem;
    }

    label {
      color: #717e8e;
      font-size: 0.875rem;
      position: absolute;
      top: 0;
      left: 0;
      transition: 300ms ease;
    }

    .input-with-value {
      font-size: 0.75rem;
      top: -0.875rem;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
      display:none;
    }

    .date-icon {
      background: #f6b23c;
      cursor: pointer;
      mask: url('/images/calendar.svg') no-repeat center;
      -webkit-mask: url('/images/calendar.svg') no-repeat center;
      width: 1.2rem;
      height: 1.2rem;
      position: absolute;
      top: 0.4rem;
      right: 0.5rem;
      transform: scale(0.8);
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
      rows="3" 
      columns="30" 
      id={id}  
      on:input
    >
    </textarea>
  {:else if variant === "date"}
    <input
      type={type}
      id={id}
      value={value}
      required
      on:input
    />
  {/if}
  <label 
    for={id}
    class={value !== ""  || type === "date" ? 'input-with-value' : ''}
  >{label}:</label>
  {#if type === 'date'}
    <div class="date-icon"></div>
  {/if}
</div>