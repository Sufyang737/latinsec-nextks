import { WhatsappIcon } from '@/assets/icons';

export const WhatsAppButton = () => {
  return (
    <a
     href="https://wa.me/+5491152191638"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="relative">
        <div className="absolute -top-12 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Háblame si necesitas contactarme
        </div>
        <div className="bg-[#25D366] p-3 rounded-full animate-pulse hover:animate-none">
          <WhatsappIcon className="w-8 h-8 text-white" />
        </div>
      </div>
    </a>
  );
}; 
