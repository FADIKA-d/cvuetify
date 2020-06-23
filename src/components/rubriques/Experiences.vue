<template>
<div>
<slot></slot>
<router-view></router-view>
<v-container class="pa-4 text-center">
  <h1 class="py-5 font-weight-bold purple--text text-uppercase">Expériences</h1>
  <v-timeline>
    <v-timeline-item
      v-for="experience in experiences"
      :key="experience.id"
      :color="experience.color"
      :company="experience.company"
      :function="experience.function"
      :start="experience.start"
      :end="experience.end"
      :place="experience.place"
      :mission="experience.mission"
      small
    >
    
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${experience.color}--text`"
          v-text="experience.end"
        ></span>
      </template>
      <v-hover>
      <template v-slot="{hover}">
      <v-card
      :class="`elevation-${hover ? 35 : 0}`" class="mx-15">
        <v-card-title class="font-weight-bold text-center purple--text mr-3 ml-0">{{experience.function}} </v-card-title>
        <v-card-text class="text-left">
          {{experience.mission}}
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-col> {{experience.company}} </v-col>
            <v-col> {{experience.place}} </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      </template>
      </v-hover>
    </v-timeline-item>
  </v-timeline>
  </v-container>
</div>
</template>

<script>
export default {
 data () {
        return {
   experiences: [
        {id:1, company: 'GMF VIE', function: 'Chargé de veille documentaire', start: 2013, end: 2014, place: 'Paris', mission: 'Réalisation d’études documentaires et pilotage du dispositif de veille. Rédaction de préconisations pour optimiser l’offre (produit et service). Aide au déploiement du logiciel médiathèque du service en vue d’accroitre l’attractivité du service.', color: 'purple'},
        {id:2, company: 'BURSON MARSTELLER', function: 'Chargé d\'études et de veille stratégique', start: 2013, end: 2014, place: 'Paris', mission: 'Réalisation de veilles presse quotidiennes en anglais et en français. Réalisation de benchmarks pour les 25 consultants. Mise en place d’alertes et de requêtes pour les collaborateurs.', color: 'purple'},
        {id:3, company: 'TESTE POUR VOUS', function: 'Chargé de veille concurrentielle', start: 2010, end: 2010, place: 'Paris', mission: 'Réalisation de veilles concurrentielles sur les produits financiers. Gestion des sources d’information du service de veille. Surveillance des signaux faibles.', color: 'purple'}
      ]
      }
}
}
</script>
<style></style>