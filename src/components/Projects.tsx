import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Award } from "lucide-react";

const Projects = () => {
  const achievements = [
    {
      platform: "Codeforces",
      description: "Active participant solving algorithmic challenges",
      badge: "Competitive Programming",
    },
    {
      platform: "LeetCode",
      description: "Regular problem solver focusing on DSA",
      badge: "Problem Solving",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Projects & <span className="gradient-text">Achievements</span>
        </h2>

        {/* Coming Soon Section */}
        <Card className="glassmorphic border-primary/20 mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Rocket className="w-8 h-8 text-primary animate-float" />
              <CardTitle className="text-2xl">Projects Coming Soon</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg">
              Currently working on exciting AI/ML projects. Stay tuned for updates on innovative solutions leveraging machine learning and data science.
            </p>
          </CardContent>
        </Card>

        {/* Competitive Programming Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Award className="w-7 h-7 text-secondary" />
            Competitive Programming
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="glassmorphic border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <Badge className="mb-4" variant="secondary">
                    {achievement.badge}
                  </Badge>
                  <h4 className="text-xl font-semibold mb-2">{achievement.platform}</h4>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
