import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const grafikDizayn = [
    {
      name: "Kitob / jurnal muqovasi",
      description: "Kitob yoki jurnal uchun professional, chop etishga tayyor muqova dizayni.",
      price: "1 200 000 so'mdan"
    },
    {
      name: "Logo va brend toʻplami",
      description: "Yagona uslub: logotip, rang palitrasi, shriftlar va brend qoʻllanmasi.",
      price: "800$ dan boshlanadi"
    }
  ];

  const sahifalash = [
    { name: "Matnni sahifalash", description: "Matnni kitob standartlariga mos joylashtirish va satr/boʻsh joylarni sozlash.", price: "300 000 so'm" },
    { name: "Mavzuli sahifalash", description: "Rasm va elementlar bilan boyitilgan sahifalar dizayni.", price: "400 000 so'm" },
    { name: "Grafik integratsiya", description: "Illyustratsiyalar va rasmlarni sahifaga joylashtirish va optimallashtirish.", price: "har bir rasm uchun 30 000 so'm" },
    { name: "Raqamlashtirish", description: "Qogʻoz hujjatlarni skanlab, raqamli formatga mos sahifalash.", price: "hajmga qarab" },
    { name: "Bosmaga tayyorlash", description: "CMYK, trim va bleeder sozlamalari bilan chop etishga tayyor fayllar.", price: "200 000 so'm" },
    { name: "PDF optimizatsiyasi", description: "Yuqori sifatni saqlagan holda fayl hajmini kamaytirish va tekshirish.", price: "100 000 so'm" },
    { name: "Tahrir va tekshirish", description: "Imlo, uslub va format tekshiruvi; kerakli oʻzgartirishlar.", price: "soatlik yoki loyiha bo‘yicha" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Xizmatlar & <span className="text-gradient-primary">Narxlar</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sizning ehtiyojlaringizga moslashtirilgan professional grafik dizayn va sahifalash xizmatlari.
              Barcha paketlar qoniqmaguningizcha cheksiz tahrirlarni oʻz ichiga oladi.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Grafik dizayn</h2>
                <Link to="/contact">
                  <Button>Taklif soʻrash</Button>
                </Link>
              </div>

              <div className="overflow-auto">
                <table className="w-full text-sm table-auto">
                  <thead>
                    <tr className="text-left text-muted-foreground">
                      <th className="px-4 py-2">Xizmat</th>
                      <th className="px-4 py-2">Tavsif</th>
                      <th className="px-4 py-2">Narx</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grafikDizayn.map((row) => (
                      <tr key={row.name} className="border-t border-border">
                        <td className="px-4 py-3 font-medium">{row.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.description}</td>
                        <td className="px-4 py-3 text-gradient-primary font-semibold">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Sahifalash</h2>
                <Link to="/contact">
                  <Button>Taklif soʻrash</Button>
                </Link>
              </div>

              <div className="overflow-auto">
                <table className="w-full text-sm table-auto">
                  <thead>
                    <tr className="text-left text-muted-foreground">
                      <th className="px-4 py-2">Xizmat</th>
                      <th className="px-4 py-2">Tavsif</th>
                      <th className="px-4 py-2">Narx</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sahifalash.map((row) => (
                      <tr key={row.name} className="border-t border-border">
                        <td className="px-4 py-3 font-medium">{row.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.description}</td>
                        <td className="px-4 py-3 text-gradient-primary font-semibold">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <Card className="p-8 bg-muted/50">
              <h2 className="text-2xl font-bold mb-4">Maxsus loyihalar</h2>
              <p className="text-muted-foreground mb-6">
                Aniq bir narsa kerakmi? Men noyob loyihalar uchun maxsus dizayn xizmatlarini taklif etaman:
                illyustratsiyalar, infografikalar, taqdimotlar va boshqalar. Keling, tasavvuringizni muhokama qilib,
                moslashtirilgan yechim yarataylik.
              </p>
              <Link to="/contact">
                <Button size="lg">Loyihangizni tushuntiring</Button>
              </Link>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
