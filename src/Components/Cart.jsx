import ButtonCart from "./ButtonCart";
import styles from "../Components/styles/Cart.module.css";
import styless from "../Components/styles/Button.module.css";
import { ContextUse } from "../Hooks/UseContextProduct";
import { useContext } from "react";
import FormatePrice from "../Components/FormatePrice";
import cesta from "../assets/cesta.png";

const Cart = () => {
  const { cart, removeProduct, total } = useContext(ContextUse);

  return (
    <section className={styles.section}>
      <div className={styles.cart}>
        <p>Meu carrinho</p>
        <p>Total: {FormatePrice(total)}</p>

        {cart.length === 0 ? (
          <img src={cesta} alt="imagem" />
        ) : (
          cart.map((item, index) => (
            <div key={index} className={styles.product}>
              <div className={styles.ordem}>
                <span>(1)</span>
                <p>{item.nome}</p>
              </div>
              <p className={styles.price}>{FormatePrice(item.preco)}</p>
              <ButtonCart
                className={styless.noflex}
                onClick={() => removeProduct(index, item)}
              >
                Remover
              </ButtonCart>
            </div>
          ))
        )}

        <div className={styles.containerBts}>
          <ButtonCart className={styless.normalButton}>Voltar</ButtonCart>
          <ButtonCart className={styless.buttonGreen}>Continuar</ButtonCart>
        </div>
      </div>
    </section>
  );
};

export default Cart;
