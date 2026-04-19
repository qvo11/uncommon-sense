import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

export async function POST(req: NextRequest) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const server = process.env.MAILCHIMP_SERVER_PREFIX;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !server || !audienceId) {
    return NextResponse.json(
      { error: "Mailchimp is not configured" },
      { status: 500 }
    );
  }

  mailchimp.setConfig({ apiKey, server });

  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    await mailchimp.lists.addListMember(audienceId, {
      email_address: email,
      status: "subscribed",
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    // Mailchimp SDK throws objects, not Error instances
    const detail =
      err instanceof Error
        ? err.message
        : (err as { response?: { body?: { detail?: string } } })?.response?.body?.detail ?? "Failed to subscribe";
    return NextResponse.json({ error: detail }, { status: 500 });
  }
}
