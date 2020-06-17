<template>

<div>
<slot></slot>
<v-btn @click.prevent="prevent">Précédent</v-btn>
<v-btn @click.prevent="next">Suivant</v-btn>
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