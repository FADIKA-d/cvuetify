<template>

<div>
<slot></slot>
<v-btn @click.prevent="prevent">Précédent</v-btn>
<v-btn @click.prevent="next">Suivant</v-btn>
</div>
</template>

<script>
export default {
    data () {
        console.log(this.$children)
        return {
            index: 0,
            slides: []
        }
    },
    mounted() {
        console.log(this.$children)
        console.log(this.index)
        this.slides = this.$children
        this.slides.forEach((slide, i) => {
            slide.index = i
        })
    },
    computed: {
        slidesCount() { 
            return this.slides.length 
        }
    },
    methods: {
        next () {
            this.index ++
             if (this.index >= this.slidesCount) {
                 this.index = 0
             }
        },
        prevent () {
            this.index --
             if (this.index < 0) {
                 this.index = this.slidesCount -1
             }
        }
    }
}
</script>
<style>
.carousel {
    position: relative;
}
</style>