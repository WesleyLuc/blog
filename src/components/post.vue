<script setup>
import { defineProps } from 'vue';

import rimuruImage1 from '../assets/rimuru_colocando_mascara.gif';
import rimuruImage2 from '../assets/rimuru_voando_solando.gif';
import rimuruImage3 from '../assets/rimuru_fazendeiro.gif';
import rimuruImage4 from '../assets/rimuru_logo.jpg';

const props = defineProps({
  tit_post: {
    type: String,
    required: false
  },
  mes_post: {
    type: String,
    required: false
  },
  autor_post: {
    type: String,
    required: false
  },
  img_post: {
    type: String,
    required: false
  }
});
</script>

<template>
  <div class="post">
    <img :src="img_post" alt="Imagem do Post" width="100%" height="50%" />
    <h2 style="font: bold">{{ tit_post }}</h2>
    <p>{{ mes_post }}</p>
    <p class="autor">{{ autor_post }}</p>
  </div>
  <Post 
      :img_post="rimuruImage1"
      tit_post="Introdução" 
      mes_post="Rimuru Tempest, o protagonista de Tensei Shitara Slime Datta Ken, alcançou um feito impressionante ao derrotar 20.000 soldados durante sua transformação em Lorde Demônio. Este evento não apenas destacou sua força extraordinária, mas também solidificou sua posição como um dos seres mais poderosos do mundo, capaz de aniquilar um exército inteiro com uma combinação de habilidades mágicas e estratégias astutas." 
      autor_post="Wesley"
    />
    
  <Post 
      :img_post="rimuruImage2"
      tit_post="Reflexão" 
      mes_post="A ascensão de Rimuru ao título de Lorde Demônio não foi apenas uma questão de poder, mas também de responsabilidade. Ele usou suas novas habilidades para proteger seu povo e estabelecer uma era de paz, mostrando que a verdadeira força reside na capacidade de proteger aqueles que amamos." 
      autor_post="Wesley"
    />
    
    <Post 
      :img_post="rimuruImage3"
      tit_post="Finalização" 
      mes_post="Com isso, deixo uma reflexão: em um mundo repleto de conflitos, que possamos encontrar inspiração na jornada de Rimuru e buscar sempre a paz, mesmo diante das adversidades. Até a próxima!" 
      autor_post="Wesley"
    />
</template>

<style scoped>
.post {
  background-color: gainsboro;
  margin-bottom: 20px;
  padding: 20px;
  width: auto;
  height: auto;
}
.autor {
  color: black;
  text-align: right;
  margin: 0px 0px 0px 10px;
  font-size: 0.8em;
}
</style>