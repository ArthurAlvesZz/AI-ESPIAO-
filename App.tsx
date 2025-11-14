import React, { useState } from 'react';
import { AppState } from './types';
import PhoneNumberInput from './components/PhoneNumberInput';
import LoadingScreen from './components/LoadingScreen';
import ResultsScreen from './components/ResultsScreen';
import PaywallTransition from './components/PaywallTransition';
import Paywall from './components/Paywall';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.Home);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleProceed = (phone: string) => {
    setPhoneNumber(phone);
    setAppState(AppState.Loading);
  };

  const handleLoadingComplete = () => {
    setAppState(AppState.Results);
  };
  
  const handleUnlock = () => {
    setAppState(AppState.PaywallTransition);
  };
  
  const handleTransitionComplete = () => {
    setAppState(AppState.Paywall);
  };

  const renderContent = () => {
    switch (appState) {
      case AppState.Home:
        return <PhoneNumberInput onProceed={handleProceed} />;
      case AppState.Loading:
        return <LoadingScreen onComplete={handleLoadingComplete} />;
      case AppState.Results:
        return <ResultsScreen onUnlock={handleUnlock} />;
      case AppState.PaywallTransition:
        return <PaywallTransition onComplete={handleTransitionComplete} />;
      case AppState.Paywall:
        return <Paywall phoneNumber={phoneNumber} />;
      default:
        return <PhoneNumberInput onProceed={handleProceed} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 font-[Inter]">
      <div className="w-full max-w-md mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;