<template>
<div>
<slot></slot>
<h1 class="py-5">Compétences</h1>
<div
v-for="skill in skills"
    :key="skill.id">
    <v-icon>{{skill.icon}}</v-icon>
<v-progress-linear
    v-model="skill.level"
    :active="show"
    buffer-value="bufferValue"
    height="20"
    color="purple"
    background-color="teal lighten-3"
    :indeterminate="query"
    :query="true"
>
    
</v-progress-linear>
</div>
</div>
</template>

<script>
export default {
    data () {
        return {
         skills : [
        {id:1, name: 'HTML5', icon: 'mdi-language-html5' , category: 'Front-end', level: 40},
        {id:2, name: 'CSS3', icon: 'mdi-language-css3' , category: 'Front-end', level: 40},
        {id:3, name: 'Javascript', icon: 'mdi-language-javascript' , category: 'Front-end', level: 30},
        {id:4, name: 'Vue.js', icon: 'mdi-vuejs' , category: 'Front-end', level: 30},
        {id:5, name: 'Bootstrap', icon: 'mdi-bootstrap' , category: 'Front-end', level: 40},
        {id:6, name: 'JQuery', icon: 'mdi-jquery' , category: 'Front-end', level: 40},
        {id:7, name: 'PHP', icon: 'mdi-language-php' , category: 'Back-end', level: 40},
        // {id:8, name: 'MySQL', icon: '' , category: 'Back-end', level: 40},
        {id:9, name: 'Wordpress', icon: 'mdi-wordpress' , category: 'Back-end', level: 30},
        // {id:10, name: 'CodeIgniter', icon: '' , category: 'Back-end', level: 3},
        // {id:11, name: 'Digimind', icon: '' , category: 'Veille', level: 2},
        // {id:12, name: 'KBcrawl', icon: '', category: 'Veille', level: 2},
        // {id:13, name: 'Photoshop', icon: ''  , category: 'Design', level: 2},
       ], 
       value: 10,
        bufferValue: 20,
        interval: 0,
        }
    },
     watch: {
      value (val) {
        if (val < 100) return

        this.value = 0
        this.bufferValue = 10
        this.startBuffer()
      },
    },

    mounted () {
      this.startBuffer()
    },

    beforeDestroy () {
      clearInterval(this.interval)
    },

    methods: {
      startBuffer () {
        clearInterval(this.interval)

        this.interval = setInterval(() => {
          this.value += Math.random() * (15 - 5) + 5
          this.bufferValue += Math.random() * (15 - 5) + 6
        }, 2000)
      },
    },
 
}
</script>
<style></style>