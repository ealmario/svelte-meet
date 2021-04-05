<script>
  export let meetup;
</script>

<div class="card">
  <figure class="card-header">
    <img src={meetup.imgUrl} alt="Meetup Item">
  </figure>
  <div class="card-body">
    <h5 class="name">{meetup.name}</h5>
    <h6>{meetup.subtitle}</h6>
    <p class="poster">Posted by:
      <a href="mailto:{meetup.contactEmail}">
        {meetup.contactPerson}
      </a> 
    </p>
    <div class="divider"></div>
    <p class="description">{meetup.description}</p>
    <p class="address">{meetup.address}</p>
  </div>
  <div class="card-footer">
    <button>See More</button>
    <button>Add to Favorites</button>
  </div>
</div>