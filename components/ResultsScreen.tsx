import React, { useState, useEffect } from 'react';
import { AlertIcon } from './icons/AlertIcon';
import { LockIcon } from './icons/LockIcon';
import { MagnifyingGlassIcon } from './icons/MagnifyingGlassIcon';
import { ClockIcon } from './icons/ClockIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

interface ResultsScreenProps {
  onUnlock: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ onUnlock }) => {
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes } = prev;
                if (minutes > 0) {
                    minutes--;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                } else {
                    clearInterval(timer);
                    return { hours: 0, minutes: 0 };
                }
                return { hours, minutes };
            });
        }, 60000);

        return () => clearInterval(timer);
    }, []);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl w-full p-4 md:p-6 animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white">Notificações Recentes</h2>
        <p className="text-sm text-slate-400">Análise concluída há poucos minutos</p>
      </div>

      <div className="space-y-3">
        {/* Notification 1 */}
        <div className="bg-slate-700/50 p-4 rounded-lg border border-yellow-500/30 flex items-start space-x-4 relative overflow-hidden">
            <AlertIcon className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
                <h3 className="font-semibold text-white">Atividade suspeita vinculada ao seu parceiro(a) detectada.</h3>
                <p className="text-slate-300 text-sm">Nosso sistema identificou conversas e interações que podem comprometer seu relacionamento.</p>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>
            <div className="absolute bottom-2 right-2 text-xs font-bold bg-yellow-500/80 text-white py-1 px-2 rounded-md flex items-center space-x-1">
                <LockIcon className="w-3 h-3" />
                <span>Informação parcial – bloqueada</span>
            </div>
        </div>

        {/* Notification 2 */}
        <div className="bg-slate-700/50 p-4 rounded-lg border border-red-500/30 flex items-start space-x-4 relative overflow-hidden">
            <MagnifyingGlassIcon className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
                <h3 className="font-semibold text-white">Com quem seu parceiro(a) tanto conversa?</h3>
                <p className="text-slate-300 text-sm">Desbloqueie para ter acesso a nomes, fotos e o teor completo das mensagens.</p>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>
            <div className="absolute bottom-2 right-2 text-xs font-bold bg-red-500/80 text-white py-1 px-2 rounded-md">
                <span>Conteúdo oculto até desbloqueio</span>
            </div>
        </div>
        
        {/* Notification 3 */}
        <div className="bg-slate-700/50 p-4 rounded-lg border border-red-500/30 flex items-start space-x-4">
            <ClockIcon className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
                <h3 className="font-semibold text-white">As provas podem ser apagadas a qualquer momento.</h3>
                <p className="text-slate-300 text-sm">Para não perder o acesso a esses dados cruciais, desbloqueie seu relatório agora.</p>
                <p className="text-xs font-bold text-red-400 mt-1">Expira em: {timeLeft.hours} horas e {timeLeft.minutes} minutos</p>
            </div>
        </div>
      </div>

      <div className="text-center my-6">
        <p className="font-semibold text-emerald-400">+32.000 pessoas descobriram a verdade esta semana.</p>
        <div className="flex justify-center items-center space-x-4 mt-2 text-slate-400">
          <div className="flex items-center space-x-1 text-xs"><ShieldCheckIcon className="w-4 h-4 text-emerald-500"/><span>100% Seguro</span></div>
          <div className="flex items-center space-x-1 text-xs"><ShieldCheckIcon className="w-4 h-4 text-emerald-500"/><span>Privado</span></div>
        </div>
      </div>

      <div className="bg-slate-900/50 p-4 rounded-lg mb-6">
        <ul className="space-y-2 text-slate-200">
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-2"/>Acesso imediato aos detalhes completos.</li>
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-2"/>Identificação da pessoa e origem da atividade.</li>
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-2"/>Histórico de conversas e localizações.</li>
            <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-2"/>Alertas em tempo real sobre novas interações.</li>
        </ul>
      </div>

      <button
        onClick={onUnlock}
        className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate-pulse uppercase"
      >
        Quero ver todas as provas
      </button>
    </div>
  );
};

export default ResultsScreen;
