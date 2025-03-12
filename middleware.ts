import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value; // Pegando o token dos cookies

  // Se o usuário tentar acessar a página inicial sem um token, redireciona para login
  if (!token && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next(); // Permite que a requisição continue normalmente
}

// Definir quais rotas o middleware deve monitorar
export const config = {
  matcher: ["/"], // Apenas protege a página inicial, adicione outras rotas conforme necessário
};
