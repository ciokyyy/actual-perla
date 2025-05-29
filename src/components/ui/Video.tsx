import NextVideo from "next-video";
import { Asset } from "next-video/dist/assets.js";
import MediaThemeInstaplay from "player.style/instaplay/react";

interface VideoProps {
  src: string | Asset;
  className?: string;
  muted?: boolean;
}

export default function Video({
  muted = true,
  src,
  className = "w-full h-full",
}: Readonly<VideoProps>) {
  return (
    <NextVideo
      className={className}
      theme={MediaThemeInstaplay}
      autoPlay
      loop
      muted={muted}
      playsInline
      preferPlayback="mse"
      src={src}
    />
  );
}
