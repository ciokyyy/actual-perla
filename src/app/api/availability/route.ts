import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { checkIn, checkOut } = body;

    if (!checkIn || !checkOut) {
      return NextResponse.json(
        { ok: "false", mesaj: "Missing checkIn or checkOut" },
        { status: 400 }
      );
    }

    const response = await fetch("https://www.5stardesk.ro/apih.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        t1: process.env.STARDESK_T1,
        t: process.env.STARDESK_T,
        actiune: "get_avail",
        checkin: checkIn,
        checkout: checkOut,
      }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { ok: "false", mesaj: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
