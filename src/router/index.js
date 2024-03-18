import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BaseComp from '../views/BaseComp.vue'
import DashboardComp from '../views/DashboardComp.vue'
import UsersComp from '../views/UsersComp.vue'
import UserForm from '../views/UserForm.vue'
import TablaWe from '@/components/TablaWe.vue'
import EditarAs from '../views/EditarAs.vue'
import RolesTs from '../views/RolesTs.vue'
import RolNuevo from '../views/RolNuevo.vue'
import RolEditar from '../views/RolEditar.vue'
import ModuloSd from '../views/ModuloSd.vue'
import ModuloEt from '../views/ModuloEt.vue'
import ModuloEditar from  '../views/ModuloEditar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/base',
    name: 'Base',
    component: BaseComp,
    children: [
      { name: 'dashboard', path: 'dashboard', component: DashboardComp },
      { name: 'usuarios', path: 'users', component: UsersComp},
      { name: 'usuariosForm', path: 'userForm', component: UserForm},
      { name: 'TablaWe', path: 'TablaWe', component: TablaWe},
      { name: 'EditarAs,', path: 'EditarAs/:idUsuario', component: EditarAs},
      { name:  'RolesTs', path: 'RolesTs', component:RolesTs},
      {name: 'RolNuevo', path: 'RolNuevo', component:RolNuevo},
      {name: 'RolEditar', path: 'RolEditar/:idRol', component:RolEditar},
      {name: 'ModuloSd', path: 'ModuloSd', component:ModuloSd},
      {name: 'ModuloEt', path: 'ModuloEt', component: ModuloEt},
      {name: 'ModuloEditar', path: 'ModuloEditar/:idModulo', component: ModuloEditar}

    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
