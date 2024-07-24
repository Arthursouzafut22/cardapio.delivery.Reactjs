import styles from "./styles/InputArea.module.css"

const Input = () => {
  return (
    <textarea className={styles.input}
      name="text"
      id="text"
      rows={4}
      placeholder="Ex 1 sem cebola, sem milho"
    />
  );
};

export default Input;
