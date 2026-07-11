/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, useEffect, Suspense, lazy } from "react";
import { ArrowUpRight, Check, Film, Globe, Compass, MessageSquare, Sparkles, ThumbsUp, CheckCircle } from "lucide-react";

const WebPortfolio = lazy(() => import("./components/WebPortfolio"));
const VideoPortfolio = lazy(() => import("./components/VideoPortfolio"));

// Editable external links for Graphic Designing and Social Media portfolios
const GRAPHIC_DESIGNING_PORTFOLIO_URL = "https://sahimcode.github.io/SAHIM-Portfolio-/";
const SOCIAL_MEDIA_PORTFOLIO_URL = "https://www.instagram.com";

// EDIT THIS WITH YOUR WHATSAPP NUMBER (include country code, omit any '+' or leading zeroes, e.g., "919706227735")
const WHATSAPP_NUMBER = "919706227735";

export default function App() {
  // Navigation & Sub-page routing state
  const [currentView, setCurrentView] = useState<'home' | 'web-portfolio' | 'video-portfolio'>('home');

  // New detailed service selection states
  const [isVideoSelected, setIsVideoSelected] = useState(false);

  const [isGraphicSelected, setIsGraphicSelected] = useState(false);
  const [graphicTier, setGraphicTier] = useState<"Basic" | "Premium" | "Pro Premium">("Basic");

  const [isWebSelected, setIsWebSelected] = useState(false);
  const [webTier, setWebTier] = useState<"Plain" | "2D Animated" | "3D Animated" | "Fully Customisable & Animated">("Plain");
  const [webPages, setWebPages] = useState<string>("2-5 Pages");

  const [isSocialSelected, setIsSocialSelected] = useState(false);

  // Inline connection form state variables
  const [inlineName, setInlineName] = useState("");
  const [inlineInfo, setInlineInfo] = useState("");
  const [isInlineSubmitting, setIsInlineSubmitting] = useState(false);
  const [inlineSubmitted, setInlineSubmitted] = useState(false);
  const [showThumbPopup, setShowThumbPopup] = useState(false);

  // Scroll window to top whenever view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentView]);

  const getWhatsAppUrl = () => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
    
    let servicesText = "";
    if (isVideoSelected) {
      servicesText += `\n- *Video Editing:* Pricing depends on video duration (negotiable)`;
    }
    if (isGraphicSelected) {
      let priceInfo = "";
      if (graphicTier === "Basic") priceInfo = "₹200 INR per thumbnail";
      else if (graphicTier === "Premium") priceInfo = "₹500 INR per thumbnail";
      else if (graphicTier === "Pro Premium") priceInfo = "₹1,000 INR per thumbnail";
      else priceInfo = "Negotiable";
      
      servicesText += `\n- *Graphic Designing / Thumbnail:* ${graphicTier} (${priceInfo})`;
    }
    if (isWebSelected) {
      let priceInfo = "";
      if (webTier === "Plain") priceInfo = "₹2,000 INR";
      else if (webTier === "2D Animated") priceInfo = "₹5,000 INR";
      else if (webTier === "3D Animated") priceInfo = "₹10,000 INR";
      else priceInfo = "₹20,000 INR";
      
      servicesText += `\n- *Website Development:* ${webTier} (${webPages}) (${priceInfo}, negotiable)`;
    }
    if (isSocialSelected) {
      servicesText += `\n- *Social Media Handling:* Negotiable`;
    }

    if (!servicesText) {
      servicesText = "\n- General Inquiry";
    }

    const formattedMessage = `*AfterMinds Inquiry Form*\n-------------------------------\n*Name:* ${inlineName}\n*Phone/WhatsApp:* ${inlineInfo}\n*Services Requested:*${servicesText}\n-------------------------------\n_Sent from AfterMinds Platform_`;
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(formattedMessage)}`;
  };

  const handleInlineSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inlineName || !inlineInfo) return;

    setIsInlineSubmitting(true);
    const whatsappUrl = getWhatsAppUrl();

    setTimeout(() => {
      setIsInlineSubmitting(false);
      setInlineSubmitted(true);
      setShowThumbPopup(true);
      
      // Attempt to open WhatsApp immediately in a new tab
      try {
        window.open(whatsappUrl, "_blank");
      } catch (err) {
        console.error("Popup blocker prevented automatic redirection.", err);
      }
    }, 1000);
  };

  const resetInlineForm = () => {
    setInlineName("");
    setInlineInfo("");
    setIsVideoSelected(false);
    setIsGraphicSelected(false);
    setGraphicTier("Basic");
    setIsWebSelected(false);
    setWebTier("Plain");
    setWebPages("2-5 Pages");
    setIsSocialSelected(false);
    setInlineSubmitted(false);
    setShowThumbPopup(false);
  };

  const handleScrollToConnect = () => {
    document.getElementById("connect-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToPortfolio = () => {
    document.getElementById("portfolio-section")?.scrollIntoView({ behavior: "smooth" });
  };

  // If a sub-portfolio page is active, render it exclusively
  if (currentView === "web-portfolio") {
    return (
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white/50 space-y-4">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-2 border-white/5"></div>
            <div className="absolute inset-0 rounded-full border-2 border-t-emerald-400 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-white/40">Loading Portfolio...</span>
        </div>
      }>
        <WebPortfolio onBack={() => setCurrentView("home")} />
      </Suspense>
    );
  }

  if (currentView === "video-portfolio") {
    return (
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white/50 space-y-4">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-2 border-white/5"></div>
            <div className="absolute inset-0 rounded-full border-2 border-t-red-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-white/40">Loading Portfolio...</span>
        </div>
      }>
        <VideoPortfolio onBack={() => setCurrentView("home")} />
      </Suspense>
    );
  }

  return (
    <main className="relative w-full min-h-screen bg-black font-inter text-white select-none overflow-x-hidden">
      
      {/* 1. Fullscreen Background Video (Fixed for parallax scrolling feel) */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.01] opacity-75"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
            type="video/mp4"
          />
        </video>
        {/* Sleek Dark Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/75 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/30 z-10" />
      </div>

      {/* 2. Top Header Navigation (Fixed top bar for access) */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-6 lg:py-8 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-2">
          <span className="font-podium text-white bold uppercase text-2xl sm:text-3xl tracking-wider">
            AFTERMINDS
          </span>
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse self-end mb-2" />
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={handleScrollToPortfolio}
            className="hidden sm:inline-block text-[10px] tracking-widest text-white/60 hover:text-white uppercase transition-colors"
          >
            PORTFOLIOS
          </button>
          
          <button
            onClick={handleScrollToConnect}
            className="flex items-center gap-1.5 font-inter border border-white/20 hover:border-white/60 px-5 py-2 text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-300 focus:outline-none group rounded-none"
          >
            CONNECT
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </nav>

      {/* 3. Main Hero Presentation View - Clean text aligned to Left, Full screen height */}
      <div className="relative w-full h-screen z-10 px-6 sm:px-10 lg:px-16 flex flex-col justify-between pt-36 pb-12 sm:pb-16">
        <div /> {/* Top spacing element */}
        
        <div className="max-w-xl text-left space-y-8">
          {/* Elegant Main Header - Fully staggered animations, completely clean */}
          <div className="space-y-2 sm:space-y-4">
            <h1 className="font-podium text-white uppercase leading-[0.85] tracking-tight text-[clamp(2.5rem,8.5vw,6.5rem)] animate-fade-up">
              Design.
            </h1>
            <h1 className="font-podium text-white uppercase leading-[0.85] tracking-tight text-[clamp(2.5rem,8.5vw,6.5rem)] animate-fade-up-delay-1">
              Disrupt.
            </h1>
            <h1 className="font-podium text-white uppercase leading-[0.85] tracking-tight text-[clamp(2.5rem,8.5vw,6.5rem)] animate-fade-up-delay-2">
              Conquer.
            </h1>
          </div>
        </div>

        {/* Elegant Animated Scroll Indicator to guide user to scroll down */}
        <div 
          onClick={handleScrollToConnect}
          className="animate-fade-up-delay-3 flex flex-col items-start gap-2 cursor-pointer group pointer-events-auto"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase group-hover:text-white/80 transition-colors">
            Scroll to connect
          </span>
          <div className="w-[1.5px] h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse group-hover:from-white transition-all" />
        </div>
      </div>

      {/* 4. Scroll Destination Section 1: Dedicated Connect with Us block */}
      <div 
        id="connect-section" 
        className="relative w-full min-h-screen z-10 px-6 sm:px-10 lg:px-16 flex items-center justify-start py-32 bg-black/40 border-t border-white/5"
      >
        <div className="max-w-xl w-full text-left space-y-8 sm:space-y-10">
          
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase block mb-1">
              SECURE CONNECTION MODULE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wider uppercase font-podium">
              CONNECT WITH US
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-2 max-w-md leading-relaxed font-inter">
              Ready to start a project? Select the services you need below, choose your desired tier, and we will connect with you within 24 hours.
            </p>
          </div>

          {!inlineSubmitted ? (
            <form onSubmit={handleInlineSubmit} className="space-y-6">
              
              {/* Detailed tiered service selector */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase block">
                  Select and configure services:
                </span>

                <div className="space-y-4">
                  {/* SERVICE 1: Video Editing */}
                  <div className={`p-4 border transition-all duration-300 ${
                    isVideoSelected 
                      ? "bg-white/[0.02] border-white/30" 
                      : "bg-transparent border-white/5 hover:border-white/10"
                  }`}>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setIsVideoSelected(!isVideoSelected)}
                        className="flex items-center gap-3 focus:outline-none text-left"
                      >
                        <div className={`w-4 h-4 border flex items-center justify-center transition-all ${
                          isVideoSelected ? "bg-white border-white" : "border-white/20"
                        }`}>
                          {isVideoSelected && <Check className="w-3 h-3 text-black stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-xs font-bold tracking-wider uppercase font-inter text-white">
                            Video Editing
                          </span>
                        </div>
                      </button>
                      <span className="text-[9px] font-mono text-white/30 uppercase">01 / CINEMA</span>
                    </div>

                    {isVideoSelected && (
                      <div className="mt-4 pt-3 border-t border-white/5 space-y-2 animate-fade-in">
                        <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">
                          Video Pricing Model:
                        </span>
                        <div className="p-3 bg-black/40 border border-white/5 text-[10px] font-mono text-emerald-400 flex justify-between items-center">
                          <span>Pricing depends on video duration</span>
                          <span className="text-[9px] text-white/30 lowercase italic font-sans font-normal">negotiable</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* SERVICE 2: Graphic Designing / Thumbnail */}
                  <div className={`p-4 border transition-all duration-300 ${
                    isGraphicSelected 
                      ? "bg-white/[0.02] border-white/30" 
                      : "bg-transparent border-white/5 hover:border-white/10"
                  }`}>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setIsGraphicSelected(!isGraphicSelected)}
                        className="flex items-center gap-3 focus:outline-none text-left"
                      >
                        <div className={`w-4 h-4 border flex items-center justify-center transition-all ${
                          isGraphicSelected ? "bg-white border-white" : "border-white/20"
                        }`}>
                          {isGraphicSelected && <Check className="w-3 h-3 text-black stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-xs font-bold tracking-wider uppercase font-inter text-white">
                            Graphic Designing / Thumbnail
                          </span>
                        </div>
                      </button>
                      <span className="text-[9px] font-mono text-white/30 uppercase">02 / BRANDING</span>
                    </div>

                    {isGraphicSelected && (
                      <div className="mt-4 pt-3 border-t border-white/5 space-y-3 animate-fade-in">
                        <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">
                          Select Service Tier:
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          {(["Basic", "Premium", "Pro Premium"] as const).map((tier) => (
                            <button
                              key={tier}
                              type="button"
                              onClick={() => setGraphicTier(tier)}
                              className={`px-1.5 py-2 text-[9px] font-mono tracking-wider uppercase border transition-all ${
                                graphicTier === tier
                                  ? "bg-white text-black border-white font-bold"
                                  : "bg-black/40 text-white/40 border-white/10 hover:border-white/20"
                              }`}
                            >
                              {tier}
                            </button>
                          ))}
                        </div>
                        
                        <div className="p-3 bg-black/40 border border-white/5 text-[10px] font-mono text-emerald-400 flex justify-between items-center">
                          <span>
                            Estimated: {
                              graphicTier === "Basic" ? "₹200 INR per thumbnail" :
                              graphicTier === "Premium" ? "₹500 INR per thumbnail" :
                              graphicTier === "Pro Premium" ? "₹1,000 INR per thumbnail" :
                              "Negotiable"
                            }
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* SERVICE 3: Website Development */}
                  <div className={`p-4 border transition-all duration-300 ${
                    isWebSelected 
                      ? "bg-white/[0.02] border-white/30" 
                      : "bg-transparent border-white/5 hover:border-white/10"
                  }`}>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setIsWebSelected(!isWebSelected)}
                        className="flex items-center gap-3 focus:outline-none text-left"
                      >
                        <div className={`w-4 h-4 border flex items-center justify-center transition-all ${
                          isWebSelected ? "bg-white border-white" : "border-white/20"
                        }`}>
                          {isWebSelected && <Check className="w-3 h-3 text-black stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-xs font-bold tracking-wider uppercase font-inter text-white">
                            Website Development
                          </span>
                        </div>
                      </button>
                      <span className="text-[9px] font-mono text-white/30 uppercase">03 / WEB TECH</span>
                    </div>

                    {isWebSelected && (
                      <div className="mt-4 pt-3 border-t border-white/5 space-y-4 animate-fade-in">
                        
                        {/* Web development tier */}
                        <div className="space-y-2">
                          <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">
                            Select Service Tier:
                          </span>
                          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row">
                            {(["Plain", "2D Animated", "3D Animated", "Fully Customisable & Animated"] as const).map((tier) => (
                              <button
                                key={tier}
                                type="button"
                                onClick={() => setWebTier(tier)}
                                className={`flex-1 px-1.5 py-2 text-[9px] font-mono tracking-wider uppercase border transition-all ${
                                  webTier === tier
                                    ? "bg-white text-black border-white font-bold"
                                    : "bg-black/40 text-white/40 border-white/10 hover:border-white/20"
                                }`}
                              >
                                {tier}
                              </button>
                            ))}
                          </div>

                          <div className="p-3 bg-black/40 border border-white/5 text-[10px] font-mono text-emerald-400 flex justify-between items-center">
                            <span>
                              Estimated: {
                                webTier === "Plain" ? "₹2,000 INR" :
                                webTier === "2D Animated" ? "₹5,000 INR" :
                                webTier === "3D Animated" ? "₹10,000 INR" :
                                "₹20,000 INR"
                              }
                            </span>
                            <span className="text-[9px] text-white/30 lowercase italic font-sans font-normal">negotiable</span>
                          </div>
                        </div>

                        {/* Web development pages selector */}
                        <div className="space-y-2">
                          <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">
                            How many pages website do you want?
                          </span>
                          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                            {["1 Page", "2-5 Pages", "6-10 Pages", "10+ Pages"].map((pages) => (
                              <button
                                key={pages}
                                type="button"
                                onClick={() => setWebPages(pages)}
                                className={`flex-1 px-2 py-1.5 text-[9px] font-mono tracking-wider uppercase border transition-all ${
                                  webPages === pages
                                    ? "bg-emerald-500 text-black border-emerald-500 font-bold"
                                    : "bg-black/40 text-white/40 border-white/10 hover:border-white/20"
                                }`}
                              >
                                {pages}
                              </button>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}
                  </div>

                  {/* SERVICE 4: Social Media Handling */}
                  <div className={`p-4 border transition-all duration-300 ${
                    isSocialSelected 
                      ? "bg-white/[0.02] border-white/30" 
                      : "bg-transparent border-white/5 hover:border-white/10"
                  }`}>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setIsSocialSelected(!isSocialSelected)}
                        className="flex items-center gap-3 focus:outline-none text-left"
                      >
                        <div className={`w-4 h-4 border flex items-center justify-center transition-all ${
                          isSocialSelected ? "bg-white border-white" : "border-white/20"
                        }`}>
                          {isSocialSelected && <Check className="w-3 h-3 text-black stroke-[3]" />}
                        </div>
                        <div>
                          <span className="text-xs font-bold tracking-wider uppercase font-inter text-white">
                            Social Media Handling
                          </span>
                        </div>
                      </button>
                      <span className="text-[9px] font-mono text-white/30 uppercase">04 / SOCIAL</span>
                    </div>

                    {isSocialSelected && (
                      <div className="mt-4 pt-3 border-t border-white/5 space-y-2 animate-fade-in">
                        <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">
                          Social Media Pricing:
                        </span>
                        <div className="p-3 bg-black/40 border border-white/5 text-[10px] font-mono text-emerald-400 flex justify-between items-center">
                          <span>Negotiable</span>
                          <span className="text-[9px] text-white/30 lowercase italic font-sans font-normal">negotiable</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* Input Fields (Email fully removed) */}
              <div className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={inlineName}
                  onChange={(e) => setInlineName(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 px-3 py-3 text-xs text-white placeholder-white/35 focus:outline-none focus:border-white/40 transition-all rounded-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp or Phone Number"
                  value={inlineInfo}
                  onChange={(e) => setInlineInfo(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 px-3 py-3 text-xs text-white placeholder-white/35 focus:outline-none focus:border-white/40 transition-all rounded-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isInlineSubmitting || (!isVideoSelected && !isGraphicSelected && !isWebSelected && !isSocialSelected)}
                className="w-full bg-white text-black font-inter text-xs font-bold tracking-widest uppercase py-4 hover:bg-neutral-200 transition-colors focus:outline-none disabled:opacity-40 flex items-center justify-center gap-1.5"
              >
                {isInlineSubmitting ? (
                  <span className="animate-pulse">CONNECTING...</span>
                ) : (
                  <>
                    SEND INQUIRY
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success Feedback Inline Placeholder */
            <div className="bg-white/[0.02] border border-white/10 p-6 space-y-6 animate-fade-in text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">INQUIRY COMPILED</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-podium font-bold uppercase tracking-wider text-white">REDESIGNED WHATSAPP GATEWAY</h3>
                <p className="text-xs text-white/60 leading-relaxed max-w-md">
                  Your specifications have been formatted. Dispatched to our team at WhatsApp. If the chat didn't open automatically, use the button below:
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-mono text-[10px] font-bold tracking-widest uppercase px-6 py-4.5 transition-all duration-300 w-full sm:w-auto"
                >
                  DISPATCH VIA WHATSAPP
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <button
                  onClick={resetInlineForm}
                  className="text-[10px] font-mono font-bold tracking-widest uppercase border border-white/15 px-6 py-4 hover:bg-white/5 text-white/70 hover:text-white transition-all w-full sm:w-auto"
                >
                  RESET FORM
                </button>
              </div>
            </div>
          )}

          {/* Guide to Scroll Further */}
          <div 
            onClick={handleScrollToPortfolio}
            className="pt-10 flex flex-col items-start gap-2 cursor-pointer group pointer-events-auto border-t border-white/5"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] text-white/30 group-hover:text-white/75 transition-colors uppercase">
              Keep scrolling for portfolios
            </span>
            <div className="w-[1.5px] h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
          </div>

        </div>
      </div>

      {/* 5. Scroll Destination Section 2: Dedicated Portfolios Grid */}
      <div 
        id="portfolio-section" 
        className="relative w-full min-h-screen z-10 px-6 sm:px-10 lg:px-16 flex items-center justify-start py-32 bg-black/60 border-t border-white/5"
      >
        <div className="max-w-5xl w-full text-left space-y-12">
          
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase block mb-1">
              PRODUCTION ARCHIVES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wider uppercase font-podium">
              OUR PORTFOLIOS
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-2 max-w-md leading-relaxed font-inter">
              Explore live cases, technical designs, cinematic cuts, and digital layouts produced by the AfterMinds team.
            </p>
          </div>

          {/* Portfolios 4-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            
            {/* CARD 1: Video Editing (Dedicated Subpage) */}
            <div className="bg-neutral-950/70 border border-white/10 p-6 flex flex-col justify-between hover:border-white/35 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center">
                  <Film className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-wide uppercase font-podium text-white">
                    VIDEO EDITING
                  </h3>
                  <p className="text-xs text-white/50 font-mono tracking-widest mt-0.5">DEDICATED PORTAL</p>
                  <p className="text-xs text-white/60 font-inter leading-relaxed mt-2.5">
                    High-end cinematic grading, narrative sequence assembly, fast cuts, and sound layout portfolios.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setCurrentView("video-portfolio")}
                className="mt-6 w-full py-3 bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black font-mono text-[10px] tracking-widest uppercase text-white/80 transition-all font-bold flex items-center justify-center gap-1"
              >
                ENTER DIRECT PORTFOLIO
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* CARD 2: Website Development (Dedicated Subpage) */}
            <div className="bg-neutral-950/70 border border-white/10 p-6 flex flex-col justify-between hover:border-white/35 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-wide uppercase font-podium text-white">
                    WEBSITE DEVELOPMENT
                  </h3>
                  <p className="text-xs text-white/50 font-mono tracking-widest mt-0.5">DEDICATED PORTAL</p>
                  <p className="text-xs text-white/60 font-inter leading-relaxed mt-2.5">
                    Full-stack custom interfaces, light-speed static assets, premium interactive applications, and dashboards.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setCurrentView("web-portfolio")}
                className="mt-6 w-full py-3 bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black font-mono text-[10px] tracking-widest uppercase text-white/80 transition-all font-bold flex items-center justify-center gap-1"
              >
                ENTER DIRECT PORTFOLIO
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* CARD 3: Graphic Designing (External Web Redirect) */}
            <div className="bg-neutral-950/70 border border-white/10 p-6 flex flex-col justify-between hover:border-white/35 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-wide uppercase font-podium text-white">
                    GRAPHIC DESIGNING
                  </h3>
                  <p className="text-xs text-white/50 font-mono tracking-widest mt-0.5">EXTERNAL PORTAL</p>
                  <p className="text-xs text-white/60 font-inter leading-relaxed mt-2.5">
                    Brand books, vector assets, luxury posters, typographic layouts, and social creative boards.
                  </p>
                </div>
              </div>
              <a
                href={GRAPHIC_DESIGNING_PORTFOLIO_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full py-3 bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black font-mono text-[10px] tracking-widest uppercase text-white/80 transition-all font-bold flex items-center justify-center gap-1"
              >
                VIEW EXTERNAL PORTFOLIO
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* CARD 4: Social Media Handling (External Web Redirect) */}
            <div className="bg-neutral-950/70 border border-white/10 p-6 flex flex-col justify-between hover:border-white/35 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-wide uppercase font-podium text-white">
                    SOCIAL MEDIA
                  </h3>
                  <p className="text-xs text-white/50 font-mono tracking-widest mt-0.5">EXTERNAL PORTAL</p>
                  <p className="text-xs text-white/60 font-inter leading-relaxed mt-2.5">
                    Creative social layout designs, daily handles management, growth tactics, and premium aesthetics.
                  </p>
                </div>
              </div>
              <a
                href={SOCIAL_MEDIA_PORTFOLIO_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full py-3 bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black font-mono text-[10px] tracking-widest uppercase text-white/80 transition-all font-bold flex items-center justify-center gap-1"
              >
                VIEW EXTERNAL PORTFOLIO
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* 6. Minimalist Footer */}
      <footer className="relative w-full z-30 px-6 sm:px-10 lg:px-16 py-8 border-t border-white/5 bg-black flex flex-col sm:flex-row items-center justify-between text-[9px] tracking-widest text-white/35 uppercase font-mono gap-4">
        <div>
          AFTERMINDS © 2026. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-4">
          <span>VIDEO</span>
          <span>•</span>
          <span>DESIGN</span>
          <span>•</span>
          <span>WEB</span>
        </div>
      </footer>

      {/* 2D Thumbs Up Successful Submission Popup */}
      {showThumbPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in select-text">
          <div className="absolute inset-0" onClick={() => setShowThumbPopup(false)} />
          <div className="relative bg-neutral-950 border border-white/10 p-8 sm:p-10 text-center max-w-sm w-full z-10 space-y-6 animate-scale-in">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

            {/* Glowing 2D Thumbs Up Badge */}
            <div className="relative mx-auto w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center rounded-full animate-bounce">
              <div className="absolute inset-0 rounded-full border border-emerald-500/10 animate-ping opacity-75" />
              <ThumbsUp className="w-10 h-10 text-emerald-400 stroke-[1.5]" />
            </div>

            <div className="space-y-2 relative z-10">
              <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase font-bold block">
                👍 CONNECTION SYNCED
              </span>
              <h3 className="text-xl font-podium font-bold uppercase tracking-wider text-white">
                WE'LL REACH OUT SOON!
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-inter">
                Hi <span className="text-white font-bold">{inlineName}</span>, we have successfully compiled your inquiry. We will connect with you on WhatsApp / Phone at <span className="text-white font-mono font-bold">{inlineInfo}</span> shortly.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 relative z-10">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-mono text-[10px] font-bold tracking-widest uppercase py-4 transition-all duration-300 w-full"
              >
                OPEN WHATSAPP CHAT
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              
              <button
                onClick={resetInlineForm}
                className="text-[10px] font-mono font-bold tracking-widest uppercase border border-white/10 hover:border-white/20 py-3 text-white/50 hover:text-white transition-all w-full"
              >
                CLOSE & RESET
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
