<template>
  <div>
    <HeaderQa />
    <div class="form-register">
      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="windth=derive-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Formulario de Registro</title>
      </head>

      <body class="body">
        <section>
          <h4 class="form-register h4 ">Formulario Reguistro</h4>
          <input class="form-register input " type="text" name="Nombre" id="Nombre" placeholder="Ingrese su Nombre"
            v-model="form.nombre">
          <input type="text" name="Apellido" id="Apellido" placeholder="Ingrese su Apellido" v-model="form.apellido">
          <input type="email" name="Correo" id="Correo" placeholder="Ingrese su Correo" v-model="form.correo">
          <input type="password" name="Contraseña" id="Contraseña" placeholder="Ingrese su Contraseña"
            v-model="form.contrasena">
          <input type="text" name="Cargos" id="Cargos" placeholder="Ingrese su Cargos" v-model="form.cargo">
          <input type="text" name="Telefono" id="Telefono" placeholder="Ingrese su Telefono" v-model="form.telefono">

          <select class="select" v-model="form.idRol" name="transport" id="transport">

            <option v-for="(option, index) in options" :key="index" :value="option.idRol">{{ option.nombre }}</option>

          </select>

          <input class="botons" type="submit" value="Reguistrar" v-on:click="guardar()">
        </section>
      </body>

      </html>
    </div>
    <FooterDe />
  </div>
</template>

<script>
import HeaderQa from '@/components/HeaderQa.vue';
import FooterDe from '@/components/FooterDe.vue';
import axios from 'axios'
export default {
  name: "UserForm",
  data: function () {
    return {
      idUsuario: null,
      form: {
        nombre: null,
        apellido: null,
        correo: null,
        contrasena: null,
        cargo: null,
        telefono: null,
        idRol: null
      },
      options: null,
    }
  },

  components: {
    HeaderQa,
    FooterDe
  },

  mounted: function (){
    let direccion = "http://localhost:5069/api/Roles/Lista";
    axios.get(direccion).then(data => {
      this.options = data.data.response;
      console.log(data)
    })
  },

  methods: {
    guardar() {
      console.log(this.form)
      axios.post(`http://localhost:5069/api/Usuarios/GuardarUsuario?nombre=${this.form.nombre}&apellido=${this.form.apellido}&correo=${this.form.correo}&contrasena=${this.form.contrasena}&cargo=${this.form.cargo}&telefono=${this.form.telefono}&idRol=${this.form.idRol}`)
        .then(data => {
          console.log(data);
          this.$router.push("UsersComp")
        });
    }
  }

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form-register {
  background: #24303c;
  color: aliceblue;
  padding: 30px;
  margin: auto;
}

.form-register h4 {
  font-size: 22px;
  margin-bottom: 20px;
  color: blanchedalmond;
}

.form-register input {
  width: 100%;
  background: #24303c;
  color: aliceblue;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 18px;


}

.form-register .botons {
  width: 100%;
  background: #1f53c5;
  border: none;
  padding: 12px;
}

.body {
  background: #24303c;
}

.select {
  width: 15%;
  background: #24303c;
  color: aliceblue;
  padding: 1px;
}
</style>
