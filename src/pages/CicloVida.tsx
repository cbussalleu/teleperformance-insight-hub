import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

const projectionOneYearData = [
  { name: 'Probable crecimiento', Nearshore: 33, Domestic: 40 },
  { name: 'Se mantendrá igual', Nearshore: 44, Domestic: 20 },
  { name: 'Probable disminución', Nearshore: 0, Domestic: 20 },
  { name: 'Sin respuesta', Nearshore: 23, Domestic: 20 },
];

const projectionThreeYearsData = [
  { name: 'Probable crecimiento', Nearshore: 33, Domestic: 40 },
  { name: 'Se mantendrá igual', Nearshore: 33, Domestic: 40 },
  { name: 'Probable disminución', Nearshore: 0, Domestic: 0 },
  { name: 'Sin respuesta', Nearshore: 34, Domestic: 20 },
];

const projectionFiveYearsData = [
  { name: 'Probable crecimiento', Nearshore: 22, Domestic: 20 },
  { name: 'Se mantendrá igual', Nearshore: 22, Domestic: 40 },
  { name: 'Probable disminución', Nearshore: 0, Domestic: 0 },
  { name: 'Sin respuesta', Nearshore: 56, Domestic: 40 },
];

const opportunityAreasData = [
  { name: 'Nuevas tecnologías', Nearshore: 56, Domestic: 80 },
  { name: 'Expandir servicios actuales', Nearshore: 44, Domestic: 40 },
  { name: 'Añadir nuevos servicios', Nearshore: 44, Domestic: 40 },
  { name: 'Expandir a otras regiones', Nearshore: 33, Domestic: 40 },
];

const additionalServicesData = [
  { name: 'Soluciones de IA', Nearshore: 33, Domestic: 60 },
  { name: 'Consultoría estratégica', Nearshore: 22, Domestic: 0 },
  { name: 'Análisis avanzado de datos', Nearshore: 11, Domestic: 40 },
  { name: 'Automatización (RPA)', Nearshore: 11, Domestic: 40 },
  { name: 'Ventas', Nearshore: 0, Domestic: 40 },
];

export default function CicloVida() {
  return (
    <Layout title="Ciclo de Vida de la Relación">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Proyección Crecimiento" 
            value="38%" 
            description="Clientes que anticipan probable crecimiento" 
            trend="up"
            trendValue="40% Domestic"
          />
          <StatCard 
            title="Nuevas Tecnologías" 
            value="64%" 
            description="Principal oportunidad de expansión identificada" 
            trend="up"
            trendValue="80% Domestic"
          />
          <StatCard 
            title="Soluciones IA" 
            value="43%" 
            description="Servicio adicional con mayor demanda" 
            trend="up"
            trendValue="60% Domestic"
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Proyección Próximo Año</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={projectionOneYearData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Expectativa de evolución en el próximo año" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de proyecciones a corto plazo:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Optimismo moderado:</strong> 38% total anticipa crecimiento, con ligera ventaja en Domestic (40% vs 33%).</li>
                <li><strong>Estabilidad preferida en Nearshore:</strong> 44% proyecta mantenerse igual vs 20% en Domestic.</li>
                <li><strong>Riesgo en Domestic:</strong> Único segmento con proyección de disminución (20%), requiere atención inmediata.</li>
                <li><strong>Incertidumbre similar:</strong> ~20% sin respuesta en ambos segmentos sugiere cautela general del mercado.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Proyección 2-3 Años</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={projectionThreeYearsData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Expectativa de evolución en 2-3 años" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de proyecciones a mediano plazo:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Estabilización de expectativas:</strong> Desaparece proyección de disminución en Domestic.</li>
                <li><strong>Equilibrio en Domestic:</strong> 40% crecimiento vs 40% estabilidad, sugiriendo claridad en estrategia.</li>
                <li><strong>Mayor incertidumbre Nearshore:</strong> Aumenta "Sin respuesta" a 34%, indicando volatilidad percibida.</li>
                <li><strong>Consistencia en crecimiento:</strong> Ambos segmentos mantienen perspectiva optimista (~35-40%).</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Proyección 4-5 Años</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={projectionFiveYearsData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Expectativa de evolución en 4-5 años" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de proyecciones a largo plazo:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Alta incertidumbre general:</strong> 56% Nearshore y 40% Domestic sin respuesta clara.</li>
                <li><strong>Domestic más optimista:</strong> 40% proyecta estabilidad vs 22% Nearshore.</li>
                <li><strong>Declive en expectativas de crecimiento:</strong> Reducción a ~20% ambos segmentos.</li>
                <li><strong>Implicación estratégica:</strong> Necesidad de reposicionamiento para crear visión a largo plazo más clara.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Áreas de Oportunidad</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={opportunityAreasData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Áreas para ampliar la relación" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de oportunidades de expansión:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Tecnología como oportunidad principal:</strong> 64% promedio, con énfasis crítico en Domestic (80% vs 56%).</li>
                <li><strong>Servicios actuales vs nuevos:</strong> Equilibrio entre expandir existentes (42%) y añadir nuevos (42%).</li>
                <li><strong>Expansión geográfica:</strong> Interés consistente (~35%), especialmente relevante para crecimiento orgánico.</li>
                <li><strong>Diferencia estratégica:</strong> Domestic prioriza tecnología, Nearshore balancea múltiples enfoques.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Servicios Adicionales de Interés</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={additionalServicesData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Servicios adicionales que interesaría desarrollar" 
              height={350}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de demanda por nuevos servicios:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>IA como demanda principal:</strong> 43% promedio, con preferencia marcada en Domestic (60% vs 33%).</li>
                <li><strong>Consultoría únicamente en Nearshore:</strong> 22% interés vs 0% Domestic, sugiriendo diferentes necesidades.</li>
                <li><strong>Analytics y automatización en Domestic:</strong> 40% en ambos vs ~11% Nearshore, alineado con percepción tecnológica.</li>
                <li><strong>Ventas como oportunidad Domestic:</strong> 40% vs 0%, indicando potencial para servicios comerciales.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Análisis por Industria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Industria</th>
                    <th className="text-left p-2">Segmento</th>
                    <th className="text-left p-2">Proyección 1 año</th>
                    <th className="text-left p-2">Área Oportunidad Principal</th>
                    <th className="text-left p-2">Servicio Adicional Interés</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Retail/E-commerce</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Probable crecimiento</td>
                    <td className="p-2">Nuevas tecnologías</td>
                    <td className="p-2">Consultoría estratégica</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Technology</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Se mantendrá igual</td>
                    <td className="p-2">Expandir servicios</td>
                    <td className="p-2">Soluciones IA</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Media/Entertainment</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Se mantendrá igual</td>
                    <td className="p-2">Nuevas tecnologías</td>
                    <td className="p-2">Soluciones IA</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Energy/Utilities</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Probable crecimiento</td>
                    <td className="p-2">Nuevas tecnologías</td>
                    <td className="p-2">Análisis datos</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Financial Services</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Se mantendrá igual</td>
                    <td className="p-2">Expandir servicios</td>
                    <td className="p-2">Back-office</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Healthcare</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Probable crecimiento</td>
                    <td className="p-2">Añadir servicios</td>
                    <td className="p-2">Soluciones IA</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Electrodomésticos</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Se mantendrá igual</td>
                    <td className="p-2">Expandir servicios</td>
                    <td className="p-2">Automatización</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">FMCG</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Probable crecimiento</td>
                    <td className="p-2">Nuevas tecnologías</td>
                    <td className="p-2">Ventas</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Viajes/Hospitalidad</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Probable disminución</td>
                    <td className="p-2">Expandir regiones</td>
                    <td className="p-2">Soluciones IA</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Automotriz</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Probable crecimiento</td>
                    <td className="p-2">Nuevas tecnologías</td>
                    <td className="p-2">Automatización</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm">
              <p><strong>Insight crítico:</strong> Viajes/Hospitalidad proyecta disminución a pesar de alta capacidad transformativa, sugiriendo oportunidad urgente de reposicionamiento con soluciones IA para revertir tendencia.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
