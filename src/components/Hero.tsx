import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/pawan-profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float top-20 left-20"></div>
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float animation-delay-2000 bottom-20 right-20"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              <img 
                src={profileImage} 
                alt="Pawan Negi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold">
            Hi, I'm <span className="gradient-text">Pawan Negi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Computer Science Undergraduate | Competitive Programmer | Aspiring AI/ML Developer
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2 group">
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <Button size="icon" variant="ghost" className="hover:bg-primary/20" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-primary/20" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-primary/20" asChild>
              <a href="mailto:contact@example.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
