import { ImagePlus } from 'lucide-react'

export default function PlaceholderImage({ label = 'Photo placeholder', className = '' }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-2 overflow-hidden border-2 border-dashed border-slate-300 bg-slate-50 text-slate-400 ${className}`}
    >
      <ImagePlus size={28} className="shrink-0" />
      {label && <span className="whitespace-nowrap text-xs font-medium">{label}</span>}
    </div>
  )
}
