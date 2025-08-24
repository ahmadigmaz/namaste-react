import { useState } from "react"
import { LOGO_IMG } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
const onlineStatus = useOnlineStatus();
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
            <li>{onlineStatus?"🟢":"🔴"}</li>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/cart"}>Cart</Link></li>
                <button className="login-logout-btn" onClick={btnNamehandler}>{btnName? "Logout": "Login"}</button>
            </ul>
        </div>
    </div>
)
}

export default Header