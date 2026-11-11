import { Container } from "@/components/ui/container";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  SiteFooter,
  SiteNav,
  SkillsSection,
} from "@/features/portfolio";

/** Figma node 1:600 — Portfolio route. Composition only. */
export default function PortfolioPage() {
  return (
    <div className="relative flex min-h-dvh w-full flex-col bg-background">
      <Container className="flex flex-1 flex-col px-6">
        <SiteNav />

        <main className="flex flex-1 flex-col">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <SiteFooter />
      </Container>
    </div>
  );
}