<template>
<div>
<slot></slot>
<h1 class="py-5">Langues</h1>
<v-progress-circular
v-for="language in languages"
    :key="language.id"
    :rotate="-90"
    :size="100"
    :width="15"
    :value="language.level"
    color="red"
>
    {{language.language}}
</v-progress-circular>
        
</div>
</template>

<script>
export default {
    data () {
        return {
         languages: [
        {id:1, language: 'Français', level: 60},
        {id:2, language: 'Anglais', level: 40},
        {id:3, language: 'Espagnol', level: 20}
      ]
        }
    }
}
</script>
<style></style>