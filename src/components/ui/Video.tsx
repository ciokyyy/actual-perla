"use client";

import { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

interface VideoProps {
  src: string;
  className?: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  showMuteToggle?: boolean;
}

export default function Video({
  muted: initialMuted = true,
  src,
  className = "w-full h-full",
  autoPlay = true,
  loop = true,
  playsInline = true,
  showMuteToggle = false,
}: Readonly<VideoProps>) {
  const [isMuted, setIsMuted] = useState(initialMuted);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (videoRef.current) {
        videoRef.current.muted = next;
      }
      return next;
    });
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        loop={loop}
        muted={isMuted}
        playsInline={playsInline}
        preload="auto"
      >
        <source src={src} type="video/mp4" />
      </video>
      {showMuteToggle && (
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
        </button>
      )}
    </div>
  );
}
