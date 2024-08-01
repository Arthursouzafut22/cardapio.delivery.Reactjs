import React from "react";
import Input from "./Input";
import styles from "../Forms/Form.module.css";
import styless from "../styles/Button.module.css";
import ButtonCart from "../ButtonCart";
import { FaArrowLeft } from "react-icons/fa";

const FormDados = () => {
  const [troco, setTroco] = React.useState("");

  const changeTroco = ({ target }) => {
    setTroco(target.value);
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <p>Selecione a forma de pagamento:</p>
      <span className={styles.wrapperRadio}>
        <label>
          <Input
            value="dinheiro"
            type="radio"
            checked={troco === "dinheiro"}
            onChange={changeTroco}
          />
          Dinheiro
        </label>
        <label>
          <Input
            type="radio"
            value="pix"
            checked={troco === "pix"}
            onChange={changeTroco}
          />
          Pix
        </label>
        <label>
          <Input
            type="radio"
            value="cartão"
            checked={troco === "cartão"}
            onChange={changeTroco}
          />
          Cartão
        </label>
      </span>
      {troco === "dinheiro" ? (
        <div>
          <label style={{ marginTop: "15px" }}>
            Precisa de troco pra quanto ?
          </label>
          <Input type="number" id="number" />
        </div>
      ) : (
        ""
      )}
      <div className={styles.formFlex}>
        <div>
          <label>Rua</label>
          <Input />
        </div>
        <div>
          <label>Numero</label>
          <Input type="number" id="number" />
        </div>
      </div>
      <label>Bairro</label>
      <Input type="text" id="text" />
      <label>Complemento (opcional)</label>
      <Input type="text" id="text" placeholder="ex: casa, prédio, loja" />
      <label>Ponto de referência (opcional)</label>
      <Input type="text" id="text" placeholder="perto da farmácia " />
      <div className={styles.container}>
        <ButtonCart>Conferir pedido</ButtonCart>
        <button className={styless.btnWhite} style={{ color: "#4B5563" }}>
          <FaArrowLeft
            style={{ color: "#4B5563", fontSize: "25px", border: "none" }}
          />
          Voltar
        </button>
      </div>
    </div>
  );
};

export default FormDados;
