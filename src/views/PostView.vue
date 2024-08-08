<template>
      <div class="post">
            <img src="../assets/img/vue-logo.png" alt="vue logo" class="logo">

            <!--<CardComp image="https://picsum.photos/1080/720.jpg" class="mt-2 mx-auto single-post"
                  :card_header="{ name: 'Nombre1', picture: 'https://picsum.photos/500/500.jpg', alt: 'Avatar de Nombre1' }"
                  :likes=true></CardComp>-->

            <!--La direccion de la imagen se pasa como objeto, de manera a que se pueda agregar el index, cambiando dicha url-->
            <CardComp v-for="(user_image, index) in userImages" :key="index"
                  :image="{ source: 'https://picsum.photos/1082/72' + index }" class="mt-2 mx-auto single-post"
                  :card_header="{ name: 'Nombre' + index + ' Apellido' + index, picture: user_image, alt: 'Avatar de Nombre' + index }"
                  :likes=true>
            </CardComp>

      </div>
</template>

<script setup>
import CardComp from '@/components/CardComp.vue';
import { onMounted, ref } from 'vue';

const userImages = ref([])
const userImg = 'https://randomuser.me/api/portraits/men/'
//const imgSrc

onMounted(() => {
      for (let i = 0; i < 10; i++) {
            let random = Math.floor((Math.random() * (99 - 1 + 1)) + 1)
            userImages.value.push(userImg + random + '.jpg')
      }
      console.log("Desarrollado por gduarte2999@gmail.com");
      
})
</script>

<style lang="scss" scoped>
.post {
      min-height: 60vh; //ocupa el 60% de la altura de la pagina, de modo a que baje el footer
      max-width: 895px;
      margin: auto;
}

.logo {
      max-width: 115px;
      padding: 0.2rem;
}

.single-post {
      max-width: 550px;
}
</style>