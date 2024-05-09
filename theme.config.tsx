import {
  site,
  group,
  separator,
  defineTheme,
  directory,
  siteTemplate,
  social,
  link,
  type SiteComponent,
} from "@neato/guider/theme";
import { Logo } from "./components/Logo";

const template = siteTemplate({
  github: "Arcade-Project/docs",
  dropdown: [link("en", "/"), link("fr", "/fr/")],
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
    backgroundPattern: "flare",
    logo: () => <Logo />,
  },
  contentFooter: {
    editRepositoryBase: "https://github.com/Arcade-Project/docs",
    socials: [
      social.discord("https://discord.gg/aSkS8yw4d9"),
      social.github("https://github.com/Arcade-Project"),
    ],
  },
  meta: {
    titleTemplate: "%s - Arcade-DB",
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.png",
      },
    ],
  },
});

export default defineTheme([
  site("main", {
    extends: [template],
    directories: [
      directory("main", {
        sidebar: [],
      }),
    ],
  }),
  site("en", {
    extends: [template],
    directories: [
      directory("en", {
        sidebar: [
          group("Getting started", [link("Welcome", "/arcade-db/welcome")]),
          separator(),
          group("Docs", [
            link.nested("Backend", [
              link("Websocket", "/arcade-db/backend/websocket"),
            ]),
            link.nested("Frontend", [
              link("Websocket", "/arcade-db/frontend/websocket"),
              link("Search Bar", "/arcade-db/frontend/components/search-bar"),
            ]),
          ]),
        ],
      }),
    ],
  }),
  site("fr", {
    extends: [template],
    directories: [
      directory("fr", {
        sidebar: [
          group("Getting started", [link("Welcome", "/fr/welcome")]),
          separator(),
          group("Docs", [
            link.nested("Backend", [
              link("Websocket", "/fr/backend/websocket"),
            ]),
            link.nested("Frontend", [
              link("Websocket", "/fr/frontend/websocket"),
            ]),
          ]),
        ],
      }),
    ],
  }),
]);
