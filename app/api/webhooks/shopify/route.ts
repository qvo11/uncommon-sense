import { revalidateTag } from "next/cache";
import { headers } from "next/headers";
import crypto from "crypto";

export async function POST(req: Request) {
    const body = await req.text();
    const headersList = await headers();
    const hmac = headersList.get("X-Shopify-Hmac-Sha256");

    const hash = crypto
        .createHmac("sha256", process.env.SHOPIFY_WEBHOOK_SECRET!)
        .update(body, "utf8")
        .digest("base64");

    if (hash !== hmac) {
        return new Response("Unauthorized", { status: 401 });
    }

    revalidateTag("shopify-products");

    return new Response('Revalidated', { status: 200 });
}