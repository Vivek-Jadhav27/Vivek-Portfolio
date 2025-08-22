
import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';
import { getSkills, getProjects, getExperience } from '@/lib/data';

export default async function Home() {
  const skills = await getSkills();
  const projects = await getProjects();
  const experience = await getExperience();

  return (
    <div className="flex flex-col min-h-dvh">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection items={experience} />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
