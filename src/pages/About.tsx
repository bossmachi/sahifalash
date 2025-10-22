import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Palette, Layers, Sparkles, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "Adobe InDesign",
    "Adobe Photoshop",
    "Adobe Illustrator",
  ];

  const values = [
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Creative Excellence",
      description: "Pushing boundaries with innovative design solutions",
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Strategic Thinking",
      description: "Design that aligns with business goals",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Attention to Detail",
      description: "Perfection in every pixel",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Fast Delivery",
      description: "Quality work within deadlines",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Siz uchun <span className="text-gradient-primary">eng yaxshisi</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                3 + yillik tajribaga ega professional sahifalash va dizayn jamoasi.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="animate-slide-up">
                <img
                  src="../public/rasm.jpg"
                  alt="Designer workspace"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold mb-4">Haqqimizda</h2>
                <p className="text-muted-foreground mb-4">
                  Biz kitoblarni hayotga qaytarishga ishtiyoqli jamoamiz. 
                  Har bir sahifa va har bir muqova biz uchun san’at asari kabi ahamiyatga ega. 
                  Biz kitoblaringizni nafaqat tartibga solamiz, balki ularni o’quvchiga yanada jozibador qilish uchun estetik va sifatli yechimlar yaratamiz. 
                </p>
                <p className="text-muted-foreground mb-4">
                  Maqsadimiz – kitoblar dunyosini zamonaviy texnologiya bilan uyg’unlashtirish, o’quvchilarga qulay, chiroyli va professional tayyorlangan mahsulotlar taqdim etishdir. 
                  Bizning xizmatlarimiz orasida sahifalash, muqova dizayni, chop etishga tayyorlash va kitoblarni raqamli formatga tayyorlash mavjud.
                  Har bir loyiha biz uchun alohida va noyob: biz mijozlarimiz bilan yaqin hamkorlik qilamiz va ular istagan natijani maksimal darajada ifodalashga intilamiz. 
                  Kitobingizni nafaqat o’qing, balki uning go’zalligini his eting!
                </p>
                <p className="text-muted-foreground">
                  
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Biz ishlaydigan programmalar</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-6 py-3 bg-muted rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Biz nimalarni taqdim qilamiz</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value) => (
                  <Card key={value.title} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
