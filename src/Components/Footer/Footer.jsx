import styles from "../Components/styles/Footer.module.css";
import BarCart from "../BarCart/BarCart";

const Footer = () => {
  return (
    <>
      <BarCart />
      <footer className={styles.footer}>
        <p>Hothot Burguer 2024 todos os direitos reservados</p>
      </footer>
    </>
  );
};

export default Footer;
