import { request } from "../services/request";  // Importe a função de request

class UserService {
  // Método para realizar login
  static async login(login: string, password: string) {
    try {
      const response = await request("/user/login", "POST", JSON.stringify({ login, password }));

      // Aqui, você pode tratar a resposta, como armazenar tokens ou redirecionar, etc.
      if (response.ok) {
        alert("login feito com sucesso");
      } else {
        console.error("Falha no login", response.data);
      }
    } catch (error) {
      console.error("Erro no processo de login", error);
      throw error;
    }
  }
}

export default UserService;
