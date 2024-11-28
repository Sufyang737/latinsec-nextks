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
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
} 