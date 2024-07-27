import styles from "../Components/styles/Footer.module.css";
import ButtonCart from "./ButtonCart";
import styless from "../Components/styles/Button.module.css";
import { useContext } from "react";
import { ContextUse } from "../Hooks/UseContextProduct";

const BarCart = () => {
  const { barAtivo } = useContext(ContextUse);
  if (!barAtivo) return null;
  return (
    <div className={styles.bar}>
      <div>
        <p>3 item</p>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>R$ 24,00</p>
      </div>
      <ButtonCart className={styless.noflex}>Ver meu carrinho</ButtonCart>
    </div>
  );
};

export default BarCart;
