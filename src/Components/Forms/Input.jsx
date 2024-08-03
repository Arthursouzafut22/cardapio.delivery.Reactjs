import styles from "../Forms/Input.module.css";

const Input = ({ label, value, type, name, id, onChange, placeholder }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
