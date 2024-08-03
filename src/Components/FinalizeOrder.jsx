import React from "react";
import styles from "../Components/styles/Finalize.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import ButtonCart from "./ButtonCart";
import styless from "../Components/styles/Button.module.css";
import { ContextUse } from "../Hooks/UseContextProduct";
import FormatePrice from "./FormatePrice";
import { createPortal } from "react-dom";

const FinalizeOrder = () => {
  const { forms, entrega, troco, cart, total, finalize, setFinalize } =
    React.useContext(ContextUse);

  return (
    <section
      className={finalize ? `${styles.section}` : ""}
      onClick={() => setFinalize(false)}
    >
      {finalize &&
        createPortal(
          <div className={styles.finalize} onClick={(e) => e.stopPropagation()}>
            <div className={styles.conatinerClose}>
              <p>Dados do seu pedido</p>
              <IoCloseSharp
                onClick={() => setFinalize(false)}
                style={{
                  fontSize: "30px",
                  color: "#FF0000",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className={styles.info}>
              <p>Cliente : {forms.nome}</p>
              <p>Rua : {forms.rua}</p>
              <p>Tipo de serviço : {entrega}</p>
              <p>Número : {forms.Numero}</p>
              <p>Bairro : {forms.bairro}</p>
              <p>Forma de pagamento : {troco}</p>
              <p style={{ marginTop: "18px" }}>Resumo do pedido:</p>
              {cart.length > 0
                ? cart.map((item) => (
                    <div key={item.id}>
                      <p>
                        ({item.quantidade}) - {item.nome}
                      </p>
                    </div>
                  ))
                : ""}
              <div className={styles.containerSub}>
                <p style={{ fontWeight: "400" }}>Subtotal</p>
                <p>{FormatePrice(Math.abs(total))}</p>
              </div>
            </div>
            <h1>Quase pronto...</h1>
            <div className={styles.confirm}>
              <p>AÇÂO NECESSÁRIA: 👇</p>
              <p>Enviar confirmação pelo Whatsapp</p>
              <ButtonCart className={styless.buttongreen2}>
                <FaWhatsapp style={{ fontSize: "25px" }} />
                Enviar
              </ButtonCart>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default FinalizeOrder;
