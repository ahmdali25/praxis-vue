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
                <v-list v-for="user in filterFrontendUsers" :key="user.name">
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
                <v-list v-for="user in filterBackendUsers" :key="user.name">
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
                <v-list v-for="user in filterMobileUsers" :key="user.name">
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
import { mapGetters } from 'vuex'

export default {
    components: {
        AdminNavbar
    },
    computed: {
        ...mapGetters(['filterFrontendUsers','filterBackendUsers','filterMobileUsers'])
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