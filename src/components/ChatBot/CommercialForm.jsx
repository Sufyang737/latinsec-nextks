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

const CommercialForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    empresa: '',
    email: '',
    cuit: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      console.log('Enviando datos:', formData);
      const response = await fetch('/api/commercial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Respuesta completa del servidor:', result);

      if (response.ok) {
        console.log('Formulario enviado exitosamente');
        setIsSuccess(true);
        setFormData({ empresa: '', email: '', cuit: '' }); // Limpiar el formulario
        setTimeout(() => {
          onBack();
        }, 2000);
      } else {
        console.error('Error en la respuesta:', result);
        throw new Error(result.details || 'Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error en el formulario:', error);
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
          ¡Datos enviados con éxito!
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
        <label className="block text-sm font-medium text-gray-700">Nombre de la empresa</label>
        <input
          type="text"
          required
          value={formData.empresa}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0263A5] focus:ring-[#0263A5] sm:text-sm"
          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
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
        <label className="block text-sm font-medium text-gray-700">CUIT</label>
        <input
          type="text"
          required
          value={formData.cuit}
          pattern="[0-9]{11}"
          title="El CUIT debe tener 11 números"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0263A5] focus:ring-[#0263A5] sm:text-sm"
          onChange={(e) => setFormData({ ...formData, cuit: e.target.value })}
        />
      </motion.div>

      <motion.div 
        variants={formItemVariants} 
        custom={3}
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
          disabled={isLoading}
          className="flex-1 bg-[#0263A5] text-white py-2 px-4 rounded-lg hover:bg-[#0263A5]/90 disabled:opacity-50 relative"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLoading ? (
            <>
              <span className="opacity-0">Enviar datos</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            </>
          ) : (
            'Enviar datos'
          )}
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default CommercialForm; 