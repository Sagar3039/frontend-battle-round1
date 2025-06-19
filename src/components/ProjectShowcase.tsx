
import { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Showcase Work",
      description: "Interactive UI/UX animations with stunning visual effects",
      category: "Animation",
      technologies: ["React", "GSAP", "Three.js"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Striking Visual",
      description: "Artistic rendering and creative transformations",
      category: "Design",
      technologies: ["WebGL", "Canvas", "CSS"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Scroll & Pop-up",
      description: "Smooth scroll interactions with elegant popup modals",
      category: "Interaction",
      technologies: ["JavaScript", "CSS", "Intersection Observer"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Parallax Animation",
      description: "Multi-layered parallax effects with smooth transitions",
      category: "Animation",
      technologies: ["React", "Framer Motion", "CSS"],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore my latest work in frontend development, UI/UX design, and creative web experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 cursor-pointer"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden h-64">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
              
              {/* Play Button Overlay */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
                  <Button size="lg" className="rounded-full bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30">
                    <Play className="h-6 w-6 text-white" />
                  </Button>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-sm font-medium text-white">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  Source
                </Button>
              </div>
            </div>

            {/* Hover Effect Particles */}
            {hoveredProject === project.id && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center mt-12">
        <Button size="lg" variant="outline" className="px-8 py-4">
          View All Projects
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectShowcase;
