<template>
  <!DOCTYPE html>
  <html lang="es">

  <head>
    <meta charset="UTF-8">
    <title>Inicio de Sesión</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>

    <div class="container">
    <div class="login-box">
      <h2>Inicio de sesión</h2>
      <form @submit.prevent="login">
        <div class="input-box">
        </div>
        <div class="input-box">
          <input type="Correo" v-model="correo" required>
          <label>Correo electrónico</label>
        </div>
        <div class="input-box">
          <input type="Contrasena" v-model="contrasena" required>
          <label>Contraseña</label>
        </div>
        <div class="forget-pass">
          <a href="#">Olvidaste tu contraseña</a>
        </div>
        <button type="submit" class="btn">Ingresar</button>
        <div class="signup-link">
          <a href="#">Registrarse</a>
        </div>
      </form>

      <div class="alert alert-danger" role="alert" v-if="error">
                       {{ error_msg }}
</div>
    </div>

      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
      <span style="--i:4;"></span>
      <span style="--i:5;"></span>
      <span style="--i:6;"></span>
      <span style="--i:7;"></span>
      <span style="--i:8;"></span>
      <span style="--i:9;"></span>
      <span style="--i:10;"></span>
      <span style="--i:11;"></span>
      <span style="--i:12;"></span>
      <span style="--i:13;"></span>
      <span style="--i:14;"></span>
      <span style="--i:15;"></span>
      <span style="--i:16;"></span>
      <span style="--i:17;"></span>
      <span style="--i:18;"></span>
      <span style="--i:19;"></span>
      <span style="--i:20;"></span>
      <span style="--i:21;"></span>
      <span style="--i:22;"></span>
      <span style="--i:23;"></span>
      <span style="--i:24;"></span>
      <span style="--i:25;"></span>
      <span style="--i:26;"></span>
      <span style="--i:27;"></span>
      <span style="--i:28;"></span>
      <span style="--i:29;"></span>
      <span style="--i:30;"></span>
      <span style="--i:31;"></span>
      <span style="--i:32;"></span>
      <span style="--i:33;"></span>
      <span style="--i:34;"></span>
      <span style="--i:35;"></span>
      <span style="--i:36;"></span>
      <span style="--i:37;"></span>
      <span style="--i:38;"></span>
      <span style="--i:39;"></span>
      <span style="--i:40;"></span>
      <span style="--i:41;"></span>
      <span style="--i:42;"></span>
      <span style="--i:43;"></span>
      <span style="--i:44;"></span>
      <span style="--i:45;"></span>
      <span style="--i:46;"></span>
      <span style="--i:47;"></span>
      <span style="--i:48;"></span>
      <span style="--i:49;"></span>
    </div>
  </body>

  </html>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HomeView',
  components: {

  },
  data: function () {
    return {
      Usuario: "",
      contrasena: "",
      correo: null,
      error: false,
      error_msg: "",
    }
  },
  methods: {
    login() {
      let json = {
        "Usuario": this.Usuario,
        "Correo": this.correo,
        "Contrasena": this.Contrasena
      };
      axios.get('http://localhost:5069/api/Usuarios/ListaUsuario', json)
        .then(data => {
          console.log(data)

          if (data.statusText == "OK") {
            let results = data.data.response;

            let userToLoad = results.find(element => element.correo == this.correo)
            
            if(userToLoad && userToLoad.contrasena==this.contrasena){
              this.$router.push('Base')
            }

            else{
              console.log('Contrasena incorrecta')
            }

          } else {
            this.error = true;
          }
        })
    }
  }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: black;
}

.login-box {
  position: relative;
  width: 400px;
}

.login-box form {
  width: 100%;
  padding: 0 50px;
}

h2 {
  font-size: 2em;
  color: #F02A2A;
  text-align: center;
}

.input-box {
  position: relative;
  margin: 25px 0;
}

.input-box input {
  width: 100%;
  height: 50px;
  background: transparent;
  border: 2px solid black;
  outline: none;
  border-radius: 40px;
  font-size: 1em;
  color: #fff;
  padding: 0 20px;
  transition: .5s ease;
}

.input-box input:focus,
.input-box input:focus {
  border-color: #F02A2A;
}

.input-box label {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  font-size: 1em;
  color: #fff;
  pointer-events: none;
  transition: .5s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: black;
}

.container {
  position: relative;
  width: 256px;
  height: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container span {
  position: absolute;
  left: 0;
  width: 32px;
  height: 6px;
  background: #2c4766;
  border-radius: 8px;
  transform-origin: 128px;
  transform: scale(2.2) rotate(calc(var(--i)*(360deg/50)));
  animation: animate .5s linear infinite;
  animation-delay: calc(var(--i)*(5s/50));
}

@keyframes animate {
  0% {
    background: #F02A2A;
  }

  25% {
    background: #2c4766;
  }
}

.login-box {
  position: absolute;
  width: 400px;
}

.login-box form {
  width: 100%;
  padding: 0 50px;
}

h2 {
  font-size: 2em;
  color: #F02A2A;
  text-align: center;
}

.input-box {
  position: relative;
  margin: 25px 0;
}

.input-box input {
  width: 100%;
  height: 50px;
  background: transparent;
  border: 2px solid #2c4766;
  outline: none;
  border-radius: 40px;
  font-size: 1em;
  color: #fff;
  padding: 0 20px;
  transition: .5s ease;
}

.input-box input:focus,
.input-box input:focus {
  border-color: #F02A2A;
}

.input-box label {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  font-size: 1em;
  color: #fff;
  pointer-events: none;
  transition: .5s ease;
}

.input-box input:focus~label,
.input-box input:valid~label {
  top: 1px;
  font-size: .8em;
  background: black;
  padding: 0 6px;
  color: #F02A2A;
}

.btn {
  position: relative;
  display: inline-block;
  width: 100%;
  font-size: 1.4em;
  letter-spacing: .1em;
  color: #F02A2A;
  background: black;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid #F02A2A;
  border-radius: 30px;
  padding: 5px 30px;
  z-index: 1;
  overflow: hidden;
  transition: color 1s, box-shadow 1s;
}

.btn:hover {
  transition-delay: 0s, 1s;
  color: #fff;
  box-shadow:
    0 0 10px #F02A2A,
    0 0 20px #F02A2A,
    0 0 40px #F02A2A,
    0 0 80px #F02A2A,
    0 0 160px #F02A2A;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50px;
  width: 0%;
  height: 100%;
  background: #F02A2A;
  transform: skewX(35deg);
  z-index: -1;
  transition: 1s;
}

.btn:hover:before {
  width: 100%;
}

.forget-pass {
  margin: -15px 0 10px;
  text-align: center;
}

.forget-pass a {
  font-size: .85em;
  color: #fff;
  text-decoration: none;
}

.forget-pass a:hover {
  text-decoration: underline;
}

.signup-link {
  margin: 20px 0 10px;
  text-align: center;
}

.signup-link a {
  font-size: 1em;
  color: #F02A2A;
  text-decoration: none;
  font-weight: 600;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>