<script>

</script>

<style lang="scss">
header {
  background: #fdfdfd;
  box-shadow: 0 3px 6px rgba(0,0,0,0.12);
  padding: 1.5rem 0;
  width: 100%;
}

h1 {
  font-size: 1.5rem;
  text-align: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90%;
}

.logo-container {
  background-color: #e49c15;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 2px;
    right: 2px;
  }
}

.burger div{
  background: #1c2026;
  border-radius: 8px;
  cursor: pointer;
  height: 3px;
  width: 25px;
  margin-bottom: 3px;
}
</style>

<header>
  <div class="container">
    <figure class="logo-container">
      <img src="images/letter-m.png" alt="logo">
    </figure>
    <h1>Meets</h1>
    <div class="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </div>
</header>