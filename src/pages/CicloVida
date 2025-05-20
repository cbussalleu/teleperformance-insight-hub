import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

// Datos de proyección a 1 año
const projectionOneYearData = [
  { name: 'Probable crecimiento', Nearshore: 33, Domestic: 50 },
  { name: 'Se mantendrá igual', Nearshore: 44, Domestic: 25 },
  { name: 'Probable disminución', Nearshore: 0, Domestic: 25 },
  { name: 'Sin respuesta', Nearshore: 22, Domestic: 0 },
];

// Datos de proyección a 2-3 años
const projectionThreeYearsData = [
  { name: 'Probable crecimiento', Nearshore: 33, Domestic: 50 },
  { name: 'Se mantendrá igual', Nearshore: 33, Domestic: 50 },
  { name: 'Probable disminución', Nearshore: 0, Domestic: 0 },
  { name: 'Sin respuesta', Nearshore: 33, Domestic: 0 },
];

// Datos de proyección a 4-5 años
const projectionFiveYearsData = [
  { name: 'Probable crecimiento', Nearshore: 22, Domestic: 25 },
  { name: 'Se mantendrá igual', Nearshore: 22, Domestic: 0 },
  { name: 'Probable disminución', Nearshore: 0, Domestic: 0 },
  { name: 'Sin respuesta', Nearshore: 56, Domestic: 75 },
];

// Datos de áreas de oportunidad
const opportunityAreasData = [
  { name: 'Nuevas tecnologías', Nearshore: 56, Domestic: 75 },
  { name: 'Expandir servicios actuales', Nearshore: 44, Domestic: 50 },
  { name: 'Añadir nuevos servicios', Nearshore: 44, Domestic: 50 },
  { name: 'Expandir a otras regiones', Nearshore: 33, Domestic: 50 },
  { name: 'Sin respuesta', Nearshore: 11, Domestic: 0 },
];

// Datos de servicios adicionales
const additionalServicesData = [
  { name: 'Soluciones de IA', Nearshore: 33, Domestic: 75 },
  { name: 'Consultoría estratégica', Nearshore: 22, Domestic: 0 },
  { name: 'Análisis avanzado de datos', Nearshore: 11, Domestic: 50 },
  { name: 'Automatización (RPA)', Nearshore: 11, Domestic: 50 },
  { name: 'Ventas', Nearshore: 0, Domestic: 50 },
  { name: 'Sin interés', Nearshore: 22, Domestic: 0 },
  { name: 'Sin respuesta', Nearshore: 11, Domestic: 0 },
];

// Datos de áreas de mejora para alineación
const improvementAreasData = [
  { name: 'Integración tecnologías', Nearshore: 56, Domestic: 75 },
  { name: 'Fortalecer rol estratégico', Nearshore: 44, Domestic: 75 },
  { name: 'Soluciones personalizadas', Nearshore: 33, Domestic: 50 },
  { name: 'Mejorar capacitación', Nearshore: 22, Domestic: 50 },
  { name: 'Sin respuesta', Nearshore: 22, Domestic: 0 },
];

export default function CicloVida() {
  return (
    <Layout title="Ciclo de Vida de la Relación">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Proyección Crecimiento" 
            value="38%" 
            description="Anticipa crecimiento próximo año" 
            trend="up"
            trendValue="50% Domestic"
          />
          <StatCard 
            title="Nuevas Tecnologías" 
            value="62%" 
            description="Ve oportunidad en implementación tecnológica" 
            trend="up"
            trendValue="75% Domestic"
          />
          <StatCard 
            title="Soluciones IA" 
            value="46%" 
            description="Interés en servicios adicionales de IA" 
            trend="up"
            trendValue="75% Domestic"
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
              <p className="mb-2">Los clientes Domestic muestran mayor dinamismo en sus proyecciones:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mayor optimismo para crecimiento a corto plazo (50% vs 33% en Nearshore).</li>
                <li>Incluyen el único caso de "Probable disminución" (25% vs 0% en Nearshore).</li>
                <li>Todos los clientes Domestic tienen una proyección definida (0% sin respuesta vs 22% en Nearshore).</li>
                <li>La mayoría de clientes Nearshore (44%) proyecta estabilidad para el próximo año.</li>
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
              <p className="mb-2">Para el mediano plazo (2-3 años):</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Los clientes Domestic mantienen mayor optimismo sobre el crecimiento (50% vs 33% en Nearshore).</li>
                <li>Ningún cliente proyecta disminución en este horizonte de tiempo.</li>
                <li>La incertidumbre aumenta en clientes Nearshore (33% sin respuesta vs 0% en Domestic).</li>
                <li>La estabilidad es valorada positivamente por ambos segmentos (33% Nearshore, 50% Domestic).</li>
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
              <p className="mb-2">Para el largo plazo (4-5 años):</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ambos segmentos muestran alta incertidumbre (56% Nearshore, 75% Domestic sin respuesta).</li>
                <li>El porcentaje que proyecta crecimiento disminuye respecto a proyecciones a menor plazo (22% Nearshore, 25% Domestic).</li>
                <li>Ningún cliente proyecta disminución, sugiriendo confianza básica en la relación.</li>
                <li>La dificultad para proyectar a tan largo plazo sugiere la dinámica cambiante del mercado y refuerza la necesidad del reposicionamiento.</li>
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
              <p className="mb-2">Análisis de oportunidades de crecimiento:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>La "Implementación de nuevas tecnologías" es la principal oportunidad para ambos segmentos, con mayor énfasis en clientes Domestic (75% vs 56%).</li>
                <li>Los clientes Domestic ven más oportunidades en todas las áreas, indicando mayor apertura a expandir y profundizar la relación.</li>
                <li>Es destacable que ningún cliente Domestic seleccionó "Sin respuesta", mientras un 11% de clientes Nearshore sí lo hizo.</li>
                <li>Las industrias con mayor interés en "Implementación de nuevas tecnologías" son Media/Entertainment, Technology, Healthcare (Nearshore) y Viajes/Hospitalidad, Automotriz, FMCG (Domestic).</li>
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
                <li>Los clientes Domestic muestran significativamente mayor interés en servicios adicionales, particularmente en "Soluciones de IA" (75% vs 33%).</li>
                <li>El interés en "Consultoría estratégica" solo aparece en clientes Nearshore (22% vs 0%).</li>
                <li>Los clientes Domestic muestran alto interés en "Análisis avanzado de datos" (50% vs 11%), "Automatización de procesos" (50% vs 11%) y "Ventas" (50% vs 0%).</li>
                <li>Las industrias con mayor interés en "Soluciones de IA" son Healthcare, Media/Entertainment, Technology (Nearshore) y Viajes/Hospitalidad, FMCG, Automotriz (Domestic).</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Áreas de Mejora para Mayor Alineación</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={improvementAreasData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Áreas para mejor alineación con objetivos estratégicos" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de áreas de mejora:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ambos segmentos identifican las mismas tres áreas principales de mejora, pero con mayor énfasis en los clientes Domestic.</li>
                <li>"Mejorar integración de tecnologías de punta" (75% Domestic vs 56% Nearshore) y "Fortalecer rol como socio estratégico" (75% Domestic vs 44% Nearshore) son las áreas más prioritarias.</li>
                <li>Los clientes Domestic también dan mayor importancia a "Fortalecer capacitación y especialización" (50% vs 22%).</li>
                <li>Las industrias que más enfatizan "Mejorar integración de tecnologías" son Technology, Media/Entertainment, Healthcare (Nearshore) y Viajes/Hospitalidad, Automotriz, Electrodomésticos (Domestic).</li>
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
                    <td className="p-2">Healthcare</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Crecimiento</td>
                    <td className="p-2">Nuevas tecnologías</td>
                    <td className="p-2">Soluciones de IA</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Retail/E-commerce</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Crecimiento</td>
                    <td className="p-2">Expandir a otras regiones</td>
                    <td className="p-2">Consultoría estratégica</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Energy/Utilities</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Crecimiento</td>
                    <td className="p-2">Expandir servicios actuales</td>
                    <td className="p-2">Sin interés específico</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">FMCG</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Crecimiento</td>
                    <td className="p-2">Nuevas tecnologías</td>
                    <td className="p-2">Soluciones de IA</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Automotriz</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Crecimiento</td>
                    <td className="p-2">Nuevas tecnologías</td>
                    <td className="p-2">Soluciones de IA, RPA</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Viajes/Hospitalidad</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Disminución</td>
                    <td className="p-2">Nuevas tecnologías</td>
                    <td className="p-2">Soluciones de IA, Análisis datos</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm">
              <p>Destaca que la industria de Viajes/Hospitalidad, a pesar de proyectar posible disminución a corto plazo, muestra alto interés en nuevas tecnologías y soluciones avanzadas, sugiriendo una oportunidad de reposicionamiento para revertir esa tendencia.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
