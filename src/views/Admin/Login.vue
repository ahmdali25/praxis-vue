<template>
      <v-app>
        <AdminNavbar/>
        <v-container>
            <v-row class="justify-center">
                <v-col class="col-sm-4 col-md-4 col-lg-4">
                    <v-card tile elevation="1" class="mt-10">
                        <v-card-title class="justify-center"> 
                            <h3>Login Admin</h3>
                        </v-card-title>
                        <v-form>
                            <v-alert 
                                color="error" 
                                type="error" 
                                :value="error.username"
                                transition="slide-y-transition">
                                Username incorrect!
                            </v-alert>
                             <v-alert 
                                color="error" 
                                type="error" 
                                :value="error.password"
                                transition="slide-y-transition">
                                Password incorrect!
                            </v-alert>
                             <v-alert 
                                color="error" 
                                type="error" 
                                :value="error.userpass"
                                transition="slide-y-transition">
                                Username and password incorrect!
                            </v-alert>
                            <v-card-text>
                                <v-text-field label="Username" prepend-icon="mdi-account-circle" v-model="admin.username"/>
                                <v-text-field label="Password" prepend-icon="mdi-lock"
                                :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="handleClick" v-model="admin.password"/>
                            </v-card-text>
                            <v-card-actions class="justify-center">
                                <v-btn color="success" @click="handleSubmit">Submit</v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import AdminNavbar from '../../components/AdminNavbar.vue'

export default {
    components: {
        AdminNavbar
    },
    data: () => ({
        admin: {
            username : '',
            password : ''
        },
        showPassword: false,
        error: {
            username: false,
            password: false,
            userpass: false
        }
    }),
    methods: {
        handleClick() {
            this.showPassword = !this.showPassword
        },
        handleSubmit() {
                const adminUsername = this.$store.state.admin.username
                const adminPassword = this.$store.state.admin.password
                if(this.admin.username !== adminUsername && this.admin.password !== adminPassword) {
                    this.error.userpass = true
                } else if(this.admin.username !== adminUsername) {
                    this.error.username = true
                } else if(this.admin.password !== adminPassword) {
                    this.error.password = true
                } else {
                    this.$store.commit('setAuthentication', localStorage.setItem('auth', true))
                    this.$store.dispatch('login', this.admin)
                    alert('Login success!')
                    this.$router.push('/admin')
                }
            }
        }
    }
</script>