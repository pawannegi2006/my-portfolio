import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Code2, Brain } from "lucide-react";

const Services = () => {
  const aspirations = [
    {
      icon: Code2,
      title: "Competitive Programming",
      description: "Continuously improving problem-solving skills and algorithmic thinking through regular practice on platforms like Codeforces and LeetCode.",
    },
    {
      icon: Brain,
      title: "AI/ML Research & Development",
      description: "Exploring cutting-edge technologies in artificial intelligence and machine learning to create intelligent, data-driven solutions.",
    },
    {
      icon: Target,
      title: "Software Development",
      description: "Building scalable and innovative software solutions with a focus on clean code and efficient algorithms.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Focus <span className="gradient-text">Areas</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Currently learning and building projects in AI & ML to develop real-world, data-driven solutions
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {aspirations.map((item, index) => (
            <Card 
              key={index} 
              className="glassmorphic border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-shadow">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
