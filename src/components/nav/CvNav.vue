<template >
<div>
<slot></slot>
<v-app-bar
      app
      color="teal lighten-3"
      dark
    >
    
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-toolbar-title >
        <strong class="subheading"> Developpeuse web et web mobile </strong>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon>
      </v-app-bar-nav-icon>
 
      <template v-slot:extension>
      <v-tabs align-with-title class="d-flex justify-center">
      <v-tab><v-icon> mdi-account-details</v-icon></v-tab>
      <v-tab><v-icon> mdi-school</v-icon></v-tab>
      <v-tab><v-icon> mdi-briefcase-variant</v-icon></v-tab>
      <v-tab><v-icon> mdi-cog-transfer</v-icon></v-tab>
      <v-tab><v-icon> mdi-clipboard-check-multiple</v-icon></v-tab>
      <v-tab><v-icon> mdi-chat-processing</v-icon></v-tab>
      <v-tab><v-icon> mdi-head-heart</v-icon></v-tab>
      </v-tabs>
      </template>
   
    </v-app-bar>
</div>
</template>
<script>
export default {
    data () {
        return {
         
        }
    }
}
</script>
<style></style>