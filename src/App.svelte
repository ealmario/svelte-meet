<script>
	import { v4 as uuidv4 } from 'uuid';
	import SearchInput from './components/SearchInput.svelte';
	import MeetUpGrid from './components/MeetUpGrid.svelte';
	import EditMeetUp from './components/EditMeetUp.svelte';
	import FloatingActionButton from './components/FloatingActionButton.svelte';

	let meetups = [
    {
      id: uuidv4(),
      imgUrl: 'http://via.placeholder.com/300',
      name: 'Coding Bootcamp',
      schedule: 'May 3, 2021',
      description: 'In this meetup, we will have experts that would teach you how to code',
      address: '724 Kayla Branch' ,
      contactPerson: 'Johanna Larson',
			contactEmail: 'jlarson@code.com',
			isFavorite: false
    },
    {
      id: uuidv4(),
      imgUrl: 'http://via.placeholder.com/300',
      name: 'Coffee Workshop',
      schedule: 'June 20, 2021',
      description: 'Learn the different types of brewing methods and create the perfect cup even at home! Workshop is from 3pm - 5pm on Zoom and FB Live.',
      address: 'Apt. 818 47298 Kertzmann Summit Cubao',
      contactPerson: 'Jennie Pfeffer',
			contactEmail: 'jennie,pfeffer@coffeeworks.com',
			isFavorite: false
    },
	];

	let editMode = false;
	
	function toggleFavorite(event) {
		// Extract ID from event detail
		const id = event.detail;
		// Copy meetup array before updating
		const updatedMeetup = {...meetups.find(meetup => meetup.id === id)};
		// Toggle isFavorite
		updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
		// Get the index of the meetup
		const meetupIndex = meetups.findIndex(meetup => meetup.id === id);
		// Create a copy of meetups and update the specific meetup
		const updatedMeetups = [...meetups];
		updatedMeetups[meetupIndex] = updatedMeetup;
		meetups = updatedMeetups;
	}

	function addMeetUp(event) {
		const meetup = event.detail;
		meetups = [...meetups, meetup];
		editMode = false;
		console.log(meetups);
	}

	function closeModal() {
		editMode = !editMode;
	}
</script>

<style lang="scss">
	main {
		padding: 1rem;
		position: relative;
		width: 100%;
	}

	.explore-container {
		position: relative;
		margin-bottom: 2rem;
	}

	.search-input {
		position: absolute;
		bottom: -1.25rem;
		left: 5%;
		width: 100%;
		z-index: 2;
	}

	.events-bg {
		background: url('/images/explore-photo.jpg') no-repeat bottom center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 50vh;
		width: 100%;
	}

	.overlay {
		background: rgba(0,0,0,.6);
		height: 50vh;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	.explore-text {
		color: #fcfcfc;
		font-size: 2rem;
		letter-spacing: 0.25;
		position: absolute;
		top: 2rem;
		left: 1.25rem;
	}
</style>

{#if editMode === true}
	<EditMeetUp
		on:addmeetup={addMeetUp}
		on:close={closeModal}
	/>
{/if}

<div class="explore-container">
	<div class="search-input">
		<SearchInput />
	</div>
	<div class="overlay"></div>
	<h3 class="explore-text">Explore</h3>
	<div class="events-bg"></div>
</div>

<main>
	<MeetUpGrid 
		meetups={meetups}
		on:togglefavorite={toggleFavorite}
	/>
	<FloatingActionButton on:click={()=> (editMode = true)}/>
</main>