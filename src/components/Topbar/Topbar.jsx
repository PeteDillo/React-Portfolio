import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"
export default function topbar() {
    return (
        <div className="topbar">
            <div className='wrapper'>
                <div className="left">
                    <a href="#intro"className='logo'>pedro.</a>
                    <div className="itemContainer">
                    <Person className="icon"/>
                    <span>
                        212-316-5584
                    </span>
                    </div>
                    <Mail className="icon" />
                    <span>
                        pedelgadillo@gmail.com
                    </span>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}
