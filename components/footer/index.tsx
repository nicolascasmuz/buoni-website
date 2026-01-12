import styles from "./footer.module.css";
import Image from "next/image";
import logoBuoni from "../../resources/logo-buoni.png";
import facebook from "../../resources/facebook.png";
import instagram from "../../resources/instagram.png";
import whatsapp from "../../resources/whatsapp.png";

export default function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-logo-copyright"]}>
        <Image
          className={styles["logo-comp"]}
          src={logoBuoni}
          alt="buoni-logo"
          width={50}
          height={50}
        />
        <h6 className={styles["footer-copyright"]}>© 2025 Buoni</h6>
      </div>
      <div className={styles["footer-socialmedia"]}>
        <a
          href="https://www.facebook.com/buoni.cactusysuculentas"
          className={styles["footer__links"]}
        >
          <Image
            src={facebook}
            alt="Patagoning Logo"
            className={styles["socialmedia-logo"]}
            width={50}
            height={50}
          />
        </a>
        <a
          href="https://www.instagram.com/buoni.cactusysuculentas/"
          className={styles["footer__links"]}
        >
          <Image
            src={instagram}
            alt="Patagoning Logo"
            className={styles["socialmedia-logo"]}
            width={50}
            height={50}
          />
        </a>
        <a href="" className={styles["footer__links"]}>
          <Image
            src={whatsapp}
            alt="Patagoning Logo"
            className={styles["socialmedia-logo"]}
            width={50}
            height={50}
          />
        </a>
      </div>
    </div>
  );
}
