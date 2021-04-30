<script>
	import { v4 as uuidv4 } from 'uuid';
	import SearchInput from './components/SearchInput.svelte';
	import MeetUpGrid from './components/MeetUpGrid.svelte';
	import TextInput from './components/TextInput.svelte';
	import Button from './components/Button.svelte';

	let meetup = {
		id: uuidv4(),
		imgUrl: '',
		name: '',
		subtitle: '',
		description: '',
		address: '',
		contactPerson: '',
		contactEmail: ''
	};

	let meetups = [
    {
      id: uuidv4(),
      imgUrl: 'http://via.placeholder.com/300',
      name: 'Coding Bootcamp',
      subtitle: 'Learn to code in 4 hours',
      description: 'In this meetup, we will have experts that would teach you how to code',
      address: '724 Kayla Branch' ,
      contactPerson: 'Johanna Larson',
      contactEmail: 'jlarson@code.com'
    },
    {
      id: uuidv4(),
      imgUrl: 'http://via.placeholder.com/300',
      name: 'Coffee Workshop',
      subtitle: 'Manual Brewing Methods',
      description: 'Learn the different types of brewing methods and create the perfect cup even at home! Workshop is from 3pm - 5pm on Zoom and FB Live.',
      address: 'Apt. 818 47298 Kertzmann Summit Cubao',
      contactPerson: 'Jennie Pfeffer',
      contactEmail: 'jennie,pfeffer@coffeeworks.com'
    },
	];
	
	function addMeetUp() {
		meetups = [...meetups, meetup];
		console.log(meetups);
	}
</script>

<style lang="scss">
	main {
		padding: 1rem;
		height: 100vh;
		width: 100vw;
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
		z-index: 3;
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

<!-- <Header /> -->
<div class="explore-container">
	<div class="search-input">
		<SearchInput />
	</div>
	<div class="overlay"></div>
	<h3 class="explore-text">Explore</h3>
	<div class="events-bg"></div>
</div>
<main>
	<!-- <form on:submit|preventDefault={addMeetUp}>
		<TextInput 
			variant="input"
			id="imgUrl"
			label="Image URL"
			type="text"
			value={meetup.imgUrl}
			on:input={event => meetup.imgUrl = event.target.value}
		/>

		<TextInput 
			variant="input"
			id="name"
			label="Name"
			type="text"
			value={meetup.name}
			on:input={event => meetup.name = event.target.value}
		/>

		<TextInput 
			variant="input"
			id="subtitle"
			label="Subtitle"
			type="text"
			value={meetup.subtitle}
			on:input={event => meetup.subtitle = event.target.value}
		/>

		<TextInput 
			variant="text-area"
			id="description"
			label="Description"
			type=""
			value={meetup.description}
			on:input={event => meetup.description = event.target.value}
		/>
		
		<TextInput 
			variant="input"
			id="address"
			label="Address"
			type="text"
			value={meetup.address}
			on:input={event => meetup.address = event.target.value}
		/>

		<TextInput 
			variant="input"
			id="contactPerson"
			label="Contact Person"
			type="text"
			on:input={event => meetup.contactPerson = event.target.value}
		/>

		<TextInput 
			variant="input"
			id="email"
			label="Contact Email"
			type="email"
			value={meetup.contactEmail}
			on:input={event => meetup.contactEmail = event.target.value}
		/>

		<Button
			type="submit"
			text="Add Meetup"
		/>
	</form> -->
	<MeetUpGrid meetups={meetups}/>
</main>