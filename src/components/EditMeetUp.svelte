<script>
    import { createEventDispatcher } from 'svelte';
    import { v4 as uuidv4 } from 'uuid';
    import TextInput from './TextInput.svelte';
    import Button from './Button.svelte';
    import FullModal from './FullModal.svelte';
    import FieldSet from './FieldSet.svelte';

    let meetup = {
      id: uuidv4(),
      imgUrl: '',
      name: '',
      schedule: '',
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

<style lang="scss">
  .edit-form {
    background: #fff;
    margin-top: 1.5rem;
    padding: 0 1rem;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
</style>

<FullModal title="Edit Event" on:close>
  <form on:submit|preventDefault={submitForm} class="edit-form">
    <FieldSet legendLabel="Event Details">
      <TextInput 
        variant="input"
        id="name"
        label="Event Name"
        type="text"
        value={meetup.name}
        on:input={event => meetup.name = event.target.value}
      />

      <!-- TODO -->
      <!-- Create Event Schedule Date Picker -->
      <!-- Event Place (Address) -->

      <TextInput 
        variant="input"
        id="schedule"
        label="Event Schedule"
        type="date"
        value={meetup.schedule}
        on:input={event => meetup.schedule = event.target.value}
      />

      <TextInput 
        variant="input"
        id="address"
        label="Event Place"
        type="text"
        value={meetup.address}
        on:input={event => meetup.address = event.target.value}
      />

      <TextInput 
        variant="textarea"
        id="description"
        label="Description"
        type=""
        value={meetup.description}
        on:input={event => meetup.description = event.target.value}
      />

      <TextInput 
        variant="input"
        id="imgUrl"
        label="Event Image"
        type="text"
        value={meetup.imgUrl}
        on:input={event => meetup.imgUrl = event.target.value}
      />
    </FieldSet>
 
    <FieldSet legendLabel="Event Organizer Details">
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
  </FieldSet>

    <div class="btn-container">
      <Button
        type="submit"
        text="Save"
      />
    </div>
  </form>
</FullModal>