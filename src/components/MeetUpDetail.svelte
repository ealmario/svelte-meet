<script>
  import { onDestroy } from 'svelte';
  import meetups from './../stores/meetup-store';
  import Button from './Button.svelte';
  import MeetUpInfoItem from './MeetUpInfoItem.svelte';
  
  export let id;

  let selectedMeetup;

  const unsubscribe = meetups.subscribe( items => {
    selectedMeetup = items.find( item => item.id === id);
  })

  onDestroy(() => {
    unsubscribe();
  });
</script>

<style lang="scss">
  .mdetail_container {
    background: #fff;
    width: 100vw;
    height: 100vh;
  }

  .mdetail_navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    width: 100%;
  }

  .mdetail_image {
    background: url(selectedMeetup.image) center center no-repeat fixed;
  }
  .mdetail_content {
    background: #fff;
    border-radius: 24px 24px 0 0;
  }
</style>

<div class="mdetail_container">
  <div class="mdetail_image">
    <header class="mdetail_navigation">
      Back Button Icon
    </header>
  </div>

  <div class="mdetail_content">
    <div class="mdetail_title_content">
      <h2 class="mdetail_title_text">{selectedMeetup.name}</h2>
      Favorite
      Share
    </div>

    <!-- Scrollable Content -->
    <div class="mdetail_list">
      <!-- Event Details Here -->
      <MeetUpInfoItem
        icon="schedule"
        header={selectedMeetup.schedule}
      />
      <MeetUpInfoItem
        icon="address"
        header={selectedMeetup.address}
      />
    </div>

    <footer class="mdetail_footer">
      <Button
        type="button"
        text="Get Tickets"
        variant="solid-primary"
      />
    </footer>
  </div>
</div>