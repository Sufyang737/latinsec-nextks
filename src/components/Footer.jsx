import Logo from '@/assets/images/logo.png';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/assets/icons';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="z-10 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto grid xl:grid-cols-4 gap-10 px-5 py-12">
        <div className="w-80">
          <Image src={Logo} alt="" />
          <p className="text-sm">
            &copy; Derechos reservados latinsec. Diseñado por ...
          </p>
        </div>
        <div className='lg:ml-16'>
          <h2 className="text-[#252B42] font-bold text-2xl">Servicios</h2>
          <ul className="mt-3 flex flex-col gap-2 text-[#737373] font-semibold text-sm">
            <li>
              <a href="/seguridad-fisica">Seguridad física</a>
            </li>
            <li>
              <a href="/custodia-de-mercaderia">Custodia de mercadería</a>
            </li>
            <li>
              <a href="/seguridad-electronica">Seguridad electrónica</a>
            </li>
            <li>
              <a href="/investigaciones">Investigaciones</a>
            </li>
            <li>
              <a href="/asesoramiento-y-consultoria">Asesoramiento y consultoría</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#252B42] font-bold text-2xl">Empresa</h2>
          <ul className="mt-3 text-[#737373] font-semibold  text-sm">
            <li>
              <a href="/latinsec">Sobre la empresa</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#252B42] font-bold text-2xl">Nuestras redes</h2>
          <p className="text-[#737373] font-semibold text-sm w-44">
            Siganos en nuestras redes sociales para estar al tanto de latinsec
          </p>
          <div className="mt-3 flex text-2xl gap-3">
            <a href="https://www.facebook.com/SeguridadLatinSec/" className="hover:scale-110 transition-transform">
              <span>
                <FacebookIcon />
              </span>
            </a>
            <a href="https://www.instagram.com/latinsecseguridad/" className="hover:scale-110 transition-transform">
              <span>
                <InstagramIcon />
              </span>
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <span>
                <TwitterIcon />
              </span>
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <span>
                <YoutubeIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
