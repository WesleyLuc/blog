<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="header">
  <p><h1 style="text-align: center;">Rimuru Tempest, sua ascenção para Lorde Demônio</h1></p>
  <figure style="text-align: center;">
  <img alt="rimuru_colocando_mascara" class="rimuru_colocando_mascara" src="./assets/rimuru_colocando_mascara.gif"/>
  </figure>
  <p>Rimuru Tempest, o protagonista de "Tensei Shitara Slime Datta Ken", alcançou um feito impressionante ao derrotar 20.000 soldados durante sua transformação em Lorde Demônio. Este evento não apenas destacou sua força extraordinária, mas também solidificou sua posição como um dos seres mais poderosos do mundo, capaz de aniquilar um exército inteiro com uma combinação de habilidades mágicas e estratégias astutas.</p>
  <p style="color: black; text-align: right; margin: 0px 0px 0px 10px;">Wesley</p>
  </div>  

  <div class="header">
  <figure style="text-align: center;">
  <img alt="rimuru_voando_solando" class="rimuru_voando_solando" src="./assets/rimuru_voando_solando.gif"/>
  </figure>
  <p>A ascensão de Rimuru ao título de Lorde Demônio não foi apenas uma questão de poder, mas também de responsabilidade. Ele usou suas novas habilidades para proteger seu povo e estabelecer uma era de paz, mostrando que a verdadeira força reside na capacidade de proteger aqueles que amamos.</p>
  <br>
  <p style="color: black; text-align: right; margin: 0px 0px 0px 10px;">Wesley</p>
  </div>

  <div class="header">
  <figure style="text-align: center;">
  <img alt="rimuru_fazendeiro" class="rimuru_fazendeiro" src="./assets/rimuru_fazendeiro.gif"/>
  </figure>
  <p>Com isso, deixo uma reflexão: em um mundo repleto de conflitos, que possamos encontrar inspiração na jornada de Rimuru e buscar sempre a paz, mesmo diante das adversidades. Até a próxima!</p>
  <p style="color: black; text-align: right; margin: 0px 0px 0px 10px;">Wesley</p>  
  </div>

</template>

<style scoped>

header {
  line-height: 1.5;
  background-color: rgb(0, 0, 0);
  width: 710px;
  height: 670px;
}

figure {
  text-align: center;

}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
