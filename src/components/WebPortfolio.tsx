/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ArrowLeft, ExternalLink, Code, Cpu, Terminal, Layers, Activity, ChevronRight, Laptop, Sparkles, Server, Globe } from "lucide-react";

interface WebProject {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  fullOverview: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  image: string;
  mockUrl: string;
  mockApiEndpoint: string;
  mockApiResponse: any;
}

const WEB_PROJECTS: WebProject[] = [
  {
    id: "project-1",
    title: "NEO-SaaS Platform",
    category: "AI Infrastructure",
    tag: "infrastructure",
    description: "Next-generation analytics dashboard featuring high-performance dynamic charts, live tracking pipelines, and real-time inference monitoring.",
    fullOverview: "A high-concurrency cloud platform designed for heavy numerical models. Integrates instant stream visualizers and low-latency metrics dashboards designed to process over 150,000 requests per minute with flawless performance.",
    tech: ["React", "TypeScript", "D3.js", "Tailwind CSS", "WebSockets"],
    metrics: [
      { label: "Uptime Score", value: "99.99%" },
      { label: "Query Speeds", value: "<45ms" },
      { label: "Active Nodes", value: "1,240 / Min" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    mockUrl: "https://neo-saas.afterminds.io/dashboard",
    mockApiEndpoint: "GET /api/v1/metrics/stream",
    mockApiResponse: {
      status: "healthy",
      latency_ms: 42,
      active_connections: 18450,
      cpu_load_pct: 34.2,
      ingress_bytes_per_sec: 8409200
    }
  },
  {
    id: "project-2",
    title: "Krypton Web3 Portal",
    category: "Web3 & DeFi",
    tag: "web3",
    description: "A secure blockchain interaction dashboard with instant wallet handshakes, real-time gas tracking, and seamless smart-contract execution wrappers.",
    fullOverview: "Designed with security and cryptographic performance in mind. Features secure local sandbox states, gas prediction engines, and smart transaction queue pipelines that prevent front-running.",
    tech: ["Next.js", "Ethers.js", "Framer Motion", "Tailwind CSS", "GraphQL"],
    metrics: [
      { label: "Total Value Locked", value: "$14.2M+" },
      { label: "Avg Block Sync", value: "1.8s" },
      { label: "Contract Audits", value: "3x Verified" }
    ],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    mockUrl: "https://krypton.defi.afterminds.io",
    mockApiEndpoint: "POST /api/v3/wallet/sync",
    mockApiResponse: {
      session: "authorized",
      network: "mainnet_v2",
      active_wallet: "0x71C...392A",
      gas_gwei: 18.5,
      mempool_standing: "priority_1"
    }
  },
  {
    id: "project-3",
    title: "Vesper Editorial Hub",
    category: "Creative Luxury",
    tag: "luxury",
    description: "A luxury lifestyle brand destination utilizing editorial typography pairings, fluid spatial layouts, and rich content delivery networks.",
    fullOverview: "Crafted to simulate luxury offline print media layout. Implements interactive vector canvas motion, high-density asset prefetching, and customized fluid responsive grids that keep readers hooked.",
    tech: ["Vite", "React", "GSAP Animations", "Tailwind CSS", "Prismic CMS"],
    metrics: [
      { label: "Session Time Gain", value: "+45%" },
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Interaction Delay", value: "12ms" }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    mockUrl: "https://vesper.editorial.afterminds.io/issue-4",
    mockApiEndpoint: "GET /api/v1/editorial/prefetch",
    mockApiResponse: {
      status: "success",
      cached_pages: ["home", "curated-goods", "issue-4"],
      total_assets_loaded: 42,
      cdn_edge_node: "nyc-edge-9",
      delivery_time_ms: 18
    }
  }
];

interface WebPortfolioProps {
  onBack: () => void;
}

export default function WebPortfolio({ onBack }: WebPortfolioProps) {
  const [activeTab, setActiveTab] = useState<"all" | "infrastructure" | "web3" | "luxury">("all");
  const [selectedProject, setSelectedProject] = useState<WebProject>(WEB_PROJECTS[0]);
  const [terminalOutput, setTerminalOutput] = useState<string>("Click 'TEST LIVE ENDPOINT' in any card to query mock systems...");
  const [terminalLoading, setTerminalLoading] = useState(false);

  const filteredProjects = activeTab === "all" 
    ? WEB_PROJECTS 
    : WEB_PROJECTS.filter(p => p.tag === activeTab);

  const handleTestApi = (project: WebProject) => {
    setTerminalLoading(true);
    setTerminalOutput(`Connecting to AfterMinds test cluster...\nInitiating: ${project.mockApiEndpoint}\nResolving server handshake...`);
    
    setTimeout(() => {
      setTerminalLoading(false);
      setTerminalOutput(
        `>> SUCCESS: ${project.mockApiEndpoint}\n` +
        `>> STATUS: 200 OK | Host: am-edge-node.net\n` +
        `>> RESPONSE BODY:\n` +
        JSON.stringify(project.mockApiResponse, null, 2)
      );
    }, 850);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 sm:px-10 lg:px-16 py-28 relative z-30 animate-fade-in select-text">
      
      {/* Background Subtle Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
      
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
                PRODUCTION PLATFORM SHOWCASE
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase font-podium text-white">
                WEB ARCHITECTURE
              </h1>
            </div>
          </div>

          {/* Quick Stats Panel */}
          <div className="grid grid-cols-2 sm:flex items-center gap-6 sm:gap-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
            <div className="space-y-1">
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">TECH STACK</span>
              <div className="flex items-center gap-1.5 font-mono text-xs text-white/80">
                <Code className="w-3.5 h-3.5 text-white/50" />
                <span>Modern React / ESM</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">PERFORMANCE</span>
              <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-400 font-bold">
                <Activity className="w-3.5 h-3.5" />
                <span>100/100 Core Web Vitals</span>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE CONTROLS: Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/5 pb-6">
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest mr-4">Filter Core:</span>
          {[
            { id: "all", label: "00 / ALL PLATFORMS" },
            { id: "infrastructure", label: "01 / AI & INFRASTRUCTURE" },
            { id: "web3", label: "02 / DECENTRALIZED WEB" },
            { id: "luxury", label: "03 / LUXURY & CREATIVE" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-[10px] font-bold font-mono tracking-wider uppercase transition-all duration-300 rounded-none border ${
                activeTab === tab.id
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* MAIN SPLIT GRID: LEFT side list, RIGHT side developer inspection panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT 7 COLUMNS: Interactive Browser-Style Cards List */}
          <div className="lg:col-span-7 space-y-10">
            {filteredProjects.map((project) => {
              const isSelected = selectedProject.id === project.id;
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative bg-neutral-950/40 border transition-all duration-500 cursor-pointer flex flex-col ${
                    isSelected ? "border-white/40 bg-neutral-900/20" : "border-white/10 hover:border-white/25"
                  }`}
                >
                  
                  {/* Mock Browser Header top-bar */}
                  <div className="bg-neutral-950 px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-red-500/80 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-yellow-500/80 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-800 group-hover:bg-emerald-500/80 transition-colors" />
                    </div>
                    {/* Mock Browser Url bar */}
                    <div className="bg-black border border-white/5 px-4 py-1 rounded text-[10px] font-mono text-white/40 w-1/2 text-center group-hover:text-white/60 transition-colors truncate">
                      {project.mockUrl}
                    </div>
                    <Globe className="w-3.5 h-3.5 text-white/20 group-hover:text-white/45 transition-colors" />
                  </div>

                  {/* Image & Description Container */}
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    
                    {/* Cover Photo */}
                    <div className="md:col-span-5 relative aspect-[16/11] md:aspect-auto overflow-hidden bg-neutral-950 border-r border-white/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] opacity-60 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-3 left-3 flex gap-1">
                        <span className="text-[9px] font-mono font-bold bg-white text-black px-2 py-0.5 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Quick description info */}
                    <div className="md:col-span-7 p-6 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold tracking-wider font-podium uppercase text-white group-hover:text-emerald-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-white/60 leading-relaxed font-inter">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 3).map((t) => (
                            <span key={t} className="text-[9px] font-mono bg-white/5 text-white/50 px-2 py-0.5 border border-white/5 uppercase">
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="text-[9px] font-mono bg-white/5 text-white/30 px-2 py-0.5 border border-white/5">
                              +{project.tech.length - 3} MORE
                            </span>
                          )}
                        </div>

                        {/* Actions line */}
                        <div className="flex items-center gap-3 pt-3 border-t border-white/5 justify-between">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTestApi(project);
                            }}
                            className="text-[9px] font-mono font-bold bg-white/5 hover:bg-white hover:text-black border border-white/10 px-3 py-1.5 transition-all text-white/80"
                          >
                            TEST LIVE ENDPOINT
                          </button>
                          
                          <span className="text-[9px] font-mono text-white/40 uppercase group-hover:text-white transition-colors flex items-center gap-1">
                            INSPECT STRUCTURE
                            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              );
            })}
          </div>

          {/* RIGHT 5 COLUMNS: Immersive Tech Spec & Simulated Inspector */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* INSPECTION CONSOLE SCREEN */}
            <div className="bg-neutral-950 border border-white/15 p-6 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              
              {/* Header indicators */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-white" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-white uppercase">
                    ACTIVE ARCHITECT SPEC
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  <span className="text-[9px] font-mono text-emerald-400">READY</span>
                </div>
              </div>

              {/* Core Details inside Console */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">SYSTEM PORTAL NAME</span>
                  <p className="text-xl font-podium font-bold uppercase text-white tracking-wider">{selectedProject.title}</p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">ENGINEERING OVERVIEW</span>
                  <p className="text-xs text-white/70 leading-relaxed font-inter bg-white/[0.01] p-3 border border-white/5">
                    {selectedProject.fullOverview}
                  </p>
                </div>

                {/* Performance Metrics inside spec */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">ACCELERATION INDEX</span>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedProject.metrics.map((metric) => (
                      <div key={metric.label} className="bg-black border border-white/5 p-3 text-center space-y-0.5">
                        <span className="text-[8px] font-mono text-white/40 block truncate">{metric.label}</span>
                        <span className="text-sm font-podium font-bold text-white tracking-wider">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full technology list */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">PLATFORM STACK SPEC</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono bg-white/5 text-white/90 border border-white/10 px-2.5 py-1 uppercase font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* LIVE API TERMINAL SIMULATOR */}
            <div className="bg-neutral-950 border border-white/10 font-mono text-[11px] overflow-hidden">
              <div className="bg-neutral-900/60 px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
                <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold">LIVE ENDPOINT CONSOLE</span>
                <span className="text-[9px] text-white/30">AFTERMINDS-VM_1.2</span>
              </div>
              <div className="p-4 bg-black/90 min-h-[14rem] max-h-[18rem] overflow-y-auto space-y-2 text-white/80 scrollbar-thin">
                {terminalLoading ? (
                  <div className="flex flex-col items-center justify-center h-40 space-y-2 text-white/40">
                    <Server className="w-5 h-5 animate-bounce" />
                    <span className="animate-pulse">FETCHING PACKET STREAM...</span>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap leading-relaxed select-text">{terminalOutput}</pre>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM CALL TO ACTION MODULE */}
        <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase block font-bold">
              ★ SYSTEM DEPLOYMENT CAPABLE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-podium uppercase text-white tracking-wider">
              WE ARCHITECT TO CONQUER THE WEB.
            </h3>
            <p className="text-xs text-white/55 max-w-xl leading-relaxed">
              Have a heavy software concept, high-performance web dashboard, or highly interactive consumer portal in mind? Let AfterMinds assemble your codebase.
            </p>
          </div>

          <button
            onClick={onBack}
            className="w-full md:w-auto bg-white text-black px-6 py-4 text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors font-mono flex items-center justify-center gap-2 whitespace-nowrap rounded-none shrink-0"
          >
            LET'S CONSTRUCT IT
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
