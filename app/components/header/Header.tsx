import React from "react";
import "../../styles/global.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-purple-600 text-white p-4 flex justify-between items-center">
      <nav>
        <ul className="flex gap-4">
          <li><a href="/" className="hover:underline">Minha Vexo</a></li>
          <li><a href="/contratos" className="hover:underline">Meus contratos</a></li>
          <li><a href="/dados" className="hover:underline">Dados cadastrais</a></li>
        </ul>
      </nav>
      <h1 className="text-lg font-bold text-primary-purple-default">{title}</h1>
    </header>
  );
};

export default Header;
