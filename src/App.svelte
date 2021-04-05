<script>
	import { v4 as uuidv4 } from 'uuid';
	import Header from './components/Header.svelte';
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
	}
</style>

<Header />
<main>
	<form on:submit|preventDefault={addMeetUp}>
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
	</form>
	<MeetUpGrid meetups={meetups}/>
</main>