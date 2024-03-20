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
                    <tr v-for="Modulo in ListaModulo" :key=Modulo.idModulo>
                        <td scope="row">{{ Modulo.idModulo }}</td>
                        <td>{{ Modulo.nombre }}</td>
                        <td style="cursor: pointer; width: 10%;">
                            <button type="button" class="btn btn-dark margen " @click="Editar(Modulo.idModulo)">
                                <img src="../assets/gr.png" style="width: 80%">
                            </button>

                            <button @click="Eliminar(Modulo.idModulo)" type="button" class="btn btn-dark margen ">
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
///import FooterDe from '@/components/FooterDe.vue';
import axios from 'axios';
export default {
    name: "ModuloEt",
    components: {
      //  HeaderQa,
      // FooterDe
    },
    data() {
        return {
            ListaModulo: null,
        }
    },
    mounted: function () {
        let dirrecion = "http://localhost:5069/api/Modulos/ListaModulo";
        axios.get(dirrecion).then(data => {
            console.log(data);
            this.ListaModulo = data.data.response;
            console.log(this.ListaModulo);
        })
    },
    methods: {
        Guardar() {
            this.$router.push("ModuloSd");
        },
        Editar(idModulo) {
            this.$router.push('ModuloEditar/' + idModulo)
        },
        Eliminar(idModulo) {
            axios.delete("http://localhost:5069/api/Modulos/Eliminar/" + idModulo)
                .then(data => {
                    console.log(data);

                    let dirrecion = "http://localhost:5069/api/Modulos/ListaModulo";
                    axios.get(dirrecion).then(data => {
                        console.log(data);
                        this.ListaModulo = data.data.response;
                        console.log(this.ListaModulo);
                    })

                })
        }
    }
}
</script>

<style scoped></style>