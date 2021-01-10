<template>
  <div class="create-event-btn" @click="createBtnClicked">
    <i class="fas fa-plus" />
    <span><slot /></span>
  </div>
</template>

<script>

export default {
  name: 'CreateEventBtn',
  methods: {
    createBtnClicked () {
      this.$store.dispatch('events/createEvent', {
        id: 1,
        color: 0xFF000,
        name: 'Work Out'
      })
    }
  }
}
</script>

<style scoped>
.create-event-btn {
  margin: 5px;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 24px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2);
}

.create-event-btn:hover {
  background-color: #f0eeee;
}

span {
  margin: 4px;
}
</style>
