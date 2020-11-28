<template>
    <div class="carousel">
        <slot></slot>



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
                        <v-list-item-title :class="`pa-0 my-sm-1 my-${cardSizeBodyMargin} d-flex justify-center text-truncated text-${cardSizeBody}`" style="word-break:normal">{{card.last.info}}</v-list-item-title>
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
                         <router-link :to="{name: `cv.${card.titre}`}" tag="button" :class="` text-wrap`" :style="`${cardSizeBtn}`" > Voir les {{card.titre}} </router-link> 
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
              
       


        <!-- <div class="carouselSlide d-flex justify-center">
           
            <carousel-slide v-for="card in cards" 
            :key="card.id" 
            :index="card.id-1" 
            :titre="card.titre" 
            :icon="card.icon" 
            :last="card.last">
            <router-view name="carouselSlide"></router-view>
                </carousel-slide> 
           
        </div>
        <v-btn icon class="carousel__nav carousel__prev" @click.prevent="prevent" 
                color="#952175"
                dark
                absolute
                left
                fab
                >
                <v-icon x-large>mdi-chevron-left-box-outline</v-icon></v-btn>
        <v-btn class="carousel__nav carousel__next" icon @click.prevent="next"
                color="#952175"
                dark
                absolute
                right
                fab
                ><v-icon x-large>mdi-chevron-right-box-outline</v-icon> </v-btn>
        <div class="carousel__pagination">
            <button v-for="n in cardsCount" :key="n.i" @click="goto(n-1)" :class="{active: n-1 == index}"
            ></button>
        </div>
        
        <v-row class="d-flex justify-center ma-5">
          <v-btn
            relative
            dark
            fab
            color="#952175"
            >
            <router-link :to="{name: 'bottom'}" tag="button"><v-icon >mdi-chevron-double-down</v-icon></router-link>
          </v-btn>
          </v-row>  -->
    </div>

</template>

<script>
// import CarouselSlide from '@/components/carousel/CarouselSlide';
export default {
 
  data () {
    return {
            cards: [
                {id:1, titre: 'expériences', icon: 'mdi-briefcase-variant', last: {info: 'Développeuse Web'}},
                {id:2, titre: 'formations', icon: 'mdi-school', last: {info: 'Développeur Web et Web mobile'}},
                {id:3, titre: 'compétences', icon: 'mdi-laptop-windows', last: {info:'Javascript | VueJS | Bootstrap | JQuery | PHP | Wordpress'}},
                {id:4, titre: 'réalisations', icon: 'mdi-clipboard-check-multiple', last: {info:'Site internet | Site WordPress | Application web'}},
                {id:5, titre: 'langues', icon: 'mdi-chat-processing', last: {info:'Français | Anglais | Espagnol'}},
                // {id:6, titre: 'centre d\'intérêts', icon: 'mdi-head-heart'} 
            ],
//             index: 0, 
//             direction: 'right', 
//             cards: [
//                 {id:1, titre: 'expériences', icon: 'mdi-briefcase-variant', last: {info: 'Chargé d\'études et de veille stratégique'}},
//                 {id:2, titre: 'formations', icon: 'mdi-school', last: {info: 'Tire professionnel (BAC + 2) : Développeur Web et Web mobile'}},
//                 {id:3, titre: 'compétences', icon: 'mdi-cog-transfer', last: {info:'HTML5 | CSS3 | Javascript | Vue.js | Bootstrap | JQuery | PHP | Wordpress | MySQL | CodeIgniter'}},
//                 {id:4, titre: 'réalisations', icon: 'mdi-clipboard-check-multiple', last: {info:'Site internet | Site WordPress | Application web'}},
//                 {id:5, titre: 'langues', icon: 'mdi-chat-processing', last: {info:'Français | Anglais | Espagnol'}},
//                 // {id:6, titre: 'centre d\'intérêts', icon: 'mdi-head-heart'} 
//         ],                   
        }
    },
//      components: {
//     CarouselSlide, 
    //  },
    computed: {
//         cardsCount() { 
//             return this.cards.length 
//         }
//     },
//     methods: {
//         next () {
//             this.index ++
//             this.direction = 'right'
//              if (this.index >= this.cardsCount) {
//                  this.index = 0
//              }
//         },
//         prevent () {
//             this.index --
//             this.direction= 'left'
//              if (this.index < 0) {
//                  this.index = this.cardsCount - 1
//              }
//         }, 
//         goto (index) {
//             this.direction = index > this.index ? 'right' : 'left'
//             this.index = index
//          }



     isLarge() {
       if (this.$vuetify.breakpoint.width>this.$vuetify.breakpoint.height) {
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
      },
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
    
   },
    },

};
</script>

<style>
.v-btn__content {
  width:100%
}
.carousel__content {
  width:100%;
  height:100%;
}
.carousel__card {
  width:100%;
  height:100%;
}
/* .carousel {
    position: relative;
}
.carousel__pagination {
    position: relative;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
}
.carousel__pagination button {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: teal;
    opacity: 0.8;
    border-radius: 10px;
    margin:7px;
}
.carousel__pagination button.active {
background-color: #fff;
} */
</style>