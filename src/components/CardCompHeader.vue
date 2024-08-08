<template>
      <div class="card-comp-header">
            <div class="row">
                  <div class="col-2 col-sm-2">
                        <img class="user-img" :src="cardHeader.picture" :alt="cardHeader.alt">
                  </div>
                  <div class="col-8 col-sm-8">
                        <h4 class="card-header-title m-0">
                              <router-link to="/profile">{{ cardHeader.name }}</router-link>
                        </h4>
                        <small class="text-muted">Hace {{ random }} minutos</small>
                  </div>
                  <div class="col-1">
                        <button class="btn d-flex align-items-center more-btn">
                              <span class="material-icons-round">
                                    more_horiz
                              </span>
                        </button>
                  </div>

            </div>

      </div>
</template>

<script >
import { defineComponent } from 'vue';

export default defineComponent({
      name: 'CardCompHeader',
      props: ['cardHeader'],
      data() {
            let random = Math.floor((Math.random() * (59 - 1 + 1)) + 1)
            return {random}
      }
})
</script>

<style lang="scss" scoped>
//boton de mas 
.more-btn {
      border-radius: 50%;
      padding: 0.5em;
      margin: 0.3em;
}

//avatar del usuario
.user-img {
      width: 40px;
      height: 40px;
      object-fit: cover; //para evitar que se deforme con su dimension
      border-radius: 50%;
}

//disminuir el interlineado del titulo de la carta
.card-header-title {
      line-height: 0.7;
}

//quitar fondo del card-header
.card-comp-header {
      background-color: transparent;
      padding: 0.5rem 1rem;
      padding-bottom: 0;
      border-bottom: none;
}
</style>