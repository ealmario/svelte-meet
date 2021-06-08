<script>
    import { createEventDispatcher } from 'svelte';
    import { v4 as uuidv4 } from 'uuid';
    import { isEmpty, isValidEmail } from './../helpers/validation';
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
    let isFormValid = false;
    let formMessage = false;
    
    const checkInput = () => {
      // for (const key in meetup) {
      //   if (key !== 'isFavorite' && meetup[key] !== '') {
      //     // isFormValid = true;
      //     console.log(meetup[key])
      //   }
      // }

      if (
        !isEmpty(meetup.imgUrl) && 
        !isEmpty(meetup.name) && 
        !isEmpty(meetup.schedule) &&
        !isEmpty(meetup.description) &&
        !isEmpty(meetup.address) &&
        !isEmpty(meetup.contactPerson) &&
        !isEmpty(meetup.contactEmail) && isValidEmail(meetup.contactEmail) 
      ) {
        isFormValid = true;
      }
    }

    function submitForm() {
      checkInput();
      if (isFormValid) {
        dispatch('addmeetup', meetup);
      } else {
        formMessage = true;
      }    
    }

    function closeModal() {
      dispatch('close');
    }

    function emailValidationMsg(val) {
      if (isEmpty(val)) return 'This field cannot be empty';
      if (!isValidEmail(val)) return 'Please enter a valid email address';
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .message {
    background: #fdecec;
    border: 1px solid #c42a2a;
    border-radius: 8px;
    color: #c42a2a;
    font-size: 0.825rem;
    font-weight: bold;
    letter-spacing: 0.3px;
    padding: 1rem 0.5rem;
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
        valid={!isEmpty(meetup.name)}
        errorMessage="This field cannot be empty"
        on:input={event => meetup.name = event.target.value}
      />

      <TextInput 
        variant="date"
        id="schedule"
        label="Event Schedule"
        value={meetup.schedule}
        valid={!isEmpty(meetup.schedule)}
        errorMessage="This field cannot be empty"
        on:input={event => meetup.schedule = event.target.value}
      />

      <TextInput 
        variant="input"
        id="address"
        label="Event Place"
        value={meetup.address}
        valid={!isEmpty(meetup.address)}
        errorMessage="This field cannot be empty"
        on:input={event => meetup.address = event.target.value}
      />

      <TextInput 
        variant="textarea"
        id="description"
        label="Description"
        value={meetup.description}
        valid={!isEmpty(meetup.description)}
        errorMessage="This field cannot be empty"
        on:input={event => meetup.description = event.target.value}
      />

      <TextInput 
        variant="input"
        id="imgUrl"
        label="Event Image"
        value={meetup.imgUrl}
        valid={!isEmpty(meetup.imgUrl)}
        errorMessage="This field cannot be empty"
        on:input={event => meetup.imgUrl = event.target.value}
      />
    </FieldSet>
 
    <FieldSet legendLabel="Event Organizer Details" noMargin={true}>
      <TextInput 
        variant="input"
        id="contactPerson"
        label="Contact Person"
        value={meetup.contactPerson}
        valid={!isEmpty(meetup.contactPerson)}
        errorMessage="This field cannot be empty"
        on:input={event => meetup.contactPerson = event.target.value}
      />

      <TextInput 
        variant="email"
        id="email"
        label="Contact Email"
        value={meetup.contactEmail}
        valid={!isEmpty(meetup.contactEmail) && isValidEmail(meetup.contactEmail)}
        errorMessage={emailValidationMsg(meetup.contactEmail)}
        on:input={event => meetup.contactEmail = event.target.value}
      />
    </FieldSet>
    {#if formMessage}
      <div class="message">
        <p>All fields are required.</p>
      </div>
    {/if}
  </form>
  <div class="btn-container" slot="footer">
    <Button
      type="button"
      text="Cancel"
      variant="text-primary"
      on:click={closeModal}
    />
    <Button
      type="button"
      text="Save"
      variant="solid-primary"
      on:click={submitForm}
    />
  </div>
</FullModal>