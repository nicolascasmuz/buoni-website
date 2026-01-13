import styles from "./products.module.css";
import Image from "next/image";
import product1 from "../../resources/product-1.webp";
import product2 from "../../resources/product-2.webp";
import product3 from "../../resources/product-3.webp";
import product4 from "../../resources/product-4.webp";

export default function Products() {
  return (
    <section className={styles["section-2"]}>
      <h1 className={styles["title-section-2"]}>Nuestros productos</h1>
      <div className={styles["product-wrapper-1"]}>
        <Image
          src={product1}
          alt="cactus-y-suculentas"
          className={styles["pic-product"]}
          height={80}
        />
        <h2 className={styles["title-product"]}>Cactus y suculentas</h2>
        <p className={styles["paragraph-product"]}>
          En Buoni encontrarás una gran variedad de cactus y suculentas. Desde
          los más exóticos, hasta los más comunes y silvestres, con diversas
          formas y colores para darle vida al hogar, ya sea en interior o
          exterior si querés decorar el balcón, el porche o el patio de tu casa.
        </p>
      </div>
      <div className={styles["product-wrapper-2"]}>
        <Image
          src={product2}
          alt="variedad-de-macetas"
          className={styles["pic-product"]}
          height={80}
        />
        <h2 className={styles["title-product"]}>Macetas</h2>
        <p className={styles["paragraph-product"]}>
          Así necesites una que se adapte a tu planta o a algún rincón especial
          de tu casa, contamos con macetas para todos los gustos y necesidades.
          De cerámica, de barro, de fibrocemento, de plástico y sopladas.
        </p>
      </div>
      <div className={styles["product-wrapper-3"]}>
        <Image
          src={product3}
          alt="sutrato"
          className={styles["pic-product"]}
          height={80}
        />
        <h2 className={styles["title-product"]}>Sustratos</h2>
        <p className={styles["paragraph-product"]}>
          Elaboramos nuestros propios sustratos para favorecer el desarrollo de
          tus plantas y ofrecemos todo lo que necesites para hacer el tuyo.
          Grava, arena, pometina, perlita, viruta, tierra negra y demás.
        </p>
      </div>
      <div className={styles["product-wrapper-4"]}>
        <Image
          src={product4}
          alt="productos-de-mantenimiento"
          className={styles["pic-product"]}
          height={80}
        />
        <h2 className={styles["title-product"]}>Mantenimiento</h2>
        <p className={styles["paragraph-product"]}>
          Con Buoni nunca te faltará lo indispensable para combatir cualquier
          plaga que puedan llegar a sufrir tus plantas. Además, te brindamos los
          accesorios más eficaces para la aplicación de los mismos.
        </p>
      </div>
    </section>
  );
}
