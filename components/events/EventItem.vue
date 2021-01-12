<template>
  <label class="event-item">
    <input :id="checkerId" type="checkbox" :style="checkboxStyle">
    <a :style="nameStyle" :title="dto.name">{{ dto.name }}-{{ dto.id }}</a>
    <i class="fas fa-ellipsis-v menu" />
  </label>
</template>

<script>
export default {
  name: 'EventItem',
  props: {
    dto: {
      type: Object,
      default: null
    }
  },
  computed: {
    checkerId () {
      return 'event-checkbox-' + this.dto.id
    },
    checkboxStyle () {
      return {
        borderColor: this.dto.color,
        borderSize: '1px'
      }
    },
    nameStyle () {
      return {
        color: this.dto.color
      }
    }
  }
}
</script>

<style scoped>
.event-item {
  display: flex;
  width: 100%;
  overflow-x: hidden;
  cursor: pointer;
  padding: 5px 0;
}

.event-item > * {
  display: inline-block;
}

.event-item:hover {
  background-color: #eeeeee;
}

a {
  max-height: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-left: 2px;
}

.menu {
  margin-left: auto;
}

@media only screen and  (max-width: 768px) {
  a {
    display: none !important;
  }

  .menu {
    margin-left: 2px;
  }

  input {
    margin-left: 0px;
    margin-top: 0;
  }
}

</style>
