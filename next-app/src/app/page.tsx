import { Container } from "@/components/ui/container";
import {
  HeroSection,
  SlideBackdrop,
  SlideFooter,
  SlideHeader,
} from "@/features/landing-page";

/**
 * Figma node 2:2 — Landing Page route.
 * Composition only: the feature owns every piece of markup below.
 */
export default function Home() {
  return (
    <div className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-background">
      <SlideBackdrop />

      <div className="relative z-10 flex flex-1 flex-col">
        <Container>
          <SlideHeader />
        </Container>

        {/* 2:29 Main Slide Presentation Canvas */}
        <main className="flex flex-1 flex-col justify-center px-6 py-16 sm:px-12 lg:px-[192px] lg:pt-[93.69px] lg:pb-[93.68px]">
          <Container size="canvas">
            <HeroSection />
          </Container>
        </main>

        <Container>
          <SlideFooter />
        </Container>
      </div>
    </div>
  );
}