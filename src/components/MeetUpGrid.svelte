<script>
  import { v4 as uuidv4 } from 'uuid';
  import MeetUpItem from './MeetUpItem.svelte';

  const meetups = [
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
</script>

<div class="meetup-grid">
  {#each meetups as meetup}
	  <MeetUpItem meetup={meetup} />
  {/each}
</div>