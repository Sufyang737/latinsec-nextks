"use client";

import { useState } from 'react';
import Logo from '@/assets/images/logo.png';
import { MenuHamburger } from './MenuHamburger';
import { NavArrowIcon } from '@/assets/icons';
import Image from 'next/image';

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="nav fixed top-0 w-full z-50">
      <nav className="flex items-center justify-between py-3 max-w-7xl px-4 mx-auto">
        <div className="w-56">
          <a href="/">
            <Image src={Logo} alt="" />
          </a>
        </div>
        <MenuHamburger handleOpenMenu={handleOpenMenu} />
        <ul className="sm:flex hidden items-center gap-10 uppercase text-sm font-medium text-white">
          <li>
            <a href="/" className='py-2 px-3 rounded-[4px] bg-[#E9282D] '>Inicio</a>
          </li>
          <li className="py-2 px-3 relative group">
            <button className="flex gap-1 items-center uppercase">
              Servicios{' '}
              <span>
                <NavArrowIcon />
              </span>
            </button>
            <ul className="absolute invisible group-hover:visible uppercase bg-[#252B42]/80 rounded-lg w-72 p-5 flex flex-col gap-3 top-9 -left-24">
              <li>
                <a
                  href="/seguridad-fisica"
                  className="p-2 hover:text-[#0063A5] hover:bg-white rounded-lg"
                >
                  Seguridad física
                </a>
              </li>
              <li>
                <a
                  href="/custodia-de-mercaderia"
                  className="p-2 hover:text-[#0063A5] hover:bg-white rounded-lg"
                >
                  Custodia de mercaderia
                </a>
              </li>
              <li>
                <a
                  href="/seguridad-electronica"
                  className="p-2 hover:text-[#0063A5] hover:bg-white rounded-lg"
                >
                  Seguridad electrónica
                </a>
              </li>
              <li>
                <a
                  href="/investigaciones"
                  className="p-2 hover:text-[#0063A5] hover:bg-white rounded-lg"
                >
                  Investigaciones
                </a>
              </li>
              <li>
                <a
                  href="/asesoramiento-y-consultoria"
                  className="p-2 hover:text-[#0063A5] hover:bg-white rounded-lg"
                >
                  Asesoramiento y consultoría
                </a>
              </li>
            </ul>
          </li>
          <li className="py-2 px-3">
            <a href="/latinsec">Latinsec</a>
          </li>
          <li>
            <a href="/contacto"  className="font-extrabold bg-[#0063A5] rounded-[10px] py-2 px-3">Contacto</a>
          </li>
        </ul>
      </nav>
      <nav
        className={`absolute w-screen h-screen transition-all duration-500 ${
          openMenu ? 'top-0' : '-translate-y-[1920px]'
        }`}
      >
        <div className="bg-white px-4">
          <div
            onClick={handleOpenMenu}
            className="pr-10 pt-5 text-3xl font-bold flex justify-end"
          >
            <span>&times;</span>
          </div>
          <div className="max-w-xs mx-auto py-10">
            <div className="uppercase text-sm font-medium flex flex-col">
              <a
                href="/"
                className="bg-[#E9282D] py-2 px-3 rounded-[4px] text-white"
              >
                Inicio
              </a>
              <details className="py-2 px-3">
                <summary className="inline-flex items-center justify-center">
                  <div className="flex gap-1 items-center uppercase">
                    Servicios{' '}
                    <span>
                      <NavArrowIcon />
                    </span>
                  </div>
                </summary>
                <div className="flex flex-col p-2 transition-all duration-500 overflow-hidden">
                  <a
                    href="/seguridad-fisica"
                    className="p-2 hover:text-[#0063A5] hover:bg-white rounded-lg"
                  >
                    Seguridad física
                  </a>
                  <a
                    href="/custodia-de-mercaderia"
                    className="p-2 hover:text-[#0063A5] hover:bg-white rounded-lg"
                  >
                    Custodia de mercaderia
                  </a>
                  <a
                    href="/seguridad-electronica"
                    className="p-2 hover:text-[#0063A5] hover:bg-white rounded-lg"
                  >
                    Seguridad electrónica
                  </a>
                  <a
                    href="/investigaciones"
                    className="p-2 hover:text-[#0063A5] hover:bg-white rounded-lg"
                  >
                    Investigaciones
                  </a>
                  <a
                    href="/asesoramiento-y-consultoria"
                    className="p-2 hover:text-[#0063A5] hover:bg-white rounded-lg"
                  >
                    Asesoramiento y consultoría
                  </a>
                </div>
              </details>
              <a href="/latinsec" className="uppercase py-2 px-3">
                Latinsec
              </a>
              <a
                href="/contacto"
                className="font-extrabold bg-[#0063A5] rounded-[10px] py-2 px-3 text-white"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
