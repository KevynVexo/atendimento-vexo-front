import { request } from "../services/request";  // Importe a função de request

class UserService {
  // Método para realizar login
  static async login(login: string, password: string) {
    try {
      const response = await request("/user/login", "POST", JSON.stringify({ login, password }));

      // Aqui, você pode tratar a resposta, como armazenar tokens ou redirecionar, etc.
      if (response.ok) {
        return {data:response.data,ok:response.ok};
      } else {
        console.error("Falha no login", response.data);
        return {msg:"Erro: "+response.data,ok:response.ok};
      }
    } catch (error) {
      console.error("Erro no processo de login", error);
      return {msg:"Erro: "+error,ok:false};
    }
  }
}

export default UserService;
