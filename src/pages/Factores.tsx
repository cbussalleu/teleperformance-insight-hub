import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

// Datos de factores que potencian el crecimiento
const growthFactorsData = [
  { name: 'Integración tecnologías', Nearshore: 56, Domestic: 75 },
  { name: 'Fortalecer rol estratégico', Nearshore: 44, Domestic: 75 },
  { name: 'Soluciones personalizadas', Nearshore: 33, Domestic: 50 },
  { name: 'Mejorar capacitación', Nearshore: 22, Domestic: 50 },
  { name: 'Sin respuesta', Nearshore: 22, Domestic: 0 },
];

// Datos de factores de fin de relación
const relationshipEndFactorsData = [
  { name: 'Incremento en costos', Nearshore: 78, Domestic: 100 },
  { name: 'Deterioro en calidad', Nearshore: 67, Domestic: 75 },
  { name: 'Cambios en necesidades', Nearshore: 44, Domestic: 0 },
  { name: 'Problemas sin solución', Nearshore: 33, Domestic: 0 },
  { name: 'Rotación de personal', Nearshore: 11, Domestic: 50 },
  { name: 'Mejor oferta competencia', Nearshore: 11, Domestic: 50 },
];

export default function Factores() {
  return (
    <Layout title="Factores de Crecimiento y Riesgo">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Integración Tecnológica" 
            value="62%" 
            description="Factor clave para crecimiento" 
            trend="up"
            trendValue="75% Domestic"
          />
          <StatCard 
            title="Incremento en Costos" 
            value="85%" 
            description="Principal factor de riesgo" 
            trend="up"
            trendValue="100% Domestic"
          />
          <StatCard 
            title="Deterioro en Calidad" 
            value="69%" 
            description="Segundo factor de riesgo" 
            trend="up"
            trendValue="75% Domestic"
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Factores que Potencian el Crecimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={growthFactorsData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Factores para lograr mayor alineación estratégica" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de factores de crecimiento:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Las áreas de mejora identificadas están perfectamente alineadas con el reposicionamiento deseado: tecnología avanzada, rol estratégico y soluciones personalizadas.</li>
                <li>Los clientes Domestic muestran mayor énfasis en todas estas áreas, sugiriendo mayor receptividad al reposicionamiento en este segmento.</li>
                <li>"Mejorar integración de tecnologías de punta" es el factor más importante para ambos segmentos (56% Nearshore, 75% Domestic).</li>
                <li>"Fortalecer rol como socio estratégico" muestra una diferencia significativa entre segmentos (44% Nearshore vs 75% Domestic), sugiriendo que los clientes Domestic están más abiertos a una relación estratégica.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Factores que Podrían Terminar la Relación</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={relationshipEndFactorsData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Factores de riesgo para la continuidad" 
              height={350}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de factores de riesgo:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>El "Incremento significativo en costos" representa el principal factor de riesgo para la continuidad de las relaciones (78% Nearshore, 100% Domestic), sugiriendo que el reposicionamiento debe enfatizar claramente el valor añadido para justificar cualquier diferencial de precio.</li>
                <li>La importancia del "Deterioro en calidad del servicio" (67% Nearshore, 75% Domestic) refuerza la necesidad de mantener altos estándares de calidad durante el proceso de reposicionamiento.</li>
                <li>Los clientes Nearshore dan más importancia a "Cambios en necesidades de negocio" (44% vs 0%) y "Problemas recurrentes sin solución" (33% vs 0%).</li>
                <li>Los clientes Domestic son más sensibles a la "Rotación de personal" (50% vs 11%) y a "Mejores ofertas competitivas" (50% vs 11%), sugiriendo un entorno más competitivo en este segmento.</li>
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
                    <th className="text-left p-2">Factor Crecimiento Principal</th>
                    <th className="text-left p-2">Factor Riesgo Principal</th>
                    <th className="text-left p-2">Sensibilidad al Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Technology</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Integración tecnologías</td>
                    <td className="p-2">Incremento en costos</td>
                    <td className="p-2">Alta</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Retail/E-commerce</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Fortalecer rol estratégico</td>
                    <td className="p-2">Incremento en costos</td>
                    <td className="p-2">Alta</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Media/Entertainment</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Integración tecnologías</td>
                    <td className="p-2">Deterioro en calidad</td>
                    <td className="p-2">Media</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Energy/Utilities</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Soluciones personalizadas</td>
                    <td className="p-2">Incremento en costos</td>
                    <td className="p-2">Alta</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Financial Services</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Fortalecer rol estratégico</td>
                    <td className="p-2">Cambios en necesidades</td>
                    <td className="p-2">Media</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Healthcare</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Integración tecnologías</td>
                    <td className="p-2">Deterioro en calidad</td>
                    <td className="p-2">Media</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Electrodomésticos</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Integración tecnologías</td>
                    <td className="p-2">Incremento en costos</td>
                    <td className="p-2">Alta</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">FMCG</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Fortalecer rol estratégico</td>
                    <td className="p-2">Rotación de personal</td>
                    <td className="p-2">Media</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Viajes/Hospitalidad</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Integración tecnologías</td>
                    <td className="p-2">Incremento en costos</td>
                    <td className="p-2">Alta</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Automotriz</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Fortalecer rol estratégico</td>
                    <td className="p-2">Mejor oferta competencia</td>
                    <td className="p-2">Media-Alta</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm">
              <p>Las industrias más sensibles al "Incremento en costos" son Technology, Retail/E-commerce, Energy/Utilities, Electrodomésticos y Viajes/Hospitalidad. Para estas industrias, el reposicionamiento debe enfatizar el valor añadido para justificar cualquier incremento de precios.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Correlación entre Factores de Crecimiento y Riesgo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Factor Crecimiento</th>
                    <th className="text-left p-2">% Total</th>
                    <th className="text-left p-2">Factor Riesgo Asociado</th>
                    <th className="text-left p-2">% Total</th>
                    <th className="text-left p-2">Implicación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Integración tecnologías</td>
                    <td className="p-2">62%</td>
                    <td className="p-2">Incremento en costos</td>
                    <td className="p-2">85%</td>
                    <td className="p-2">Demostrar ROI de tecnologías</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Fortalecer rol estratégico</td>
                    <td className="p-2">54%</td>
                    <td className="p-2">Deterioro en calidad</td>
                    <td className="p-2">69%</td>
                    <td className="p-2">Mantener calidad en transición</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Soluciones personalizadas</td>
                    <td className="p-2">38%</td>
                    <td className="p-2">Cambios en necesidades</td>
                    <td className="p-2">31%</td>
                    <td className="p-2">Flexibilidad y adaptabilidad</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Mejorar capacitación</td>
                    <td className="p-2">31%</td>
                    <td className="p-2">Rotación de personal</td>
                    <td className="p-2">23%</td>
                    <td className="p-2">Retención y desarrollo talento</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de correlaciones:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Existe una correlación entre los factores que potencian el crecimiento y los que representan riesgo, sugiriendo áreas clave para un reposicionamiento exitoso.</li>
                <li>La integración de tecnologías avanzadas debe ir acompañada de una clara demostración de valor (ROI) para mitigar la preocupación por el incremento en costos.</li>
                <li>El fortalecimiento del rol estratégico debe mantener los altos estándares de calidad actuales para evitar deterioro durante la transición.</li>
                <li>Las soluciones personalizadas deben ser suficientemente flexibles para adaptarse a cambios en las necesidades del negocio.</li>
                <li>La mejora en capacitación debe ir acompañada de estrategias de retención de talento para minimizar el impacto de la rotación de personal.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Implicaciones para el Reposicionamiento</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p>Las diferencias entre segmentos sugieren un enfoque diferencial para mitigar riesgos:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-teleperformance-purple/10">
                <h4 className="font-semibold text-teleperformance-purple mb-2">Nearshore</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Anticiparse a cambios en necesidades del negocio</li>
                  <li>Mejorar procesos de resolución de problemas</li>
                  <li>Enfatizar estabilidad y cumplimiento de compromisos</li>
                  <li>Desarrollar soluciones personalizadas adaptables</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg bg-teleperformance-magenta/10">
                <h4 className="font-semibold text-teleperformance-magenta mb-2">Domestic</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Enfoque en estabilidad de personal y retención</li>
                  <li>Desarrollar ventajas competitivas claras y diferenciales</li>
                  <li>Demostrar ROI de soluciones tecnológicas</li>
                  <li>Transparencia en estructura de costos y valor añadido</li>
                </ul>
              </div>
            </div>
            
            <p className="mt-4">
              La estrategia de reposicionamiento debe equilibrar la introducción de nuevas capacidades con la mitigación de los riesgos percibidos. En particular, debe enfatizar el valor añadido de las nuevas capacidades para justificar cualquier potencial incremento en costos, especialmente en industrias de alta sensibilidad al precio como Technology, Retail/E-commerce y Viajes/Hospitalidad.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
