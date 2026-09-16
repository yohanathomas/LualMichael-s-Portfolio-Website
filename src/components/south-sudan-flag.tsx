import flagUrl from "@/assets/south-sudan-flag.png";

export function SouthSudanFlag({
  className = "",
  title = "South Sudan",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <img
      src={flagUrl}
      alt={title}
      title={title}
      className={`object-cover ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
