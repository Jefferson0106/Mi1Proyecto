<template>
  <div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Cargo</th>
          <th scope="col">Telefono</th>
          <th scope="col">Correo</th>
          <th @click="Guardar()" scope="col"><img src="../assets/plus.png" alt="icono"
              style=" cursor: pointer; width: 40px  !important;"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="Usuario in ListaUsuario" :key=Usuario.idUsuario>
          <td scope="row">{{ Usuario.idUsuario }}</td>
          <td>{{ Usuario.nombre }}</td>
          <td>{{ Usuario.apellido }}</td>
          <td>{{ Usuario.cargo }}</td>
          <td>{{ Usuario.telefono }}</td>
          <td>{{ Usuario.correo }}</td>
          <td style="cursor: pointer; width: 10%;">
            <button type="button" class="btn btn-dark margen " @click="editar(Usuario.idUsuario)">
              <img src="../assets/gr.png" style="width: 80%">
            </button>
            <VueSimpleAlert />

            <button ctype="button" class="btn btn-dark margen " @click="modalDelete(Usuario.idUsuario)">
              <img src="@/assets/bas.png" style="width: 80%">
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="modalDelteUsers" class="modal">
      <div class="modal-content">
        <!-- <span class="close" @click="closeModal">&times;</span> -->
        <p>Contenido del modal</p>
        <b-row>
          <button ctype="button" class="btn btn-dark margen " @click="eliminar">
            Eliminar
          </button>
          <button ctype="button" class="btn btn-dark margen " @click="modalDelteUsers = false">
            Cancelar
          </button>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
//import HeaderQa from './HeaderQa.vue';
import axios from 'axios';
import VueSimpleAlert from 'vue-simple-alert';
export default {
  name: "TablaWe",
  data() {
    return {
      ListaUsuario: null,
      idUserDelete: null,
      modalDelteUsers: false,
    }
  },

  components: {
    ///  HeaderQa,
    VueSimpleAlert



  },

  mounted: function () {
    let dirrecion = "http://localhost:5069/api/Usuarios/ListaUsuario";
    axios.get(dirrecion).then(data => {
      this.ListaUsuario = data.data.response;
      console.log(this.ListaUsuario);
    })
  },

  methods: {
    Guardar() {
      this.$router.push('userForm')
    },

    editar(idUsuario) {
      this.$router.push('EditarAs/' + idUsuario);
    },
    mostrarAlerta() {
      this.$alert('¡Su Usuario a Sido creado!');
    },
    modalDelete(idUser) {
      this.modalDelteUsers = true;
      this.idUserDelete = idUser;
    },
    eliminar() {
      axios.delete('http://localhost:5069/api/Usuarios/Eliminar/' + this.idUserDelete)
        .then(data => {
          console.log(data);

          let dirrecion = "http://localhost:5069/api/Usuarios/ListaUsuario";
          axios.get(dirrecion).then(data => {
            this.ListaUsuario = data.data.response;
            this.modalDelteUsers = false;
            console.log(this.ListaUsuario);
          })


        });
    }
  }


}


</script>
<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
