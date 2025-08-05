import { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and an admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      category: 'Full Stack',
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      category: 'Frontend',
      github: '#',
      demo: '#'
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered content creation platform that helps businesses generate marketing copy, blog posts, and social media content.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'TailwindCSS'],
      category: 'AI/ML',
      github: '#',
      demo: '#'
    },
    {
      title: 'Real Estate Platform',
      description: 'A comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Mapbox'],
      category: 'Full Stack',
      github: '#',
      demo: '#'
    },
    {
      title: 'Fitness Tracking App',
      description: 'A mobile-first fitness application with workout tracking, nutrition planning, and social features for fitness enthusiasts.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      technologies: ['React Native', 'Node.js', 'GraphQL', 'AWS'],
      category: 'Mobile',
      github: '#',
      demo: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for data analysis with real-time charts, filters, and export capabilities for business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      technologies: ['D3.js', 'React', 'Python', 'FastAPI'],
      category: 'Data Viz',
      github: '#',
      demo: '#'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML', 'Mobile', 'Data Viz'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A showcase of my recent work and personal projects
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`hover-lift ${
                    activeCategory === category 
                      ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
                      : 'hover:border-primary'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover-lift overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  
                  {/* Overlay Buttons */}
                  <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                    hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Category Badge */}
                  <Badge variant="secondary" className="mb-3 bg-accent/50">
                    {project.category}
                  </Badge>

                  {/* Project Title */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary-glow transition-smooth">
                    View Project
                    <ChevronRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover-lift hover:border-primary">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;