import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  Settings, 
  Clock, 
  Wifi, 
  Battery,
  Eye,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Segurança Máxima",
    description: "Sistema de segurança redundante com sensores de movimento e alertas automáticos.",
    benefits: ["Detecção de obstáculos", "Alertas visuais e sonoros", "Certificação IP67"]
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Processamento rápido e eficiente para resposta instantânea em situações críticas.",
    benefits: ["Tempo de resposta < 100ms", "Processador ARM Cortex", "Algoritmos avançados"]
  },
  {
    icon: Settings,
    title: "Configuração Simples",
    description: "Interface intuitiva para configuração e monitoramento remoto do equipamento.",
    benefits: ["App mobile dedicado", "Configuração em minutos", "Suporte técnico 24h"]
  },
  {
    icon: Clock,
    title: "Operação Contínua",
    description: "Funcionamento ininterrupto com sistema de backup e manutenção preditiva.",
    benefits: ["Backup de energia", "Manutenção automática", "Relatórios de status"]
  },
  {
    icon: Wifi,
    title: "Conectividade Avançada",
    description: "Conectividade 4G/5G para monitoramento e controle remoto em tempo real.",
    benefits: ["Monitoramento remoto", "Atualizações OTA", "Integração com centrais"]
  },
  {
    icon: Battery,
    title: "Autonomia Estendida",
    description: "Bateria de lítio de alta capacidade com recarga solar opcional.",
    benefits: ["Até 72h de autonomia", "Painel solar opcional", "Gestão inteligente de energia"]
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Eye className="w-4 h-4 mr-2" />
            Recursos Avançados
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tecnologia que Faz a 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Diferença</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada recurso foi desenvolvido pensando na segurança, eficiência e facilidade de uso. 
            Conheça as funcionalidades que tornam nosso robô único no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-card rounded-3xl p-8 border shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Instalações Ativas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Tempo de Funcionamento</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte Técnico</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">72h</div>
              <div className="text-sm text-muted-foreground">Autonomia Máxima</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;