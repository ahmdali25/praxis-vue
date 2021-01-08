<template>
  <div class="home">
    <v-container>
      <v-list>
        <v-list-item-group>
          <h1 class="text-center">Praxis Academy</h1>

          <v-banner>
             Praxis Academy adalah sekolah pemrograman yang khusus menangani aplikasi level enterprise.
             Kami menggunakan platform Java untuk sisi back end dan JavaScript untuk sisi front end.
             Sekolah ini didirikan tahun 2019 setelah melihat adanya kesenjangan yang signifikan antara dunia industri dengan dunia pendidikan.
             Tujuan utama dari pendirian sekolah ini adalah menjembatani dunia industri software dengan calon-calon SDM yang akan berkiprah di industri software tersebut.
             Sekolah ini didirikan sebagai hasil kerjasama antara pelaku di industri software serta praktisi bidang pendidikan yang secara khusus memang mendedikasikan diri di bidang teknologi software.
          </v-banner>

          <v-list-item>
              <v-list-item-title>
                <h2>Divisi</h2>
              </v-list-item-title>
          </v-list-item>

          <v-list-item v-for="item in classes" :key="item.title" router :to="item.route">
            <v-list-item-title>
                {{item.title}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
             Slot Pendaftaran Frontend : {{totalFrontendUser}} / 5
          </v-list-item>
          <v-list-item>
             Slot Pendaftaran Backend : {{totalBackendUser}} / 5
          </v-list-item>
           <v-list-item>
             Slot Pendaftaran Mobile : {{totalMobileUser}} / 5
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  data: () => ({
      classes: [
        {title: 'Front-end Developer', route: '/frontend'},
        {title: 'Back-end Developer', route: '/backend'},
        {title: 'Mobile Developer', route: '/mobile'},
      ]
  }),
  computed: {
    totalFrontendUser() {
      return this.$store.getters.userProgramFrontend
    },
    totalBackendUser() {
      return this.$store.getters.userProgramBackend
    },
    totalMobileUser() {
      return this.$store.getters.userProgramMobile
    }
  }
}
</script>
