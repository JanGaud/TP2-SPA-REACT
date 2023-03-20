// import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import MesProduits from "./components/MesProduits/MesProduits";
import "./App.css";

function App() {
  return (
    <>
    <Nav />
    <div>
      <div className="app-wrapper">
          <MesProduits />
      </div>
    </div>
    </>
  );
}

export default App;
