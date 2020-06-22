import Accueil from './components/Accueil'
import HelloWorld from './components/HelloWorld'
import Page1 from './components/Page1'
import Contact from './components/Contact'
import CvNav from './components/nav/CvNav'
import CvFooter from './components/footer/CvFooter'

export default  [
    {path: '/', components: {
        default: HelloWorld,
        navigation: CvNav,
        footer: CvFooter
    }},
    {path: '/Accueil', component: Accueil},    
    {path: '/page1', component: Page1},   
    {path: '/contact', component: Contact},   
    // {path: '/', component: HelloWorld},   
    {path: '*', redirect: '/'}
    
]
