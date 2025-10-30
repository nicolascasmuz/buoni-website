import Footer from "components/footer";
import Header from "components/header";
import styles from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={styles.div}>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
