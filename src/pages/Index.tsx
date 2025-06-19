
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowRight, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import HeroSection from '@/components/HeroSection';
import LoaderAnimation from '@/components/LoaderAnimation';
import ProjectShowcase from '@/components/ProjectShowcase';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    // Create a simple CV download functionality
    const link = document.createElement('a');
    link.href = '#'; // In a real app, this would be a CV file URL
    link.download = 'Sagar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('CV download functionality would work here with a real CV file!');
  };

  const openSocialLink = (platform: string) => {
    const urls = {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:sagar@example.com'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  if (isLoading) {
    return <LoaderAnimation />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            Sagar's Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('stats')} className="hover:text-primary transition-colors">
              Stats
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
              Contact
            </button>
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('projects')} className="block hover:text-primary transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('stats')} className="block hover:text-primary transition-colors">
                Stats
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block hover:text-primary transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="block hover:text-primary transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <HeroSection onDownloadCV={downloadCV} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <ProjectShowcase />
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20">
        <StatsSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <TestimonialsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-gradient mb-4">
            Sagar's Portfolio
          </div>
          <p className="text-muted-foreground mb-4">
            Creating beautiful, functional designs that make an impact.
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <Button variant="ghost" size="sm" onClick={() => openSocialLink('github')}>
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => openSocialLink('linkedin')}>
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => openSocialLink('twitter')}>
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => openSocialLink('email')}>
              <Mail className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Sagar's Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
