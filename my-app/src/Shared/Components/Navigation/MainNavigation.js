import React ,{useState} from 'react' ; 
import { Link } from 'react-router-dom';
import './MainNavigation.css';
import MainHeader from './MainHeader.js';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer.js';
const MainNavigation = props =>{

    const [drawerIsOpen,setdrawerIsOpen] = useState(false) ; 
    return(
        <React.Fragment>
               {drawerIsOpen ? (<SideDrawer>
                  <nav className="main-navigation__header-nav">
                         <NavLinks/>
                     </nav>
                </SideDrawer>) : null}
        <MainHeader> 
        
                         <nav className="main-navigation__header-nav">
                             <NavLinks/>
                         </nav>

        </MainHeader> 
        
        </React.Fragment>     
    );
}
export default MainNavigation