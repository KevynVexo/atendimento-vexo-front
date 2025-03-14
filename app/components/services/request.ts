export async function request(url: string, method: string, body: any) {
    const protocol = window.location.protocol;  // 'http:' ou 'https:'
    const hostname = window.location.hostname;  // 'localhost' ou 'example.com'
    const baseUrl = (hostname === 'localhost') ? `${protocol}//${hostname}:3000` : `${protocol}//${hostname}`;
    try {
      const response = await fetch(baseUrl+url, {
        method: method,
        headers: {
          "Content-Type": "application/json", // Certifique-se de que isso está aqui se for necessário
        },
        body: body,
        mode: 'cors', // Configuração para indicar que a requisição é CORS
      });
  
      const data = await response.json();
  
      // Verifica se a resposta foi OK, se não, lança um erro com o status adequado
      if (!response.ok) {
        // Caso 400 - Bad Request
        if (response.status === 400) {
          throw new Error(`Bad Request: ${data.message || "Requisição inválida."}`);
        }
        // Caso 401 - Unauthorized
        if (response.status === 401) {
          throw new Error(`Unauthorized: ${data.message || "Você não tem permissão para acessar este recurso."}`);
        }
        // Caso 500 - Internal Server Error
        if (response.status === 500) {
          throw new Error(`Internal Server Error: ${data.message || "Erro no servidor."}`);
        }
        // Caso 502 - Bad Gateway
        if (response.status === 502) {
          throw new Error(`Bad Gateway: ${data.message || "Erro no servidor intermediário."}`);
        }
  
        // Para outros códigos de erro, pode-se lançar o erro genérico
        throw new Error(data.message || "Ocorreu um erro desconhecido.");
      }
  
      return { data, ok: response.ok };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message || "Ocorreu um erro desconhecido.");
      } else {
        throw new Error("Ocorreu um erro desconhecido.");
      }
    }
  }
  