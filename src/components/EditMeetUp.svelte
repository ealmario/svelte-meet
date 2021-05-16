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
        value={meetup.name}
        on:input={event => meetup.name = event.target.value}
      />

      <!-- TODO -->
      <!-- Create Event Schedule Date Picker -->
      <!-- Event Place (Address) -->

      <TextInput 
        variant="date"
        id="schedule"
        label="Event Schedule"
        value={meetup.schedule}
        on:input={event => meetup.schedule = event.target.value}
      />
      
      <TextInput 
        variant="input"
        id="address"
        label="Event Place"
        value={meetup.address}
        on:input={event => meetup.address = event.target.value}
      />

      <TextInput 
        variant="textarea"
        id="description"
        label="Description"
        value={meetup.description}
        on:input={event => meetup.description = event.target.value}
      />

      <TextInput 
        variant="input"
        id="imgUrl"
        label="Event Image"
        value={meetup.imgUrl}
        on:input={event => meetup.imgUrl = event.target.value}
      />
    </FieldSet>
 
    <FieldSet legendLabel="Event Organizer Details">
      <TextInput 
        variant="input"
        id="contactPerson"
        label="Contact Person"
        on:input={event => meetup.contactPerson = event.target.value}
      />

      <TextInput 
        variant="email"
        id="email"
        label="Contact Email"
        value={meetup.contactEmail}
        on:input={event => meetup.contactEmail = event.target.value}
      />
    </FieldSet>
  </form>
  <div class="btn-container" slot="footer">
    <Button
      type="button"
      text="Save"
      on:click={submitForm}
    />
  </div>
</FullModal>