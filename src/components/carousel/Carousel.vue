<template>
    <div >
        <slot></slot>
        <div class="carouselSlide d-flex justify-center">
           
            <carousel-slide v-for="card in cards" :key="card.id" :index="card.id-1" :titre="card.titre" :icon="card.icon">
            <!-- <router-view name="carouselSlide"></router-view> -->
                </carousel-slide> 
           
        </div>
        <v-btn icon class="carousel__nav carousel__prev" @click.prevent="prevent" 
                color="#952175"
                dark
                absolute
                left
                fab
                >
                <v-icon x-large>mdi-chevron-left-box-outline</v-icon></v-btn>
        <v-btn class="carousel__nav carousel__next" icon @click.prevent="next"
                color="#952175"
                dark
                absolute
                right
                fab
                ><v-icon x-large>mdi-chevron-right-box-outline</v-icon> </v-btn>
        <div class="carousel__pagination">
            <button v-for="n in cardsCount" :key="n.i" @click="goto(n-1)" :class="{active: n-1 == index}"
            ></button>
        </div>
        
        <v-row class="d-flex justify-center ma-5">
          <v-btn
            relative
            dark
            fab
            color="#952175"
            >
            <router-link :to="{name: 'bottom'}" tag="button"><v-icon >mdi-chevron-double-down</v-icon></router-link>
          </v-btn>
          </v-row> 
    </div>
</template>

<script>
import CarouselSlide from '@/components/carousel/CarouselSlide';

export default {
    data () {
        return {
            index: 0, 
            direction: 'right', 
            cards: [
                {id:1, titre: 'expériences', icon: 'mdi-briefcase-variant'},
                {id:2, titre: 'formations', icon: 'mdi-school'},
                {id:3, titre: 'compétences', icon: 'mdi-cog-transfer'},
                {id:4, titre: 'réalisations', icon: 'mdi-clipboard-check-multiple'},
                {id:5, titre: 'langues', icon: 'mdi-chat-processing'},
                // {id:6, titre: 'centre d\'intérêts', icon: 'mdi-head-heart'} 
        ],                   
        }
    },
     components: {
    CarouselSlide, 
     },
    computed: {
        cardsCount() { 
            return this.cards.length 
        }
    },
    methods: {
        next () {
            this.index ++
            this.direction = 'right'
             if (this.index >= this.cardsCount) {
                 this.index = 0
             }
        },
        prevent () {
            this.index --
            this.direction= 'left'
             if (this.index < 0) {
                 this.index = this.cardsCount - 1
             }
        }, 
        goto (index) {
            this.direction = index > this.index ? 'right' : 'left'
            this.index = index
        }
    }
}
</script>
<style>
.carousel {
    position: relative;
}
.carousel__pagination {
    position: relative;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
}
.carousel__pagination button {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: teal;
    opacity: 0.8;
    border-radius: 10px;
    margin:7px;
}
.carousel__pagination button.active {
background-color: #fff;
}
</style>