<template>
  <v-app>
  <cv-nav>
  </cv-nav>
    <v-main>
      <carousel class="carousel d-block mt-10">
        <carousel-slide v-for="card in cards" :key="card.id" :index="card.id-1" :titre="card.titre" :icon="card.icon">
        </carousel-slide>
      </carousel>
     <v-parallax
    dark
    height="700"
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
   <!-- <v-img
          :src="require('../assets/fondEcran.jpg')"
          class="my-3"
          contain
          height="200"
        /> -->
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <rubriques>
          <formations></formations>
          <experiences></experiences>
          <competences></competences>
          <realisations></realisations>
          <langues></langues>
          <interets></interets>
        </rubriques>
      </v-col>
    </v-row>
  </v-parallax>



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
import Rubriques from './components/rubriques/Rubriques'
import Experiences from './components/rubriques/Experiences'
import Formations from './components/rubriques/Formations'
import Competences from './components/rubriques/Competences'
import Realisations from './components/rubriques/Realisations'
import Langues from './components/rubriques/Langues'
import Interets from './components/rubriques/Interets'

export default {
  name: 'App',
  data() {
    return {
      cards: [
        {id:1, titre: 'EXPERIENCES', icon: 'mdi-briefcase-variant'},
        {id:2, titre: 'FORMATIONS', icon: 'mdi-school'},
        {id:3, titre: 'COMPETENCES', icon: 'mdi-cog-transfer'},
        {id:4, titre: 'REALISATIONS', icon: 'mdi-clipboard-check-multiple'},
        {id:5, titre: 'LANGUES', icon: 'mdi-chat-processing'},
        {id:6, titre: 'INTERETS', icon: 'mdi-head-heart'} 
      ],
      info: ""
    }
  },
  components: {
    Carousel,
    CarouselSlide, 
    CvNav,
    CvFooter, 
    Rubriques, 
    Experiences,
    Formations,
    Competences,
    Realisations,
    Langues,
    Interets
  },
   computed: {
     cardsCount() {
     return this.cards.length
    }
   }, 
   mounted () {
     
      //  axios.get("cv_infos.php").then(function(result) {console.log(result.data); this.info= result.data})
       axios.get("cv_infos.php").then(result => (this.info= result.data))
     
   }
   
};
</script>
<style>

</style>
