import Topbar from "./Topbar/Topbar"
import Intro from './Intro/Intro'
import Portfolio from './Portfolio/Portfolio'
import Works from './Works/Works'
import Testimonials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'
import './app.scss'
import React, { useState } from 'react';
import Menu from "./Menu/Menu"


function App(){
    const [menuOpen,setMenuOpen] = useState(false)
    
    return (
        <div className='app'>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro/>
                <Portfolio/>
                <Works/>
                <Testimonials/>
                <Contact/>
            </div>
        </div>
    );
}


export default App;