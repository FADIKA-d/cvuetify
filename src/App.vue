<template>
  <v-app>
    <div id="app">
      <router-view></router-view>

      <!-- partie navigation -->
      <div class="navigation">
        <!-- <cv-nav>
        </cv-nav> -->
        <!-- router navigation -->
        <router-view name="navigation"></router-view>
      </div>

      <!-- contenue principal -->
      <v-main>
          <!-- partie carousel -->
        <div class="carousel">
          <!-- router carousel -->
          <!-- <router-view name="carousel"></router-view> -->
          <carousel class="carousel d-block mt-10">
            <carousel-slide v-for="card in cards" :key="card.id" :index="card.id-1" :titre="card.titre" :icon="card.icon">
            </carousel-slide>
          </carousel>
        </div>
        <!-- partie rubriques -->
        <div class="rubriques">
          <v-parallax
          dark
          height="700"
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          >
            <rubriques>
              <formations id="formations"></formations>
              <experiences id="experiences"></experiences>
              <competences id="competences"></competences>
              <realisations id="realisations"></realisations>
              <langues id="langues"></langues>
              <interets id="interets"></interets>
            </rubriques>
            <!-- router rubriques -->
            <!-- <router-view name="rubriques"></router-view> -->
          </v-parallax>
        </div>

        <!-- partie footer -->
        <div class="footer">
          <!-- <cv-footer >
          </cv-footer> -->
          <router-view name="footer"></router-view>
        </div>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Carousel from './components/carousel/Carousel';
import CarouselSlide from './components/carousel/CarouselSlide';
// import CvNav from './components/nav/CvNav';
// import CvFooter from './components/footer/CvFooter'
import Rubriques from './components/rubriques/Rubriques'
import Experiences from './components/rubriques/Experiences'
import Formations from './components/rubriques/Formations'
import Competences from './components/rubriques/Competences'
import Realisations from './components/rubriques/Realisations'
import Langues from './components/rubriques/Langues'
import Interets from './components/rubriques/Interets'
// import axios from 'axios'

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
      required:true,
      contact: [
        {id:1, phone: "0658414872", mail: 'd.fadika@gmail.com', adress: '14 Avenue Buffon', linkedin: 'Fadika' , github: 'FADIKA-d'}
      ]       
    }
  },
  
  components: {
    Carousel,
    CarouselSlide, 
    // CvNav,
    // CvFooter, 
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
      //  axios
      //  .get("../cv_infos.php")
      //  .then(result => {console.log(result.data); this.info= result.data})
     
   }
   
};
</script>
<style>

</style>
