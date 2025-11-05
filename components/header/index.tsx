import Image from "next/image";
import styles from "./header.module.css";
import logoBuoni from "../../resources/logo-buoni.svg";
import menuPic from "../../resources/menu.svg";

export default function Header() {
  return (
    <div className={styles["header"]}>
      <a href="/">
        <Image
          src={logoBuoni}
          alt="logo-header"
          className={styles["logo-header"]}
          width={50}
          height={50}
        />
      </a>
      <Image
        src={menuPic}
        alt="menu"
        className={styles.menu}
        width={50}
        height={50}
      />
      <nav className={styles["options-wrapper"]}>
        <a className={styles["options-header"]} href="/about-us">
          Quienes somos
        </a>
        <a className={styles["options-header"]} href="/products">
          Nuestros productos
        </a>
        <a className={styles["options-header"]} href="/contact">
          Contacto
        </a>
      </nav>
    </div>
  );
}
