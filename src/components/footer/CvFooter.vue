<template>
<div>
<slot></slot>
<v-footer
      dark
      padless
      >
      <v-card
      class="flex"
      color= 'grey lighten-1'
      flat
      tile>

      <v-card-title class="footer__card pa-0 d-flex justify-center" >
      <!-- <router-link :to="{name: 'accueil.rubriques'}" tag="button">Voir toutes les rubriques du cv</router-link> -->
    <!-- <v-spacer v-if="this.$vuetify.breakpoint.name='lg'"></v-spacer> -->
      <div class="pl-2"
      :style="`${cardFooterText}`"
 > Pour en savoir plus sur moi : </div>
      <!-- <v-spacer></v-spacer> -->
      <div
      class="d-flex pa-0"
       >
      <v-btn 
      text
      class=""
      dark
      v-for="icon in icons" 
      :key="icon.id"
      :href="icon.href"
      >
      <!-- <a :href="`${icon.href}`" ><v-icon size="24px" color="white"> {{icon.icon}} </v-icon></a> -->
      <router-link :to="`${icon.href}`" ><v-icon :size="`${iconFooterSize}`" color="white"> {{icon.icon}} </v-icon></router-link>
      </v-btn>
      </div> 
      </v-card-title >
  
      <v-card-text 
      :class="`py-0 white--text text-center text-${breakpoint}`" :style="`${cardFooterName}`">Diaraye FADIKA</v-card-text>
      <v-card-text 
      :class="`py-0 white--text text-center text-${breakpoint}`" color="purple" :style="`${cardFooterName}`"> {{ new Date().getFullYear() }}</v-card-text>
      </v-card>
    </v-footer>
</div>
</template>
<script>
export default {
  data () {
    return {
    icons: [ 
      {id:1, href: 'https://github.com/FADIKA-d', icon: 'mdi-github' },
      {id:2, href: 'https://www.linkedin.com/in/diaraye-fadika-5368101ab/?originalSubdomain=fr', icon: 'mdi-linkedin'},
      // {id:3 , href: '', icon: 'mdi-gmail' },
      // {id:4 , href:'' , icon: 'mdi-cellphone-android'}
    ], 
    breakpoint: this.$vuetify.breakpoint.name,
    // footerHeight: (this.$vuetify.breakpoint.height)/10,
    }
  },
  computed: {
    iconFooterSize () {
      switch (this.$vuetify.breakpoint.name) {
        // case 'xs': return 'x-small'
        case 'xs': return 'medium'
        case 'sm': return 'x-large'
        case 'md': return 'x-large'
        case 'lg': return 'x-large'
        default: return 'x-large'
      }
    },
    cardFooterText(){
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'line-height:1rem; font-size:0.7rem;'
        case 'sm': return 'line-height:1.1rem; font-size:1.3rem;'
        case 'md': return 'line-height:1.5rem; font-size:1.5rem;'
        case 'lg': return 'line-height:2rem; font-size:1.3rem;'
        case 'xl': return 'line-height:2rem; font-size:1.5rem;'
        default: return 'line-height:1.1rem; font-size:1.1rem;'
      }
    },
    cardFooterName(){
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'line-height:1rem; font-size:0.7rem;'
        case 'sm': return 'line-height:1.2rem; font-size:0.9rem;'
        case 'md': return 'line-height:1.5rem; font-size:1.3rem;'
        case 'lg': return 'line-height:1.5rem; font-size:1rem;'
        case 'xl': return 'line-height:1.5rem; font-size:1rem;'
        default: return 'line-height:1.1rem; font-size:1.1rem;'
      }
    }
  }

}
</script>
<style>
.footer__card {
  background-color: #BB334F;
      font-size: 1rem;
}
/* .v-footer {
position: absolute;
} */
  </style>