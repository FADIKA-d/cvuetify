<template>

<div>
<slot></slot>
<v-btn @click.prevent="prevent">Précédent<v-icon>mdi-chevron-triple-left</v-icon></v-btn>
<v-btn @click.prevent="prevent">Précédent<v-icon>mdi-arrow-left-drop-circle</v-icon></v-btn>
<v-btn @click.prevent="prevent">Précédent<v-icon>mdi-arrow-left-drop-circle-outline</v-icon></v-btn>
<v-btn @click.prevent="next">Suivant<v-icon>mdi-chevron-triple-right </v-icon> </v-btn>
<v-btn @click.prevent="next">Suivant<v-icon>mdi-arrow-right-drop-circle</v-icon> </v-btn>
<v-btn @click.prevent="next">Suivant<v-icon>mdi-arrow-right-drop-circle-outline</v-icon> </v-btn>

<!-- GMAIL <v-icon>mdi-gmail</v-icon> -->
<!-- VALISE <v-icon> mdi-bag-checked mdi-briefcase-variant-outline</v-icon> -->
<!-- REACT <v-icon>mdi-react </v-icon> -->
<!-- HTML <v-icon> mdi-language-html5</v-icon> -->
 <!-- JS <v-icon> mdi-language-javascript</v-icon> -->
<!-- JAVA <v-icon>mdi-language-java </v-icon> -->
<!-- PHP <v-icon>mdi-language-php</v-icon> -->
 <!-- CSS3 <v-icon> mdi-language-css3</v-icon> -->
 <!-- VUETIFY <v-icon> mdi-vuetify </v-icon> -->
 <!-- VUEJS <v-icon> mdi-vuejs </v-icon> -->
 <!-- WORDPRESS <v-icon> mdi-wordpress</v-icon> -->
 <!-- bootstrap <v-icon> mdi-bootstrap </v-icon> -->
 <!-- JQUERY <v-icon> mdi-jquery </v-icon> -->
 <!-- GITHUB <v-icon>mdi-github</v-icon> -->
 <!-- TELEPHONE <v-icon> mdi-cellphone-android</v-icon> -->
 <!-- TRELLO <v-icon>mdi-trello </v-icon> -->
 <!-- LOCALISATION <v-icon>mdi-crosshairs-gps mdi-google-maps mdi-map-marker-radius-outline</v-icon> -->
 <!-- VEILLE <v-icon> mdi-eye-check-outline</v-icon> -->
 <!-- ANGULAR <v-icon> mdi-angular</v-icon> -->
 <!-- SYMPHONY <v-icon> mdi-symfony</v-icon> -->
 <!-- PYTHON <v-icon> mdi-language-python</v-icon> -->
 <!-- IDE <v-icon> mdi-microsoft-visual-studio-code</v-icon> -->
 <!-- WEBPACK <v-icon> mdi-webpack</v-icon> -->
 <!-- LANGUE <v-icon>mdi-message-processing-outline</v-icon> -->
 <!-- REALISATIONS <v-icon> mdi-head-check-outline</v-icon> -->
 <!-- FORMATION <v-icon> mdi-school</v-icon> -->

<div class="carousel__pagination">
    <button v-for="n in slidesCount" :key="n.i" @click="goto(n-1)" :class="{active: n-1 == index}"></button>
</div>

</div>
</template>

<script>
export default {
    data () {
        return {
            index: 0,
            slides: [], 
            direction: 'right'
        }
    },
    computed: {
        slidesCount() { 
            return this.slides.length 
        }
    },
    methods: {
        next () {
            this.index ++
            this.direction = 'right'
             if (this.index >= this.slidesCount) {
                 this.index = 0
             }
        },
        prevent () {
            this.index --
            this.direction= 'left'
             if (this.index < 0) {
                 this.index = this.slidesCount - 1
             }
        }, 
        goto (index) {
            this.direction = index > this.index ? 'right' : 'left'
            this.index = index
        }
    }, 
    mounted() {
        this.slides = this.$children
    },
}
</script>
<style>
.carousel {
    position: relative;
}
.carousel__pagination {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
}
.carousel__pagination button {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #000;
    opacity: 0.8;
    border-radius: 10px;
    margin:7px;
}
.carousel__pagination button.active {
background-color: #fff;
}
</style>