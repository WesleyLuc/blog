<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  tit_post: {
    type: String,
    required: true
  },
  mes_post: {
    type: String,
    required: true
  },
  autor_post: {
    type: String,
    required: true
  },
  img_post: {
    type: String,
    required: true
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