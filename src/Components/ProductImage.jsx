import { useState } from "react";

const ProductImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
          }}
        />
      )}
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
