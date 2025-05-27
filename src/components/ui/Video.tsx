"use client";
import { useRef, useState, useEffect } from "react";
import { LuPlay, LuPause, LuVolumeX, LuVolume2 } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  src: string;
  hasAudio?: boolean;
};

export default function Video({ src, hasAudio = false }: Readonly<Props>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(!hasAudio);
  const [showControls, setShowControls] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    // Show controls briefly after interaction
    showControlsTemporarily();
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
    showControlsTemporarily();
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowControls(false), 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative w-full h-full cursor-pointer group"
      onClick={togglePlay}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={!hasAudio}
        className="w-full h-auto"
        playsInline
      />

      {/* Play/Pause icon for muted videos */}
      {!hasAudio && (
        <AnimatePresence>
          {showControls && (
            <motion.div
              key="playpause"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {isPlaying ? (
                <LuPause size={36} className="text-white/90 drop-shadow" />
              ) : (
                <LuPlay size={36} className="text-white/90 drop-shadow" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Mute/Unmute toggle button */}
      {hasAudio && (
        <AnimatePresence>
          {showControls && (
            <motion.button
              key="volume"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="absolute bottom-3 right-3 bg-black/50 text-white p-1.5 rounded-full backdrop-blur hover:bg-black/70"
            >
              {isMuted ? <LuVolumeX size={16} /> : <LuVolume2 size={16} />}
            </motion.button>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
