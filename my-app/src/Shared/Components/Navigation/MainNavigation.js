import React from 'react' ; 

import './MainNavigation.css';
import MainHeader from './MainHeader.js';
import NavLinks from './NavLinks';
const MainNavigation = props =>{
    return(
        <MainHeader> 
            <a href="#default" class="logo">CompanyLogo</a>
            <NavLinks/>
        </MainHeader>      
    );
}
export default MainNavigation