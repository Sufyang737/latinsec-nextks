import Asesoramiento from '@/assets/images/asesoramiento.jpg';
import { Reveal } from '@/components/animation/Reveal';
import Image from 'next/image';

const page = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div>
        <Image src={Asesoramiento} alt="" />
      </div>
      <div className="max-w-5xl mx-auto py-16 flex flex-col gap-5 px-5">
        <Reveal hiddenValue={{ opacity: 0, x: 75 }}>
          <section>
            <h1 className="text-[#252B42] text-4xl font-bold mb-4">
              Asesoramiento y consultoría
            </h1>
            <p className="text-lg">
              Nos encargamos de asesorar y supervisar las medidas de seguridad
              necesarias para proteger de manera efectiva los bienes de una
              empresa o de un cliente. Trabajamos con profesionales, quienes
              evalúan las potenciales amenazas de seguridad y violaciones para
              prevenirlas y desarrollar protocolos y planes de contingencia en
              caso de cualquier incidencia.
            </p>
            <ul className="text-lg mt-5">
              <li>● Armado de proyectos de seguridad a medida</li>
              <li>● Manejo de crisis</li>
              <li>● Elaboración de manuales de seguridad</li>
              <li>● Diagramación de centros de control de seguridad</li>
            </ul>
          </section>
        </Reveal>
      </div>
    </section>
  );
};

export default page;
