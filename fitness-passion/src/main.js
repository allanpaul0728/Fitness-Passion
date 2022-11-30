import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import homeView from './components/homeView'
import signUp from './components/signUp'
import bmiCalc from './components/bmiCalc'
import bmiMetric from './components/bmiMetric'
import bmiUS from './components/bmiUS'
import addExercise from './components/addExercise'
import updateExer from './components/updateExer'
import workoutsProg from './components/workoutsProg'

import store from './store'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {
        path: "/home",
        name: "homeView",
        component: homeView
    },
    {
        path: "/signup",
        name: "signup",
        component: signUp
    },
    {
        path: "/bmi",
        name: "bmi",
        component: bmiCalc
    },
    {
        path: "/metric",
        name: "bmiMetric",
        component: bmiMetric
    },
    {
        path: "/USunit",
        name: "bmiUS",
        component: bmiUS
    },
    {
        path: "/workouts",
        name: "workouts",
        component: workoutsProg
    },
    {
        path: "/post",
        name: "addExercise",
        component: addExercise
    },
    {
        path: "/updateworkout/:workoutId",
        name: "updateExer",
        component: updateExer
    }
  ]

const router = new VueRouter({
    mode: "history",
    routes
  });


new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
