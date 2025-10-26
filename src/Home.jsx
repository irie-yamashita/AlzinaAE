
import Teams from './components/Teams'
import Hero from './components/Hero'
import Stats from './components/Stats'
import LastResults from './components/LastResults';
import LastNews from './components/LastNews';


function Home () {
       return (
              <div className='w-full'>
                     <Hero/>
                     <Teams></Teams>
                     <Stats></Stats>
                     <LastResults></LastResults>
                     <LastNews></LastNews>
              </div>
       );
}


export default Home