
import React, { useState, useEffect } from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

interface LoadingScreenProps {
  onComplete: () => void;
}

const steps = [
  "Conectando ao servidor seguro...",
  "Analisando mensagens suspeitas...",
  "Verificando redes sociais (Instagram/WhatsApp)...",
  "Cruzando localizações suspeitas...",
  "Compilando relatório final..."
];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 1200);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, 60);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-6 bg-slate-800 rounded-xl shadow-2xl w-full">
      <h2 className="text-xl font-bold text-center mb-6 text-slate-100">Fazendo análise completa...</h2>
      <div className="space-y-3 mb-6">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex items-center space-x-3 transition-opacity duration-500 ${index <= currentStep ? 'opacity-100' : 'opacity-30'}`}
          >
            <div className="flex-shrink-0">
              {index < currentStep ? (
                <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
              ) : (
                <div className="w-5 h-5 flex items-center justify-center">
                   <div className="w-3 h-3 border-2 border-slate-500 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <span className="text-slate-300">{step}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2.5">
        <div 
          className="bg-emerald-500 h-2.5 rounded-full transition-all duration-300 ease-linear" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
       <p className="text-center text-sm text-slate-400 mt-4">{progress}% Concluído</p>
    </div>
  );
};

export default LoadingScreen;
   