import heroImage from "@/assets/hero-image.png";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Index = () => {
  const companyLinks = [
    { emoji: "🏢", title: "Company Information", href: "#" },
    { emoji: "📊", title: "Investment", href: "#" },
    { emoji: "🎓", title: "Recruitment", href: "#" },
    { emoji: "📕", title: "The Story So Far - Sept 2024", href: "#" },
  ];

  const gameLinks = [
    { emoji: "😬", title: "WhatNext", href: "#" },
    { emoji: "🔵", title: "Marbles GO!", href: "#" },
    { emoji: "🚀", title: "Space Shooter", href: "#" },
    { emoji: "🎮", title: "Downstream", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background z-10" />
        <img
          src={heroImage}
          alt="Playmint Gaming"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="mb-4 flex justify-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-4xl">⚡</div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Playmint
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Tagline */}
        <div className="mb-16 text-center">
          <p className="text-xl md:text-2xl text-foreground border-l-4 border-accent pl-4 inline-block text-left">
            We're games industry veterans building decentralised games.
          </p>
        </div>

        {/* Company Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">👔</span> Company
          </h2>
          <div className="grid gap-3">
            {companyLinks.map((link) => (
              <Card
                key={link.title}
                className="group hover:shadow-lg transition-all duration-200 hover:border-accent/50 cursor-pointer"
              >
                <CardContent className="p-4">
                  <a
                    href={link.href}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.emoji}</span>
                      <span className="text-lg group-hover:text-accent transition-colors">
                        {link.title}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Games Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">🎮</span> Games
          </h2>
          <div className="grid gap-3">
            {gameLinks.map((link) => (
              <Card
                key={link.title}
                className="group hover:shadow-lg transition-all duration-200 hover:border-accent/50 cursor-pointer"
              >
                <CardContent className="p-4">
                  <a
                    href={link.href}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.emoji}</span>
                      <span className="text-lg group-hover:text-accent transition-colors">
                        {link.title}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Playmint. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
