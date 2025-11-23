import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "./BackButton";

interface MessageCardProps {
  isPassed: boolean;
  onContinue: () => void;
  onBack: () => void;
}

export const MessageCard = ({ isPassed, onContinue, onBack }: MessageCardProps) => {
  return (
    <Card className="w-full max-w-3xl mx-auto border-2 border-primary/20 shadow-lg animate-fade-in bg-card/95 backdrop-blur">
      <div className="p-4 pb-0">
        <BackButton onClick={onBack} />
      </div>
      <CardHeader className="text-center space-y-3 pb-6">
        <div className="text-4xl mb-2">🌿</div>
        <CardTitle className="text-2xl md:text-3xl font-bold text-primary">
          Pesan {isPassed ? 'untuk Kamu' : 'Motivasi'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 px-6 md:px-10 pb-10">
        <div className="prose prose-sm md:prose-base max-w-none text-foreground/90 space-y-5 leading-relaxed">
          {isPassed ? (
            <>
              <p>
                Alhamdulillah, kita telah melalui rangkaian bimbingan selama satu semester. 
                Waktu 3 bulan mungkin singkat, tapi perjalanan ini menyimpan banyak proses belajar: 
                latihan huruf, memperbaiki bacaan, bertanya, dan konsisten berlatih. Semua usaha kalian 
                insyaaAllah bernilai ibadah.
              </p>
              <p>
                Terima kasih sudah hadir, mau belajar, dan bertahan sampai akhir bimbingan. Setiap huruf 
                yang kamu baca, setiap kesalahan yang kamu perbaiki, adalah langkah mendekatkan diri 
                kepada Al-Qur'an.
              </p>
              <p className="font-medium text-primary">
                Semoga ilmu yang kalian dapat tidak berhenti di sini, tapi terus kalian amalkan dan tingkatkan.
              </p>
              <p className="italic text-muted-foreground text-sm">
                Tujuan belajar Al-Qur'an bukan hanya bisa membaca dengan benar, tapi menjadikannya cahaya, 
                penuntun langkah, dan penenang hati.
              </p>
            </>
          ) : (
            <>
              <p className="text-lg font-medium text-primary">
                Semangat terus! 💪
              </p>
              <p>
                Belajar Al-Qur'an itu prosesnya panjang, dan setiap usaha kamu bernilai.
                Terus membaca, bertanya, dan memperbaiki diri.
              </p>
              <p className="font-medium">
                Ingat, usaha kamu tidak sia-sia. Tetap semangat 💛✨
              </p>
            </>
          )}
        </div>
        <Button 
          onClick={onContinue}
          className="w-full h-14 text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          {isPassed ? 'Lihat Kenangan 🤍' : 'Oke, Siap! 💛'}
        </Button>
      </CardContent>
    </Card>
  );
};
