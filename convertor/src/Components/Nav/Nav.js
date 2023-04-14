import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles["main-menu"]}>
        <li>
          <NavLink to="/convertor">Convertor</NavLink>
        </li>
        <li>
          <NavLink to="/weather">Weather</NavLink>
        </li>
      </ul>
    </nav>
  );
}
