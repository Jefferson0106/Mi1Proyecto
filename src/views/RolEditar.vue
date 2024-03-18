<template>
    <div>
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
                <h4>Formulario De Editar</h4>
            <input class="controls" type="text" name="nombre" id="nombre" placeholder="Ingrese Su Nombre Del Rol" v-model="form.nombre">
            <input class="boton" type="submit" value="Editar" v-on:click="editar()">
            </section>
        </body>
    </html>
  </div>
   <FooterDe/>
    </div>
</template>

<script>
import HeaderQa from '@/components/HeaderQa.vue'
import FooterDe from '@/components/FooterDe.vue'
import axios from 'axios'
export default {
    name: "RolEditar",
    components: {
        HeaderQa,
        FooterDe
    },
    data: function (){
        return {
            idRol: null,
            currentRol: null,
            form: {
                "nombre": "",
            }
        }
    },
    mounted: function(){
        this.idRol = this.$route.params.idRol

        let dirrecion = `http://localhost:5069/api/Roles/Obtener/${this.idRol}`;
        axios.get(dirrecion).then(data =>{
            this.currentRol = data.data.response;
            this.form.nombre = this.currentRol.nombre
        });
    }, 
    methods:{
        editar(){
            axios.put('http://localhost:5069/api/Roles/Editar')
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
.form-register{
    width: 400px;
    background: #24303c;
    padding: 30px;
    margin: auto;
    margin-top: 100px;
    border-radius: 4px;
    font-family: 'calibri';
    color: white;
}

.form-register h4{
    font-size: 22px;
  margin-bottom: 20px;
}

.controls {
  width: 100%;
  background: #24303c;
  padding: 10px;
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