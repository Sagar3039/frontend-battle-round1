
import { useState, useEffect } from 'react';
import { ArrowRight, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 animate-gradient"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {i % 3 === 0 && <div className="w-8 h-8 border-2 border-primary"></div>}
            {i % 3 === 1 && <div className="w-6 h-6 rounded-full bg-accent"></div>}
            {i % 3 === 2 && <div className="w-4 h-8 bg-primary transform rotate-45"></div>}
          </div>
        ))}
      </div>

      {/* Mouse Follower Effect */}
      <div
        className="fixed w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none z-10 transition-all duration-1000"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Creative</span>
            <br />
            <span className="text-foreground">Frontend</span>
            <br />
            <span className="text-gradient">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting beautiful, interactive experiences with modern web technologies. 
            Specializing in animations, UI/UX design, and creative frontend solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Skills Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['React', 'TypeScript', 'Three.js', 'GSAP', 'Tailwind CSS', 'Next.js'].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium glass-effect hover:bg-primary/20 transition-colors cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
