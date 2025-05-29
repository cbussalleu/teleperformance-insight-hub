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
            value="40%" 
            description="Clientes Domestic con percepción tecnológica vs. tradicional" 
          />
          <StatCard 
            title="Principal Barrera" 
            value="63%" 
            description="Percepción histórica como call center (promedio segmentos)" 
          />
          <StatCard 
            title="Driver Principal" 
            value="70%" 
            description="Propuestas innovadoras específicas por industria" 
          />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Hallazgos Clave</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li>
                <span className="font-semibold">Percepción actual diferenciada:</span> Clientes Domestic muestran mayor receptividad (40% percibe como "innovador tecnológico" vs 22% Nearshore), creando ventaja para reposicionamiento tecnológico directo.
              </li>
              <li>
                <span className="font-semibold">Alta satisfacción como base sólida:</span> 79% califican experiencia como "Muy buena/Excelente" con 4.6/5 cumplimiento expectativas, proporcionando credibilidad para evolucionar hacia servicios avanzados.
              </li>
              <li>
                <span className="font-semibold">Barrera crítica confirmada:</span> "Percepción histórica como call center" (56% Nearshore, 75% Domestic) combinada con falta de proactividad comercial ("pulling teeth" - caso NRG Energy) requiere intervención inmediata.
              </li>
              <li>
                <span className="font-semibold">Oportunidades en tecnología validadas:</span> "Transformación digital" (56% Nearshore, 75% Domestic) y "Soluciones tecnológicas" (44% Nearshore, 75% Domestic) emergen como categorías principales con demanda articulada.
              </li>
              <li>
                <span className="font-semibold">Driver validado con casos específicos:</span> "Propuestas innovadoras específicas" (67% Nearshore, 75% Domestic) confirmado con demanda real por AI, analytics y automatización en casos como NRG Energy y sectores Domestic.
              </li>
              <li>
                <span className="font-semibold">Diferencias críticas por industria:</span> Viajes/Hospitalidad y Automotriz (Domestic) muestran máxima receptividad (5.0/5) vs Energy/Utilities (Nearshore) con demanda específica pero percepción limitada.
              </li>
              <li>
                <span className="font-semibold">Demanda articulada confirmada:</span> Alta demanda por "Soluciones de IA" (33% Nearshore, 60% Domestic) con necesidades específicas identificadas en entrevistas cualitativas, validando dirección estratégica.
              </li>
              <li>
                <span className="font-semibold">Sensibilidad al precio persistente:</span> "Incremento costos" principal factor de riesgo (78% Nearshore, 100% Domestic) requiere énfasis claro en ROI y valor cuantificable de nuevas capacidades.
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
              <li><strong>Priorizar Domestic:</strong> Base previa favorable (40% percepción innovadora) con alta asociación estratégica (75% vs 40% Nearshore), comenzar con Viajes/Hospitalidad y Automotriz donde percepción tecnológica ya existe.</li>
              <li><strong>Nearshore selectivo:</strong> Enfocar en Retail/E-commerce (ya percibido como consultor estratégico) y Media/Entertainment (alta capacidad transformativa 4.0/5).</li>
              <li><strong>Caso piloto urgente:</strong> NRG Energy como modelo de Innovation Outreach para superar falta de proactividad comercial identificada.</li>
              <li><strong>Enfoque gradual para BPO tradicional:</strong> Financial Services, FMCG requieren estrategia más progresiva desde capacidades actuales.</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">2. Acciones para superar barreras:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Implementar programa "Innovation Outreach":</strong> Aborda falta de proactividad comercial crítica identificada en caso NRG Energy, propuestas innovadoras sin esperar solicitudes explícitas.</li>
              <li><strong>Desarrollo talento especializado:</strong> Inversión prioritaria en capacidades tecnológicas y consultivas, especialmente crítico para Domestic (75% identifica como barrera).</li>
              <li><strong>Superar percepción call center:</strong> Casos de éxito demostrados, comunicación proactiva de capacidades avanzadas, evidencia tangible de transformación.</li>
              <li><strong>Marcos de confidencialidad:</strong> Desarrollar enfoques que respeten restricciones organizacionales identificadas (caso Virpool), habilitando analytics sin comprometer políticas internas.</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">3. Capitalizar en drivers de reposicionamiento:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Propuestas innovadoras específicas:</strong> Desarrollar ofertas a medida por industria (AI para Energy, automatización para Automotriz, analytics para Retail) basadas en demanda articulada real.</li>
              <li><strong>Casos de éxito documentados:</strong> Comunicar transformaciones exitosas, incluyendo innovaciones cross-regionales para demostrar capacidades globales.</li>
              <li><strong>Capacidades tecnológicas demostradas:</strong> ROI cuantificable en IA, automatización y analytics, especialmente crítico para Domestic (75% lo considera driver principal).</li>
              <li><strong>Cross-pollination regional:</strong> Compartir innovaciones entre regiones para superar silos internos identificados.</li>
            </ul>
            
            <h4 className="font-semibold mt-4 mb-2">4. Comunicación del reposicionamiento:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Canales digitales prioritarios:</strong> Email, videoconferencias (100% efectividad Domestic) con frecuencia semanal identificada como preferida.</li>
              <li><strong>Ética empresarial como fundamento:</strong> Usar sólida percepción (4.8/5 valoración) como base de credibilidad para introducir capacidades tecnológicas.</li>
              <li><strong>Enfoque ROI explícito:</strong> Comunicación clara de valor cuantificable para justificar inversión, crítico dado sensibilidad total al precio en Domestic (100%).</li>
              <li><strong>Segmentación cultural:</strong> Adaptar mensajes por cultura organizacional (conservadora vs innovadora) identificada en insights cualitativos.</li>
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
                <li><strong>INMEDIATO:</strong> Implementar programa "Innovation Outreach" proactivo para clientes clave como NRG Energy, comenzando con propuestas específicas de AI/analytics para sector energético.</li>
                <li><strong>Desarrollar propuestas IA/analytics específicas</strong> para industrias prioritarias con demanda confirmada: automatización para Automotriz, soluciones IA para Viajes/Hospitalidad, analytics para Retail/E-commerce.</li>
                <li><strong>Crear programa desarrollo talento especializado</strong> en tecnología avanzada y capacidades consultivas, prioritario para Domestic donde 75% identifica como barrera crítica.</li>
                <li><strong>Documentar casos de éxito regional</strong> incluyendo innovaciones cross-regionales para demostrar capacidades globales, enfocando en transformaciones tangibles más allá del rol tradicional.</li>
                <li><strong>Desarrollar marcos trabajo analytics</strong> que respeten restricciones confidencialidad (identificadas en caso Virpool), habilitando servicios avanzados dentro de políticas organizacionales.</li>
                <li><strong>Establecer métricas seguimiento</strong> para evolución percepción e impacto iniciativas proactividad, con KPIs específicos por industria y segmento para medir progreso reposicionamiento.</li>
              </ol>
            </div>
            
            <div className="mt-6 p-4 border border-teleperformance-purple/30 rounded-lg bg-teleperformance-purple/5">
              <h4 className="font-semibold mb-2 text-teleperformance-purple">Consideraciones Finales</h4>
              <p className="mb-3">
                Existe una oportunidad validada para el reposicionamiento de Teleperformance, especialmente en el segmento Domestic donde 40% ya percibe a TP como "innovador tecnológico" y industrias específicas como Viajes/Hospitalidad y Automotriz muestran máxima capacidad transformativa (5.0/5).
              </p>
              <p className="mb-3">
                La falta de proactividad comercial identificada en el caso NRG Energy ("pulling teeth") representa una barrera crítica que debe abordarse inmediatamente mediante el programa Innovation Outreach, usando la demanda articulada específica por AI/analytics como punto de partida.
              </p>
              <p>
                El reposicionamiento debe ser gradual y segmentado: enfoque directo en tecnología para Domestic (especialmente industrias con percepción tecnológica previa) y evolución progresiva desde consultoría hacia capacidades avanzadas para Nearshore, siempre con énfasis en ROI cuantificable dada la sensibilidad universal al precio (86% promedio considera incremento de costos como factor de riesgo).
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
