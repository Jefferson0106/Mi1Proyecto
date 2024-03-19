<template>
    <div >
        <HeaderQa/>
      <div>
        <html lang="en">
          <heade>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-sca">
            <title>Formulariio</title>
          </heade>
          <body>
            <section class="form-register">
              <h4>Formulario de Roles</h4>
              <input class="controls" type="text" name="nombres" id="nombre" placeholder="Ingrese Su Nombre Del Rol" v-model="form.nombre">

              <h4>Eliga su Modulo</h4>

              <select multiple class="select" v-model="form.idModulo"  name="transport" id="transport" >

<option  v-for="(option, index) in options" :key="index" :value="option.idModulo">{{ option.nombre }}</option>

</select>
              <input class="boton" type="submit" value="Aceptar" v-on:click="Guardar()">
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
    name: "RolNuevo",
    data: function(){
      return {
        idRol: null,
        form: {
          idRol: this.idRol,
          nombre: this.nombre
        },
        options: null,
      }
    },
    components: {
        HeaderQa,
        FooterDe


    },
    mounted: function (){
    let direccion = "http://localhost:5069/api/Modulos/ListaModulo";
    axios.get(direccion).then(data => {
      this.options = data.data.response;
      console.log(data)
    })
  },
    methods:{
      Guardar(){
      axios.post("http://localhost:5069/api/Roles/Guardar", this.form)
      .then(data =>{
         console.log(data);
         this.$router.push("RolesTs");
      })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  color: aliceblue;
  box-sizing: border-box;
}

.form-register {
  width: 400px;
  background: #24303c;
  color: aliceblue;
  padding: 30px;
  margin: auto;
  margin-top: 100px;
  border-radius: 4px;
  font-family: 'calibri';
  color: white;
}

.form-register h4 {
  font-size: 22px;
  margin-bottom: 20px;
}

.controls {
  width: 100%;
  background: #24303c;
  padding: 10px;
  color: aliceblue;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px solid #1f53c5;
  font-family: 'calibri';
  font-size: 18px;
}

.boton {
  width: 100%;
  background: #1f53c5;
  border: none;
  padding: 12px;
  color: white;
  margin: 16px 0;
  font-size: 16px;
}

.select {
  width: 15%;
  background: #24303c;
  color: aliceblue;
  padding: 1px;
}

</style>