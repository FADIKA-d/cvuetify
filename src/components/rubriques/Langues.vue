<template>
    <div>
        <slot></slot>
        <v-container class="pa-4 text-center">
            <h1 class="pa-1 font-weight-bold text-uppercase titre__rubrique">Langues</h1>
              <v-row class="fill-height" :justify="justifyLangues">  
            <template v-for="language in languages">
                <v-col :key="language.id" cols="12" md="3"  class="d-flex " align="center" style="justify-content: center">
                     <v-progress-circular
                        :rotate="-90"
                        :size="circleSize"
                        :width="circleWidth"
                        :src="language.src"
                        :value="language.id==1? value1: language.id==2? value2: value3"
                        color="teal lighten-3"
                    >
                    <!-- :value="valueV[`${language.id-1}`]" -->
                        <img :src="require(`@/assets/${language.src}.png`)" :height="circleImageHeight" :alt="`${language.language}`" >
                    </v-progress-circular>
                    {{value}}
                    </v-col>
            </template>  
            <!-- <template v-for="language in languagesF">
                <v-col :key="language.id" cols="12" md="3" class="d-flex " align="center" style="justify-content: center">
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
                <v-col :key="language.id" cols="12" md="3" class="d-flex " align="center" style="justify-content: center">
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
                <v-col :key="language.id" cols="12" md="3" class="d-flex " align="center" style="justify-content: center">
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
            </template>   -->
                </v-row>
        </v-container>  
    </div>
</template>

<script>
export default {
    data () {
        return {
         languages: [
        {id:1, language: 'Français', level: 100, src: "france", value: 0},
        {id:2, language: 'Anglais', level: 70, src: "united_kingdom", value: 0},
        {id:3, language: 'Espagnol', level: 40, src: "spain", value: 0}
        ], 
        //  languagesF: [{id:1, language: 'Français', level: 100, src: "france"}], 
        //  languagesU: [{id:2, language: 'Anglais', level: 70, src: "united_kingdom"}], 
        //  languagesE: [{id:3, language: 'Espagnol', level: 40, src: "spain"}], 
        interval: {},
        intervalF: {},
        intervalU: {},
        intervalE: {},
        valueV: [0,0,0],
        value1: 0,
        value2: 0,
        value3: 0,
        circleImageHeight: "85rem",
        circleSize: 100,
        circleWidth: 10,
        }
    }, 
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
// valueF(){
//     this.intervalF = setInterval(()=> {

//             if (this.valueF == 100){
//             return (this.valueF = 100)
//             }
//             this.valueF += 10
//         }, 200)
// },
// valueU(){
//     this.intervalU = setInterval(()=> {

//             if (this.valueU == 70){
//             return (this.valueU = 70)
//             }
//             this.valueU += 10
//         }, 200)
// },
// valueE(){
//     this.intervalE = setInterval(()=> {

//             if (this.valueE == 40){
//             return (this.valueE = 40)
//             }
//             this.valueE += 10
//         }, 200)
// }
// }




        // this.intervalF = setInterval(()=> {

        //     if (this.valueV[0] == 100){
        //     return (this.valueV[0] = 100)
        //     }
        //     this.valueV[0] += 10
        // }, 200),
        // this.intervalU = setInterval(()=> {

        //     if (this.valueV[1] == 70){
        //     return (this.valueV[1] = 70)
        //     }
        //     this.valueV[1] += 10
        // }, 200),
        // this.intervalE = setInterval(()=> {

        //     if (this.valueV[2] == 40){
        //     return (this.valueV[2] = 40)
        //     }
        //     this.valueV[2] += 10
        // }, 200)


        this.intervalF = setInterval(()=> {

            if (this.value1 == 100){
            return (this.value1 = 100)
            }
            this.value1 += 10
        }, 200),
        this.intervalU = setInterval(()=> {

            if (this.value2 == 70){
            return (this.value2 = 70)
            }
            this.value2 += 10
        }, 200),
        this.intervalE = setInterval(()=> {

            if (this.value3 == 40){
            return (this.value3 = 40)
            }
            this.value3 += 10
        }, 200)
    },
    computed: {
      justifyLangues(){
        switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'center'
        case 'sm': return 'center'
        case 'md': return 'space-between'
        case 'lg': return 'space-between'
        case 'xl': return 'space-between'
        default: return 'center'
      }
    },
    }
}
</script>
<style></style>