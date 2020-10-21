<template>
<div>
<slot></slot>
<v-footer
      dark
      padless
      >
      <v-card
      class="flex"
      color= 'blue-grey lighten-3'
      flat
      tile>

      <v-card-title class="footer__card pa-0" justify-content= "end">
      <router-link :to="{name: 'accueil.rubriques'}" tag="button">Voir toutes les rubriques du cv</router-link>
      <v-spacer></v-spacer>
      <strong class="subheading "> Pour en savoir plus sur moi : </strong>
      
      <v-btn 
      text
      class=""
      dark
      v-for="icon in icons" 
      :key="icon.id"
      :href="icon.href"
      >
      <!-- <a :href="`${icon.href}`" ><v-icon size="24px" color="white"> {{icon.icon}} </v-icon></a> -->
      <router-link to="`${icon.href}`" ><v-icon size="24px" color="white"> {{icon.icon}} </v-icon></router-link>
      </v-btn>
      </v-card-title >
  
      <v-card-text class="py-0 white--text text-center">Diaraye FADIKA</v-card-text>
      <v-card-text class="py-0 white--text text-center " color="purple"> {{ new Date().getFullYear() }}</v-card-text>
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
    ]
    }
  }

}
</script>
<style>
.footer__card {
  background-color: #BB334F;
}
/* .v-footer {
position: absolute;
} */
  </style>