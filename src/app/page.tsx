
'use client';
import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';
import { getSkills, getProjects, getExperience, type SkillCategory, type Project, type Education, type Experience as ExperienceType } from '@/lib/data';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { seedDatabase } from '@/lib/seed';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const [skills, setSkills] = useState<SkillCategory[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experience, setExperience] = useState<(ExperienceType | Education)[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchData() {
      const skillsData = await getSkills();
      setSkills(skillsData);
      const projectsData = await getProjects();
      setProjects(projectsData);
      const experienceData = await getExperience();
      setExperience(experienceData);
    }
    fetchData();
  }, []);

  const handleSeed = async () => {
    const response = await seedDatabase();
    if (response.success) {
      toast({
        title: "Success!",
        description: response.message,
      });
      // Optionally refresh data
      const skillsData = await getSkills();
      setSkills(skillsData);
      const projectsData = await getProjects();
      setProjects(projectsData);
      const experienceData = await getExperience();
      setExperience(experienceData);
    } else {
      toast({
        title: "Error",
        description: response.message,
        variant: "destructive",
      });
    }
  };

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
       <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={handleSeed}>Seed Database</Button>
      </div>
    </div>
  );
}
