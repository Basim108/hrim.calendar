<template>
  <div class="event-bar">
    <CreateEventBtn>Create Event</CreateEventBtn>
    <div class="panel">
      <div class="panel-title" />
      <ul v-for="dto in visibleEvents" :key="dto.id">
        <li><EventItem :dto="dto" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
import CreateEventBtn from '@/components/events/CreateEventBtn'
import EventItem from '@/components/events/EventItem'

export default {
  name: 'EventBar',
  components: {
    CreateEventBtn,
    EventItem
  },
  computed: {
    visibleEvents () {
      return this.$store.state.events.events
    }
  }
}
</script>

<style scoped>
.event-bar {
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

</style>
