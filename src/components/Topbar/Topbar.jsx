import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"
export default function topbar() {
    return (
        <div className="topbar">
            <div className='wrapper'>
                <div className="left">
                    <a href="#intro"className='logo'>
                        pedro.
                    </a>
                    <div className="itemContainer">
                    <Person className="icon"/>
                    <span>212-316-5584</span>
                    </div>
                    <div className="itemContainer">
                    <Mail className="icon" />
                    <span>
                        pete@mail.net
                    </span>
                </div>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}
