import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
