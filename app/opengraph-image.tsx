import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ByteCodex — Convertimos tu tiempo en software.";

export default function OpengraphImage() {
  const logoBuffer = readFileSync(join(process.cwd(), "public", "logo-icon.png"));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121212",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#1e1e1e",
            border: "4px solid #d4ff00",
            padding: 20,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={140} height={145} alt="" />
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            padding: "0 60px",
            textTransform: "uppercase",
          }}
        >
          Convertimos tu tiempo en software.
        </div>
        <div style={{ marginTop: 20, fontSize: 26, color: "#d4ff00", letterSpacing: 2 }}>
          BYTECODEX // SOFTWARE DEVELOPMENT
        </div>
      </div>
    ),
    { ...size }
  );
}
