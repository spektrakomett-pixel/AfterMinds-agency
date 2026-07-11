export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  videoEditingDetail?: string;
  image: string;
  stats?: { label: string; value: string }[];
}

export interface Offering {
  id: 'video' | 'design' | 'web' | 'social';
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
  highlight: string;
}

export const OFFERINGS: Offering[] = [
  {
    id: 'video',
    title: 'Video Editing & Production',
    shortDesc: 'High-octane editorial & motion design that commands attention.',
    description: 'We edit high-impact commercial advertisements, immersive social campaigns, brand films, and YouTube epics. Our edits focus on rhythm, custom sound design, color grading, and seamless motion graphics.',
    features: [
      'Narrative & Editorial Sequencing',
      'Advanced Color Grading (DaVinci Resolve Pro)',
      'Custom Sound Design & Foley Integration',
      'High-Impact Motion Graphics & VFX Title Cards',
      'Multi-Platform Aspect Ratio Optimizations'
    ],
    metrics: [
      { label: 'Retention Rate Boost', value: '+42%' },
      { label: 'Avg. Play Time', value: '89%' },
      { label: 'Minutes Edited', value: '500k+' }
    ],
    highlight: 'Engineered for high-retention engagement on TikTok, Reels, YouTube, and Television.'
  },
  {
    id: 'design',
    title: 'Graphic Designing & Identity',
    shortDesc: 'Bold, brutalist visual identity assets that define tomorrow.',
    description: 'We design premium brand guidelines, high-concept editorial layouts, digital visual assets, and bespoke typography. Our designs are raw, modern, and high-contrast, standing out in overcrowded feeds.',
    features: [
      'Fierce Brand Identity & Style Guides',
      'Custom Vector Assets & Typography Systems',
      'Bespoke Editorial & Layout Design',
      'High-Fidelity 3D Assets & Product Mockups',
      'Branded Social Templates & Marketing Collaterals'
    ],
    metrics: [
      { label: 'Designed Assets', value: '12k+' },
      { label: 'Award Badges', value: '18' },
      { label: 'Brand Guidelines', value: '80+' }
    ],
    highlight: 'Visual architecture crafted with absolute precision to position your brand as a leader.'
  },
  {
    id: 'web',
    title: 'Website Development',
    shortDesc: 'High-speed headless applications designed to convert.',
    description: 'We architect and code ultra-fast, visually immersive React and Vite web experiences. Our websites leverage modern layout structures, performant animations, and search engine optimization (SEO) best practices.',
    features: [
      'Next.js, React & Vite Custom Architectures',
      'Tailwind CSS & Custom Keyframe Micro-interactions',
      'SEO and Core Web Vitals Optimization (100% Score)',
      'Bespoke Interactive Portals & WebGL Integrations',
      'Headless CMS Integrations (Sanity, Strapi, Shopify)'
    ],
    metrics: [
      { label: 'Lighthouse Performance', value: '100' },
      { label: 'Avg. Loading Time', value: '0.4s' },
      { label: 'Lines of Pure Code', value: '1M+' }
    ],
    highlight: 'Lightning-fast digital platforms that blend raw aesthetic vision with robust software.'
  },
  {
    id: 'social',
    title: 'Social Media Handling',
    shortDesc: 'Strategic digital cultivation that drives real culture.',
    description: 'We manage and scale accounts across Instagram, TikTok, Twitter/X, and LinkedIn. From visual feed planning to high-converting copywriting, we turn passive observers into active brand advocates.',
    features: [
      'Aesthetic Feed Curation & Concept Planning',
      'High-Converting Copywriting & Hook Design',
      'Strategic Distribution & Post Scheduling',
      'Audience Engagement & Growth Strategy',
      'Weekly Data Analytics & Optimization Reports'
    ],
    metrics: [
      { label: 'Followers Cultivated', value: '5M+' },
      { label: 'Viral Impressions', value: '250M+' },
      { label: 'Average Engagement', value: '8.4%' }
    ],
    highlight: 'Data-informed distribution combined with raw creative intuition to start online movements.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'NEXUS AUTOMOTIVE',
    category: 'Video Editing & VFX',
    year: '2026',
    description: 'A fast-paced, high-concept cinematic commercial for a cutting-edge electric supercar. Crafted using aggressive sound design, speed ramps, and 3D camera tracker integrations.',
    videoEditingDetail: '30-second broadcast cut with heavy sound effects, high-impact bass drops, and deep color grading to achieve a cyberpunk nighttime neon aesthetic.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'CTR', value: '14.2%' },
      { label: 'Direct Impressions', value: '4.8M+' }
    ]
  },
  {
    id: 'p2',
    title: 'KRYPTON STAGE',
    category: 'Brand Identity & Web Development',
    year: '2025',
    description: 'A full redesign and performance rebuild for a global virtual staging platform. We coupled brutalist custom typography with a high-fidelity headless React web client.',
    videoEditingDetail: 'Designed bespoke motion graphics for the interactive landing page, utilizing clean geometric transitions and modern typography panels.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Load Time Reduction', value: '-72%' },
      { label: 'Conversion Lift', value: '+44%' }
    ]
  },
  {
    id: 'p3',
    title: 'AETHER APPAREL',
    category: 'Social Media Campaign & Styling',
    year: '2026',
    description: 'Full strategic planning and visual curation for a sustainable luxury streetwear drop. We handled high-energy video hooks, editorial layout templates, and daily scheduling.',
    videoEditingDetail: 'Curated and edited 45 separate short-form Reels and TikToks with customized captions, quick cuts, and trending sound styling.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Organic Views', value: '12.6M' },
      { label: 'Follower Growth', value: '+85k' }
    ]
  },
  {
    id: 'p4',
    title: 'ECLIPSE SOUNDS',
    category: 'Graphic Design & 3D Artwork',
    year: '2025',
    description: 'Created custom brutalist typography style guide and 3D interactive packaging concepts for a high-end audiophile headphone manufacturer.',
    videoEditingDetail: 'Assembled a 3D product-rotation video loop featuring dynamic depth-of-field effects, glass reflection mappings, and heavy audio synthesis overlays.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Design Outlets', value: '14+' },
      { label: 'Press Feature', value: 'Yanko' }
    ]
  }
];
