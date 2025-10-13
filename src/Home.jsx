
import Teams from './components/Teams'
import Hero from './components/Hero'
import Stats from './components/Stats'


function Home () {
       return (
              <div className='w-full'>
                     <Hero/>,
                     <Teams></Teams>,
                     <Stats></Stats>     
              </div>
       );
}


export default Home