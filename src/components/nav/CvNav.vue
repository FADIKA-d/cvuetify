<template >
<div>
  <slot></slot>
  <v-app-bar
      app
      color="teal lighten-3"
      dark
    >
    <v-row  padding="5">
    <v-col cols="12" md="3" class="" >
      <h2 class="subheading d-flex">DIARAYE</h2>
      <h2 class="subheading d-flex">FADIKA</h2>
    </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-toolbar-title class="d-flex " >
        <h1 class="subheading font-weight-bold"> Developpeuse web et web mobile </h1> 
        </v-toolbar-title>
      </v-col >
        <v-col cols="12" md="3" class="d-flex justify-end mt-2 pt-2">
          <v-expand-transition >
              <v-card
              v-show="expand"
              color="white"
              class="pa-2"
              >
                <v-card-text
                class="purple--text pa-0 ma-0"
              
                v-for="contact in contacts" 
                :key="contact.id"
                >
                  <v-icon class="purple--text "> {{contact.icon}}</v-icon> {{contact.value}}
                </v-card-text>
              </v-card>
          </v-expand-transition>
          <v-btn
            class="justify-center"
            color="white"
            @click="expand = !expand"
            icon >
              <v-icon> mdi-account-details</v-icon>
          </v-btn>
          
        </v-col>
        </v-row>
      <template v-slot:extension>
        <v-tabs align-with-title class="d-flex justify-center">
          <v-tab v-for="categorie in categories" 
            :key="categorie.id"
            @click="sous_rubrique"
            >
            <v-icon> {{categorie.icon}}</v-icon>
          </v-tab>
          <v-divider vertical></v-divider>
        </v-tabs>
      </template>
  </v-app-bar>
</div>
</template>


<script>
export default {
    data () {
        return {
          categories: [ 
            {id:1, titre: 'PROFIL', icon: 'mdi-account-details'},
            {id:2, titre: 'EXPERIENCES', icon: 'mdi-school' }, 
            {id:3, titre: 'FORMATIONS', icon: 'mdi-briefcase-variant'}, 
            {id:4, titre: 'COMPETENCES', icon: 'mdi-cog-transfer'},
            {id:5, titre: 'REALISATIONS', icon: 'mdi-clipboard-check-multiple'},
            {id:6, titre: 'LANGUES', icon: 'mdi-chat-processing'},
            {id:7, titre: 'INTERETS', icon: 'mdi-head-heart'}
          ],
          contacts: [ 
            {id:1, value: '06.58.41.48.72', icon: 'mdi-cellphone-android'},
            {id:2, value: 'd.fadika@gmail.com', icon: 'mdi-gmail'  }, 
            // {id:3, value: 'FADIKA-d', icon: 'mdi-github'}, 
            // {id:4, value: 'Fadika Diaraye', icon: 'mdi-linkedin'}, 
          ],
            expand: false,
            expand2: false,
        }
    }
}
</script>
<style></style>