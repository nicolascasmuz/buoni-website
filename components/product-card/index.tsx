// import { useRouter } from "next/router";
/* import { RoundedButton } from "ui/buttons";
import { PriceText, SecondaryTitle } from "ui/texts"; */
import styles from "./product-card.module.css";

export function ProductCard(props) {
  // const router = useRouter();

  return (
    <div className={styles["card-container"]}>
      <img
        src={props.pic}
        alt={props.name.toLowerCase().replaceAll(" ", "-")}
        className={styles["card-img"]}
      />
      <div className={styles["card-price-link"]}>
        <h3 className={styles["card__title"]}>{props.name}</h3>
        <p className={styles["card__price"]} color="#080808">
          ${props.price}
        </p>
      </div>
    </div>
  );
}
