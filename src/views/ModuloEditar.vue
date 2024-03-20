<template>
    <div>
  <div>
    <html lang="en">
        <heade>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-sca">
            <title>Formulario</title>
        </heade>
        <body>
            <section class="form-register">
                <h4>Formulario de Editar Modulo</h4>
                <input class="controls" type="text" name="nombres" id="nombre" placeholder="Ingrese Su Nombre Del Modulo" v-model="form.nombre">
                <input  class="boton" type="submit" value="Editar"  v-on:click="editar()">
            </section>
        </body>
    </html>
  </div>
        <!--FooterDe/> !--->
    </div>
</template>

<script>
//import FooterDe from '@/components/FooterDe.vue';
import axios from 'axios';
export default {
    name: "ModuloEditar",
    components: {
 ///FooterDe
    },
    data: function (){
        return {
            idModulo: null,
            currentModulo: null,
            form: {
                "nombre": "",
            }
        }
    },
    mounted: function(){
        this.idModulo = this.$route.params.idModulo

        let dirrecion = `http://localhost:5069/api/Modulos/Obtener/${this.idModulo}`;
        axios.get(dirrecion).then(data =>{
            this.currentModulo = data.data.response;
            this.form.nombre = this.currentModulo.nombre
        });
    },
    methods:{
        editar(){
            axios.put('http://localhost:5069/api/Modulos/Editar')
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
  color: blanchedalmond;
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