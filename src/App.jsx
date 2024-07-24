import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { ProdoctStorage } from "./Hooks/UseContextProduct";

function App() {
  return (
    <>
      <ProdoctStorage>
        <Header />
        <Main />
        <Footer/>
      </ProdoctStorage>
    </>
  );
}

export default App;
