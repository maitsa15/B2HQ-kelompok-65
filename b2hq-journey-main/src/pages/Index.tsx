import { useState } from "react";
import { IslamicDecoration } from "@/components/IslamicDecoration";
import { NameInputCard } from "@/components/NameInputCard";
import { StatusCard } from "@/components/StatusCard";
import { MessageCard } from "@/components/MessageCard";
import { MemoryGallery } from "@/components/MemoryGallery";

type Step = 'input' | 'status' | 'message' | 'memory';

const PASSED_NAMES = [
  "Devani Rahma Meidina",
  "Siti Sofariyah",
  "Mozza Batur Rahmah",
  "Rika Rahmaniah",
  "Hurin In Viaf Da Tina",
  "Merlinda Aydina Brilliana Putri",
  "Anindya Widyatih Khairun Nisa",
  "Salby Alika Diwanti",
  "Zulaika Nur Safira",
  "Ghefira Prameswari",
  "Tasya Meilinda Ahmad",
  "Agni Nur'aini",
  "Chelsea Aprilia",
  "Nabila Nisa Ramadhani",
  "Elsi Pebriyanti",
  "Rania Rohidin"
];

const Index = () => {
  const [step, setStep] = useState<Step>('input');
  const [userName, setUserName] = useState('');
  const [isPassed, setIsPassed] = useState(false);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    const passed = PASSED_NAMES.some(
      passedName => passedName.toLowerCase() === name.toLowerCase()
    );
    setIsPassed(passed);
    setStep('status');
  };

  const handleStatusContinue = () => {
    setStep('message');
  };

  const handleMessageContinue = () => {
    setStep('memory');
  };

  const handleBackToInput = () => {
    setStep('input');
    setUserName('');
    setIsPassed(false);
  };

  const handleBackToStatus = () => {
    setStep('status');
  };

  const handleBackToMessage = () => {
    setStep('message');
  };

  return (
    <div className="min-h-screen bg-background islamic-pattern relative overflow-hidden">
      <IslamicDecoration />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-12">
        {step === 'input' && (
          <NameInputCard onSubmit={handleNameSubmit} />
        )}
        
        {step === 'status' && (
          <StatusCard 
            name={userName}
            isPassed={isPassed}
            onContinue={handleStatusContinue}
            onBack={handleBackToInput}
          />
        )}
        
        {step === 'message' && (
          <MessageCard 
            isPassed={isPassed}
            onContinue={handleMessageContinue}
            onBack={handleBackToStatus}
          />
        )}
        
        {step === 'memory' && (
          <MemoryGallery onBack={handleBackToMessage} />
        )}
      </div>
    </div>
  );
};

export default Index;
