import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "./BackButton";

interface StatusCardProps {
  name: string;
  isPassed: boolean;
  onContinue: () => void;
  onBack: () => void;
}

export const StatusCard = ({ name, isPassed, onContinue, onBack }: StatusCardProps) => {
  return (
    <Card className={`w-full max-w-2xl mx-auto border-2 shadow-lg animate-slide-up ${
      isPassed 
        ? 'border-success/40 bg-gradient-to-br from-success/5 to-islamic-teal/10' 
        : 'border-secondary/40 bg-gradient-to-br from-secondary/5 to-islamic-yellow/10'
    } backdrop-blur`}>
      <div className="p-4 pb-0">
        <BackButton onClick={onBack} />
      </div>
      <CardHeader className="text-center space-y-4 pb-6">
        <div className="text-6xl mb-2">{isPassed ? '🎉' : '💛'}</div>
        <CardTitle className="text-3xl md:text-4xl font-bold">
          {isPassed ? 'Alhamdulillah! 🤍✨' : '🌿 Tetap Semangat!'}
        </CardTitle>
        <CardDescription className="text-lg md:text-xl text-foreground/80 leading-relaxed">
          {isPassed ? (
            <>
              <span className="font-semibold text-success">{name}</span> terdaftar sebagai peserta{' '}
              <span className="font-bold text-success">LULUS</span> B2HQ
            </>
          ) : (
            <>
              Maaf, nama <span className="font-semibold">{name}</span> belum terdaftar sebagai peserta lulus
            </>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 px-8 pb-8">
        <div className="prose prose-sm md:prose-base max-w-none text-foreground/90 space-y-4">
          {isPassed ? (
            <>
              <p className="leading-relaxed">
                Alhamdulillah, kamu telah menyelesaikan bimbingan selama 3 bulan.
                Setiap huruf yang kamu baca dan setiap usaha yang kamu lakukan insyaaAllah bernilai ibadah.
              </p>
            </>
          ) : (
            <>
              <p className="leading-relaxed">
                Jangan kecewa ya! Perjalanan belajar belum selesai.
                Terus berlatih dan tingkatkan bacaanmu.
              </p>
              <p className="leading-relaxed text-sm italic">
                Ingat, usaha kamu tidak sia-sia. Tetap semangat 💛✨
              </p>
            </>
          )}
        </div>
        <Button 
          onClick={onContinue}
          className="w-full h-14 text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg bg-primary hover:bg-primary/90"
        >
          Lanjut {isPassed ? '🤍' : '💛'}
        </Button>
      </CardContent>
    </Card>
  );
};
