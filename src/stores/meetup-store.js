import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

const meetups = writable([
  {
    id: uuidv4(),
    imgUrl: 'https://images.summitmedia-digital.com/esquiremagph/images/2019/03/13/WeWork_MAIN_Mar2019.jpg',
    name: 'Coding Bootcamp',
    schedule: 'May 3, 2021',
    description: 'In this meetup, we will have experts that would teach you how to code',
    address: '724 Kayla Branch' ,
    contactPerson: 'Johanna Larson',
    contactEmail: 'jlarson@code.com',
    isFavorite: false
  },
  {
    id: uuidv4(),
    imgUrl: 'https://bigseventravel.com/wp-content/uploads/2019/09/Blocleaf-Cafe%CC%81.jpeg',
    name: 'Coffee Workshop',
    schedule: 'June 20, 2021',
    description: 'Learn the different types of brewing methods and create the perfect cup even at home! Workshop is from 3pm - 5pm on Zoom and FB Live.',
    address: 'Apt. 818 47298 Kertzmann Summit Cubao',
    contactPerson: 'Jennie Pfeffer',
    contactEmail: 'jennie,pfeffer@coffeeworks.com',
    isFavorite: false
  },
]);

function addMeetUp(meetupData) {
  const newMeetUp = {
    ...meetupData,
    id: uuidv4(),
    isFavorite: false
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
  updateMeetup,
  addMeetUp,
  deleteMeetup,
  toggleFavorite
};

export default customMeetupsStore;
