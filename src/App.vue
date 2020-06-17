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
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <carousel class="carousel">
<carousel-slide>
  <div class="card"></div>
</carousel-slide>
<carousel-slide>
<v-card width="700" class="mx-auto mt-5">
<v-card-title>Expériences</v-card-title>
<v-card-text></v-card-text>
 <v-card-action></v-card-action>
</v-card>
</carousel-slide>
<carousel-slide><v-card width="700" class="mx-auto mt-5"><v-card-title>Formations</v-card-title></v-card> <v-card-text></v-card-text> <v-card-action></v-card-action> </carousel-slide>
<carousel-slide><v-card width="700" class="mx-auto mt-5"><v-card-title>Compétences</v-card-title></v-card><v-card-text></v-card-text> <v-card-action></v-card-action></carousel-slide>
<carousel-slide><v-card width="700" class="mx-auto mt-5"><v-card-title>Réalisations</v-card-title></v-card><v-card-text></v-card-text> <v-card-action></v-card-action></carousel-slide>
<carousel-slide><v-card width="700" class="mx-auto mt-5"><v-card-title>Langues</v-card-title></v-card><v-card-text></v-card-text> <v-card-action></v-card-action></carousel-slide>
</carousel>
    </v-content>
  </v-app>
</template>

<script>
import Carousel from './components/carousel/Carousel'
import CarouselSlide from './components/carousel/CarouselSlide'

export default {
  name: 'App',

  components: {
    Carousel,
    CarouselSlide
  },

  data: () => ({
    //
  }),
};
</script>
