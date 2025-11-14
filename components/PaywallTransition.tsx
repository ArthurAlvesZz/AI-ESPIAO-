
import React, { useState, useEffect } from 'react';

interface PaywallTransitionProps {
  onComplete: () => void;
}

const PaywallTransition: React.FC<PaywallTransitionProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Preparando seus dados...");

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setMessage("Para ver tudo, ative seu acesso Premium.");
          setTimeout(onComplete, 1500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-6 bg-slate-800 rounded-xl shadow-2xl w-full text-center">
      <h2 className="text-xl font-bold text-slate-100 mb-4">{message}</h2>
      <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
        <div 
          className="bg-emerald-500 h-2.5 rounded-full transition-all duration-150" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm text-slate-400">{progress}%</p>
    </div>
  );
};

export default PaywallTransition;
   