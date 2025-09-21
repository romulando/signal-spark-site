import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Settings } from "lucide-react";
import heroImage from "@/assets/hero-robot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                Tecnologia Avançada em Sinalização
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Robô Sinalizador
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Viário</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Revolucione a segurança no trânsito com nossa solução automatizada. 
                Controle inteligente, eficiência máxima e segurança garantida para suas vias.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border shadow-card">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Segurança Total</h3>
                  <p className="text-xs text-muted-foreground">Operação autônoma</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border shadow-card">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Alta Eficiência</h3>
                  <p className="text-xs text-muted-foreground">Economia de custos</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border shadow-card">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Fácil Instalação</h3>
                  <p className="text-xs text-muted-foreground">Plug and play</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg">
                Ver Especificações
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl transform rotate-6" />
            <div className="relative bg-card rounded-3xl p-8 shadow-tech">
              <img 
                src={heroImage} 
                alt="Robô Sinalizador Viário - Tecnologia avançada para controle de trânsito" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Stats Overlay */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-xs text-muted-foreground">Confiabilidade</div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-xs text-muted-foreground">Operação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;