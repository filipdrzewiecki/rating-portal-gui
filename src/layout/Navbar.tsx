import React from 'react';
// @ts-ignore
import Logo from '../resources/icon/page/LOGO.PNG';
import './navbar.css';
import {NavLink} from "react-router-dom";


class Navbar extends React.Component {

    render() {

        return (
            <div className="navbar-container" >

                <div className="navbar_web_top" >
                    <div className="navbarLogo_web" >
                        <img src={Logo} alt="companyLogo" ></img>
                    </div>

                    <div className="navbar_top_search">
                        <input></input>
                    </div>

                    <div className="navbarButtons_web_top" >
                        <div className="navbarButton_web_top" > Profile </div>
                        <div className="navbarButton_web_top" > Logout </div>
                    </div>
                </div>

                <div className="navbar_web_bottom" >
                    <div className="navbarButtons_web_bottom" >
                        <NavLink className="navbarButton_web_bottom"   to={"/items"}>Item 1</NavLink>
                        <NavLink className="navbarButton_web_bottom"  to={"/v2/items"}>Item 2</NavLink>
                        <div className="navbarButton_web_bottom"  >Item 3</div>
                        <div className="navbarButton_web_bottom"  >Item 4</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Navbar;