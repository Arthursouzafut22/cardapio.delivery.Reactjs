import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./styles/ButtonControls.module.css";
import ButtonCart from "./ButtonCart";
import styless from "../Components/styles/Button.module.css";
import React from "react";

const ButtonControls = () => {
  const [value, setValue] = React.useState(1);

  return (
    <span className={styles.controls}>
      {value === 1 ? (
        <ButtonCart disabled className={styless.buttonZero}>
          <FaMinus style={{ fontSize: "18px", cursor: "pointer" }} />
        </ButtonCart>
      ) : (
        <ButtonCart className={styless.buttonZero}>
          <FaMinus
            style={{ fontSize: "18px", cursor: "pointer" }}
            onClick={() => setValue(value - 1)}
          />
        </ButtonCart>
      )}

      <input type="number" name="number" id="number" value={value} />
      <FaPlus
        style={{ fontSize: "18px", color: "red", cursor: "pointer" }}
        onClick={() => setValue(value + 1)}
      />
    </span>
  );
};

export default ButtonControls;
