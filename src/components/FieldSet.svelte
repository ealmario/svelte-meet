<script>
  export let legendLabel;
  export let noMargin = false;
</script>

<style lang="scss">
  .fieldset {
    border: none;
    margin-bottom: 2.5rem;
    width: 100%;
  }

  .fieldset.no-margin {
    margin-bottom: 0;
  }

  .legend {
    color: #1C2026;
    font-size: 0.75rem;
    font-weight: bolder !important;
    letter-spacing: 0.3px;
    margin-bottom: 1.5rem;
  }
</style>

<fieldset class={`fieldset ${noMargin ? 'no-margin' : ''}`}>
  <legend class="legend">{legendLabel}</legend>
  <slot><!-- optional fallback --></slot>
</fieldset>