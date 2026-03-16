"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutContent } from "@/components/about/AboutContent";
import { TimelineDemo } from "@/components/about/TimelineDemo";
import { DirectorMessage } from "@/components/about/DirectorMessage";
import { MissionSection } from "@/components/about/MissionSection";
import { WobbleCardDemo } from "@/components/about/WobbleCardDemo";
import { VisionSection } from "@/components/about/VisionSection"
import { WorldMapDemo } from "@/components/contact/WorldMapDemo";
import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
import { CertificateIso} from "@/components/about/CertificateIso"
import { IsoFile } from "@/components/about/Iso"

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <DirectorMessage/>
      <MissionSection/>
      <VisionSection/>
      <BackgroundBoxesDemo/>
      <TimelineDemo />
      <CertificateIso />
      <IsoFile />
    </main>
  );
}