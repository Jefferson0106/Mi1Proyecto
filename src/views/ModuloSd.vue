<template>
   <div >
      <div>
        <html lang="en">
          <heade>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-sca">
            <title>Formulariio</title>
          </heade>
          <body>
            <section class="form-register">
              <h4>Formulario de Modulo</h4>
              <input class="controls" type="text" name="nombres" id="nombre" placeholder="Ingrese Su Nombre Del Modulo" v-model="form.nombre" >
              <VueSimpleAlert/>
              <input class="boton" type="submit" value="Aceptar" @click="Guardar()">
            
            </section>
          </body>
        </html>
      </div>
        <!--FooterDe/> !--->
      </div>
</template>

<script>
//import HeaderQa from '@/components/HeaderQa.vue';
//import FooterDe from '@/components/FooterDe.vue';
import axios from 'axios';
import VueSimpleAlert from 'vue-simple-alert';
export default {
    name: "ModuloSd",
    data: function(){
      return {
        idModulo: null,
        form: {
          idModulo: this.idModulo,
          nombre: this.nombre
        },
      }
    },
    components: {
       // HeaderQa,
      //  FooterDe,
      VueSimpleAlert
    },
    methods:{
      mostrarAlerta() {
      this.$alert('¡Su Modulo a Sido creado!');
    },
      Guardar(){
      axios.post("http://localhost:5069/api/Modulos/Guardar", this.form)
      .then(data =>{
         console.log(data);
         this.mostrarAlerta(); 
         this.$router.push("ModuloEt");
      })
    }
  },
}
</script>

<style scoped>
   * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form-register {
  width: 400px;
  background: #24303c;
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
</style>