<template>
  <div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
      <input
        id="checkbox"
        v-model="currentTheme"
        true-value="dark"
        false-value="light"
        type="checkbox"
        @change="onChange"
      >
      <div class="slider round" />
    </label>
    <em>
      <i class="fas fa-adjust" />
    </em>
  </div>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  data () {
    return {
      currentTheme: this.$store.state.ui.theme
    }
  },
  mounted () {
    document.documentElement.setAttribute('data-theme', this.currentTheme)
  },
  methods: {
    onChange () {
      this.$store.commit('ui/toggleTheme')
      document.documentElement.setAttribute('data-theme', this.currentTheme)
    }
  }
}
</script>

<style scoped>
.theme-switch-wrapper {
  display: flex;
  align-items: center;
}

em {
  margin-left: 5px;
  font-size: 1.5rem;
}

.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
  margin-top: -2px;
}

.theme-switch input {
  display: none;
}

@media only screen and  (max-width: 768px) {
  .theme-switch {
    height: 24px;
    width: 45px;
  }

  .slider:before {
    height: 20px !important;
    width: 20px !important;
    bottom: 2px !important;
    left: 1px !important;
  }
  input:checked + .slider:before {
    transform: translateX(21px) !important;
  }
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 26px;
}

input:checked + .slider {
  background-color: #66bb6a;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
