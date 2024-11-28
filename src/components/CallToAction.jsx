import { WhatsappIcon } from '@/assets/icons';
import { Reveal } from './animation/Reveal';

export const CallToAction = () => {
  return (
    <section className="bg-[#FAFAFA] py-16 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal hiddenValue={{ opacity: 0, y: 75 }}>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-[#252B42] font-bold text-4xl mb-6">
              ¿Necesitas servicios de seguridad profesional?
            </h2>
            <p className="text-[#737373] text-lg mb-8 max-w-2xl mx-auto">
              Con más de 27 años de experiencia, ofrecemos soluciones de seguridad personalizadas para empresas y particulares. Contáctanos para una consulta gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/+5491123180801"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1ea952] transition-colors flex items-center justify-center gap-2"
              >
                <WhatsappIcon className="w-6 h-6" />
                Chatear por WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}; 