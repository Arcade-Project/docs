import {
  Button,
  Card,
  CardGrid,
  GuiderLayout,
  Hero,
  Frame,
} from "@neato/guider/client";

export default function LandingPage() {
  return (
    <GuiderLayout meta={{ layout: "page" }}>
      <h1 style={{ fontSize: "2rem", color: "#fff", fontWeight: "bold" }}>
        Development status
      </h1>
    </GuiderLayout>
  );
}
