export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { checkIn, checkOut } = body;

    if (!checkIn || !checkOut) {
      return new Response(
        JSON.stringify({ ok: "false", mesaj: "Missing checkIn or checkOut" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const response = await fetch("https://www.5stardesk.ro/apih.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        t1: env.STARDESK_T1,
        t: env.STARDESK_T,
        actiune: "get_avail",
        checkin: checkIn,
        checkout: checkOut,
      }),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: "false", mesaj: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
