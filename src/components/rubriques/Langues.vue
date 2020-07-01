<template>
    <div>
        <slot></slot>
        <v-container class="pa-4 text-center">
            <h1 class="pa-1 font-weight-bold text-uppercase titre__rubrique">Langues</h1>
              <v-row class="fill-height" justify="space-between">  
            <!-- <template v-for="language in languages">
                <v-col :key="language.id" cols="3" class="d-flex " align="center" justify="space-around">
                    <v-progress-circular
                        :rotate="-90"
                        :size="200"
                        :width="30"
                        :src="language.src"
                        :value="value"
                        color="teal lighten-3"
                    >
                        <img :src="require(`@/assets/${language.src}.png`)" height="150px" :alt="`${language.language}`" >
                    </v-progress-circular>

                    </v-col>
            </template>   -->
            <template v-for="language in languagesF">
                <v-col :key="language.id" cols="3" class="d-flex " align="center" justify="space-around">
                    <v-progress-circular
                        :rotate="-90"
                        :size="200"
                        :width="30"
                        :src="language.src"
                        :value="valueF"
                        color="#BB334F"
                    >
                        <img :src="require(`@/assets/${language.src}.png`)" height="150px" :alt="`${language.language}`" >
                    </v-progress-circular>

                    </v-col>
            </template>  
            <template v-for="language in languagesU">
                <v-col :key="language.id" cols="3" class="d-flex " align="center" justify="space-around">
                    <v-progress-circular
                        :rotate="-90"
                        :size="200"
                        :width="30"
                        :src="language.src"
                        :value="valueU"
                        color="#BB334F"
                    >
                        <img :src="require(`@/assets/${language.src}.png`)" height="150px" :alt="`${language.language}`" >
                    </v-progress-circular>

                    </v-col>
            </template>  
            <template v-for="language in languagesE">
                <v-col :key="language.id" cols="3" class="d-flex " align="center" justify="space-around">
                    <v-progress-circular
                        :rotate="-90"
                        :size="200"
                        :width="30"
                        :src="language.src"
                        :value="valueE"
                        color="#BB334F"
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
        //  languages: [
        // {id:1, language: 'Français', level: 100, src: "france"},
        // {id:2, language: 'Anglais', level: 70, src: "united_kingdom"},
        // {id:3, language: 'Espagnol', level: 40, src: "spain"}
        // ], 
         languagesF: [{id:1, language: 'Français', level: 100, src: "france"}], 
         languagesU: [{id:2, language: 'Anglais', level: 70, src: "united_kingdom"}], 
         languagesE: [{id:3, language: 'Espagnol', level: 40, src: "spain"}], 
        // interval: {},
        intervalF: {},
        intervalU: {},
        intervalE: {},
        // value: 0,
        valueF: 0,
        valueU: 0,
        valueE: 0,
        }
    }, 
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
        // this.interval = setInterval(()=> {

        //     if (this.value == 100){
        //     return (this.value = 0)
        //     }
        //     this.value += 10
        // }, 1000),
        this.intervalF = setInterval(()=> {

            if (this.valueF == 100){
            return (this.valueF = 100)
            }
            this.valueF += 10
        }, 200),
        this.intervalU = setInterval(()=> {

            if (this.valueU == 70){
            return (this.valueU = 70)
            }
            this.valueU += 10
        }, 200),
        this.intervalE = setInterval(()=> {

            if (this.valueE == 40){
            return (this.valueE = 40)
            }
            this.valueE += 10
        }, 200)
    }
}
</script>
<style></style>