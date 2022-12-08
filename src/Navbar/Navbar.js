import React,{useState} from "react";
import logo from "../Images/logo.png"


function Navbar(){
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
 
      const closeMenu = () => {
        setNavbarOpen(false)
      }

  
    return(
        <div className="navbar">
            <div className="navbar_start">
                <div className="navbar_left">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="navbar_center">
                <button className="burger" onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>

                    <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                        <a><li>Главная</li></a>
                        <a><li>Услуги</li></a>
                        <a><li>Наши работы</li></a>
                        <a><li>Контакты </li></a>
                      <button className="btn_call">Заказать звонок</button>

                    </ul>
                </div>
                <div className="navbar_right">
                    <button>Заказать звонок</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;