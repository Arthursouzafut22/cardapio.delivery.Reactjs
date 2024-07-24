import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./styles/ButtonControls.module.css";

const ButtonControls = () => {
  return (
    <span className={styles.controls}>
      <FaMinus style={{ fontSize: "18px", cursor: "pointer" }} />
      <input type="number" name="number" id="number" value={1} />
      <FaPlus style={{ fontSize: "18px", color: "red", cursor: "pointer" }} />
    </span>
  );
};

export default ButtonControls;
