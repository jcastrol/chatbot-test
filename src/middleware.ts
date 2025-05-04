import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/login"];
export function middleware(req: NextRequest) {
  // NOTA: Este método NO es 100% confiable porque el middleware se ejecuta en el servidor

  const token =
    req.cookies.get("user")?.value || req.headers.get("x-token") || ""; // Añadir algún método para obtener el token del cliente

  const { pathname } = req.nextUrl;
  

  const isPublic = PUBLIC_PATHS.includes(pathname);

  if (pathname === "/" && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname === "/" && token) {
    return NextResponse.redirect(new URL("/chats", req.url));
  }

  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get('user')?.value
//   const path = req.nextUrl.pathname

//   const isPublic = PUBLIC_PATHS.includes(path)

//   if (token && path === '/login') {
//     return NextResponse.redirect(new URL('/chats', req.url))
//   }

//   if (!token && !isPublic) {
//     return NextResponse.redirect(new URL('/login', req.url))
//   }

//   return NextResponse.next()
// }

export const config = {
  //matcher: "/:path*",
  matcher: ["/", "/login", "/chats/:path*", "/chats"],
};
