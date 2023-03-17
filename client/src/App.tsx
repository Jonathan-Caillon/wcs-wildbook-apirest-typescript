import React from "react";
import { Header, Footer } from "./components";
import { WilderGrid } from "./pages";
import "./App.css";
import { WildersProvider } from "./contexts/WilderContext";
const App: React.FC = () => {
  return (
    <WildersProvider>
      <div className="App">
        <Header />
        <WilderGrid />
        <Footer />
      </div>
    </WildersProvider>
  );
};

export default App;
