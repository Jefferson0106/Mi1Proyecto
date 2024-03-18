<template>
  <div>
    <HeaderQa/>
    <div class="form-register">
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="windth=derive-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Formulario de Registro</title>
    </head>
    <body class="body">
        <section >
          <h4 class="form-register h4 ">Formulario de actualizar</h4>
          <input class="form-register input "  type="text" name="Nombre" id="Nombre" placeholder="Ingrese su Nombre" v-model="form.nombre">
          <input type="text" v-model="form.apellido" name="Apellido" id="Apellido" placeholder="Ingrese su Apellido">
          <input type="email" name="Correo" id="Correo" placeholder="Ingrese su Correo"  v-model="form.correo">
          <input type="password" name="Contraseña" id="Contraseña" placeholder="Ingrese su Contraseña"  v-model="form.contrasena">
          <input type="text" name="Cargos" id="Cargos" placeholder="Ingrese su Cargos"  v-model="form.cargo">
          <input type="text" name="Telefono" id="Telefono" placeholder="Ingrese su Telefono"  v-model="form.telefono">
          <input type="text" name="Rol" id="Rol" placeholder="Ingrese su Rol"  v-model="form.idRol">
          <input class="botons" type="submit" value="Reguistrar" v-on:click="editar()" >
        </section>
    </body>
  </html>
  </div>
    <FooterDe/>
  </div>
</template>

<script>
import HeaderQa from '@/components/HeaderQa.vue';
import FooterDe from '@/components/FooterDe.vue';
import axios from 'axios';
export default {
    name:"EditarAs",
    components: {
      HeaderQa,
      FooterDe
    },
    data: function (){
      return {
        idUsuario: null,
        currentUser: null,
        form: {
          nombre: null,
          apellido: null,
          correo: null,
          contrasena: null,
          cargo: null,
          telefono: null,
          idRol: null,
        }
      }
    },
    mounted: function () {
        this.idUsuario = this.$route.params.idUsuario

        let dirrecion = `http://localhost:5069/api/Usuarios/Obtener/${this.idUsuario}`;
        axios.get(dirrecion).then(data => {

          this.currentUser = data.data.response;
          this.form.nombre = this.currentUser.nombre;
          this.form.apellido = this.currentUser.apellido;
          this.form.correo = this.currentUser.correo;
          this.form.contrasena = this.currentUser.contrasena;
          this.form.cargo = this.currentUser.cargo;
          this.form.telefono = this.currentUser.telefono;
          this.form.idRol = this.currentUser.idRol;


        });


    },
    methods: {
      editar(){

        console.log(this.form)

        // axios.put(`http://localhost:5069/api/Usuarios/EditarUsuario?IdUsuario=${this.idUsuario}&nombre=${this.form.nombre}&apellido=${this.form.apellido}&correo=dios2345%40gmail.com&contrasena=dmwofrf&cargo=ergegrr&telefono=e345325&idRol=3`)
        // .then(data =>{
        //   console.log(data);
        //   this.$router.push("users")
        // })

        axios.put(`http://localhost:5069/api/Usuarios/EditarUsuario?IdUsuario=${this.$route.params.idUsuario}&nombre=${this.form.nombre}&apellido=${this.form.apellido}&correo=${this.form.correo}&contrasena=${this.form.contrasena}&cargo=${this.form.cargo}&telefono=${this.form.telefono}&idRol=${this.form.idRol}`)
        .then(data =>{
          console.log(data);
          this.$router.push("TablaWe")
        });
      }
      
    }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.form-register {
  background: #24303c;
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
.body{
  background: #24303c;
}

</style>