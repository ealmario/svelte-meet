<style lang="scss">
  .spinner {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 20px solid rgba(255, 255, 255, 0.1);
    border-top-color: #ee9f17;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>

<div class="spinner"></div>