<template>
  <div class="add_btn-wrap">
    <div class="error">{{error}}</div>
    <div class="input-wrap">
      <input class="custon-input" type="text" v-model="nameOfList">
    </div>
    <button @click="addTodoList" class="add_btn">Add Todo List </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nameOfList:'',
      error:''
    }
  },
  methods: {
    addTodoList() {
      this.error = ''
      console.thi
      if(this.nameOfList.length < 2){
        this.error = 'Name of list must contain 2 or more symbols'
        return
      }
      this.$emit('addList', this.nameOfList)
      this.nameOfList = ''
    }
  }
}
</script>

<style>
  .add_btn-wrap {
    margin: 32px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
  }

  .custon-input {
    width: 100%;
    height: 32px;
    border: 1px solid gray;
    border-radius: 8px;
  }

  .add_btn {
    color: white;
    background: blue;
    height: 32px;
    border-radius: 8px;
    border: 1px solid lawngreen;
    cursor: pointer;
  }

  .error {
    color: red;
    margin: 4px;
  }
</style>