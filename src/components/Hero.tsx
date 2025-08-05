import { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Front-End Developer',
    'Machine-Learning Enthusiast',
    'Mobile App Developer',
    'UI/UX Designer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Avatar/Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-glow">
            <span className="text-4xl font-bold text-primary-foreground">LMAPC</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-gradient">Lee-an Carpio</span>
          </h1>

          {/* Dynamic Role */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              <span
                className={`inline-block transition-all duration-500 ${
                  isTyping ? 'opacity-100 animate-typewriter' : 'opacity-0'
                }`}
                style={{
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  borderRight: isTyping ? '3px solid hsl(var(--primary))' : 'none',
                }}
              >
                {roles[currentRole]}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences with modern technologies.
            Created UI/UX Designs with smooth user content viewing and Machine-Learning Projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 hover-glow transition-bounce text-lg px-8 py-6"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="hover-lift border-primary/20 hover:border-primary text-lg px-8 py-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="ghost" size="icon" className="hover-lift hover:text-primary">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift hover:text-primary">
              <Mail className="h-6 w-6" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:text-primary transition-smooth"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;