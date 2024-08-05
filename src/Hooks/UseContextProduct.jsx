import React from "react";
import UseApiFetch from "../Hooks/UseApiFetch";

export const ContextUse = React.createContext();

export const ProdoctStorage = ({ children }) => {
  const { fetchProduct, product, error, loading } = UseApiFetch();
  const [ativo, setAtivo] = React.useState(false);
  const [formAtivo, setFormAtivo] = React.useState(false);
  const [notification, setNotification] = React.useState(false);
  const [finalize, setFinalize] = React.useState(false);
  const [barAtivo, setBarAtivo] = React.useState(false);
  const [carAtivo, setCartAtivo] = React.useState(false);
  const [area, setArea] = React.useState("");
  const [valor, setValue] = React.useState(1);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [troco, setTroco] = React.useState("");
  const [entrega, setEntrega] = React.useState("");
  const [erro, setError] = React.useState(null);

  const [forms, setForms] = React.useState({
    nome: "",
    rua: "",
    numero: "",
    troco: "",
    bairro: "",
    complemento: "",
    referencia: "",
  });

  const changeForms = ({ target }) => {
    console.log(target.value);
    const { id, value } = target;
    setForms({ ...forms, [id]: value });
  };

  const validateForm = () => {
    return forms.nome === ""
      ? setError("Preencha o nome") || false
      : forms.bairro === ""
      ? setError("Preencha o bairro") || false
      : forms.rua === ""
      ? setError("Preencha a rua") || false
      : forms.numero === ""
      ? setError("Preencha o número") || false
      : troco === ""
      ? setError("Selecione o pagamento") || false
      : (setError(null), true);
  };

  const changeEntrega = ({ target }) => {
    setEntrega(target.value);
  };

  const changeTroco = ({ target }) => {
    setTroco(target.value);
  };

  const addProductCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantidade: cartItem.quantidade + valor }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantidade: valor, observacao: area }];
      }
    });
    setTotal((prevTotal) => prevTotal + item.preco * valor);
    setBarAtivo(true);
    setArea("");
    setAtivo(false);
    setNotification(true);
  };

  const removeProduct = (productIndex, item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem.quantidade > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantidade: cartItem.quantidade - 1 }
            : cartItem
        );
      } else {
        return prevCart.filter((cartItem) => cartItem.id !== item.id);
      }
    });
    setTotal((prevTotal) => prevTotal - item.preco);
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
        forms,
        setForms,
        changeForms,
        entrega,
        setEntrega,
        changeEntrega,
        troco,
        setTroco,
        changeTroco,
        finalize,
        setFinalize,
        validateForm,
        erro,
        setError,
      }}
    >
      {children}
    </ContextUse.Provider>
  );
};
