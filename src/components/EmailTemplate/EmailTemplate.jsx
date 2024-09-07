import * as React from "react";

export default function EmailTemplate({
  name,
  email,
  phone,
  message,
}) {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow-md">
      <div className="px-8 py-6 text-left text-sm text-gray-700">
        <h3 className="text-xl font-medium leading-6 text-gray-900">
          Nuevo mensaje de contacto
        </h3>

        <p className="mt-6 text-base leading-6">Información del remitente:</p>

        <ul className="mt-4 list-disc text-gray-700">
          <li>Nombre: {name}</li>
          <li>Email: {email}</li>
          {phone && <li>Teléfono: {phone}</li>}
        </ul>

        <p className="mt-6 text-base leading-6">Mensaje:</p>

        <p className="mt-4 text-gray-700">{message}</p>
      </div>
    </div>
  );
}
