<template >
<div>
  <slot></slot>
  <v-app-bar
 
      app
      color="teal lighten-3"
      dark
      shrink-on-scroll
      min-height="30"
      scroll-target="#rubriques"
    >
    <v-row padding="">
    <v-col cols="12" md="2" class="" align-self-start>
      <h2 id="name" class="subheading d-flex">DIARAYE</h2>
      <h2 id="lastName" class="subheading d-flex">FADIKA</h2>
    </v-col>
      <v-col cols="12" md="8" class="d-flex "  >
        <v-toolbar-title class="d-flex " >
        <h2 class="d-flex " id="fonction"> Developpeuse web et web mobile </h2> 
        </v-toolbar-title>
      </v-col >
        <v-col cols="12" md="2" class="d-flex justify-end mt-2 pt-2">
          <v-expand-transition >
              <v-card
              v-show="expand"
              color="white"
              class="pa-1 ma-1"
              >
                <v-card-text
                class="purple--text pa-1 ma-1"
              
                v-for="contact in contacts" 
                :key="contact.id"
                >
                  <v-icon class="purple--text " > {{contact.icon}}</v-icon> {{contact.value}} 
                  </v-card-text>
              </v-card>
          </v-expand-transition>
          <v-btn
            class="justify-center"
            color="white"
            @click="expand = !expand"
            icon >
              <v-icon x-large> mdi-account-details</v-icon>
          </v-btn>
          
        </v-col>
        </v-row>
      <template v-slot:extension>
        <v-tabs optional
        slider-color='#952175'
        class="d-flex justify-center tabs">
          <v-tab v-for="categorie in categories" 
            :key="categorie.id"
            >
            <router-link :to="{name: `${categorie.titre}`}"><v-icon color="white"> {{categorie.icon}}</v-icon></router-link>
          <v-divider vertical></v-divider>
          </v-tab>
        </v-tabs>
        <router-link :to="{name: 'root'}" tag="button">cv</router-link>
      </template>
  </v-app-bar>
</div>
</template>


<script>
export default {
    data () {
        return {
          categories: [ 
            {id:3, titre: 'formations', icon: 'mdi-school'}, 
            {id:4, titre: 'compétences', icon: 'mdi-cog-transfer'},
            {id:2, titre: 'expériences', icon: 'mdi-briefcase-variant' }, 
            {id:5, titre: 'réalisations', icon: 'mdi-clipboard-check-multiple'},
            {id:6, titre: 'langues', icon: 'mdi-chat-processing'},
            // {id:7, titre: 'INTERETS', icon: 'mdi-head-heart'}
          ],
          contacts: [ 
            {id:1, value: '06.58.41.48.72', icon: 'mdi-cellphone-android'},
            {id:2, value: 'd.fadika@gmail.com', icon: 'mdi-gmail'}, 
            // {id:3, value: 'FADIKA-d', icon: 'mdi-github'}, 
            // {id:4, value: 'Fadika Diaraye', icon: 'mdi-linkedin'}, 
          ],
            expand: false,
            expand2: false,
        }
    }
}
</script>
<style>
#name #lastName {

    font-family: 'Changa', sans-serif;
}
#fonction {

    font-family: 'Syncopate', sans-serif;
    white-space: pre-wrap;
    padding-bottom: 5em;
    text-justify: distribute;
    text-align: center;
}
</style>