export default function EyebrowLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
      <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#00D4FF] font-body">{text}</span>
    </div>
  );
}
