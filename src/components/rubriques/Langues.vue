<template>
    <div>
        <slot></slot>
        <v-container class="pa-4 text-center">
            <h1 class="py-5 font-weight-bold purple--text text-uppercase">Langues</h1>
              <v-row class="fill-height" justify="space-between">  
            <template v-for="language in languages">
                <v-col :key="language.id" cols="3" class="d-flex " align="center" justify="space-around">
                    <v-progress-circular
                        :rotate="-90"
                        :size="200"
                        :width="30"
                        :src="language.src"
                        :value="language.level"
                        color="teal lighten-3"
                    >
                        <img :src="require(`@/assets/${language.src}.png`)" height="150px" :alt="`${language.language}`" >
                    </v-progress-circular>
                    </v-col>
            </template>  
                </v-row>
        </v-container>  
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