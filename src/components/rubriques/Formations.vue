<template>
<div>
<slot></slot>
<h1 class="py-5">Formations</h1>
<v-row col="12" class="d-flex justify-space-around ">
<v-col v-for="education in educations"
      :key="education.id"
      :degree="education.degree"
      :year="education.year"
      :grade="education.grade"
      :institution="education.institution"
      :place="education.place"
      class="d-flex justify-space-around "
     >
<v-card >
      <v-card-title>{{education.field}}</v-card-title> 
      <span>      
          <v-rating
            :length="education.degree"
            readonly
            background-color="purple"
            size="44"
            >
            </v-rating> 
    </span>
      <v-card-text>{{education.grade}}</v-card-text>
    <v-card-text>
     {{education.institution}}
     {{education.place}}
        </v-card-text>
</v-card>  
</v-col>
</v-row>
</div>
</template>

<script>
export default {
    data () {
        return {
         educations: [
        {id:1, degree:'2', grade: 'Tire professionnel (BAC + 2)', year: 2020, field: 'Développeur Web et Web mobile', institution: 'Afpa', place: 'Amiens'},
        {id:2, degree:'5', grade: 'Master 2 (BAC +5)', year: 2011, field: 'Stratégie d’entreprise et économie industrielle', institution: 'Panthéon-Assas ', place: 'Paris'},
        {id:3, degree:'5', grade: 'Master 2 (BAC +5)', year: 2010, field: 'Economie industrielle et veille stratégique', institution: 'Montesquieu-Bordeaux 4 ', place: 'Bordeaux'}
        ]
        }
}}
</script>
<style></style>