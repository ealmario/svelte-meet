<script>
	import { Router, Route, Link } from 'svelte-navigator';
	import meetups from './stores/meetup-store';
	import SearchInput from './components/SearchInput.svelte';
	import MeetUpGrid from './components/MeetUpGrid.svelte';
	import EditMeetUp from './components/EditMeetUp.svelte';
	import MeetUpDetail from './components/MeetUpDetail.svelte';
	import FloatingActionButton from './components/FloatingActionButton.svelte';
	import Spinner from './components/Spinner.svelte';

	let editMode = null;
	let editedID = null;
	let page = 'overview';
	let pageData = {};
	let isLoading = true;

	// Fetch the data directly or you can use onMount
	fetch('https://svelte-meetups-4aa78-default-rtdb.firebaseio.com/meetups.json')
	.then(res => {
		if (!res.ok) throw new Error('Fetching failed');
		return res.json();
	})
	.then(data => {
		const loadedMeetups = [];
		for (const key in data) {
			loadedMeetups.push({
				...data[key],
				id: key,
			})
		}
		isLoading = false;
		meetups.setMeetups(loadedMeetups);
	})
	.catch(err => {
		isLoading = false;
		console.log(err);
	});

	function saveMeetUp(event) {
		editMode = null;
		editedID = null;
	}

	function closeModal() {
		editMode = null;
		editedID = null;
	}

	function showDetails(event) {
		page = 'details';
		pageData.id = event.detail;
	}

	function closeDetails() {
		page = 'overview';
		pageData = {};
		editedID = null;
	}

	function editDetails(event) {
		editMode = 'edit';
		editedID = event.detail;
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

	.spinner-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5rem;
	}
</style>

{#if editMode === 'edit'}
	<EditMeetUp
		id={editedID}
		on:save={saveMeetUp}
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
	<!-- Temporary: MeetUpDetail flow -->
	{#if page === 'overview'}
		{#if isLoading}
			<div class="spinner-container">
				<Spinner />
			</div>
		{:else}
			<MeetUpGrid 
				meetups={$meetups}
				on:showDetails={showDetails}
				on:editDetails={editDetails}
			/>
			<FloatingActionButton on:click={()=> (editMode = 'edit')}/>
		{/if}
	{:else}
		<MeetUpDetail id={pageData.id} on:close={closeDetails}/>
	{/if}
</main>