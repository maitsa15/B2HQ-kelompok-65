import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface NameInputCardProps {
  onSubmit: (name: string) => void;
}

export const NameInputCard = ({ onSubmit }: NameInputCardProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto border-2 border-primary/20 shadow-lg animate-fade-in bg-card/95 backdrop-blur">
      <CardHeader className="text-center space-y-3 pb-4">
        <div className="text-5xl mb-2">📖</div>
        <CardTitle className="text-3xl font-bold text-primary">Bimbingan B2HQ</CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Kelompok 65
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Masukkan Nama Kamu
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama lengkap..."
              className="h-12 text-base border-2 border-primary/30 focus:border-primary transition-colors"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Cek Status ✨
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
