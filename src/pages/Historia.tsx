import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

const satisfactionData = [
  { name: 'Excelente', Nearshore: 33, Domestic: 20 },
  { name: 'Muy buena', Nearshore: 44, Domestic: 60 },
  { name: 'Buena', Nearshore: 22, Domestic: 20 },
];

const serviceData = [
  { name: 'Atención tradicional', Nearshore: 100, Domestic: 100 },
  { name: 'Soluciones omnicanal', Nearshore: 92, Domestic: 92 },
  { name: 'Back-office', Nearshore: 92, Domestic: 92 },
  { name: 'Soluciones digitales', Nearshore: 85, Domestic: 85 },
  { name: 'Análisis de datos', Nearshore: 69, Domestic: 69 },
  { name: 'Servicios por industria', Nearshore: 62, Domestic: 62 },
];

export default function Historia() {
  return (
    <Layout title="Historia de la Relación Empresarial">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Satisfacción 'Excelente'" 
            value="29%" 
            description="Porcentaje de clientes con máxima satisfacción" 
          />
          <StatCard 
            title="Satisfacción 'Muy buena'" 
            value="50%" 
            description="Porcentaje con segunda mejor calificación" 
          />
          <StatCard 
            title="Años promedio relación" 
            value="8+" 
            description="Tiempo promedio de colaboración con TP" 
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Satisfacción General</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={satisfactionData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Experiencia con servicios de Teleperformance" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de satisfacción actualizado:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>La satisfacción general es alta con 79% de clientes calificando como "Muy buena" o "Excelente" (vs 80% anterior).</li>
                <li>Los clientes Domestic muestran mayor concentración en "Muy buena" (60% vs 44% Nearshore), mientras Nearshore tiene más "Excelente" (33% vs 20%).</li>
                <li>Ningún cliente califica por debajo de "Buena", manteniendo una base sólida de satisfacción.</li>
                <li>La distribución es más equilibrada entre las categorías superiores comparado con estudios anteriores.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Servicios Utilizados</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={serviceData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Principales servicios contratados" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de utilización de servicios:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Servicios tradicionales mantienen penetración total (100% ambos segmentos).</li>
                <li>Servicios omnicanal y back-office tienen alta adopción (92% ambos segmentos).</li>
                <li>Soluciones digitales muestran adopción significativa (85%), indicando evolución hacia servicios más avanzados.</li>
                <li>Análisis de datos (69%) y servicios especializados por industria (62%) representan oportunidades de crecimiento.</li>
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
                    <th className="text-left p-2">Satisfacción</th>
                    <th className="text-left p-2">Años de Relación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Retail/E-commerce</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Excelente</td>
                    <td className="p-2">8+ años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Technology</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Excelente</td>
                    <td className="p-2">8+ años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Media/Entertainment</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Excelente</td>
                    <td className="p-2">8+ años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Energy/Utilities</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Buena</td>
                    <td className="p-2">8+ años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Financial Services</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Buena</td>
                    <td className="p-2">8+ años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Healthcare</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Buena</td>
                    <td className="p-2">8+ años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Electrodomésticos</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Buena</td>
                    <td className="p-2">5-8 años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">FMCG</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Buena</td>
                    <td className="p-2">5-8 años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Viajes/Hospitalidad</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Excelente</td>
                    <td className="p-2">5-8 años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Automotriz</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Excelente</td>
                    <td className="p-2">5-8 años</td>
                  </tr>
