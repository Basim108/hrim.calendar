<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  layout: 'month'
}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background-color: var(--bg-color);
  color: var(--font-color);
}

:root {
  --primary-color: #302AE6;
  --secondary-color: #536390;
  --font-color: #424242;
  --bg-color: #fff;
  --heading-color: #292922;
}

[data-theme="dark"] {
  --primary-color: #9A97F3;
  --secondary-color: #818cab;
  --font-color: #e1e1ff;
  --bg-color: #161625;
  --heading-color: #818cab;
}
</style>
