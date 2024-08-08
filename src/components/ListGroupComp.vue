<template>
      <ul class="list-group">
            <li class="list-group-item">A {{ random }} personas les gusta el post </li>
            <div class="row">
                  <div class="col d-grid">
                        <li class="list-group-item btn gap-2 px-0">
                              <span class="material-icons-round">
                                    thumb_up
                              </span> Me gusta
                        </li>
                  </div>
                  <div class="col d-grid">
                        <li class="list-group-item btn gap-2 px-0">
                              <span class="material-icons-outlined">
                                    chat_bubble_outline
                              </span> Comentario
                        </li>
                  </div>
            </div>


      </ul>
</template>
      
<script setup>
      let random = Math.floor((Math.random() * (100 - 1 + 1)) + 1)
</script>

<style lang="scss" scoped>
ul {
      .btn {
            display: flex;
            justify-content: center;
            align-items: center;
      }

      .btn:hover {
            color: rgb(85, 85, 224);
      }
}
</style>