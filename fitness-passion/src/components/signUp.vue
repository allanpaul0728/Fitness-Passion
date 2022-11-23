<template>
  <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-4">
        <div class="signUpForm">
          <h2 class="signupHeader pt-4 mx-5">Register an Account</h2>
        <div class="pt-4 me-5 mx-5 text-left">
          <label class="form-label">Full Name</label>
          <input type="email" class="form-control" v-model="fullname">
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label class="form-label">Email Address</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label class="form-label">Username</label>
          <input type="email" class="form-control" v-model="username">
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label class="form-label">Password</label>
          <input type="email" class="form-control" v-model="password">
        </div>
        <div class="mt-2 mx-5 pb-4 text-left">
          <label class="form-label">Gender</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label class="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signUpForm {
    background-color: hsla(44,30%,47%,.60);
    /* height: 95%;
    width: 30%; */
    /* margin-top: 20px;
    margin-left: 25px; */
    margin: auto;
    border-radius: 25px;
  }
/* h3 {
  margin: 40px 0 0;
} */
/* ul {
  list-style-type: none;
  padding: 0;
} */
/* li {
  display: inline-block;
  margin: 0 10px;
} */
/* a {
  color: #42b983;
} */
</style>
