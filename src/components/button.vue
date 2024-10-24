<script>
    export default {
        props:{
            link: String,
            txt_button: String
        },
    }
</script>

<template>
    <RouterLink :to="link"> {{ txt_button }} </RouterLink>
</template>

<style scoped>
 button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #4CAF50; /* Green background */
    color: white;
  }
</style>