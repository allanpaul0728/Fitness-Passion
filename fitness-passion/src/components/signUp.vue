<template>
  <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-4">
        <div class="signUpForm">
          <h2 class="signupHeader pt-4 mx-5">Register an Account</h2>
          <div v-if="validFName === 'false'" class="error">Kindly provide your full name</div>
        <div class="pt-4 me-5 mx-5 text-left">
          <label class="form-label">Full Name</label>
          <input type="email" class="form-control" v-model="fullname">
        </div>
        <div v-if="error === 'emailAdress'" class="error">Invalid email address</div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label class="form-label">Email Address</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div v-if="error === 'username'" class="error">Invalid username</div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label class="form-label">Username</label>
          <input type="email" class="form-control" v-model="username">
        </div>
        <div v-if="error === 'password'" class="error">Invalid password</div>
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
        <div class="pb-3 mt-3 mx-5 text-left">
          <button class="btn btn-secondary btn-md" v-on:click="Submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const BASE_APIUrl = 'https://3000-allanpaul07-fitnessenth-j4vy0aia5td.ws-us90.gitpod.io/'

export default {
  name: 'signUp',
  props: {
    msg: String
  },
  data: function() {
    return {
      fullname: "",
      email: "",
      username: "",
      password: "",
      error: []
    }
  },
  methods: {
    async Submit() {
      let postAccount = {
        'fullname': this.fullname,
        'email': this.email,
        'username': this.username,
        'password': this.password
      }
      await axios.post(BASE_APIUrl + "/accounts", postAccount);
    }
  },
  // computed: {
  //   validFname: function() {
  //     if (this.fullname.length >= 9) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // }
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

</style>
