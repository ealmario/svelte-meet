<script>
	import { Router, Route, Link } from 'svelte-navigator';
	import meetups from './stores/meetup-store';
	import SearchInput from './components/SearchInput.svelte';
	import MeetUpGrid from './components/MeetUpGrid.svelte';
	import EditMeetUp from './components/EditMeetUp.svelte';
	import FloatingActionButton from './components/FloatingActionButton.svelte';

	let editMode = false;

	function addMeetUp(event) {
		editMode = false;
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
		meetups={$meetups}
	/>
	<FloatingActionButton on:click={()=> (editMode = true)}/>
</main>