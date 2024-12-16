import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CallToAction } from '@/components/CallToAction';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'LatinSec',
  description: 'Empresa de seguridad',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PSMF8ZK5');
            `
          }}
        />
        {/* Google Tag Manager End */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript 
          dangerouslySetInnerHTML={{
            __html: `
              <iframe 
                src="https://www.googletagmanager.com/ns.html?id=GTM-PSMF8ZK5" 
                height="0" 
                width="0" 
                style="display:none;visibility:hidden"
              ></iframe>
            `
          }} 
        />
        {/* Google Tag Manager (noscript) End */}
        
        <Navbar />
        {children}
        <WhatsAppButton />
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
