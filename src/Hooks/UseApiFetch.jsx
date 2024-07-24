import React from "react";

const UseApiFetch = () => {
  const [product, setProduct] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const fetchProduct = React.useCallback(async (url) => {
    try {
      setLoading(true);
      setError(null);
      const promisse = await fetch(url);
      if (!promisse.ok) throw new TypeError("Erro em status");
      const resposta = await promisse.json();
      setProduct(resposta);
      setLoading(false);
    } catch (erro) {
      setError("Erro na chamada");
    } finally {
      setLoading(null);
    }
  }, []);

  return {
    fetchProduct,
    product,
    error,
    loading,
  };
};

export default UseApiFetch;
