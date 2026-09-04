interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  objectPosition?: string;
  priority?: boolean;
}

export default function ParallaxImage({ src, alt, className = "", objectPosition, priority = false }: ParallaxImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        style={objectPosition ? { objectPosition } : undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
