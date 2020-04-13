<template>
  <div class="add-wrap">
    <input @keyup.enter="add()" type="text" class="add-input" placeholder="add your todo and press enter" v-model="todo">
  </div>
</template>

<script>
export default {
  data(){
    return {
      todo:''
    }
  },
  methods: {
    add() {
      if (this.todo.length < 1) return
      this.$emit('addItem', this.todo)
      this.todo = ''
    }
  }
}
</script>

<style>
  .add-wrap {
    width: 40%;
    margin: 16px;
  }

  .add-input {
    width: 100%;
    border: 1px solid gray;
    border-radius: 8px;
    height: 32px;
    padding: 0 8px;
  }
</style>