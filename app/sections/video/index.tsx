"use client";

import { useRef, useState, type FC } from "react";
import LayoutWrapper from "@/components/layout-wrapper";
import BlurPopUp from "@/components/blur-pop-up";

const VideoSection: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="w-full pb-16 md:pb-32 pt-8 relative z-10 flex justify-center items-center">
      <LayoutWrapper>
        <BlurPopUp delay={0.2}>
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/10 bg-black/50 ring-1 ring-white/5">

            {/* Video */}
            <div className="w-full aspect-video relative">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover absolute inset-0"
              >
                <source src="/d360-video.webm" type="video/webm" />
              </video>
            </div>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full backdrop-blur-md transition"
            >
              {isMuted ? "🔇" : "🔊"}
            </button>

          </div>
        </BlurPopUp>
      </LayoutWrapper>
    </section>
  );
};

export default VideoSection;