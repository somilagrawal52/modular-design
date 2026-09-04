interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  objectPosition?: string;
}

export default function ParallaxImage({ src, alt, className = "", objectPosition }: ParallaxImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={objectPosition ? { objectPosition } : undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
