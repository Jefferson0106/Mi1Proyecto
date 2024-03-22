<template>
    <div>

        <div>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th @click="Guardar()" scope="col"><img src="../assets/plus.png" alt="icono"
                                style=" cursor: pointer; width: 40px  !important;"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="Roles in Lista" :key=Roles.idRol>
                        <td scope="row">{{ Roles.idRol }}</td>
                        <td>{{ Roles.nombre }}</td>
                        <td style="cursor: pointer; width: 10%;">
                            <button type="button" class="btn btn-dark margen " @click="editar(Roles.idRol)">
                                <img src="../assets/gr.png" style="width: 80%">
                            </button>

                            <button ctype="button" class="btn btn-dark margen " @click="Eliminar(Roles.idRol)">
                                <img src="@/assets/bas.png" style="width: 80%">
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!--FooterDe/> !--->
    </div>
</template>

<script>
///import HeaderQa from '@/components/HeaderQa.vue';
//import FooterDe from '@/components/FooterDe.vue';
import axios from 'axios';
export default {
    name: "RolesTs",
    components: {
        ///  HeaderQa,
        /// FooterDe

    },
    data() {
        return {
            Lista: null,
            ListaRol: null,
            rolUsers: null,
            idRol: null,
            form: {
                "idRol": "",
                "Nombre": "",
            },
            Relacione: null,
            Relst: null
        }
    },
    mounted: function () {

        let dirrecion = "http://localhost:5069/api/Roles/Lista";
        axios.get(dirrecion).then(data => {
            this.Lista = data.data.response;
            console.log(this.Lista);
        })

        let dirrecionts = "http://localhost:5069/api/Modulos/ListaModulo";
        axios.get(dirrecionts).then(data => {
            this.ListaModulo = data.data.response;
            console.log(this.ListaModulo);
        })
        let direccionRel = "http://localhost:5069/api/Relaciones/ListaRelacione";
        axios.get(direccionRel).then(data => {
            this.Relst = data.data.response;
            console.log(data)
        });
    },
    methods: {

        async verifyUsers(idRol) {
            let dirrecionUser = "http://localhost:5069/api/Usuarios/ListaUsuario";
            await axios.get(dirrecionUser).then(data => {
                console.log('users', data)
                let usersVerified = data.data.response;
                usersVerified = usersVerified.filter(element => element.idRol == idRol)

                if(usersVerified.length > 0){
                    return true
                }

                else{
                    return false
                }
            })
        },

        Guardar() {
            this.$router.push("RolNuevo");
        },

        editar(idRol) {
            this.$router.push('RolEditar/' + idRol)
        },
        
        async Eliminar(idRol) {

            let dirrecionUser = "http://localhost:5069/api/Usuarios/ListaUsuario";
            let usersGetted = await axios.get(dirrecionUser)

            let usersVerified = usersGetted.data.response;
            usersVerified = usersVerified.filter(element => element.idRol == idRol)

            if(usersVerified.length>0){
                alert('Hay usuarios con este rol, no es posible eliminar')
                return
            }

            console.log(this.Relst)
            let myRelations = this.Relst.filter(element => element.idRol == idRol)
            console.log(myRelations)

            for (let relation of myRelations) {

                let dirreccionrt = "http://localhost:5069/api/Relaciones/Eliminar/" + relation.idRelaciones
                let deleteResponse = await axios.delete(dirreccionrt)
                console.log('relation', deleteResponse)
            }

            let deleteRole = await axios.delete('http://localhost:5069/api/Roles/Eliminar/' + idRol)
            console.log(deleteRole)

            let dirrecion = "http://localhost:5069/api/Roles/Lista";
            axios.get(dirrecion).then(data => {
                this.Lista = data.data.response;
                console.log(this.Lista);
            })
        }
    },


}
</script>