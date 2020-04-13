<template>
  <div class="banner" :class="{active: isActive}">
    <span>Delete element "{{item.name}}"</span>
    <button @click="yes" class="btn btn-yes">Yes</button>
    <button @click="no" class="btn btn-no">No</button>
  </div>
</template>

<script>
export default {
  props:['item', 'isActive'],
  data() {
    return {
    }
  },
  created(){
  },
  methods: {
    yes() {
      this.$emit('remove', this.item.id)
    },
    no() {
      this.$emit("cancel")
    }
  }
}
</script>

<style>
  .banner {
    height: 38px;
    width: 100%;
    position: fixed;
    background: green;
    top:0;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    color:white
  }
  .active{
    display: flex;
  }

  .btn {
    margin: 0 8px;
  }

  .btn-yes {
    width: 32px;
    height: 24px;
    background: #03fc2c;
  }
  .btn-no {
    width: 32px;
    height: 24px;
    background: red;
  }
</style>