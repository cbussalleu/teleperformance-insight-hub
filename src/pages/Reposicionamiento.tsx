import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

const futurePositioningData = [
  { name: 'Transformación digital', Nearshore: 56, Domestic: 75 },
  { name: 'Soluciones tecnológicas', Nearshore: 44, Domestic: 75 },
  { name: 'Experiencia del cliente', Nearshore: 33, Domestic: 0 },
  { name: 'Socio integral', Nearshore: 11, Domestic: 25 },
];

const repositioningBarriersData = [
  { name: 'Percepción call center', Nearshore: 56, Domestic: 75 },
  { name: 'Conocimiento insuficiente', Nearshore: 44, Domestic: 0 },
  { name: 'Competencia establecida', Nearshore: 33, Domestic: 25 },
  { name: 'Talento especializado', Nearshore: 0, Domestic: 75 },
  { name: 'Falta credenciales', Nearshore: 11, Domestic: 50 },
];

const repositioningDriversData = [
  { name: 'Propuestas innovadoras', Nearshore: 67, Domestic: 75 },
  { name: 'Casos de éxito', Nearshore: 44, Domestic: 25 },
  { name: 'Conocimiento sector', Nearshore: 33, Domestic: 50 },
  { name: 'Capacidades tecnológicas', Nearshore: 11, Domestic: 75 },
];

const transformativeCapacityData = [
  { name: '5/5', Nearshore: 22, Domestic: 40 },
  { name: '4/5', Nearshore: 56, Domestic: 40 },
  { name: '3/5', Nearshore: 22, Domestic: 20 },
];

const strategicAreasAssociationData = [
  { name: 'Soluciones integrales', Nearshore: 50, Domestic: 75 },
  { name: 'Tecnología avanzada', Nearshore: 38, Domestic: 75 },
  { name: 'Transformación digital', Nearshore: 38, Domestic: 75 },
  { name: 'Consultoría estratégica', Nearshore: 13, Domestic: 25 },
];

export default function Reposicionamiento() {
  return (
    <Layout title="Credibilidad de Reposicionamiento">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Capacidad Transformativa" 
            value="4.1/5" 
            description="Calificación promedio de capacidad para retos transformativos" 
            trend="up"
            trendValue="4.3/5 Domestic"
          />
          <StatCard 
            title="Categoría Principal" 
            value="63%" 
            description="Transformación digital - Categoría con mayor potencial" 
            trend="up"
            trendValue="75% Domestic"
          />
          <StatCard 
            title="Driver Principal" 
            value="70%" 
            description="Propuestas innovadoras - Factor clave para reposicionamiento" 
            trend="up"
            trendValue="75% Domestic"
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Categorías para Posicionamiento Futuro</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={futurePositioningData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Áreas con mayor potencial para reposicionamiento" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de categorías para reposicionamiento:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Consenso en transformación digital:</strong> 63% promedio (56% Nearshore, 75% Domestic), categoría principal para reposicionamiento.</li>
                <li><strong>Soluciones tecnológicas igualmente prometedoras:</strong> 54% promedio con same pattern de preferencia en Domestic.</li>
                <li><strong>Experiencia cliente únicamente Nearshore:</strong> 33% vs 0%, sugiriendo diferente valoración de esta capacidad.</li>
                <li><strong>Socio integral mayor en Domestic:</strong> 25% vs 11%, alineado con mayor receptividad consultiva.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Barreras Organizacionales Nuevas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 border rounded-lg bg-amber-50 border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Restricciones Confidencialidad</h4>
                <p className="text-sm text-amber-700">Identificada en caso Virpool: Políticas internas limitan compartir datos para analytics avanzados</p>
              </div>
              
              <div className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Cultura Organizacional Conservadora</h4>
                <p className="text-sm text-blue-700">Preferencia por experiencia histórica probada vs innovación no solicitada</p>
              </div>
              
              <div className="p-4 border rounded-lg bg-purple-50 border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">Silos Internos en TP</h4>
                <p className="text-sm text-purple-700">Falta cross-pollination entre regiones limita compartir innovaciones</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Barreras para Reposicionamiento</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={repositioningBarriersData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Obstáculos para el reposicionamiento estratégico" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de barreras para reposicionamiento:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Percepción call center dominante:</strong> 63% promedio (56% Nearshore, 75% Domestic), barrera principal a superar.</li>
                <li><strong>Talento especializado crítico en Domestic:</strong> 75% vs 0% Nearshore, área de inversión prioritaria.</li>
                <li><strong>Credenciales más exigidas en Domestic:</strong> 50% vs 11%, requiere casos demostrados específicos.</li>
                <li><strong>Conocimiento insuficiente únicamente Nearshore:</strong> 44% vs 0%, oportunidad de comunicación de capacidades.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Drivers para Reposicionamiento</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={repositioningDriversData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Factores que impulsarían la credibilidad del reposicionamiento" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de drivers para reposicionamiento:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Propuestas innovadoras como driver principal:</strong> 70% promedio (67% Nearshore, 75% Domestic), confirma importancia de proactividad.</li>
                <li><strong>Capacidades tecnológicas críticas en Domestic:</strong> 75% vs 11% Nearshore, consistent con percepción tecnológica.</li>
                <li><strong>Casos de éxito más valorados en Nearshore:</strong> 44% vs 25%, sugiere mayor necesidad de pruebas tangibles.</li>
                <li><strong>Conocimiento sectorial equilibrado:</strong> 39% promedio, importante para ambos segmentos.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Capacidad para Afrontar Retos Transformativos</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={transformativeCapacityData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Valoración de la capacidad transformativa (escala 1-5)" 
              height={300}
              isPercentage={false}
              valueScale={[0, 100]}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de capacidad transformativa:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Capacidad sólida reconocida:</strong> 4.1/5 promedio (4.0/5 Nearshore, 4.3/5 Domestic) proporciona base de credibilidad.</li>
                <li><strong>Domestic más optimista:</strong> 40% calificación máxima vs 22% Nearshore, mayor confianza en capacidades transformativas.</li>
                <li><strong>Nearshore consistentemente positivo:</strong> 56% califica 4/5, showing solid but not maximum confidence.</li>
                <li><strong>Sin calificaciones negativas:</strong> Ningún cliente por debajo de 3/5, indicates foundational trust.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Asociación con Áreas Estratégicas</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={strategicAreasAssociationData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="% alta o muy alta asociación con cada área" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de asociación con áreas estratégicas:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Domestic significativamente más alto:</strong> 75% vs ~40% Nearshore en todas las áreas clave, indicating much stronger foundation.</li>
                <li><strong>Soluciones integrales lideran:</strong> Mejor asociación en ambos segmentos (50% Nearshore, 75% Domestic).</li>
                <li><strong>Tecnología y transformación digital igualadas:</strong> 38% Nearshore, 75% Domestic, core areas for repositioning.</li>
                <li><strong>Consultoría estratégica como desafío:</strong> Menor asociación (13% Nearshore, 25% Domestic), requiring most development work.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Conclusiones para el Reposicionamiento</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Categorías con mayor potencial</h4>
                <p className="mb-2">"Transformación digital" (63%) y "Soluciones tecnológicas" (54%) emergen claramente como áreas con mayor potencial, especialmente fuertes en Domestic (75% each).</p>
                <p>Estas categorías presentan mejor oportunidad que "Consultoría estratégica" que muestra menor asociación actual (13-25%).</p>
              </div>
              
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Principales barreras a superar</h4>
                <p className="mb-2">La "Percepción call center" (63% promedio) remains primary barrier, complemented by "Talento especializado" limitations in Domestic (75%).</p>
                <p>New organizational barriers include confidentiality restrictions and conservative culture requiring adaptive approaches.</p>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Estrategia Recomendada</h4>
              <p className="text-green-700">
                <strong>Enfoque dual segmentado:</strong> Priorizar Domestic donde la asociación con áreas estratégicas es 
                significativamente mayor (75% vs ~40% Nearshore). Para Domestic: enfocarse en "Transformación digital" y 
                "Soluciones tecnológicas" donde ya existe alta asociación. Para Nearshore: desarrollar gradualmente desde 
                la base actual (40% en soluciones integrales) hacia capacidades más avanzadas. La estrategia debe incluir 
                desarrollo urgente de talento especializado para Domestic y programa de comunicación de capacidades para Nearshore.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
