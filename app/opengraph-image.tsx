import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, backgroundColor: "#2D2923", color: "#FFF8EE" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, fontWeight: 700 }}><span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, border: "2px solid #CB913C", borderRadius: 32 }}>OM</span> OM Billiard</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}><div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>Make room for the game.</div><div style={{ fontSize: 26, color: "#E1D2BC" }}>Pool tables · Cues · Billiard equipment · Services</div></div>
      <div style={{ width: 190, height: 7, borderRadius: 7, background: "#CB913C" }} />
    </div>,
    size,
  );
}
