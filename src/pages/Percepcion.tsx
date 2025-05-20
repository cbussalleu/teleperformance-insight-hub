import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

const categoryPerceptionData = [
  { name: 'BPO', Nearshore: 33, Domestic: 25 },
  { name: 'Experiencia omnicanal', Nearshore: 22, Domestic: 25 },
  { name: 'Agentes especializados', Nearshore: 22, Domestic: 0 },
  { name: 'Soluciones tecnológicas', Nearshore: 0, Domestic: 50 },
  { name: 'Consultor estratégico', Nearshore: 11, Domestic: 0 },
  { name: 'Otros/No respuesta', Nearshore: 11, Domestic: 0 },
];

const perceivedValuesData = [
  { name: 'Calidad servicio', Nearshore: 44, Domestic: 75 },
  { name: 'Flexibilidad/escalabilidad', Nearshore: 44, Domestic: 75 },
  { name: 'Alcance global', Nearshore: 56, Domestic: 25 },
  { name: 'Eficiencia operativa', Nearshore: 22, Domestic: 50 },
  { name: 'Conocimiento especializado', Nearshore: 11, Domestic: 50 },
  { name: 'Ética empresarial', Nearshore: 33, Domestic: 0 },
];

const expectationsFulfillmentData = [
  { name: '5/5', Nearshore: 67, Domestic: 50 },
  { name: '4/5', Nearshore: 33, Domestic: 50 },
  { name: '3/5', Nearshore: 0, Domestic: 0 },
  { name: '2/5', Nearshore: 0, Domestic: 0 },
  { name: '1/5', Nearshore: 0, Domestic: 0 },
];

const communicationChannelsData = [
  { name: 'Email', Nearshore: 100, Domestic: 100 },
  { name: 'Videoconferencias', Nearshore: 89, Domestic: 100 },
  { name: 'Mensajería instantánea', Nearshore: 86, Domestic: 100 },
  { name: 'Llamadas telefónicas', Nearshore: 71, Domestic: 100 },
  { name: 'Reuniones presenciales', Nearshore: 50, Domestic: 75 },
  { name: 'Reportes escritos', Nearshore: 57, Domestic: 67 },
];

const communicationFrequencyData = [
  { name: 'Diariamente', Nearshore: 22, Domestic: 0 },
  { name: 'Varias veces/semana', Nearshore: 11, Domestic: 25 },
  { name: 'Semanalmente', Nearshore: 44, Domestic: 50 },
  { name: 'Mensualmente', Nearshore: 11, Domestic: 25 },
  { name: 'Menos frecuente', Nearshore: 0, Domestic: 0 },
  { name: 'Sin respuesta', Nearshore: 11, Domestic: 0 },
];

const messagesClarityData = [
  { name: 'Extremadamente claros', Nearshore: 0, Domestic: 33 },
  { name: 'Muy claros', Nearshore: 67, Domestic: 33 },
  { name: 'Moderadamente claros', Nearshore: 22, Domestic: 0 },
  { name: 'Sin respuesta', Nearshore: 11, Domestic: 33 },
];

export default function Percepcion() {
  return (
    <Layout title="Percepción de Valor y Comunicación">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StatCard 
            title="Cumplimiento de Expectativas" 
            value="67%" 
            description="Clientes Nearshore califican 5/5" 
          />
          <StatCard 
            title="Percepción como Tecnológicos" 
            value="50%" 
            description="Clientes Domestic ven a TP como proveedor tecnológico" 
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
              subtitle="Cómo categorizan los clientes a Teleperformance" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Existe una diferencia notable en la percepción entre segmentos:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>50% de clientes Domestic ven a TP como "Proveedor de soluciones tecnológicas avanzadas", categoría que ningún cliente Nearshore seleccionó como principal.</li>
                <li>Los clientes Nearshore perciben a TP principalmente como proveedor BPO (33%), mientras solo 25% de Domestic tiene esta percepción.</li>
                <li>La percepción como "Proveedor de experiencia omnicanal" es similar en ambos segmentos (22% vs 25%).</li>
                <li>La percepción como "Consultor estratégico" solo aparece en clientes Nearshore (11%) y en un porcentaje bajo.</li>
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
              <p className="mb-2">Ambos segmentos valoran aspectos diferentes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Los clientes Domestic valoran significativamente más el "Conocimiento especializado" (50% vs 11%) y la "Eficiencia operativa" (50% vs 22%).</li>
                <li>Los clientes Nearshore dan mayor importancia al "Alcance global" (56% vs 25%) y la "Ética empresarial" (33% vs 0%).</li>
                <li>La "Calidad en servicio" y "Flexibilidad/escalabilidad" son importantes para ambos segmentos pero con mayor énfasis en Domestic.</li>
                <li>El "Conocimiento especializado", componente clave para el posicionamiento como socio estratégico, es valorado por el 50% de clientes Domestic pero solo por el 11% de Nearshore.</li>
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
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">El nivel de cumplimiento de expectativas es excepcionalmente alto:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Calificación promedio de 4.6/5 para todo el conjunto de clientes.</li>
                <li>El 62% de los clientes otorga la calificación máxima de 5/5, mientras el 38% restante califica con 4/5.</li>
                <li>Los clientes Nearshore muestran ligeramente mayor proporción de calificación máxima (67% vs 50% con 5/5).</li>
                <li>Ningún cliente califica por debajo de 4/5, lo que representa una base sólida para el reposicionamiento.</li>
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
                <li>Los canales digitales (email, videoconferencias, mensajería) son considerados los más efectivos por ambos segmentos.</li>
                <li>Los clientes Domestic consideran "Extremadamente efectivos" los canales digitales, calificando todos con 100% de efectividad.</li>
                <li>Las "Reuniones presenciales" reciben la calificación más baja en Nearshore (50%), sugiriendo preferencia por comunicación digital.</li>
                <li>Los "Reportes escritos" son considerados más efectivos por Domestic (67% vs 57%), aunque siguen siendo el segundo canal menos efectivo.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Frecuencia Preferida de Comunicación</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart 
                data={communicationFrequencyData} 
                keys={['Nearshore', 'Domestic']} 
                subtitle="Preferencia de frecuencia de comunicación" 
                height={300}
              />
              <div className="mt-4 text-sm">
                <p>La frecuencia semanal es la preferida por la mayoría de clientes (44% Nearshore, 50% Domestic), proporcionando una pauta para la cadencia de comunicaciones sobre el nuevo posicionamiento.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Claridad y Efectividad de Mensajes</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart 
                data={messagesClarityData} 
                keys={['Nearshore', 'Domestic']} 
                subtitle="Percepción de claridad en comunicaciones" 
                height={300}
              />
              <div className="mt-4 text-sm">
                <p>Los clientes Domestic son más polarizados: 33% considera los mensajes "Extremadamente claros", pero otro 33% prefirió no contestar esta pregunta. Los clientes Nearshore son más consistentes, con 67% considerando los mensajes "Muy claros".</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
