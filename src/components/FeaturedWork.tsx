import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedWork = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Mavzuga mos sahifalsh",
      category: "Sahifalassh",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Kitobga mos muqova dizayni",
      category: "Muqova",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Brendingiz uchun zamonaviy logo",
      category: "Logo",
      image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tanlangan asarlar</h2>
          <p className="text-xl text-muted-foreground">
            Oxirgi ishlarimiz bilan tanishing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

        <div className="text-center">
          <Link to="/portfolio">
            <Button size="lg" variant="outline" className="group">
              Barcha loyihalarni ko'rish
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
