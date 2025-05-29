import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

const competitivePerceptionData = [
  { name: 'Totalmente de acuerdo', Nearshore: 33, Domestic: 20 },
  { name: 'De acuerdo', Nearshore: 44, Domestic: 40 },
  { name: 'Neutral', Nearshore: 22, Domestic: 40 },
  { name: 'En desacuerdo', Nearshore: 0, Domestic: 0 },
  { name: 'Sin respuesta', Nearshore: 1, Domestic: 0 },
];

const perceivedCompetitorsData = [
  { name: 'Empresas de BPO', Nearshore: 67, Domestic: 60 },
  { name: 'Empresas atención cliente', Nearshore: 56, Domestic: 40 },
  { name: 'Empresas soporte técnico', Nearshore: 44, Domestic: 0 },
  { name: 'Empresas consultoras', Nearshore: 11, Domestic: 20 },
  { name: 'Empresas de tecnología', Nearshore: 0, Domestic: 20 },
];

const competitiveAdvantagesData = [
  { name: 'Facilidad contacto', Nearshore: 44, Domestic: 40 },
  { name: 'Variedad servicios', Nearshore: 33, Domestic: 60 },
  { name: 'Experiencia industria', Nearshore: 33, Domestic: 0 },
  { name: 'Tiempo respuesta', Nearshore: 33, Domestic: 60 },
  { name: 'Alcance global', Nearshore: 22, Domestic: 20 },
];

const improvementAreasData = [
  { name: 'Capacitación personal', Nearshore: 44, Domestic: 60 },
  { name: 'Claridad comunicación', Nearshore: 33, Domestic: 0 },
  { name: 'Transparencia procesos', Nearshore: 33, Domestic: 0 },
  { name: 'Talento especializado', Nearshore: 11, Domestic: 40 },
];

export default function Competencia() {
  return (
    <Layout title="Competencia">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Percepción Competitiva" 
            value="71%" 
            description="Clientes que consideran TP por encima de competencia" 
            trend="up"
            trendValue="77% Nearshore vs 60% Domestic"
          />
          <StatCard 
            title="Principal Ventaja" 
            value="42%" 
            description="Facilidad contacto - Ventaja competitiva más mencionada" 
            trend="neutral"
            trendValue="Consistente ambos segmentos"
          />
          <StatCard 
            title="Principal Mejora" 
            value="50%" 
            description="Capacitación personal - Área de mejora más identificada" 
            trend="up"
            trendValue="60% Domestic"
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Percepción Competitiva General</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={competitivePerceptionData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Acuerdo con 'Teleperformance está por encima de su competencia'" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de percepción competitiva actualizada:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Percepción positiva general:</strong> 71% considera TP por encima de competencia, con ventaja en Nearshore (77% vs 60%).</li>
                <li><strong>Domestic más cauteloso:</strong> Mayor porcentaje neutral (40% vs 22%), sugiriendo percepción competitiva más balanceada.</li>
                <li><strong>Nearshore más entusiasta:</strong> Mayor concentración en "Totalmente de acuerdo" (33% vs 20%).</li>
                <li><strong>Sin percepción negativa:</strong> 0% en desacuerdo en ambos segmentos, manteniendo base sólida para reposicionamiento.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Competidores Percibidos</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={perceivedCompetitorsData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Tipos de empresas consideradas competidores directos" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de competidores percibidos:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>BPO como categoría dominante:</strong> 64% promedio, con ligera ventaja en Nearshore (67% vs 60%).</li>
                <li><strong>Evolución hacia tecnología en Domestic:</strong> 20% incluye "Empresas de tecnología" vs 0% Nearshore, señal positiva para reposicionamiento.</li>
                <li><strong>Consultoría emergente en Domestic:</strong> 20% vs 11% Nearshore, sugiriendo apertura a posicionamiento consultivo.</li>
                <li><strong>Soporte técnico únicamente Nearshore:</strong> 44% vs 0%, posiblemente reflejando necesidades de mercados internacionales.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Ventajas Competitivas</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart 
                data={competitiveAdvantagesData} 
                keys={['Nearshore', 'Domestic']} 
                subtitle="Fortalezas frente a competidores" 
                height={300}
              />
              <div className="mt-4 text-sm">
                <p className="mb-2">Análisis de ventajas competitivas:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Facilidad de contacto universal:</strong> Ventaja principal consistente (44% vs 40%).</li>
                  <li><strong>Domestic valora más servicios:</strong> "Variedad servicios" (60% vs 33%) y "Tiempo respuesta" (60% vs 33%).</li>
                  <li><strong>Experiencia industria única Nearshore:</strong> 33% vs 0%, reflejando valor en mercados especializados.</li>
                  <li><strong>Alcance global equilibrado:</strong> ~20% ambos segmentos, sugiriendo valoración consistente.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Áreas de Mejora Competitiva</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart 
                data={improvementAreasData} 
                keys={['Nearshore', 'Domestic']} 
                subtitle="Aspectos a mejorar frente a competidores" 
                height={300}
              />
              <div className="mt-4 text-sm">
                <p className="mb-2">Análisis de áreas de mejora:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Capacitación como prioridad:</strong> 50% promedio, con mayor énfasis en Domestic (60% vs 44%).</li>
                  <li><strong>Talento especializado crítico en Domestic:</strong> 40% vs 11%, alineado con demanda de servicios tecnológicos.</li>
                  <li><strong>Comunicación específica Nearshore:</strong> "Claridad comunicación" (33%) y "Transparencia procesos" (33%) únicamente mencionadas.</li>
                  <li><strong>Oportunidad diferenciada:</strong> Necesidades distintas sugieren estrategias de mejora segmentadas.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Implicaciones para el Reposicionamiento</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p>La percepción competitiva ofrece insights estratégicos para el reposicionamiento:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Fortalezas a capitalizar</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Base competitiva sólida:</strong> 71% percepción superior facilita introducción de nuevas capacidades</li>
                  <li><strong>Facilidad de contacto:</strong> Mantener como diferenciador mientras se añaden servicios avanzados</li>
                  <li><strong>Variedad en Domestic:</strong> Capitalizar percepción de amplitud de servicios (60%) para expandir hacia tecnología</li>
                  <li><strong>Experiencia industria Nearshore:</strong> Usar como base para consultoría especializada (33%)</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Áreas críticas de mejora</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Talento especializado urgente:</strong> 40% Domestic identifica como brecha vs competencia tecnológica</li>
                  <li><strong>Capacitación como habilitador:</strong> 50% promedio requiere mejora para soportar servicios avanzados</li>
                  <li><strong>Comunicación Nearshore:</strong> Claridad (33%) y transparencia (33%) como prerequisitos para consultoría</li>
                  <li><strong>Evolución de competencia:</strong> Domestic ya incluye tecnología (20%) y consultoría (20%) como competidores</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Oportunidad Competitiva</h4>
              <p className="text-green-700">
                <strong>Ventana estratégica abierta:</strong> La inclusión de "Empresas de tecnología" (20%) y "Empresas consultoras" (20%) 
                como competidores en Domestic indica que los clientes ya conceptualizan a TP en estas categorías más amplias. 
                Esto facilita el reposicionamiento al validar que la percepción competitiva ya está evolucionando hacia 
                el posicionamiento deseado.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
