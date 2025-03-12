import React from "react";

const Header = () => {
  return (
    <header className="bg-purple-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Vexo Login</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="/" className="hover:underline">Minha Vexo</a></li>
          <li><a href="/contratos" className="hover:underline">Meus contratos</a></li>
          <li><a href="/dados" className="hover:underline">Dados cadastrais</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;