<template>
      <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container justify-content-evenly">
                  <router-link to="/" class="nav-link" :class="{ active: activePath.home }">
                        <span class="material-icons-outlined">
                              home
                        </span></router-link>
                  <router-link to="/about" class="nav-link" :class="{ active: activePath.about }"><span
                              class="material-icons-outlined">
                              info
                        </span></router-link>
                  <router-link to="/post" class="nav-link" :class="{ active: activePath.post }"><span
                              class="material-icons-outlined">
                              featured_play_list
                        </span></router-link>
            </div>
      </nav>
</template>

<script >
export default {
      name: 'NavComp',
      computed: {
            //las apps en vue tienen acceso a una variable llamada route que tiene varios parametros, una de ellas es path
            activePath() {
                  if (this.$route.path === '/') {
                        return {
                              home: true,
                              about: false,
                              post: false,
                        }
                  } else if (this.$route.path === '/about') {
                        return {
                              home: false,
                              about: true,
                              post: false,
                        }
                  } else {
                        return {
                              home: false,
                              about: false,
                              post: true,
                        }
                  }
            }
      }
}

</script>

<style lang="scss" scoped>
.material-icons-outlined {
      color: white;
      font-size: 1.4em;
      padding: 0.3em;
      background-color: rgba(218, 218, 218, 0.150);
      border-radius: 50%;
      margin: 0.1em;
}

.active .material-icons-outlined {
      color: white;
      background-color: rgba(133, 128, 128, 0.158);
      border: 1px solid rgba(244, 246, 248, 0.345);
}
</style>