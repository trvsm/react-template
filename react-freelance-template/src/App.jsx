import { useState } from 'react'
import './App.scss'

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';


function App() {
  const [count, setCount] = useState(0)
  const patron ={
    site_title: 'Fab title',
    tag_line: 'a great website',
    link_one: 'home',
    link_two: 'about',
    link_three: 'contact',
    link_four: 'blog'
  }


  return (
 <>
 <Nav props={patron}/>
 <Home tag_line={patron.tag_line}/>
 <Footer title={patron.site_title}/>
 </>
  )
}

export default App
