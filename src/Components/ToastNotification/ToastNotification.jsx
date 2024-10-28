import { FaCheckCircle } from "react-icons/fa";
import styles from "../Components/styles/Toast.module.css";
import { ContextUse } from "../../Hooks/UseContextProduct";
import React from "react";

const ToastNotification = () => {
  const { notification, setNotification } = React.useContext(ContextUse);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (notification) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setNotification(false), 500);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [notification, setNotification]);

  return (
    <>
      {notification && (
        <div
          className={`${styles.wrapper} ${!isVisible ? styles.toastExit : ""}`}
        >
          <div className={`${styles.toast}`}>
            <FaCheckCircle style={{ color: "#05B443", fontSize: "25px" }} />
            <div>
              <p>Sucesso</p>
              <p>Item adicionado ao carrinho</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ToastNotification;
