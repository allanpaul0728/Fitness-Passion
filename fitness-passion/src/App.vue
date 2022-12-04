<template>
  <div id="App">
    <section>
      <nav class="navbar navbar-expand-lg bg-light mb-3">
        <div class="container-fluid">
          <router-link to="/home" class="navbar-brand">Fitness Passion</router-link>        
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/home" class="nav-link active" active-class="active">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/metric" class="nav-link active" active-class="active">BMI Calculator</router-link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <router-link to="/signup">
              <button class="btn btn-outline-success" type="submit">SignUp</button>
              </router-link>
            </form>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
    };
  },
  components: {
    
  },
}
</script>

<style>
#App {
  background-image: url(assets/backgroundB.jpg);
  height: 140vh;
  width: 100%;
  background-size: cover;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
