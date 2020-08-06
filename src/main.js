import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import lodash from 'lodash'

import { utils } from '@/mixins/utils'

// eslint-disable-next-line no-unused-vars
//import Global from '@/components/_global'

//import HelloWorld from "@/components/HelloWorld";
//Vue.component('HelloWorld', HelloWorld)

import Nav from "@/components/Nav";
import Question from "@/components/Question";
import QuestionAdmin from "@/components/QuestionAdmin";


Vue.component('Nav', Nav)
Vue.component('Question', Question)
Vue.component('QuestionAdmin', QuestionAdmin)


Vue.config.productionTip = false

Vue.prototype.$http = axios;
Vue.prototype._ = lodash;
Vue.mixin(utils)
Vue.prototype.EventBus = EventBus;
Vue.prototype.ApiURL ="http://localhost:8080/survey/"

const EventBus = new Vue({
  methods: {

  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
