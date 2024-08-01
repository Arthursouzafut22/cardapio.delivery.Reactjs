import React from "react";
import UseApiFetch from "../Hooks/UseApiFetch";

export const ContextUse = React.createContext();

export const ProdoctStorage = ({ children }) => {
  const { fetchProduct, product, error, loading } = UseApiFetch();
  const [ativo, setAtivo] = React.useState(false);
  const [formAtivo, setFormAtivo] = React.useState(false);
  const [notification, setNotification] = React.useState(false);
  const [barAtivo, setBarAtivo] = React.useState(false);
  const [carAtivo, setCartAtivo] = React.useState(false);
  const [area, setArea] = React.useState("");
  const [valor, setValue] = React.useState(1);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const addProductCart = (item) => {
    const obj = { ...item, quantidade: valor, observacao: area };
    if (cart.some((cartItem) => cartItem.nome === item.nome)) return;
    setCart([...cart, obj]);
    setBarAtivo(true);
    setArea("");
    setAtivo(() => false);
    setNotification(() => true);
    setTotal(() => Number(obj.quantidade * item.preco + total));
  };

  const removeProduct = (productIndex, item) => {
    if (Math.abs(total) === 0) return null;
    setCart((anterior) => {
      return anterior.filter((_, index) => index !== productIndex);
    });
    setTotal(() => Number(item.quantidade * item.preco) - Math.abs(total));
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
        valor,
        setValue,
        carAtivo,
        setCartAtivo,
        area,
        setArea,
        ativo,
        setAtivo,
        notification,
        setNotification,
        formAtivo,
        setFormAtivo,
      }}
    >
      {children}
    </ContextUse.Provider>
  );
};
