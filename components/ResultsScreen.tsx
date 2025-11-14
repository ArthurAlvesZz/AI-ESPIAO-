import React from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

interface ResultsScreenProps {
  phoneNumber: string;
  onReset: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ phoneNumber, onReset }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl w-full p-6 animate-fade-in text-center">
        <div className="flex justify-center mb-4">
            <ShieldCheckIcon className="w-16 h-16 text-emerald-400" />
        </div>

        <h2 className="text-2xl font-bold text-white">Análise Concluída: Relacionamento Saudável!</h2>
        <p className="text-slate-300 mt-2">
            Boas notícias! Nossa análise para o número <span className="font-bold text-white">{phoneNumber}</span> não encontrou atividades suspeitas.
        </p>

        <div className="my-6 bg-slate-900/50 p-4 rounded-lg text-left">
            <h3 className="font-bold text-lg text-emerald-300 mb-3 text-center">Pontos de Destaque:</h3>
            <ul className="space-y-3 text-slate-200">
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0"/>Nenhuma conversa suspeita detectada.</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0"/>Interações em redes sociais são saudáveis.</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0"/>Padrões de localização consistentes e seguros.</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0"/>Nenhum vínculo com perfis de risco.</li>
            </ul>
        </div>

        <div className="bg-emerald-900/50 border border-emerald-700 text-emerald-200 px-4 py-3 rounded-lg relative text-center" role="alert">
            <strong className="font-bold block sm:inline">A base do seu relacionamento é a confiança.</strong>
            <span className="block sm:inline"> Continue nutrindo essa conexão saudável.</span>
        </div>

        <button
            onClick={onReset}
            className="w-full mt-8 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 uppercase"
        >
            Fazer Nova Análise
        </button>
    </div>
  );
};

export default ResultsScreen;
