<template>
<div>
<slot></slot>
<v-container class="pa-3 text-center">

<h1 class="pa-1 font-weight-bold text-uppercase titre__rubrique">Formations</h1>

<v-row class="fill-height fill-width" justify="space-between">
 <template v-for="education in educations">
<v-col :key="education.id"
      :degree="education.degree"
      :year="education.year"
      :grade="education.grade"
      :institution="education.institution"
      :place="education.place"
      cols="12"
      md="4"
      lg="4"
     
      :class="formationClass"
     >
<v-card width="100%">
      <v-card-title class="font-weight-bold align-justify card__rubrique ma-0 " style="word-break:normal">{{education.field}}</v-card-title> 
      <v-card-text>
          <v-row
            class="fill-height flex-inline formation__row"
            justify="space-between">
            <p class="mt-0 ml-0"> Diplôme : </p>
            <div>
            <p class="ma-0">
                {{education.grade}}
            </p>
            </div>         
         </v-row>
          
          <v-row
            class="fill-height flex-inline formation__row"
            justify="space-between">
            <p class="mt-0 ml-0 subheading "> Niveau : </p>
            <div>
            <p class="ma-0">
                <v-rating
            rating="full-icon"
            :length="education.degree"
            readonly
            background-color="#BB334F"
            size="30">
            </v-rating> 
            </p>
            </div>    
         </v-row>
         <v-row
            class="fill-height flex-inline formation__row"
            justify="space-between">
            <p class="ma-0"> Lieu : </p>
            <div>
            <p class="ma-0 ">
                {{education.institution}} ({{education.place}})
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
        {id:3, degree:'5', grade: 'Master 2 (BAC +5)', year: 2010, field: 'Economie industrielle et veille stratégique', institution: 'Montesquieu-Bordeaux 4', place: 'Bordeaux'}
        ],
        navHeight: "50"
        }
},
computed: {
    formationClass() {
        switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'd-block'
        case 'sm': return 'd-block'
        case 'md': return 'd-flex'
        case 'lg': return 'd-flex flex-grow-2'
        case 'xl': return 'd-flex'
        default: return 'd-flex'
      }
    }
},
// formationSize(){
//         switch (this.$vuetify.breakpoint.name) {
//         case 'xs': return 'line-height:0.9rem; font-size:1rem;'
//         case 'sm': return 'line-height:1.1rem; font-size:1.1rem;'
//         case 'md': return 'line-height:1.5rem; font-size:1.5rem;'
//         case 'lg': return 'line-height:0.5rem; font-size:1rem;'
//         case 'xl': return 'line-height:1rem; font-size:1rem;'
//         default: return 'line-height:1.1rem; font-size:1.1rem;'
//       }
// }
}
</script>
<style>
.formation__row {
    font-size: 0.9rem;
}
.v-rating .v-icon {
padding: 0rem;
}
</style>
