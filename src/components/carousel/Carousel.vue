<template>
      <div class="carousel d-flex flex-wrap align-self-center justify-center" id="carousel" 
            :style="`width:${carouselWidth}px`" >
        <slot></slot>
              <v-carousel 
              hide-delimiters
              light
              :height="carouselHeight"
              :show-arrows="false"
              >
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
                          
                            :class="`v-size--${cardSizeBtn} ma-0 pa-0 pa-sm-1 text-wrap d-flex flex-grow-1 flex-shrink-1  align-self-stretch`"
                            >
                            <router-link :to="{name: 'cv.rubriques'}" tag="button"  :class="` text-wrap`" :style="`${cardSizeBtn}`" >Voir le CV entier</router-link>
                             <!-- <a href="/cv/rubriques" style="color:white">Voir le CV entier </a> -->
                          </v-btn>
                          </v-col>
                         </v-row>
                         <!-- </v-container> -->
                         </v-card-actions>
                    </v-card>       
                  </div>
                  <!-- </v-row> -->
                 </v-carousel-item>
              </v-carousel>
               <!-- <router-view name="rubriques"></router-view> -->
            </div>
</template>

<script>
export default {
  data () {
    return {
        computerHeight: (this.$vuetify.breakpoint.height),
      computerWidth: (this.$vuetify.breakpoint.width),
            cards: [
                {id:1, titre: 'expériences', icon: 'mdi-briefcase-variant', last: {info: 'Développeuse Web'}},
                {id:2, titre: 'formations', icon: 'mdi-school', last: {info: 'Développeur Web et Web mobile'}},
                {id:3, titre: 'compétences', icon: 'mdi-laptop-windows', last: {info:'Javascript | VueJS | Bootstrap | JQuery | PHP | Wordpress'}},
                {id:4, titre: 'réalisations', icon: 'mdi-clipboard-check-multiple', last: {info:'Site internet | Site WordPress | Application web'}},
                {id:5, titre: 'langues', icon: 'mdi-chat-processing', last: {info:'Français | Anglais | Espagnol'}},
                // {id:6, titre: 'centre d\'intérêts', icon: 'mdi-head-heart'} 
            ],    
        }
    },
    computed: {
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
.card__rubrique {
    color:#464545; 
}
</style>