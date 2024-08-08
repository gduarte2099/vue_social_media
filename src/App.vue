<template>
  <NavComp></NavComp>
  <router-view v-slot="{ Component }">
    <transition name="fadeUp" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
  <FooterComp></FooterComp>
</template>

<script setup>
import NavComp from '@/components/NavComp.vue'
import FooterComp from './components/FooterComp.vue';
</script>

<style lang="scss">
.fadeUp-enter-active,
.fadeUp-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}

.fadeUp-enter,
.fadeUp-leave-to {
  opacity: 0;
  //transform: translateY(30%);
  transform: translateX(30%);
}
</style>
