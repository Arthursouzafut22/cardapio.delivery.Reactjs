import React from "react";
import Input from "./Input";
import styles from "../Forms/Form.module.css";
import styless from "../styles/Button.module.css";
import ButtonCart from "../ButtonCart";
import { FaArrowLeft } from "react-icons/fa";
import { ContextUse } from "../../Hooks/UseContextProduct";

const FormDados = () => {
  const {
    forms,
    changeForms,
    troco,
    changeTroco,
    setFinalize,
    setFormAtivo,
    validateForm,
  } = React.useContext(ContextUse);

  const validityOrdem = () => {
    if (validateForm()) {
      setFinalize(() => true);
    }
  };

  return (
    <div style={{ marginTop: "0.9375rem" }}>
      <p>Selecione a forma de pagamento:</p>
      <span className={styles.wrapperRadio}>
        <label htmlFor="dinheiro">
          <input
            value="dinheiro"
            type="radio"
            checked={troco === "dinheiro"}
            onChange={changeTroco}
          />
          Dinheiro
        </label>
        <label htmlFor="pix">
          <input
            type="radio"
            value="pix"
            checked={troco === "pix"}
            onChange={changeTroco}
          />
          Pix
        </label>
        <label htmlFor="cartão">
          <input
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
          <label style={{ marginTop: "0.9375rem" }} htmlFor="troco">
            Precisa de troco pra quanto ?
          </label>
          <Input
            type="number"
            id="troco"
            name="troco"
            value={forms.troco}
            onChange={changeForms}
          />
        </div>
      ) : (
        ""
      )}
      <div className={styles.formFlex}>
        <div>
          <label htmlFor="rua">Rua</label>
          <Input
            type="text"
            id="rua"
            name="rua"
            value={forms.rua}
            onChange={changeForms}
          />
        </div>
        <div>
          <label htmlFor="numero">Numero</label>
          <Input
            type="number"
            id="numero"
            name="numero"
            value={forms.numero}
            onChange={changeForms}
          />
        </div>
      </div>
      <label htmlFor="bairro">Bairro</label>
      <Input
        type="text"
        id="bairro"
        name="bairro"
        value={forms.bairro}
        onChange={changeForms}
      />
      <label htmlFor="complemento">Complemento (opcional)</label>
      <Input
        type="text"
        id="complemento"
        name="complemento"
        placeholder="ex: casa, prédio, loja"
        value={forms.complemento}
        onChange={changeForms}
      />
      <label htmlFor="referencia">Ponto de referência (opcional)</label>
      <Input
        type="text"
        id="referencia"
        name="referencia"
        placeholder="perto da farmácia"
        value={forms.referencia}
        onChange={changeForms}
      />
      <div className={styles.container}>
        <ButtonCart onClick={validityOrdem}>Conferir pedido</ButtonCart>
        <button
          className={styless.btnWhite}
          style={{ color: "#4B5563" }}
          onClick={() => setFormAtivo(false)}
        >
          <FaArrowLeft
            style={{ color: "#4B5563", fontSize: "1.5625rem", border: "none" }}
          />
          Voltar
        </button>
      </div>
    </div>
  );
};

export default FormDados;
