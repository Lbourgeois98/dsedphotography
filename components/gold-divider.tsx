export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
      <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
    </div>
  )
}
