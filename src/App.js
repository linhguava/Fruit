import { render } from "@testing-library/react";
import "./App.css";
import AppBar from "./component/AppBar";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
