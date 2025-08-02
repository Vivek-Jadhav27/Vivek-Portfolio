import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Globe, Brush, BrainCircuit } from 'lucide-react';
import type { ReactElement } from 'react';

const skills: { [key: string]: string[] } = {
  "Languages & Frameworks": ["Java", "Python", "Dart", "Flutter", "Django", "SQL", "HTML", "CSS"],
  "Libraries": ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib", "Seaborn"],
  "Tools & Technologies": ["Firebase", "Supabase", "Git", "REST APIs", "PowerBI"],
  "Core Competencies": ["DSA", "ML Integration", "Backend Engineering", "Real-time Data Handling"]
};

const icons: { [key: string]: ReactElement } = {
  "Languages & Frameworks": <Code className="w-6 h-6 text-primary" />,
  "Libraries": <Globe className="w-6 h-6 text-primary" />,
  "Tools & Technologies": <Database className="w-6 h-6 text-primary" />,
  "Core Competencies": <BrainCircuit className="w-6 h-6 text-primary" />
};

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Skills</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Technical Proficiencies</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A snapshot of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                {icons[category]}
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
