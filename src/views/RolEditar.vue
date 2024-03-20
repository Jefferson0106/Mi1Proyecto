<template>
  <div>

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
          <input class="controls" type="text" name="nombre" id="nombre" placeholder="Ingrese Su Nombre Del Rol"
            v-model="form.nombre">

          <h4>Eliga su Modulo</h4>

          <!-- <select multiple class="select" v-model="form.idModulo"  name="transport" id="transport" >

<option  v-for="(option, index) in options" :key="index" :value="option.idModulo">{{ option.nombre }}</option>

</select> -->

          <vSelect class="select" v-if="rolOptions" multiple label="nombre" :options="rolOptions" v-model="Relacione" :reduce="item => item.idModulo"
            style="color: blue;   font-size: 14px;"></vSelect>
          <input class="boton" type="submit" value="Aceptar" v-on:click="Guardar()">
        </section>
      </body>

      </html>
    </div>
        <!--FooterDe/> !--->
      </div>
</template>

<script>
///import HeaderQa from '@/components/HeaderQa.vue'
///import FooterDe from '@/components/FooterDe.vue'
import axios from 'axios'
import vSelect from 'vue-select';
export default {
  name: "RolEditar",
  components: {
  ///  HeaderQa,
   /// FooterDe,
    vSelect
  },
  data: function () {
    return {
      idRol: null,
      currentRol: null,
      form: {
        idRol: this.$route.params.idRol,
        "nombre": "",
      },
      rolOptions: null,
      rolRelations: null,
      Relacione: null,
    }
  },
  mounted: async function () {
    this.idRol = this.$route.params.idRol

    let dirrecionRol = `http://localhost:5069/api/Roles/Obtener/${this.idRol}`;
    await axios.get(dirrecionRol).then(data => {
      this.currentRol = data.data.response;
      this.form.nombre = this.currentRol.nombre
    });

    let direccionMod = "http://localhost:5069/api/Modulos/ListaModulo";
    await axios.get(direccionMod).then(data => {
      this.rolOptions = data.data.response;
      console.log(data)
    });

    let direccionRel = "http://localhost:5069/api/Relaciones/ListaRelacione";
    await axios.get(direccionRel).then(data => {
      this.rolRelations = data.data.response.filter(element => element.idRol == this.idRol);
      this.Relacione = this.rolRelations.map(element => {
        return element.idModulo
      })
    });
  },
  methods: {
    editar() {
      axios.put('http://localhost:5069/api/Roles/Editar', this.form)

      this.$router.push("RolesTs");

    },
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
  color: aliceblue;
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

.select {
  background: #24303c;
  color: aliceblue;
}
</style>