<template>
    <v-app>
        <v-container>
            <v-row class="justify-center">
                <v-col class="col-sm-4 col-md-4 col-lg-4">
                    <v-card tile elevation="1" class="mt-10">
                        <v-card-title class="justify-center"> 
                            <h3>Form Register</h3>
                        </v-card-title>
                        <v-form ref="form">
                            <v-alert 
                                color="error" 
                                type="error" 
                                :value="alert"
                                transition="slide-y-transition">
                                Pendaftaran penuh, tunggu batch selanjutnya!
                            </v-alert>
                            <v-card-text>
                                <v-text-field
                                label="Name"
                                prepend-icon="mdi-account-circle"
                                v-model="user.name"
                                :rules="nameRules"/>
                                <v-text-field
                                label="Address"
                                prepend-icon="mdi-home"
                                v-model="user.address"
                                :rules="addressRules"/>
                                <v-select
                                :items="programs"
                                prepend-icon="mdi-laptop"
                                label="Program"
                                v-model="user.program"
                                :rules="programRules"
                                dense
                                ></v-select>
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
export default {
    data: () => ({
        user: {
                name: '',
                address: '',
                program: '',
                isApproved: false
              },
        programs: ['Frontend', 'Backend', 'Mobile'],
        nameRules: [
            value => value != '' || 'Name is required'
        ],
        addressRules: [
            value => value != '' || 'Address is required'
        ],
        programRules : [
            value => value != '' || 'Program is required'
        ],
        alert: false
    }),

    methods: {
        handleSubmit() {
            if (this.$refs.form.validate()){
                this.$store.dispatch('addUser', this.user)
                if (this.user.program === 'Frontend') {
                    if(this.$store.getters.userProgramFrontend > 5) {
                        this.alert = true
                    } else {
                        alert('Pendaftaran berhasil!')
                        this.$router.push({name: 'Frontend'})
                    }
                } else if(this.user.program === 'Backend') {
                     if(this.$store.getters.userProgramBackend > 5) {
                        this.alert = true
                    } else {
                        alert('Pendaftaran berhasil!')
                        this.$router.push({name: 'Backend'})
                    }
                } else {
                     if(this.$store.getters.userProgramMobile > 5) {
                        this.alert = true
                    } else {
                        alert('Pendaftaran berhasil!')
                        this.$router.push({name: 'Mobile'})
                    }
                }
            }
        }
    }
}
</script>