<script>
    import { createEventDispatcher } from 'svelte';
    import { v4 as uuidv4 } from 'uuid';
    import TextInput from './TextInput.svelte';
    import Button from './Button.svelte';

    let meetup = {
      id: uuidv4(),
      imgUrl: '',
      name: '',
      subtitle: '',
      description: '',
      address: '',
      contactPerson: '',
      contactEmail: '',
      isFavorite: false
    };
    
    const dispatch = createEventDispatcher();
    
    function submitForm() {
      dispatch('addmeetup', meetup)
    }
</script>

<form on:submit|preventDefault={submitForm}>
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