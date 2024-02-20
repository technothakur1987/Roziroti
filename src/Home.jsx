import React from 'react'
import './Home.css'
import Video from './components/home/Video'
import Remarkable from './components/home/Remarkable'
import UnforgetableVenues from './components/home/UnforgetableVenues'
import Places from './components/home/Places'
import OrangeSection from './components/home/OrangeSection'
import Parallex from './components/home/Parallex'


const Home = () => {
  return (
    <div  className='home'>
       <Video/>
<Remarkable/>
<UnforgetableVenues/> 
       <Places/>
      <OrangeSection/>
      <Parallex/>
    </div>
  )
}

export default Home
