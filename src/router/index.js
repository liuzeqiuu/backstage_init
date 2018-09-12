import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/main.vue'
import Login from '../components/login.vue'
import businessManagement from '../views/userManagement/businessManagement.vue'
import moneyList from '../views/commonSetting/moneyList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login',
    }, {
      path: '/Login',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children:[
        {
          path: 'businessManagement',
          component: businessManagement
        }, {
          path: 'moneyList',
          component: moneyList
        }
      ]
    }
  ]
})
