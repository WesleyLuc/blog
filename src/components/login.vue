<script>
import imgLogo from "@/assets/rimuru_logo.jpg"; 

export default {
  name: "Login",
  data() {
    return {
      usuario: '', 
      password: '',
      imgLogo 
    };
  },
  methods: {
    login() {
      console.log('Usuário:', this.usuario);
      console.log('Senha:', this.password);
      
      if (this.usuario === 'lkdsahfl' && this.password === '123') {
        console.log("Usuário e senha estão corretos.");
        
        
        this.$emit('login', this.usuario);
        this.$router.push('/post'); 
      } else {
        console.error("Usuário ou senha incorretos.");
      }
    }
  }
};
</script>

<template>
  <div class="login-container">
    <img :src="imgLogo" alt="Logo" class="logo" />
    <form @submit.prevent="login" class="login-form">
      <input type="text" v-model="usuario" placeholder="Usuário" required /> 
      <input type="password" v-model="password" placeholder="Senha" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login-container {
   display: flex;
   flex-direction: column;
   align-items: center;
}
.logo {
   margin-bottom: 20px; /* Espaço entre logo e formulário */
}
.login-form {
   display: flex;
   flex-direction: column;
}
input {
   margin: 10px; /* Espaço entre inputs */
}
button {
   background-color: #4CAF50; /* Cor do botão */
   color: white; /* Cor do texto */
}
</style>
