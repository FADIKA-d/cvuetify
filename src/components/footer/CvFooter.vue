<template>
<div>
<slot></slot>
<v-footer
      dark
      color="teal lighten-3"
      padless
      absolute
      >
      <v-card
      class="flex"
      color= '#952175'
      flat
      tile>
  <v-spacer></v-spacer>
      <v-card-title class="teal lighten-3">
      <strong class="subheading"> Pour en savoir plus sur moi : </strong>
      <v-spacer></v-spacer>
      <v-btn 
      text
      class="mx-4"
      dark
      v-for="icon in icons" 
      :key="icon.ìd"
      :href="icon.href"
      >
      <a :href="`${icon.href}`" ><v-icon size="24px" color="white"> {{icon.icon}} </v-icon></a>
      </v-btn>
      </v-card-title >
  
      <v-card-text class="py-0 white--text text-center" color="purple"> {{ new Date().getFullYear() }}</v-card-text>
      <v-card-text class="py-0 white--text text-center">Diaraye FADIKA</v-card-text>
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
<style></style>