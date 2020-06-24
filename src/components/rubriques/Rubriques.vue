<template>
<div>
<slot></slot>
<v-row class="d-flex justify-center ma-5">
          <v-btn
              relative
              dark
              light="true"
              fab
              color="#952175"
            >
            <router-link :to="{name: 'bottom'}" tag="button">
              <v-icon >mdi-chevron-double-down</v-icon>
              </router-link>
            </v-btn>
    </v-row>
          <div class="parallax-container d-flex align-start justify-center">
          <v-parallax
          height="auto"
          width="auto"
          class="parallax w-25"
          :src="require('../../assets/top_keyboard.jpg')"
          >
            <rubriques id="rubrique" class="d-block text-center" justify="start">
              <div class="formations" id="formations">
                <!-- <formations id="formations"></formations> -->
                <router-view name="formations"></router-view>
              </div>
              <div class="experiences">
                <experiences id="experiences"></experiences>
                <router-view name="experiences"></router-view>
              </div>
              <div class="competences">
                <competences id="competences" ></competences>
                <router-view name="competences"></router-view>
              </div>
              <div class="realisations">
                <realisations id="realisations"></realisations>
                <router-view name="realisations"></router-view>
              </div>
              <div class="langues">
                <langues id="langues"></langues>
                <router-view name="langues"></router-view>
              </div>
              <div class="interets">
                <!-- <interets id="interets"></interets> -->
                <router-view name="interets"></router-view>
              </div>
            </rubriques>
            <!-- router rubriques -->
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
}
</script>
<style></style>