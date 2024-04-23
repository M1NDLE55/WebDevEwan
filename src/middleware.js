import { NextResponse } from "next/server";

export function middleware(request) {
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname === "/maintenance"
  ) {
    return NextResponse.next();
  }

  const maintenanceUrl = request.nextUrl.clone();
  maintenanceUrl.pathname = "/maintenance";
  return NextResponse.redirect(maintenanceUrl);
}
