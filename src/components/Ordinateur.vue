<template>
  <div class="centralDiv d-flex justify-center">
    <slot></slot>
    <v-img
    :contain="computerContain"
    :cover="computerCover"
    :width="computerWidth"
    :max-height="computerHeight"
    :max-width="showCarousel? computerHeight : computerHeight"
    class="d-flex"
    :position="imagePosition"
    :src="require(`@/assets/${picture}.jpg`)"
    >
     <!-- partie rubriques -->
      <div class="computer d-flex justify-center overflow-y-auto overflow-x-hidden " >
        <!-- <router-view name="carousel"></router-view> -->
        <!-- <router-view name="rubriques"></router-view> -->
        <router-view :key="$route.path"></router-view>
         <!-- <rubriques></rubriques> -->
         <!-- <formations></formations>
         <experiences id="experiences"></experiences> -->
      </div>
    </v-img>
  </div>
</template>



<script>
// import Rubriques from './rubriques/Rubriques'
import background from "@/background.js"
export default {
  props: {
        showCarousel:  {type: Boolean, default: true},
        // nom:  {type: String, default: 'cv.rubriques'},
      //  picture2:  {type: Boolean, default: false}
    }, 
  data () {
    return {
      // showButton: true,
      // bottomPosition: 0,
      computerHeight: (this.$vuetify.breakpoint.height),
      computerWidth: (this.$vuetify.breakpoint.width),
      // carouselWidth: (this.$vuetify.breakpoint.width)*0.39,
      // carouselHeight: (this.carouselWidth)/1.7778,
      computerContain: true,
      // showCarousel: true,
      // rubrique: false,
      // navHeightt: this.$CvNav.height ,
      // model: 'caption',
      // ratio: (this.$vuetify.breakpoint.width)/1.77,
      // aspectRatio: 16/9,
      cards: [
                {id:1, titre: 'expériences', icon: 'mdi-briefcase-variant', last: {info: 'Développeuse Web'}},
                {id:2, titre: 'formations', icon: 'mdi-school', last: {info: 'Développeur Web et Web mobile'}},
                {id:3, titre: 'compétences', icon: 'mdi-laptop-windows', last: {info:'Javascript | VueJS | Bootstrap | JQuery | PHP | Wordpress'}},
                {id:4, titre: 'réalisations', icon: 'mdi-clipboard-check-multiple', last: {info:'Site internet | Site WordPress | Application web'}},
                {id:5, titre: 'langues', icon: 'mdi-chat-processing', last: {info:'Français | Anglais | Espagnol'}},
                // {id:6, titre: 'centre d\'intérêts', icon: 'mdi-head-heart'} 
        ],
      // picture2: false,
      
        // marginTop: 0,
       
    }
  },
  // beforeRouteLeave(route, redirect, next) {
  //   window.history.back(() => {
  //     next(vm => {
  //       vm.showCarousel = true
  //     })
  //   })
    // if(route.name == 'cv'){
    //   next(vm => {
    //   vm.showCarousel == true
    //   })
    // }
  // },
  // beforeCreate: {
  //   showCarousel: true,
  // },
  // components: {
    // Rubriques: () => import("@/components/rubriques/Rubriques"),
  // Formations: () => import("@/components/rubriques/Formations"),
  // Experiences: () => import("@/components/rubriques/Experiences")
  
    // Rubriques,
    // CvNav: () => import('./cv-nav.vue')
  // },
   computed: {
     picture() {
       if(this.$route.path == '/cv') {
         return background.backgroundPicture1
       } else {
         return background.backgroundPicture2
       }
     },
     imagePosition() {
       if(this.$route.name == 'cv') {
         return 'center center'
       } else {
         return 'top center'
       }
     },
    //  isLarge() {
    //    if (this.$vuetify.breakpoint.width>this.$vuetify.breakpoint.height) {
    //      return true
    //    }
    //    else {
    //      return false
    //    }
    //  },
     computerCover() {
       if(!this.isLarge){
         return true
       }
       else {
         return false
       }
     },
    //  carouselWidth () {
    //    if (this.isLarge==false) {
    //     return (this.computerWidth)*0.39
    //    }
    //    else {
    //     return (this.computerHeight)*0.39
    //    }
     
    //  },
      // carouselHeight () {
        // return (this.carouselWidth)/1.77
      //   if (this.computerWidth>= 750 && this.$vuetify.breakpoint.width<1400){
      //   return (this.carouselWidth)/1.77
      //  } 
      //  else if (this.computerWidth< 750) {
      //    return 'auto'
      //  }
      //  else {
      //    return 'auto'
      //  }
        // return (this.carouselWidth)/2
        // return (this.$vuetify.breakpoint.height)/3
        // switch (this.$vuetify.breakpoint.name) {
        //   case 'xs': return 110
        //   case 'sm': return 200
        //   case 'md': return 250
        //   case 'lg': return 300
        //   default: return 400
        // }
      // },
 
    // iconCardSize () {
    //   switch (this.$vuetify.breakpoint.name) {
    //     // case 'xs': return 'x-small'
    //     case 'xs': return 'medium'
    //     case 'sm': return 'medium'
    //     case 'md': return 'xx-large'
    //     case 'lg': return 'xxx-large'
    //     default: return 'x-large'
    //   }
    // },
    // buttonSize () {
    //   switch (this.$vuetify.breakpoint.name) {
        
    //     case 'xs': return 'x-small'
    //     case 'sm': return 'small'
    //     case 'md': return 'medium'
    //     case 'lg': return 'large'
    //     case 'xl': return 'medium'
    //     default: return 'x-large'
    //   }
    //  },
    //  breakpoint() {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case 'xs': return 'caption'
    //     case 'sm': return '20px'
    //     case 'md': return 'caption'
    //     case 'lg': return 'caption'
    //     default: return 'x-caption'
    //   }
    //  },
    //  cardSizeTitle() {
    //    switch (this.$vuetify.breakpoint.name) {
    //     case 'xs': return 'line-height:1rem; font-size:60%'
    //     case 'sm': return 'line-height:1rem; font-size:1.5rem'
    //     case 'md': return 'line-height:1.5rem; font-size:2rem'
    //     case 'lg': return 'line-height:1rem; font-size:1.5rem'
    //     case 'xl': return 'line-height:1rem; font-size:1.5rem'
    //     default: return 'line-height:1rem; font-size:1.5rem'
    //   }
    //  },
    //  cardSizeBody() {
    //    switch (this.$vuetify.breakpoint.name) {
    //     case 'xs': return 'subtitle-2'
    //     case 'sm': return 'h5'
    //     case 'md': return 'h5'
    //     case 'lg': return 'h5'
    //     case 'xl': return 'h5'
    //     default: return 'subtitle-2'
    //   }
    //  },
    //  cardSizeBtn() {
    //    switch (this.$vuetify.breakpoint.name) {
    //     case 'xs': return 'line-height:0.9rem; font-size:65%;'
    //     case 'sm': return 'line-height:1.1rem; font-size:1.1rem;'
    //     case 'md': return 'line-height:1.5rem; font-size:1.5rem;'
    //     case 'lg': return 'line-height:1rem; font-size:1rem;'
    //     case 'xl': return 'line-height:1rem; font-size:1rem;'
    //     default: return 'line-height:1.1rem; font-size:1.1rem;'
    //   }
    //  },
    //  iconCardSize () {
    //   switch (this.$vuetify.breakpoint.name) {
    //     // case 'xs': return 'x-small'
    //     case 'xs': return 'large'
    //     case 'sm': return 'x-large'
    //     case 'md': return 'xx-large'
    //     case 'lg': return 'xx-large'
    //     case 'xl': return 'xx-large'
    //     default: return 'x-large'
    //   }
    // },
    lineHeight(){
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '0.9rem'
        case 'sm': return '1rem'
        case 'md': return '2rem'
        case 'lg': return '2rem'
        case 'xl': return '2rem'
        default: return '3rem'
    }
    },
    // cardSizeBodyMargin(){
    //   if (this.$vuetify.breakpoint.width>=800) {
    //      return 3
    //   }
    //   else if (this.$vuetify.breakpoint.width>=600 && this.$vuetify.breakpoint.width<800) {
    //     return  2.5
    //   }
    //    else if (this.$vuetify.breakpoint.width>384 && this.$vuetify.breakpoint.width<600) {
    //     return  2  
    //   }
    //   else if (this.$vuetify.breakpoint.width>=280 && this.$vuetify.breakpoint.width<=384) {
    //     return  0.5  
    //   }
    //   else {
    //     return 0
    //   }
    // }
   },
  methods: {
    // backgroundSettings() {
    //    if(this.$route.path == '/cv') {
    //     this.picture= background.backgroundPicture1
    //     this.imagePosition= 'center center'
        
    //    } else {
    //     this.picture= background.backgroundPicture2
    //     this.imagePosition= 'top center'
        
    //    }
    //    return
    //  },
    // routeToHome(){
        // this.$router.push({name: 'cv', params:{ showCarousel: true, picture: 'ordi' }})
    // },
    // goBack(){
      // if(window.history.length >= 1) {
        // this.$router.push({name: 'cv', params:{ showCarousel: true, picture: 'ordi' }})
        //  this.showRubriques = !this.showRubriques
      // }
      // window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    // },
    showRubriques: function (event) {
      this.showCarousel = !this.showCarousel 
      // this.rubriques = true
      // this.computerSize = (this.$vuetify.breakpoint.height)/10
      // this.showButton = false
      // this.computerSize = this.$vuetify.breakpoint.height
      if(event) {
        // this.computerWidth = (this.$vuetify.breakpoint.width)
        // this.computerHeight = (this.$vuetify.breakpoint.height)*0.80
        // this.contain = true
        // this.aspectRatio = 5/1
        // this.bottomPosition = -325
        // this.computerContain = true
        // this.computerCover = false
        this.picture = "ordiS2"
        this.imagePosition= 'top center'
        // this.navHeight = "150"
        return
      } 
      // else {
      //   this.showRubriques = !this.showRubriques
      // }
     
      // if(window.history.back())
        //  () => {
  //     next(vm => {
  //       vm.showCarousel = true
  //     })
  //   })
    // if(route.name == 'cv'){
    //   next(vm => {
    //   vm.showCarousel == true
    //   })
    // }
    },
    // beforeEnter:function() {
    //   this.showCarousel = true
    // },

    // isLarge() {
    //    if (this.$vuetify.breakpoint.width>this.$vuetify.breakpoint.height) {
    //      return true
    //    }
    //  },
    // setData (navHeight) {
    //   this.navHeight= navHeight
    // }
  },
  
};
</script>

<style>

.computer {
  width:100%;
  height:100%;
}
/* .v-btn__content {
  width:100%
} */
 /* #carousel {  */
 
  /* width:39%; */
  /* max-width: auto; */
  /* height: 18%; */
  /* max-height:10%; */
  /* padding-top: 4.5%;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%,-50%); */
/* }  */

/* .carousel__content {
  width:100%;
  height:100%;
}
.carousel__card {
  width:100%;
  height:100%;
} */
/* .v-image__image {
  width: 150%;
  height: 30%
} */
.centralDiv {
   width:100%;
  height:100%;
}
.card__rubrique {
    color:#464545; 
}
/* .v-image__image--cover {} */

</style>