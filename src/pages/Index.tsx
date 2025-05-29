import React from 'react';
import { Layout } from '@/components/Layout';
import { StatCard } from '@/components/StatCard';
import { BarChart } from '@/components/BarChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const keyFindingsData = [
  { name: 'Transformación digital', Nearshore: 56, Domestic: 80 },
  { name: 'Soluciones tecnológicas', Nearshore: 44, Domestic: 80 },
  { name: 'Propuestas innovadoras', Nearshore: 67, Domestic: 80 },
  { name: 'Integración tecnologías', Nearshore: 56, Domestic: 80 },
  { name: 'Fortalecer rol estratégico', Nearshore: 44, Domestic: 80 },
  { name: 'Nuevas tecnologías', Nearshore: 56, Domestic: 80 },
];

const satisfactionData = [
  { name: 'Excelente', Nearshore: 33, Domestic: 20 },
  { name: 'Muy buena', Nearshore: 44, Domestic: 60 },
  { name: 'Buena', Nearshore: 22, Domestic: 20 },
];

export default function Index() {
  return (
    <Layout 
      title="Estudio de Posicionamiento de Marca Teleperformance"
      description="Estudio con 14 respuestas (9 Nearshore, 5 Domestic) + 3 entrevistas cualitativas"
    >
      <div className="grid gap-6 animate-fade-in">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold">Resumen Ejecutivo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatCard 
                title="Satisfacción General" 
                value="79%" 
                description="Califican experiencia como 'Muy buena' o 'Excelente'" 
              />
              <StatCard 
                title="Cumplimiento Expectativas" 
                value="4.6/5" 
                description="Calificación promedio de cumplimiento" 
              />
              <StatCard 
                title="Percepción Previa Favorable" 
                value="40%" 
                description="Clientes Domestic que asociaban TP como 'innovador tecnológico'" 
              />
              <StatCard 
                title="Demanda Servicios IA" 
                value="43%" 
                description="Clientes interesados en soluciones de inteligencia artificial" 
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

        <Card>
          <CardHeader>
            <CardTitle>Insights Cualitativos Destacados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg bg-red-50 border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">NRG Energy (Nearshore)</h4>
                <p className="text-sm text-red-700">"Pulling teeth" - Falta crítica de proactividad comercial</p>
                <p className="text-xs text-red-600 mt-2">Sector Energía: Demanda específica confirmada para AI, analytics y automatización</p>
              </div>
              
              <div className="p-4 border rounded-lg bg-amber-50 border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Virpool (Domestic)</h4>
                <p className="text-sm text-amber-700">Restricciones de confidencialidad para servicios de analytics</p>
                <p className="text-xs text-amber-600 mt-2">Necesidad de marcos de trabajo que respeten políticas internas</p>
              </div>
              
              <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Cliente Tecnología</h4>
                <p className="text-sm text-blue-700">Contexto de transformación digital y expectativas de proactividad</p>
                <p className="text-xs text-blue-600 mt-2">Necesidad de propuestas innovadoras sin solicitarlas explícitamente</p>
              </div>
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
                <span className="text-sm font-medium">Talento especializado limitado</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-teleperformance-purple text-white text-xs">0% NS</span>
                  <span className="px-2 py-1 rounded bg-teleperformance-magenta text-white text-xs">75% DM</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Falta de credenciales</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-teleperformance-purple text-white text-xs">11% NS</span>
                  <span className="px-2 py-1 rounded bg-teleperformance-magenta text-white text-xs">50% DM</span>
                </div>
              </div>
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <h5 className="font-semibold text-red-800 text-sm mb-1">Barrera Crítica Cualitativa</h5>
                <p className="text-xs text-red-700">Falta de proactividad comercial identificada específicamente en caso NRG Energy</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Principales Oportunidades</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Implementación nuevas tecnologías</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-teleperformance-purple text-white text-xs">56% NS</span>
                  <span className="px-2 py-1 rounded bg-teleperformance-magenta text-white text-xs">80% DM</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Expandir servicios actuales</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-teleperformance-purple text-white text-xs">44% NS</span>
                  <span className="px-2 py-1 rounded bg-teleperformance-magenta text-white text-xs">40% DM</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Añadir nuevos servicios</span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-teleperformance-purple text-white text-xs">44% NS</span>
                  <span className="px-2 py-1 rounded bg-teleperformance-magenta text-white text-xs">40% DM</span>
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
                  <li>Media/Entertainment</li>
                  <li>Healthcare</li>
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
