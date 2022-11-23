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
            <input class="form-check-input" type="checkbox" v-on:check="muscle" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Chest
            </label>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-on:check="muscle" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Upper Chest
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-on:check="muscle" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Mid Chest
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-on:check="muscle" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Lower Chest
            </label>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Shoulder
            </label>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-on:check="muscle" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Front Delt
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-on:check="muscle" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Mid Delt
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-on:check="muscle" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Rear Delt
            </label>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Back
            </label>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-on:check="muscle" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Upper Back
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" v-on:check="muscle" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Mid & Lower Back
            </label>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Biceps
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="muscle" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Triceps
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="muscle" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckDefault">
              Legs
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="muscle" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckDefault">
              Forearm
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="muscle" id="flexCheckChecked">
            <label class="form-check-label" for="flexCheckDefault">
              Abdominal
            </label>
          </div>
        </div>
        <div class="pb-3 mt-3 mx-5 text-left">
          <router-link to="/workouts">
          <button class="btn btn-secondary btn-md">Submit</button>
          </router-link>
        </div>
        <!-- <workoutsProg/> -->
      </div>
        </div>
        </div>
  </template>
  
  <script>
  // import workoutsProg from './workoutsProg'
  
  export default {
    name: 'homeView',
    data: function() {
      return {
        fullname: "",
        emailaddress: "",
        username: "",
        gender: "male",
        fitnessgoal: "",
        difficulty: "",
        chest: true,
        shoulder: true,
        back: true,
        biceps: true,
        triceps: true,
        legs: true,
        forearm: true,
        abdominal: true,
      };
    },
    // components: {
    //   workoutsProg,
    // },
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
  },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .loginForm {
    background-color: hsla(44,30%,47%,.60);
    /* height: 95%;
    width: 30%; */
    /* margin-top: 20px;
    margin-left: 25px; */
    margin: auto;
    border-radius: 25px;
  }
  
  /* div {
    display: block;
  } */
  
  /* @media (min-width: 280px) {
    .loginForm {
      background-color: hsla(44,30%,47%,.75);
      height: 90%;
      width: 25%;
      margin: auto;
      border-radius: 25px;
    }
  } */
  
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
  