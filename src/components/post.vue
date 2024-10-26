<script setup>
// Props comentados
// const props = defineProps({
//   tit_post: {
//     type: String,
//     required: false
//   },
//   mes_post: {
//     type: String,
//     required: false
//   },
//   autor_post: {
//     type: String,
//     required: false
//   },
//   img_post: {
//     type: String,
//     required: false
//   }
// });
</script>
<template>
  <div class="post">
    <img src="@/assets/rimuru_colocando_mascara.gif" alt="Imagem do Post" width="100%" height="auto" />
    <h2>Introdução</h2>
    <p>Rimuru Tempest, o protagonista de Tensei Shitara Slime Datta Ken, alcançou um feito impressionante ao derrotar 20.000 soldados durante sua transformação em Lorde Demônio. Este evento não apenas destacou sua força extraordinária, mas também solidificou sua posição como um dos seres mais poderosos do mundo, capaz de aniquilar um exército inteiro com uma combinação de habilidades mágicas e estratégias astutas.</p>
    <p class="autor">Wesley</p>
  </div>

  <div class="post">
    <img src="@/assets/rimuru_voando_solando.gif" alt="Imagem do Post" width="100%" height="auto" />
    <h2>Reflexão</h2>
    <p>A ascensão de Rimuru ao título de Lorde Demônio não foi apenas uma questão de poder, mas também de responsabilidade. Ele usou suas novas habilidades para proteger seu povo e estabelecer uma era de paz, mostrando que a verdadeira força reside na capacidade de proteger aqueles que amamos.</p>
    <p class="autor">Wesley</p>
  </div>

  <div class="post">
    <img src="@/assets/rimuru_fazendeiro.gif" alt="Imagem do Post" width="100%" height="auto" />
    <h2>Finalização</h2>
    <p>Com isso, deixo uma reflexão: em um mundo repleto de conflitos, que possamos encontrar inspiração na jornada de Rimuru e buscar sempre a paz, mesmo diante das adversidades. Até a próxima!</p>
    <p class="autor">Wesley</p>
  </div>
</template>



<style scoped>
.post {
  background-color: gainsboro;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px; /* Adiciona bordas arredondadas */
}

.autor {
  color: black;
  text-align: right;
  margin: 0;
  font-size: 0.8em;
}
</style>
