<script>
  import Button from './Button.svelte';
  export let meetup;
</script>

<style lang="scss">
.card {
  background: #fcfcfc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0, 0.12);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  margin-bottom: 1rem;
  width: 90%;
  height: 100px;
}

.card-header {
  border-radius: 8px 0 0 8px;
  margin-right: 0.75rem;
  width: 25%;
  height: 100%;
  overflow: hidden;

  img.meet-up-img {
    width: 100%;
    height: 100%;
  }
}

.card-body {
  color: #5c6672;
  font-size: 0.75rem;
  padding: 0.75rem 0.5rem 0.75rem 0;
}

.name {
  color: #1c2026;
  font-size: 0.875rem;
  font-weight: bolder;
  letter-spacing: 0.25px;
}

.address {
  font-size: 0.75rem;
  letter-spacing: 0.25px;
  margin-bottom: 0.875rem;
}

.description {
  font-weight: normal;
  line-height: 15px;
}
</style>

<div class="card">
  <figure class="card-header">
    <img src={meetup.imgUrl} alt="Meetup Item" class="meet-up-img">
  </figure>
  <div class="card-body">
    <h5 class="name">{meetup.name}</h5>
    <h6 class="address">{meetup.address}</h6>
    <!-- <h6>{meetup.subtitle}</h6> -->
    <!-- <p class="poster">Posted by:
      <a href="mailto:{meetup.contactEmail}">
        {meetup.contactPerson}
      </a> 
    </p> -->
    <!-- <div class="divider"></div> -->
    <p class="description">{meetup.description}</p>
    <!-- <p class="address">{meetup.address}</p> -->
  </div>
  <!-- <div class="card-footer">
    <Button type="button" text="See More"/>
    <Button type="button" text="Add to Favorites"/>
  </div> -->
</div>