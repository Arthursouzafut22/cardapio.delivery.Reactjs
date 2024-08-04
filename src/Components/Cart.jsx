import ButtonCart from "./ButtonCart";
import styles from "../Components/styles/Cart.module.css";
import styless from "../Components/styles/Button.module.css";
import { ContextUse } from "../Hooks/UseContextProduct";
import { useContext } from "react";
import FormatePrice from "../Components/FormatePrice";
import cesta from "../assets/cesta.png";
import { createPortal } from "react-dom";

const Cart = () => {
  const { cart, removeProduct, total, carAtivo, setCartAtivo, setFormAtivo } =
    useContext(ContextUse);

  return (
    <section
      className={carAtivo ? `${styles.section}` : `${styles.teste}`}
      onClick={() => setCartAtivo(false)}
    >
      {carAtivo &&
        createPortal(
          <div className={styles.cart} onClick={(e) => e.stopPropagation()}>
            <p>Meu carrinho</p>
            <p>Total: {FormatePrice(Math.abs(total))}</p>

            {cart.length === 0 ? (
              <img src={cesta} alt="imagem" />
            ) : (
              cart.map((item, index) => (
                <div key={index} className={styles.product}>
                  <div className={styles.ordem}>
                    <div style={{ marginTop: "0.625rem" }}>
                      <img src={item.imagem} alt="imagem" />
                      <p>observação: {item.observacao}</p>
                    </div>
                    <p className={styles.nome}>{item.nome}</p>
                  </div>
                  <p className={styles.price}>
                    {FormatePrice(item.quantidade * item.preco)}
                  </p>
                  <ButtonCart
                    className={styless.noflex}
                    onClick={() => removeProduct(index, item)}
                  >
                    Remover
                  </ButtonCart>
                </div>
              ))
            )}

            {cart.length > 0 ? (
              <div className={styles.containerBts}>
                <ButtonCart
                  className={styless.normalButton}
                  onClick={() => setCartAtivo(false)}
                >
                  Voltar
                </ButtonCart>
                <ButtonCart
                  className={styless.buttonGreen}
                  onClick={() => setFormAtivo(true)}
                >
                  Continuar
                </ButtonCart>
              </div>
            ) : (
              ""
            )}
          </div>,
          document.body
        )}
    </section>
  );
};

export default Cart;
