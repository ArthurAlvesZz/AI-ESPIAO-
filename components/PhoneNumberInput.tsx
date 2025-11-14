import React, { useState } from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { CuriosityTeaser } from './CuriosityTeaser';
import { ArrowDownIcon } from './icons/ArrowDownIcon';

interface PhoneNumberInputProps {
  onProceed: (phone: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ onProceed }) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.replace(/\D/g, '').length < 8) {
      setError('Por favor, insira um número válido.');
      return;
    }
    setError('');
    onProceed(phone);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Basic mask for BR phone numbers, but flexible
    const value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 0) {
      formattedValue = `(${value.substring(0, 2)}`;
    }
    if (value.length > 2) {
      formattedValue += `) ${value.substring(2, 7)}`;
    }
    if (value.length > 7) {
      formattedValue += `-${value.substring(7, 11)}`;
    }
    
    setPhone(value.length > 0 ? formattedValue : '');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="font-anton text-3xl md:text-4xl uppercase text-white leading-tight">
          Você realmente conhece<br/>quem está ao seu lado?
        </h2>
        <p className="mt-4 text-xl md:text-2xl text-slate-200 font-semibold">
            A <span className="text-red-500 font-bold">dúvida</span> corrói. A <span className="text-red-500 font-bold">verdade</span> liberta.
        </p>
        <p className="mt-2 text-slate-300">
            Chegou a hora de descobrir o que está escondido.
        </p>
        <div className="flex justify-center mt-4">
            <ArrowDownIcon className="w-8 h-8 text-emerald-400 animate-bounce" />
        </div>
      </div>

      <CuriosityTeaser />
      
      <div className="text-center p-6 bg-slate-800 rounded-xl shadow-2xl animate-fade-in mt-6">
        <div className="flex justify-center -mt-12 mb-4">
          <div className="bg-green-500 rounded-full p-3 shadow-lg border-4 border-slate-800">
            <WhatsappIcon className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 uppercase font-anton tracking-wide leading-tight">
          <span className="text-white">A </span>
          <span className="text-red-500">INSEGURANÇA</span>
          <span className="text-white"> SOBRE SEU </span>
          <span className="text-red-500">RELACIONAMENTO</span>
          <span className="text-white"> ACABA AGORA</span>
        </h1>
        <div className="text-slate-300 mb-8 space-y-3 text-center leading-relaxed">
            <p className="font-bold text-lg text-white">
                Já tentou dormir com a sensação de desconfiança!?
            </p>
            <p className="italic text-slate-400 px-2">
                Você geralmente quando suspeita de algo, está sempre certo(a), não é mesmo?
            </p>
            <p className="text-slate-200 pt-2">
                Chegou a hora de você descobrir o que deveria já estar sabendo. <br/> <span className="font-bold">INFORME O NÚMERO</span> que deseja descobrir a verdade, que iremos te ajudar.
            </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <WhatsappIcon className="w-6 h-6 text-green-400" />
            </div>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(XX) XXXXX-XXXX"
              className="w-full pl-12 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-300"
              maxLength={15}
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 uppercase"
          >
            Descubra Agora
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneNumberInput;