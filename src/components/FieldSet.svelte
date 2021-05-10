<script>
  export let legendLabel;
</script>

<style lang="scss">
  .fieldset {
    border: none;
    margin-bottom: 2.5rem;
  }

  .legend {
    color: #1C2026;
    font-size: 0.75rem;
    font-weight: bolder !important;
    letter-spacing: 0.3px;
    margin-bottom: 1.5rem;
  }
</style>

<fieldset class="fieldset">
  <legend class="legend">{legendLabel}</legend>
  <slot><!-- optional fallback --></slot>
</fieldset>