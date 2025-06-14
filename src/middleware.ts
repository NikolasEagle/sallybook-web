import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { cookies } from "next/headers";

async function checkAuth(): Promise<boolean> {
  const url = `http://${process.env.NEXT_PUBLIC_HOST_SERVER_AUTH}:${process.env.NEXT_PUBLIC_PORT_SERVER_AUTH}/check_auth`;

  const nextCookies = await cookies();

  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: { Cookie: `session_id=${nextCookies.get("session_id")?.value}` },
    });

    if (response.status === 200) {
      return true;
    }

    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const isAuth = await checkAuth();

  const { pathname } = request.nextUrl;

  const regex = new RegExp(`^\/login|register`);

  if (!isAuth) {
    if (regex.test(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (regex.test(pathname) || pathname === "/") {
    const homeURL = new URL("/home", request.url);
    homeURL.searchParams.set("pageId", "1");
    homeURL.searchParams.set("query", "");
    return NextResponse.redirect(homeURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/home",
    "/bookPage",
    "/reader",
    "/profile",
    "/settings",
  ],
};
