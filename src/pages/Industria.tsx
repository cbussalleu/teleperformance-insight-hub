import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

// Datos de satisfacción y capacidad transformativa por industria
const industryData = [
  { industry: 'Retail/E-commerce', satisfaction: 5.0, repositioning: 4.0, segment: 'Nearshore' },
  { industry: 'Technology', satisfaction: 5.0, repositioning: 3.0, segment: 'Nearshore' },
  { industry: 'Media/Entertainment', satisfaction: 5.0, repositioning: 4.0, segment: 'Nearshore' },
  { industry: 'Energy/Utilities', satisfaction: 4.0, repositioning: 4.0, segment: 'Nearshore' },
  { industry: 'Financial Services', satisfaction: 4.0, repositioning: 3.0, segment: 'Nearshore' },
  { industry: 'Healthcare', satisfaction: 4.0, repositioning: 4.0, segment: 'Nearshore' },
  { industry: 'Electrodomésticos', satisfaction: 4.0, repositioning: 4.0, segment: 'Domestic' },
  { industry: 'FMCG', satisfaction: 4.0, repositioning: 3.0, segment: 'Domestic' },
  { industry: 'Viajes/Hospitalidad', satisfaction: 5.0, repositioning: 5.0, segment: 'Domestic' },
  { industry: 'Automotriz', satisfaction: 5.0, repositioning: 5.0, segment: 'Domestic' },
];

// Datos reposicionamiento por industria
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

// Datos percepción categoría por industria
const industryPerceptionData = [
  { industry: 'Retail/E-commerce', category: 'Consultor estratégico', segment: 'Nearshore' },
  { industry: 'Technology', category: 'Experiencia omnicanal', segment: 'Nearshore' },
  { industry: 'Media/Entertainment', category: 'Agentes especializados', segment: 'Nearshore' },
  { industry: 'Energy/Utilities', category: 'BPO', segment: 'Nearshore' },
  { industry: 'Financial Services', category: 'BPO', segment: 'Nearshore' },
  { industry: 'Healthcare', category: 'Agentes especializados', segment: 'Nearshore' },
  { industry: 'Electrodomésticos', category: 'BPO', segment: 'Domestic' },
  { industry: 'FMCG', category: 'Experiencia omnicanal', segment: 'Domestic' },
  { industry: 'Viajes/Hospitalidad', category: 'Soluciones tecnológicas', segment: 'Domestic' },
  { industry: 'Automotriz', category: 'Soluciones tecnológicas', segment: 'Domestic' },
];

export default function Industria() {
  return (
    <Layout title="Análisis por Industria">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Industrias Alta Receptividad" 
            value="4" 
            description="Viajes/Hospitalidad, Automotriz, Retail, Media" 
          />
          <StatCard 
            title="Industrias Baja Receptividad" 
            value="3" 
            description="Technology, Financial Services, FMCG" 
          />
          <StatCard 
            title="Máxima Puntuación" 
            value="5.0/5.0" 
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
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis por industria:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Las industrias con mayor capacidad transformativa percibida (5.0/5.0) son Viajes/Hospitalidad y Automotriz, ambas del segmento Domestic.</li>
                <li>Las industrias con menor capacidad transformativa (3.0/5.0) son Technology, Financial Services (Nearshore) y FMCG (Domestic).</li>
                <li>Las industrias Nearshore muestran en general menor capacidad transformativa que las Domestic, con promedios de 3.7 vs 4.3 respectivamente.</li>
                <li>Existe una correlación positiva entre satisfacción general y capacidad transformativa, particularmente en clientes Domestic.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Percepción de Categoría por Industria</CardTitle>
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
                  {industryPerceptionData.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">{item.industry}</td>
                      <td className="p-2">
                        <span className={`px-2 py-0.5 rounded text-xs ${item.segment === 'Nearshore' ? 'bg-teleperformance-purple' : 'bg-teleperformance-magenta'} text-white`}>
                          {item.segment}
                        </span>
                      </td>
                      <td className="p-2">{item.category}</td>
                      <td className="p-2">
                        {item.industry === 'Viajes/Hospitalidad' || item.industry === 'Automotriz' ? '5.0/5.0' : 
                         item.industry === 'Technology' || item.industry === 'Financial Services' || item.industry === 'FMCG' ? '3.0/5.0' : '4.0/5.0'}
                      </td>
                      <td className="p-2">
                        {(item.category === 'Soluciones tecnológicas' || item.category === 'Consultor estratégico') ? 
                          <span className="text-green-600 font-medium">Alta</span> : 
                          item.category === 'BPO' ? 
                          <span className="text-red-600 font-medium">Baja</span> : 
                          <span className="text-amber-600 font-medium">Media</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm">
              <p>Las industrias con percepción actual más favorable para el reposicionamiento son Viajes/Hospitalidad y Automotriz (Domestic) que ya perciben a TP como "Proveedor de soluciones tecnológicas", y Retail/E-commerce (Nearshore) que lo percibe como "Consultor estratégico".</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Industrias Más Receptivas al Reposicionamiento</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-teleperformance-magenta/10">
                <h4 className="font-semibold text-teleperformance-magenta mb-2">Segment Domestic:</h4>
                <ol className="list-decimal pl-6 space-y-1">
                  <li><span className="font-semibold">Viajes/Hospitalidad</span>: Alta capacidad transformativa (5/5), percepción como "Soluciones tecnológicas", alto interés en nuevos servicios (IA, análisis de datos)</li>
                  <li><span className="font-semibold">Automotriz</span>: Alta capacidad transformativa (5/5), percepción como "Soluciones tecnológicas", alto interés en nuevas tecnologías</li>
                </ol>
              </div>
              
              <div className="p-4 border rounded-lg bg-teleperformance-purple/10">
                <h4 className="font-semibold text-teleperformance-purple mb-2">Segment Nearshore:</h4>
                <ol className="list-decimal pl-6 space-y-1">
                  <li><span className="font-semibold">Retail/E-commerce</span>: Alta satisfacción (5/5), percepción como "Consultor estratégico", alta capacidad transformativa (4/5)</li>
                  <li><span className="font-semibold">Media/Entertainment</span>: Alta satisfacción (5/5), interés en nuevas tecnologías, capacidad transformativa (4/5)</li>
                </ol>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Industrias con mayores desafíos para el reposicionamiento:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg bg-gray-50">
                  <h5 className="font-medium mb-2">Segment Nearshore:</h5>
                  <ol className="list-decimal pl-6 space-y-1">
                    <li><span className="font-semibold">Technology</span>: Aunque reporta alta satisfacción (5/5), muestra baja capacidad transformativa (3/5) y percepción como "Experiencia omnicanal"</li>
                    <li><span className="font-semibold">Financial Services</span>: Moderada satisfacción (4/5), baja capacidad transformativa (3/5), percepción como "BPO"</li>
                  </ol>
                </div>
                
                <div className="p-4 border rounded-lg bg-gray-50">
                  <h5 className="font-medium mb-2">Segment Domestic:</h5>
                  <ol className="list-decimal pl-6 space-y-1">
                    <li><span className="font-semibold">FMCG</span>: Moderada satisfacción (4/5), capacidad transformativa media (3/5), percepción como "Experiencia omnicanal"</li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Estrategia de Reposicionamiento por Industria</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p>Basado en el análisis, se recomienda una estrategia de reposicionamiento segmentada por industria:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Fase 1: Industrias prioritarias</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><span className="font-semibold">Viajes/Hospitalidad y Automotriz (Domestic)</span>: Enfatizar las capacidades en soluciones tecnológicas avanzadas y transformación digital, donde ya son percibidos en esta categoría.</li>
                  <li><span className="font-semibold">Retail/E-commerce (Nearshore)</span>: Capitalizar en la percepción ya existente como "Consultor estratégico" para profundizar en este posicionamiento.</li>
                  <li><span className="font-semibold">Media/Entertainment (Nearshore)</span>: Enfocarse en soluciones tecnológicas y propuestas innovadoras específicas para esta industria.</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Fase 2: Industrias desafiantes</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><span className="font-semibold">Technology, Financial Services (Nearshore), FMCG (Domestic)</span>: Adoptar un enfoque más gradual, comenzando con demostraciones de capacidades tecnológicas antes de avanzar hacia el posicionamiento como socio estratégico.</li>
                  <li><span className="font-semibold">Energy/Utilities, Healthcare (Nearshore), Electrodomésticos (Domestic)</span>: Enfocarse en casos de éxito específicos por industria y propuestas de valor personalizadas.</li>
                </ul>
              </div>
            </div>
            
            <p className="mt-4">
              La estrategia debe considerar las diferencias entre segmentos, con un enfoque más directo en capacidades tecnológicas para Domestic y un enfoque más gradual de consultoría para Nearshore, adaptado a las particularidades de cada industria.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
