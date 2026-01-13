import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./category.module.css";
import { useParams } from "next/navigation";
import { ProductCard } from "components/product-card";
import Layout from "components/layout";
import { searchProducts } from "../../lib/api";
import fondoSection1 from "../../resources/fondo-section-1.webp";
import { Select } from "../../ui/select";
import Pagination from "../../components/pagination";

export default function CategoryPage() {
  const params: any = useParams();
  const paramsReplaced = params?.category.replace("-", " ") || "";

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [offset, setOffset] = useState(0);
  const [order, setOrder] = useState("menor precio");

  async function pullResults(category, offset, order) {
    const res = await searchProducts(category, offset);
    const items = res.results;
    setPagination(res.pagination);

    if (order === "menor precio") {
      const searchProduct = items.filter((p) => {
        const filteredProducts = p.category === category;
        return filteredProducts;
      });

      const lowerPrice = searchProduct.sort((pA, pB) => {
        if (pA.price > pB.price) {
          return 1;
        }
        if (pA.price < pB.price) {
          return -1;
        }
        return 0;
      });

      setProducts(lowerPrice);
    } else if (order === "mayor precio") {
      const searchProduct = items.filter((p) => {
        const filteredProducts = p.category === category;
        return filteredProducts;
      });

      const higherPrice = searchProduct.sort((pA, pB) => {
        if (pA.price < pB.price) {
          return 1;
        }
        if (pA.price > pB.price) {
          return -1;
        }
        return 0;
      });

      setProducts(higherPrice);
    }
  }

  function handleChange(e) {
    setOrder(e.target.value);
  }

  useEffect(() => {
    if (params?.category) {
      pullResults(params.category, offset, order);
    }
  }, [params, offset, order]);

  return (
    <Layout>
      <section className={styles["general-comp"]}>
        <Image
          src={fondoSection1}
          alt="background"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <div className={styles["general-section__wrapper"]}>
          <div className={styles["category__top-container"]}>
            <h2 className={styles["general-section__title"]}>
              {paramsReplaced}
            </h2>
            <Select
              name="order"
              value={order}
              onChange={handleChange}
              width="150px"
            >
              <option value="menor precio">menor precio</option>
              <option value="mayor precio">mayor precio</option>
            </Select>
          </div>
          <div className={styles["card-wrapper"]}>
            {products.map((r, index) => (
              <ProductCard
                key={index}
                name={r.name}
                price={r.price}
                pic={r.pic}
              />
            ))}
          </div>
          <Pagination
            totalItems={pagination?.total}
            itemsPerPage={pagination?.limit}
            onPageChange={(page) => {
              const offset = (page - 1) * pagination?.limit;
              setOffset(offset);
            }}
          />
        </div>
      </section>
    </Layout>
  );
}
