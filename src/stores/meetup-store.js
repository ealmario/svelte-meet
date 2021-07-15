import { writable } from 'svelte/store';

const meetups = writable([]);

function setMeetups(meetupArray) {
  meetups.set(meetupArray);
}

function addMeetUp(meetupData) {
  const newMeetUp = {
    ...meetupData,
    // id: uuidv4() Remove this since we're getting the ID from what Firebase returns
    // isFavorite: false Remove isFavorite and transfer to fetch in EditMeetUp
  }
  meetups.update( items => {
    return [newMeetUp, ...items];
  })
}

function updateMeetup(id, meetupData) {
  meetups.update( items => {
    const meetupIndex = items.findIndex( item => item.id === id);
    const updatedMeetup = { ...items[meetupIndex], ...meetupData };
    const updatedMeetups = [...items, ]
    updatedMeetups[meetupIndex] = updatedMeetup;
    return updatedMeetups;
  })
}

function deleteMeetup(id) {
  meetups.update( items => {
    return items.filter(item => item.id !== id);
  })
}

function toggleFavorite (id) {
  meetups.update( items => {
    // Copy meetup array before updating
    const updatedMeetup = {...items.find(meetup => meetup.id === id)};
    // Toggle isFavorite
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
    // Get the index of the meetup
    const meetupIndex = items.findIndex(meetup => meetup.id === id);
    // Create a copy of meetups and update the specific meetup
    const updatedMeetups = [...items];
    updatedMeetups[meetupIndex] = updatedMeetup;
    return updatedMeetups;
  })
}

const customMeetupsStore = {
  subscribe: meetups.subscribe,
  setMeetups: setMeetups,
  updateMeetup,
  addMeetUp,
  deleteMeetup,
  toggleFavorite
};

export default customMeetupsStore;
