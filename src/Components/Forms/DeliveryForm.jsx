import React from "react";
import Input from "./Input";
import FormDados from "./FormDados";
import ButtonCart from "../ButtonCart";
import styles from "../Forms/Form.module.css";
import { ContextUse } from "../../Hooks/UseContextProduct";
import CheckError from "./CheckError";

const DeliveryForm = () => {
  const {
    forms,
    changeForms,
    entrega,
    changeEntrega,
    setFinalize,
    setError,
    validateForm,
  } = React.useContext(ContextUse);

  const formSubmite = (event) => {
    event.preventDefault();
    validateForm();
  };

  function validatyOrdem() {
    forms.nome === "" ? setError("Preencha o nome") 
    : setFinalize(() => true);
  }

  return (
    <>
      <CheckError />
      <form className={styles.form} onSubmit={formSubmite}>
        <label htmlFor="nome">Nome</label>
        <Input
          type="text"
          id="nome"
          name="nome"
          value={forms.nome}
          onChange={changeForms}
        />
        <p>Selecione o método de entrega:</p>
        <span className={styles.wrapperRadio}>
          <label htmlFor="buscar">
            <input
              type="radio"
              value="buscar"
              checked={entrega === "buscar"}
              onChange={changeEntrega}
            />
            Buscar
          </label>
          <label htmlFor="delivery">
            <input
              type="radio"
              value="delivery"
              checked={entrega === "delivery"}
              onChange={changeEntrega}
            />
            Delivery
          </label>
        </span>
        {entrega === "delivery" ? <FormDados /> : ""}
        {entrega === "buscar" ? (
          <ButtonCart style={{ marginTop: "1.5625rem" }} onClick={validatyOrdem}>
            Conferir pedido
          </ButtonCart>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default DeliveryForm;
