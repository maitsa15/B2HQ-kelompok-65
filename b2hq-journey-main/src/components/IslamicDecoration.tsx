interface IslamicDecorationProps {
  className?: string;
}

export const IslamicDecoration = ({ className = "" }: IslamicDecorationProps) => {
  return (
    <div className={`pointer-events-none ${className}`}>
      <div className="absolute top-8 left-8 text-4xl opacity-20 animate-float">🌙</div>
      <div className="absolute top-12 right-12 text-2xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
      <div className="absolute bottom-20 left-16 text-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>⭐</div>
      <div className="absolute bottom-32 right-20 text-2xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
    </div>
  );
};
