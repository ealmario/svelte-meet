<script>
  import MeetUpItem from './MeetUpItem.svelte';
  import MeetUpFilter from './MeetUpFilter.svelte';

   export let meetups;

   let favoritesOnly = false;

   $: filteredMeetups = favoritesOnly ? meetups.filter(meetup => meetup.isFavorite) : meetups;

   function setFilter(event) {
    if (event.detail === 0 ) return favoritesOnly = false;
    if (event.detail === 1 ) return favoritesOnly = true;
   }
</script>

<style lang="scss">
  .meetup-grid {
    margin: 0 auto;
  }
</style>

<MeetUpFilter on:select={setFilter}/>
<div class="meetup-grid">
  {#each filteredMeetups as meetup}
    <MeetUpItem 
      meetup={meetup}
      on:showDetails 
      on:editDetails
    />
  {/each}
</div>