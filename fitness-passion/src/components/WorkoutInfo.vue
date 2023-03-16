<template>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-4">
        <h3 class="workout-title">{{ workout.muscle }}</h3>
        <img src="workout.url" class="card-img-top" height="400px" width="200px"/>
        <ul class="list-group mb-2">
            <li class="list-group-item" v-for="e in workout" v-bind:key="e.id">
                <ul class="list-group">
                    <li class="list-group-item" v-for="v in e.workout" v-bind:key="v.id">
                        <p>Description:{{ v.description }}</p>
                        <p>Difficulty:{{ v.difficulty }}</p>
                        <p>Duration:{{ v.duration }}</p>
                        <p>Repetitions:{{ v.repetitions }}</p>
                        <p>Sets:{{ v.sets }}</p>
                        <p>Equipment:{{ v.equipment }}</p>
                        <p>Rest Time:{{ v.rest_time }}</p>
                        <p>Procedure:{{ v.procedure }}</p>
                        <p>Photo Url{{ v.photo_url }}</p>
                        <p>Workout Rate{{ v.workout_rate }}</p>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
const baseAPIUrl="https://3000-allanpaul07-fitnessenth-j4vy0aia5td.ws-us90.gitpod.io/";
export default {
    name: 'WorkoutInfo',
    async created() {
        const workoutId = this.$route.params.workoutId;
        const response = await axios.get(baseAPIUrl + "/" + workoutId);
        this.workout = response.data
    },
    data: function () {
        return {
           workout: {}
        }
    }
};
</script>

<style scoped>
</style>