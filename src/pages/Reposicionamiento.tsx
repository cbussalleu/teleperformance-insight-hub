import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

// Datos de categorías para posicionamiento futuro
const futurePositioningData = [
  { name: 'Transformación digital', Nearshore: 56, Domestic: 75 },
  { name: 'Soluciones tecnológicas', Nearshore: 44, Domestic: 75 },
  { name: 'Experiencia del cliente', Nearshore: 33, Domestic: 0 },
  { name: 'Socio integral', Nearshore: 11, Domestic: 25 },
  { name: 'Sin respuesta', Nearshore: 22, Domestic: 0 },
];

// Datos de barreras para reposicionamiento
const repositioningBarriersData = [
  { name: 'Percepción call center', Nearshore: 56, Domestic: 75 },
  { name: 'Conocimiento insuficiente', Nearshore: 44, Domestic: 0 },
  { name: 'Competencia establecida', Nearshore: 33, Domestic: 25 },
  { name: 'Talento especializado', Nearshore: 0, Domestic: 75 },
  { name: 'Falta credenciales', Nearshore: 11, Domestic: 50 },
];

// Datos de drivers para reposicionamiento
const repositioningDriversData = [
  { name: 'Propuestas innovadoras', Nearshore: 67, Domestic: 75 },
  { name: 'Casos de éxito', Nearshore: 44, Domestic: 25 },
  { name: 'Conocimiento sector', Nearshore: 33, Domestic: 50 },
  { name: 'Capacidades tecnológicas', Nearshore: 11, Domestic: 75 },
];

// Datos de capacidad para afrontar retos transformativos
const transformativeCapacityData = [
  { name: '5/5', Nearshore: 22, Domestic: 50 },
  { name: '4/5', Nearshore: 56, Domestic: 25 },
  { name: '3/5', Nearshore: 22, Domestic: 25 },
  { name: '2/5', Nearshore: 0, Domestic: 0 },
  { name: '1/5', Nearshore: 0, Domestic: 0 },
];

// Datos de asociación con áreas estratégicas
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
            description="Promedio general" 
            trend="up"
            trendValue="4.3/5 Domestic"
          />
          <StatCard 
            title="Transformación Digital" 
            value="62%" 
            description="Principal categoría reposicionamiento" 
            trend="up"
            trendValue="75% Domestic"
          />
          <StatCard 
            title="Propuestas Innovadoras" 
            value="69%" 
            description="Principal driver reposicionamiento" 
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
                <li>Ambos segmentos coinciden en las dos principales categorías de posicionamiento futuro: "Transformación digital" (56% Nearshore, 75% Domestic) y "Soluciones tecnológicas avanzadas" (44% Nearshore, 75% Domestic).</li>
                <li>Existe mayor consenso entre los clientes Domestic sobre estas categorías, con 75% seleccionando ambas opciones.</li>
                <li>La "Experiencia del cliente" es valorada solo por clientes Nearshore (33% vs 0%), mientras "Socio integral" tiene baja selección en ambos segmentos (11% Nearshore, 25% Domestic).</li>
                <li>Un 22% de clientes Nearshore no identificó una categoría clara de posicionamiento futuro (vs 0% en Domestic), sugiriendo mayor claridad en la visión de los clientes Domestic.</li>
              </ul>
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
                <li>La "Percepción histórica como call center" es la principal barrera para ambos segmentos (56% Nearshore, 75% Domestic), representando un desafío fundamental para el reposicionamiento.</li>
                <li>Los clientes Domestic identifican con mayor frecuencia "Limitaciones en talento especializado" como barrera crítica (75% vs no mencionado en Nearshore), sugiriendo un área de inversión prioritaria.</li>
                <li>La "Falta de credenciales" es más mencionada por clientes Domestic (50% vs 11%), indicando mayor exigencia de casos demostrados.</li>
                <li>Los clientes Nearshore destacan el "Conocimiento insuficiente del portafolio" (44% vs 0%), señalando una oportunidad de comunicación de capacidades.</li>
                <li>La "Competencia establecida" representa una barrera similar para ambos segmentos (33% Nearshore, 25% Domestic).</li>
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
                <li>Las "Propuestas innovadoras específicas para la industria" son el principal driver para ambos segmentos (67% Nearshore, 75% Domestic), destacando la importancia de soluciones a medida.</li>
                <li>Los clientes Domestic enfatizan mucho más la "Mejora en capacidades tecnológicas" (75% vs 11%), consistente con su visión más tecnológica del posicionamiento.</li>
                <li>Los clientes Nearshore valoran más la "Demostración de casos de éxito" (44% vs 25%), sugiriendo mayor necesidad de pruebas tangibles.</li>
                <li>El "Mayor conocimiento del sector" es valorado de manera diferencial (33% Nearshore, 50% Domestic), siendo más importante para Domestic.</li>
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
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de capacidad transformativa:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>La percepción general de la capacidad transformativa de Teleperformance es positiva, con una calificación promedio de 4.1/5 (4.0/5 Nearshore, 4.3/5 Domestic).</li>
                <li>Los clientes Domestic perciben mayor capacidad transformativa en TP, con 50% otorgando la calificación máxima de 5/5 (vs 22% en Nearshore).</li>
                <li>La mayoría de clientes Nearshore (56%) califica la capacidad transformativa como 4/5, mostrando una percepción positiva pero no máxima.</li>
                <li>Ningún cliente califica por debajo de 3/5, lo que indica una base sólida de confianza en las capacidades de TP.</li>
                <li>Un porcentaje similar en ambos segmentos (22% Nearshore, 25% Domestic) califica la capacidad transformativa como 3/5, sugiriendo oportunidades de mejora.</li>
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
                <li>La asociación con áreas estratégicas es significativamente más alta en clientes Domestic que en Nearshore para todas las áreas evaluadas.</li>
                <li>Las "Soluciones integrales de negocio" muestran la mayor asociación en ambos segmentos (50% Nearshore, 75% Domestic).</li>
                <li>"Tecnología avanzada" y "Transformación digital" muestran idénticos niveles de asociación (38% Nearshore, 75% Domestic), reflejando una percepción consistente.</li>
                <li>La "Consultoría estratégica" muestra la menor asociación en ambos segmentos (13% Nearshore, 25% Domestic), representando el mayor desafío para el reposicionamiento completo.</li>
                <li>La brecha entre segmentos es particularmente amplia en "Tecnología avanzada" y "Transformación digital" (37 puntos porcentuales), áreas clave para el reposicionamiento deseado.</li>
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
                    <th className="text-left p-2">Capacidad (1-5)</th>
                    <th className="text-left p-2">Categoría Principal</th>
                    <th className="text-left p-2">Barrera Principal</th>
                    <th className="text-left p-2">Driver Principal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Retail/E-commerce</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">4/5</td>
                    <td className="p-2">Socio integral</td>
                    <td className="p-2">Competencia establecida</td>
                    <td className="p-2">Casos de éxito</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Media/Entertainment</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">4/5</td>
                    <td className="p-2">Experiencia cliente</td>
                    <td className="p-2">Percepción call center</td>
                    <td className="p-2">Propuestas innovadoras</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Technology</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">3/5</td>
                    <td className="p-2">Soluciones tecnológicas</td>
                    <td className="p-2">Conocimiento insuficiente</td>
                    <td className="p-2">Capacidades tecnológicas</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Energy/Utilities</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">4/5</td>
                    <td className="p-2">Transformación digital</td>
                    <td className="p-2">Percepción call center</td>
                    <td className="p-2">Conocimiento sector</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Viajes/Hospitalidad</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">5/5</td>
                    <td className="p-2">Transformación digital</td>
                    <td className="p-2">Talento especializado</td>
                    <td className="p-2">Propuestas innovadoras</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Automotriz</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">5/5</td>
                    <td className="p-2">Soluciones tecnológicas</td>
                    <td className="p-2">Percepción call center</td>
                    <td className="p-2">Capacidades tecnológicas</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">FMCG</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">3/5</td>
                    <td className="p-2">Socio integral</td>
                    <td className="p-2">Falta credenciales</td>
                    <td className="p-2">Casos de éxito</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm">
              <p>Las industrias con mayor credibilidad para el reposicionamiento son Viajes/Hospitalidad y Automotriz (Domestic), con capacidad transformativa máxima (5/5) y clara orientación hacia transformación digital y soluciones tecnológicas respectivamente.</p>
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
                <p className="mb-2">Las categorías de "Transformación digital" (62%) y "Soluciones tecnológicas avanzadas" (54%) emergen como las áreas con mayor potencial para el reposicionamiento, con apoyo significativo en ambos segmentos.</p>
                <p>Estas categorías presentan mejor oportunidad que "Consultoría estratégica", que muestra baja asociación actual (13-25%).</p>
              </div>
              
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Principales barreras a superar</h4>
                <p className="mb-2">La "Percepción histórica como call center" representa la principal barrera (62%), seguida por "Limitaciones en talento especializado" (31%) para Domestic.</p>
                <p>El reposicionamiento debe abordar explícitamente estas percepciones y considerar inversiones en talento especializado.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Drivers clave</h4>
                <p className="mb-2">Las "Propuestas innovadoras específicas para la industria" (69%) y la "Demostración de casos de éxito" (38%) son los principales drivers para el reposicionamiento.</p>
                <p>La estrategia debe enfocarse en propuestas a medida para cada industria y en documentar y comunicar casos exitosos donde TP ha ido más allá del rol tradicional.</p>
              </div>
              
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Enfoque segmentado</h4>
                <p className="mb-2">La asociación con áreas estratégicas es significativamente más alta en clientes Domestic, especialmente en "Tecnología avanzada" y "Transformación digital" (75% vs 38%).</p>
                <p>Esto sugiere que el segmento Domestic ofrece terreno más fértil para el reposicionamiento inicial, mientras que el enfoque para Nearshore debe ser más gradual.</p>
              </div>
            </div>
            
            <p className="mt-4">
              Existe una clara oportunidad para el reposicionamiento de Teleperformance, especialmente en las categorías de "Transformación digital" y "Soluciones tecnológicas avanzadas". La capacidad transformativa percibida es sólida (4.1/5 promedio), proporcionando una base de credibilidad para este cambio. El enfoque debe ser segmentado, priorizando industrias específicas donde la credibilidad es mayor, como Viajes/Hospitalidad y Automotriz (Domestic), y adaptando las estrategias según las barreras y drivers específicos de cada segmento e industria.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
