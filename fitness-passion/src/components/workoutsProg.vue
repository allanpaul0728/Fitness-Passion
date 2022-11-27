<template>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-4">
        <div class="workprog">
            <h1>Your Program</h1>
            <ul>
                <li v-for="w in $store.getters.workouts" v-bind:key="w.id">
                <ul>
                    <li v-for="v in w.workout" v-bind:key="v.id">
                {{ v.exercise_name }} 
                </li>
                </ul>
                </li>
            </ul>
            <!-- {{ workouts }} -->
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'workoutsProg',
    data: function () {
        return {
            // workouts: this.$store.state.workouts.length
        }
    },
    computed: {
        ...mapGetters(['filteredWorkouts'])
    },
    mounted() {
        this.filteredWorkouts({chest:true})
        console.log(this.filteredWorkouts({chest:true}))
    }
};

</script>

<style scoped>
.workprog {
    color: white;
}

</style>