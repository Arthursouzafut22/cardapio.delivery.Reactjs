import styles from "./styles/InputArea.module.css";
import React from "react";
import { ContextUse } from "../Hooks/UseContextProduct";

const Input = () => {
  const { area, setArea } = React.useContext(ContextUse);

  return (
    <textarea
      className={styles.input}
      name="text"
      id="text"
      value={area}
      rows={4}
      onChange={({ target }) => setArea(target.value)}
      placeholder="Ex 1 sem cebola, sem milho"
    />
  );
};

export default Input;
