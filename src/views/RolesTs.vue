<template>
    <div>
    <HeaderQa/>
    <div>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th  @click="Guardar()" scope="col"><img src="../assets/plus.png"  alt="icono" style=" cursor: pointer; width: 40px  !important;"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="Roles in Lista" :key=Roles.idRol>
                    <td scope="row">{{ Roles.idRol }}</td>
                    <td>{{ Roles.nombre }}</td>
                    <td style="cursor: pointer; width: 10%;">
                        <button type="button" class="btn btn-dark margen "  @click="editar(Roles.idRol)">
                            <img src="../assets/gr.png"  style="width: 80%">
                        </button>

                        <button ctype="button" class="btn btn-dark margen " @click="Eliminar(Roles.idRol)">
                            <img src="@/assets/bas.png"  style="width: 80%">
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <FooterDe/>
    </div>
</template>

<script>
import HeaderQa from '@/components/HeaderQa.vue';
import FooterDe from '@/components/FooterDe.vue';
import axios from 'axios';
export default {
    name: "RolesTs",
    components: {
        HeaderQa,
        FooterDe

},
data() {
        return {
            Lista: null,
            ListaRol: null,
            idRol: null,
            form: {
                "idRol": "",
                "Nombre": "",
            }
        }
    },
    mounted: function () {
        let dirrecion = "http://localhost:5069/api/Roles/Lista";
        axios.get(dirrecion).then(data => {
            this.Lista = data.data.response;
            console.log(this.Lista);
        })

        let dirrecionts = "http://localhost:5069/api/Modulos/ListaModulo";
        axios.get(dirrecionts).then(data =>{
            this.ListaModulo = data.data.response;
            console.log(this.ListaModulo);
        })
    },
    methods:{
        Guardar(){
         this.$router.push("RolNuevo");
        },

        editar(idRol){
        this.$router.push('RolEditar/' + idRol) 
    },
    Eliminar(idRol){
        axios.delete('http://localhost:5069/api/Roles/Eliminar/' + idRol)
        .then(data=>{
            console.log(data);
        })
    }
    },

    
}
</script>