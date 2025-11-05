import Image from "next/image";
import Layout from "components/layout";
import styles from "./about-us.module.css";
import succulentsDrawing from "../../resources/succulents drawing_02.svg";
import fondoSection1 from "../../resources/fondo-section-1.png";

export default function AboutUsPage() {
  return (
    <Layout>
      <section className={styles["section-1"]}>
        <Image
          src={fondoSection1}
          alt="background"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <div className={styles["section-1-wrapper"]}>
          <h1 className={styles["title-section-1"]}>Quienes somos</h1>
          <p className={styles["paragraph-section-1"]}>
            Buoni es un emprendimiento fundado en 2021. Nos dedicamos a la
            producción de cactus y suculentas, venta al por mayor para viveros y
            emprendedores del rubro y venta al por menor. También ofrecemos una
            amplia variedad de productos para mantenimiento y decoración de
            plantas, como sustratos, macetas, plaguicidas y más.
          </p>
          <Image
            src={succulentsDrawing}
            alt="succulents-drawing"
            className={styles["pic-section-1"]}
          />
        </div>
      </section>
    </Layout>
  );
}
