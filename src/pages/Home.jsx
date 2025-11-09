
import Teams from '../components/Teams'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import LastResults from '../components/LastResults';
import LastNews from '../components/LastNews';


function Home() {
       return (
              <>
                     <Hero />
                     <Teams></Teams>
                     <Stats></Stats>
                     <LastResults></LastResults>
                     <LastNews></LastNews>
              </>

       );
}


export default Home