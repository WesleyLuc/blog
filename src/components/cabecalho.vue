<script>
    export default { 
        name : "cabecalho",
        props: {
            titulo: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
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
            <h1> {{ titulo }} </h1>
            <span> {{ name }} </span>
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
