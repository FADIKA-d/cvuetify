<template>
<div>
<slot></slot>
<h1 class="py-5">Formations</h1>

        
</div>
</template>

<script>
export default {
    data () {
        return {
         educations: [
        {id:1, degree: 'Tire professionnel (BAC + 2)', year: 2020, field: 'Développeur Web et Web mobile', institution: 'Afpa', location: 'Amiens'},
        {id:2, degree: 'Master 2 (BAC +5)', year: 2011, field: 'Stratégie d’entreprise et économie industrielle', institution: 'Panthéon-Assas ', location: 'Paris'},
        {id:3, degree: 'Master 2 (BAC +5)', year: 2010, field: 'Economie industrielle et veille stratégique', institution: 'Montesquieu-Bordeaux 4 ', location: 'Bordeaux'}
        ]
        }
    }
}
</script>
<style></style>