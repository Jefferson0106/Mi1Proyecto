<template>
    <div style="display: flex;">
        <div style="background-color: black; width: 200px; height: 100vh; display: block;">
            <router-link style="display: block; text-align: left; color: #fff;" :to="{ name: 'dashboard' }">Dashboard</router-link>
            <router-link style="display: block; text-align: left; color: #fff;" :to="{ name: 'usuarios' }">Usuarios</router-link>
            <router-link style="display: block; text-align: left; color: #fff;" :to="{ name: 'RolesTs' }">Roles</router-link>
            <router-link style="display: block; text-align: left; color: #fff;" :to="{ name: 'ModuloEt' }">Modulos</router-link>
        </div>
        
        <router-view style="width: 100%;"></router-view>
    </div>
</template>
<script>
export default {
    name:"BaseComp"
}
</script>
<style lang="stylus" scoped>

</style>