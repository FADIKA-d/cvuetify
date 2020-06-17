<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <!-- <v-icon>mdi-account-details</v-icon> -->
      </v-btn>
    </v-app-bar>
    <v-content>
    <carousel class="carousel">
  <carousel-slide v-for="n in slides" :key="n" :index="n-1">
  <card>
  </card>
  </carousel-slide>
  </carousel>
    </v-content>
  </v-app>
</template>

<script>
import Carousel from './components/carousel/Carousel'
import CarouselSlide from './components/carousel/CarouselSlide'
import Card from './components/carousel/Card'
// import { mdiAccountDetails } from '@mdi/js';

export default {
  name: 'App',
  data() {
    return {
      slides: 5
    }
  },
  components: {
    Carousel,
    CarouselSlide, 
    Card
  }
};
</script>
<style>

</style>
