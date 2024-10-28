import { useState, useEffect } from "react";

const ProductImage = ({ src, alt, fallback }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  if (!loaded) return fallback;

  return <img src={src} alt={alt} />;
};

export default ProductImage;
