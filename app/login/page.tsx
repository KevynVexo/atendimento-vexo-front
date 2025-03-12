import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../styles/login.css";
import "../styles/global.css";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header title="Login" />
      <main className="flex-grow flex items-center justify-center">
        <div className="flex flex-wrap justify-between items-center max-w-4xl w-full p-8">
          {/* Formulário de Login */}
          <div className="bg-white p-8 rounded-lg shadow-md w-96 flex-form-login">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  className="campo-formulario campo-login-senha"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium">Senha</label>
                <input 
                  type="password" 
                  className="campo-formulario campo-login-senha"
                />
              </div>
              <div>
                <a href="#" className="text-purple-800 text-sm block mb-4">Esqueci minha senha</a>
                <button 
                  type="submit" 
                  className="w-full bg-purple-800 text-white p-3 rounded-lg text-lg font-semibold hover:bg-purple-900 transition duration-300">
                  Entrar
                </button>
              </div>
            </form>
            <div>
              <a href="#" className="block text-center mt-4 text-purple-800 font-medium">Criar conta</a>
            </div>
          </div>

          {/* Ilustração */}
          <div className="hidden md:block">
            <img src="images/image-door.webp" alt="Ilustração" className="max-w-xs"/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
