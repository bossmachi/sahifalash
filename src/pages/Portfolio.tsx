import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["Barchasi", "Kitob", "Logo", "Muqova"];

  const projects = [
    {
      id: 1,
      title: "Oxirat diyori",
      category: "",
      image: "oxiratdiyori.jpg",
      description: "Islomiy mavzuda kitoblar",
    },
    {
      id: 2,
      title: "Siyrati nabaviyya",
      category: "",
      image: "siyratinabaviyya.jpg",
      description: "Jamozamizdan Husniddin sahifalovchining asarlari",
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "Social Media",
      image: "",
      description: "Engaging social media graphics for product launch",
    },
    {
      id: 4,
      title: "Minimalist Poster Series",
      category: "Print Design",
      image: "",
      description: "Contemporary poster designs for cultural events",
    },
    {
      id: 5,
      title: "E-commerce Brand Package",
      category: "Branding",
      image: "",
      description: "Full branding solution for online fashion retailer",
    },
    {
      id: 6,
      title: "Geometric Logo Suite",
      category: "Logo",
      image: "",
      description: "Modern geometric logos for tech companies",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Oxirgi loyihalarimiz bilan tanishing
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white/80 text-sm mb-2">{project.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
