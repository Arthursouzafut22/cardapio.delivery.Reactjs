import styles from "./styles/Button.module.css";

const ButtonCart = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default ButtonCart;
