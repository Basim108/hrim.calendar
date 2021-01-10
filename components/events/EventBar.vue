<template>
  <div class="event-bar">
    <CreateEventBtn>Create Event</CreateEventBtn>
    <div
      v-for="dto in visibleEvents"
      :key="dto.id"
      class="event-item"
    >
      dto.name
    </div>
  </div>
</template>

<script>
import CreateEventBtn from '@/components/events/CreateEventBtn'

export default {
  name: 'EventBar',
  components: {
    CreateEventBtn
  },
  computed: {
    visibleEvents () {
      return this.$store.state.events
    }
  }
}
</script>

<style scoped>
.event-bar {
  margin: 0 5px;
  display: flex;
  justify-content: center;
}
</style>
