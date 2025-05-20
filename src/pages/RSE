import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';
import { RadarChart } from '@/components/RadarChart';

// Datos importancia de aspectos RSE (escala 1-5)
const csrImportanceData = [
  { subject: 'Ética empresarial', Nearshore: 4.8, Domestic: 5.0, fullMark: 5 },
  { subject: 'Responsabilidad social', Nearshore: 4.0, Domestic: 4.5, fullMark: 5 },
  { subject: 'Inclusión y diversidad', Nearshore: 4.0, Domestic: 4.0, fullMark: 5 },
  { subject: 'Sostenibilidad ambiental', Nearshore: 3.7, Domestic: 4.2, fullMark: 5 },
];

// Datos percepción RSE de TP
const csrPerceptionData = [
  { name: 'Ética empresarial', Nearshore: 78, Domestic: 100 },
  { name: 'RSE general', Nearshore: 71, Domestic: 100 },
  { name: 'Diversidad e Inclusión', Nearshore: 78, Domestic: 75 },
  { name: 'Sostenibilidad ambiental', Nearshore: 57, Domestic: 75 },
];

// Datos impacto RSE en decisiones
const csrImpactData = [
  { name: 'Gran impacto', Nearshore: 22, Domestic: 25 },
  { name: 'Impacto moderado', Nearshore: 22, Domestic: 25 },
  { name: 'Ligero impacto', Nearshore: 11, Domestic: 0 },
  { name: 'Ningún impacto', Nearshore: 44, Domestic: 25 },
  { name: 'Sin respuesta', Nearshore: 0, Domestic: 25 },
];

export default function RSE() {
  return (
    <Layout title="Inclusión, Diversidad y Medio Ambiente, Ética">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Ética Empresarial" 
            value="4.9/5" 
            description="Aspecto RSE más valorado" 
            trend="up"
            trendValue="5.0/5 Domestic"
          />
          <StatCard 
            title="Percepción RSE" 
            value="77%" 
            description="Ve TP muy o extremadamente comprometido" 
            trend="up"
            trendValue="94% Domestic"
          />
          <StatCard 
            title="Impacto en Decisiones" 
            value="48%" 
            description="Impacto moderado o grande en decisiones" 
            trend="up"
            trendValue="50% Domestic"
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
              <p className="mb-2">Análisis de valoración de aspectos RSE:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>La "Ética empresarial" es el aspecto más valorado por ambos segmentos (4.8/5 Nearshore, 5.0/5 Domestic), sugiriendo que debe ser un componente central en la estrategia de reposicionamiento.</li>
                <li>Los clientes Domestic dan mayor importancia a todos los aspectos de RSE, especialmente "Responsabilidad social" (4.5 vs 4.0) y "Sostenibilidad ambiental" (4.2 vs 3.7).</li>
                <li>La "Inclusión y diversidad" recibe la misma valoración en ambos segmentos (4.0), mostrando consistencia en este aspecto.</li>
                <li>La "Sostenibilidad ambiental" recibe la calificación más baja en ambos segmentos, aunque sigue siendo valorada (3.7-4.2/5).</li>
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
                <li>La percepción de TP en aspectos de RSE es generalmente positiva, con 77% de clientes considerando a la empresa "Muy o extremadamente comprometida" en promedio.</li>
                <li>Los clientes Domestic perciben un mayor compromiso de TP en todos los aspectos de RSE, especialmente en "Ética empresarial" y "RSE general" (100% vs ~75%).</li>
                <li>La "Diversidad e Inclusión" muestra la percepción más consistente entre segmentos (78% Nearshore, 75% Domestic).</li>
                <li>La "Sostenibilidad ambiental" recibe las calificaciones más bajas en ambos segmentos (57% Nearshore, 75% Domestic), sugiriendo una oportunidad de mejora.</li>
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
                <li>El impacto de RSE en decisiones de negocio es mixto, con 48% de clientes reportando un impacto significativo (impacto moderado o grande).</li>
                <li>Los porcentajes son consistentes entre segmentos para "Gran impacto" (22% Nearshore, 25% Domestic) e "Impacto moderado" (22% Nearshore, 25% Domestic).</li>
                <li>Un porcentaje significativo reporta "Ningún impacto", especialmente en clientes Nearshore (44% vs 25% en Domestic).</li>
                <li>El 25% de clientes Domestic prefirió no responder esta pregunta, sugiriendo posible sensibilidad sobre este tema.</li>
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
                    <th className="text-left p-2">Valoración RSE (1-5)</th>
                    <th className="text-left p-2">Aspecto Prioritario</th>
                    <th className="text-left p-2">Impacto en Decisiones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Media/Entertainment</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">4.8</td>
                    <td className="p-2">Diversidad e Inclusión</td>
                    <td className="p-2">Gran impacto</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Healthcare</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">4.7</td>
                    <td className="p-2">Ética empresarial</td>
                    <td className="p-2">Impacto moderado</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Financial Services</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">4.6</td>
                    <td className="p-2">Ética empresarial</td>
                    <td className="p-2">Impacto moderado</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Technology</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">4.2</td>
                    <td className="p-2">Responsabilidad social</td>
                    <td className="p-2">Ligero impacto</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Retail/E-commerce</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">4.1</td>
                    <td className="p-2">Sostenibilidad ambiental</td>
                    <td className="p-2">Ningún impacto</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Energy/Utilities</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">3.9</td>
                    <td className="p-2">Sostenibilidad ambiental</td>
                    <td className="p-2">Ningún impacto</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">FMCG</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">4.8</td>
                    <td className="p-2">Sostenibilidad ambiental</td>
                    <td className="p-2">Gran impacto</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Viajes/Hospitalidad</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">4.6</td>
                    <td className="p-2">Diversidad e Inclusión</td>
                    <td className="p-2">Impacto moderado</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Automotriz</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">4.4</td>
                    <td className="p-2">Ética empresarial</td>
                    <td className="p-2">Ningún impacto</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Electrodomésticos</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">4.0</td>
                    <td className="p-2">Ética empresarial</td>
                    <td className="p-2">Sin respuesta</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm">
              <p>Las industrias que dan mayor importancia a RSE (promedio superior a 4.5/5) son Media/Entertainment, Healthcare, Financial Services (Nearshore) y FMCG, Viajes/Hospitalidad (Domestic). Estas industrias también reportan mayor impacto de RSE en sus decisiones de negocio.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Implicaciones para el Reposicionamiento</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p>La estrategia de reposicionamiento podría enfatizar aspectos de RSE de manera selectiva:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Elementos centrales para todos los segmentos</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Enfatizar "Ética empresarial" como valor central en toda comunicación, siendo el aspecto más valorado (4.9/5 promedio).</li>
                  <li>Mantener consistencia en políticas de "Diversidad e Inclusión", aspecto con percepción más uniforme entre segmentos.</li>
                  <li>Seguir fortaleciendo la percepción positiva general de RSE, aprovechando que 77% ya considera a TP muy comprometida.</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Énfasis selectivo por industria</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Enfatizar "Diversidad e Inclusión" para Media/Entertainment y Viajes/Hospitalidad.</li>
                  <li>Destacar "Sostenibilidad ambiental" para FMCG, Retail/E-commerce y Energy/Utilities.</li>
                  <li>Priorizar "Ética empresarial" para Healthcare, Financial Services, Automotriz y Electrodomésticos.</li>
                  <li>Enfocar "Responsabilidad social" para Technology.</li>
                </ul>
              </div>
            </div>
            
            <p className="mt-4">
              Aunque el impacto de RSE en decisiones es mixto (48% reporta impacto significativo), puede ser un diferencial importante para industrias específicas como Media/Entertainment, Healthcare, Financial Services, FMCG y Viajes/Hospitalidad, donde podría usarse como elemento de apoyo para el reposicionamiento.
            </p>
            
            <p>
              Para los segmentos e industrias donde RSE tiene menor impacto (44% Nearshore, 25% Domestic reporta "Ningún impacto"), estos aspectos deberían mantenerse como valores subyacentes pero no como argumento principal del reposicionamiento.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
