import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import { Link }  from "react-router-dom";
import './Header.css';

function Header() {
    return (
       
        <div className='header'>
            <Link to = "/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div className = 'header_logo'>
                  Meeting Scheduling
            </div>
            </Link>
            
            <Link to= "/chat">
                <div className= "header__chat">
                    <ChatIcon />  
                </div>       
             </Link>
            
        </div>
    );
}

export default Header
