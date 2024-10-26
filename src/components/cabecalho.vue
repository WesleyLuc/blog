<script> 
import btn from './button.vue';

export default {
    name: "cabecalho",
    props: {
        titulo: {
            type: String,
            required: false
        },
        img_cabec: {
            type: String,
            required: false
        }
    },
    components: {
        btn
    }
}
</script>

<template>
    <header class="app-header">
        <div class="logo">
            <img :src="img_cabec" alt="Imagem do Cabeçalho" />
        </div>
        <div class="titulo">
            <h1>{{ titulo }}</h1> <!-- Nome do usuário exibido aqui -->
        </div>
        <div class="nav-buttons">
            <btn txt_button="Login" link="/" />
            <btn txt_button="Post" link="/post" />
        </div>
    </header>
</template>

<style scoped>
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #2196F3; /* Cor de fundo da toolbar */
    color: white;
    width: 100%; /* Garante que o cabeçalho ocupe toda a largura */
    box-sizing: border-box; /* Inclui o padding na largura total */
    height: 60px; /* Altura fixa da toolbar */
}

.logo img {
    width: 50px; /* Ajuste o tamanho conforme necessário */
    height: auto; /* Manter proporções */
}

.titulo h1 {
    font-size: 24px; /* Tamanho do título */
    font-weight: bolder;
    margin: 0; /* Remove margem */
    flex-grow: 1; /* Para centralizar */
    text-align: center; /* Centraliza o texto */
}

.nav-buttons {
    display: flex;
    gap: 10px; /* Espaçamento entre os botões */
}

btn {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #ffffff; /* Cor de fundo do botão */
    color: white;
    cursor: pointer; /* Muda o cursor ao passar o mouse */
}
</style>
