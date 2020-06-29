<template>
  <v-app>
    <div id="app">
      

      <!-- partie navigation -->
      <div class="navigation">
        <cv-nav></cv-nav>
        <!-- router navigation -->
        <!-- <router-view name="navigation"></router-view> -->
      </div>
      
      <!-- contenue principal -->
      <v-main>  
         <!-- partie carousel  -->
         <div class="carousel d-block mt-10">
          <!-- router carousel  -->
          <!-- <router-view name="carousel"></router-view>  -->
         </div>     
     <div class="main" id="main">
       <router-view name="main"></router-view>
     </div>
      </v-main>
       
        <!-- partie footer -->
        <div class="footer">
          <cv-footer ></cv-footer>
          <!-- router footer -->
          <!-- <router-view name="footer"></router-view> -->
        </div>
    </div>
  </v-app>
</template>

<script>
// import Carousel from './components/carousel/Carousel';
// import CarouselSlide from './components/carousel/CarouselSlide';
import CvNav from './components/nav/CvNav';
import CvFooter from './components/footer/CvFooter'
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
           
    }
  },
  
  components: {
    // Carousel,
    // CarouselSlide, 
    CvNav,
    CvFooter, 
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
