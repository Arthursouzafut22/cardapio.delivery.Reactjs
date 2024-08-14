import React from "react";
import { ContextUse } from "../Hooks/UseContextProduct";
import styles from "../Components/styles/Product.module.css";
import ModalProduct from "../Components/ModalProduct";
import FormatePrice from "./FormatePrice";
import ProductImage from "./ProductImage";

const Product = () => {
  const { product, ativo, setAtivo } = React.useContext(ContextUse);
  const [modal, setModal] = React.useState(false);

  const itemsProduct = (...item) => {
    setModal(item);
    setAtivo(true);
  };

  return (
    <>
      <ModalProduct modal={modal} ativo={ativo} setAtivo={setAtivo} />
      {product.map((item) => (
        <div
          key={item.id}
          className={styles.product}
          onClick={() => itemsProduct(item)}
        >
          <ProductImage src={item.imagem} alt={item.nome} />
          <div className={styles.info}>
            <p>{item.nome}</p>
            <p>{item.descricao}</p>
            <p>{FormatePrice(item.preco)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
