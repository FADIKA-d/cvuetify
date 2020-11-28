// import HelloWorld from './components/HelloWorld'
// import Contact from './components/Contact'
// import CvNav from './components/nav/CvNav'
// import CvFooter from './components/footer/CvFooter'
// import Rubriques from './components/rubriques/Rubriques'
// import Experiences from './components/rubriques/Experiences'
// import Formations from './components/rubriques/Formations'
// import Competences from './components/rubriques/Competences'
// import Realisations from './components/rubriques/Realisations'
// import Langues from './components/rubriques/Langues'
// import Rubriques from './components/rubriques/Rubriques'
// import Parallaxx from './components/Parallaxx'
// import Ordinateur from './components/Ordinateur'
// import Afficher from './components/Afficher'
// import Carousel from './components/carousel/Carousel';
// import CarouselSlide from './components/carousel/CarouselSlide';

export default  [
    {
        path: '/', 
        redirect: '/cv',
        // components: {
        //      default: Carousel,

        //     //  rubriques: Rubriques,
        // }, 
        component: () => import("./components/Ordinateur"),
        // name: 'accueil',  
        // },
        children: [
        {
            path:'/cv',
            component: () => import(/*webpackChunkName:"carousel" */"./components/carousel/Carousel"),
          
            //     components: {
            //         rubriques: Rubriques,
            // //         formations: Formations,
            // //         experiences: Experiences,
            // //         competences: Competences,
            // //         realisations: Realisations,
            // //         langues: Langues
            //     },
            name: 'cv',
            
        },
        // children: [
        {
            path:'/rubriques',
            name: 'cv.rubriques',
            component: () => import("./components/rubriques/Rubriques"),
            // component: [
            // Rubriques( () => import("./components/rubriques/Rubriques")) ,
            // Formations( () => import("./components/rubriques/Formations")), 
            // ]
            // components: {
                // 'Rubriques': () => import("./components/rubriques/Rubriques"),
            //   import("./components/rubriques/Rubriques")
            //   'formations': () => import(
                  /*webpackChunkName:"formation" */
                  /*webpackPreload: true */
                  /*webpackPrefetch: true */
                //   '@/components/rubriques/Formations')
            //   Experiences: () => import("@/components/rubriques/Experiences"),
            //   Competences: () => import("./components/rubriques/Competences"),
            //   Realisations: () => import("./components/rubriques/Realisations"),
            //   Langues: () => import("./components/rubriques/Langues"),
            // }, 
            // components: () => { 
            //     import("./components/rubriques/Rubriques");
            //     import("./components/rubriques/Formations");
            //     import("./components/rubriques/Experiences");
                // }, 
                // props: {
                //     nom: 'john'
                // },
                // components: {
                //     // navigation: CvNav,
                //     // afficher: Afficher,
                //     // carousel: Carousel,
                //     // carouselSlide: CarouselSlide,
                //     rubriques: Rubriques,
                //     formations: Formations,
                //     experiences: Experiences,
                //     competences: Competences,
                //     realisations: Realisations,
                //     langues: Langues,
                //     // footer: CvFooter
                // },
                
                
            },
                    // children: [
            {
                path: '/formations',  
                // components: {
                //     // navigation: CvNav,
                //     formations: Formations,
                //     // footer: CvFooter
                // }, 
                component: () => import("./components/rubriques/Formations"),
                name: 'cv.formations'
            },
            {
                path: '/cv/experiences',  
                // components: {
                //     // navigation: CvNav,
                //     experiences: Experiences,
                //     // footer: CvFooter
                // }, 
                component: () => import("./components/rubriques/Experiences"),
                name: 'cv.expériences'
            },
            {
                path: '/cv/competences', 
                // components: {
                // // navigation: CvNav,   
                // competences: Competences,
                // // footer: CvFooter
                // }, 
                component: () => import("./components/rubriques/Competences"),
                name: 'cv.compétences'
            },
            {
                path: '/cv/realisations',  
                // components: {
                //     // navigation: CvNav, 
                //     realisations: Realisations,
                //     // footer: CvFooter
                // }, 
                component: () => import("./components/rubriques/Realisations"),
                name: 'cv.réalisations'
            },
            {
                path: '/cv/langues',  
                // components: {
                //     // navigation: CvNav,
                //     langues: Langues,
                //     // footer: CvFooter
                // }, 
                component: () => import("./components/rubriques/Langues"),
                name: 'cv.langues'
            },
    //     {
    //         path:'rubriques',
    //         components: {
    //             formations: Formations,
    //             experiences: Experiences,
    //             competences: Competences,
    //             realisations: Realisations,
    //             langues: Langues
    //         },
    //         name: 'cv.rubriques'
    //     },
    //     {
    //         path:'carousel', 
    //         components: {
    //             carousel: Carousel,
    //             carouselSlide: CarouselSlide,
    //         },
    //         name: 'cv.carousel'
    //     }
    
    // ],
    // },
    ]
    },
    // {
    //     path: '/ess',
        
    // },
            

    // {
    // path: '/cv', 
    //     // components: {
    //         // navigation: CvNav,
    //         // main: Ordinateur, 
    //         // carousel: Carousel,
    //         // footer: CvFooter
    //     // }, 
    //     // props: {showCarousel: true,
    //     //     showRubriques: false },
    //     // beforeEnter: (route, next) => {
    //     //     if(route.name == 'cv'){
    //     //             next({ path:'/cv'})
    //     //           }
    //     // },
    //     name: 'cv', 
    //     params:{ showCarousel: true, picture: 'ordi' },
    //     children: [
    //     {
    //         path:'/',
    //         components: {
    //             // main: Ordinateur,
    //             carousel: Carousel,
    //         },
    //         // props:{ showCarousel: true, picture: 'ordi', showRubriques: false, },
    //     },
    //     {
    //         path:'rubriques',
    //         components: {
    //             // navigation: CvNav,
    //             // afficher: Afficher,
    //             // carousel: Carousel,
    //             // carouselSlide: CarouselSlide,
    //             rubriques: Rubriques,
    //             formations: Formations,
    //             experiences: Experiences,
    //             competences: Competences,
    //             realisations: Realisations,
    //             langues: Langues,
    //             // footer: CvFooter
    //         },
    //         name: 'cv.rubriques'
    //     },
    //     {
    //         path: 'formations',  
    //         components: {
    //             // navigation: CvNav,
    //             formations: Formations,
    //             // footer: CvFooter
    //         }, 
    //         name: 'cv.formations'
    //     },
    //     {
    //         path: 'experiences',  
    //         components: {
    //             // navigation: CvNav,
    //             experiences: Experiences,
    //             // footer: CvFooter
    //         }, 
    //         name: 'cv.expériences'
    //     },
    //     {
    //         path: 'competences', 
    //         components: {
    //         // navigation: CvNav,   
    //         competences: Competences,
    //         // footer: CvFooter
    //         }, 
    //         name: 'cv.compétences'},
        
    //     {
    //         path: 'realisations',  
    //         components: {
    //             // navigation: CvNav, 
    //             realisations: Realisations,
    //             // footer: CvFooter
    //         }, 
    //         name: 'cv.réalisations'
    //     },
    //     {
    //         path: 'langues',  
    //         components: {
    //             navigation: CvNav,
    //             langues: Langues,
    //             footer: CvFooter
    //         }, 
    //         name: 'cv.langues'
    //     },
            
        // {path: '/interets',  components: {
        //     navigation: CvNav,
        //     Interets: interets,
        //     footer: CvFooter}, name: 'rubrique_interets'},
        // {
        //     path:'carousel', 
        //     components: {
        //         navigation: CvNav,
        //         carousel: Carousel,
        //         carouselSlide: CarouselSlide,
        //         footer: CvFooter
        //     },
        //     name: 'cv.carousel'
        // }
    // ]
    // },
    
    // {path: '/formation',  components: {navigation: CvNav,
    //     formations: Formations,
    //     experiences: Experiences,
    //     competences: Competences,
    //     realisations: Realisations,
    //     langues: Langues,
    //     footer: CvFooter}, name: 'formation'},
        
    // // {path: '/',  
    // // components: {navigation: CvNav,
    // //     formations: Formations,
    // //     experiences: Experiences,
    // //     competences: Competences,
    // //     realisations: Realisations,
    // //     langues: Langues,
    // //     footer: CvFooter},
    // //     name: 'sous',

    // //     children: [

    // //     {path: 'formations',  components: {formations: Formations}, name: 'sous.formations'},
            
    // //     {path: 'experiences',  components: {experiences: Experiences}, name: 'sous.experiences'},
                        
    // //     {path: 'competences',  components: {competences: Competences}, name: 'sous.competences'},

    // //     {path: 'realisations',  component: {realisations: Realisations}, name: 'sous.realisations'},

    // //     {path: 'langues',  component:  Langues, name: 'sous.langues'},
            
    // //     // {path: 'interets',  components: {Interets: interets}, name: 'sous_rubrique.interets'}           
        
    // //     ]
    // // },
            
    // {path: '/formations',  components: {navigation: CvNav,
    //             formations: Formations,
    //             footer: CvFooter}, name: 'formations'},
                
    // {path: '/experiences',  components: {
    //     navigation: CvNav,
    //     experiences: Experiences,
    //     footer: CvFooter}, name: 'expériences'},
                    
    // {path: '/competences',  components: {
    //     navigation: CvNav,   
    //     competences: Competences,
    //     footer: CvFooter}, name: 'compétences'},
    
    //     {path: '/realisations',  components: {
    //     navigation: CvNav, realisations: Realisations,
    //     footer: CvFooter}, 
    //     name: 'réalisations'},

    // {path: '/langues',  components: {
    //     navigation: CvNav,
    //     langues: Langues,
    //     footer: CvFooter}, name: 'langues'},
        
    // {path: '/interets',  components: {
    //     navigation: CvNav,
    //     Interets: interets,
    //     footer: CvFooter}, name: 'rubrique_interets'},

    // {path: '/rubrique/:id',  components: {
    //     // default: HelloWorld,
    //     navigation: CvNav,
    //     // carousel: Carousel,
    //     // carouselSlide: CarouselSlide,
    //     formations: Formations,
    //     experiences: Experiences,
    //     competences: Competences,
    //     realisations: Realisations,
    //     langues: Langues,
    //     footer: CvFooter
    // },  
    // name: 'rubrique'},

    // {path: '/contact', component: Contact},  
    // {path: '/formation', component: Formations, name:'bottom'},  
     
    // {path: '*', redirect: '/cv'}
    
]
