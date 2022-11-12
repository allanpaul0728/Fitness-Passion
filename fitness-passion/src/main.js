import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import homeView from '@/components/homeView'
import loginView from '@/components/loginView'
import bmiCalc from '@/components/bmiCalc'
import bmiMetric from '@/components/bmiMetric'
import bmiUS from '@/components/bmiUS'
import workoutsProg from '@/components/workoutsProg'

import store from './store'

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({

  mode: "history",

  routes: [
      {
          path: "/",
          name: "home",
          component: homeView
      },
      {
          path: "/",
          name: "login",
          component: loginView
      },
      {
          path: "/",
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
          path: "/muscle",
          name: "muscle",
          component: workoutsProg
      }
  ]
});


new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
