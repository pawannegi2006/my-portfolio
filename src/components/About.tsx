import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code2, Trophy, Rocket, Download } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Passion",
      description: "Artificial Intelligence, Machine Learning & Data Science",
    },
    {
      icon: Code2,
      title: "Skills",
      description: "Algorithmic Problem-Solving, Data Structures, Software Development",
    },
    {
      icon: Trophy,
      title: "Hobby",
      description: "Avid Competitive Programmer on Codeforces & LeetCode",
    },
    {
      icon: Rocket,
      title: "Goal",
      description: "To leverage data and code to build innovative and scalable solutions",
    },
  ];

  const education = [
    { degree: "10th (CBSE)", year: "2023" },
    { degree: "12th (PCM, CBSE)", year: "2025" },
    { degree: "BCA – MUIT Noida", year: "2025–2028" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {highlights.map((item, index) => (
            <Card key={index} className="glassmorphic border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glassmorphic border-primary/20 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="flex justify-between items-center border-b border-border pb-4 last:border-0">
                  <span className="text-lg">{edu.degree}</span>
                  <span className="text-primary font-medium">{edu.year}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" className="gap-2 group">
            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
