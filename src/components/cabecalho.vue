<script>
    import button from './button.vue';
    export default { 
        name : "cabecalho",
        props: {
            titulo: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
            img_cabec: {
            type: String,
            required: true
            },
            components: {
            button
            }
        }
    //import imagem from "./assets/rimuru_colocando_mascara.gif"
  }
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
            <a href="https://www.youtube.com/watch?v=GhGTc6p8sg0"> {{ link }} </a>
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
</style>
