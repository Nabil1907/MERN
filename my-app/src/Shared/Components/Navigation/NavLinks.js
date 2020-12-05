import React from 'react' ; 
import {NavLink} from 'react-router-dom'
import './NavLinks.css'; 

const NavLinks = props =>{
    return (
    <div class="header-right">
            <NavLink class="nav-link" to='/'>
                Home
            </NavLink>
            <NavLink class="nav-link" to='/allUser'>
                All Users
            </NavLink>
            <NavLink class="nav-link" to='/allPlaces'>
                All Places
            </NavLink>
            <NavLink class="nav-link" to='/addPlace'>
                NewPlace
            </NavLink>
    
    </div>
    );
};
export default NavLinks ; 