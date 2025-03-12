import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Login = () => {
  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="Digite seu email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Senha</label>
                <input type="password" className="w-full p-2 border rounded" placeholder="Digite sua senha" />
              </div>
              <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700">Entrar</button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
};

export default Login;