import { NextResponse } from 'next/server';
import { nocodbConfig } from '@/config/nocodb';

export async function POST(request) {
  try {
    const data = await request.json();
    console.log('Datos recibidos:', data);
    
    // Asegurarnos de que los campos coincidan exactamente con los de la tabla
    const payload = {
      Empresa: data.empresa,
      Email: data.email,
      CUIT: data.cuit,
      Fecha_Contacto: new Date().toISOString()
    };
    
    const endpoint = nocodbConfig.endpoints.commercial.create(nocodbConfig.tableId);
    console.log('Endpoint:', endpoint);
    
    const options = {
      method: 'POST',
      headers: {
        ...nocodbConfig.headers.get(),
        'Accept-Language': 'es'
      },
      body: JSON.stringify(payload)
    };
    
    console.log('Payload a enviar:', payload);
    console.log('Opciones de la petición:', {
      method: options.method,
      headers: options.headers,
      body: options.body
    });

    const response = await fetch(endpoint, options);
    console.log('Status code:', response.status);
    
    const responseData = await response.json();
    console.log('Respuesta de NocoDB:', responseData);

    if (!response.ok) {
      throw new Error(responseData.message || 'Error al guardar en NocoDB');
    }

    return NextResponse.json({ 
      message: 'Datos guardados exitosamente',
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