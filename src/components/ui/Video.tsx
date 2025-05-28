"use client";

import { useState, useRef, useEffect } from "react";
import NextVideo from "next-video";
import { LuPlay, LuPause, LuVolumeX, LuVolume2 } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion"; // use framer instead of motion/react

type Props = {
  src: any; // must be a static import for next-video
  hasAudio?: boolean;
};

export default function Video({ src, hasAudio = false }: Readonly<Props>) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(!hasAudio);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
    showControlsTemporarily();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
    showControlsTemporarily();
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowControls(false), 1000);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isMuted, isPlaying]);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <NextVideo
        ref={videoRef}
        src={src}
        loop
        muted={isMuted}
        autoPlay
        playsInline
        className="pointer-events-none w-full h-full"
      />

      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none"
      >
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
      </button>

      {hasAudio && (
        <AnimatePresence>
          {showControls && (
            <motion.button
              key="volume"
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
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
