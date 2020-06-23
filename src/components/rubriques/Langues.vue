<template>
<div>
<slot></slot>

<h1 class="py-5 font-weight-bold purple--text text-uppercase">Langues</h1>
<v-row align="center" justify="space-around">
<v-progress-circular
v-for="language in languages"
    :key="language.id"
    :rotate="55"
    :size="200"
    :width="30"
    :src="language.src"
    :value="language.level"
    color="teal lighten-3"
    
    
>

<img :src="require(`@/assets/${language.src}.png`)" height="150px" :alt="`${language.language}`" >

</v-progress-circular>
</v-row>    
</div>
</template>

<script>
export default {
    data () {
        return {
         languages: [
        {id:1, language: 'Français', level: 100, src: "france"},
        {id:2, language: 'Anglais', level: 60, src: "united_kingdom"},
        {id:3, language: 'Espagnol', level: 30, src: "spain"}
        ], 
        interval: {},
        value: 0
        }
    }, 
    mounted () {
        this.interval = setInterval(()=> {
            if (this.value === 100){
            return (this.value = 0)
            }
            this.value += 10
        }, 1000)
    }
}
</script>
<style></style>