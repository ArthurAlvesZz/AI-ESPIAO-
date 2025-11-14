import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { LocationPinIcon } from './icons/LocationPinIcon';

const TeaserCard: React.FC<{ icon: React.ReactNode; title: string; count: string; text: string; }> = ({ icon, title, count, text }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 flex items-start space-x-3">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <p className="font-bold text-sm text-slate-200">{title}</p>
      <p className="text-lg font-extrabold text-red-500">{count}</p>
      <p className="text-xs text-slate-400">{text}</p>
    </div>
  </div>
);

export const CuriosityTeaser: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-2">
       <p className="text-center text-slate-300 font-semibold mb-3 text-sm">Somente em 2024, nosso sistema identificou:</p>
       <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
         <TeaserCard 
            icon={<WhatsappIcon className="w-6 h-6 text-green-400" />}
            title="No WhatsApp"
            count="+150.000 traições"
            text="Mesmo com nomes de contatos alterados e conversas apagadas diariamente."
         />
         <TeaserCard 
            icon={<InstagramIcon className="w-6 h-6 text-pink-500" />}
            title="No Instagram"
            count="+95.000 interações"
            text="Comentários, curtidas e mensagens diretas com perfis suspeitos."
         />
         <TeaserCard 
            icon={<LocationPinIcon className="w-6 h-6 text-red-400" />}
            title="Localizações suspeitas"
            count="+78.000 alertas"
            text="Padrões de deslocamento incomuns e check-ins em locais não informados."
         />
       </div>
    </div>
  );
};