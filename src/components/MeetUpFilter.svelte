<script>
  import { createEventDispatcher } from 'svelte';
  import Badge from './Badge.svelte';

  let selectedButton = 0;

  const dispatch = createEventDispatcher();
</script>

<style lang="scss">
  .filter-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 3rem;
  }

  .badge-container {
    margin-right: 0.5rem;
  }
</style>

<div class="filter-container">
  <div class="badge-container">
    <Badge 
      text="All" 
      onClick={
      () => {
        dispatch('select', 0);
        selectedButton = 0;
      }}
      selected={selectedButton === 0 ? true : false}
    />
  </div>
  <div class="badge-container">
    <Badge 
      text="Favorites" 
      onClick={
      () => {
        dispatch('select', 1);
        selectedButton = 1;
      }}
      selected={selectedButton === 1 ? true : false}
    />
  </div>
</div>