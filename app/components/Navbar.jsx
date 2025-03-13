"use client"

import "../styles/navbar.css";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Ícones do Lucide React

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Botão do Menu (Hambúrguer ou X) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-md shadow-md itemNav"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Dropdown (Aparece e desaparece no clique) */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-[#550C55] text-white shadow-lg flex flex-col items-start p-6 gap-4 transition-transform itemNav">
          <ul className="w-full">
            <li className="py-2 border-b border-white">
              <a href="/" className="block w-full hover:underline">Minha Vexo</a>
            </li>
            <li className="py-2 border-b border-white">
              <a href="/contratos" className="block w-full hover:underline">Meus contratos</a>
            </li>
            <li className="py-2">
              <a href="/dados" className="block w-full hover:underline">Dados cadastrais</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
