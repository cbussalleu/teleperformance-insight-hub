
import React from 'react';
import { Layout } from '@/components/Layout';
import { StatCard } from '@/components/StatCard';
import { BarChart } from '@/components/BarChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const keyFindingsData = [
  { name: 'Experiencia (Muy buena/Excelente)', Nearshore: 78, Domestic: 75 },
  { name: 'Percepción como Proveedor Tecnológico', Nearshore: 33, Domestic: 50 },
  { name: 'Percepción como BPO', Nearshore: 33, Domestic: 25 },
  { name: 'Barrera: Percepción call center', Nearshore: 56, Domestic: 75 },
  { name: 'Oportunidad: Transformación digital', Nearshore: 56, Domestic: 75 },
  { name: 'Driver: Propuestas innovadoras', Nearshore: 67, Domestic: 75 },
];

const satisfactionData = [
  { name: 'Excelente', Nearshore: 33.3, Domestic: 25 },
  { name: 'Muy buena', Nearshore: 44.4, Domestic: 50 },
  { name: 'Buena', Nearshore: 22.2, Domestic: 25 },
];

export default function Index() {
  return (
    <Layout 
      title="Estudio de Posicionamiento de Marca Teleperformance"
      description="Estudio con 13 respuestas (9 Nearshore, 4 Domestic)"
    >
      <div className="grid gap-6 animate-fade-in">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold">Resumen Ejecutivo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatCard 
                title="Satisfacción" 
                value="80%" 
                description="Califican experiencia Muy Buena o Excelente" 
              />
              <StatCard 
                title="Percepción Domestic" 
                value="50%" 
                description="Perciben a TP como Proveedor Tecnológico" 
              />
              <StatCard 
                title="Percepción Nearshore" 
                value="33%" 
                description="Perciben a TP como BPO" 
              />
              <StatCard 
                title="Duración de Relación" 
                value="53.8%" 
                description="Más de 3 años de relación comercial" 
              />
            </div>
            
            <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
              <BarChart 
                data={keyFindingsData} 
                keys={['Nearshore', 'Domestic']}
                title="Hallazgos Clave" 
                subtitle="Comparativa entre segmentos (porcentajes)" 
                height={400}
              />
              
              <BarChart 
                data={satisfactionData} 
                keys={['Nearshore', 'Domestic']} 
                title="Satisfacción General" 
                subtitle="Experiencia con servicios de Teleperformance" 
                height={400}
              />
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Principales Barreras</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Percepción histórica como call center</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-teleperformance-purple text-white text-xs">56% NS</span>
                  <span className="px-2 py-1 rounded bg-teleperformance-magenta text-white text-xs">75% DM</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Límite en capacidades tecnológicas</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-teleperformance-purple text-white text-xs">44% NS</span>
                  <span className="px-2 py-1 rounded bg-teleperformance-magenta text-white text-xs">50% DM</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Falta de conocimiento industria</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-teleperformance-purple text-white text-xs">33% NS</span>
                  <span className="px-2 py-1 rounded bg-teleperformance-magenta text-white text-xs">25% DM</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Principales Oportunidades</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Transformación digital</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-teleperformance-purple text-white text-xs">56% NS</span>
                  <span className="px-2 py-1 rounded bg-teleperformance-magenta text-white text-xs">75% DM</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Soluciones tecnológicas</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-teleperformance-purple text-white text-xs">44% NS</span>
                  <span className="px-2 py-1 rounded bg-teleperformance-magenta text-white text-xs">75% DM</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Innovación en CX</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-teleperformance-purple text-white text-xs">33% NS</span>
                  <span className="px-2 py-1 rounded bg-teleperformance-magenta text-white text-xs">50% DM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Industrias más receptivas al reposicionamiento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2 text-teleperformance-purple">Nearshore</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Retail/E-commerce</li>
                  <li>Technology</li>
                  <li>Financial Services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-teleperformance-magenta">Domestic</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Viajes/Hospitalidad</li>
                  <li>Automotriz</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
