import { useState } from "react"
import { LOGO_IMG } from "../utils/constants"

const Header = () =>{
    const [btnName, setBtnName] = useState(true);

    const btnNamehandler = () => {
        btnName?setBtnName(false):setBtnName(true);
    }

    return(
        <div className="header-container">
            <div className="logo">
                <img alt = "logo-image" src={LOGO_IMG}/>
            </div>
            <div className="navbar-items">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                 <button className="login-logout-btn" onClick={btnNamehandler}>{btnName? "Logout": "Login"}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header