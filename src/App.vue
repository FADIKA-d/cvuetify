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
      <v-main class="d-flex" 
      style="padding:0px"
      > 
      <!-- partie carousel  -->
         <!-- <div class="carousel d-block mt-10"> -->
          <!-- router carousel  -->
          <!-- <router-view name="carousel"></router-view>  -->
         <!-- </div>      -->
     <div class="main pt-0 grey lighten-1 d-flex align-self-center align-end justify-center" 
     :style="`max-height:${mainHeight}px`" 
     id="main">
       <router-view name="main"> </router-view>
    
           <!-- <div>
    <pdf scr="./assets/cinema.png"></pdf></div> -->
    <!-- <v-pdf src="./assets/CVFADIKA.pdf" style="display: inline-block; width: 25%"></v-pdf> -->

<!-- <video-player>
  <source src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" />
  
</video-player> -->
<!-- <video-embed src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed> -->
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
import CvNav from './components/nav/CvNav'
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
// import pdf from 'vue-pdf'
// import videoPlayer from 'vue-md-player'
// import 'vue-md-player/dist/vue-md-player.css'
// import 'vuetify-media-player/src/style.styl'

export default {
  name: 'App',
  data() {
    return {
          //  mainStyle: "padding:0px"
          //  pdf: ""
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
    // pdf,
    // videoPlayer
  },
   mounted () {
     
      //  axios.get("cv_infos.php").then(function(result) {console.log(result.data); this.info= result.data})
      //  axios
      //  .get("../cv_infos.php")
      //  .then(result => {console.log(result.data); this.info= result.data})
     
   },
   computed: {
      mainHeight () {
        return this.$vuetify.breakpoint.height
        // switch (this.$vuetify.breakpoint.name) {
        //   case 'xs': return 220
        //   case 'sm': return 300
        //   case 'md': return 400
        //   case 'lg': return 490
        //   default: return 600
        // }
      }
      
    },
   
};
</script>
<style>

#main {
  padding: 0px;
  margin: 0px;

}
/* .boutton__voir {

} */
</style>
