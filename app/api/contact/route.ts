import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  // TODO: Connect to the approved email/CRM provider.
  console.log("Contact inquiry received:", body);
  return NextResponse.json({ ok: true });
}
