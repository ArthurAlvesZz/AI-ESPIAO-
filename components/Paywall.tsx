import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

interface PaywallProps {
  phoneNumber: string;
}

const Paywall: React.FC<PaywallProps> = ({ phoneNumber }) => {
  const handlePayment = () => {
    alert('Redirecionando para o gateway de pagamento seguro...');
    // Here you would redirect to your payment processor
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl w-full p-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-500">Seu Acesso Premium</h2>
        <p className="text-slate-300 mt-1">Libere o acesso completo e veja todas as informações sobre <span className="font-bold text-white">{phoneNumber}</span>.</p>
      </div>

      <div className="my-8 text-center">
        <p className="text-slate-400 line-through">De R$97,00</p>
        <p className="text-4xl font-extrabold text-white">Por apenas R$47,00</p>
        <p className="text-emerald-400 font-semibold">Pagamento único - Acesso vitalício</p>
      </div>

      <div className="bg-slate-900/50 p-4 rounded-lg mb-6">
        <ul className="space-y-2 text-slate-200">
          <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-2"/>Visualização completa de atividades.</li>
          <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-2"/>Relatório detalhado e histórico.</li>
          <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-2"/>Atualizações em tempo real.</li>
          <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-2"/>Suporte prioritário.</li>
        </ul>
      </div>

      <div className="text-center text-slate-400 text-sm mb-6 p-3 bg-slate-700/50 rounded-lg">
        <ShieldCheckIcon className="w-8 h-8 mx-auto mb-2 text-emerald-400"/>
        <h3 className="font-bold text-white mb-1">Garantia de 7 Dias</h3>
        <p>Sua satisfação ou seu dinheiro de volta. Compra 100% segura e sem riscos.</p>
      </div>

      <button
        onClick={handlePayment}
        className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
      >
        Liberar Agora
      </button>
    </div>
  );
};

export default Paywall;