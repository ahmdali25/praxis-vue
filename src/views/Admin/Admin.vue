<template>
    <v-container>
        <v-card>
            <v-card-title>
                <h2>Ini halaman Admin</h2>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle>
                <h3>Data Pendaftaran</h3>
                <v-list v-for="user in filterUsers" :key="user.name">
                <v-list-item-content>
                    <v-list-item-title>Data Pendaftaran Frontend</v-list-item-title>
                    <v-divider></v-divider>
                    <v-list-item-subtitle>Name : {{user.name}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Address : {{user.address}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Program : {{user.program}}</v-list-item-subtitle>
                    <v-list-item-subtitle>Status : {{user.status}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn color="primary" v-if="user.isApproved === false" @click="handleApprove(user)">Approve</v-btn>
                <v-btn color="primary" v-else @click="handleApprove(user)">Disapprove</v-btn>
            </v-list>
            </v-card-subtitle>
        </v-card>
    </v-container>
</template>

<script>
export default {
    computed: {
     filterUsers() {
       return this.$store.state.users.filter((user) => {
         if (user.isApproved === false) {
            user.status = 'Pending'
         } else{
           user.status = 'Approved'
         }
         return user.program === 'Frontend'
       })
     }
   },
   methods: {
       handleApprove(user) {
          user.isApproved = !user.isApproved
          console.log(user)
       }
   }
}
</script>