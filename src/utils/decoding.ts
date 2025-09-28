export function decodeWalletAddress(encodedAddress: string): string | null {
    try {
        const salt = process.env.NEXT_PUBLIC_RS;
        if (!salt) {
            throw new Error("NEXT_PUBLIC_RS environment variable is required");
        }

        // Normalize base64 (handle URL-safe variants and padding)
        let base64 = encodedAddress
            .replace(/-/g, "+")
            .replace(/_/g, "/");
        const padding = (4 - (base64.length % 4)) % 4;
        base64 = base64.padEnd(base64.length + padding, "=");

        // Decode from base64
        const encodedBuffer = Buffer.from(base64, "base64");

        // XOR with salt
        const decodedBuffer = Buffer.alloc(encodedBuffer.length);
        for (let i = 0; i < encodedBuffer.length; i++) {
            decodedBuffer[i] = encodedBuffer[i]! ^ salt.charCodeAt(i % salt.length);
        }

        return decodedBuffer.toString("utf8");
    } catch {
        return null;
    }
}