
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content: "Elegant Pro Design transformed our vision into a stunning reality. The attention to detail and creative approach exceeded all our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLab",
      content: "Working with this team was incredible. They delivered a modern, responsive website that perfectly captures our brand identity.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "CreativeHub",
      content: "The animations and user experience are phenomenal. Our conversion rates increased by 40% after the redesign.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gradient-to-br from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from the clients who've experienced our work firsthand.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="relative p-8 md:p-12 bg-card border-border overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="h-16 w-16 text-primary" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="text-center mb-8">
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground mb-8">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full border-2 border-primary/20"
                  />
                  <div className="text-left">
                    <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                    <div className="text-primary text-sm">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 opacity-5">
              <div className="w-32 h-32 rounded-full bg-primary"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 opacity-5">
              <div className="w-24 h-24 rounded-full bg-accent"></div>
            </div>
          </Card>

          {/* All Testimonials Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'border-primary bg-primary/5 scale-105'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {testimonial.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
