import Image from "next/image";
import styles from "./hero.module.css";
import logoBuoniConTitulos from "../../resources/logo-buoni-con-titulos.webp";
import imagenMain from "../../resources/imagen-main.webp";
import fondoMain from "../../resources/fondo-main.webp";

export default function Hero() {
  return (
    <main className={styles["hero"]}>
      <Image
        src={fondoMain}
        alt="fondo-main"
        fill
        priority
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <Image
        src={logoBuoniConTitulos}
        alt="logo-main"
        className={styles["logo-main"]}
        width={276}
        height={96}
      />
      <Image
        src={imagenMain}
        alt="imagen-main"
        className={styles["pic-main"]}
        width={307}
        height={206}
      />
    </main>
  );
}
