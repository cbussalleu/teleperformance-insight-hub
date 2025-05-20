
import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';

const knowledgeData = [
  { name: 'Muy familiarizado', Nearshore: 33.3, Domestic: 50 },
  { name: 'Algo familiarizado', Nearshore: 66.7, Domestic: 50 },
];

const servicesData = [
  { name: 'Atención tradicional', Nearshore: 100, Domestic: 100 },
  { name: 'Soluciones omnicanal', Nearshore: 89, Domestic: 100 },
  { name: 'Back-office', Nearshore: 89, Domestic: 100 },
  { name: 'Soluciones tecnológicas', Nearshore: 67, Domestic: 75 },
];

export default function Expectativas() {
  return (
    <Layout title="Expectativas Iniciales, Conocimiento y Reputación">
      <div className="grid gap-6 animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Conocimiento del Portafolio</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={knowledgeData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Nivel de familiaridad con los servicios ofrecidos" 
              height={300}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Servicios Más Conocidos</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={servicesData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Visibilidad de servicios en el mercado" 
              height={300}
            />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
