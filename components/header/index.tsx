import Image from "next/image";
import styles from "./header.module.css";
import logoBuoni from "../../resources/logo-buoni.svg";
import menuPic from "../../resources/menu.svg";

export default function Header() {
  return (
    <div className={styles["header"]}>
      <Image
        src={logoBuoni}
        alt="logo-header"
        className={styles["logo-header"]}
        width={50}
        height={50}
      />
      <Image
        src={menuPic}
        alt="menu"
        className={styles.menu}
        width={50}
        height={50}
      />
      <nav className={styles["options-wrapper"]}>
        <h3 className={styles["options-header"]}>Quienes somos</h3>
        <h3 className={styles["options-header"]}>Nuestros productos</h3>
        <h3 className={styles["options-header"]}>Contacto</h3>
      </nav>
    </div>
  );
}
