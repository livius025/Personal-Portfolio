import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center space-y-6">
            {/* Logo/Name */}
            <div className="text-2xl font-bold text-gradient">
              Lee-an Pernia Carpio
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground max-w-md mx-auto">
              Building digital experiences that matter, one line of code at a time.
            </p>

            {/* Fun Stats */}
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Code className="h-4 w-4 text-primary" />
                <span>50+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="h-4 w-4 text-primary" />
                <span>1000+ Cups</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-primary" />
                <span>25+ Happy Clients</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Lee-an Mar Anicken Pernia Carpio. Built with{' '}
                <Heart className="inline h-4 w-4 text-red-500 mx-1" />
                using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;