<script>
  export let label = "";
  export let id = "";
  export let value = "";
  export let variant = "";
  export let valid = false;
  export let errorMessage = "";
  export let content = "";

  // $:console.log(valid);

  let touched = false;
  
  function handleTouch() {
    touched = true;
  }
</script>

<style lang="scss">
  .form-control {
    font-weight: bold !important;
    margin-bottom: 2rem;
    position: relative;

    .input,
    .textarea {
      background: #fff;
      border: none;
      border-bottom: 2px solid #c6cbd2;
      cursor: pointer;
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

    .input:focus + label,
    .textarea:focus + label {
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

    // input[type="date"]::-webkit-calendar-picker-indicator {
    //   color: #1c2026;
    //   background: #fff;
    //   margin: 0 auto;
    //   width: 100%;
    // }

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

    .error-message {
      color: #cf2c2c;
      font-size: 0.75rem;
      height: 0;
      margin-top: 0.5rem;
      opacity: 0;
      transition: 300ms ease;
    }
  }

  .form-control.invalid {
    .input,
    .textarea {
      border-color: #cf2c2c;
    }

    .input:focus + label,
    .textarea:focus + label {
      color: #cf2c2c;
    }

    label {
      color: #cf2c2c;
    }

    .error-message {
      height: auto;
      opacity: 1;
    }
  }
</style>

<div class={`form-control ${!valid && touched? 'invalid' : ''}`}>
  {#if variant === "input"}
    <input
      class="input" 
      type="text"
      id={id} 
      value={value} 
      on:input
      on:blur={handleTouch}
    />
  {:else if variant === "email"}
    <input
      class="input" 
      type="email"
      id={id}
      value={value}
      on:input
      on:blur={handleTouch}
    >
  {:else if variant === "textarea"}
    <textarea 
      class="textarea"
      rows="3" 
      columns="30" 
      id={id}  
      on:input
      on:blur={handleTouch}
    >
      {content}
    </textarea>
  {:else if variant === "date"}
    <input
      class="input"
      type="date"
      id={id}
      value={value}
      on:input
      on:blur={handleTouch}
    />
  {/if}
  <label 
    for={id}
    class={value !== ""  || variant === "date" ? 'input-with-value' : ''}
  >{label}:</label>
  <p class="error-message">{!valid && touched ? errorMessage : ''}</p>
  <!-- {#if variant === 'date'}
    <div class="date-icon"></div>
  {/if} -->
</div>