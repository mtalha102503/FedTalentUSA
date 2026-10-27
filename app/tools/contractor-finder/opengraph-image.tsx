import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function FinderOgImage() {
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
            FedTalentUSA
          </span>
          <span
            style={{
              marginLeft: 20,
              fontSize: 20,
              color: "#93c5fd",
            }}
          >
            Tools — Contractor Finder
          </span>
        </div>
        <div
          style={{
            fontSize: 54,
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: 1056,
          }}
        >
          Find federal contractors by state, agency &amp; industry
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 96,
              height: 8,
              background: "#2f6df6",
              borderRadius: 4,
            }}
          />
          <span style={{ marginLeft: 16, fontSize: 22, color: "#cbd5e1" }}>
            Real USAspending.gov data · fedtalentusa.com
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
