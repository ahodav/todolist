<template>
<div class="wrap">
  <div v-for="(todos,index) in item" :key="index" class="item-wrap">
    <div>
      <input type="checkbox" name="item" id="" v-model="todos.done">
    </div>
    <div>
      <input v-if="isEdit === index"  type="text" v-model="todos.title">
      <span v-else>{{todos.title}}</span>
    </div>
    <div>
      <button @click="changeTitle(index)" >
        <span v-if="isEdit === index">Finish editing</span>
        <span v-else>Edit</span> 
      </button>
      <button @click="deleteItem(index)" >Delete</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      isEdit: -1,
    }
  },
  methods:{
    changeTitle(index){
      if (index == this.isEdit) {
        return this.isEdit = -1
      }
      this.isEdit = index
    },
    deleteItem(index){
      this.$emit("removeItem", index)
    }
  },
}
</script>

<style scoped>
  .wrap {
    width: 100%;
  }

  .item-wrap {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: space-between;
    border: 1px solid gray;
    border-radius: 8px;
    height: 48px;
    padding: 0 16px;
    margin: 8px auto;
  }

</style>