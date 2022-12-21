import styles from "../styles/commu.module.css";
import { Link } from "react-router-dom";

function Cview() {
  return (
    <div className={styles.wrap__M}>
      {/*Navbar Section*/}
      <nav className={styles.navbar}>
        <Link to={`/`} id={styles.navbar__logo}>
          DALA
        </Link>
        <ul className={styles.navbar__menu}>
          <li>
            <Link to={`/`} className={styles.navbar__links}>
              Home
            </Link>
          </li>
          <li>
            <Link to={`/DALA/reserv`} className={styles.navbar__links}>
              Reservation
            </Link>
          </li>
          <li>
            <Link to={`/DALA/commu`} className={styles.navbar__links}>
              <b>Community</b>
            </Link>
          </li>
          <li>
            <Link to={`/DALA/login`} className={styles.button}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Cview;
