<script>
	import { v4 as uuidv4 } from 'uuid';
	import Header from './components/Header.svelte';
	import MeetUpGrid from './components/MeetUpGrid.svelte';

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

<Header />
<main>
	<form on:submit|preventDefault={addMeetUp}>
		<div class="form-control">
			<label for="imgUrl">Image URL:</label>
		<input type="text" id="imgUrl" bind:value={meetup.imgUrl}/>
		</div>

		<div class="form-control">
			<label for="name">Name:</label>
			<input type="text" id="name" bind:value={meetup.name}/>
		</div>

		<div class="form-control">
			<label for="subtitle">Subtitle:</label>
			<input type="text" id="subtitle" bind:value={meetup.subtitle}/>
		</div>

		<div class="form-control">
			<label for="description">Description:</label>
			<textarea id="description" cols="30" rows="6" bind:value={meetup.description}></textarea>
		</div>
		
		<div class="form-control">
			<label for="address">Address:</label>
			<input type="text" id="address" bind:value={meetup.address}/>
		</div>

		<div class="form-control">
			<label for="contactPerson">Contact Person:</label>
			<input type="text" id="contactPerson" bind:value={meetup.contactPerson}/>
		</div>

		<div class="form-control">
			<label for="email">Contact Email:</label>
			<input type="email" id="email" bind:value={meetup.contactEmail}/>
		</div>

		<button type="submit">Add Meetup</button>
	</form>
	<MeetUpGrid meetups={meetups}/>
</main>