<template>
  <div style="z-index: 1000000000000;">
    <div toggleable="lg" type="dark" variant="info" style="height: 10vh; width: 100%; margin: 0;">
      <b-row style="height: 10vh; margin: 0;">
        <b-col style="background-color:dodgerblue; height: 100%;" sm="10"></b-col>
        <b-col style="background-color:dodgerblue; height: 100%" sm="2">
          <b-nav-item-dropdown>
            <template #button-content>
              <img src="../assets/usuario.svg" style="width: 30px" v-on:click="salir()">
            </template>
            <b-dropdown-item v-on:click="salir()">Salir </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-col>

      </b-row>
    </div>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue';

export default {
  name: "HeaderQa",
  components: {
    BRow,
    BCol
  },
  methods: {
    salir() {
      this.$router.push('/');
    }
  }
}
</script>


<style scoped>
.let {
  cursor: pointer;
}
</style>