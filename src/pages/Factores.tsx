import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

const growthFactorsData = [
  { name: 'Integración tecnologías', Nearshore: 56, Domestic: 80 },
  { name: 'Fortalecer rol estratégico', Nearshore: 44, Domestic: 80 },
  { name: 'Soluciones personalizadas', Nearshore: 33, Domestic: 40 },
  { name: 'Mejorar capacitación', Nearshore: 22, Domestic: 40 },
];

const relationshipEndFactorsData = [
  { name: 'Incremento en costos', Nearshore: 78, Domestic: 100 },
  { name: 'Deterioro en calidad', Nearshore: 67, Domestic: 60 },
  { name: 'Cambios en necesidades', Nearshore: 44, Domestic: 0 },
  { name: 'Problemas sin solución', Nearshore: 33, Domestic: 0 },
  { name: 'Rotación de personal', Nearshore: 11, Domestic: 40 },
  { name: 'Mejor oferta competencia', Nearshore: 11, Domestic: 40 },
];

export default function Factores() {
  return (
    <Layout title="Factores de Crecimiento y Riesgo">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Factor Crecimiento Principal" 
            value="64%" 
            description="Integración tecnologías - Área de mejora más mencionada" 
            trend="up"
            trendValue="80% Domestic"
          />
          <StatCard 
            title="Factor Riesgo Principal" 
            value="86%" 
            description="Incremento costos - Principal amenaza para continuidad" 
            trend="up"
            trendValue="100% Domestic"
          />
          <StatCard 
            title="Segundo Factor Riesgo" 
            value="64%" 
            description="Deterioro calidad - Segunda amenaza más mencionada" 
            trend="neutral"
            trendValue="60% Domestic"
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Barrera Crítica Cualitativa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 border-l-4 border-red-500 bg-red-50">
              <h4 className="font-semibold text-red-800 mb-2">Falta de Proactividad Comercial</h4>
              <div className="text-sm text-red-700 space-y-2">
                <p><strong>Caso NRG Energy:</strong> "Pulling teeth" para obtener propuestas innovadoras</p>
                <p><strong>Descripción:</strong> Clientes deben solicitar explícitamente propuestas de nuevos servicios en lugar de recibirlas proactivamente</p>
                <p><strong>Impacto:</strong> Barrera crítica que debe abordarse inmediatamente para facilitar reposicionamiento</p>
                <p><strong>Acción requerida:</strong> Implementar programa "Innovation Outreach" proactivo</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
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
              <p className="mb-2">Análisis de factores de crecimiento actualizados:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Integración tecnológica dominante:</strong> 64% promedio, con énfasis crítico en Domestic (80% vs 56%).</li>
                <li><strong>Rol estratégico igual prioridad:</strong> 80% Domestic vs 44% Nearshore, confirmando mayor receptividad para reposicionamiento consultivo.</li>
                <li><strong>Soluciones personalizadas estables:</strong> ~35% ambos segmentos, sugiriendo demanda consistente por customización.</li>
                <li><strong>Capacitación como habilitador:</strong> Mayor énfasis en Domestic (40% vs 22%), alineado con demanda de servicios avanzados.</li>
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
                <li><strong>Incremento costos crítico:</strong> 86% promedio (78% Nearshore, 100% Domestic) - reposicionamiento debe enfatizar ROI claramente.</li>
                <li><strong>Calidad como base:</strong> 64% considera deterioro como riesgo, reforzando necesidad de mantener estándares durante transición.</li>
                <li><strong>Diferentes vulnerabilidades:</strong> Nearshore más sensible a cambios de negocio, Domestic a competencia y rotación personal.</li>
                <li><strong>Oportunidad en problemas:</strong> Nearshore 33% ve "Problemas sin solución" como riesgo vs 0% Domestic, sugiriendo enfoque proactivo diferenciado.</li>
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
                    <td className="p-2">Retail/E-commerce</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Integración tecnológica</td>
                    <td className="p-2">Incremento costos</td>
                    <td className="p-2">Alta</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Technology</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Fortalecer rol estratégico</td>
                    <td className="p-2">Deterioro calidad</td>
                    <td className="p-2">Media</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Media/Entertainment</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Integración tecnológica</td>
                    <td className="p-2">Incremento costos</td>
                    <td className="p-2">Alta</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Energy/Utilities</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Integración tecnológica</td>
                    <td className="p-2">Cambios necesidades</td>
                    <td className="p-2">Media</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Financial Services</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Soluciones personalizadas</td>
                    <td className="p-2">Deterioro calidad</td>
                    <td className="p-2">Alta</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Healthcare</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Mejorar capacitación</td>
                    <td className="p-2">Incremento costos</td>
                    <td className="p-2">Media</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Electrodomésticos</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Fortalecer rol estratégico</td>
                    <td className="p-2">Incremento costos</td>
                    <td className="p-2">Alta</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">FMCG</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Integración tecnológica</td>
                    <td className="p-2">Incremento costos</td>
                    <td className="p-2">Media</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Viajes/Hospitalidad</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Soluciones personalizadas</td>
                    <td className="p-2">Mejor oferta</td>
                    <td className="p-2">Alta</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Automotriz</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Integración tecnológica</td>
                    <td className="p-2">Rotación personal</td>
                    <td className="p-2">Media-Alta</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm">
              <p><strong>Insight crítico:</strong> Energy/Utilities (caso NRG) identifica "Cambios en necesidades" como riesgo principal, validando la necesidad de proactividad comercial para anticipar evolución sectorial.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Implicaciones para el Reposicionamiento</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p>El análisis actualizado revela patrones críticos para el reposicionamiento exitoso:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-teleperformance-purple/10">
                <h4 className="font-semibold text-teleperformance-purple mb-2">Enfoque Nearshore</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Proactividad inmediata:</strong> Implementar "Innovation Outreach" para casos como NRG Energy</li>
                  <li><strong>Anticipar cambios:</strong> Monitoreo proactivo de evolución sectorial</li>
                  <li><strong>Enfatizar estabilidad:</strong> Comunicar continuidad en calidad durante transición</li>
                  <li><strong>ROI tecnológico:</strong> Demostrar valor cuantificable de integraciones</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg bg-teleperformance-magenta/10">
                <h4 className="font-semibold text-teleperformance-magenta mb-2">Enfoque Domestic</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Retención de talento:</strong> Estrategias específicas para minimizar rotación</li>
                  <li><strong>Ventajas competitivas:</strong> Desarrollar diferenciales únicos y sostenibles</li>
                  <li><strong>Rol estratégico acelerado:</strong> Capitalizar alta receptividad (80%)</li>
                  <li><strong>Justificación de costos:</strong> Énfasis en ROI dada sensibilidad total (100%)</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Acción Inmediata Requerida</h4>
              <p className="text-amber-700">
                <strong>Programa "Innovation Outreach":</strong> Implementación urgente de iniciativa proactiva para presentar 
                propuestas innovadoras sin esperar solicitudes explícitas, comenzando con casos identificados como NRG Energy 
                y expandiendo sistemáticamente a toda la base de clientes.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
