import styles from "./styles/Button.module.css";

const ButtonCart = ({ children, className, ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default ButtonCart;
