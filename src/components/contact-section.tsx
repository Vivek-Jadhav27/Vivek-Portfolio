import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Github, Download, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Contact</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Get In Touch</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out.
          </p>
        </div>
        <div className="mx-auto max-w-4xl mt-12">
            <Card className="shadow-lg">
                <CardContent className="p-6 grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Contact Details</h3>
                        <div className="space-y-3 text-muted-foreground">
                            <a href="tel:+919016175843" className="flex items-center gap-3 transition-colors hover:text-primary">
                                <Phone className="h-5 w-5" />
                                <span>+91 9016175843</span>
                            </a>
                            <a href="mailto:vcjadhav27@gmail.com" className="flex items-center gap-3 transition-colors hover:text-primary">
                                <Mail className="h-5 w-5" />
                                <span>vcjadhav27@gmail.com</span>
                            </a>
                             <a href="https://linkedin.com/in/vivekjadhav27" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/Vivek-Jadhav27" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary">
                                <Github className="h-5 w-5" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start space-y-4">
                         <h3 className="text-xl font-semibold">My Resume</h3>
                         <p className="text-muted-foreground text-left">Looking for more details? Download my resume to see my full professional history and skills.</p>
                         <Button asChild>
                            <a href="https://drive.google.com/file/d/1FfcwvpVVyPcl2FkY2LnPXsfIjp0gv8qO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <Download className="mr-2 h-4 w-4" />
                                View Resume
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
