<template>
  <div>
    <slot></slot>

    <div class="parallax-container d-flex align-start">
      <v-parallax
        height=""
        width=""
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
}
.titre__rubrique {
  background-color: #90a4aebe;
  color: white;
  margin-bottom: 0.5rem;
  height: 3rem;
}
#rubriques {
  width: 40%;
  height: 100%;
  margin-top: 21rem;
  margin-bottom: 12rem;
  font-family: 'Changa', sans-serif;
  
  /* font-family: 'Syncopate', sans-serif; */
}
.v-parallax__content {
  align-items: center;
}
.v-parallax__image
{ 
/* taille image du parallax (75rem) */
 height: 73rem;
 /* paddinf top de l'image 5 rem */
top: 0;
}
.v-parallax {
  /* largeur de l'image (100)*/
  width: 100%;
  /* hauteur de l'image (64)*/
  height: 64rem;
  /* position: absolute; */
}
.card__rubrique {
    color:#BB334F; 
}



</style>