import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

const industryRepositioningData = [
  { name: 'Viajes/Hospitalidad', Domestic: 5.0, Nearshore: 0 },
  { name: 'Automotriz', Domestic: 5.0, Nearshore: 0 },
  { name: 'Retail/E-commerce', Domestic: 0, Nearshore: 4.0 },
  { name: 'Media/Entertainment', Domestic: 0, Nearshore: 4.0 },
  { name: 'Energy/Utilities', Domestic: 0, Nearshore: 4.0 },
  { name: 'Healthcare', Domestic: 0, Nearshore: 4.0 },
  { name: 'Electrodomésticos', Domestic: 4.0, Nearshore: 0 },
  { name: 'Financial Services', Domestic: 0, Nearshore: 3.0 },
  { name: 'Technology', Domestic: 0, Nearshore: 3.0 },
  { name: 'FMCG', Domestic: 3.0, Nearshore: 0 },
];

export default function Industria() {
  return (
    <Layout title="Análisis por Industria">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Industrias Alta Receptividad" 
            value="4" 
            description="Industrias con capacidad transformativa ≥4.5/5" 
          />
          <StatCard 
            title="Industrias Baja Receptividad" 
            value="2" 
            description="Industrias con capacidad transformativa ≤3.5/5" 
          />
          <StatCard 
            title="Máxima Puntuación" 
            value="5.0/5" 
            description="Viajes/Hospitalidad y Automotriz (Domestic)" 
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Satisfacción y Capacidad Transformativa por Industria</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={industryRepositioningData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Capacidad percibida para transformación (1-5)" 
              height={400}
              isPercentage={false}
              valueScale={[0, 5]}
              tooltipFormatter={(value) => `${value.toFixed(1)}`}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis actualizado por industria:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Líderes absolutos:</strong> Viajes/Hospitalidad y Automotriz (5.0/5) muestran máxima capacidad transformativa en Domestic.</li>
                <li><strong>Grupo sólido Nearshore:</strong> Retail/E-commerce, Media/Entertainment, Energy/Utilities, Healthcare (4.0/5) forman cluster fuerte.</li>
                <li><strong>Desafíos identificados:</strong> Technology, Financial Services (Nearshore) y FMCG (Domestic) con 3.0/5 requieren enfoque específico.</li>
                <li><strong>Brecha entre segmentos:</strong> Domestic promedio 4.3/5 vs Nearshore 3.7/5, confirmando mayor receptividad tecnológica.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Casos Específicos por Industria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 border rounded-lg bg-red-50 border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">Energy/Utilities (NRG Energy)</h4>
                <p className="text-sm text-red-700 mb-2"><strong>Demanda articulada:</strong> AI/analytics específicamente solicitados</p>
                <p className="text-sm text-red-700 mb-2"><strong>Percepción limitada:</strong> Aún ve TP como BPO tradicional</p>
                <p className="text-xs text-red-600"><strong>Acción:</strong> Programa Innovation Outreach prioritario</p>
              </div>
              
              <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Domestic General</h4>
                <p className="text-sm text-blue-700 mb-2"><strong>Mayor receptividad tecnológica:</strong> Base previa favorable (40% innovador)</p>
                <p className="text-sm text-blue-700 mb-2"><strong>Asociación estratégica:</strong> 75% vs 40% Nearshore en áreas clave</p>
                <p className="text-xs text-blue-600"><strong>Estrategia:</strong> Reposicionamiento directo hacia tecnología</p>
              </div>
              
              <div className="p-4 border rounded-lg bg-amber-50 border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Viajes/Hospitalidad</h4>
                <p className="text-sm text-amber-700 mb-2"><strong>Máxima capacidad transformativa:</strong> 5.0/5 pero proyección disminución</p>
                <p className="text-sm text-amber-700 mb-2"><strong>Oportunidad urgente:</strong> Reposicionamiento para revertir tendencia</p>
                <p className="text-xs text-amber-600"><strong>Foco:</strong> Soluciones IA y expansión regional</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Análisis Detallado por Industria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Industria</th>
                    <th className="text-left p-2">Segmento</th>
                    <th className="text-left p-2">Categoría Percibida</th>
                    <th className="text-left p-2">Capacidad Transformativa</th>
                    <th className="text-left p-2">Oportunidad Reposicionamiento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Retail/E-commerce</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Consultor estratégico</td>
                    <td className="p-2">4.0/5</td>
                    <td className="p-2"><span className="text-green-600 font-medium">Alta</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Technology</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Experiencia omnicanal</td>
                    <td className="p-2">3.0/5</td>
                    <td className="p-2"><span className="text-red-600 font-medium">Baja</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Media/Entertainment</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Agentes especializados</td>
                    <td className="p-2">4.0/5</td>
                    <td className="p-2"><span className="text-green-600 font-medium">Alta</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Energy/Utilities</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">BPO</td>
                    <td className="p-2">4.0/5</td>
                    <td className="p-2"><span className="text-amber-600 font-medium">Media</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Financial Services</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">BPO</td>
                    <td className="p-2">3.0/5</td>
                    <td className="p-2"><span className="text-red-600 font-medium">Baja</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Healthcare</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Agentes especializados</td>
                    <td className="p-2">4.0/5</td>
                    <td className="p-2"><span className="text-green-600 font-medium">Alta</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Electrodomésticos</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">BPO</td>
                    <td className="p-2">4.0/5</td>
                    <td className="p-2"><span className="text-amber-600 font-medium">Media</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">FMCG</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Experiencia omnicanal</td>
                    <td className="p-2">3.0/5</td>
                    <td className="p-2"><span className="text-red-600 font-medium">Baja</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Viajes/Hospitalidad</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Soluciones tecnológicas</td>
                    <td className="p-2">5.0/5</td>
                    <td className="p-2"><span className="text-green-600 font-medium">Alta</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Automotriz</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Soluciones tecnológicas</td>
                    <td className="p-2">5.0/5</td>
                    <td className="p-2"><span className="text-green-600 font-medium">Alta</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm">
              <p><strong>Insight crítico:</strong> Las industrias con percepción actual como "Soluciones tecnológicas" (Viajes/Hospitalidad, Automotriz) muestran máxima capacidad transformativa, validando la correlación entre percepción avanzada y receptividad al reposicionamiento.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Estrategia de Reposicionamiento por Industria</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p>Basado en el análisis actualizado, se confirma estrategia segmentada por industria:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Fase 1: Industrias prioritarias (Capacidad ≥4.5/5)</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Viajes/Hospitalidad (5.0/5):</strong> Reposicionamiento urgente para revertir proyección de disminución mediante soluciones IA</li>
                  <li><strong>Automotriz (5.0/5):</strong> Capitalizar percepción tecnológica para profundizar en automatización y analytics</li>
                  <li><strong>Retail/E-commerce (4.0/5):</strong> Evolucionar desde consultoría hacia socio integral tecnológico</li>
                  <li><strong>Media/Entertainment (4.0/5):</strong> Desarrollar propuestas IA específicas para industria creativa</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Fase 2: Industrias desafiantes (Capacidad ≤3.5/5)</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Technology (3.0/5):</strong> Implementar Innovation Outreach específico, demostrar capacidades tecnológicas superiores</li>
                  <li><strong>Financial Services (3.0/5):</strong> Enfoque gradual desde BPO hacia servicios regulatorios especializados</li>
                  <li><strong>FMCG (3.0/5):</strong> Desarrollar casos de éxito en analytics de consumo y automatización de ventas</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Caso Crítico: Energy/Utilities</h4>
              <p className="text-red-700">
                <strong>NRG Energy como caso piloto:</strong> A pesar de capacidad transformativa sólida (4.0/5), la percepción 
                como BPO y la falta de proactividad comercial ("pulling teeth") requieren intervención inmediata. 
                Implementar programa Innovation Outreach con propuestas específicas de AI/analytics para sector energético, 
                usando este caso como modelo para replicar en otras industrias con demanda articulada pero percepción limitada.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
