import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'garden-pavilion', title: 'Garden Pavilion', category: 'Residential', location: 'Site-specific', year: '2026', image: '/images/modular-home-garden-hero.png',
    description: 'A compact prefabricated residence designed to settle lightly into a landscaped garden, pairing panoramic glazing with a calm, efficient living plan.',
    challenge: 'Create a fully finished home with minimal on-site disruption and a strong connection to the landscape.', solution: 'The residence is assembled from precision-built modules, then placed on a light-touch foundation with services integrated before arrival.',
    materiality: 'A crisp white modular shell, low-iron glazing, and warm planting textures give the home a quiet, contemporary character.',
    technicalSpecs: [{ label: 'Construction', value: 'Off-site Modular' }, { label: 'Foundation', value: 'Light-touch Supports' }, { label: 'Glazing', value: 'Panoramic Insulated Glass' }],
    details: [{ label: 'Type', value: 'Modular Residence' }, { label: 'Delivery', value: 'Turnkey Module' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-residence-pool-hero.png', '/images/modular-hotel-guest-room.png', '/images/modular-hotel-installation.png']
  },
  {
    id: 'modular-cafe', title: 'Modular Café', category: 'Café', location: 'Site-specific', year: '2026', image: '/images/modular-cafe.png',
    description: 'A welcoming modular café and bakery that brings a warm, hospitality-led experience to a compact, transportable building.',
    challenge: 'Create a full café operation with a memorable guest experience in a small, rapidly deployable footprint.', solution: 'The bar, kitchen, storage, opening façade, and planted terrace are organised as a complete modular hospitality system.',
    materiality: 'Refined metal cladding, warm timber, glass, and abundant planting give the café a relaxed, premium character.',
    technicalSpecs: [{ label: 'Format', value: 'Modular Hospitality' }, { label: 'Service', value: 'Café & Bakery' }, { label: 'Setup', value: 'Rapid Installation' }],
    details: [{ label: 'Type', value: 'Café Module' }, { label: 'Experience', value: 'Indoor-Outdoor Dining' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/container-cafe-rooftop.jpeg', '/images/modular-hotel-masterplan.png']
  },
  {
    id: 'modular-living-campus', title: 'Modular Living Campus', category: 'Hospitality', location: 'Site-specific', year: '2026', image: '/images/modular-hotel-masterplan.png',
    description: 'A collection of independent modular suites arranged around shared landscape, giving each guest privacy while creating a connected destination.',
    challenge: 'Balance repeatable construction with a setting that feels personal, grounded, and close to nature.', solution: 'Standardised modules are positioned around a central path network, allowing the site to grow in phases as demand changes.',
    materiality: 'Light modular volumes sit above the terrain, with timber decks and planted paths softening the edges between architecture and landscape.',
    technicalSpecs: [{ label: 'System', value: 'Repeatable Modules' }, { label: 'Growth', value: 'Phased Deployment' }, { label: 'Site Impact', value: 'Reduced Ground Works' }],
    details: [{ label: 'Type', value: 'Hospitality Campus' }, { label: 'Configuration', value: 'Multi-unit' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-hotel-guest-room.png', '/images/modular-hotel-installation.png']
  },
  {
    id: 'modular-office-pavilion', title: 'Modular Office Pavilion', category: 'Office', location: 'Site-specific', year: '2026', image: '/images/modular-office-pavilion.png',
    description: 'A flexible office pavilion designed for focused work, informal meetings, and strong everyday connection to the landscape.',
    challenge: 'Create a professional workplace that can arrive quickly, adapt as a team grows, and feel generous rather than temporary.', solution: 'A series of prefabricated volumes creates work zones, meeting space, shaded outdoor areas, and room for future expansion.',
    materiality: 'White modular volumes, expansive glazing, planting, and shaded terraces create a calm campus-style environment.',
    technicalSpecs: [{ label: 'Format', value: 'Expandable Modules' }, { label: 'Workplace', value: 'Office & Meeting Space' }, { label: 'Installation', value: 'Low-disruption' }],
    details: [{ label: 'Type', value: 'Office Pavilion' }, { label: 'Use', value: 'Workplace' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-hotel-installation.png', '/images/modular-hotel-guest-room.png']
  },
  {
    id: 'modular-rooftop-bar', title: 'Modular Rooftop Bar', category: 'Bar', location: 'Site-specific', year: '2026', image: '/images/modular-rooftop-bar.png',
    description: 'An elevated bar concept that combines a modular hospitality shell with a dramatic rooftop setting for evening events and social gatherings.',
    challenge: 'Deliver a high-impact bar experience that can be installed as a compact, self-contained hospitality destination.', solution: 'The modular build integrates the bar, back-of-house, lighting, and terrace edge into a single transport-ready configuration.',
    materiality: 'Dark metal, warm timber, soft lighting, and planted borders create a refined atmosphere after sunset.',
    technicalSpecs: [{ label: 'Format', value: 'Rooftop Module' }, { label: 'Service', value: 'Bar & Events' }, { label: 'Lighting', value: 'Integrated Ambient System' }],
    details: [{ label: 'Type', value: 'Hospitality Module' }, { label: 'Use', value: 'Bar & Events' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-cafe.png', '/images/container-pool.jpeg']
  },
  {
    id: 'courtyard-residence', title: 'Courtyard Residence', category: 'Residential', location: 'Site-specific', year: '2026', image: '/images/modular-residence-pool-hero.png',
    description: 'A two-level modular residence that brings living spaces, terrace, and pool together in a bright indoor-outdoor composition.',
    challenge: 'Achieve the amenity and presence of a custom home while retaining the speed and precision of modular construction.', solution: 'Stacked modules create distinct private and social levels, while generous glazing frames the garden and pool terrace.',
    materiality: 'Soft white cladding, dark window frames, glass balustrades, and water create a crisp contemporary palette.',
    technicalSpecs: [{ label: 'Configuration', value: 'Stacked Modules' }, { label: 'Outdoor Space', value: 'Terrace & Pool' }, { label: 'Delivery', value: 'Prefabricated Build' }],
    details: [{ label: 'Type', value: 'Family Residence' }, { label: 'Levels', value: 'Two Storeys' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-hotel-guest-room.png', '/images/modular-hotel-installation.png']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'modular-home-design', title: 'Modular Home Design',
    description: 'We design modern prefabricated homes that bring thoughtful planning, flexible layouts, and refined architecture into a faster build process.',
    features: ['Concept Planning', 'Module Configuration', 'Structural Coordination', '3D Visualization']
  },
  {
    id: 'modular-hotels-retreats', title: 'Modular Hotels & Retreats',
    description: 'We create guest-room modules, resort masterplans, reception spaces, and amenities that open faster and grow in phases.',
    features: ['Guest Room Modules', 'Resort Masterplanning', 'Reception & Shared Spaces', 'Phased Expansion']
  },
  {
    id: 'modular-offices', title: 'Modular Offices & Workspaces',
    description: 'We design flexible office pavilions and workplace campuses that adapt as teams, sites, and business needs change.',
    features: ['Office Planning', 'Meeting Modules', 'Campus Layouts', 'Future Expansion']
  },
  {
    id: 'cafes-bars-restaurants', title: 'Cafés, Bars & Restaurants',
    description: 'We turn modular structures into polished food-and-beverage destinations built for service, social energy, and memorable customer experience.',
    features: ['Café & Bar Planning', 'Kitchen Coordination', 'Rooftop Terraces', 'Guest Experience Design']
  },
  {
    id: 'retail-popups', title: 'Retail & Pop-Ups',
    description: 'We create transportable retail, showroom, and pop-up modules that can launch quickly and move as opportunities change.',
    features: ['Retail Layouts', 'Display Systems', 'Brand-ready Interiors', 'Transport Planning']
  },
  {
    id: 'modular-amenities', title: 'Modular Amenities & Pools',
    description: 'We add flexible outdoor amenities—from modular pools to landscape-ready leisure spaces—that complete a site with minimal disruption.',
    features: ['Pool Integration', 'Landscape Coordination', 'Deck & Access Design', 'Site Installation']
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
    bio: 'Sophia ensures that every COMPANY project meets the highest standards of environmental responsibility and longevity.'
  }
];
