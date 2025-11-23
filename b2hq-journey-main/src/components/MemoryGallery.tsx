import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";
import photoAwal from "@/assets/photo-awal.jpg";
import photoAkhir from "@/assets/photo-akhir.jpg";
import { BackButton } from "./BackButton";

interface MemoryGalleryProps {
  onBack: () => void;
}

export const MemoryGallery = ({ onBack }: MemoryGalleryProps) => {
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-12 animate-fade-in">
      <div className="px-4">
        <BackButton onClick={onBack} />
      </div>
      {/* Header */}
      <div className="text-center space-y-4 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-primary">
          🌷 Kenangan B2HQ Kelompok 65 🌷
        </h1>
        <p className="text-base md:text-lg text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
          ✨ Semester ini bukan hanya tentang bimbingan, tapi perjalanan bersama
        </p>
      </div>

      {/* Awal Pertemuan Section */}
      <div className="px-4 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            🌙 Awal Pertemuan
          </h2>
          <p className="text-muted-foreground italic">
            "Di sinilah semuanya dimulai dengan niat baik dan semangat belajar."
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border-4 border-primary/20 shadow-xl bg-white max-w-3xl mx-auto">
          <img 
            src={photoAwal} 
            alt="Awal Pertemuan B2HQ"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-3 right-3 text-2xl opacity-60">
            ✨
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4">
        {photos.map((photo, index) => (
          <div 
            key={index}
            className="relative overflow-hidden rounded-2xl border-4 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white"
          >
            <img 
              src={photo} 
              alt={`Kenangan ${index + 1}`}
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-3 right-3 text-2xl opacity-60">
              {index % 3 === 0 ? '✨' : index % 3 === 1 ? '🤍' : '🌙'}
            </div>
          </div>
        ))}
      </div>

      {/* Caption */}
      <div className="text-center px-4">
        <p className="text-lg md:text-xl font-script text-primary italic">
          "Bersama belajar, bersama tumbuh. Langkah kecil ini punya cerita."
        </p>
      </div>

      {/* Akhir Pertemuan Section */}
      <div className="px-4 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            🎉 Akhir Pertemuan
          </h2>
          <p className="text-muted-foreground italic">
            "Berakhir dengan senyuman, kenangan indah, dan harapan untuk terus tumbuh."
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border-4 border-primary/20 shadow-xl bg-white max-w-3xl mx-auto">
          <img 
            src={photoAkhir} 
            alt="Akhir Pertemuan B2HQ"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-3 right-3 text-2xl opacity-60">
            🤍
          </div>
        </div>
      </div>

      {/* Memory Messages */}
      <div className="bg-card/80 backdrop-blur border-2 border-primary/20 rounded-3xl p-8 md:p-12 mx-4 shadow-xl space-y-8">
        <div className="space-y-6 prose prose-sm md:prose-base max-w-none text-foreground/90">
          <p className="text-lg md:text-xl leading-relaxed">
            "Setiap huruf yang kalian lafalkan, setiap halaman yang kalian ulang, setiap waktu yang kalian sisihkan—semuanya bukan hal kecil. 
            Itu adalah usaha. Itu adalah niat baik. Itu adalah bagian dari perjalanan mendekat pada Allah."
          </p>
          
          <p className="text-base md:text-lg leading-relaxed">
            "Tidak semua hari mudah, tapi kalian bertahan. Tidak semua halaman cepat dipahami, tapi kalian tidak menyerah."
          </p>

          <p className="text-base md:text-lg font-medium text-primary leading-relaxed">
            Terima kasih karena sudah menjadi bagian dari proses ini — bukan hanya sebagai peserta, 
            tetapi sebagai teman perjalanan yang saling menguatkan.
          </p>
        </div>

        <div className="border-t-2 border-primary/20 pt-8 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center">
            ✨ Pesan Tutor
          </h3>
          
          <div className="space-y-5 text-foreground/90 leading-relaxed">
            <p className="text-base md:text-lg">
              Dari aku, <span className="font-semibold text-primary font-script text-xl">Maitsa Washfa Syahira</span>,
            </p>
            
            <p className="text-base md:text-lg">
              Aku sungguh bangga pada kalian. Melihat kalian belajar, mencoba, terkadang bingung lalu paham, 
              itu kebahagiaan tersendiri. Maaf bila selama bimbingan ada kalimat yang kurang pas, 
              penjelasan yang kadang terlalu cepat, atau pengingat yang terasa memaksa — semuanya hanya 
              agar kalian tidak menyerah sebelum sampai.
            </p>

            <p className="text-base md:text-lg font-medium text-primary italic">
              Semoga Allah menjaga ilmu yang kalian pelajari, menetapkan hati kalian dalam kebaikan, 
              dan mempertemukan kita kembali dalam keadaan yang lebih matang, lebih kuat, dan lebih dekat dengan Allah.
            </p>
          </div>
        </div>

        <div className="text-center pt-6 border-t-2 border-primary/20 space-y-3">
          <p className="text-xl md:text-2xl font-script text-primary">
            "Senang menjadi bagian perjalanan kalian."
          </p>
          <p className="text-base md:text-lg text-muted-foreground italic">
            Sampai bertemu lagi di tempat lain, waktu lain, dengan versi diri kita yang lebih baik.
          </p>
          <p className="text-3xl">🫶✨</p>
        </div>
      </div>
    </div>
  );
};
