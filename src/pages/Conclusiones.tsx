import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from '@/components/StatCard';

export default function Conclusiones() {
  return (
    <Layout title="Conclusiones">
      <div className="grid gap-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard 
            title="Percepción Diferenciada" 
            value="50%" 
            description="Domestic ya ve a TP como proveedor tecnológico" 
          />
          <StatCard 
            title="Principal Barrera" 
            value="62%" 
            description="Percepción histórica como call center" 
          />
          <StatCard 
            title="Driver Principal" 
            value="69%" 
            description="Propuestas innovadoras por industria" 
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Hallazgos Clave</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li>
                <span className="font-semibold">Percepción actual diferenciada por segmento:</span> Los clientes Domestic ya muestran una percepción más alineada con el posicionamiento deseado, con 50% viéndolo como "Proveedor de soluciones tecnológicas avanzadas", mientras los clientes Nearshore lo ven principalmente como "Proveedor BPO" (33%).
              </li>
              <li>
                <span className="font-semibold">Alta satisfacción como base sólida:</span> El 80% de los clientes califica su experiencia como "Muy buena" o "Excelente", con calificaciones promedio de cumplimiento de expectativas superiores a 4.5/5 en ambos segmentos, proporcionando una base sólida para el reposicionamiento.
              </li>
              <li>
                <span className="font-semibold">Oportunidades claras en tecnología y transformación:</span> "Transformación digital" (56% Nearshore, 75% Domestic) y "Soluciones tecnológicas avanzadas" (44% Nearshore, 75% Domestic) emergen claramente como las categorías con mayor potencial para el reposicionamiento.
              </li>
              <li>
                <span className="font-semibold">Principal barrera de reposicionamiento:</span> La "Percepción histórica como call center" (56% Nearshore, 75% Domestic) representa la principal barrera a superar, seguida por "Limitaciones en talento especializado" (0% Nearshore, 75% Domestic).
              </li>
              <li>
                <span className="font-semibold">Drivers clave identificados:</span> Las "Propuestas innovadoras específicas para la industria" (67% Nearshore, 75% Domestic), "Demostración de casos de éxito" y "Mejora en capacidades tecnológicas" emergen como los principales drivers para el reposicionamiento.
              </li>
              <li>
                <span className="font-semibold">Variación significativa por industria:</span> Industrias como Viajes/Hospitalidad, Automotriz (Domestic) y Retail/E-commerce (Nearshore) muestran mayor receptividad al reposicionamiento, mientras Technology (Nearshore) y FMCG (Domestic) presentan mayores desafíos.
              </li>
              <li>
                <span className="font-semibold">Demanda por servicios avanzados:</span> Alta demanda por "Soluciones de IA" (33% Nearshore, 75% Domestic), "Análisis avanzado de datos" y "Automatización", especialmente en clientes Domestic, alineándose con el reposicionamiento deseado.
              </li>
              <li>
                <span className="font-semibold">Sensibilidad persistente al precio:</span> El "Incremento significativo en costos" es el principal factor de riesgo (78% Nearshore, 100% Domestic), sugiriendo que el reposicionamiento debe enfatizar claramente el valor añadido.
              </li>
            </ol>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Estrategia Recomendada para el Reposicionamiento</CardTitle>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold mt-4 mb-2">1. Enfoque segmentado por mercado e industria:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Priorizar el segmento Domestic, donde ya existe mayor percepción como proveedor tecnológico.</li>
              <li>Dentro de Domestic, comenzar con Viajes/Hospitalidad y Automotriz, donde la percepción ya está más alineada.</li>
              <li>En Nearshore, priorizar Retail/E-commerce (ya percibido como consultor) y Media/Entertainment (alto interés en tecnología).</li>
              <li>Adoptar un enfoque más gradual para industrias con mayor percepción como BPO (Financial Services, Energy/Utilities).</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">2. Acciones para superar barreras:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li><span className="font-semibold">Percepción histórica como call center:</span> Demostración activa de capacidades mediante casos de éxito y propuestas innovadoras específicas por industria.</li>
              <li><span className="font-semibold">Limitaciones en talento especializado:</span> Invertir en capacitación y contratación de talento con experticia en tecnología avanzada y consultoría.</li>
              <li><span className="font-semibold">Conocimiento insuficiente del portafolio:</span> Comunicación focalizada del portafolio completo, enfatizando servicios avanzados de tecnología y transformación.</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">3. Capitalizar en drivers de reposicionamiento:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li><span className="font-semibold">Propuestas innovadoras específicas:</span> Desarrollar propuestas a medida para cada industria prioritaria, demostrando conocimiento profundo del sector.</li>
              <li><span className="font-semibold">Casos de éxito:</span> Documentar y comunicar casos de éxito donde TP ha ido más allá del rol tradicional de call center.</li>
              <li><span className="font-semibold">Capacidades tecnológicas:</span> Demostrar competencias en IA, automatización y análisis avanzado de datos, áreas de alto interés.</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">4. Comunicación del reposicionamiento:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Priorizar canales digitales (email, videoconferencias) identificados como más efectivos.</li>
              <li>Mantener frecuencia semanal de comunicación, identificada como la preferida.</li>
              <li>Enfatizar la ética empresarial como valor central, aspecto más valorado por clientes.</li>
              <li>Comunicar el valor añadido de manera clara y cuantificable para justificar cualquier diferencial de precio.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Próximos Pasos Recomendados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li>Desarrollar propuestas innovadoras específicas para las industrias prioritarias identificadas.</li>
                <li>Crear un programa de desarrollo de talento especializado en tecnología avanzada y capacidades consultivas.</li>
                <li>Documentar casos de éxito por segmento e industria que demuestren capacidades más allá del call center tradicional.</li>
                <li>Diseñar un plan de comunicación segmentado que enfatice diferentes aspectos del reposicionamiento según el segmento e industria.</li>
                <li>Implementar un plan piloto de reposicionamiento con clientes seleccionados en industrias prioritarias.</li>
                <li>Establecer métricas de seguimiento para evaluar la evolución de la percepción a lo largo del tiempo.</li>
              </ol>
            </div>
            
            <div className="mt-6 p-4 border border-teleperformance-purple/30 rounded-lg bg-teleperformance-purple/5">
              <h4 className="font-semibold mb-2 text-teleperformance-purple">Consideraciones Finales</h4>
              <p>
                Existe una clara oportunidad para el reposicionamiento de Teleperformance, especialmente en el segmento Domestic y en industrias específicas donde ya es percibido como proveedor de soluciones tecnológicas. El camino hacia el reposicionamiento requiere enfocarse en propuestas innovadoras específicas por industria, demostraciones de casos de éxito, y mejora en capacidades tecnológicas, mientras se trabaja en superar la percepción histórica como call center.
              </p>
              <p className="mt-2">
                La estrategia debe equilibrar la introducción de nuevas capacidades con la mitigación de los riesgos percibidos, particularmente la sensibilidad al precio. El reposicionamiento debe ser gradual y adaptado a cada segmento e industria, con un enfoque más directo en tecnología para Domestic y un camino más progresivo hacia la consultoría para Nearshore.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
