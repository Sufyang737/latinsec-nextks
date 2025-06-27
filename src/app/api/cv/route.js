import { NextResponse } from 'next/server';
import { nocodbConfig } from '@/config/nocodb';

async function uploadFileToStorage(file) {
  try {
    const formData = new FormData();
    formData.append('files', file);

    const uploadEndpoint = `${nocodbConfig.apiUrl}/storage/upload`;
    console.log('Subiendo archivo al storage:', uploadEndpoint);

    const uploadResponse = await fetch(uploadEndpoint, {
      method: 'POST',
      headers: {
        'xc-token': process.env.NOCODB_AUTH_TOKEN
      },
      body: formData
    });

    if (!uploadResponse.ok) {
      const errorData = await uploadResponse.json();
      console.error('Error response:', errorData);
      throw new Error(`Error al subir el archivo: ${errorData.msg || 'Error desconocido'}`);
    }

    const uploadData = await uploadResponse.json();
    console.log('Respuesta del storage:', uploadData);

    // Construir la URL completa usando la base URL de la API
    const baseUrl = nocodbConfig.apiUrl.split('/api')[0];
    const fileData = uploadData[0];
    
    // Formatear la respuesta según el formato esperado por NocoDB
    return [{
      url: `${baseUrl}/${fileData.path}`, // El path ya incluye 'download'
      title: fileData.title,
      mimetype: fileData.mimetype,
      size: fileData.size
    }];
  } catch (error) {
    console.error('Error detallado al subir al storage:', error);
    throw error;
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extraer el archivo y los datos
    const file = formData.get('cv');
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const telefono = formData.get('telefono');

    if (!file) {
      throw new Error('No se proporcionó el archivo CV');
    }

    // Verificar el tipo de archivo y tamaño usando las propiedades del Blob
    if (file.type !== 'application/pdf') {
      throw new Error('El archivo debe ser un PDF');
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB
      throw new Error('El archivo no debe superar los 5MB');
    }

    // 1. Primero subimos el archivo al storage
    const attachmentData = await uploadFileToStorage(file);

    // 2. Creamos el registro con la URL del archivo
    const endpoint = nocodbConfig.endpoints.cv.create(nocodbConfig.cvTableId);
    
    const payload = {
      Nombre: nombre,
      Email: email,
      Telefono: telefono,
      CV: attachmentData,
      Fecha_Postulacion: new Date().toISOString()
    };

    console.log('Endpoint CV:', endpoint);
    console.log('Enviando datos a NocoDB:', {
      ...payload,
      CV: `[Archivo PDF: ${file.name}]` // No logueamos la URL completa
    });

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'xc-token': process.env.NOCODB_AUTH_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const responseData = await response.json();
    console.log('Respuesta de NocoDB:', responseData);

    if (!response.ok) {
      throw new Error(responseData.message || responseData.msg || 'Error al guardar en NocoDB');
    }

    return NextResponse.json({ 
      message: 'CV guardado exitosamente',
      success: true,
      data: responseData
    });
  } catch (error) {
    console.error('Error completo:', error);
    return NextResponse.json(
      { 
        error: 'Error al procesar la solicitud',
        details: error.message,
        stack: error.stack
      },
      { status: 500 }
    );
  }
} 