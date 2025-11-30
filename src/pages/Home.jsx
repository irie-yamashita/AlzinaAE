
import TeamsList from '../components/TeamsList'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import LastResults from '../components/LastResults';
import LastNews from '../components/LastNews';


function Home() {
       return (
              <>
                     <Hero />
                     <TeamsList></TeamsList>
                     <Stats></Stats>
                     <LastResults></LastResults>
                     <LastNews></LastNews>
              </>

       );
}


export default Home