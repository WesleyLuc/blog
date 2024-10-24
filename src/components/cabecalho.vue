<script>
    import btn from './button.vue';
    export default { 
        name : "cabecalho",
        props: {
            titulo: {
                type: String,
                required: false
            },
            img_cabec: {
            type: String,
            required: false
            },
        },
        components: {
            btn
        }
    }
    //import imagem from "./assets/rimuru_colocando_mascara.gif"
</script>

<template>
<!--    <div id="cabecalho">
            <div class="cabecalho-col1">
                <h1>Rimuru_</h1>
            </div>
            <div>
                <a href="cabecalho-col1"><span>{{ nome }}</span></a>
            </div>
        </div>-->
        <div>
            <img :src="img_cabec" alt="Imagem do Cabecalho" width="250px"/>
            <h1> {{ titulo }} </h1>
            <btn txt_button="Posts" link="/"/>
            <btn txt_button="Login" link="/login"/>
        </div>
</template>

<style scoped>
h1 {
  font-size: 70px;
  font-weight: bolder;
  
}

h2 {
  font-weight: bolder;
}
btn {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #4CAF50; /* Green background */
    color: white;
  }
</style>
