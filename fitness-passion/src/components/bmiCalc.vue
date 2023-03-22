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
    </div>
</div>
</template>

<script>

export default {
    name: "bmiCalc",
    data: function() {
        return {
            username: "",
            age:"",
            gender: "male",
            weight: "",
            height: "",
            bmi: 0,
        };
    }
}

</script>

<style>

#bmi {
    background-color: hsla(44,30%,47%,.60);
    margin: auto;
}
.nav-item {
    color: black;
    font-weight: 10px;
    color: white;
}

</style>