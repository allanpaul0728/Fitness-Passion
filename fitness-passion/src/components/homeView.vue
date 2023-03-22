<template>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-4">
        <div class="loginForm">
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
        <div class="mt-2 mx-5 text-left">
          <label class="form-label">Gender</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="gender">
            <label class="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="gender">
            <label class="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>
        </div>
        <div class="mt-2 mx-5 me-5 text-left">
          <label for="Goal">Fitness Goal</label>
          <select class="form-select" aria-label="Fitness Goal">
            <option selected></option>
            <option value="1">Lose Weight</option>
            <option value="2">Gain Weight</option>
            <option value="3">Lean Muscle</option>
            <option value="4">Bulky Muscle</option>
          </select>
        </div>
        <div class="mt-2 mx-5 me-5 text-left">
          <label for="Intensity">Difficulty</label>
          <select class="form-select" aria-label="Difficulty">
            <option selected></option>
            <option value="1">Beginner</option>
            <option value="2">Intermediate</option>
            <option value="3">Advanced</option>
          </select>
        </div>
        <div class="mt-2 mx-5 text-left">
          <label class="form-label">Program</label>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="chest" @change="toggleChest" value="chest" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Chest
            </label>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="upperchest" @change="toggleSubChest" value="upperchest" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Upper Chest
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="midchest" @change="toggleSubChest" value="midchest" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Mid Chest
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="lowerchest" @change="toggleSubChest" value="lowerchest" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Lower Chest
            </label>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="shoulder" @change="toggleShoulder" value="shoulder" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Shoulder
            </label>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="frontdelt" @change="toggleSubShoulders" value="frontdelt" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Front Delt
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="middelt" @change="toggleSubShoulders" value="middelt" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Mid Delt
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="reardelt" @change="toggleSubShoulders" value="reardelt" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Rear Delt
            </label>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="back" @change="toggleBack" value="back" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Back
            </label>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="upperback" @change="toggleSubBacks" value="upperback" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Upper Back
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="midandlowerback" @change="toggleSubBacks" value="midandlowerback" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Mid & Lower Back
            </label>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="biceps" value="biceps" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Biceps
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="triceps" value="tricpes" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Triceps
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="legs" value="legs" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckDefault">
              Legs
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="forearm" value="forearm" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckDefault">
              Forearm
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="abdominal" value="abdominal" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckDefault">
              Abdominal
            </label>
          </div>
        </div>
        <div class="pb-3 mt-3 mx-5 text-left">
          <!-- <router-link to="/WorkoutInfo"> -->
          <button class="btn btn-secondary btn-md" @click="searchFilter">Submit</button>
          <!-- </router-link> -->
        </div>
        <!-- <workoutsProg/> -->
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-4">
            <div class="mt-3" v-for="(w, index) in workouts" v-bind:key="index">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">{{ w.muscle }}</h3>
                  <img src="w.url" class="card-img-top" height="400px" width="200px"/>
                  <p class="card-text">{{ w.targetMuscle }}</p>
                  <router-link v-bind:to="'/workout/' + w._id">
                    <button class="btn btn-success">Show</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        </div>
  </template>
  
  <script>
  import axios from 'axios'
  const baseAPIUrl="https://3000-allanpaul07-fitnessenth-j4vy0aia5td.ws-us90.gitpod.io/"
  
  export default {
    name: 'homeView',
    props: 'workouts',
    data: function() {
      return {
        workouts: [],
        fullname: "",
        emailaddress: "",
        username: "",
        gender: "male",
        fitnessgoal: "",
        difficulty: "",
        program: "",
        chest: [],
        upperchest: [],
        midchest: [],
        lowerchest: [],
        shoulder: [],
        frontdelt: [],
        middelt: [],
        reardelt: [],
        back: [],
        upperback: [],
        midandlowerback: [],
        biceps: [],
        triceps: [],
        legs: [],
        forearm: [],
        abdominal: [],
      };
    },
  methods: {
    toggleChest() {
      if(this.chest) {
        this.upperchest = true,
        this.midchest = true,
        this.lowerchest = true
      } else {
        this.upperchest = false,
        this.midchest = false,
        this.lowerchest = false 
      }
    },
    toggleSubChest(){
      if(!this.upperchest) {
        return this.chest = false
      }
      if(!this.midchest) {
        return this.chest = false
      }
      if(!this.lowerchest) {
        return this.chest = false
      }
      if(!this.upperchest || this.midchest || this.lowerchest) {
        return this.chest = true
      }
    },
    toggleShoulder() {
      if(this.shoulder) {
        this.frontdelt = true,
        this.middelt = true,
        this.reardelt = true
      } else {
        this.frontdelt = false,
        this.middelt = false,
        this.reardelt = false 
      }
    },
    toggleSubShoulders(){
      if(!this.frontdelt) {
        return this.shoulder = false
      }
      if(!this.middelt) {
        return this.shoulder = false
      }
      if(!this.reardelt) {
        return this.shoulder = false
      }
      if(!this.frontdelt || this.middelt || this.reardelt) {
        return this.shoulder = true
      }
    },
    toggleBack() {
      if(this.back) {
        this.upperback = true,
        this.midandlowerback = true
      } else {
        this.upperback = false,
        this.midandlowerback = false
      }
    },
    toggleSubBacks(){
      if(!this.upperback) {
        return this.back = false
      }
      if(!this.midandlowerback) {
        return this.back = false
      }
      if(!this.upperback || this.midandlowerback) {
        return this.back = true
      }
    },
    async searchFilter() {
      console.log("random")

      // const response = await axios.get(baseAPIUrl + 'workouts');

      let response = await axios.post(baseAPIUrl + 'workouts', {
        'programChest': this.chest.toString(),
        'programUpperChest': this.upperchest.toString(),
        'programMidChest': this.midchest.toString(),
        'programLowerChest': this.lowerchest.toString(),
        'programShoulder': this.shoulder.toString(),
        'programFrontDelt': this.frontdelt.toString(),
        'programMidDelt': this.middelt.toString(),
        'programRearDelt': this.reardelt.toString(),
        'programBack': this.back.toString(),
        'programUpperBack': this.upperback.toString(),
        'programMidandLowerBack': this.midandlowerback.toString(),
        'programBiceps': this.biceps.toString(),
        'programTriceps': this.triceps.toString(),
        'programLegs': this.legs.toString(),
        'programForearm': this.forearm.toString(),
        'programAbdominal': this.abdominal.toString(),
        
      });
      this.workouts = response.data
    }
  },
  async created() {
    let response = await axios.get(baseAPIUrl + 'workouts');
    this.workouts = response.data;
  },
}  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .loginForm {
    background-color: hsla(44,30%,47%,.60);
    margin: auto;
    border-radius: 25px;
    font-weight: 1.5rem;
  }
  </style>
  