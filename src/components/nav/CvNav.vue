<template >
<div>
  <slot></slot>
  <!-- Début de la barre de navigation -->
  <v-app-bar
      app
      color="#BB334F"
      dark
      shrink-on-scroll
      :height="navHeight"
      scroll-target="#rubriques"
      :src="require('./../../assets/notes.jpg')"
      fade-img-on-scroll
    >
    <!-- template pour le fond du la barre de navigation -->
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
        </v-img>
         <!-- gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)" -->
         <!-- gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)" -->
      </template>


<!-- partie du nom et prénom -->
    <!-- <v-row padding="">
    <v-col cols="12" md="2" class="" align-self-start> -->
      <h4 id="name" class="mt-1 d-flex text-uppercase">diaraye fadika</h4>
      <v-spacer></v-spacer>
      <!-- <h2 id="lastName" class="subheading d-flex text-uppercase"></h2> -->
    <!-- </v-col>
      <v-col cols="12" md="8" class="d-flex justify-center"> -->
        <!-- <v-toolbar-title > -->
        <h2 class="d-flex text-center mt-2" id="fonction"> Developpeuse web et web mobile </h2> 
        <!-- </v-toolbar-title> -->
      <!-- </v-col > -->

<!-- partie infos contact
      <v-col cols="12" md="2" class="d-flex justify-end mt-2 pt-0 ml-0">
          <v-expand-transition >
              <v-card
              v-show="expand"
              color="#90a4aebe"
              class="pa-0 ma-0 contact__card"
              max-height="100"
              >
                <v-card-text
                class=" pa-1 ma-1"
              
                v-for="contact in contacts" 
                :key="contact.id"
                >
                  <v-icon class="" > {{contact.icon}}</v-icon> {{contact.value}} 
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
      </v-col> -->

      <!-- Bouton cv -->
        <!-- <v-col cols="12">
<v-row justify="start"> -->
        <v-spacer></v-spacer>
       
    <v-btn
    v-scroll:#rubriques="onScroll"
     v-model="shrinkOnScroll"
     :color="offsetTop<90? '#BB334F' :  'white'"
      dark 
      @click.stop="dialog = true"
      absolute
      bottom
      right
    >
    <span v-bind:class="`${colorText}--text`">
      CV papier
      </span>
    </v-btn>
    <v-dialog
      v-model="dialog"
       width="500"
    >
      <v-card>
        <!-- <v-img
          :src="require('@/CVFADIKA.pdf')"> -->
        <v-card-actions>
           <a :href="`${publicPath}CVFADIKA.pdf`" download="CV-FADIKA">
             <v-btn
            color="blue"
            text
          >
            Télécharger le CV
             <link rel="cv" href="<%= BASE_URL %>CVFADIKA.pdf"> 
          </v-btn>
          </a>
          
          <v-spacer></v-spacer> 
          <v-btn
            @click="dialog = false"
          >
            <v-icon color="#BB334F"> mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
        <!-- </v-img> -->
      </v-card>
    </v-dialog>
  <!-- </v-row>
        </v-col> -->
      <!-- </v-row> -->
      <template v-slot:extension>
        <v-tabs optional
        slider-color='#BB334F'
        class="d-flex justify-center tabs">
          <v-tab v-for="categorie in categories" 
            :key="categorie.id"
            >
            <router-link :to="{name: `cv.${categorie.titre}`}"><v-icon color="white"> {{categorie.icon}}</v-icon></router-link>
          <v-spacer></v-spacer>
          <v-divider vertical></v-divider>
          </v-tab>
        </v-tabs>
      </template>
  </v-app-bar>
  <router-link :to="{name: 'cv'}" tag="button">CV papier</router-link>
</div>
</template>


<script>
export default {
  // props: {
  //       cvButtonColor: {type: String, default: '#BB334F'}
  //   },
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
            dialog: false,
            publicPath: process.env.BASE_URL,
            offsetTop: 0,
            shrinkOnScroll: [true, false],
            colorText: "white",
            textRed: 'text-red',
            textWhite: 'text-white',
            navHeight: "100"
        }
    },
    watch: {
      dialog2 (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 4000)
      },
      // isShrinkOnScroll() {
      //   this.shrinkOnScroll = !this.shrinkOnScroll
      // },
      // buttonColor(shrinkOnScroll) {
      //   if (shrinkOnScroll) {
      //     return this.cvButtonColor ='blue'
      //   }
      // }
    },
    // computed: {
    //   cvButtonColor () {
    //     return this.colorValue
    //   },
   
  // },
  methods: {
    
  //   buttonColor(shrinkOnScroll) {
  //       if (shrinkOnScroll) {
  //           this.colorValue = 'blue'
  //       }
  //     }
  // cvButtonColor(shrinkOnScroll) {
  //       if (shrinkOnScroll) {
  //       this.colorValue = 'blue'
  //       }
  //       return this.colorValue
  //     },
  onScroll (e) {
      this.offsetTop = e.target.scrollTop
      if(this.offsetTop < 90) {
        this.colorText = "#BB334F"
      }
      else {
this.colorText = "red"
      }
      
 
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
    /* white-space: pre-wrap; */
    /* font-size: 2rem; */
    /* padding-bottom: 5em; */
    /* text-justify: distribute; */
    /* text-align: center; */
}
.cvtitre {
  text-align: center;
}
.contact__card {
  color: #BB334F;
  padding-left: 0px;
}
</style>