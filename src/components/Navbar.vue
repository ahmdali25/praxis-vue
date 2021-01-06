<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
           <v-list-item-title>
            Praxis Academy
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
         <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                Divisi
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-for="item in items" :key="item.title" :to="item.route">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{  item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link class="link" to="/">Praxis Academy</router-link>
      <v-spacer></v-spacer>
      <v-btn router :to="register" color="primary" dark rounded small>
        Register
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
  export default {
    data: () => {
      return {
        drawer: false,
        register: '/register',
        items: [
          {title: 'Front-end Developer', icon: 'mdi-laptop', route: '/frontend'},
          { title: 'Back-end Developer', icon: 'mdi-laptop', route: '/backend' },
          {title: 'Mobile App Developer', icon: 'mdi-laptop', route: '/mobile'}
          ]
      }
    }
  }
</script>

<style lang="scss">
 .link {
   text-decoration: none !important;
 }
</style>