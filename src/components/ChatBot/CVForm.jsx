import React, { useState } from 'react';
import { motion } from 'framer-motion';

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const CVForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    cv: null
  });
  const [fileName, setFileName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB límite
        setError('El archivo no debe superar los 5MB');
        e.target.value = '';
        return;
      }
      if (file.type !== 'application/pdf') {
        setError('Solo se permiten archivos PDF');
        e.target.value = '';
        return;
      }
      setFormData({ ...formData, cv: file });
      setFileName(file.name);
      setError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('nombre', formData.nombre);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('telefono', formData.telefono);
      formDataToSend.append('cv', formData.cv);

      console.log('Enviando datos CV:', {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        cvName: formData.cv?.name
      });

      const response = await fetch('/api/cv', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      console.log('Respuesta completa del servidor CV:', result);

      if (response.ok) {
        console.log('CV enviado exitosamente');
        setIsSuccess(true);
        setFormData({ nombre: '', email: '', telefono: '', cv: null });
        setFileName('');
        setTimeout(() => {
          onBack();
        }, 2000);
      } else {
        console.error('Error en la respuesta CV:', result);
        throw new Error(result.details || 'Error al enviar el CV');
      }
    } catch (error) {
      console.error('Error en el formulario CV:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-4"
      >
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-lg font-medium text-gray-900"
        >
          ¡CV enviado con éxito!
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-1 text-sm text-gray-500"
        >
          Nos pondremos en contacto contigo pronto.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-4"
      initial="hidden"
      animate="visible"
    >
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm"
        >
          {error}
        </motion.div>
      )}

      <motion.div variants={formItemVariants} custom={0}>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          required
          value={formData.nombre}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0263A5] focus:ring-[#0263A5] sm:text-sm"
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />
      </motion.div>

      <motion.div variants={formItemVariants} custom={1}>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0263A5] focus:ring-[#0263A5] sm:text-sm"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </motion.div>

      <motion.div variants={formItemVariants} custom={2}>
        <label className="block text-sm font-medium text-gray-700">Teléfono</label>
        <input
          type="tel"
          required
          value={formData.telefono}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0263A5] focus:ring-[#0263A5] sm:text-sm"
          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
        />
      </motion.div>

      <motion.div variants={formItemVariants} custom={3}>
        <label className="block text-sm font-medium text-gray-700">CV (PDF)</label>
        <div className="mt-1 flex items-center">
          <input
            type="file"
            required
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            id="cv-upload"
          />
          <label
            htmlFor="cv-upload"
            className="cursor-pointer flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0263A5] focus:ring-offset-2"
          >
            {fileName || 'Seleccionar archivo PDF'}
          </label>
          {fileName && (
            <button
              type="button"
              onClick={() => {
                setFormData({ ...formData, cv: null });
                setFileName('');
              }}
              className="ml-2 text-sm text-red-600 hover:text-red-700"
            >
              Eliminar
            </button>
          )}
        </div>
        <p className="mt-1 text-xs text-gray-500">Máximo 5MB</p>
      </motion.div>

      <motion.div 
        variants={formItemVariants} 
        custom={4}
        className="flex space-x-3"
      >
        <motion.button
          type="button"
          onClick={onBack}
          disabled={isLoading}
          className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Volver
        </motion.button>
        <motion.button
          type="submit"
          disabled={isLoading || !formData.cv}
          className="flex-1 bg-[#0263A5] text-white py-2 px-4 rounded-lg hover:bg-[#0263A5]/90 disabled:opacity-50 relative"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLoading ? (
            <>
              <span className="opacity-0">Enviar CV</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            </>
          ) : (
            'Enviar CV'
          )}
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default CVForm; 