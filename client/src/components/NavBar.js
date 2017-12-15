import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <ul className="navBar">
      <li className="navBarLink">
        <NavLink
          exact to="/cards"
          >Home
        </NavLink>
       </li>
         <li>
           <NavLink
             exact to="/cards/favorites"
             >Favorites
           </NavLink>
        </li>
     </ul>
    );
  }

export default NavBar;
