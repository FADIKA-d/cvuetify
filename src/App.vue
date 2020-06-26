<template>
  <v-app>
    <div id="app">
      

      <!-- partie navigation -->
      <div class="navigation">
        <!-- <cv-nav>
        </cv-nav> -->
        <!-- router navigation -->
        <router-view name="navigation"></router-view>
      </div>
      
      <!-- contenue principal -->
      <!-- <v-main> -->
          <!-- partie carousel  -->
       <div class="carousel d-block mt-10">
          <!-- router carousel  -->
          <router-view name="carousel">
            <div class="carouselSlide">
            <router-view name="carouselSlide"></router-view>
            </div>
          </router-view> 
          <carousel class="carousel d-block mt-10">
            <carousel-slide v-for="card in cards" :key="card.id" :index="card.id-1" :titre="card.titre" :icon="card.icon">
            </carousel-slide>
          </carousel>
              <!-- <v-row class="d-flex justify-center ma-5">
                <v-btn
                relative
                dark
                fab
                color="#952175"
                ><router-link :to="{name: 'bottom'}" tag="button"><v-icon >mdi-chevron-double-down</v-icon></router-link>
                </v-btn>
              </v-row>  -->
         </div>    
          <div class="parallaxx">
            <router-view name="parallaxx"></router-view>
          </div>
      <!-- </v-main> -->
        <!-- partie footer -->
        <div class="footer">
          <!-- <cv-footer >
          </cv-footer> -->
          <router-view name="footer"></router-view>
        </div>
    </div>
  </v-app>
</template>

<script>
// import Carousel from './components/carousel/Carousel';
// import CarouselSlide from './components/carousel/CarouselSlide';
// import CvNav from './components/nav/CvNav';
// import CvFooter from './components/footer/CvFooter'
// import Rubriques from './components/rubriques/Rubriques'
// import Experiences from './components/rubriques/Experiences'
// import Formations from './components/rubriques/Formations'
// import Competences from './components/rubriques/Competences'
// import Realisations from './components/rubriques/Realisations'
// import Langues from './components/rubriques/Langues'
// import Interets from './components/rubriques/Interets'
// import Parallax from "vue-parallaxy"
// import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      cards: [
        {id:1, titre: 'expériences', icon: 'mdi-briefcase-variant'},
        {id:2, titre: 'formations', icon: 'mdi-school'},
        {id:3, titre: 'compétences', icon: 'mdi-cog-transfer'},
        {id:4, titre: 'réalisations', icon: 'mdi-clipboard-check-multiple'},
        {id:5, titre: 'langues', icon: 'mdi-chat-processing'},
        // {id:6, titre: 'centre d\'intérêts', icon: 'mdi-head-heart'} 
      ],
      contact: [
        {id:1, phone: "0658414872", mail: 'd.fadika@gmail.com', adress: '14 Avenue Buffon', linkedin: 'Fadika' , github: 'FADIKA-d'}
      ]       
    }
  },
  
  components: {
    // Carousel,
    // CarouselSlide, 
    // CvNav,
    // CvFooter, 
    // Rubriques, 
    // Experiences,
    // Formations,
    // Competences,
    // Realisations,
    // Langues,
    // Interets,
    // Parallax
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
