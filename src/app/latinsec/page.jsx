import LatinsecImage from '@/assets/images/latinsec.png';
import { Reveal } from '@/components/animation/Reveal';
import Image from 'next/image';

const page = () => {
  return (
    <section className="bg-[#FAFAFA]">
      <div>
        <Image src={LatinsecImage} alt="" />
      </div>
      <div className="max-w-5xl mx-auto py-16 flex flex-col gap-5 px-5">
        <Reveal hiddenValue={{ opacity: 0, x: -75 }}>
          <section>
            <h1 className="text-[#252B42] text-4xl font-bold mb-4">
              Sobre la empresa
            </h1>
            <p className="text-lg">
              <strong>
                <span className="text-[#007bff]">Latin</span>
                <span className="text-red-600">Sec</span>
              </strong>{' '}
              es una compañía de seguridad y protección patrimonial, con más de
              26 años de trayectoria. En constante crecimiento y actualización,
              hoy somos unas de las más completas organizaciones del país,
              desafiando los complejos problemas de seguridad con abordajes
              integrales de excelencia. La empresa, está dirigida por expertos
              profesionales de la seguridad, lo que nos permite tener una
              dirección altamente eficiente y técnicamente superior con un
              importante valor agregado. Utilizamos los sistemas más avanzados
              de tecnología moderna para cuidar a nuestros clientes, preservar
              los bienes, el orden interno y la SEGURIDAD de sus integrantes.
              Nuestra tarea primordial es la PREVENCION, la cual llevamos
              adelante por medio de protocolos perfectamente estructurados, a
              fin de poder controlar y responder a cualquier incidente que
              pudiera producirse, adaptado a la necesidad de cada cliente.
            </p>
          </section>
        </Reveal>
      </div>
    </section>
  );
};

export default page;