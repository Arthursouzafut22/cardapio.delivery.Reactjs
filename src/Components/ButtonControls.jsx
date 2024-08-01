import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./styles/ButtonControls.module.css";
import ButtonCart from "./ButtonCart";
import styless from "../Components/styles/Button.module.css";
import React from "react";
import { ContextUse } from "../Hooks/UseContextProduct";

const ButtonControls = () => {
  const { valor, setValue } = React.useContext(ContextUse);

  return (
    <span className={styles.controls}>
      {valor === 1 ? (
        <ButtonCart disabled className={styless.buttonZero}>
          <FaMinus style={{ fontSize: "18px", cursor: "pointer" }} />
        </ButtonCart>
      ) : (
        <ButtonCart className={styless.buttonZero}>
          <FaMinus
            style={{ fontSize: "18px", cursor: "pointer" }}
            onClick={() => setValue(valor - 1)}
          />
        </ButtonCart>
      )}

      <input type="number" name="number" id="number" value={valor} />
      <FaPlus
        style={{ fontSize: "18px", color: "red", cursor: "pointer" }}
        onClick={() => setValue(valor + 1)}
      />
    </span>
  );
};

export default ButtonControls;
