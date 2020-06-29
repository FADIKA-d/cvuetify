<template>
  <div>
    <slot></slot>

    <div class="parallax-container d-flex align-start">
      <v-parallax
        height="auto"
        width="auto"
        class="parallax"
        cover
        :src="require('./../assets/ordi.jpg')"
      >
  <!-- partie rubriques -->
        <div class="rubriques overflow-y-auto overflow-x-hidden d-flex-inline" id="rubriques">
          <!-- <router-link :to="{name: 'sous.formations'}"> sous rubrique </router-link>
       <router-link :to="{name: 'sous.experiences'}"> sous rubrique </router-link>
       <router-link :to="{name: 'sous.competences'}"> sous rubrique </router-link>
       <router-link :to="{name: 'sous.realisations'}"> sous rubrique </router-link>
       <router-link :to="{name: 'sous.langues'}"> sous rubrique </router-link>
          <router-link :to="{name: 'post', params: { class: 'langues'} }"> essai</router-link>-->
          <!-- <rubriques id="rubrique" class="d-block text-center" justify="start"> -->

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
        </div>
      </v-parallax>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
};
</script>

<style>
.parallax-container {
 position: relative;
 justify-content: center;
}
.titre__rubrique {
  background-color: #90a4aebe;
  color: white;
  margin-bottom: 1rem;
}
#rubriques {
  width: 49%;
  height: 100%;
  margin-top: 14rem;
  margin-bottom: 23rem;
  font-family: 'Changa', sans-serif;
  
  /* font-family: 'Syncopate', sans-serif; */
}
.v-parallax__content {
  align-items: center;

}
.v-parallax__image
{ 
    /* hauteure minimale de l'image 70% */
min-height: 80%;
}
.v-parallax {
  /* largeur de l'image (80)*/
  width: 100%;
  /* hauteur de l'image (45)*/
  height: 70rem;
  /* position: absolute; */
}
img.v-parallax__image {
    /* image du parallax au maximum */
 max-width: 120%;
}
.card__rubrique {
    color:#BB334F; 
}



</style>