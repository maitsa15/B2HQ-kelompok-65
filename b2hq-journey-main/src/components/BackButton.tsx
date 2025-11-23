import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
  className?: string;
}

export const BackButton = ({ onClick, className = "" }: BackButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className={`gap-2 text-muted-foreground hover:text-foreground transition-colors ${className}`}
    >
      <ArrowLeft className="h-4 w-4" />
      Kembali
    </Button>
  );
};
