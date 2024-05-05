import {
  site,
  group,
  separator,
  defineTheme,
  directory,
  link,
} from "@neato/guider/theme";
import { Logo } from "./components/Logo";

export default defineTheme({
  github: "arcade-project/arcade-db",
  settings: {
    logo: () => <Logo />,
  },
  directories: [
    directory("main", {
      sidebar: [
        group("Getting started", [link("Welcome", "/welcome")]),
        link("Status", "/status"),
        separator(),
        group("Docs", [
          link.nested("Backend", [link("Websocket", "/backend/websocket")]),
          link.nested("Frontend", [link("Websocket", "/frontend/websocket")]),
        ]),
      ],
      settings: {
        colors: {
          primary: "#A277FF",
          primaryLighter: "#A277FF",
          primaryDarker: "#5607FF",
          background: "#070512",
          backgroundLighter: "#0E0A22",
          backgroundLightest: "#151032",
          backgroundDarker: "#000001",
          line: "#1F1942",
          text: "#7B7599",
          textLighter: "#7C7799",
          textHighlight: "#fff",
        },
      },
    }),
  ],
});
