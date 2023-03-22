<template>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-4">
        <div class="editWorkoutRoutine">
        <div class="pt-4 me-5 mx-5 text-left">
          <label class="form-label">Target Muscle</label>
          <input type="target_muscle" class="form-control" v-model="targetMuscle">
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label for="exampleFormControlTextarea1" class="form-label">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows ="3" v-model="description"></textarea>
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label class="form-label">Difficulty</label>
          <input type="difficulty" class="form-control" v-model="difficulty">
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label class="form-label">Repititions</label>
          <input type="repetitions" class="form-control" v-model="repititions">
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label class="form-label">Sets</label>
          <input type="sets" class="form-control" v-model="sets">
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label class="form-label">Equipment</label>
          <input type="equipment" class="form-control" v-model="equipment">
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label class="form-label">Rest Time</label>
          <input type="rest_time" class="form-control" v-model="restTime">
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label for="exampleFormControlTextarea2" class="form-label">Procedure</label>
          <textarea class="form-control" id="exampleFormControlTextarea2" rows ="3" v-model="procedure"></textarea>
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label class="form-label">Photo Url</label>
          <input type="photo_url" class="form-control" v-model="photoUrl">
        </div>
        <div class="mt-2 me-5 mx-5 text-left">
          <label class="form-label">Workout Rate</label>
          <input type="workout_rate" class="form-control" v-model="workoutRate">
        </div>
        <div class="pb-3 mt-3 mx-5 text-left">
          <button class="btn btn-secondary btn-md" v-on:click="editPostedData">Update</button>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import workoutsProg from './workoutsProg'
  import axios from 'axios'
  const BASE_APIUrl="http://localhost:3000"
  
  export default {
    name: 'updateExer',
    data: function() {
      return {
        targetMuscle: "",
        description: "",
        difficulty: "",
        repititions: "",
        sets: "",
        equipment: "",
        restTime: "",
        procedure: "",
        photoUrl: "",
        workoutRate: "",
      };
    },
    async created() {
        const response = await axios.get(BASE_APIUrl + "/workout/" + this.$route.params.workoutId);
        this.workout = response.data;
    },
    methods: {
         async editPostedData(params) {
            const postWorkoutData = {
                targetMuscle: this.targetMuscle,
                description: this.description,
                difficulty: this.difficulty,
                repititions: this.repititions,
                sets: this.sets,
                equipment: this.equipment,
                restTime: this.restTime,
                procedure: this.procedure,
                photoUrl: this.photoUrl,
                workoutRate: this.workoutRate,
                name: params.name,
            };
            try {
                await axios.put(BASE_APIUrl + "/", this.$route.params.workoutId, postWorkoutData)
            } catch (e) {
                console.log("Failed to post new workout");
            }
            this.$router.push("/");
         }
    }
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
  </style>
  