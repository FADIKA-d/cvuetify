<template>
<div>
<slot></slot>
<h1 class="py-5">Expériences</h1>
  <v-timeline>
    <v-timeline-item
      v-for="year in years"
      :key="year.id"
      :color="year.color"
      :texte="year.texte"
      :titre="year.titre"
      small
    >
    
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.annee"
        ></span>
      </template>
      <v-hover>
      <template v-slot="{hover}">
      <v-card
      :class="`elevation-${hover ? 35 : 0}`" class="mx-15">
        <v-card-title class="headline justify-center"> {{year.titre}} </v-card-title>
        <v-card-text>
          {{year.texte}}
        </v-card-text>
      </v-card>
      </template>
      </v-hover>
    </v-timeline-item>
  </v-timeline>
</div>
</template>

<script>
export default {
    data () {
        return {
            years: [
        {id:1, color: 'black', titre: 'Développeur', texte:'patari patata', annee: "2020"},
        {id:2, color: 'black', titre: 'Développeur', texte:'patari patata', annee: "2020"},
        {id:3, color: 'black', titre: 'Développeur', texte:'patari patata', annee: "2020"},
       
            ]
         
        }
    }
}
</script>
<style></style>