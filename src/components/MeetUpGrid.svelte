<script>
  import MeetUpItem from './MeetUpItem.svelte';

   export let meetups;
</script>

<div class="meetup-grid">
  {#each meetups as meetup}
	  <MeetUpItem meetup={meetup} />
  {/each}
</div>