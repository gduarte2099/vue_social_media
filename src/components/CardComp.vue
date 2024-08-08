<template>
      <div class="card">
            <!--el props que nos pasa el padre se lo pasamos al hijo de este componente-->
            <!--solo renderiza el header si este existe, por eso el vif-->
            <CardCompHeader v-if="card_header" :cardHeader="card_header" ></CardCompHeader>
            <div class="card-body">
                  <h5 v-if="title" class="card-title"> {{ props.title }}</h5>
                  <p v-if="parragraph" class="card-text"> {{ props.parragraph }}</p>
                  <img v-if="image" :src="image.source" alt="imagen">
                  <ListGroupComp v-if="likes"></ListGroupComp>
                  <slot><!--Aqui se inserta cualquier html del padre--></slot>
                  <div class="d-grid gap-2">
                        <button v-for="button in props.buttons" :key="button.index" class="btn" :class="button.class">
                              {{ button.txt }}
                        </button>
                        <slot name="form-footer"></slot>
                  </div>
            </div>
      </div>
</template>

<script setup>
import CardCompHeader from './CardCompHeader.vue';
import ListGroupComp from './ListGroupComp.vue';
import { defineProps } from 'vue'

//const props = defineProps(['title'])
const props = defineProps({ title: String, parragraph: String, image: Object, card_header: Object, buttons: Array, likes: Boolean })
</script>

<style lang="scss" scoped>
.card {
      border: none;
      border-color: rgba(0, 0, 255, 0.288);
      box-shadow: 3px 4px 4px rgba(0, 0, 255, 0.288);
}

.card {

      /**para que la imagen no salga de su contenedor */
      img {
            max-width: 100%;
      }
}


</style>