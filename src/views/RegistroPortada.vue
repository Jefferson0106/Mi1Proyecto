<template>
    <div class="body">
   <div class="login-container">
	<form action="" class="form-login">
		<label for="login-input-user" class="login__label">
			Nombre
		</label>
		<input id="login-input-user" class="login__input" type="text" v-model="form.nombre" required>

        <label for="login-input-user" class="login__label">
			Apellido
		</label>
		<input id="login-input-user" class="login__input" type="text" v-model="form.apellido" required>

        <label for="login-input-user" class="login__label">
			correo
		</label>
		<input id="login-input-user" class="login__input" type="text" v-model="form.correo" required>

		<label for="login-input-password" class="login__label">
			Password
		</label>
		<input id="login-input-password" class="login__input" type="password"  v-model="form.contrasena" required>

        <label for="login-input-user" class="login__label">
			cargo
		</label>
		<input id="login-input-user" class="login__input" type="text" v-model="form.cargo" required>

        <label for="login-input-user" class="login__label">
			telefono
		</label>
		<input id="login-input-user" class="login__input" type="text" v-model="form.telefono" required>

        <select class="select" v-model="form.idRol" name="transport" id="transport">

<option v-for="(option, index) in options" :key="index" :value="option.idRol">{{ option.nombre }}</option>

</select>

		<button class="login__submit" v-on:click="guardar()" disabled>Reguistrar</button>
	</form>
</div>
</div>
</template>


<script>
import axios from 'axios';
export default{
    name: "RegiistroPortada",
    data() {
    return {
     idUsuario: null,
     form: {
        nombre: null,
        apellido: null,
        correo: null,
        contrasena: null,
        cargo: null,
        telefono: null,
        idRol: null,
    },
    options: null,
}
  },
    components: {

    },
    mounted: function (){
    let direccion = "http://localhost:5069/api/Roles/Lista";
    axios.get(direccion).then(data => {
      this.options = data.data.response;
      console.log(data)
    })
  },

    methods: {
    guardar() {
      console.log(this.form)
      axios.post(`http://localhost:5069/api/Usuarios/GuardarUsuario?nombre=${this.form.nombre}&apellido=${this.form.apellido}&correo=${this.form.correo}&contrasena=${this.form.contrasena}&cargo=${this.form.cargo}&telefono=${this.form.telefono}&idRol=${this.form.idRol}`)
        .then(data => {
          console.log(data);
          this.$router.push("HomeView")
        });
    }
  }
}

</script>


<style scoped>
body {
	background-color: 
purple;
    color: 
purple;
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
	line-height: 1.25;
	letter-spacing: 1px;
}

* {
	box-sizing: border-box;
	transition: .25s all ease;
}

.login-container {
	display: block;
	position: relative;
	z-index: 0;
	margin: 4rem auto 0;
  padding: 5rem 4rem 0 4rem;
	width: 100%;
	max-width: 525px;
	min-height: 680px;
	background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/283591/login-background.jpg);
	box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.85);
}

.login-container:after {
	content: '';
	display: inline-block;
	position: absolute;
	z-index: 0;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-image: radial-gradient(ellipse at left bottom, rgba(22, 24, 47, 1) 0%,rgba(38, 20, 72, .9) 59%, rgba(17, 27, 75, .9) 100%);
	box-shadow: 0 -20px 150px -20px rgba(0, 0, 0, 0.5);
}

.form-login {
	position: relative;
	z-index: 1;
  padding-bottom: 4.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

.login-nav {
	position: relative;
	padding: 0;
	margin: 0 0 6em 1rem;
}

.login-nav__item {
	list-style: none;
	display: inline-block;
}

.login-nav__item + .login-nav__item {
	margin-left: 2.25rem;
}

.login-nav__item a {
	position: relative;
	color: rgba(255, 255, 255, 0.5);
	text-decoration: none;
	text-transform: uppercase;
	font-weight: 500;
	font-size: 1.25rem;
	padding-bottom: .5rem;
	transition: .20s all ease;
}

.login-nav__item.active a,
.login-nav__item a:hover{
	color: #ffffff;
	transition: .15s all ease;
}

.login-nav__item a:after {
	content: '';
  display: inline-block;
  height: 10px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  right: 100%;
  bottom: -1px;
  left: 0;
  border-radius: 50%;
  transition: .15s all ease;
}

.login-nav__item a:hover:after,
.login-nav__item.active a:after{
	background-color: rgb(17, 97, 237);
	height: 2px;
	right: 0;
	bottom: 2px;
	border-radius: 0;
	transition: .20s all ease;
}
.login__label {
	display: block;
	padding-left: 1rem;
}

.login__label,
.login__label--checkbox {
	color: rgba(255, 255, 255, 0.5);
	text-transform: uppercase;
	font-size: .75rem;
	margin-bottom: 1rem;
}

.login__label--checkbox {
	display: inline-block;
	position: relative;
	padding-left: 1.5rem;
	margin-top: 2rem;
	margin-left: 1rem;
	color: #ffffff;
	font-size: .75rem;
	text-transform: inherit;
}

.login__input {
	color: white;
	font-size: 1.15rem;
	width: 100%;
	padding: .5rem 1rem;
	border: 2px solid transparent;
	outline: none;
	border-radius: 1.5rem;
	background-color: rgba(255, 255, 255, 0.25);
	letter-spacing: 1px;
}

.login__input:hover,
.login__input:focus{
	color: white;
	border: 2px solid rgba(255, 255, 255, 0.5);
	background-color: transparent;
}

.login__input + .login__label {
	margin-top: 1.5rem;
}

.login__input--checkbox {
	position: absolute;
	top: .1rem;
	left: 0;
	margin: 0;
}

.login__submit {
	color: #ffffff;
	font-size: 1rem;
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-top: 1rem;
	padding: .75rem;
	border-radius: 2rem;
	display: block;
	width: 100%;
	background-color: rgba(17, 97, 237, .75);
	border: none;
	cursor: pointer;
}

.login__submit:hover {
	background-color: rgba(17, 97, 237, 1);
}

.login__forgot {
	display: block;
	margin-top: 3rem;
	text-align: center;
	color: rgba(255, 255, 255, 0.75);
	font-size: .75rem;
	text-decoration: none;
	position: relative;
	z-index: 1;
}

.login__forgot:hover {
	color: rgb(17, 97, 237);
}

.select {
  width: 15%;
  background:  rgb(17, 97, 237);;
  color: aliceblue;
  padding: 1px;
}
.body {
	background-color: purple;
	
}
</style>