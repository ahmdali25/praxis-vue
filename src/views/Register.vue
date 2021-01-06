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
                            <v-card-text>
                                <v-text-field label="Name" prepend-icon="mdi-account-circle" v-model="user.name" :rules="nameRules"/>
                                <v-text-field label="Address" prepend-icon="mdi-home" v-model="user.address" :rules="addressRules"/>
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
        ]
    }),

    methods: {
        handleSubmit() {
            if(this.$refs.form.validate()){
                this.$store.dispatch('actionUsers', this.user)
                if (this.user.program === 'Frontend') {
                    this.$router.push({name: 'Frontend'})
                } else if(this.user.program === 'Backend') {
                    this.$router.push({name: 'Backend'})
                } else {
                    this.$router.push({name: 'Mobile'})
                }
                alert('Pendaftaran berhasil!')
            }
        }
    }
}
</script>