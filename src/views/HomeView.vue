<template>
  <div class="home">
    <div class="row mx-0">
      <div class="col-lg-6">
        <div class="img-container">
          <img
            class="img-logo"
            src="../assets/img/vue-logo.png"
            alt="vue-logo"
          />
          <h4 class="text-center text-lg-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
        </div>
      </div>
      <div class="col-lg-6">
        <CardComp class="card-comp mx-auto" :buttons="btnArray">
          <template #default>
            <form>
              <div class="mb-3 mt-2">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Ingresa tu email"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Ingresa tu password"
                />
              </div>
            </form>
          </template>

          <template #form-footer>
            <hr />
            <button class="btn btn-success" @click="showAccount">
              Crear cuenta
            </button>
          </template>
        </CardComp>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardComp from "@/components/CardComp.vue";
import { onMounted } from "vue";

//pasaremos de forma dinamica tbn para que cambie en el hijo
const btnArray = [
  {
    txt: "Iniciar Sesion",
    class: "btn-go",
  },
  {
    txt: "Olvidaste tu contrasenha?",
    class: "",
  },
];

onMounted(() => {
  // Verifica si la URL ya tiene el hash para evitar recargas infinitas
  if (!window.location.hash) {
    window.location.hash = 'reloaded';
    window.location.reload();
  }
});

const showAccount = () => {
  alert("Desarrollado por gduarte2999@gmail.com");
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 895px;
  margin: auto;
}

.img-logo {
  height: 150px;
  width: 295px;
  margin: 1em auto 0 auto;
  max-width: 315px;
}

//imagen-logo
.img-container {
  display: flex;
  flex-direction: column;
}

//componente card-comp
.card-comp {
  max-width: 398px;
  margin-top: 2.6em;
}

.btn-success {
  margin: auto;
  min-width: 195px;
}

//breakpoint para pantallas grandes
@media (min-width: 992px) {
  .home {
    margin: 2em auto;
  }

  .img-logo {
    margin: 0;
    margin-top: 5.6em;
  }

  h4 {
    margin: 0;
    margin-left: 0.8em;
  }
}
</style>
