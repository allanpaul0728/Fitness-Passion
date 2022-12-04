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
            <input class="form-check-input" :class="muscleChest" type="checkbox" v-model="chest" value="chest" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Chest
            </label>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="upperchest" value="upperchest" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Upper Chest
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="midchest" value="midchest" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Mid Chest
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="lowerchest" value="lowerchest" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Lower Chest
            </label>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="shoulder" value="shoulder" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Shoulder
            </label>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="frontdelt" value="frontdelt" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Front Delt
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="middelt" value="middelt" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Mid Delt
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="reardelt" value="reardelt" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Rear Delt
            </label>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="back" value="back" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Back
            </label>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="upperback" value="upperback" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Upper Back
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="midandlowerback" value="midandlowerback" id="flexCheckDefault">
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
          <router-link to="/WorkoutInfo">
          <button class="btn btn-secondary btn-md">Submit</button>
          </router-link>
        </div>
        <!-- <workoutsProg/> -->
        <!-- <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-4">
            <div class="mt-3" v-for="(w, index) in searchFilter" v-bind:key="index">
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
        </div> -->
      </div>
        </div>
        </div>
  </template>
  
  <script>
  import axios from 'axios'
  const baseAPIUrl="http://localhost:3000"
  
  export default {
    name: 'homeView',
    data: function() {
      return {
        workouts: [],
        fullname: "",
        emailaddress: "",
        username: "",
        gender: "male",
        fitnessgoal: "",
        difficulty: "",
        chest: false,
        upperchest: false,
        midchest: false,
        lowerchest: false,
        shoulder: false,
        frontdelt: false,
        middelt: false,
        reardelt: false,
        back: false,
        upperback: false,
        midandlowerback: false,
        biceps: false,
        triceps: false,
        legs: false,
        forearm: false,
        abdominal: false,
      };
    },
    computed: {
    searchFilter() {
      return this.workouts
        .filter((w) => {
          console.log(w)
          if (this.chest && this.chest && this.back && this.biceps && this.triceps && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
              w.program.includes("biceps") || w.program.includes("triceps") || w.program.includes("legs") ||
              w.program.includes("forearm") || w.program.includes("abdominal");
          }
          // Start of 7 Programs
          if (this.chest && this.shoulder && this.back && this.biceps && this.triceps && this.legs && this.forearm) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("biceps") || w.program.includes("triceps") || w.program.includes("legs") ||
            w.program.includes("forearm");
          }
          if (this.chest && this.shoulder && this.back && this.biceps && this.triceps && this.legs && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("biceps") || w.program.includes("triceps") || w.program.includes("legs") ||
            w.program.includes("abdominal");
          }
          if (this.chest && this.shoulder && this.back && this.biceps && this.triceps && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("biceps") || w.program.includes("triceps") || w.program.includes("forearm") ||
            w.program.includes("abdominal");
          }
          if (this.chest && this.shoulder && this.back && this.biceps && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("biceps") || w.program.includes("legs") || w.program.includes("forearm") ||
            w.program.includes("abdominal");
          }
          if (this.chest && this.shoulder && this.back && this.triceps && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("triceps") || w.program.includes("legs") || w.program.includes("forearm") ||
            w.program.includes("abdominal");
          }
          if (this.chest && this.shoulder && this.biceps && this.triceps && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("biceps") ||
            w.program.includes("triceps") || w.program.includes("legs") || w.program.includes("forearm") ||
            w.program.includes("abdominal");
          }
          if (this.chest && this.back && this.biceps && this.triceps && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("back") || w.program.includes("biceps") ||
            w.program.includes("triceps") || w.program.includes("legs") || w.program.includes("forearm") ||
            w.program.includes("abdominal");
          }
          if (this.shoulder && this.back && this.biceps && this.triceps && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("shoulder") || w.program.includes("back") || w.program.includes("biceps") ||
            w.program.includes("triceps") || w.program.includes("legs") || w.program.includes("forearm") ||
            w.program.includes("abdominal");
          }
          // End of 7 Programs
          // Start of 6 Programs
          if (this.chest && this.shoulder && this.back && this.biceps && this.triceps && this.legs) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("biceps") || w.program.includes("triceps") || w.program.includes("legs");
          }
          if (this.chest && this.shoulder && this.back && this.biceps && this.triceps && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("biceps") || w.program.includes("triceps") || w.program.includes("abdominal");
          }
          if (this.chest && this.shoulder && this.back && this.biceps && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("biceps") || w.program.includes("forearm") || w.program.includes("abdominal");
          }
          if (this.chest && this.shoulder && this.back && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("legs") || w.program.includes("forearm") || w.program.includes("abdominal");
          }
          if (this.chest && this.shoulder && this.triceps && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("triceps") ||
            w.program.includes("legs") || w.program.includes("forearm") || w.program.includes("abdominal");
          }
          if (this.chest && this.biceps && this.triceps && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("biceps") || w.program.includes("triceps") ||
            w.program.includes("legs") || w.program.includes("forearm") || w.program.includes("abdominal");
          }
          if (this.back && this.biceps && this.triceps && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("back") || w.program.includes("biceps") || w.program.includes("triceps") ||
            w.program.includes("legs") || w.program.includes("forearm") || w.program.includes("abdominal");
          }
          // End of 6 Programs
          // Start of 5 Programs
          if (this.chest && this.shoulder && this.back && this.biceps && this.triceps) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("biceps") || w.program.includes("triceps");
          }
          if (this.chest && this.shoulder && this.back && this.biceps && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("biceps") || w.program.includes("abodminal");
          }
          if (this.chest && this.shoulder && this.back && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("forearm") || w.program.includes("abodminal");
          }
          if (this.chest && this.shoulder && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("legs") ||
            w.program.includes("forearm") || w.program.includes("abodminal");
          }
          if (this.chest && this.triceps && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("triceps") || w.program.includes("legs") ||
            w.program.includes("forearm") || w.program.includes("abodminal");
          }
          if (this.biceps && this.triceps && this.legs && this.forearm && this.abdominal) {
            return w.program.includes("biceps") || w.program.includes("triceps") || w.program.includes("legs") ||
            w.program.includes("forearm") || w.program.includes("abodminal");
          }
          // End of 5 Programs
          // Start of 4 Programs
          if (this.chest && this.shoulder && this.back && this.biceps) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("biceps");
          }
          if (this.chest && this.shoulder && this.back && this.abdominal) {
            return w.program.includes("chest") || w.program.includes("shoulder") || w.program.includes("back") ||
            w.program.includes("abdominal");
          }
          if (this.chest) {
            return w.program.includes("chest");
          }
          if (this.shoulder) {
            return w.program.includes("shoulder");
          }
          if (this.back) {
            return w.program.includes("back");
          }
          return true;
        })
        .filter((w) => {
          if (this.Difficulty != "" ) {
            return (w.difficulty) <= this.difficulty;
          }
          return true;
        });
    },
    muscleChest() {
      return this.chest
      .filter((c) => {
        console.log(c)
        if (this.upperchest && this.midchest && this.lowerchest) {
          return c.chest.includes("upper chest") || c.chest.includes("mid chest") || c.chest.includes("lower chest")
        } else if (this.upperchest && this.midchest) {
          return c.chest.includes("upper chest") || c.chest.includes("mid chest")
        }
      })
    }
  },
  methods: {},
  async created() {
    const response = await axios.get(baseAPIUrl + "/workout");
    this.workout = response.data;
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .loginForm {
    background-color: hsla(44,30%,47%,.60);
    margin: auto;
    border-radius: 25px;
  }
  </style>
  