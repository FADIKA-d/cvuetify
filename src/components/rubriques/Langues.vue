<template>
<div>
<slot></slot>
<h1 class="py-5">Langues</h1>
<v-row align="center" justify="space-around">
<v-progress-circular
v-for="language in languages"
    :key="language.id"
    :rotate="-90"
    :size="200"
    :width="30"
    :src="language.src"
    :value="language.level"
    color="teal lighten-3"
>
<img :src="language.src" height="150px">
</v-progress-circular>
</v-row>    
</div>
</template>

<script>
export default {
    data () {
        return {
         languages: [
        {id:1, language: 'Français', level: 100, src: "require('@/assets/france.png')"},
        {id:2, language: 'Anglais', level: 60, src: "require('@/assets/united_kingdom.png')"},
        {id:3, language: 'Espagnol', level: 30, src: "require('@/assets/spain.png')"}
        ], 

        interval: {},
        value: 0,
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