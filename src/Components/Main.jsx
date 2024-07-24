import React from "react";
import styles from "../Components/styles/Main.module.css";
import { ContextUse } from "../Hooks/UseContextProduct";
import Product from "./Product";
import Spinner from "./Spinner";

const Main = () => {
  const { error, loading } = React.useContext(ContextUse);

  return (
    <main className={styles.main}>
      {error && <p>{error}</p>}
      {loading && <Spinner />}
      <div className={styles.container}>
        <Product />
      </div>
    </main>
  );
};

export default Main;
