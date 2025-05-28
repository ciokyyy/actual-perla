"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import { LuPlay, LuPause, LuVolumeX, LuVolume2 } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  src: string;
  hasAudio?: boolean;
};

export default function Video({ src, hasAudio = false }: Readonly<Props>) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(!hasAudio);
  const [showControls, setShowControls] = useState(false);
  let timeout: NodeJS.Timeout;

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    showControlsTemporarily();
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    showControlsTemporarily();
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    clearTimeout(timeout);
    timeout = setTimeout(() => setShowControls(false), 1000);
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <ReactPlayer
        url={src}
        playing={isPlaying}
        muted={isMuted}
        loop
        width="100%"
        height="100%"
        controls={false}
        playsinline
        style={{ pointerEvents: "none" }}
      />

      {/* Overlay Play/Pause button */}
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

      {/* Mute/Unmute toggle */}
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
                e.stopPropagation(); // prevent triggering play/pause
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
