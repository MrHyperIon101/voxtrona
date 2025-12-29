import { NextRequest, NextResponse } from "next/server";
import { addSupportTicket, listSupportTickets, updateSupportTicket } from "@/lib/store";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { email, subject, category, message } = body || {};
    if (!email || !subject || !message) {
      return NextResponse.json({ error: "email, subject and message are required" }, { status: 400 });
    }
    const ua = req.headers.get("user-agent") || undefined;
    const rec = await addSupportTicket({ email, subject, category, message, userAgent: ua });
    return NextResponse.json({ ok: true, id: rec.id, createdAt: rec.createdAt, status: rec.status });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to create support ticket" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const adminKey = process.env.ADMIN_KEY;
    const key = searchParams.get("key");
    const email = searchParams.get("email") || undefined;

    if (!email && (!adminKey || key !== adminKey)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const items = await listSupportTickets(email ? { email } : undefined);
    return NextResponse.json({ items });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to fetch tickets" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const adminKey = process.env.ADMIN_KEY;
    const { searchParams } = new URL(req.url);
    const key = searchParams.get("key");
    if (!adminKey || key !== adminKey) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json().catch(() => ({}));
    const { id, status } = body || {};
    if (!id || !status) {
      return NextResponse.json({ error: "id and status are required" }, { status: 400 });
    }
    const updated = await updateSupportTicket(id, { status });
    if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ ok: true, item: updated });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to update ticket" }, { status: 500 });
  }
}
