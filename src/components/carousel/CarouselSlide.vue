<template>
<div class="carousel">
<transition :name="transition">
<div v-show="visible">
    <div class="card__item fill-height">
         
        
    <v-card-title class="slide__title">
                <v-icon x-large color="#F48C8C"> {{icon}} </v-icon>
            </v-card-title>
            <v-card-subtitle class="text-uppercase "> {{titre}}</v-card-subtitle>
            <v-list>
                <v-list-item-title class="">{{last.info}}</v-list-item-title>
            </v-list>
            <v-card width="600" class="slide__card">
            <v-img
      src="https://bad.src/not/valid"
      lazy-src="https://picsum.photos/id/11/100/60"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="600"
      max-height="150"
    >
            <v-card-action > <router-link :to="{name: `${titre}`}" class="white--text"> Voir les toutes les {{titre}} </router-link> </v-card-action>
             </v-img>
        </v-card>
             
    </div>
</div>
</transition>
</div>
</template>

<script>
export default {
    props: {
        index: {type: Number, default: 0},
        titre: {type: String, default: "titre"},
        icon: {type: String, default: "icon"},
        last: {type: String, default: "last"},
        cards: [],
    },
    data () {
        return {
      
        }
    },
    computed: {
        transition () {
            return 'slide-' + this.$parent.direction
        },
        visible () {
            return this.index === this.$parent.index
        }
    }
}
</script>
<style>


.slide__title {
    justify-content: center;
}
.card__item {
    text-align: center;
}
.slide-right-enter-active { 
     animation : slideRightIn .5s; 
     
    }
.slide-right-leave-active { 
    animation: slideRightOut .5s; 
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;  
}
@keyframes slideRightIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); } 
}
@keyframes slideRightOut {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); } 
}
.slide-left-enter-active { 
    animation : slideLeftIn .5s; 
    
    }
.slide-left-leave-active { 
    animation: slideLeftOut 5s; 
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
   width: 100%;
  
}
@keyframes slideLeftIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); } 
}
@keyframes slideLeftOut {
    from { transform: translateX(0); }
    to { transform: translateX(100%); } 
}
</style>