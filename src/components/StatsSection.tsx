
import { useState, useEffect, useRef } from 'react';
import { Award, Users, Briefcase, Heart } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    designs: 0,
    awards: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    projects: 150,
    clients: 89,
    designs: 320,
    awards: 25
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

        setCounts({
          projects: Math.floor(finalCounts.projects * easeProgress),
          clients: Math.floor(finalCounts.clients * easeProgress),
          designs: Math.floor(finalCounts.designs * easeProgress),
          awards: Math.floor(finalCounts.awards * easeProgress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: Briefcase,
      count: counts.projects,
      label: "Projects Completed",
      color: "text-blue-500",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: Users,
      count: counts.clients,
      label: "Happy Clients",
      color: "text-green-500",
      bgColor: "bg-green-500/20"
    },
    {
      icon: Heart,
      count: counts.designs,
      label: "Designs Created",
      color: "text-pink-500",
      bgColor: "bg-pink-500/20"
    },
    {
      icon: Award,
      count: counts.awards,
      label: "Awards Won",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/20"
    }
  ];

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            By the <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Years of dedication to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                {/* Icon Container */}
                <div className={`w-20 h-20 mx-auto rounded-full ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                
                {/* Floating Effect */}
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-20"></div>
              </div>

              {/* Counter */}
              <div className={`text-5xl font-bold ${stat.color} mb-2 font-mono`}>
                {stat.count}+
              </div>

              {/* Label */}
              <div className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary h-1 rounded-full mt-4 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${stat.color.replace('text-', 'from-')} to-primary transition-all duration-2000 ease-out`}
                  style={{
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
            <h3 className="text-2xl font-bold mb-2 text-gradient">5+ Years</h3>
            <p className="text-muted-foreground">Professional Experience</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
            <h3 className="text-2xl font-bold mb-2 text-gradient">99%</h3>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
            <h3 className="text-2xl font-bold mb-2 text-gradient">24/7</h3>
            <p className="text-muted-foreground">Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
