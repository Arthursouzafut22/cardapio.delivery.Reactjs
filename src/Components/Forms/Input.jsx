import styles from "../Forms/Input.module.css";

const Input = ({
  label,
  value,
  type,
  name,
  id,
  onChange,
  placeholder,
  ...resto
}) => {
  return (
    <>
      <label htmlFor={label}>
        <input
          className={styles.input}
          type={type}
          name={name}
          value={value}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          {...resto}
        />
      </label>
    </>
  );
};

export default Input;
