import Investigaciones from '@/assets/images/investigaciones.jpg';
import { Reveal } from '@/components/animation/Reveal';
import Image from 'next/image';

const page = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div>
        <Image src={Investigaciones} alt="" />
      </div>
      <div className="max-w-5xl mx-auto py-16 flex flex-col gap-5 px-5">
        <Reveal hiddenValue={{ opacity: 0, x: -75 }}>
          <section>
            <h1 className="text-[#252B42] text-4xl font-bold mb-4">
              Investigaciones
            </h1>
            <p className="text-lg">
              En{' '}
              <strong>
                <span className="text-[#007bff]">Latin</span>
                <span className="text-red-600">Sec</span>
              </strong>{' '}
              trabajamos con un equipo especial, encargados de realizar
              cualquier tipo de investigación, tanto corporativa como de tinte
              personal. Las empresas suelen experimentar situaciones negativas
              que tienen impacto directo en sus principales recursos
              estratégicos como: personas, instalaciones, productos, información
              y reputación, lo que afecta el logro de sus objetivos estratégicos
              y en algunos casos compromete la continuidad del negocio. Una
              investigación busca determinar de manera plena y creíble, lo que
              sucedió con respecto a un incidente en particular, si se produjo o
              no una conducta sospechosa; cuáles fueron las circunstancias;
              quién está involucrado; si ocurrió una violación de la ley o
              política de la compañía. Trabajamos con personal altamente
              capacitado, utilizando además herramientas electrónicas modernas,
              para ir cumpliendo de manera progresiva con las distintas etapas
              investigativas.
            </p>
          </section>
        </Reveal>
      </div>
    </section>
  );
};

export default page;
