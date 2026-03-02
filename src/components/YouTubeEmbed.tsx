"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!loaded) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer border border-border/50"
        onClick={() => setLoaded(true)}
      >
        {/* YouTube thumbnail */}
        <Image
          src={thumbnailUrl}
          alt={title || "Video thumbnail"}
          width={1200}
          height={675}
          unoptimized
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 group-hover:bg-red-500 transition-colors flex items-center justify-center shadow-2xl">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
          </div>
        </div>
        {/* Title overlay */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white text-sm md:text-base font-medium">{title}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/50">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title || "YouTube video"}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
