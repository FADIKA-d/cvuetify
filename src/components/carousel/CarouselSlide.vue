<template>

<transition :name="transition">
<div v-show="visible">
<slot></slot>

    <div class="card__item ">
        <v-card width="600" class="">
            <v-card-title class="slide__card">
                <v-icon x-large> {{icon}} </v-icon>
            </v-card-title>
            <v-card-text class="text-uppercase"> {{titre}}</v-card-text>
            <v-card-text> <router-view name=""></router-view ></v-card-text>
            <v-card-action> </v-card-action>
            <router-link :to="{name: `${titre}`}"> Voir les {{titre}} </router-link>
        </v-card>
    </div>
</div>
</transition>
</template>

<script>
export default {
    props: {
        index: {type: Number, default: 0},
        icon: {type: String, default: "icon"},
        titre: {type: String, default: "titre"},
        cards: [],
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
.slide__card {
    justify-content: center;
}
.card__item {
    text-align: center;
    position: relative;
    left: 35%;
}
.slide-right-enter-active { 
     animation : slideRightIn 5s; 
     
    }
.slide-right-leave-active { 
    animation: slideRightOut 5s; 
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
    animation : slideLeftIn 5s; 
    
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