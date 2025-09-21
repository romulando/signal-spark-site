import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cpu, 
  HardDrive, 
  Thermometer, 
  Zap, 
  Wifi, 
  Shield,
  Gauge,
  Battery
} from "lucide-react";

const specifications = {
  hardware: [
    { label: "Processador", value: "ARM Cortex-A72 Quad-core 1.8GHz", icon: Cpu },
    { label: "Memória RAM", value: "4GB LPDDR4", icon: HardDrive },
    { label: "Armazenamento", value: "64GB eMMC + Slot microSD", icon: HardDrive },
    { label: "Display", value: "7\" IPS TouchScreen 1024x600", icon: Gauge },
    { label: "Câmera", value: "8MP com visão noturna IR", icon: Shield },
    { label: "Sensores", value: "PIR, Ultrassônico, Acelerômetro", icon: Thermometer }
  ],
  connectivity: [
    { label: "Conectividade", value: "4G/5G, Wi-Fi 802.11ac, Bluetooth 5.0", icon: Wifi },
    { label: "GPS", value: "Receptor GPS/GLONASS de alta precisão", icon: Gauge },
    { label: "Protocolos", value: "MQTT, HTTP/HTTPS, WebSocket", icon: Shield },
    { label: "Portas", value: "2x USB 3.0, Ethernet Gigabit, RS485", icon: Cpu }
  ],
  power: [
    { label: "Bateria Principal", value: "Lítio 48V 100Ah", icon: Battery },
    { label: "Painel Solar", value: "Monocristalino 200W (opcional)", icon: Zap },
    { label: "Autonomia", value: "Até 72 horas sem recarga", icon: Gauge },
    { label: "Consumo", value: "25W em operação normal", icon: Thermometer }
  ],
  environmental: [
    { label: "Temperatura", value: "-20°C a +60°C", icon: Thermometer },
    { label: "Umidade", value: "5% a 95% RH não condensante", icon: Thermometer },
    { label: "Proteção", value: "IP67 - À prova d'água e poeira", icon: Shield },
    { label: "Dimensões", value: "45 x 25 x 180 cm (L x P x A)", icon: Gauge },
    { label: "Peso", value: "35 kg (com bateria)", icon: Gauge },
    { label: "Material", value: "Alumínio anodizado e policarbonato", icon: HardDrive }
  ]
};

const Specifications = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Cpu className="w-4 h-4 mr-2" />
            Especificações Técnicas
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Detalhes 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Técnicos</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça todas as especificações técnicas do nosso robô sinalizador viário. 
            Tecnologia de ponta em cada componente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="hardware" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="hardware">Hardware</TabsTrigger>
              <TabsTrigger value="connectivity">Conectividade</TabsTrigger>
              <TabsTrigger value="power">Energia</TabsTrigger>
              <TabsTrigger value="environmental">Ambiente</TabsTrigger>
            </TabsList>

            <TabsContent value="hardware">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-primary" />
                    Especificações de Hardware
                  </CardTitle>
                  <CardDescription>
                    Componentes internos e capacidades de processamento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {specifications.hardware.map((spec, index) => {
                      const Icon = spec.icon;
                      return (
                        <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium">{spec.label}</span>
                          </div>
                          <span className="text-muted-foreground">{spec.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="connectivity">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Wifi className="w-6 h-6 text-primary" />
                    Conectividade e Comunicação
                  </CardTitle>
                  <CardDescription>
                    Opções de conectividade e protocolos suportados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {specifications.connectivity.map((spec, index) => {
                      const Icon = spec.icon;
                      return (
                        <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium">{spec.label}</span>
                          </div>
                          <span className="text-muted-foreground">{spec.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="power">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Battery className="w-6 h-6 text-primary" />
                    Sistema de Energia
                  </CardTitle>
                  <CardDescription>
                    Especificações de bateria, consumo e autonomia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {specifications.power.map((spec, index) => {
                      const Icon = spec.icon;
                      return (
                        <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-accent/10 rounded-lg">
                              <Icon className="w-4 h-4 text-accent" />
                            </div>
                            <span className="font-medium">{spec.label}</span>
                          </div>
                          <span className="text-muted-foreground">{spec.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="environmental">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Condições Ambientais
                  </CardTitle>
                  <CardDescription>
                    Resistência e especificações físicas do equipamento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {specifications.environmental.map((spec, index) => {
                      const Icon = spec.icon;
                      return (
                        <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium">{spec.label}</span>
                          </div>
                          <span className="text-muted-foreground">{spec.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Specifications;