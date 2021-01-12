<template>
    <div>
    <AdminNavbar/>
    <v-container>
        <v-card>
            <v-card-title>
                <h2>Data Pendaftaran</h2>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle>
                <h3>Data Pendaftaran Frontend</h3>
                <v-list v-for="user in filterFrontend" :key="user.name">
                    <v-list-item-content>
                        <v-divider></v-divider>
                        <v-list-item-subtitle>Name : {{user.name}}</v-list-item-subtitle>
                        <v-list-item-subtitle>Address : {{user.address}}</v-list-item-subtitle>
                        <v-list-item-subtitle>Program : {{user.program}}</v-list-item-subtitle>
                        <v-list-item-subtitle>Status : {{user.status}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-btn color="primary" v-if="user.isApproved === false" @click="handleApprove(user)">Approve</v-btn>
                    <v-btn color="primary" v-else @click="handleApprove(user)">Disapprove</v-btn>
                    <v-btn color="error" @click="btnDeleteUser(user.name)">Delete</v-btn>
                </v-list>
            </v-card-subtitle>
             <v-card-subtitle>
                <h3>Data Pendaftaran Backend</h3>
                <v-list v-for="user in filterBackend" :key="user.name">
                    <v-list-item-content>
                        <v-divider></v-divider>
                        <v-list-item-subtitle>Name : {{user.name}}</v-list-item-subtitle>
                        <v-list-item-subtitle>Address : {{user.address}}</v-list-item-subtitle>
                        <v-list-item-subtitle>Program : {{user.program}}</v-list-item-subtitle>
                        <v-list-item-subtitle>Status : {{user.status}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-btn color="primary" v-if="user.isApproved === false" @click="handleApprove(user)">Approve</v-btn>
                    <v-btn color="primary" v-else @click="handleApprove(user)">Disapprove</v-btn>
                    <v-btn color="error" @click="btnDeleteUser(user.name)">Delete</v-btn>
                </v-list>
            </v-card-subtitle>
             <v-card-subtitle>
                 <h3>Data Pendaftaran Mobile</h3>
                <v-list v-for="user in filterMobile" :key="user.name">
                    <v-list-item-content>
                        <v-divider></v-divider>
                        <v-list-item-subtitle>Name : {{user.name}}</v-list-item-subtitle>
                        <v-list-item-subtitle>Address : {{user.address}}</v-list-item-subtitle>
                        <v-list-item-subtitle>Program : {{user.program}}</v-list-item-subtitle>
                        <v-list-item-subtitle>Status : {{user.status}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-btn color="primary" v-if="user.isApproved === false" @click="handleApprove(user)">Approve</v-btn>
                    <v-btn color="primary" v-else @click="handleApprove(user)">Disapprove</v-btn>
                    <v-btn color="error" @click="btnDeleteUser(user.name)">Delete</v-btn>
                </v-list>
            </v-card-subtitle>
        </v-card>
    </v-container>
    </div>
</template>

<script>
import AdminNavbar from '../../components/AdminNavbar.vue'
export default {
    components: {
        AdminNavbar
    },
    computed: {
     filterFrontend() {
       return this.$store.state.users.filter((user) => {
         if(user.program === 'Frontend') {
            if (user.isApproved === false) {
            user.status = 'Pending'
            } else{
            user.status = 'Approved'
         }
            return user.program === 'Frontend'
         } 
       })
     },
     filterBackend() {
       return this.$store.state.users.filter((user) => {
         if(user.program === 'Backend') {
            if (user.isApproved === false) {
            user.status = 'Pending'
            } else{
            user.status = 'Approved'
         }
            return user.program === 'Backend'
         }
       })
     },
     filterMobile() {
       return this.$store.state.users.filter((user) => {
         if(user.program === 'Mobile') {
            if (user.isApproved === false) {
            user.status = 'Pending'
            } else{
            user.status = 'Approved'
         }
            return user.program === 'Mobile'
         }
       })
     }
   },
   methods: {
       handleApprove(user) {
           user.isApproved = !user.isApproved
       },
       btnDeleteUser(user){
           this.$store.dispatch('deleteUser', user)
       }
   }
}
</script>