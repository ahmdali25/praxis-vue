<template>
  <v-app>
  <Navbar v-if="['Home','Frontend','Backend','Mobile','Register'].includes($route.name)"/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    Navbar,
    Footer
  }
};
</script>
