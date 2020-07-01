<template>
<div>
<slot></slot>
<v-container class="pa-4 text-center">
  <h1 class="pa-1 font-weight-bold text-uppercase titre__rubrique">Expériences</h1>
  <v-timeline dense>
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
      fill-dot
      right
    >
    
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${experience.color}--text experience__color`"
          v-text="experience.end"
        ></span>
      </template>
      <v-hover>
      <template v-slot="{hover}">
      <v-card
      :class="`elevation-${hover ? 35 : 0} experience__card`" class="experience__card pa-0" color="#B0BEC515">
        <v-card-title class="font-weight-bold text-center card__rubrique mr-3 ml-0">{{experience.function}} </v-card-title>
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
        {id:1, company: 'GMF VIE', function: 'Chargé de veille documentaire', start: 2013, end: 2014, place: 'Paris', mission: 'Réalisation d’études documentaires et pilotage du dispositif de veille. Rédaction de préconisations pour optimiser l’offre (produit et service). Aide au déploiement du logiciel médiathèque du service en vue d’accroitre l’attractivité du service.', color: '#BB334F'},
        {id:2, company: 'BURSON MARSTELLER', function: 'Chargé d\'études et de veille stratégique', start: 2011, end: 2011, place: 'Paris', mission: 'Réalisation de veilles presse quotidiennes en anglais et en français. Réalisation de benchmarks pour les 25 consultants. Mise en place d’alertes et de requêtes pour les collaborateurs.', color: '#BB334F'},
        {id:3, company: 'TESTE POUR VOUS', function: 'Chargé de veille concurrentielle', start: 2010, end: 2010, place: 'Paris', mission: 'Réalisation de veilles concurrentielles sur les produits financiers. Gestion des sources d’information du service de veille. Surveillance des signaux faibles.', color: '#BB334F'}
      ]
      }
}
}
</script>
<style>
.experience__color {
  color: #BB334F;
}
.experience__card {
  background-color: #90a4ae25;
}
</style>