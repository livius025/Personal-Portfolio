import { useState } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Palette,
  Server,
  Wrench
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'React/Next.js', level: 95, description: 'Expert in modern React patterns, hooks, and Next.js' },
        { name: 'TypeScript', level: 90, description: 'Strong typing and advanced TS patterns' },
        { name: 'Tailwind CSS', level: 88, description: 'Responsive design and utility-first CSS' },
        { name: 'Vue.js', level: 80, description: 'Component composition and Vuex/Pinia' },
        { name: 'JavaScript ES6+', level: 95, description: 'Modern JS features and best practices' },
        { name: 'HTML5/CSS3', level: 92, description: 'Semantic HTML and modern CSS techniques' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'Node.js', level: 90, description: 'Express, Fastify, and custom server solutions' },
        { name: 'Python', level: 85, description: 'Django, FastAPI, and data processing' },
        { name: 'PostgreSQL', level: 88, description: 'Complex queries, optimization, and design' },
        { name: 'MongoDB', level: 82, description: 'Document modeling and aggregation pipelines' },
        { name: 'GraphQL', level: 80, description: 'Schema design and resolver optimization' },
        { name: 'REST APIs', level: 92, description: 'RESTful design principles and documentation' }
      ]
    },
    tools: {
      title: 'Tools & DevOps',
      icon: Wrench,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Docker', level: 85, description: 'Containerization and multi-stage builds' },
        { name: 'AWS/GCP', level: 80, description: 'Cloud deployment and serverless architecture' },
        { name: 'Git/GitHub', level: 95, description: 'Version control and collaborative workflows' },
        { name: 'CI/CD', level: 82, description: 'Automated testing and deployment pipelines' },
        { name: 'Webpack/Vite', level: 85, description: 'Module bundling and optimization' },
        { name: 'Testing', level: 88, description: 'Jest, Cypress, and testing strategies' }
      ]
    },
    mobile: {
      title: 'Mobile & Others',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'React Native', level: 75, description: 'Cross-platform mobile development' },
        { name: 'PWA', level: 80, description: 'Progressive web app development' },
        { name: 'WebRTC', level: 70, description: 'Real-time communication applications' },
        { name: 'WebGL/Three.js', level: 65, description: '3D web experiences and visualization' },
        { name: 'Electron', level: 72, description: 'Desktop application development' },
        { name: 'Firebase', level: 85, description: 'Backend-as-a-service and real-time features' }
      ]
    }
  };

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const { title, icon: Icon, color } = skillCategories[category];
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-primary text-primary-foreground shadow-glow scale-105'
                      : 'bg-card hover:bg-accent text-card-foreground hover-lift'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{title}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <Card key={index} className="glass hover-lift group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-smooth">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {skill.description}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                'Redux', 'Zustand', 'Framer Motion', 'Prisma', 'Supabase', 'Stripe',
                'Socket.io', 'Redis', 'Nginx', 'Linux', 'Figma', 'Photoshop'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium hover-lift font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;