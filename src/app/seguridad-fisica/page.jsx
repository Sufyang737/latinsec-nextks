import Seguridad from '@/assets/images/segurida-fisica.jpg';
import { Reveal } from '@/components/animation/Reveal';
import Image from 'next/image';

const page = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div>
        <Image src={Seguridad} alt="" />
      </div>
      <div className="max-w-5xl mx-auto py-16 flex flex-col gap-5 px-5">
        <Reveal hiddenValue={{ opacity: 0, x: -75 }}>
          <section>
            <h1 className="text-[#252B42] text-4xl font-bold mb-4">
              Seguridad Física y Vigilancia
            </h1>
            <p className="text-lg">
              Trabajamos comprometidamente para brindar el mejor servicio de
              seguridad y vigilancia, bajo altos estándares de calidad y a
              precios competitivos. En constante crecimiento y actualización,
              hoy somos unas de las más completas organizaciones del país,
              desafiando los complejos problemas de seguridad con abordajes
              integrales de excelencia. La empresa, está dirigida por expertos
              profesionales de la seguridad, lo que nos permite tener una
              dirección altamente eficiente y técnicamente superior con un
              importante valor agregado. Utilizamos los sistemas más avanzados
              de tecnología moderna para cuidar a nuestros clientes, preservar
              los bienes, el orden interno y la SEGURIDAD de sus integrantes.
            </p>
          </section>
        </Reveal>
        <Reveal hiddenValue={{ opacity: 0, x: 75 }}>
          <section>
            <h2 className="text-[#252B42] text-4xl font-bold mb-4">
              Seguridad y Vigilancia para Barrios Cerrados
            </h2>
            <p className="text-lg">
              La proliferación de barrios cerrados y countries, observada en los
              últimos años, incrementó la necesidad de protección en este tipo
              de geografías, con extensiones considerables de terreno, habitadas
              por familias que buscan vivir en ambientes seguros, exclusivos y
              en contacto con la naturaleza. Proveemos vigilancia con personal
              experto en este tipo servicios, sumado a la más avanzada
              tecnología en seguridad perimetral. Somos la primera empresa
              argentina de seguridad en utilizar elementos de última tecnología
              aplicados a la seguridad y poseer una flota de drones.
            </p>
          </section>
        </Reveal>
        <Reveal hiddenValue={{ opacity: 0, x: -75 }}>
          <section>
            <h2 className="text-[#252B42] text-4xl font-bold mb-4">
              Industrias, Edificios y Comercios
            </h2>
            <p className="text-lg">
              La gestión de la seguridad está dirigida estratégica y
              técnicamente por profesionales expertos en Seguridad. Contamos con
              un plantel de vigiladores de exigente formación en prevención de
              delitos y situaciones que impliquen alguna amenaza para su
              patrimonio.
            </p>
          </section>
        </Reveal>
        <Reveal hiddenValue={{ opacity: 0, x: 75 }}>
          <section>
            <h2 className="text-[#252B42] text-4xl font-bold mb-4">
              Protección y Vigilancia Personal
            </h2>
            <p className="text-lg">
              Protegemos a personas con altos cargos o personalidades públicas.
              Nuestra misión es proporcionar la tranquilidad y confianza en lo
              relativo a la seguridad, tanto física como patrimonial, para el
              normal desenvolvimiento de las actividades cotidianas de nuestros
              clientes.
            </p>
          </section>
        </Reveal>
      </div>
    </section>
  );
};

export default page;