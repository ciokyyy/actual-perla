"use client";
import { useEffect, useState, useRef } from "react";
import C from "./ComponentNames";
import Image from "next/image";
import { cn } from "@/libs/utils";

export function ImageSlideshow({
  images,
  initialDelay = 0,
  className = "",
}: Readonly<{ 
  images: { src: string; alt: string }[];
  initialDelay?: number;
  className?: string;
}>) {
  const [imgIndex, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const startTime = performance.now() + initialDelay;
    
    function animate(now: number) {
      const elapsed = now - startTime;
      if (elapsed > 0) {
        const progress = (elapsed % 7000) / 7000;
        // Smoother easing with gentler end
        const easedProgress = Math.sin(progress * Math.PI) / 2 + 0.5;
        setOffset(easedProgress);
        setIndex(Math.floor(elapsed / 7000) % images.length);
      }
      frameRef.current = requestAnimationFrame(animate);
    }
    
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [initialDelay, images.length]);

  return (
    <C.Container className={cn("w-full h-full overflow-hidden", className)}>
      <C.ImagesContainer className="w-full h-full relative">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            className={cn(
              "absolute inset-0 object-cover",
              index === imgIndex ? "opacity-100" : "opacity-0"
            )}
            style={{
              transform: `scale(1.2) translateX(${index === imgIndex ? -8 * offset : 0}%)`,
              transition: 'opacity 1s ease-in-out, transform 1s ease-out'
            }}
            priority={index === imgIndex}
          />
        ))}
      </C.ImagesContainer>
    </C.Container>
  );
}
