import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function RootOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#071228",
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: 34,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            FedTalent<span style={{ color: "#3b82f6" }}>USA</span>
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#ffffff",
            }}
          >
            Top Federal Contractors, Ranked by Real Contract Data
          </span>
          <span style={{ fontSize: 26, color: "#94a3b8" }}>
            1,000 largest U.S. federal contractors · FY2025 obligations ·
            USAspending.gov
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
