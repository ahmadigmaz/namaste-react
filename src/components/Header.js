import { useState, useContext } from "react"
import { LOGO_IMG } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () =>{
const data = useContext(userContext);
const onlineStatus = useOnlineStatus();
const [btnName, setBtnName] = useState(true);
const btnNamehandler = () => {
    btnName?setBtnName(false):setBtnName(true);
}
const cartItems = useSelector((store)=>store.cart.items)
return(
    <div className="flex justify-between items-center bg-pink-50 shadow-lg px-6 py-3">
        <div className="w-48">
            <img className="rounded-4xl" alt = "logo-image" src={LOGO_IMG}/>
        </div>
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-2">
                <button className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600 transition"
                 onClick={btnNamehandler}>{btnName? "Logout": "Login"}</button>
                {btnName && <h1 className="text-gray-700 font-bold">{data.logedInUser}</h1>}
            </div>
            <div className="flex space-x-6 text-gray-800 font-semibold">
                <ul className="flex m-4 p-4">
                <li className="px-4">{onlineStatus?"🟢":"🔴"}</li>
                <li className="px-4"><Link to={"/"}>Home</Link></li>
                <li className="px-4"><Link to={"/about"}>About</Link></li>
                <li className="px-4"><Link to={"/contact"}>Contact</Link></li>
                <li className="px-4"><Link to={"/cart"}>{cartItems.length? cartItems.length:""} Cart </Link></li>
                </ul>
            </div>
        </div>
    </div>
)
}

export default Header