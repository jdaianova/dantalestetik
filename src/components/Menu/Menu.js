import './Menu.css';
import { NavLink } from 'react-router-dom';

function Menu() {

  function stateClassName(state) {
    return 'Menu-button-link' + (state.isActive ? ' Active' : '')
  }

  return (
    <nav>
      <ul className="Menu-buttons">
        <li className="Menu-button">
          <NavLink className={stateClassName} to="/" >hlavni</NavLink>
        </li>
        <li className="Menu-button">
          <NavLink className={stateClassName} to="/adresa">adresa</NavLink>
        </li>
        <li className="Menu-button">
          <NavLink className={stateClassName} to="/sluzby">sluzby</NavLink>
        </li>
        <li className="Menu-button">
          <NavLink className={stateClassName} to="/dotazy">dotazy</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Menu;