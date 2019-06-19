<template>
  <div class="home">
    <Header />
    <About />
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'home',
  components: {
    About,
    Header
  },
};
</script>
