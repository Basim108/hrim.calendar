<template>
  <v-select
    v-model="selectedEvents"
    :items="$store.state.events.events"
    item-text="name"
    placeholder="Events you'd like to see on a calendar"
    class="event-selector-empty"
    multiple
    chips
    deletable-chips
    clearable
    return-object
  >
    <template v-slot:prepend-item>
      <CreateEventDialog />
      <v-list-item
        ripple
        @click="toggle"
      >
        <v-list-item-action>
          <v-icon :color="selectedEvents.length > 0 ? 'indigo darken-4' : ''">
            {{ icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            Select All
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mt-2" />
    </template>
    <template v-slot:selection="{ item, index }">
      <v-chip
        :color="item.color"
        text-color="white"
        close
        filter
        @click:close="selectedEvents.splice(index, 1)"
      >
        {{ item.name }}
      </v-chip>
    </template>
  </v-select>
</template>

<script>
export default {
  name: 'EventSelector',
  data () {
    return {
      selectedEvents: []
    }
  },
  computed: {
    isAllEventsSelected () {
      return this.selectedEvents.length === this.$store.state.events.events.length
    },
    isSomeEventsSelected () {
      return this.selectedEvents.length > 0 && !this.isAllEventsSelected
    },
    icon () {
      if (this.isAllEventsSelected) {
        return 'mdi-close-box'
      }
      if (this.isSomeEventsSelected) {
        return 'mdi-minus-box'
      }
      return 'mdi-checkbox-blank-outline'
    }
  },
  methods: {
    toggle () {
      this.$nextTick(() => {
        if (this.isAllEventsSelected) {
          this.selectedEvents = []
        } else {
          this.selectedEvents = this.$store.state.events.events.slice()
        }
      })
    }
  }
}
</script>

<style scoped>
.event-selector-empty {
  margin-top: -4px;
}
</style>
