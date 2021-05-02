<script></script>

<style lang="scss">
  .form-control {
    cursor: pointer;
    position: relative;
    width: 90%;
  }

  input {
    border: 2px solid rgba(0,0,0,0);
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    font-size: 0.75rem;
    font-weight: bold !important;
    padding: 1rem 1rem 1rem 2.5rem;
    transition: 300ms ease;
    width: 100%;

    &:focus {
      border-color: #f6b23c;
      outline: none;
    }
  }

  ::placeholder {
    color: #aab2bb;
  }

  .search-icon,
  .settings-icon {
    background: #f6b23c;
    height: 1.2rem;
    width: 1.2rem;
    position: absolute;
    transform: scale(0.8);
  }

  .search-icon {
    -webkit-mask: url('/images/search.svg') no-repeat center;
    cursor: pointer;
    mask: url('/images/search.svg') no-repeat center;
    top: 1rem;
    left: 0.9rem;
  }

  .settings-icon {
    -webkit-mask: url('/images/settings-alt.svg') no-repeat center;
    mask: url('/images/settings-alt.svg') no-repeat center;
    top: 1rem;
    right: 0.9rem;
  }
</style>

<div class="form-control">
  <div class="search-icon"></div>
  <input type="text" placeholder="Looking for something specific?"/>
  <button class="settings-icon"></button>
</div>