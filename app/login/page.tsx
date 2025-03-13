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
           <div className="flex-estrutura-divisao">
              {/* Formulário de Login */}
              <div>
                  <div className="bg-white p-8 rounded-lg shadow-md w-96 flex-form-login">
                    <form>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium labelemailsenha">Email</label>
                        <input 
                          type="email" 
                          className="campo-formulario campo-login-senha"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium labelemailsenha">Senha</label>
                        <input 
                          type="password" 
                          className="campo-formulario campo-login-senha"
                        />
                      </div>
                      <div>
                        <a href="#" className="text-purple-800 text-sm block mb-4  forgot-password">Esqueci minha senha</a>
                        <button 
                          type="submit" 
                          className="botaoLogin">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="register">
                    <div className="createAccountDiv">
                      <a href="#" className="block text-center mt-4 text-purple-800 font-medium createaccount">Criar conta</a>
                    </div>
                  </div>
                </div>
              {/* Ilustração */}
              <div className="hidden md:block">
                <img src="images/image-door.webp" alt="Ilustração" className="max-w-xs"/>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
