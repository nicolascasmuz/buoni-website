import Image from "next/image";
import Layout from "components/layout";
import styles from "./contact.module.css";
import fondoSection1 from "../../resources/fondo-section-1.webp";
import buoniMap from "../../resources/buoni-map.webp";
import facebook from "../../resources/facebook.webp";
import instagram from "../../resources/instagram.webp";
import whatsapp from "../../resources/whatsapp.webp";

export default function ContactPage() {
  return (
    <Layout>
      <section className={styles["section-3"]}>
        <Image
          src={fondoSection1}
          alt="background"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <div className={styles["contact__social-media"]}>
          <a
            href="https://www.facebook.com/buoni.cactusysuculentas"
            className={styles["footer__social-media-link"]}
          >
            <Image
              src={facebook}
              alt="logo-facebook"
              height={40}
              className={styles["footer__social-media-logo"]}
            />
            <label className={styles["footer__social-media-name"]}>
              Facebook: buoni.cactusysuculentas
            </label>
          </a>
          <a
            href="https://www.instagram.com/buoni.cactusysuculentas/"
            className={styles["footer__social-media-link"]}
          >
            <Image
              src={instagram}
              alt="logo-instagram"
              height={40}
              className={styles["footer__social-media-logo"]}
            />
            <label
              className={styles["footer__social-media-name"]}
              htmlFor="linkedin"
            >
              Instagram: buoni.cactusysuculentas
            </label>
          </a>
          <a href="" className={styles["footer__social-media-link"]}>
            <Image
              src={whatsapp}
              alt="logo-whatsapp"
              height={40}
              className={styles["footer__social-media-logo"]}
            />
            <label className={styles["footer__social-media-name"]}>
              Whatsapp: 1141615414
            </label>
          </a>
        </div>
        <div className={styles["contact__container"]}>
          <h1 className={styles["title-section-3"]}>Contacto</h1>
          <div className={styles["form-wrapper"]}>
            <div className={styles["name-wrapper"]}>
              <label htmlFor="name-input" className={styles["name-label"]}>
                Nombre
              </label>
              <input
                id="name-input"
                type="text"
                className={styles["name-input"]}
              />
            </div>
            <div className={styles["email-wrapper"]}>
              <label htmlFor="email-input" className={styles["email-label"]}>
                Email
              </label>
              <input
                id="email-input"
                type="email"
                className={styles["email-input"]}
              />
            </div>
            <div className={styles["message-wrapper"]}>
              <label
                htmlFor="message-textarea"
                className={styles["message-label"]}
              >
                Mensaje
              </label>
              <textarea
                name=""
                id="mensaje-box"
                className={styles["message-textarea"]}
              ></textarea>
            </div>
            <button className={styles["button-enviar"]}>ENVIAR</button>
          </div>
        </div>
        <Image
          src={buoniMap}
          alt="succulents-drawing"
          className={styles["pic-section-1"]}
          height={450}
        />
      </section>
    </Layout>
  );
}
