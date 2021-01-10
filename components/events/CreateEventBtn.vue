<template>
  <div class="create-event-btn" :class="$store.state.ui.theme" @click="createBtnClicked">
    <i class="fas fa-plus" />
    <span class="title"><slot /></span>
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
  box-shadow: 0 3px 20px rgba(0, 0, 0, .25),
  inset 0 2px 0 rgba(255, 255, 255, .6),
  0 2px 0 rgba(0, 0, 0, .1),
  inset 0 0 20px rgba(0, 0, 0, .1);
}

.create-event-btn:hover {
  background-color: #f0eeee;
}

.dark {
  box-shadow: 0 3px 20px rgba(255, 255, 255, .25),
  inset 0 2px 0 rgba(0, 0, 0, .6),
  0 2px 0 rgba(255, 255, 255, .1),
  inset 0 0 20px rgba(255, 255, 255, .1);
}

.dark:hover {
  background-color: #9d9a9a;
}

span {
  margin: 4px;
}

@media only screen and  (max-width: 768px) {
  .title {
    display: none;
  }
  .create-event-btn{
    margin: 0px;
    padding: 5px;
  }
}
</style>
