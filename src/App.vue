<template>
  <v-app>
  <cv-nav>
  </cv-nav>
    <v-main>
      <carousel class="carousel d-flex justify-center mt-5">
        <carousel-slide v-for="card in cards" :key="card.id" :index="card.id-1" :titre="card.titre" :icon="card.icon">
        </carousel-slide>
      </carousel>
    </v-main>
  <cv-footer >
    </cv-footer>
  </v-app>
</template>

<script>
import Carousel from './components/carousel/Carousel';
import CarouselSlide from './components/carousel/CarouselSlide';
import CvNav from './components/nav/CvNav';
import CvFooter from './components/footer/CvFooter'

export default {
  name: 'App',
  data() {
    return {
      cards: [
        {id:1, titre: 'Profil', icon:'mdi-account-details'},
        {id:2, titre: 'Expériences', icon: 'mdi-briefcase-variant'},
        {id:3, titre: 'Formations', icon: 'mdi-school'},
        {id:4, titre: 'Compétences', icon: 'mdi-cog-transfer'},
        {id:5, titre: 'Réalisations', icon: 'mdi-clipboard-check-multiple'},
        {id:6, titre: 'Langues', icon: 'mdi-chat-processing'},
        {id:7, titre: 'Intérêts', icon: 'mdi-head-heart'} 
      ]
    }
  },
  components: {
    Carousel,
    CarouselSlide, 
    CvNav,
    CvFooter
  },
   computed: {
     cardsCount() {
     return this.cards.length
    }
   }
};
</script>
<style>

</style>
