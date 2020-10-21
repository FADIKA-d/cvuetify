<template>
<div>
  <slot></slot>
  <!-- <v-card-text style="height: 100px; position: absolute">
       <v-btn color="#BB334F" @click="hidden =!hidden">
                {{ hidden ? '' : 'voir le cv' }}
              </v-btn>
       </v-card-text> -->

       <v-card class="bouton__voir">
              <v-btn  v-show="!hidden" color="#BB334F" dark
                absolute
                fab
                x-large
                @click="hidden =!hidden"><router-link :to="{name: 'accueil.rubriques'}" tag="button">
                {{ !hidden ? 'voir le cv' : '' }}</router-link>
              </v-btn>
           </v-card>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
           hidden: false,
           
    }
  }
}
  </script>