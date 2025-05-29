import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';

const knowledgeData = [
  { name: 'Muy familiarizado', Nearshore: 33, Domestic: 40 },
  { name: 'Algo familiarizado', Nearshore: 67, Domestic: 60 },
];

const servicesData = [
  { name: 'Atención tradicional', Nearshore: 100, Domestic: 100 },
  { name: 'Soluciones omnicanal', Nearshore: 92, Domestic: 92 },
  { name: 'Back-office', Nearshore: 92, Domestic: 92 },
  { name: 'Soluciones digitales', Nearshore: 85, Domestic: 85 },
  { name: 'Análisis de datos', Nearshore: 69, Domestic: 69 },
  { name: 'Servicios por industria', Nearshore: 62, Domestic: 62 },
  { name: 'Soluciones de IA', Nearshore: 54, Domestic: 54 },
  { name: 'Consultoría', Nearshore: 46, Domestic: 46 },
];

const previousPerceptionData = [
  { name: 'Empresa global', Nearshore: 56, Domestic: 50 },
  { name: 'Líder en contact center', Nearshore: 44, Domestic: 75 },
  { name: 'Innovador tecnológico', Nearshore: 22, Domestic: 50 },
  { name: 'Socio estratégico', Nearshore: 11, Domestic: 25 },
];

const selectionFactorsData = [
  { name: 'Experiencia en industria', Nearshore: 44, Domestic: 60 },
  { name: 'Alcance global', Nearshore: 44, Domestic: 20 },
  { name: 'Precio/costo', Nearshore: 33, Domestic: 20 },
  { name: 'Escalabilidad', Nearshore: 33, Domestic: 0 },
  { name: 'Calidad prometida', Nearshore: 22, Domestic: 40 },
  { name: 'Tecnología ofrecida', Nearshore: 11, Domestic: 40 },
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
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis del conocimiento del portafolio:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Todos los clientes (100%) reportan al menos "Algo familiarizado" con el portafolio de TP.</li>
                <li>Los clientes Domestic muestran ligeramente mayor familiaridad profunda (40% vs 33% "Muy familiarizado").</li>
                <li>La mayoría de clientes Nearshore (67%) se consideran "Algo familiarizado", sugiriendo oportunidad de educación sobre capacidades completas.</li>
              </ul>
            </div>
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
              height={350}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de visibilidad de servicios:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Servicios tradicionales mantienen visibilidad total (100%), estableciendo la base de conocimiento.</li>
                <li>Servicios avanzados como soluciones digitales (85%) y análisis de datos (69%) tienen buena visibilidad.</li>
                <li>Soluciones de IA (54%) y consultoría (46%) representan áreas con potencial de mayor comunicación.</li>
                <li>La consistencia entre segmentos sugiere efectividad en comunicación del portafolio expandido.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Características Asociadas Previamente</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={previousPerceptionData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Percepciones previas antes de la relación comercial" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de percepción previa:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Base favorable en Domestic:</strong> 50% ya asociaba TP como "Innovador tecnológico" vs 22% Nearshore, creando ventaja para reposicionamiento.</li>
                <li><strong>Liderazgo reconocido:</strong> Mayor reconocimiento como "Líder en contact center" en Domestic (75% vs 44%), estableciendo credibilidad.</li>
                <li><strong>Percepción de socio estratégico:</strong> Domestic muestra mayor apertura inicial (25% vs 11%), sugiriendo terreno más fértil para posicionamiento consultivo.</li>
                <li><strong>Alcance global:</strong> Nearshore valora más esta característica (56% vs 50%), consistente con su naturaleza internacional.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Factores Decisivos en la Selección</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={selectionFactorsData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Elementos clave que influenciaron la decisión de contratación" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de factores de selección:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Experiencia en industria:</strong> Factor más importante para ambos segmentos, especialmente Domestic (60% vs 44%).</li>
                <li><strong>Tecnología como diferencial:</strong> Domestic valora más la "Tecnología ofrecida" (40% vs 11%), consistente con percepción innovadora.</li>
                <li><strong>Alcance global:</strong> Crítico para Nearshore (44% vs 20%), reflejando necesidades internacionales.</li>
                <li><strong>Escalabilidad única en Nearshore:</strong> 33% vs 0% en Domestic, sugiriendo diferentes modelos de crecimiento.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
