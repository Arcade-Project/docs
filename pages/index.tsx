import { Button, GuiderLayout } from "@neato/guider/client";
import { Home } from "../components/home";
import { HomeCard, HomeCardContainer } from "../components/home-card";

interface Project {
  href: string;
  icon: string;
  title: string;
  description: string;
}

export default function LandingPage() {
  const projects: Project[] = [
    {
      title: "Arcade DB",
      description: "Simple, accessible OSINT software.",
      href: "/arcade-db/",
      icon: "gravity-ui:database-magnifier",
    },
  ];
  return (
    <GuiderLayout meta={{ layout: "page" }}>
      <Home.Container>
        <Home.Title>Arcade Project.</Home.Title>
        <Home.Subtitle>
          An organization that creates tools to improve the web.
        </Home.Subtitle>
        <HomeCardContainer>
          {projects.map((v) => (
            <HomeCard.Card
              key={v.href}
              icon={v.icon}
              right={
                <Button to={v.href} type="secondary">
                  View project
                </Button>
              }
            >
              <HomeCard.Title href={v.href}>{v.title}</HomeCard.Title>
              <HomeCard.Description>{v.description}</HomeCard.Description>
            </HomeCard.Card>
          ))}
        </HomeCardContainer>
      </Home.Container>
    </GuiderLayout>
  );
}
