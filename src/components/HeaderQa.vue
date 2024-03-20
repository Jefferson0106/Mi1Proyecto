<template>
 <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    </b-collapse>
    <b-nav-item-dropdown >
          <template #button-content>
            <img src="../assets/usuario.svg"  width="50" v-on:click="salir()">
          </template>
          <b-dropdown-item v-on:click="salir()">Salir </b-dropdown-item>
        </b-nav-item-dropdown>
  </b-navbar>
</div>
</template>

<script>
export default {
  name:"HeaderQa",
  components:{

  },
  methods: {
      salir(){
        this.$router.push('/');
      }
  }
}
</script>


<style scoped>
.let{
  cursor: pointer;
}

</style>