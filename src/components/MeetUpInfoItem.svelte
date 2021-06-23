<script>
  export let icon;
  export let header;
  export let lead;

  function iconType () {
    switch (icon) {
      case 'schedule':
      return location;
      case 'schedule':
      return 'calendar';
    }
  }
</script>

<style lang="scss">
  .m-info-item_container {
    background: #fcd99c;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
  }

  .m-info-item_icon {
    background: #da9010;
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
  }

  .calendar {
    -webkit-mask: url('/images/calendar.svg') no-repeat center;
    mask: url('/images/calendar.svg') no-repeat center;
  }

  .location {
    -webkit-mask: url('/images/map-marker-f.svg') no-repeat center;
    mask: url('/images/map-marker-f.svg') no-repeat center;
  }

  .price {
    -webkit-mask: url('/images/coin.svg') no-repeat center;
    mask: url('/images/coin.svg') no-repeat center;
  }
</style>

<div class="m-info-item_container">
  <div class="m-info-item_icon-container">
    <div class={`m-info-item_icon ${iconType}`}></div>
  </div>
  <div class="m-info-item_details">
    <h6 class="m-info-item_header">{header}</h6>
    <p class="m-info-item_lead">{lead}</p>
  </div>
</div>