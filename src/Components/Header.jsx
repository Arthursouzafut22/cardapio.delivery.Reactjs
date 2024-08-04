import styles from "../Components/styles/Header.module.css";
import Logo from "../assets/logoCardapio.png";
import {
  FaCircleExclamation,
  FaLocationCrosshairs,
  FaSquareWhatsapp,
} from "react-icons/fa6";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src={Logo} alt="logo" />
          <div className={styles.info}>
            <p>Pytter Burguer</p>
            <FaCircleExclamation
              style={{ fontSize: "23px", cursor: "pointer" }}
            />
            <FaLocationCrosshairs style={{ fontSize: "23px", color: "red" }} />
          </div>
        </div>
        <FaSquareWhatsapp
          className={styles.whatsapp}
          style={{ color: "black", marginTop: "60px", fontSize: "35px" }}
        />
      </div>
    </header>
  );
};

export default Header;
