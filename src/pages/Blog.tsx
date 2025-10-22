import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Principles of Modern Logo Design",
      excerpt: "Discover the fundamental principles that make logos memorable, timeless, and effective in today's digital landscape.",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Design Tips",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Color Psychology in Branding: A Complete Guide",
      excerpt: "Learn how different colors influence emotions and decisions, and how to choose the perfect palette for your brand.",
      date: "2024-03-10",
      readTime: "12 min read",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Creating Engaging Social Media Graphics",
      excerpt: "Step-by-step guide to designing social media content that stops the scroll and drives engagement.",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Typography Trends to Watch in 2024",
      excerpt: "Explore the latest typography trends shaping modern design and how to implement them in your projects.",
      date: "2024-02-28",
      readTime: "10 min read",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "From Concept to Completion: My Design Process",
      excerpt: "A behind-the-scenes look at how I approach design projects, from initial research to final delivery.",
      date: "2024-02-20",
      readTime: "15 min read",
      category: "Process",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Building a Strong Visual Brand Identity",
      excerpt: "Essential strategies for creating a cohesive and memorable brand identity that resonates with your audience.",
      date: "2024-02-15",
      readTime: "11 min read",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1634986666614-5e0e2c4d1f48?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Design <span className="text-gradient-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and inspiration from my design journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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

export default Blog;
