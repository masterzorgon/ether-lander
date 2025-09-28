import fetch from "node-fetch";

const POSTHOG_API_KEY = process.env.POSTHOG_API_KEY!;
const POSTHOG_PROJECT_ID = process.env.POSTHOG_PROJECT_ID!;
const REFERRAL_EVENT = "referral_click"; 
const SALT = process.env.NEXT_PUBLIC_RS!;

function decodeWalletAddress(encodedAddress: string): string | null {
    try {
        if (!SALT) throw new Error("Missing NEXT_PUBLIC_RS env var");

        let base64 = encodedAddress.replace(/-/g, "+").replace(/_/g, "/");
        const padding = (4 - (base64.length % 4)) % 4;
        base64 = base64.padEnd(base64.length + padding, "=");

        const encodedBuffer = Buffer.from(base64, "base64");
        const decodedBuffer = Buffer.alloc(encodedBuffer.length);

        for (let i = 0; i < encodedBuffer.length; i++) {
            decodedBuffer[i] = encodedBuffer[i]! ^ SALT.charCodeAt(i % SALT.length);
        }

        return decodedBuffer.toString("utf8");
    } catch {
        return null;
    }
}

async function getReferralEvents(): Promise<any[]> {
    const url = `https://app.posthog.com/api/projects/${POSTHOG_PROJECT_ID}/events/?event=${REFERRAL_EVENT}`;
    const resp = await fetch(url, {
        headers: { Authorization: `Bearer ${POSTHOG_API_KEY}` },
    });

    if (!resp.ok) throw new Error(`PostHog error: ${resp.statusText}`);
    const data = await resp.json() as { results?: any[] };
    return data.results || [];
}

async function resolveSolDomain(wallet: string) {
    try {
        const resp = await fetch(
            `https://sns-api.bonfida.org/resolve/${wallet}`
        );
        if (!resp.ok) return null;
        const json = await resp.json() as { domain?: string };
        return json.domain || null;
    } catch {
        return null;
    }
}

(async () => {
    console.log("pull referrals from posthog...");
    const events = await getReferralEvents();

    for (const ev of events) {
        const encoded = ev.properties?.encodedAddress;
        if (!encoded) continue;

        const wallet = decodeWalletAddress(encoded);
        if (!wallet) continue;

        const solDomain = await resolveSolDomain(wallet);

        console.log({
            encoded,
            wallet,
            solDomain: solDomain || "N/A",
        });
    }
})();
