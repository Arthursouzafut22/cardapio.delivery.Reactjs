import React from "react";
import Input from "./Input";
import FormDados from "./FormDados";
import ButtonCart from "../ButtonCart";
import styles from "../Forms/Form.module.css";

const DeliveryForm = () => {
  const [entrega, setEntrega] = React.useState("");
  console.log(entrega);

  const changeEntrega = ({ target }) => {
    setEntrega(target.value);
  };
  return (
    <form className={styles.form}>
      <label htmlFor="name">Nome</label>
      <Input type="text" id="name" name="name" />
      <p>Selecione o método de entrega:</p>
      <span className={styles.wrapperRadio}>
        <label htmlFor="buscar">
          <Input
            type="radio"
            value="buscar"
            checked={entrega === "buscar"}
            onChange={changeEntrega}
          />
          Buscar
        </label>
        <label htmlFor="Delivery">
          <Input
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
        <ButtonCart style={{ marginTop: "25px" }}>Conferir pedido</ButtonCart>
      ) : (
        ""
      )}
    </form>
  );
};

export default DeliveryForm;
