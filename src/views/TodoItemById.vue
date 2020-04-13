<template>
  <div class="list-wrap">
    <button @click="save">save</button>
    <AddTodoItem @addItem="pushItem"/>
    <TodoItem :item="curentTodo.todos" @removeItem="deleteItem"/>
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem"
import AddTodoItem from "../components/AddTodoItem"

export default {
  components: {
    TodoItem,
    AddTodoItem
  },
  data(){
    return {
      curentTodo:{}
    }
  },
  created () {
    if (localStorage.getItem('allList')){
      this.listOfTodos = JSON.parse(localStorage.getItem('allList') || [])
      let id = this.$route.params.id
      this.curentTodo = this.listOfTodos.find(function(element){
        if(element.id == id) {
          return element
        }
        return false
      })
      console.log(this.curentTodo, id)
    }
  },
  methods: {
    pushItem(value){
      this.curentTodo.todos.push({
        title: value,
        done: false
      })
    },
    deleteItem(index){
      this.curentTodo.todos.splice(index,1)
    },
    save(){
      for (let i = 0; i < this.listOfTodos.length; i++){
        if (this.listOfTodos[i].id == this.curentTodo.id){
          this.listOfTodos[i] =this.curentTodo
          localStorage.setItem('allList', JSON.stringify(this.listOfTodos))
          return
        }
      }
    }
  },
}
</script>

<style>
  .list-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px auto;
  }
</style>