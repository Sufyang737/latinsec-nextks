import React from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/animation/Reveal';
import estacionLlamadas from '@/assets/images/estacion-llamadas-seguridad.png';

const ServicioDeToten = () => {
  return (
    <main className="pt-20">
      <section className="relative bg-[#252B42] text-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protección inteligente para entornos en constante movimiento
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal hiddenValue={{ opacity: 0, x: -50 }}>
              <div>
                <p className="text-lg text-[#737373] mb-8 leading-relaxed">
                  La seguridad de una empresa no solo se basa en la vigilancia humana, sino también 
                  en el uso de tecnología avanzada que actúe como una extensión constante del control 
                  y la prevención.
                </p>
                <p className="text-lg text-[#737373] mb-8 leading-relaxed">
                  Nuestros Tótems de Seguridad Electrónica son una solución integral y eficiente 
                  para proteger espacios abiertos, accesos, perímetros o zonas críticas, sin necesidad 
                  de presencia física permanente.
                </p>
              </div>
            </Reveal>
            <Reveal hiddenValue={{ opacity: 0, x: 50 }}>
              <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={estacionLlamadas}
                  alt="Estación de Llamadas de Seguridad"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-contain bg-gray-100"
                  quality={100}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#252B42] mb-8">
                Características Principales
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-[#737373] mb-6 leading-relaxed">
                    Ofrecemos equipos de última generación con cámaras de alta resolución, 
                    visión nocturna, detección de movimiento, inteligencia artificial y conexión 
                    en tiempo real con centros de monitoreo, lo que permite una respuesta inmediata 
                    ante cualquier amenaza o evento sospechoso.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-[#737373] mb-6 leading-relaxed">
                    Estos sistemas pueden operar de forma autónoma o complementarse con otros 
                    servicios de seguridad, brindando una cobertura amplia, disuasiva y adaptable 
                    a todo tipo de entornos, tanto urbanos como industriales o rurales.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#252B42] mb-6">
                Solución Integral para Múltiples Entornos
              </h2>
              <p className="text-lg text-[#737373] max-w-3xl mx-auto leading-relaxed">
                Ya sea para obras, depósitos, eventos, accesos vehiculares o espacios públicos, 
                nuestros tótems garantizan vigilancia continua, evidencia clara y reducción de 
                riesgos, con la eficiencia que exige el presente.
              </p>
              <div className="mt-12">
                <a
                  href="/contacto"
                  className="inline-block bg-[#0263A5] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0263A5]/90 transition-colors"
                >
                  Solicitar Información
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default ServicioDeToten; 