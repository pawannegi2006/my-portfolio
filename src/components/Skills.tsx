import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "C", level: 90 },
        { name: "C++", level: 85 },
      ],
    },
    {
      icon: Brain,
      title: "AI/ML Fundamentals",
      skills: [
        { name: "Generative AI", level: 70 },
        { name: "Machine Learning", level: 65 },
      ],
    },
    {
      icon: Lightbulb,
      title: "Other Skills",
      skills: [
        { name: "Python (Basic)", level: 60 },
        { name: "Logical Thinking", level: 95 },
        { name: "DSA Mindset", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glassmorphic border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
