import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from '@/components/BarChart';
import { StatCard } from '@/components/StatCard';

// Datos de percepción competitiva
const competitivePerceptionData = [
  { name: 'Totalmente de acuerdo', Nearshore: 33, Domestic: 25 },
  { name: 'De acuerdo', Nearshore: 44, Domestic: 50 },
  { name: 'Neutral', Nearshore: 22, Domestic: 25 },
  { name: 'En desacuerdo', Nearshore: 0, Domestic: 0 },
];

// Datos de competidores percibidos
const perceivedCompetitorsData = [
  { name: 'Empresas de BPO', Nearshore: 67, Domestic: 75 },
  { name: 'Empresas de atención cliente', Nearshore: 56, Domestic: 50 },
  { name: 'Empresas soporte técnico', Nearshore: 44, Domestic: 0 },
  { name: 'Empresas consultoras', Nearshore: 11, Domestic: 25 },
  { name: 'Empresas de tecnología', Nearshore: 0, Domestic: 25 },
];

// Datos de ventajas competitivas
const competitiveAdvantagesData = [
  { name: 'Facilidad contacto', Nearshore: 44, Domestic: 50 },
  { name: 'Variedad servicios', Nearshore: 33, Domestic: 75 },
  { name: 'Experiencia industria', Nearshore: 33, Domestic: 0 },
  { name: 'Tiempo respuesta', Nearshore: 33, Domestic: 75 },
  { name: 'Transparencia procesos', Nearshore: 11, Domestic: 50 },
];

// Datos de áreas de mejora competitiva
const competitiveImprovementData = [
  { name: 'Capacitación personal', Nearshore: 44, Domestic: 75 },
  { name: 'Claridad comunicación', Nearshore: 33, Domestic: 0 },
  { name: 'Transparencia procesos', Nearshore: 33, Domestic: 0 },
  { name: 'Talento especializado', Nearshore: 11, Domestic: 50 },
  { name: 'Tecnología e innovación', Nearshore: 11, Domestic: 25 },
  { name: 'Precios competitivos', Nearshore: 11, Domestic: 25 },
];

// Datos de comparación competitiva en aspectos específicos
const competitiveAspectsData = [
  { name: 'Calidad del servicio', Nearshore: 78, Domestic: 100 },
  { name: 'Tecnología e innovación', Nearshore: 56, Domestic: 75 },
  { name: 'Relación calidad-precio', Nearshore: 67, Domestic: 75 },
  { name: 'Conocimiento especializado', Nearshore: 56, Domestic: 50 },
  { name: 'Experiencia del cliente', Nearshore: 78, Domestic: 75 },
  { name: 'Inclusión y diversidad', Nearshore: 67, Domestic: 75 },
  { name: 'Sostenibilidad ambiental', Nearshore: 56, Domestic: 50 },
];

export default function Competencia() {
  return (
    <Layout title="Competencia">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Percepción Competitiva" 
            value="76%" 
            description="Considera TP superior a competencia" 
            trend="up"
            trendValue="75% Domestic"
          />
          <StatCard 
            title="Principal Ventaja" 
            value="69%" 
            description="Ve ventaja en experiencia del cliente" 
            trend="up"
            trendValue="75% Domestic"
          />
          <StatCard 
            title="Principal Mejora" 
            value="54%" 
            description="Capacitación y especialización" 
            trend="up"
            trendValue="75% Domestic"
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Percepción Competitiva General</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={competitivePerceptionData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Acuerdo con 'Teleperformance está por encima de su competencia'" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de percepción competitiva:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>La percepción competitiva general es positiva, con un 76% de clientes considerando que TP está por encima de la competencia (77% Nearshore, 75% Domestic).</li>
                <li>Los clientes Nearshore tienen una percepción ligeramente más positiva con mayor porcentaje "Totalmente de acuerdo" (33% vs 25%), mientras los Domestic tienen mayor porcentaje "De acuerdo" (50% vs 44%).</li>
                <li>Ambos segmentos muestran porcentajes similares de percepción "Neutral" (22% Nearshore, 25% Domestic).</li>
                <li>Ningún cliente tiene una percepción negativa ("En desacuerdo" o "Totalmente en desacuerdo"), lo que ofrece una base sólida para el reposicionamiento.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Competidores Percibidos</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={perceivedCompetitorsData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="Tipos de empresas consideradas competidores directos" 
              height={300}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de competidores percibidos:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ambos segmentos identifican principalmente a "Empresas de BPO" (67% Nearshore, 75% Domestic) y "Empresas de atención al cliente" (56% Nearshore, 50% Domestic) como competidores principales.</li>
                <li>Las "Empresas de soporte técnico" son consideradas competidores solo por clientes Nearshore (44% vs 0% en Domestic).</li>
                <li>Los clientes Domestic incluyen con mayor frecuencia "Empresas consultoras" (25% vs 11%) y "Empresas de tecnología" (25% vs 0%).</li>
                <li>La inclusión de "Empresas consultoras" y "Empresas de tecnología" como competidores por parte de clientes Domestic sugiere que este segmento ya está comenzando a percibir a TP en una categoría más amplia, alineada con el reposicionamiento deseado.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Ventajas Competitivas</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart 
                data={competitiveAdvantagesData} 
                keys={['Nearshore', 'Domestic']} 
                subtitle="Fortalezas frente a competidores" 
                height={300}
              />
              <div className="mt-4 text-sm">
                <p>Los clientes Domestic perciben más ventajas en TP, especialmente en "Variedad de servicios" y "Tiempo de respuesta" (75% vs ~33%). La "Facilidad para contactar" es destacada por ambos segmentos. Los clientes Nearshore valoran más la "Experiencia en la industria" (33% vs 0%).</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Áreas de Mejora Competitiva</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart 
                data={competitiveImprovementData} 
                keys={['Nearshore', 'Domestic']} 
                subtitle="Aspectos a mejorar frente a competidores" 
                height={300}
              />
              <div className="mt-4 text-sm">
                <p>La "Capacitación y profesionalismo del personal" es la más mencionada por ambos segmentos (44% Nearshore, 75% Domestic). Los clientes Domestic destacan más la necesidad de "Talento especializado" (50% vs 11%), mientras los Nearshore enfatizan la "Comunicación" y "Transparencia".</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Comparación Competitiva en Aspectos Específicos</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart 
              data={competitiveAspectsData} 
              keys={['Nearshore', 'Domestic']} 
              subtitle="% que califica TP por encima de competencia en cada aspecto" 
              height={350}
            />
            <div className="mt-4 text-sm">
              <p className="mb-2">Análisis de aspectos competitivos específicos:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>La "Calidad del servicio" es el aspecto donde TP tiene mayor ventaja competitiva percibida (78% Nearshore, 100% Domestic).</li>
                <li>La "Experiencia del cliente" también muestra una fuerte ventaja competitiva en ambos segmentos (78% Nearshore, 75% Domestic).</li>
                <li>Los clientes Domestic perciben mayor ventaja en "Tecnología e innovación" (75% vs 56%), aspecto clave para el reposicionamiento deseado.</li>
                <li>La "Relación calidad-precio" es mejor valorada por clientes Domestic (75% vs 67%), indicando mayor percepción de valor.</li>
                <li>El "Conocimiento especializado" y la "Sostenibilidad ambiental" son los aspectos con menor ventaja competitiva percibida, especialmente en clientes Domestic (50%).</li>
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
                    <th className="text-left p-2">Percepción Competitiva</th>
                    <th className="text-left p-2">Principal Ventaja</th>
                    <th className="text-left p-2">Principal Área Mejora</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Retail/E-commerce</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Totalmente de acuerdo</td>
                    <td className="p-2">Experiencia industria</td>
                    <td className="p-2">Transparencia procesos</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Media/Entertainment</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">De acuerdo</td>
                    <td className="p-2">Facilidad contacto</td>
                    <td className="p-2">Capacitación personal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Healthcare</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">De acuerdo</td>
                    <td className="p-2">Tiempo respuesta</td>
                    <td className="p-2">Claridad comunicación</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Technology</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-purple text-white">Nearshore</span></td>
                    <td className="p-2">Neutral</td>
                    <td className="p-2">Variedad servicios</td>
                    <td className="p-2">Tecnología e innovación</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Viajes/Hospitalidad</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Totalmente de acuerdo</td>
                    <td className="p-2">Tiempo respuesta</td>
                    <td className="p-2">Capacitación personal</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Automotriz</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">De acuerdo</td>
                    <td className="p-2">Variedad servicios</td>
                    <td className="p-2">Talento especializado</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">FMCG</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">De acuerdo</td>
                    <td className="p-2">Transparencia procesos</td>
                    <td className="p-2">Precios competitivos</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Electrodomésticos</td>
                    <td className="p-2"><span className="px-2 py-0.5 rounded text-xs bg-teleperformance-magenta text-white">Domestic</span></td>
                    <td className="p-2">Neutral</td>
                    <td className="p-2">Facilidad contacto</td>
                    <td className="p-2">Capacitación personal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm">
              <p>Las industrias con percepción competitiva más favorable son Retail/E-commerce (Nearshore) y Viajes/Hospitalidad (Domestic). Technology (Nearshore) y Electrodomésticos (Domestic) muestran percepción competitiva "Neutral", sugiriendo desafíos específicos en estos sectores.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Implicaciones para el Reposicionamiento</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p>La percepción competitiva ofrece insights importantes para el reposicionamiento:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Fortalezas a apalancar</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Utilizar la alta percepción en "Calidad del servicio" y "Experiencia del cliente" como base para el reposicionamiento.</li>
                  <li>Capitalizar la "Variedad de servicios" y "Tiempo de respuesta" como diferenciales para el segmento Domestic.</li>
                  <li>Aprovechar la "Experiencia en la industria" como ventaja competitiva para clientes Nearshore.</li>
                  <li>Enfatizar la percepción positiva en "Tecnología e innovación" (75%) en clientes Domestic como puente hacia el reposicionamiento tecnológico.</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                <h4 className="font-semibold mb-2">Áreas a fortalecer</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Priorizar la mejora en "Capacitación y profesionalismo del personal" (44% Nearshore, 75% Domestic), área crítica para ambos segmentos.</li>
                  <li>Desarrollar "Talento especializado" (50% Domestic) para fortalecer capacidades consultivas y tecnológicas.</li>
                  <li>Mejorar "Claridad en comunicación" y "Transparencia en procesos" para clientes Nearshore.</li>
                  <li>Elevar la percepción de "Conocimiento especializado", clave para el posicionamiento como socio estratégico.</li>
                </ul>
              </div>
            </div>
            
            <p className="mt-4">
              El reposicionamiento debe aprovechar que los clientes Domestic ya incluyen "Empresas consultoras" (25%) y "Empresas de tecnología" (25%) como competidores, indicando una percepción más alineada con el posicionamiento deseado. Para los clientes Nearshore, será necesario un trabajo más profundo para expandir la percepción más allá de las categorías de BPO y atención al cliente.
            </p>
            
            <p>
              La estrategia competitiva debe variar por industria: para Technology y Electrodomésticos (percepción "Neutral"), enfocarse en mejorar áreas específicas como innovación tecnológica y capacitación; para industrias con percepción más favorable como Retail/E-commerce y Viajes/Hospitalidad, capitalizar en las ventajas existentes para profundizar el reposicionamiento.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
