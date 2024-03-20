<template>
    <div style="display: flex;">

        <div style="background-color: black; width: 200px; height: 100vh; display: block;">
            <router-link style="display: block; text-align: left; color: #fff;" :to="{ name: 'dashboard' }">Dashboard</router-link>
            <router-link style="display: block; text-align: left; color: #fff;" :to="{ name: 'usuarios' }">Usuarios</router-link>
            <router-link style="display: block; text-align: left; color: #fff;" :to="{ name: 'RolesTs' }">Roles</router-link>
            <router-link style="display: block; text-align: left; color: #fff;" :to="{ name: 'ModuloEt' }">Modulos</router-link>
        </div>

        <div style="width: 100%;">
            <HeaderQa/>
            <FooterDe/>
            <router-view style="width: 100%;"></router-view>
        </div>
        
    </div>
</template>
<script>
import HeaderQa from '@/components/HeaderQa.vue';
import FooterDe from '@/components/FooterDe.vue';
export default {
    name:"BaseComp",
    components:{
   HeaderQa,
   FooterDe
    }
}
</script>
<style lang="stylus" scoped>

</style>