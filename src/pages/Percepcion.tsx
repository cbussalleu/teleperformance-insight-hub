import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

const categoryPerceptionData = [
  { name: 'BPO', Nearshore: 33, Domestic: 20 },
  { name: 'Experiencia omnicanal', Nearshore: 22, Domestic: 20 },
  { name: 'Agentes especializados', Nearshore: 22, Domestic: 0 },
  { name: 'Soluciones tecnológicas', Nearshore: 0, Domestic: 40 },
  { name: 'Consultor estratégico', Nearshore: 11, Domestic: 0 },
  { name: 'Sin respuesta', Nearshore: 12, Domestic: 20 },
];

const perceivedValuesData = [
  { name: 'Calidad servicio', Nearshore: 44, Domestic: 60 },
  { name: 'Flexibilidad/escalabilidad', Nearshore: 44, Domestic: 60 },
  { name: 'Alcance global', Nearshore: 56, Domestic: 20 },
  { name: 'Eficiencia operativa', Nearshore: 22, Domestic: 40 },
  { name: 'Conocimiento especializado', Nearshore: 11, Domestic: 40 },
  { name: 'Ética empresarial', Nearshore: 33, Domestic: 0 },
];

const expectationsFulfillmentData = [
  { name: '5/5', Nearshore: 67, Domestic: 40 },
  { name: '4/5', Nearshore: 33, Domestic: 60 },
];

const communicationChannelsData = [
  { name: 'Email', Nearshore: 100, Domestic: 100 },
  { name: 'Videoconferencias', Nearshore: 89, Domestic: 100 },
  { name: 'Mensajería instantánea', Nearshore: 86, Domestic: 100 },
  { name: 'Llamadas telefónicas', Nearshore: 71, Domestic: 100 },
  { name: 'Reuniones presenciales', Nearshore: 50, Domestic: 75 },
  { name: 'Reportes escritos', Nearshore: 57, Domestic: 67 },
];

export default function Percepcion() {
  return (
    <Layout title="Percepción de Valor y Comunicación">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StatCard 
            title="Cumplimiento Expectativas" 
            value="4.6/5" 
            description="Calificación promedio de cumplimiento" 
          />
          <StatCard 
            title="Percepción Tecnológica" 
            value="40%" 
            description="Clientes Domestic que perciben a TP como tecnológico" 
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Percepción Actual de la Categoría de Negocio</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={categoryPerceptionData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Cómo categorizan los clientes a Teleperformance actualmente" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de percepción de categoría actualizada:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Diferencia crítica entre segmentos:</strong> 40% de clientes Domestic perciben a TP como "Proveedor de soluciones tecnológicas" vs 0% en Nearshore.</li>
                <li><strong>Persistencia percepción BPO:</strong> Sigue siendo categoría principal en Nearshore (33%) y significativa en Domestic (20%).</li>
                <li><strong>Oportunidad en Nearshore:</strong> 11% ya percibe como "Consultor estratégico", única mención de esta categoría.</li>
                <li><strong>Incertidumbre categoria:</strong> 12-20% sin respuesta clara sugiere espacio para reposicionamiento activo.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Principales Valores Aportados</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={perceivedValuesData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Valores que Teleperformance aporta a las organizaciones" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de valores percibidos:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Conocimiento especializado:</strong> Domestic valora significativamente más (40% vs 11%), alineado con percepción tecnológica.</li>
                <li><strong>Alcance global:</strong> Diferenciador clave para Nearshore (56% vs 20%), consistente con naturaleza internacional.</li>
                <li><strong>Calidad y flexibilidad:</strong> Valorados por ambos segmentos pero con mayor énfasis en Domestic (60% vs 44%).</li>
                <li><strong>Ética empresarial:</strong> Valorada únicamente por Nearshore (33% vs 0%), sugiriendo diferencias culturales.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Cumplimiento de Expectativas</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={expectationsFulfillmentData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Valoración del cumplimiento de expectativas (escala 1-5)" 
              height={300}
              isPercentage={false}
              valueScale={[0, 100]}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de cumplimiento de expectativas:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Calificación excepcional:</strong> Promedio de 4.6/5 con 100% de clientes calificando 4/5 o superior.</li>
                <li><strong>Nearshore más entusiasta:</strong> 67% otorga calificación máxima vs 40% en Domestic.</li>
                <li><strong>Domestic más moderado:</strong> 60% califica 4/5, sugiriendo satisfacción sólida pero con espacio de mejora.</li>
                <li><strong>Base sólida para reposicionamiento:</strong> Alta satisfacción actual facilita evolución hacia nuevos servicios.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Efectividad de Canales de Comunicación</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={communicationChannelsData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Porcentaje que considera el canal efectivo o muy efectivo" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de efectividad de canales:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Preferencia digital absoluta en Domestic:</strong> 100% efectividad en canales digitales (email, video, mensajería, llamadas).</li>
                <li><strong>Brecha en reuniones presenciales:</strong> Domestic 75% vs Nearshore 50%, sugiriendo mayor valoración del contacto directo.</li>
                <li><strong>Oportunidad reportes:</strong> Menor efectividad percibida (57-67%) representa área de mejora en comunicación formal.</li>
                <li><strong>Implicación para reposicionamiento:</strong> Canales digitales son óptimos para comunicar nuevas capacidades.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
