import styles from "../Components/styles/ModalProduct.module.css";
import { IoCloseSharp } from "react-icons/io5";
import FormatePrice from "./FormatePrice";
import InputArea from "./InputArea";
import ButtonControls from "./ButtonControls";
import ButtonCart from "./ButtonCart";

const ModalProduct = ({ ativo, setAtivo, modal }) => {
  return (
    <>
      <section
        className={ativo ? `${styles.section}` : `${styles.none}`}
        onClick={() => setAtivo(false)}
      >
        {modal &&
          modal.map((item) => (
            <div key={item.id} className={styles.modal}>
              <img src={item.imagem} alt="imagem" />
              <div className={styles.wrapper}>
                <h1>{item.nome}</h1>
                <button onClick={() => setAtivo(false)}>
                  <IoCloseSharp style={{ color: "red", fontSize: "32px" }} />
                </button>
              </div>
              <p style={{ color: "#16A34A", fontWeight: "bold" }}>
                {FormatePrice(item.preco)}
              </p>
              <p style={{ color: "#6B7280" }}>{item.descricao}</p>
              <p className={styles.observe}>
                Alguma observação sobre o pedido ?
              </p>
              <InputArea />
              <div className={styles.containerButtons}>
                <ButtonControls />
                <ButtonCart>Adicionar {FormatePrice(item.preco)}</ButtonCart>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default ModalProduct;
