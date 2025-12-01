import Image from "next/image";
import styles from "./products.module.css";
import { CategoryComp } from "../../components/category";
import Layout from "components/layout";
import cactus from "resources/product-1.png";
import macetas from "resources/product-2.png";
import sustratos from "resources/product-3.png";
import mantenimiento from "resources/product-4.png";
import fondoMain from "../../resources/fondo-main.png";

export default function ProductsPage() {
  return (
    <Layout>
      <section className={styles["general-comp"]}>
        <Image
          src={fondoMain}
          alt="background"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <div className={styles["general-section__wrapper"]}>
          <a href="/category/cactus">
            <CategoryComp name={"cactus y suculentas"} pic={cactus} />
          </a>
          <a href="/category/mantenimiento">
            <CategoryComp name={"mantenimiento"} pic={mantenimiento} />
          </a>
          <a href="/category/macetas">
            <CategoryComp name={"macetas"} pic={macetas} />
          </a>
          <a href="/category/sustratos">
            <CategoryComp name={"sustratos"} pic={sustratos} />
          </a>
        </div>
      </section>
    </Layout>
  );
}
