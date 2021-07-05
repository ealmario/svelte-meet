<script>
  import MeetUpItem from './MeetUpItem.svelte';

   export let meetups;
</script>

<style lang="scss">
  .meetup-grid {
    margin: 0 auto;
  }
</style>

<div class="meetup-grid">
  {#each meetups as meetup}
    <MeetUpItem 
      meetup={meetup}
      on:showDetails 
    />
  {/each}
</div>