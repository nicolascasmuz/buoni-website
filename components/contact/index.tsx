import styles from "./contact.module.css";
import Image from "next/image";
import fondoSection1 from "../../resources/fondo-section-1.png";

export default function Contact() {
  return (
    <section className={styles["section-3"]}>
      <Image
        src={fondoSection1}
        alt="background"
        fill
        priority
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <h1 className={styles["title-section-3"]}>Contacto</h1>
      <div className={styles["form-wrapper"]}>
        <div className={styles["name-wrapper"]}>
          <label htmlFor="name-input" className={styles["name-label"]}>
            Nombre
          </label>
          <input id="name-input" type="text" className={styles["name-input"]} />
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
          <label htmlFor="message-textarea" className={styles["message-label"]}>
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
    </section>
  );
}
