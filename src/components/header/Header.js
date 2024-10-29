import React from 'react'
import { Link } from 'react-router-dom';
import avatar from "../../images/user.png";
import "../../components/header/header.scss";

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <div className="logo">Movie App</div>
            </Link>
            <div className="user-image">
                <img src={avatar} alt="user-image" />
            </div>
        </div>
    )
}

export default Header