import React from "react";
import UseApiFetch from "../Hooks/UseApiFetch";

export const ContextUse = React.createContext();

export const ProdoctStorage = ({ children }) => {
  const { fetchProduct, product, error, loading } = UseApiFetch();
  const [barAtivo, setBarAtivo] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const addProductCart = (item) => {
    if (cart.includes(item)) return;
    setCart([...cart, item]);
    setBarAtivo(true);
    setTotal(() => total + item.preco);
  };

  const removeProduct = (product, item) => {
    setCart((anterior) => {
      return anterior.filter((_, index) => index !== product);
    });
    setTotal(() => total - item.preco);
  };

  React.useEffect(() => {
    async function PromisseProduct() {
      const resposta = await fetchProduct("cardapio.json");
      return resposta;
    }

    PromisseProduct();
  }, [fetchProduct]);

  return (
    <ContextUse.Provider
      value={{
        product,
        error,
        loading,
        barAtivo,
        setBarAtivo,
        cart,
        addProductCart,
        removeProduct,
        total,
      }}
    >
      {children}
    </ContextUse.Provider>
  );
};
