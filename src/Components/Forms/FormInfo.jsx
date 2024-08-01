import React from "react";
import styles from "../Forms/Form.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import DeliveryForm from "./DeliveryForm";
import { ContextUse } from "../../Hooks/UseContextProduct";
import { createPortal } from "react-dom";

const FormInfo = () => {
  const { formAtivo, setFormAtivo } = React.useContext(ContextUse);
  return (
    <section
      className={formAtivo ? `${styles.section}` : `${styles.none}`}
      onClick={() => setFormAtivo(false)}
    >
      {formAtivo &&
        createPortal(
          <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
            <div className={styles.wrapper2}>
              <FaChevronLeft
                style={{
                  color: "#4B5563",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onClick={() => setFormAtivo(false)}
              />
              <p>Preencha as informações</p>
              <IoCloseSharp
                style={{
                  color: "#FF0000",
                  fontSize: "26px",
                  cursor: "pointer",
                }}
                onClick={() => setFormAtivo(false)}
              />
            </div>
            <DeliveryForm />
          </div>,
          document.body
        )}
    </section>
  );
};

export default FormInfo;
