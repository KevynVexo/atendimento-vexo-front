import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Inicio"/>
      <main className="flex-grow flex items-center justify-center bg-gray-100">
      </main>
      <Footer />
    </div>
  );
};

export default App;