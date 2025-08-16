import { LOGO_IMG } from "../utils/constants"

const Header = () =>{
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
                </ul>
            </div>
        </div>
    )
}

export default Header