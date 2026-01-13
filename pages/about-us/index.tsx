import Image from "next/image";
import Layout from "components/layout";
import styles from "./about-us.module.css";
import succulentsDrawing from "../../resources/succulents drawing_02.webp";
import fondoSection1 from "../../resources/fondo-section-1.webp";
import misionPic from "../../resources/mision.webp";
import visionPic from "../../resources/vision.webp";
import CarouselComp from "components/carousel";

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
        <div className={styles["about-us__container"]}>
          <Image
            src={succulentsDrawing}
            alt="succulents-drawing"
            className={styles["about-us__pic"]}
          />
          <h1 className={styles["about-us__title"]}>Quienes somos</h1>
          <p className={styles["about-us__paragraph"]}>
            Buoni es un emprendimiento fundado en 2021. Nos dedicamos a la
            producción de cactus y suculentas, venta al por mayor para viveros y
            emprendedores del rubro y venta al por menor. También ofrecemos una
            amplia variedad de productos para mantenimiento y decoración de
            plantas, como sustratos, macetas, plaguicidas y más.
          </p>
        </div>
        <div className={styles["section-1-wrapper"]}>
          <h1 className={styles["title-section-1"]}>Misión</h1>
          <p className={styles["paragraph-section-1"]}>
            Ser el proveedor integral de referencia para aficionados y
            profesionales de cactus y suculentas, ofreciendo una producción
            robusta y una curada selección de sustratos, macetas y productos de
            mantenimiento que garantizan el bienestar y la belleza de estas
            plantas.
          </p>
          <Image
            src={misionPic}
            alt="succulents-drawing"
            className={styles["pic-section-1"]}
          />
        </div>
        <div className={styles["vision__container"]}>
          <h1 className={styles["vision__title"]}>Visión</h1>
          <p className={styles["vision__paragraph"]}>
            Consolidarnos como el principal productor y distribuidor mayorista
            de cactus y suculentas de la región, siendo reconocidos por la
            excelencia en genética vegetal y la confiabilidad en la provisión de
            insumos especializados.
          </p>
          <Image
            src={visionPic}
            alt="succulents-drawing"
            className={styles["vision__pic"]}
          />
        </div>
        <CarouselComp />
      </section>
    </Layout>
  );
}
