<template>
  <div class="centralDiv d-flex justify-center">
    <slot></slot>
    <v-img
    :contain="computerContain"
    :cover="computerCover"
    :width="computerWidth"
    :height="computerHeight"
    :max-width="showCarousel? computerHeight : computerWidth"
    class="d-flex"
    position="center center"
    :src="require('./../assets/ordi.jpg')"
    >
     <!-- partie rubriques -->
        <div class="computer d-flex justify-center">
            <div v-if="showCarousel" class="carousel d-flex flex-wrap align-self-center justify-center" id="carousel" 
            :style="`width:${carouselWidth}px`" >
              <v-carousel 
              hide-delimiters
              light

              :height="carouselHeight"
             
              :show-arrows="false"
              >
              <!-- $carousel-controls-bg=  rgba(0,0,0,0) -->
              <!-- delimiter-icon="mdi-clipboard-outline" -->
              <!-- delimiter-icon="mdi-folder-open" -->
                 <v-carousel-item 
                 v-for="card in cards" 
                  :key="card.id" 
                  >
                  <!-- <v-row align="center" class="" justify="center"> -->
                  <div class="carousel__content pa-0  d-flex flex-wrap justify-center">
                    <v-card class="carousel__card d-flex flex-wrap justify-center">
                        <v-card-title :class="`pa-0 pa-sm-1 pa-md-4 pa-lg-1 text-uppercase d-flex align-baseline`">
                        <!-- <v-spacer></v-spacer> -->
                        
                        <v-icon :size="`${iconCardSize}`" color="#BB334F"> {{card.icon}} </v-icon>
                       
                        <!-- <v-spacer></v-spacer> -->
                        <div :class="`d-flex pa-0 ma-0`" :style="`${cardSizeTitle}`"> {{card.titre}} </div>
                         <v-spacer></v-spacer>
                    </v-card-title>
                       <v-card-text class="pa-0 pa-sm-1 pa-lg-1" >
                    <v-list class="pa-0">
                        <v-list-item-title :class="`pa-0 my-sm-1 my-${cardSizeBodyMargin} d-flex justify-center text-truncated text-${cardSizeBody}`">{{card.last.info}}</v-list-item-title>
                    </v-list>
                    </v-card-text>

                    <v-card-actions class="pa-0  pa-lg-1 d-block" style="width:100%"> 
                         <!-- <v-container class="pa-0 ma-0 d-flex flex-wrap"> -->
                         <v-row class="pa-0 mx-1 d-flex flex-grow-0 flex-shrink-2 " justify="space-between" >
                           <v-col :cols="computerWidth<300? cols='12': cols='5'"  
                           class="pa-0 d-flex flex-wrap flex-grow-2 flex-shrink-2 ma-0 justify-center" >
                        <v-btn 
                        color="#BB334F"
                        dark
                        height= 100%
                          width= 100%
                         @click="showRubriques"
                         :class="`v-size--${cardSizeBtn} ma-0 pa-0 pa-sm-1 `"
                         >
                         <router-link :to="{name: `${titre}`}" tag="button" :class="` text-wrap`" :style="`${cardSizeBtn}`" > Voir les {{card.titre}} </router-link> 
                         </v-btn>
                         </v-col>
                         <!-- <v-spacer></v-spacer> -->
                         <v-col  
                         :cols="computerWidth<300? cols='12': cols='5'" 
                         class="pa-0 ma-0 d-flex flex-wrap flex-grow-2 flex-shrink-2 justify-center">
                         <v-btn  
                          color="grey" 
                          dark
                          height= 100%
                          width= 100%
                            @click="showRubriques"
                            :class="`v-size--${cardSizeBtn} ma-0 pa-0 pa-sm-1 text-wrap d-flex flex-grow-1 flex-shrink-1  align-self-stretch`"
                            >
                            <router-link :to="{name: 'cv.rubriques'}" tag="button" :class="` text-wrap`" :style="`${cardSizeBtn}`" >Voir le CV entier</router-link>
                          </v-btn>
                          </v-col>
                         </v-row>
                         <!-- </v-container> -->
                         </v-card-actions>






                    
                      <!-- </v-img> -->
                      <!-- <v-card-actions width= 100% class="pa-0 ma-0 d-block">
                      <v-container  class="pa-0 ma-0 d-block">
                      <v-row class="pa-0 ma-0">
                        <v-col cols="6"><v-btn class="text-truncate">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</v-btn></v-col>
                        <v-col cols="6"><v-btn>b</v-btn></v-col>
                      </v-row>  
                      </v-container>
                      </v-card-actions>                       -->
                    </v-card>       
                  </div>
                  <!-- </v-row> -->
                 </v-carousel-item>
              </v-carousel>
              
            </div>

          <div v-else 
          class="rubriques overflow-y-auto overflow-x-hidden " 
          :style="`width:85%; margin-top:${marginTop}px`" id="rubriques">
            <!-- <v-row class="justify-center">
  <v-col cols="9"> -->
          <!-- <router-view></router-view> -->
          <div class="formations" id="formations">
            <!-- <formations id="formations"></formations> -->
            <router-view name="formations"></router-view>
          </div>
          <div class="experiences" id="experiences">
            <!-- <experiences id="experiences"></experiences> -->
            <router-view name="experiences"></router-view>
          </div>
          <div class="competences" id="competences">
            <!-- <competences id="competences" ></competences> -->
            <router-view name="competences"></router-view>
          </div>
          <div class="realisations" id="realisations">
            <!-- <realisations id="realisations"></realisations> -->
            <router-view name="realisations"></router-view>
          </div>
          <div class="langues" id="langues">
            <!-- <langues id="langues"></langues> -->
            <router-view name="langues"></router-view>
          </div>
          <div class="interets" id="interets">
            <!-- <interets id="interets"></interets> -->
            <router-view name="interets"></router-view>
          </div>
          <!-- </rubriques> -->
          <!-- router rubriques -->
           <!-- <router-view name="rubriques"></router-view> -->
       <!-- </v-col>
</v-row> -->
        </div>
        </div>
        </v-img>
    </div>
</template>



<script>
export default {
 
  data () {
    return {
      showButton: true,
      bottomPosition: 0,
      computerHeight: (this.$vuetify.breakpoint.height),
      computerWidth: (this.$vuetify.breakpoint.width),
      // carouselWidth: (this.$vuetify.breakpoint.width)*0.39,
      // carouselHeight: (this.carouselWidth)/1.7778,
      computerContain: true,
      
      showCarousel: true,
      // navHeightt: this.$CvNav.height ,
      // model: 'caption',
      ratio: (this.$vuetify.breakpoint.width)/1.77,
      // aspectRatio: 16/9,
      cards: [
                {id:1, titre: 'expériences', icon: 'mdi-briefcase-variant', last: {info: 'Développeuse Web'}},
                {id:2, titre: 'formations', icon: 'mdi-school', last: {info: 'Développeur Web et Web mobile'}},
                {id:3, titre: 'compétences', icon: 'mdi-laptop-windows', last: {info:'Javascript | VueJS | Bootstrap | JQuery | PHP | Wordpress'}},
                {id:4, titre: 'réalisations', icon: 'mdi-clipboard-check-multiple', last: {info:'Site internet | Site WordPress | Application web'}},
                {id:5, titre: 'langues', icon: 'mdi-chat-processing', last: {info:'Français | Anglais | Espagnol'}},
                // {id:6, titre: 'centre d\'intérêts', icon: 'mdi-head-heart'} 
        ],
        // marginTop: 0,
       
    }
  },
  // components: {
  //   CvNav: () => import('./cv-nav.vue')
  // },
   computed: {
     isLarge() {
       if (this.$vuetify.breakpoint.width>this.$vuetify.breakpoint.height) {
         return true
       }
       else {
         return false
       }
     },
     computerCover() {
       if(!this.isLarge){
         return true
       }
       else {
         return false
       }
     },
     carouselWidth () {
       if (this.isLarge==false) {
        return (this.computerWidth)*0.39
       }
       else {
        return (this.computerHeight)*0.39
       }
     
     },
      carouselHeight () {
        return (this.carouselWidth)/1.77
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
      },
      marginTop() {
      if (this.computerHeight>400) {
         return (this.$vuetify.breakpoint.height/5)+96
      }
      else {
        return this.$vuetify.breakpoint.height/5
      }
    },
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
    buttonSize () {
      switch (this.$vuetify.breakpoint.name) {
        
        case 'xs': return 'x-small'
        case 'sm': return 'small'
        case 'md': return 'medium'
        case 'lg': return 'large'
        case 'xl': return 'medium'
        default: return 'x-large'
      }
     },
    //  breakpoint() {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case 'xs': return 'caption'
    //     case 'sm': return '20px'
    //     case 'md': return 'caption'
    //     case 'lg': return 'caption'
    //     default: return 'x-caption'
    //   }
    //  },
     cardSizeTitle() {
       switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'line-height:1rem; font-size:60%'
        case 'sm': return 'line-height:1rem; font-size:1.5rem'
        case 'md': return 'line-height:1.5rem; font-size:2rem'
        case 'lg': return 'line-height:1rem; font-size:1.5rem'
        case 'xl': return 'line-height:1rem; font-size:1.5rem'
        default: return 'line-height:1rem; font-size:1.5rem'
      }
     },
     cardSizeBody() {
       switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'subtitle-2'
        case 'sm': return 'h5'
        case 'md': return 'h5'
        case 'lg': return 'h5'
        case 'xl': return 'h5'
        default: return 'subtitle-2'
      }
     },
     cardSizeBtn() {
       switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'line-height:0.9rem; font-size:65%;'
        case 'sm': return 'line-height:1.1rem; font-size:1.1rem;'
        case 'md': return 'line-height:1.5rem; font-size:1.5rem;'
        case 'lg': return 'line-height:1rem; font-size:1rem;'
        case 'xl': return 'line-height:1rem; font-size:1rem;'
        default: return 'line-height:1.1rem; font-size:1.1rem;'
      }
     },
     iconCardSize () {
      switch (this.$vuetify.breakpoint.name) {
        // case 'xs': return 'x-small'
        case 'xs': return 'large'
        case 'sm': return 'x-large'
        case 'md': return 'xx-large'
        case 'lg': return 'xx-large'
        case 'xl': return 'xx-large'
        default: return 'x-large'
      }
    },
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
    cardSizeBodyMargin(){
      if (this.$vuetify.breakpoint.width>=800) {
         return 3
      }
      else if (this.$vuetify.breakpoint.width>=600 && this.$vuetify.breakpoint.width<800) {
        return  2.5
      }
       else if (this.$vuetify.breakpoint.width>384 && this.$vuetify.breakpoint.width<600) {
        return  2  
      }
      else if (this.$vuetify.breakpoint.width>=280 && this.$vuetify.breakpoint.width<=384) {
        return  0.5  
      }
      else {
        return 0
      }
    }
   },
  methods: {
    showRubriques: function (event) {
      // this.computerSize = (this.$vuetify.breakpoint.height)/10
      this.showButton = false
      // this.computerSize = this.$vuetify.breakpoint.height
      if(event) {
        this.computerWidth = (this.$vuetify.breakpoint.width)
        this.computerHeight = (this.$vuetify.breakpoint.height)*0.80
        // this.contain = true
        // this.aspectRatio = 5/1
        this.bottomPosition = -325
        this.computerContain = false
        this.computerCover = false
        this.showCarousel = false
        // this.navHeight = "150"
        return
      }
    },
    // isLarge() {
    //    if (this.$vuetify.breakpoint.width>this.$vuetify.breakpoint.height) {
    //      return true
    //    }
    //  },
    // setData (navHeight) {
    //   this.navHeight= navHeight
    // }
  }
};
</script>

<style>
.titre__rubrique {
  background-color: #90a4aebe;
  color: white;
  margin-bottom: 0.5rem;
  height: 3rem;
}
#rubriques {
  /* width: 50%;
  height: 100%; */
  /* margin-top: 51%; */
  /* padding-top: 4.5%; */
  /* margin-bottom: 50%; */
  font-family: 'Changa', sans-serif;
  /* font-family: 'Syncopate', sans-serif; */
}
.v-responsive__content {
  display: flex;
  justify-content: center;
  /* position: relative; */
}
.computer {
  width:100%;
  height:100%;
}
.v-btn__content {
  width:100%
}
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

.carousel__content {
  width:100%;
  height:100%;
}
.carousel__card {
  width:100%;
  height:100%;
}
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