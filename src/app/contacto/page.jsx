import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';

const ContactPage = () => {
  return (
    <section className="bg-[#FAFAFA] py-16">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex flex-col items-center mb-10">
          <Image src={Logo} alt="LatinSec Logo" width={150} height={50} />
          <p className="text-sm mt-2">
            &copy; Derechos reservados LatinSec.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-[#252B42] font-bold text-2xl mb-4">Información de Contacto</h2>
            <p className="text-lg mb-2">Fraga 1119, Ciudad Autónoma de Buenos Aires</p>
            <p className="text-lg mb-2">Email: cormercial@latinsec.com</p>
            <p className="text-lg mb-2">Teléfono: 5219-1638</p>
            <p className="text-lg mb-2">WhatsApp: +54-9-11-5765-1676</p>
          </div>
          <div>
            <h2 className="text-[#252B42] font-bold text-2xl mb-4">Visítanos</h2>
            <p className="text-lg">
              Estamos ubicados en el corazón de Buenos Aires. No dudes en visitarnos para más información sobre nuestros servicios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
