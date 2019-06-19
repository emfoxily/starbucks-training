<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
$green: rgb(0, 112, 74);
body {
  background-color: $green;
}
#app {
  background-color: $green;
}
</style>
