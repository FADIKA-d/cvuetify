<template>
 <div
          class="rubriques overflow-y-auto overflow-x-hidden " 
          :style="`width:95%; max-height:${maxRubrique}px;`" id="rubriques">
          <!-- margin-top:${marginTop}% -->
<slot></slot>
<div>
  <!-- <router-view ></router-view> -->
   <!-- <router-view name="rubriques"></router-view> -->
  <!-- <rubriques> -->
    <!-- <formations></formations>
    <experiences id="experiences"></experiences> -->
  
            <!-- <v-row class="justify-center">
  <v-col cols="9"> -->
          <!-- <router-view></router-view> -->
          <!-- <p>essai :{{this.$route.params.picture}} </p> -->
          <div class="formations" id="formations">
            <formations></formations>
             
            <!-- <router-view key="/cv/formations"></router-view> -->
            <!-- <router-view :name="$route.name"></router-view> -->
          </div>
          <div class="experiences" id="experiences">
            <experiences id="experiences"></experiences>
            <!-- <router-view :key="$route.path"></router-view> -->
            <!-- <router-view name="experiences"></router-view> -->
          </div>
          <div class="competences" id="competences">
            <competences id="competences" ></competences>
            <!-- <router-view name="competences"></router-view> -->
          </div>
          <div class="realisations" id="realisations">
            <realisations id="realisations"></realisations>
            <!-- <router-view name="realisations"></router-view> -->
          </div>
          <div class="langues" id="langues">
            <langues id="langues"></langues>
            <!-- <router-view name="langues"></router-view> -->
          </div>
          <div class="interets" id="interets">
            <interets id="interets"></interets>
            <!-- <router-view name="interets"></router-view> -->
          </div>
          <!-- </rubriques> -->
          <!-- router rubriques -->
           <!-- <router-view name="rubriques"></router-view> -->
       <!-- </v-col>
</v-row> -->
       </div>
</div>
</template>

<script>
export default {
  // props: {
        // nom:  {type: String, default: 'cv.rubriques'},
      //  picture2:  {type: Boolean, default: false}
    // }, 
    data () {
        return {
         maxRubrique: (this.$vuetify.breakpoint.height),
         newPicture: this.$route.params.picture
        }
    },
     components: {
    
  Formations: () => import("@/components/rubriques/Formations"),
  Experiences: () => import("@/components/rubriques/Experiences"),
  Competences: () => import("@/components/rubriques/Competences"),
  Realisations: () => import("@/components/rubriques/Realisations"),
  Langues: () => import("@/components/rubriques/Langues"),
  },
 computed: {
       marginTop() {
        switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '5'
        case 'sm': return '6'
        case 'md': return '7'
        case 'lg': return '7'
        case 'xl': return '8'
        default: return '8'
      }
      // if (this.computerHeight>400) {
      //   return "5"
      //   //  return (this.$vuetify.breakpoint.height/5)+96
      // }
      // else {
      //   return "5"
      //   // return this.$vuetify.breakpoint.height/5
      // }
    },
       },
}
</script>
<style>
.titre__rubrique {
  background-color: #90a4aebe;
  color: white;
  margin-bottom: 0.5rem;
  height: 3rem;
}
#rubriques {
  /* width: 50%;
  height: 100%; */
  /* margin-top: 51%; */
  /* padding-top: 4.5%; */
  /* margin-bottom: 50%; */
  font-family: 'Changa', sans-serif;
  /* font-family: 'Syncopate', sans-serif; */
}
.v-responsive__content {
  display: flex;
  justify-content: center;
  /* position: relative; */
}
.card__rubrique {
    color:#464545; 
}
</style>