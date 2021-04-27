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
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
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
  height: 100%;
  width: 75%;
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

.add-to-fave {
  // fill: #f6b23c;
  cursor: pointer;
  top: 0.5rem;
  right: 0.5rem;
  height: 0.875rem;
  width: 0.875rem;
  position: absolute;
}
</style>

<div class="card">
  <figure class="card-header">
    <img src={meetup.imgUrl} alt="Meetup Item" class="meet-up-img">
  </figure>
  <div class="card-body">
    <img src="images/heart.svg" alt="heart icon" class="add-to-fave">
    <p class="name">{meetup.name}</p>
    <p class="address ellipsis">{meetup.address}</p>
    <!-- <h6>{meetup.subtitle}</h6> -->
    <!-- <p class="poster">Posted by:
      <a href="mailto:{meetup.contactEmail}">
        {meetup.contactPerson}
      </a> 
    </p> -->
    <!-- <div class="divider"></div> -->
    <p class="description ellipsis">{meetup.description}</p>
    <!-- <p class="address">{meetup.address}</p> -->
  </div>
  <!-- <div class="card-footer">
    <Button type="button" text="See More"/>
    <Button type="button" text="Add to Favorites"/>
  </div> -->
</div>