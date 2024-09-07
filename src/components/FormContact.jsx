"use client";

import { useRef, useState } from 'react';
import ContactImage from '@/assets/images/contact-image.webp';
import { Input } from './ui/Input';
import axios from 'axios';
import { TextArea } from './ui/TextArea';
import Image from 'next/image';
import Turnstile from 'react-turnstile';

export const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [turnstileToken, setTurnstileToken] = useState(null);
  const turnstileRef = useRef(null);

  const handleInputChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMessage = 'Este campo es obligatorio';
    const newErrors = {
      name: formData.name ? '' : errorMessage,
      email: formData.email ? '' : errorMessage,
      message: formData.message ? '' : errorMessage,
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== "") && turnstileToken) {
      try {
        const res = await axios.post("/api/send", formData);

        if (res.status === 200) {
          console.log("Mensaje enviado correctamente");
          setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
          console.log("Error al enviar el mensaje");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    }
  };

  const areAllFieldsFilled = () => {
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.message.trim() !== '' &&
      turnstileToken !== null
    );
  };
  return (
    <section className="bg-white flex w-full">
      <div className="w-[364px] hidden lg:flex">
        <Image src={ContactImage} alt="" className="object-cover" />
      </div>
      <form onSubmit={handleSubmit} className="px-[50px] py-[40px] lg:w-2/3 w-full">
        <h4 className="font-bold text-[40px] text-[#252B42]">Contacto</h4>
        <div className="w-full">
          <Input
            label="Nombre*"
            name="name"
            type="text"
            required
            value={formData.name}
            placeholder="Nombre"
            error={errors.name}
            onChange={handleInputChange}
          />
          <Input
            label="Email*"
            name="email"
            type="email"
            required
            value={formData.email}
            placeholder="ejemplo@latinsec.com"
            error={errors.email}
            onChange={handleInputChange}
          />
          <Input
            label="Teléfono"
            name="phone"
            type="tel"
            value={formData.phone}
            placeholder="(123) 123456"
            pattern="[0-9]*"
            onChange={handleInputChange}
          />
          <TextArea
            label="Asunto*"
            name="message"
            required
            value={formData.message}
            placeholder="Mensaje"
            error={errors.message}
            onChange={handleInputChange}
          />
          <Turnstile
            sitekey="0x4AAAAAAAf6djTtczCLprdy"
            onVerify={(token) => setTurnstileToken(token)}
            onExpire={() => setTurnstileToken(null)}
            ref={turnstileRef}
          />
          <button
            type="submit"
            className={`rounded-md text-center font-bold text-sm w-full py-[15px] text-white transition-colors ${
              areAllFieldsFilled() ? 'bg-[#0063A5]' : 'bg-slate-200'
            } focus:outline-none`}
            disabled={!areAllFieldsFilled()}
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};
