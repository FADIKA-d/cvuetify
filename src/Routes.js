// import HelloWorld from './components/HelloWorld'
import Contact from './components/Contact'
import CvNav from './components/nav/CvNav'
import CvFooter from './components/footer/CvFooter'
// import Rubriques from './components/rubriques/Rubriques'
import Experiences from './components/rubriques/Experiences'
import Formations from './components/rubriques/Formations'
import Competences from './components/rubriques/Competences'
import Realisations from './components/rubriques/Realisations'
import Langues from './components/rubriques/Langues'
import Carousel from './components/carousel/Carousel';
import CarouselSlide from './components/carousel/CarouselSlide';

export default  [
    {
        path: '/', 
        components: {
            // default: HelloWorld,
            navigation: CvNav,
            carousel: Carousel,
            carouselSlide: CarouselSlide,
            formations: Formations,
            experiences: Experiences,
            competences: Competences,
            realisations: Realisations,
            langues: Langues,
            footer: CvFooter
        }, 
        name: 'accueil'
    },
    {path: '/formation',  components: {navigation: CvNav,
        formations: Formations,
        experiences: Experiences,
        competences: Competences,
        realisations: Realisations,
        langues: Langues,
        footer: CvFooter}, name: 'rubrique_formation'},
        
    {path: '/',  
    components: {navigation: CvNav,
        formations: Formations,
        experiences: Experiences,
        competences: Competences,
        realisations: Realisations,
        langues: Langues,
        footer: CvFooter},
        name: 'sous',

        children: [

        {path: 'formations',  components: {formations: Formations}, name: 'sous.formations'},
            
        {path: 'experiences',  components: {experiences: Experiences}, name: 'sous.experience'},
                        
        {path: 'competences',  components: {competences: Competences}, name: 'sous.competences'},

        {path: 'realisations',  component: {realisations: Realisations}, name: 'sous.realisations'},

        {path: 'langues',  component:  Langues, name: 'sous.langues'},
            
        // {path: 'interets',  components: {Interets: interets}, name: 'sous_rubrique.interets'}           
        
        ]
    },
            
    {path: '/formations',  components: {navigation: CvNav,
                formations: Formations,
                footer: CvFooter}, name: 'formations'},
                
    {path: '/experiences',  components: {
        navigation: CvNav,
        experiences: Experiences,
        footer: CvFooter}, name: 'expériences'},
                    
    {path: '/competences',  components: {
        navigation: CvNav,   
        competences: Competences,
        footer: CvFooter}, name: 'compétences'},
    
        {path: '/realisations',  components: {
        navigation: CvNav, realisations: Realisations,
        footer: CvFooter}, 
        name: 'réalisations'},

    {path: '/langues',  components: {
        navigation: CvNav,
        langues: Langues,
        footer: CvFooter}, name: 'langues'},
        
    // {path: '/interets',  components: {
    //     navigation: CvNav,
    //     Interets: interets,
    //     footer: CvFooter}, name: 'rubrique_interets'},

    {path: '/:class',  components: {
        // default: HelloWorld,
        navigation: CvNav,
        carousel: Carousel,
        carouselSlide: CarouselSlide,
        formations: Formations,
        experiences: Experiences,
        competences: Competences,
        realisations: Realisations,
        langues: Langues,
        footer: CvFooter
    },  
    name: 'post'},

    {path: '/contact', component: Contact},  
     
    {path: '*', redirect: '/'}
    
]
