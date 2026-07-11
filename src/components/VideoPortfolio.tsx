/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ArrowLeft, Play, Film, Award, Flame, Volume2, Sparkles, Check, ChevronRight, Eye, Gauge, ShieldAlert, Cpu } from "lucide-react";

interface VideoProject {
  id: string;
  title: string;
  category: string;
  tag: string;
  duration: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
  cameraSpecs: string;
  colorGrade: string;
  soundLayout: string;
  description: string;
}

const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "vid-1",
    title: "The Silent Peak — Cinematic Short",
    category: "Cinematic Reel",
    tag: "cinematic",
    duration: "2:45",
    role: "Lead Editor • Colorist",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4",
    cameraSpecs: "ARRI Alexa Mini LF • Cooke Anamorphic",
    colorGrade: "ACEScg Workspace • Custom LUT (S-Log3 base)",
    soundLayout: "Dolby Atmos Spatial Mix • Stereo 48kHz master",
    description: "An evocative visual journey through alpine isolation, focusing on high-dynamic range environments, slow-pacing storytelling, and granular ambient audio layers."
  },
  {
    id: "vid-2",
    title: "Aether Cyberware Campaign",
    category: "Commercial Advertisement",
    tag: "commercial",
    duration: "0:45",
    role: "Sound Designer • VFX Integrator",
    thumbnail: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4",
    cameraSpecs: "RED V-Raptor 8K • Zeiss Supreme Primes",
    colorGrade: "DaVinci Resolve Studio • Neon Cyber Grade",
    soundLayout: "Synthesized Synth SFX • Dynamic Bass Boost",
    description: "High-octane commercial visual combining fast speed ramps, synthesized product design cues, and heavy color space manipulation to trigger viewer retention."
  },
  {
    id: "vid-3",
    title: "Hyper-speed Street Culture",
    category: "Social Media Campaign",
    tag: "social",
    duration: "0:15",
    role: "Dynamic Pace & Sound Sync",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4",
    cameraSpecs: "Sony FX3 • Sirui Anamorphic Lens",
    colorGrade: "Real-time Rec.709 conversion • High-Contrast Urban",
    soundLayout: "Beat-sync pulse compression • 24-bit PCM",
    description: "Vertical-optimized immersive short utilizing micro-transitions, rapid frames assembly, and synchronized audio beat drops designed to sustain attention."
  }
];

interface VideoPortfolioProps {
  onBack: () => void;
}

export default function VideoPortfolio({ onBack }: VideoPortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "cinematic" | "commercial" | "social">("all");
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  
  // Interactive Simulator Controls within Cinema Overlay
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [soundProfile, setSoundProfile] = useState<"cinema" | "ambient" | "flat">("cinema");

  const filteredVideos = activeCategory === "all"
    ? VIDEO_PROJECTS
    : VIDEO_PROJECTS.filter(v => v.tag === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-28 relative z-30 animate-fade-in select-text">
      
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-950/[0.015] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* HEADER BLOCK */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-10">
          <div className="space-y-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-[10px] font-mono text-white/50 hover:text-white uppercase tracking-widest transition-colors group focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              BACK TO CENTRAL HUB
            </button>
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase block mb-1">
                CINEMA MASTER ASSEMBLY
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase font-podium text-white">
                CINEMATIC EDITS
              </h1>
            </div>
          </div>

          {/* Quick Metrics Panel */}
          <div className="grid grid-cols-2 sm:flex items-center gap-6 sm:gap-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
            <div className="space-y-1">
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">CAMERA INTEGRATION</span>
              <div className="flex items-center gap-1.5 font-mono text-xs text-white/80">
                <Film className="w-3.5 h-3.5 text-white/50" />
                <span>RAW Cinema Sinks</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">SOUND PIPELINE</span>
              <div className="flex items-center gap-1.5 font-mono text-xs text-white/80">
                <Volume2 className="w-3.5 h-3.5 text-white/50" />
                <span>Dolby Atmos Mixed</span>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE CONTROLS: Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/5 pb-6">
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest mr-4">Filter Format:</span>
          {[
            { id: "all", label: "00 / ALL ASSEMBLIES" },
            { id: "cinematic", label: "01 / CINEMATICS & SHORTS" },
            { id: "commercial", label: "02 / COMMERCIAL PROMOS" },
            { id: "social", label: "03 / HIGH-PACE SHORTS" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-[10px] font-bold font-mono tracking-wider uppercase transition-all duration-300 rounded-none border ${
                activeCategory === cat.id
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* VIDEO ASSETS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="bg-neutral-950/60 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden flex flex-col justify-between group cursor-pointer relative"
            >
              {/* Asset Preview Frame with details */}
              <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-85"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient Play Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-white/10 bg-black/75 group-hover:bg-white group-hover:scale-110 flex items-center justify-center transition-all duration-300 relative">
                    <div className="absolute inset-0 rounded-full border border-white/5 animate-ping group-hover:hidden" />
                    <Play className="w-5 h-5 text-white group-hover:text-black fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Tags over card */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="text-[8px] font-mono font-bold bg-black/90 text-white/70 px-2 py-0.5 border border-white/10 uppercase">
                    {video.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 text-[9px] font-mono bg-black/90 text-white px-2 py-0.5 border border-white/10 tracking-widest font-bold">
                  {video.duration}
                </div>
              </div>

              {/* Descriptions & Tech specs info */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold tracking-wider font-podium uppercase text-white group-hover:text-red-300 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-white/55 font-inter leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[9px] font-mono text-white/40 uppercase">
                    <span>ROLE</span>
                    <span className="text-white font-bold">{video.role}</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] font-mono text-white/40 uppercase">
                    <span>CAMERA</span>
                    <span className="text-white/60 text-right truncate max-w-[12rem]">{video.cameraSpecs.split("•")[0]}</span>
                  </div>
                </div>
              </div>

              {/* Bottom interactive action indicator */}
              <div className="px-6 py-4 bg-white/[0.01] border-t border-white/5 flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">
                <span>PREVIEW CINEMA REEL</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>

            </div>
          ))}
        </div>

        {/* HIGH-FIDELITY ACTIVE VIDEO THEATER LIGHTBOX OVERLAY */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" onClick={() => setSelectedVideo(null)} />
            
            {/* The Cinema Canvas */}
            <div className="relative w-full max-w-5xl bg-neutral-950 border border-white/10 shadow-2xl z-10 animate-scale-in grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
              
              {/* Backlight Glow inside wrapper */}
              <div className="absolute -top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />

              {/* LEFT Side: The Main Video Player (8 Columns) */}
              <div className="lg:col-span-8 bg-black flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                {/* Custom top status bar */}
                <div className="px-4 py-3 bg-neutral-950 border-b border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                  <span className="uppercase tracking-widest font-bold">SCREENING: {selectedVideo.title}</span>
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block">PREVIEW QUALITY: 1080P RAW</span>
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="text-white hover:text-red-400 font-bold uppercase transition-colors"
                    >
                      CLOSE [X]
                    </button>
                  </div>
                </div>

                {/* Actual Video */}
                <div className="relative aspect-[16/9] bg-black">
                  <video
                    src={selectedVideo.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                    style={{ playbackRate: playbackSpeed }}
                  />
                </div>

                {/* Interactive Player Presets & Simulator bar */}
                <div className="p-4 bg-neutral-950/80 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Speed Modifier */}
                  <div className="space-y-1.5">
                    <span className="text-[8px] font-mono text-white/40 uppercase block tracking-widest">PACE MODIFIER (PLAYBACK)</span>
                    <div className="flex gap-1.5">
                      {[0.5, 1, 1.5, 2].map((speed) => (
                        <button
                          key={speed}
                          onClick={() => setPlaybackSpeed(speed)}
                          className={`px-3 py-1 text-[9px] font-mono font-bold border transition-all ${
                            playbackSpeed === speed 
                              ? "bg-white text-black border-white" 
                              : "bg-transparent text-white/40 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {speed}x {speed === 1 ? "(NORMAL)" : ""}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Audio EQ Simulator */}
                  <div className="space-y-1.5">
                    <span className="text-[8px] font-mono text-white/40 uppercase block tracking-widest">CINEMATIC AUDIO PRESETS</span>
                    <div className="flex gap-1.5">
                      {[
                        { id: "cinema", label: "EQ CINEMA" },
                        { id: "ambient", label: "EQ STUDIO" },
                        { id: "flat", label: "EQ MONO" }
                      ].map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setSoundProfile(p.id as any)}
                          className={`px-3 py-1 text-[9px] font-mono font-bold border transition-all ${
                            soundProfile === p.id 
                              ? "bg-emerald-500 text-black border-emerald-500 font-extrabold" 
                              : "bg-transparent text-white/40 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT Side: The Director's specification sheet (4 Columns) */}
              <div className="lg:col-span-4 p-6 bg-neutral-950/90 flex flex-col justify-between space-y-6">
                
                <div className="space-y-6">
                  {/* Title and metadata */}
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">DIRECTOR'S ARCHIVE</span>
                    <h3 className="text-lg font-bold font-podium uppercase tracking-wider text-white mt-1 border-b border-white/10 pb-3">
                      SPECIFICATION SHEET
                    </h3>
                  </div>

                  {/* Advanced camera data */}
                  <div className="space-y-4">
                    
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest block">CAMERA RIG</span>
                      <p className="text-xs font-mono font-bold text-white/80">{selectedVideo.cameraSpecs}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest block">COLOR SCIENCE</span>
                      <p className="text-xs font-mono font-bold text-white/80">{selectedVideo.colorGrade}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest block">AUDIO RE-MASTER</span>
                      <p className="text-xs font-mono font-bold text-white/80">{selectedVideo.soundLayout}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest block">PACING DIRECTIVE</span>
                      <p className="text-xs font-inter text-white/60 leading-relaxed bg-black/40 p-2.5 border border-white/5">
                        {selectedVideo.description}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Callout inside sheet */}
                <div className="border-t border-white/10 pt-4 space-y-3">
                  <div className="flex items-start gap-2 bg-emerald-950/20 border border-emerald-500/10 p-3">
                    <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[9px] font-mono text-emerald-300 leading-normal">
                      ACES PIPELINE: Verified for ultra-high range HDR outputs and multi-platform conversions.
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="w-full bg-white text-black py-3 text-[10px] font-bold tracking-widest uppercase font-mono hover:bg-neutral-200 transition-colors"
                  >
                    RETURN TO GALLERY
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Dynamic Studio Stats Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="bg-white/[0.01] border border-white/5 p-5 space-y-2">
            <div className="flex items-center gap-2 text-white/80">
              <Flame className="w-4 h-4 text-white" />
              <span className="text-xs font-bold tracking-wider uppercase font-mono">RETENTION GAIN</span>
            </div>
            <p className="text-2xl font-podium text-white">88%+</p>
            <p className="text-[10px] text-white/40 uppercase font-mono">Average retention spikes on client edits</p>
          </div>

          <div className="bg-white/[0.01] border border-white/5 p-5 space-y-2">
            <div className="flex items-center gap-2 text-white/80">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-xs font-bold tracking-wider uppercase font-mono">EXPRESS TURNAROUND</span>
            </div>
            <p className="text-2xl font-podium text-white">48 HRS</p>
            <p className="text-[10px] text-white/40 uppercase font-mono">Dedicated express final cut capabilities</p>
          </div>

          <div className="bg-white/[0.01] border border-white/5 p-5 space-y-2">
            <div className="flex items-center gap-2 text-white/80">
              <Check className="w-4 h-4 text-white" />
              <span className="text-xs font-bold tracking-wider uppercase font-mono">REVISION SLA</span>
            </div>
            <p className="text-2xl font-podium text-white">UNLIMITED</p>
            <p className="text-[10px] text-white/40 uppercase font-mono">Continuous cuts refinement until approval</p>
          </div>
        </div>

      </div>
    </div>
  );
}
