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
      <Hero>
        <Hero.Badge title="not released" to="/docs/guider/guides">
          Development has just started!
        </Hero.Badge>
        <Hero.Title>Cross-platform OSINT software</Hero.Title>
        <Hero.Subtitle>
          Quick and easy to use arcade db makes osint accessible.
        </Hero.Subtitle>
        <Hero.Actions>
          <Button to="/welcome">Get started</Button>
          <Button to="https://github.com/mrjvs/neatojs" type="secondary">
            View on GitHub
          </Button>
        </Hero.Actions>
      </Hero>
      <Frame plain={true}>
        <CardGrid>
          <Card icon="mdi-lock-outline" title="Privacy first">
            <p>No data collection, no logs, no email, no username.</p>
            <span style={{ fontSize: "0.8rem" }}>*Only for the pay offer.</span>
          </Card>
          <Card icon="mdi-qqchat" title="Focus on open source">
            We participate in open source by making part of arcade db's source
            code available, and by creating open source OSINT tools.
          </Card>
          <Card icon="mdi-gradient" title="Transparency">
            Transparency is the only way to win the trust of users.
          </Card>
        </CardGrid>
      </Frame>
    </GuiderLayout>
  );
}
