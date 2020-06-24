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
 
      <v-card-title class="teal lighten-3">
      <strong class="subheading"> Pour en savoir plus sur moi : </strong>
      <v-spacer></v-spacer>
      <v-btn 
      text
      class="mx-4"
      dark
      v-for="icon in icons" 
      :key="icon"
      >
       <v-icon size="24px"> {{icon}} </v-icon>
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
      'mdi-cellphone-android',
      'mdi-gmail' , 
      'mdi-github', 
      'mdi-linkedin'
    ]
    }
  }

}
</script>
<style></style>