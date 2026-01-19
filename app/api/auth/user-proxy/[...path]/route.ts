import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleProxy(request, params.path);
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleProxy(request, params.path);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleProxy(request, params.path);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  return handleProxy(request, params.path);
}

async function handleProxy(request: NextRequest, path: string[]) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // Check if user is authenticated (any role is fine for user routes)
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If authenticated, proceed to the actual user route
  const userPath = `/user/${path.join("/")}`;
  return NextResponse.rewrite(new URL(userPath, request.url));
}
