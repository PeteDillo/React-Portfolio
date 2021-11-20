import Topbar from "./Topbar/Topbar"
import Intro from './Intro/Intro'
import Portfolio from './Portfolio/Portfolio'
import Works from './Works/Works'
import Testimonials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'
import './app.scss'

function App(){
    return (
        <div className='app'>
            <Topbar/>
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