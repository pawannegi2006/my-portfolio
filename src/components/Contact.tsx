import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground text-lg mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and competitive programming.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:pawannegi2243@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg glassmorphic border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">pawannegi2243@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/pawannegii/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg glassmorphic border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Connect with me</p>
                </div>
              </a>

              <a 
                href="https://github.com/pawannegi2006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg glassmorphic border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">Check out my code</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
