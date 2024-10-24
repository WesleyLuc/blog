<script>
import imgLogo from "@/assets/rimuru_logo.jpg"; // Importa a imagem do logo

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      imgLogo // Armazena a imagem do logo no estado do componente
    };
  },
  methods: {
    login() {
      console.log('E-mail:', this.email);
      console.log('Senha:', this.password);
      if (this.email === this.password) {
        console.log("Usuário e senha são iguais.");
      }
    }
  }
};
</script>

<template>
  <div class="login-container">
    <img :src="imgLogo" alt="Logo" class="logo" />
    <form @submit.prevent="login" class="login-form">
      <input type="email" v-model="email" placeholder="E-mail" required />
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