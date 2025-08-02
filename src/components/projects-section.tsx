import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'LeafCare 🌱',
    description: 'A Flutter app to analyze plant images and provide real-time disease predictions using a CNN model deployed via a Django REST API.',
    image: 'https://placehold.co/600x400.png',
    link: 'https://github.com/Vivek-Jadhav27/LeafCare',
    tags: ['Flutter', 'Supabase', 'Django', 'TensorFlow', 'Keras'],
    dataAiHint: 'plant disease detection'
  },
  {
    title: 'Tripeaze ✈️',
    description: 'A trip planner app using Flutter and Firebase for authentication, with a Django API backend to generate itineraries.',
    image: 'https://placehold.co/600x400.png',
    link: 'https://github.com/Vivek-Jadhav27/Tripeaze',
    tags: ['Flutter', 'Firebase', 'Django'],
    dataAiHint: 'travel itinerary planner'
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Projects</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Creative Work</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the personal and professional projects I've worked on.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover aspect-video"
                  data-ai-hint={project.dataAiHint}
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
