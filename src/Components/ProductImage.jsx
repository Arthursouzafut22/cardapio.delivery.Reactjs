import { useState } from "react";

const ProductImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease-in" }}
      />
    </>
  );
};

export default ProductImage;
