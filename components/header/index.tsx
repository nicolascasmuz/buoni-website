import Image from "next/image";
import styles from "./header.module.css";
import logoBuoni from "../../resources/logo-buoni.svg";
import menuPic from "../../resources/menu.svg";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <a href="/" className={styles["header__logo-a"]}>
        <Image
          src={logoBuoni}
          alt="logo-header"
          className={styles["header__logo"]}
          width={50}
          height={50}
        />
      </a>
      <input
        className={styles["header__menu-input"]}
        type="checkbox"
        id="check"
      />
      <label htmlFor="check" className={styles["header__menu-label"]}>
        <Image
          src={menuPic}
          alt="menu"
          className={styles["header__menu"]}
          width={50}
          height={50}
        />
      </label>
      <ul className={styles["header__menu-li"]}>
        <li>
          <a href="/" className={styles["header__option"]}>
            Inicio
          </a>
          <a href="/about-us" className={styles["header__option"]}>
            Quienes somos
          </a>
          <a href="/products" className={styles["header__option"]}>
            Nuestros productos
          </a>
          <a href="/contact" className={styles["header__option"]}>
            Contacto
          </a>
        </li>
      </ul>
      <nav className={styles["header__menu-nav"]}>
        <a className={styles["header__option"]} href="/about-us">
          Quienes somos
        </a>
        <a className={styles["header__option"]} href="/products">
          Nuestros productos
        </a>
        <a className={styles["header__option"]} href="/contact">
          Contacto
        </a>
      </nav>
    </header>
  );
}
