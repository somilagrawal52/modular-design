import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'monolith-house',
    title: 'The Monolith House',
    category: 'Residential',
    location: 'Swiss Alps',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000',
    description: 'A brutalist masterpiece carved into the granite slopes of the Swiss Alps. The Monolith House redefines the relationship between raw concrete and the pristine mountain landscape.',
    challenge: 'The primary challenge was the extreme topography and the harsh alpine climate. We needed to create a structure that felt like a natural extension of the mountain while providing a warm, protected sanctuary for its inhabitants.',
    solution: 'We utilized a "carved" architectural language, using high-performance thermal concrete that mimics the surrounding granite. The interior is lined with reclaimed oak to provide a tactile contrast to the raw exterior.',
    materiality: 'The palette is strictly limited to four elements: raw concrete, reclaimed oak, slate, and low-iron glass. This restraint allows the textures of the materials to speak, responding to the changing light of the mountains.',
    technicalSpecs: [
      { label: 'Structural System', value: 'Reinforced Thermal Concrete' },
      { label: 'Energy Class', value: 'Minergie-P-Eco' },
      { label: 'Glazing', value: 'Triple-pane Argon Filled' }
    ],
    details: [
      { label: 'Area', value: '850 sqm' },
      { label: 'Materials', value: 'Exposed Concrete, Oak, Slate' },
      { label: 'Status', value: 'Completed' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1600607687960-ce8746a747a5?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000'
    ]
  },
  {
    id: 'azure-pavilion',
    title: 'Azure Pavilion',
    category: 'Commercial',
    location: 'Dubai, UAE',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000',
    description: 'A sanctuary of light and water. The Azure Pavilion serves as a private members club, featuring a floating glass structure that seems to defy gravity over the Persian Gulf.',
    challenge: 'Designing a structure that could withstand the intense heat and humidity of Dubai while maintaining a sense of ethereal lightness and transparency.',
    solution: 'We developed a custom double-skin facade with integrated solar shading and a passive cooling system that utilizes the surrounding seawater.',
    materiality: 'White Thassos marble provides a cool, reflective base, while ultra-clear low-iron glass creates an invisible boundary between the interior and the sea. Polished chrome accents capture the shimmering desert light.',
    technicalSpecs: [
      { label: 'Facade', value: 'Double-skin Low-E Glass' },
      { label: 'Cooling', value: 'Seawater Heat Exchange' },
      { label: 'Lighting', value: 'Dynamic LED Integration' }
    ],
    details: [
      { label: 'Area', value: '1,200 sqm' },
      { label: 'Materials', value: 'Low-iron Glass, White Marble' },
      { label: 'Status', value: 'Completed' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=2000'
    ]
  },
  {
    id: 'obsidian-tower',
    title: 'Obsidian Tower',
    category: 'Hospitality',
    location: 'Tokyo, Japan',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
    description: 'A vertical retreat in the heart of Shinjuku. The Obsidian Tower uses dark basalt and intelligent lighting to create a silent oasis amidst the neon chaos of Tokyo.',
    challenge: 'How to create a sense of profound silence and isolation in one of the densest urban environments on Earth.',
    solution: 'The tower is wrapped in a "sound-absorbing" basalt skin. The interior layout is based on traditional Japanese "Ma" (negative space), focusing on the voids between functional areas.',
    materiality: 'Honed basalt, blackened steel, and dark cedar create a monochromatic environment that absorbs light and sound. Translucent washi-glass partitions provide soft, diffused illumination.',
    technicalSpecs: [
      { label: 'Acoustics', value: 'Active Noise Cancellation Skin' },
      { label: 'Seismic', value: 'Tuned Mass Damper' },
      { label: 'Automation', value: 'AI-driven Guest Experience' }
    ],
    details: [
      { label: 'Floors', value: '42' },
      { label: 'Materials', value: 'Basalt, Blackened Steel' },
      { label: 'Status', value: 'In Progress' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000'
    ]
  },
  {
    id: 'lunar-retreat',
    title: 'Lunar Retreat',
    category: 'Hospitality',
    location: 'Iceland',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1631941150945-837cb81fc7e2?auto=format&fit=crop&q=80&w=2000',
    description: 'A series of glass cabins designed to offer an unobstructed view of the Aurora Borealis, blending seamlessly into the volcanic landscape.',
    challenge: 'Minimizing the ecological footprint in a fragile volcanic ecosystem while providing luxury amenities.',
    solution: 'The cabins are prefabricated off-site and "floated" onto the landscape using minimal foundation points. They are entirely powered by geothermal energy.',
    materiality: 'The cabins use structural glass with a specialized coating to prevent bird collisions. The interior features local wool textiles and charred wood, echoing the volcanic surroundings.',
    technicalSpecs: [
      { label: 'Power', value: '100% Geothermal' },
      { label: 'Foundation', value: 'Micro-pile System' },
      { label: 'Waste', value: 'Closed-loop Water System' }
    ],
    details: [
      { label: 'Units', value: '12 Cabins' },
      { label: 'Materials', value: 'Smart Glass, Local Stone' },
      { label: 'Status', value: 'Completed' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=2000'
    ]
  },
  {
    id: 'velvet-atrium',
    title: 'Velvet Atrium',
    category: 'Commercial',
    location: 'Paris, France',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000',
    description: 'A renovation of a historic Parisian courtyard into a modern office atrium, featuring a suspended garden and acoustic velvet panels.',
    challenge: 'Integrating modern office requirements into a protected 18th-century structure without damaging the original fabric.',
    solution: 'We created a "reversible" steel and glass insertion that touches the original walls at only a few points. The acoustic panels are made from recycled velvet.',
    materiality: 'The contrast between the historic limestone walls and the precision-engineered steel and glass insertion is the core of the project. Recycled velvet in deep emerald provides acoustic warmth.',
    technicalSpecs: [
      { label: 'Preservation', value: 'Non-invasive Installation' },
      { label: 'Acoustics', value: 'Recycled Velvet Panels' },
      { label: 'Vegetation', value: 'Hydroponic Vertical Garden' }
    ],
    details: [
      { label: 'Area', value: '2,400 sqm' },
      { label: 'Materials', value: 'Steel, Velvet, Glass' },
      { label: 'Status', value: 'Completed' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000'
    ]
  },
  {
    id: 'ivory-villa',
    title: 'Ivory Villa',
    category: 'Residential',
    location: 'Santorini, Greece',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=2000',
    description: 'A contemporary take on Cycladic architecture, utilizing white sculptural forms and infinity pools that merge with the Aegean Sea.',
    challenge: 'Reinterpreting traditional forms in a way that feels contemporary and functional for modern living.',
    solution: 'We used robotic stone-cutting technology to create complex, fluid forms that would be impossible with traditional methods, while maintaining the iconic white aesthetic.',
    materiality: 'Traditional white stucco is reimagined as a seamless, sculptural skin. Local Naxian limestone is used for the flooring, extending from the interior to the pool deck to create a unified plane.',
    technicalSpecs: [
      { label: 'Fabrication', value: 'Robotic Stone Cutting' },
      { label: 'Water', value: 'Desalination Integration' },
      { label: 'Climate', value: 'Passive Wind Cooling' }
    ],
    details: [
      { label: 'Area', value: '600 sqm' },
      { label: 'Materials', value: 'White Stucco, Limestone' },
      { label: 'Status', value: 'In Progress' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'architectural-design',
    title: 'Architectural Design',
    description: 'We create timeless structures that harmonize with their environment while pushing the boundaries of modern engineering.',
    features: ['Conceptual Design', 'Structural Engineering', 'Sustainable Solutions', '3D Visualization']
  },
  {
    id: 'interior-architecture',
    title: 'Interior Architecture',
    description: 'Crafting intimate spaces that reflect the soul of the inhabitant. Every detail is considered, from material tactile quality to light behavior.',
    features: ['Custom Furniture', 'Material Sourcing', 'Lighting Design', 'Art Curation']
  },
  {
    id: 'urban-planning',
    title: 'Urban Planning',
    description: 'Designing the future of cities. We develop master plans that prioritize human experience and ecological balance.',
    features: ['Master Planning', 'Landscape Design', 'Infrastructure Strategy', 'Public Space Design']
  }
];

export const TEAM = [
  {
    name: 'Julian Aurelian',
    role: 'Founder & Principal Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    bio: 'With over 30 years of experience, Julian leads the creative vision of the studio, focusing on the intersection of light and materiality.'
  },
  {
    name: 'Elena Rossi',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
    bio: 'Elena brings a poetic approach to spatial design, ensuring every project tells a unique story through its geometry.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    bio: 'Marcus oversees the engineering and technical execution, pushing the boundaries of what is possible with modern materials.'
  },
  {
    name: 'Sophia Chen',
    role: 'Sustainability Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800',
    bio: 'Sophia ensures that every AURELIAN project meets the highest standards of environmental responsibility and longevity.'
  }
];
