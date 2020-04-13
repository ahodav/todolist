<template>
<div>
  <Banner :item="itemRemove" :isActive="bannerActivated" @remove="deleteItem" @cancel="bannerActivated = false"/>
  <AddTodo @addList="addListItem"/>
  <div class="home">
    <div class="list" v-for="item in listOfTodos" :key="item.id">
      <div class="remove">
        <button @click="removeListItem(item)" class="remove-btn">X</button>
      </div>
      <div class="list-title">
        <router-link :to="{ name: 'TodoItemById', params: { id: item.id }}">{{item.name}}</router-link>
      </div>
      <div v-if="item.todos.length > 0 " class="list-item">
        <p v-for="(el,index)  in item.todos.slice(0,2)" :key="index + Date.now()"> 
          {{el.title}}
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import AddTodo from "../components/AddTodo"
import Banner from "../components/Banner"

export default {
  name: 'Home',
  components: {
    AddTodo,
    Banner
  },
  data () {
    return {
      listOfTodos:[],
      itemRemove:{},
      bannerActivated: false
    }
  },
  created () {
    if (localStorage.getItem('allList')){
      this.listOfTodos = JSON.parse(localStorage.getItem('allList') || [])
    }
  },
  methods: {
    addListItem(value){
      this.listOfTodos.push({
        name: value,
        id: Date.now(),
        todos:[]
      })
      localStorage.setItem('allList', JSON.stringify(this.listOfTodos))
    },
    deleteItem(id){
      for (let i = 0; i < this.listOfTodos.length; i++){
        if (this.listOfTodos[i].id == id){
          this.listOfTodos.splice(this.listOfTodos.indexOf(this.listOfTodos[i]), 1)
          this.bannerActivated = false
          localStorage.setItem('allList', JSON.stringify(this.listOfTodos))
          return
        }
      }
    },
    removeListItem(item){
      this.itemRemove = item
      this.bannerActivated = true
    }
  }
  
}
</script>

<style scoped>

  .home {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 32px auto;
  }
  
  .list {
    width: 30%;
    max-width: 410px;
    min-width: 400px;
    border: 1px solid gray;
    border-radius: 8px;
    padding: 8px;
    position: relative;
    margin: 14px;
  }
  
  .list-title {
    widows: 100%;
    height: 32px;
  }

  .list-item {
    border: 1px solid gray;
    border-radius: 8px;
  }

  a {
    text-decoration: none;
    text-transform: capitalize;
  }
  .remove {
    position: absolute;
    right: 8px;
    top: 6px;
  }

  .remove-btn {
    border: 1px;
    border-radius: 4px;
    color: white;
    background: red;
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
</style>