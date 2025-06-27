export const nocodbConfig = {
  apiUrl: process.env.NOCODB_API_URL,
  authToken: process.env.NOCODB_AUTH_TOKEN,
  tableId: process.env.NOCODB_TABLE_ID,
  cvTableId: process.env.NOCODB_CV_TABLE_ID || 'mln6zehk0v4d5z8',
  viewId: process.env.NOCODB_VIEW_ID,
  cvViewId: process.env.NOCODB_CV_VIEW_ID || 'vwbadn35qo8ojwfn',
  endpoints: {
    commercial: {
      create: (tableId) => `${process.env.NOCODB_API_URL}/tables/${tableId}/records`,
      list: (tableId, viewId) => 
        `${process.env.NOCODB_API_URL}/tables/${tableId}/records?offset=0&limit=25&where=&viewId=${viewId}`,
    },
    cv: {
      create: (tableId) => `${process.env.NOCODB_API_URL}/tables/${tableId}/records`,
      list: (tableId, viewId) => 
        `${process.env.NOCODB_API_URL}/tables/${tableId}/records?offset=0&limit=25&where=&viewId=${viewId}`,
    }
  },
  headers: {
    get: () => ({
      'Content-Type': 'application/json',
      'xc-token': process.env.NOCODB_AUTH_TOKEN,
      'Accept': 'application/json'
    })
  }
};

// Validación de configuración
if (typeof window === 'undefined') { // Solo ejecutar en el servidor
  console.log('Configuración de NocoDB:');
  console.log('API URL:', process.env.NOCODB_API_URL);
  console.log('Table ID:', process.env.NOCODB_TABLE_ID);
  console.log('CV Table ID:', process.env.NOCODB_CV_TABLE_ID || 'mln6zehk0v4d5z8');
  console.log('View ID:', process.env.NOCODB_VIEW_ID);
  console.log('CV View ID:', process.env.NOCODB_CV_VIEW_ID || 'vwbadn35qo8ojwfn');
  console.log('Auth Token presente:', !!process.env.NOCODB_AUTH_TOKEN);
} 