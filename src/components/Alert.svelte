<script>
  export let type;
  export let message;

</script>

<style lang="scss">
  .alert-container {
    background: #ffe0e0;
    border: 1px solid #c02f2f;
    border-radius: 8px;
    color: #c02f2f;
    font-size: 14px;
    font-weight: bold !important;
    padding: 1rem;
    margin: 0 auto;
    width: 90%;
  }
</style>

<div class="alert-container">
  <!-- Insert type icon here -->
  <p class="alert-message">{message}</p>
  <!-- Close buttom -->
</div>