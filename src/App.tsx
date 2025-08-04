import { displayPartsToString } from "typescript";
import "./App.css";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Header from "./Components/Header";

const styles = {
  textOfertas: {
    width: "693px",
    margin: "23px auto",
    // boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
  },
  ofertas: {
    display: "flex",
    marginTop: "34px",
  },
};

function App() {
  return (
    <div>
      <Header />
      <Banner />

      <div style={styles.textOfertas}>
        <div>
          <strong>Ofertas especiais</strong>
          <br />
          <span>Os melhores preços</span>
        </div>

        <div style={styles.ofertas}>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
