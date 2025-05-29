import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';
import { RadarChart } from '@/components/RadarChart';

const csrImportanceData = [
  { subject: 'Ética empresarial', Nearshore: 4.8, Domestic: 4.8, fullMark: 5 },
  { subject: 'Responsabilidad social', Nearshore: 4.0, Domestic: 4.2, fullMark: 5 },
  { subject: 'Inclusión y diversidad', Nearshore: 4.0, Domestic: 3.8, fullMark: 5 },
  { subject: 'Sostenibilidad ambiental', Nearshore: 3.7, Domestic: 4.0, fullMark: 5 },
];

const csrPerceptionData = [
  { name: 'Ética empresarial', Nearshore: 78, Domestic: 80 },
  { name: 'RSE general', Nearshore: 71, Domestic: 80 },
  { name: 'Diversidad e Inclusión', Nearshore: 78, Domestic: 60 },
  { name: 'Sostenibilidad ambiental', Nearshore: 57, Domestic: 60 },
  { name: 'Causas sociales', Nearshore: 65, Domestic: 70 },
];

const csrImpactData = [
  { name: 'Gran impacto', Nearshore: 22, Domestic: 20 },
  { name: 'Impacto moderado', Nearshore: 22, Domestic: 20 },
  { name: 'Ligero impacto', Nearshore: 33, Domestic: 20 },
  { name: 'Ningún impacto', Nearshore: 22, Domestic: 20 },
  { name: 'Sin respuesta', Nearshore: 1, Domestic: 20 },
];

export default function RSE() {
  return (
    <Layout title="Inclusión, Diversidad y Medio Ambiente, Ética">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Aspecto Más Valorado" 
            value="4.8/5" 
            description="Ética empresarial - Mayor importancia para los clientes" 
            trend="neutral"
            trendValue="Consistente ambos segmentos"
          />
          <StatCard 
            title="Percepción RSE" 
            value="79%" 
            description="Clientes que perciben a TP como comprometido con ética" 
            trend="up"
            trendValue="80% Domestic"
          />
          <StatCard 
            title="Impacto en Decisiones" 
            value="42%" 
            description="Clientes donde RSE tiene impacto en decisiones" 
            trend="neutral"
            trendValue="Consistente ambos segmentos"
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Importancia de Aspectos RSE</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 mb-4">
              <RadarChart 
                data={csrImportanceData} 
                dataKeys={['Nearshore', 'Domestic']} 
                subtitle="Valoración de importancia (escala 1-5)" 
                height={350}
              />
            </div>
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de valoración de aspectos RSE actualizados:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Ética empresarial universalmente valorada:</strong> 4.8/5 en ambos segmentos, confirmando centralidad para estrategia de reposicionamiento.</li>
                <li><strong>Responsabilidad social ligeramente mayor en Domestic:</strong> 4.2 vs 4.0, sugiriendo mayor sensibilidad social corporativa.</li>
                <li><strong>Inclusión y diversidad dinámicas inversas:</strong> Nearshore 4.0 vs Domestic 3.8, posiblemente reflejando contextos culturales diferentes.</li>
                <li><strong>Sostenibilidad ambiental en evolución:</strong> Domestic 4.0 vs Nearshore 3.7, indicando creciente importancia en mercado local.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Percepción del Compromiso RSE de Teleperformance</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={csrPerceptionData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="% que considera a TP muy o extremadamente comprometido" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de percepción del compromiso RSE:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Percepción sólida y consistente:</strong> 79% promedio considera a TP comprometido, con ligera ventaja en Domestic (80% vs 78%).</li>
                <li><strong>Fortaleza en ética:</strong> Consistencia entre segmentos (78-80%) refuerza credibilidad en este aspecto central.</li>
                <li><strong>Brecha en diversidad:</strong> Nearshore percibe mayor compromiso (78% vs 60%), posible reflejo de iniciativas regionales específicas.</li>
                <li><strong>Oportunidad en sostenibilidad:</strong> Menores calificaciones (57-60%) sugieren área de mejora en comunicación ambiental.</li>
                <li><strong>Nueva dimensión - causas sociales:</strong> Percepción positiva (65-70%) indica reconocimiento de impacto social amplio.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Impacto de RSE en Decisiones de Negocio</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={csrImpactData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Nivel de impacto de RSE en decisiones de negocio" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis del impacto en decisiones:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Impacto moderado consistente:</strong> 42% reporta impacto significativo (moderado/grande), stable entre segmentos.</li>
                <li><strong>Nearshore más articulado:</strong> Mayor distribución en "Ligero impacto" (33% vs 20%), sugiriendo consideración más matizada.</li>
                <li><strong>Domestic más reservado:</strong> 20% sin respuesta vs 1% Nearshore, posible sensibilidad sobre criterios RSE en decisiones.</li>
                <li><strong>Base para diferenciación:</strong> 42% con impacto sugiere oportunidad de usar RSE como elemento diferenciador selectivo.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Implicaciones para el Reposicionamiento</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p>La estrategia de reposicionamiento puede incorporar RSE de manera estratégica:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Elementos universales</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Ética empresarial como pilar:</strong> Integrar en toda comunicación de reposicionamiento (4.8/5 valoración universal)</li>
                  <li><strong>Mantener estándares actuales:</strong> Capitalizar percepción positiva existente (79% compromiso percibido)</li>
                  <li><strong>Credibilidad para innovación:</strong> Usar solidez ética como base para introducir capacidades tecnológicas avanzadas</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Enfoque segmentado</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Nearshore:</strong> Enfatizar diversidad e inclusión (fortaleza percibida 78%) y alcance global responsable</li>
                  <li><strong>Domestic:</strong> Destacar responsabilidad social (4.2/5) y sostenibilidad ambiental (creciente importancia 4.0/5)</li>
                  <li><strong>Uso selectivo:</strong> RSE como diferenciador en 42% con impacto en decisiones, elemento de apoyo en otros</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Recomendación Estratégica</h4>
              <p className="text-blue-700">
                <strong>RSE como habilitador de confianza:</strong> Usar la sólida percepción en ética empresarial (4.8/5, 79% compromiso percibido) 
                como fundamento de credibilidad para introducir servicios tecnológicos avanzados. La ética no debe ser el mensaje principal 
                del reposicionamiento, sino el elemento de confianza que facilita la aceptación de nuevas capacidades innovadoras.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
