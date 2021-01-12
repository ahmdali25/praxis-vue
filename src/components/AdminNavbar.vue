<template>
  <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon v-if="['Admin'].includes($route.name)" class="grey--text"></v-app-bar-nav-icon>
      <router-link class="link" to="/">Praxis Academy</router-link>
      <v-spacer></v-spacer>
      <v-btn v-if="['Admin'].includes($route.name)" router :to="logout" color="primary" dark rounded small>
        Logout
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
  export default {
    data: () => ({
        logout: '/logout'
    })
  }
</script>

<style lang="scss">
 .link {
   text-decoration: none !important;
 }
</style>