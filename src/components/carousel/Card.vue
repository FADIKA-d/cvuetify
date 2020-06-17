<template>
<div>
    <slot></slot>
    <v-card style="position:absolute; left:0; right:0; text-align:center;" class="">
      <v-card-title><v-icon>mdi-account-details</v-icon>
           {{titre}}</v-card-title>
      <!-- <v-card-text></v-card-text>
      <v-card-action></v-card-action> -->
    </v-card> 
</div>   
</template>
<script>
    export default {
    data () {
        return {
            titre: Expérience
        }
    }
    }
</script>