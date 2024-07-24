import React from "react";
import UseApiFetch from "../Hooks/UseApiFetch";

export const ContextUse = React.createContext();

export const ProdoctStorage = ({ children }) => {
  const { fetchProduct, product, error, loading } = UseApiFetch();

  React.useEffect(() => {
    async function PromisseProduct() {
      const resposta = await fetchProduct("cardapio.json");
      return resposta;
    }

    PromisseProduct();
  }, [fetchProduct]);

  return (
    <ContextUse.Provider value={{ product, error, loading }}>
      {children}
    </ContextUse.Provider>
  );
};

// export const AuthProduct = React.useContext(ContextUse);
