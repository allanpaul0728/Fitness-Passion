<template>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-4">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" active-class="active" href="/metric">Metric</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" active-class="active" href="/USunit">US Unit</a>
            </li>
        </ul>
        <div id="bmi">
            <div class="pt-4 me-5 mx-5 text-left">
                <label class="form-label">Username</label>
                <input type="email" class="form-control" v-model="username">
            </div>
            <div class="mt-2 me-5 mx-5 text-left">
                <label class="form-label">Age</label>
                <input type="email" class="form-control" v-model="age">
            </div>
                <div class="pt-4 me-5 mx-5 text-left">
                    <label class="form-label">Gender</label>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" v-model="unit">
                    <label class="form-check-label" for="flexRadioDefault3">
                        Male
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" v-model="unit">
                    <label class="form-check-label" for="flexRadioDefault4">
                        Female
                    </label>
                    </div>
                </div>
                <div class="mt-2 me-5 mx-5 text-left">
                    <label class="form-label">Weight</label>
                    <input type="email" placeholder="must be in kg" class="form-control" v-model="weight">
                </div>
                <div class="mt-2 me-5 mx-5 text-left">
                    <label class="form-label">Height</label>
                    <input type="email" placeholder="must be in m" class="form-control" v-model="height">
                </div>
                <div class="pb-3 mt-3 mx-5 text-left">
                    <button v-on:click="BMIresult" class="btn btn-secondary btn-md">Calculate</button>
                </div>
                <div class="pt-4 pb-4 me-5 mx-5 text-left">
                <label class="form-label">BMI Result:</label>
                <!--  -->
                <div class="bmiOutput">{{ bmiOutput }}</div>
            </div>
            </div>
      </div>
    </div>
</template>

<script>

export default {
    name: "bmiMetric",
    data: function() {
        return {
            username: "",
            age:"",
            gender: "male",
            weight: "",
            height: "",
            bmiOutput: "",
        };
    },
    methods: {
        BMIresult() {
            const bmi = (this.weight / this.height ** 2).toFixed(2);

            if(bmi < 18.5 && bmi > 0) {
                this.bmiOutput = bmi + " " + '(Underweight)'
            } else if(bmi >= 18.5 && bmi < 24.9) {
                this.bmiOutput = bmi + " " + '(Normal)'
            } else if(bmi >= 24.9 && bmi < 29.9) {
                this.bmiOutput = bmi + " " + '(Overweight)'
            } else if(bmi >= 29.9) {
                this.bmiOutput = bmi + " " + '(Obese)'
            }
        } 
    },
};

</script>

<style>

#bmi {
    background-color: hsla(44,30%,47%,.60);
    margin: auto;
    /* border-radius: 25px; */
}
.bmiOutput {
    font-weight:600;
    font-size: 30px;
}

</style>