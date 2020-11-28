<template>
  <v-app color="grey lighten-1" >
    <div id="app">
      <!-- partie navigation -->
      <div class="navigation">
        <cv-nav></cv-nav>
        <!-- router navigation -->
        <!-- <router-view name="navigation"></router-view> -->
      </div>
      <!-- contenue principal -->
      <v-main 
    class="d-flex align-stretch"
      > 
      <!-- partie carousel  -->
         <!-- <div class="carousel d-block mt-10"> -->
          <!-- router carousel  -->
          <!-- <router-view name="carousel"></router-view>  -->
         <!-- </div>      -->
     <div class="main d-flex align-stretch" 
     
     id="main">
       <router-view> </router-view>
       <!-- <ordinateur></ordinateur> -->
           <!-- <div>
    <pdf scr="./assets/cinema.png"></pdf></div> -->
    <!-- <v-pdf src="./assets/CVFADIKA.pdf" style="display: inline-block; width: 25%"></v-pdf> -->

<!-- <video-player>
  <source src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" />
  
</video-player> -->
<!-- <video-embed src="https://www.youtube.com/watch?v=s4ObxcdXoFE"></video-embed> -->
     
            <!-- <div class="carousel d-flex flex-wrap align-self-center justify-center" id="carousel" 
            :style="`width:${carouselWidth}px`" >
            <router-view name="carousel"></router-view>
        </div> -->
     </div>
     
      </v-main>
       <!-- <pre> {{ JSON.stringify($route, null, 2) }} </pre>  -->
        <!-- partie footer -->
        <div class="footer" >
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
// import Ordinateur from './components/Ordinateur'
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
      // mainWidth: (this.$vuetify.breakpoint.width),
      // mainHeight: (this.$vuetify.breakpoint.height),
          //  mainStyle: "padding:0px"
          //  pdf: ""
    }
  },
  
  components: {
    // Carousel,
    // CarouselSlide, 
    CvNav,
    CvFooter, 
    // Ordinateur,
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
  //  mounted () {
     
      //  axios.get("cv_infos.php").then(function(result) {console.log(result.data); this.info= result.data})
      //  axios
      //  .get("../cv_infos.php")
      //  .then(result => {console.log(result.data); this.info= result.data})
     
  //  },
  //  computed: {
      // mainHeight () {
        // return (this.$vuetify.breakpoint.height)*0.78
        // switch (this.$vuetify.breakpoint.name) {
        //   case 'xs': return 220
        //   case 'sm': return 300
        //   case 'md': return 400
        //   case 'lg': return 490
        //   default: return 600
        // }
      // }
      
    // },
   
};
</script>
<style>
.v-application--wrap{
  background:rgb(195, 195, 195);
}
#main {
  padding: 0px;
  margin: 0px;
  height:100%;
  /* position: fixed; */
  /* position: inherit; */
  /* position: relative; */
  /* position: static; */
  /* position: unset; */
  bottom:0px;
  top:0px;
  background:rgb(195, 195, 195);
}
.footer {
  width:100%;
  position:fixed;
  bottom:0px;
}
/* .boutton__voir {

} */
</style>
