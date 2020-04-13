import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../views/TodoList.vue'
import TodoItemById from '../views/TodoItemById.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path:'/todoitem/:id',
    name:'TodoItemById',
    component: TodoItemById
  },
]

const router = new VueRouter({
  routes
})

export default router
