<script>
    import { createEventDispatcher } from 'svelte';
    import { v4 as uuidv4 } from 'uuid';
    import meetups from './../stores/meetup-store';
    import { isEmpty, isValidEmail } from './../helpers/validation';
    import TextInput from './TextInput.svelte';
    import Button from './Button.svelte';
    import FullModal from './FullModal.svelte';
    import FieldSet from './FieldSet.svelte';

    export let id = null;

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
    

    if (id) {
      const unsubscribe = meetups.subscribe( items => {
        const selectedMeetup = items.find( item => item.id === id);
        meetup = {
          id: selectedMeetup.id,
          imgUrl: selectedMeetup.imgUrl,
          name: selectedMeetup.name,
          schedule: selectedMeetup.schedule,
          description: selectedMeetup.description,
          address: selectedMeetup.address,
          contactPerson: selectedMeetup.contactPerson,
          contactEmail: selectedMeetup.contactEmail,
          isFavorite: selectedMeetup.isFavorite
        }
      });

      unsubscribe();
    }

    const dispatch = createEventDispatcher();
    let isFormValid = false;
    let formMessage = false;
    
    const checkInput = () => {
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
      const meetupData = meetup;
      checkInput();
      if (isFormValid) {
        if (id) {
          fetch(`https://svelte-project-fdc9a-default-rtdb.firebaseio.com/meetups/${id}.json`, {
            // Overwrite data but keep the rest
            method: 'PATCH',
            body: JSON.stringify(meetupData),
            headers: { 'Content-Type' : 'application/json'}
          })
          .then( res => {
            if (!res.ok) {
              throw new Error('Response Failed');
            }
              meetups.updateMeetup(id, meetupData);
          })
          .catch( err => console.log(err));
        } else {
          fetch('https://svelte-project-fdc9a-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify({...meetupData, isFavorite: false}),
            headers: { 'Content-Type' : 'application/json'}
          })
          .then(res => {
            if (!res.ok) {
              throw new Error('Response Failed');
            }
            return res.json();
          })
          .then(data => {
            meetups.addMeetUp({...meetupData, isFavorite: false, id: data.name});
            console.log(data);
          })
          .catch(err => console.log(err));
        }
        dispatch('save', meetups);
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

    function deleteMeetup() {
      fetch(`https://svelte-project-fdc9a-default-rtdb.firebaseio.com/meetups/${id}.json`, {
        method: 'DELETE'
      })
      .then(res => {
        if (!res.ok) throw new Error('Response Failed');
        meetups.deleteMeetup(id);
      })
      .catch(err => console.log(err));
      dispatch('save');
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

  .delete-meetup {
    background: #f6b23c;
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
    position: absolute;
    top: 1.25rem;
    right: 1rem;
    transform: scale(0.8);
    transition: 300ms ease;
    -webkit-mask: url('/images/trash-alt.svg') no-repeat center;
    mask: url('/images/trash-alt.svg') no-repeat center;

    &:focus {
      outline: none;
    }

    &:hover {
      background: #f1a727;
    }

    &:active {
      background: #da9010;
    }
  }
</style>

<FullModal title={id === null ? 'Add Event' : 'Edit Event'} on:close>
  {#if id !== null}
    <button class="delete-meetup" on:click={deleteMeetup}></button>
  {/if}
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
        content={meetup.description}
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