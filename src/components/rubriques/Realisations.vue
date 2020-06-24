<template>
<div>
<slot></slot>
    <v-container class="pa-4 text-center">
        <h1 class="py-5 font-weight-bold purple--text text-uppercase">Réalisations</h1>
        <v-row class="fill-height" align="center" justify="center">
            <template v-for="realisation in realisations">
                <v-col :key="realisation.id" cols="12" md="4">
                    <v-hover v-slot:default="{ hover }">
                    <v-card
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover } "
                    id="realisation"
                    >
                    <v-img
                        :src="require(`@/assets/${realisation.image}.png`)" height="250px" width="auto" :alt="`${realisation.theme}`"
                    >
                      <v-row class="fill-height flex-column" align="center" justify="center">
                            <v-btn
                                :class="{ 'show-btns': hover }"
                                color="transparent"
                                icon>
                                    <v-icon
                                    :class="{ 'show-btns': hover }"
                                    x-large
                                    dark
                                    color="purple">
                                        mdi-eye
                                    </v-icon>
                            </v-btn>
                        </v-row>
                    </v-img>
                    <v-row
                            class="fill-height flex-column"
                            justify="space-between">
                            <p class="mt-4 subheading text-center">{{ realisation.titre }}</p>

                            <div>
                            <p class="ma-0 body-1 font-weight-bold font-italic text-center">
                                Thème : {{ realisation.theme }}
                            </p>
                            </div>
                            
                        </v-row>
                           
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
            {id:1, titre: 'Site internet', theme: 'Jardinage', text: 'Site avec fonctionnalités: menu, espaceutilisateur, catalogue produit, formulaire de contact', site: 'dev.amorce.org/dfadika/jarditou', image: "jarditou"},
            {id:2, titre: 'Site WordPress', theme: 'Youpi', text: 'Installationet configuration d\'un site e-commerce avec section blog. Création d\'un thème et d\'un plugin', site: 'dev.amorce.org/dfadika/wordpress', image: "wordpress"},
            {id:3, titre: 'Application web', theme: 'Cinéma', text: 'Création d\'une application de recherche de films avec l\'API "TheMovieDB"', site: 'dev.amorce.org/dfadika/wordpress', image: "cinema"} 
         ],
         expand: false,
        expand2: false,
        }
    }
}
</script>
<style>

#realisation {
  transition: opacity .4s ease-in-out;
}

#realisation:not(.on-hover) {
  opacity: 0.6;
 }
 .show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>