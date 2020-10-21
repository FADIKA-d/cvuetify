<template>
  <div >
    <slot></slot>
    <v-img
    :aspect-ratio="aspectRatio"
    :contain="contain"
    :height="computerHeight"
    :width="computerWidth"
    align="center"
    :position="`center bottom ${bottomPosition}px`"
    class="d-flex"
    justify="center"
    :src="require('./../assets/ordi.jpg')"
    >
     <!-- partie rubriques -->
        
            <div class="afficher align-self-center" id="afficher">
              <v-btn  
              v-show="showButton" 
              color="#BB334F" dark
                fab
                x-large
                cover
                @click="showRubriques"><router-link :to="{name: 'cv.rubriques'}" tag="button">
                {{ showButton ? 'voir le cv' : '' }}</router-link>
              </v-btn>
            </div>

          <div class="rubriques overflow-y-auto overflow-x-hidden" style="width:40%" id="rubriques">
            <!-- <v-row class="justify-center">
  <v-col cols="9"> -->
          <!-- <router-view></router-view> -->
          <div class="formations" id="formations">
            <!-- <formations id="formations"></formations> -->
            <router-view name="formations"></router-view>
          </div>
          <div class="experiences" id="experiences">
            <!-- <experiences id="experiences"></experiences> -->
            <router-view name="experiences"></router-view>
          </div>
          <div class="competences" id="competences">
            <!-- <competences id="competences" ></competences> -->
            <router-view name="competences"></router-view>
          </div>
          <div class="realisations" id="realisations">
            <!-- <realisations id="realisations"></realisations> -->
            <router-view name="realisations"></router-view>
          </div>
          <div class="langues" id="langues">
            <!-- <langues id="langues"></langues> -->
            <router-view name="langues"></router-view>
          </div>
          <div class="interets" id="interets">
            <!-- <interets id="interets"></interets> -->
            <router-view name="interets"></router-view>
          </div>
          <!-- </rubriques> -->
          <!-- router rubriques -->
           <!-- <router-view name="rubriques"></router-view> -->
       <!-- </v-col>
</v-row> -->
        </div>
        </v-img>
    </div>
</template>



<script>
export default {
  data () {
    return {
      showButton: true,
      // contain: true,
      bottomPosition: 0,
      computerHeight: (this.$vuetify.breakpoint.height)/2,
      computerWidth: (this.$vuetify.breakpoint.width)/2,
      // aspectRatio: 16/9,
    }
  },
  //  computed: {
      // computerSize () {
        // return (this.$vuetify.breakpoint.height)/3
        // switch (this.$vuetify.breakpoint.name) {
        //   case 'xs': return 110
        //   case 'sm': return 200
        //   case 'md': return 250
        //   case 'lg': return 300
        //   default: return 400
        // }
      // }
    // },
  methods: {
    showRubriques: function (event) {
      // this.computerSize = (this.$vuetify.breakpoint.height)/10
      this.showButton = false
      // this.computerSize = this.$vuetify.breakpoint.height
      if(event) {
        this.computerWidth = (this.$vuetify.breakpoint.width)*1.75
        this.computerHeight = (this.$vuetify.breakpoint.height)*0.90
        // this.contain = true
        // this.aspectRatio = 5/1
        this.bottomPosition = -350
        // this.navHeight = "150"
        return
      }
    }
  }
};
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
  margin-top: 0%;
  padding-top: 5%;
  margin-bottom: 3%;
  font-family: 'Changa', sans-serif;
  
  /* font-family: 'Syncopate', sans-serif; */
}
.v-responsive__content{
  display: flex;
  justify-content: center;
  position: relative;
}
.afficher {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%,-50%);
}
/* .v-image__image {
  width: 150%;
  height: 30%
} */
.card__rubrique {
    color:#464545; 
}
</style>