<template>
<div>
<slot></slot>
    <v-container class="pa-4 text-center">
        <h1 class="py-5">Réalisations</h1>
        <v-row class="fill-height" align="center" justify="center">
            <template v-for="realisation in realisations">
                <v-col :key="realisation.id" cols="12" md="4">
                    <v-hover v-slot:default="{ hover }">
                    <v-card
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                    color="#26c6da">
                    <!-- <v-img
                        :src="'https://cdn.vuetifyjs.com/images/cards/plane.jpg'"
                        height="225px"
                    > -->
                        <v-card-title class="title white--text">
                        <v-row
                            class="fill-height flex-column"
                            justify="space-between">
                            <p class="mt-4 subheading text-left">{{ realisation.titre }}</p>

                            <div>
                            <p class="ma-0 body-1 font-weight-bold font-italic text-left">
                                Thème : {{ realisation.theme }}
                            </p>
                            </div>
                            <div class="align-self-end">
                            <v-btn
                                :class="{ 'show-btns': hover }"
                                color="transparent"
                                @click="expand = !expand"
                                icon>
                                <v-icon
                                :class="{ 'show-btns': hover }"
                                color="transparent">
                                mdi-eye
                                </v-icon>
                            </v-btn>
                            </div>
                        </v-row>
                        </v-card-title>
                    <!-- </v-img> -->
                            <v-expand-transition >
                            <v-card
                            v-show="expand"
                            color="white"
                            class="pa-2"
                            >
                                <v-card-text class="purple--text pa-0 ma-0" >
                                 {{ realisation.theme }}</v-card-text>
                                 <v-card-actions>{{ realisation.site }}</v-card-actions>
                            </v-card>
                                </v-expand-transition>
                    </v-card>
                </v-hover>
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
         transparent:'rgba(225, 255, 255, 0)',
         realisations: [
            {id:1, titre: 'Site internet', theme: 'Jardinage', text: 'Site avec fonctionnalités: menu, espaceutilisateur, catalogue produit, formulaire de contact', site: 'dev.amorce.org/dfadika/jarditou'},
            {id:2, titre: 'Site WordPress', theme: 'Youpi', text: 'Installationet configuration d\'un site e-commerce avec section blog. Création d\'un thème et d\'un plugin', site: 'dev.amorce.org/dfadika/wordpress'},
            {id:3, titre: 'Application web', theme: 'Cinéma', text: 'Création d\'une application de recherche de films avec l\'API "TheMovieDB"', site: 'dev.amorce.org/dfadika/wordpress'} 
         ],
         expand: false,
        expand2: false,
        }
    }
}
</script>
<style></style>