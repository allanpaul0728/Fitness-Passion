<template>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-4">
        <div class="workprog">
            <h1>Your Program</h1>
            <ul>
                <li v-for="w in $store.getters.workouts" v-bind:key="w.id">
                {{ w.target_muscle}} 
                </li>
            </ul>
            <!-- {{ workouts }} -->
        </div>
      </div>
    </div>
</template>

<script>

export default {
    name: 'workoutsProg',
    data: function () {
        return {
            // workouts: this.$store.state.workouts.length
        }
    },
};

</script>

<style scoped>
.workprog {
    color: white;
}

</style>