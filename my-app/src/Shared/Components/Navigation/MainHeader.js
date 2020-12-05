import React from 'react'; 

import './MainHeader.css'; 
import MainNavigation from './MainNavigation';

const MainHeader = props =>{
    return(

        <div class="header">
          {props.children}
         </div>
    );
};

export default MainHeader ; 