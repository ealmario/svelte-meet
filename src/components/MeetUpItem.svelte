<script>
  import { createEventDispatcher } from 'svelte';
  import meetups from './../stores/meetup-store';
  export let meetup;

  const dispatch = createEventDispatcher();

  function toggleFavorite() {
		meetups.toggleFavorite(meetup.id);
	}
</script>

<style lang="scss">
.card {
  background: #fcfcfc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0, 0.12);
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
  height: 100px;
}

.card-header {
  border-radius: 8px 0 0 8px;
  margin-right: 0.75rem;
  width: 33%;
  height: 100%;
  overflow: hidden;

  img.meet-up-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card-body {
  color: #5c6672;
  font-size: 0.75rem;
  padding: 0.75rem 0.5rem 0.75rem 0;
  height: 100%;
  width: 67%;
}

.name {
  color: #1c2026;
  font-size: 0.875rem;
  font-weight: normal !important;
  letter-spacing: 0.25px;
}

.address {
  font-size: 0.75rem;
  letter-spacing: 0.25px;
  margin-bottom: 0.875rem;
}

.description {
  line-height: 15px;
  margin-top: 0.875rem;
}

.address,
.description {
  font-weight: bold !important;
}

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.icons {
  background: #f6b23c;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  position: absolute;
  transform: scale(0.8);
  transition: 300ms ease;

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
.add-to-fave {
  -webkit-mask: url('/images/heart.svg') no-repeat center;
  mask: url('/images/heart.svg') no-repeat center;
  top: 0.5rem;
  right: 0.5rem;
}

.is-favorite {
  -webkit-mask: url('/images/heart-f.svg') no-repeat center;
  mask: url('/images/heart-.svg') no-repeat center;
}

.delete-meetup {
  top: 0.5rem;
  right: 4.5rem;
  -webkit-mask: url('/images/trash-alt.svg') no-repeat center;
  mask: url('/images/trash-alt.svg') no-repeat center;
}

.edit-meetup {
  top: 0.5rem;
  right: 2.5rem;
  -webkit-mask: url('/images/pencil.svg') no-repeat center;
  mask: url('/images/pencil.svg') no-repeat center;
}

@media screen and (min-width: 768px) {
  .card-header {
    width: 25%;
  }

  .card-body {
    width: 75%;
  }
}
</style>

<div class="card">
  <figure class="card-header" on:click={() => dispatch('showDetails', meetup.id)}>
    <img src={meetup.imgUrl} alt="Meetup Item" class="meet-up-img">
  </figure>
  <div class="card-body">
    <button 
      class={`icons add-to-fave ${meetup.isFavorite && 'is-favorite'}`} 
      on:click={toggleFavorite}
    >
    </button>
    <button 
      class="icons edit-meetup"
      on:click={() => dispatch('editDetails', meetup.id)}
    >
    </button>
    <p class="name">{meetup.name}</p>
    <p class="address ellipsis">{meetup.address} | {meetup.schedule}</p>
    <p class="description ellipsis">{meetup.description}</p>
  </div>
</div>