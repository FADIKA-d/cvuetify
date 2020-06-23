<template>
<div>
<slot></slot>
<router-view></router-view>
<v-container class="pa-4 text-center">
<h1 class="py-5 font-weight-bold purple--text text-uppercase">Formations</h1>
<v-row class="fill-height" justify="space-between">
 <template v-for="education in educations">
<v-col :key="education.id"
      :degree="education.degree"
      :year="education.year"
      :grade="education.grade"
      :institution="education.institution"
      :place="education.place"
      class="d-flex justify-space-around "
     >
<v-card >
      <v-card-title class="font-weight-bold purple--text ma-7">"{{education.field}}"</v-card-title> 
      <v-card-text>
          <v-row
            class="fill-height flex-inline"
            justify="space-between">
            <p class="ma-1 subheading"> Diplôme : </p>
            <div>
            <p class="ma-0 body-1 font-weight-thin ">
                {{education.grade}}
            </p>
            </div>         
         </v-row>
          
          <v-row
            class="fill-height flex-inline"
            justify="space-between">
            <p class="mt-4 ml-1 subheading "> Niveau : </p>
            <div>
            <p class="ma-0 body-1 font-weight-thin  ">
                <v-rating
            rating="full-icon"
            :length="education.degree"
            readonly
            background-color="purple"
            color="purple"
            size="33">
            </v-rating> 
            </p>
            </div>    
         </v-row>
         <v-row
            class="fill-height flex-inline"
            justify="space-between">
            <p class="ma-1 subheading"> Lieu : </p>
            <div>
            <p class="ma-0 body-1 font-weight-thin ">
                {{education.institution}} - ({{education.place}})
            </p>
            </div>         
         </v-row>
</v-card-text>
</v-card>  
</v-col>
 </template>
</v-row>
</v-container>
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