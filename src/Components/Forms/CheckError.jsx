import { IoCloseCircle } from "react-icons/io5";
import React from "react";
import { ContextUse } from "../../Hooks/UseContextProduct";
import styles from "../Forms/CheckError.module.css";

const CheckError = () => {
  const { erro, setError } = React.useContext(ContextUse);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 1000);

    return () => clearInterval(timer);
  }, [erro, setError]);

  return (
    <>
      {erro && (
        <div className={styles.CheckError}>
          <IoCloseCircle style={{ color: "#FF0000", fontSize: "1.5625rem" }} />
          {erro && <p>{erro}</p>}
        </div>
      )}
    </>
  );
};

export default CheckError;
