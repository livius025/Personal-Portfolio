import { Code, Coffee, Heart, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Heart, label: 'Happy Clients', value: '25+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Hello! I'm Alex, a full-stack developer with over 5 years of experience 
                  creating digital solutions that make a difference. My journey started with 
                  a simple "Hello World" and has evolved into a passion for building 
                  scalable, user-friendly applications.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I specialize in React, Node.js, and modern web technologies. When I'm not 
                  coding, you'll find me exploring new frameworks, contributing to open source, 
                  or sharing knowledge with the developer community.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I believe in writing clean, maintainable code and creating experiences 
                  that users love. Every project is an opportunity to solve real problems 
                  and create something meaningful.
                </p>
              </div>

              {/* Tech Stack Preview */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Technologies I love working with:</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium hover-lift"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="glass hover-lift group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <stat.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;