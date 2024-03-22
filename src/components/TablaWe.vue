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
                    <th  @click="Guardar()" scope="col"><img src="../assets/plus.png"  alt="icono" style=" cursor: pointer; width: 40px  !important;"></th>
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
                            <img src="../assets/gr.png"  style="width: 80%">
                        </button>
                          <VueSimpleAlert/>
                        <button ctype="button" class="btn btn-dark margen " @click="eliminar(Usuario.idUsuario)">
                            <img src="@/assets/bas.png"  style="width: 80%">
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <FooterDe/>
    </div>
</template>

<script>
//import HeaderQa from './HeaderQa.vue';
import FooterDe from './FooterDe.vue';
import axios from 'axios';
import VueSimpleAlert from 'vue-simple-alert';
export default {
    name: "TablaWe",
    data() {
        return {
            ListaUsuario: null,
        }
    },

    components: {
      ///  HeaderQa,
        FooterDe,
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
        Guardar(){
           this.$router.push('userForm')
        },

    editar(idUsuario) {
      this.$router.push('EditarAs/' + idUsuario);
    },
    mostrarAlerta() {
      this.$alert('¡Su Usuario a Sido creado!');
    },
    
    eliminar(idUsuario){
        axios.delete('http://localhost:5069/api/Usuarios/Eliminar/' + idUsuario)
        .then(data => {
          console.log(data);

          let dirrecion = "http://localhost:5069/api/Usuarios/ListaUsuario";
        axios.get(dirrecion).then(data => {
            this.ListaUsuario = data.data.response;
            console.log(this.ListaUsuario);
        })

          
    });
}
    }


}


</script>
