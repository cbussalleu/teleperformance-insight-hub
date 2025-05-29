import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Metodologia() {
  return (
    <Layout 
      title="Metodología"
      description="Detalles sobre el diseño y ejecución del estudio actualizado"
    >
      <div className="grid gap-6 animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Muestra del Estudio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="text-4xl font-bold text-teleperformance-purple">14</div>
              <div>
                <div className="font-semibold">Total de clientes entrevistados</div>
                <div className="text-sm text-muted-foreground">Estudio cuantitativo con cuestionarios estructurados + entrevistas cualitativas</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-teleperformance-purple/10">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Nearshore</div>
                  <div className="text-2xl font-bold text-teleperformance-purple">9</div>
                </div>
                <div className="text-sm text-muted-foreground mt-2">Clientes de mercados internacionales</div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Sectores representados:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Retail/E-commerce</li>
                    <li>Technology</li>
                    <li>Media/Entertainment</li>
                    <li>Energy/Utilities</li>
                    <li>Financial Services</li>
                    <li>Healthcare</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg bg-teleperformance-magenta/10">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Domestic</div>
                  <div className="text-2xl font-bold text-teleperformance-magenta">5</div>
                </div>
                <div className="text-sm text-muted-foreground mt-2">Clientes del mercado doméstico</div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Sectores representados:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Electrodomésticos</li>
                    <li>FMCG</li>
                    <li>Viajes/Hospitalidad</li>
                    <li>Automotriz</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Instrumentos de Investigación</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Cuestionarios Estructurados</h3>
              <div className="text-sm">
                <p>Encuestas estructuradas con 60 preguntas en español e inglés, organizadas en 7 dimensiones de análisis.</p>
                <p className="mt-2">Disponibles en español e inglés para facilitar la participación de clientes en diferentes mercados.</p>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg bg-blue-50">
              <h3 className="font-semibold mb-2">Entrevistas Cualitativas en Profundidad</h3>
              <div className="text-sm">
                <p className="mb-3">Complementadas con 3 entrevistas cualitativas para obtener insights específicos sobre percepciones, barreras y oportunidades.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 bg-white border rounded">
                    <h4 className="font-medium text-teleperformance-purple">NRG Energy</h4>
                    <p className="text-xs text-gray-600">Senior Channel Manager</p>
                    <p className="text-xs text-gray-600">8+ años relación, Sector Energía</p>
                  </div>
                  <div className="p-3 bg-white border rounded">
                    <h4 className="font-medium text-teleperformance-magenta">Virpool</h4>
                    <p className="text-xs text-gray-600">Encargado Servicio Cliente LATAM</p>
                    <p className="text-xs text-gray-600">Servicios logística y personas</p>
                  </div>
                  <div className="p-3 bg-white border rounded">
                    <h4 className="font-medium text-teleperformance-purple">Cliente Tecnología</h4>
                    <p className="text-xs text-gray-600">Contexto transformación digital</p>
                    <p className="text-xs text-gray-600">Expectativas proactividad</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Dimensiones de Análisis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  number: "1",
                  title: "Historia de la Relación Empresarial",
                  objective: "Evaluar la satisfacción y duración de la relación comercial"
                },
                {
                  number: "2",
                  title: "Expectativas, Conocimiento y Reputación",
                  objective: "Medir la familiaridad con el portafolio y percepciones previas"
                },
                {
                  number: "3",
                  title: "Percepción de Valor y Comunicación",
                  objective: "Analizar la categorización de la marca y valor percibido"
                },
                {
                  number: "4",
                  title: "Ciclo de Vida de la Relación",
                  objective: "Explorar proyecciones futuras y áreas de oportunidad"
                },
                {
                  number: "5",
                  title: "Factores de Crecimiento y Riesgo",
                  objective: "Identificar elementos que potencian o amenazan la relación"
                },
                {
                  number: "6",
                  title: "Inclusión, Diversidad y RSE",
                  objective: "Evaluar la importancia y percepción de estos aspectos"
                },
                {
                  number: "7",
                  title: "Competencia",
                  objective: "Analizar posicionamiento competitivo y ventajas percibidas"
                }
              ].map((dimension) => (
                <div key={dimension.number} className="p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-teleperformance flex items-center justify-center text-white font-bold">
                      {dimension.number}
                    </div>
                    <h3 className="font-semibold text-sm">{dimension.title}</h3>
                  </div>
                  <p className="text-xs text-gray-600">{dimension.objective}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
