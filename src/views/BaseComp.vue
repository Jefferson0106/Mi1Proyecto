<template>
    <div style="display: flex;">

        <div style="background-color: black; width: 200px; height: 100vh; display: block;">
            <router-link class="router" style="display: block; text-align: left; color: #fff; text-decoration: none;"
                :to="{ name: 'dashboard' }"> <img src="../assets/tabla.png" alt="Image"
                    style="width:40px;height:100x;">Dashboard</router-link>
            <router-link class="router" style="display: block; text-align: left; color: #fff; text-decoration: none;"
                :to="{ name: 'usuarios' }"> <img src="../assets/usuarioblanco.png" alt="Image"
                    style="width:40px;height:100x;"> Usuarios</router-link>
            <router-link class="router" style="display: block; text-align: left; color: #fff; text-decoration: none;"
                :to="{ name: 'RolesTs' }"> <img src="../assets/herramienta.png" alt="Image"
                    style="width:40px;height:100x;"> Roles</router-link>
            <router-link class="router" style="display: block; text-align: left; color: #fff; text-decoration: none;"
                :to="{ name: 'ModuloEt' }"> <img src="../assets/modulo.png" alt="Image" style="width:40px;height:100x;">
                Modulos</router-link>
        </div>

        <div style="width: 100%;">
            <HeaderQa />
            <FooterDe />
            <router-view style="width: 100%;"></router-view>
        </div>

    </div>
</template>
<script>
import HeaderQa from '@/components/HeaderQa.vue';
import FooterDe from '@/components/FooterDe.vue';
export default {
    name: "BaseComp",
    components: {
        HeaderQa,
        FooterDe
    },
    data() {
        return {
            idRol: null
        }
    },
    mounted() {
        this.idRol = localStorage.getItem('Rol')
        console.log(this.idRol)
    },
    methods: {
    }
}
</script>
<style scoped>
.router {
    width: 100%;
    background: black;
    border: none;
    padding: 12px;
    color: white;
    margin: 16px 0;
    font-size: 16px;
}
</style>