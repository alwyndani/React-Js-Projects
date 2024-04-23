import logo from "../assets/images.jpg";
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={`container bg-secondary-subtle p-0 ${styles.header}`}>
      <span>
        <img style={{ width: "80px" }} className={styles.logo} src={logo} />
        <span className={`fs-2 fw-bold text-success ps-4 ${styles.mate}`}>TaskMate</span>
      </span>
    </header>
  );
};
