import styles from "../Components/styles/Footer.module.css";
import BarCart from "./BarCart";

const Footer = () => {
  return (
    <>
      <BarCart />
      <footer className={styles.footer}>
        <p>Pytter Burguer 2024 todos os direitos reservados</p>
      </footer>
    </>
  );
};

export default Footer;
