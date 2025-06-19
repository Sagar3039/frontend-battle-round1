
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/5"></div>
      
      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Clean typography */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-foreground">Creative</span>
              <br />
              <span className="text-primary">Frontend</span>
              <br />
              <span className="text-foreground">Developer</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful, interactive web experiences with modern technologies and clean design principles.
            </p>
          </div>

          {/* Clean buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-base"
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-base"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Simple skills display */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            {['React', 'TypeScript', 'Three.js', 'GSAP', 'Tailwind CSS', 'Next.js'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary/20 border border-border rounded-full text-sm font-medium text-foreground/80 hover:bg-secondary/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Minimal scroll indicator */}
          <div className="pt-12">
            <div className="w-px h-8 bg-primary/50 mx-auto"></div>
            <p className="text-xs text-muted-foreground mt-3 uppercase tracking-wider">
              Scroll Down
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
