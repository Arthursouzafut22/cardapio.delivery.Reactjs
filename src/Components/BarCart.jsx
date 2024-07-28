import styles from "../Components/styles/Footer.module.css";
import ButtonCart from "./ButtonCart";
import styless from "../Components/styles/Button.module.css";
import { useContext } from "react";
import { ContextUse } from "../Hooks/UseContextProduct";
import FormatePrice from "./FormatePrice";

const BarCart = () => {
  const { cart, barAtivo, total } = useContext(ContextUse);
  if (!barAtivo) return null;
  return (
    <div className={styles.bar}>
      <div>
        <p>{cart.length} item</p>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
          {FormatePrice(total)}
        </p>
      </div>
      <ButtonCart className={styless.noflex}>Ver meu carrinho</ButtonCart>
    </div>
  );
};

export default BarCart;
