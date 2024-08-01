import React from "react";
import styles from "../Components/styles/Main.module.css";
import { ContextUse } from "../Hooks/UseContextProduct";
import Product from "./Product";
import Spinner from "./Spinner";
import Cart from "./Cart";
import ToastNotification from "./ToastNotification";
import FormInfo from "./Forms/FormInfo";

const Main = () => {
  const { error, loading } = React.useContext(ContextUse);

  return (
    <main className={styles.main}>
      <FormInfo/>
      <ToastNotification />
      <Cart />
      {error && <p>{error}</p>}
      {loading && <Spinner />}
      <div className={styles.container}>
        <Product />
      </div>
    </main>
  );
};

export default Main;
