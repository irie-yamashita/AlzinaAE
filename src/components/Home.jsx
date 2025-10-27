
import Teams from './Teams'
import Hero from './Hero'
import Stats from './Stats'
import LastResults from './LastResults';
import LastNews from './LastNews';


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