<template>
  <div class="data">
    <v-container>
      <h1>Data Pendaftaran Backend</h1>
      <v-list-item v-for="user in filterBackendUsers" :key="user.name">
        <v-list-item-content>
          <v-list-item-title>Nama : {{user.name}}</v-list-item-title>
          <v-list-item-title>Alamat : {{user.address}}</v-list-item-title>
          <v-list-item-title>Program : {{user.program}}</v-list-item-title>
          <v-list-item-title>Status : {{user.status}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-container>
  </div>
</template>

<script>
export default {
   computed: {
     filterBackendUsers() {
      return this.$store.getters.filterBackendUsers
   }
  }
}
</script>