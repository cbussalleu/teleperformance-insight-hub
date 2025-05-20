
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

const satisfactionData = [
  { name: 'Excelente', Nearshore: 33.3, Domestic: 25 },
  { name: 'Muy buena', Nearshore: 44.4, Domestic: 50 },
  { name: 'Buena', Nearshore: 22.2, Domestic: 25 },
];

const serviceData = [
  { name: 'Servicio al Cliente', Nearshore: 80, Domestic: 75 },
  { name: 'Soporte al Cliente', Nearshore: 67, Domestic: 75 },
  { name: 'Back Office', Nearshore: 55, Domestic: 50 },
  { name: 'Ventas', Nearshore: 44, Domestic: 50 },
];

export default function Historia() {
  return (
    <Layout title="Historia de la Relación Empresarial">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Duración de Relación" 
            value="53.8%" 
            description="Clientes con más de 3 años de relación" 
          />
          <StatCard 
            title="Satisfacción General" 
            value="80%" 
            description="Califican experiencia como Muy Buena o Excelente" 
          />
          <StatCard 
            title="Servicio Más Utilizado" 
            value="Servicio al Cliente" 
            description="Principal servicio contratado" 
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
                    <td className="p-2">+3 años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Technology</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Muy buena</td>
                    <td className="p-2">1-3 años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Viajes/Hospitalidad</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Excelente</td>
                    <td className="p-2">+3 años</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Automotriz</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Muy buena</td>
                    <td className="p-2">+3 años</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
