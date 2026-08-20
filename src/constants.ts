import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'garden-pavilion', title: 'Garden Pavilion', category: 'Residential', location: 'Site-specific', year: '2026', image: '/images/modular-home-garden-hero.png',
    description: 'A compact prefabricated residence designed to settle lightly into a landscaped garden, pairing panoramic glazing with a calm, efficient living plan.',
    challenge: 'Create a fully finished home with minimal on-site disruption and a strong connection to the landscape.', solution: 'The residence is assembled from precision-built modules, then placed on a light-touch foundation with services integrated before arrival.',
    materiality: 'A crisp white modular shell, low-iron glazing, and warm planting textures give the home a quiet, contemporary character.',
    technicalSpecs: [{ label: 'Construction', value: 'Off-site Modular' }, { label: 'Foundation', value: 'Light-touch Supports' }, { label: 'Glazing', value: 'Panoramic Insulated Glass' }],
    details: [{ label: 'Type', value: 'Modular Residence' }, { label: 'Delivery', value: 'Turnkey Module' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-residence-pool-hero.png', '/images/modular-campus-aerial-hero.png', '/images/container-pool.jpeg']
  },
  {
    id: 'rooftop-coffee-bar', title: 'Rooftop Coffee Bar', category: 'Commercial', location: 'Site-specific', year: '2026', image: '/images/container-cafe-rooftop.jpeg',
    description: 'A hospitality concept that turns a shipping container into a polished coffee bar, with a rooftop terrace that extends the guest experience outdoors.',
    challenge: 'Create a compact food-and-beverage destination that can be transported, installed, and opened quickly.', solution: 'The service counter, back-of-house equipment, doors, and rooftop access are integrated into a single modular build.',
    materiality: 'A clean container shell, black metal details, timber counter surfaces, and planted edges bring warmth to the compact footprint.',
    technicalSpecs: [{ label: 'Format', value: 'Container Conversion' }, { label: 'Terrace', value: 'Rooftop Seating' }, { label: 'Setup', value: 'Rapid Installation' }],
    details: [{ label: 'Type', value: 'Hospitality Module' }, { label: 'Service', value: 'Food & Beverage' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/container-cafe-rooftop.jpeg', '/images/modular-campus-aerial-hero.png']
  },
  {
    id: 'modular-living-campus', title: 'Modular Living Campus', category: 'Hospitality', location: 'Site-specific', year: '2026', image: '/images/modular-campus-aerial-hero.png',
    description: 'A collection of independent modular suites arranged around shared landscape, giving each guest privacy while creating a connected destination.',
    challenge: 'Balance repeatable construction with a setting that feels personal, grounded, and close to nature.', solution: 'Standardised modules are positioned around a central path network, allowing the site to grow in phases as demand changes.',
    materiality: 'Light modular volumes sit above the terrain, with timber decks and planted paths softening the edges between architecture and landscape.',
    technicalSpecs: [{ label: 'System', value: 'Repeatable Modules' }, { label: 'Growth', value: 'Phased Deployment' }, { label: 'Site Impact', value: 'Reduced Ground Works' }],
    details: [{ label: 'Type', value: 'Hospitality Campus' }, { label: 'Configuration', value: 'Multi-unit' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-home-garden.jpeg', '/images/modular-residence-pool-hero.png']
  },
  {
    id: 'forest-retreat-pods', title: 'Forest Retreat Pods', category: 'Hospitality', location: 'Site-specific', year: '2026', image: '/images/modular-campus-aerial-hero.png',
    description: 'A flexible retreat model that brings high-comfort, low-impact accommodation to landscape-led destinations.',
    challenge: 'Deliver comfortable guest suites without prolonged construction activity in sensitive natural settings.', solution: 'Prefabricated pods arrive largely complete, reducing build time and allowing the landscape to remain the focal point.',
    materiality: 'Durable modular panels, insulated glazing, and restrained exterior finishes create a robust all-season envelope.',
    technicalSpecs: [{ label: 'Build Method', value: 'Factory Finished' }, { label: 'Deployment', value: 'Low-disruption' }, { label: 'Envelope', value: 'High-performance Insulation' }],
    details: [{ label: 'Type', value: 'Retreat Pod' }, { label: 'Use', value: 'Short Stay' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-home-garden.jpeg', '/images/container-pool.jpeg']
  },
  {
    id: 'container-courtyard-cafe', title: 'Container Courtyard Café', category: 'Commercial', location: 'Site-specific', year: '2026', image: '/images/container-cafe-rooftop.jpeg',
    description: 'A compact café designed as a movable social hub, combining counter service below with a casual rooftop gathering space.',
    challenge: 'Fit front-of-house, storage, equipment, and accessible circulation into a small, transportable footprint.', solution: 'The layout uses the container structure as an organised shell, with opening façades that connect service directly to the courtyard.',
    materiality: 'Powder-coated metal, timber, planting, and simple industrial lighting give the module a welcoming public-facing finish.',
    technicalSpecs: [{ label: 'Base Unit', value: '40 ft Container' }, { label: 'Facade', value: 'Opening Service Hatch' }, { label: 'Mobility', value: 'Transport-ready' }],
    details: [{ label: 'Type', value: 'Commercial Module' }, { label: 'Use', value: 'Café & Events' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/container-cafe-rooftop.jpeg', '/images/container-pool.jpeg']
  },
  {
    id: 'courtyard-residence', title: 'Courtyard Residence', category: 'Residential', location: 'Site-specific', year: '2026', image: '/images/modular-residence-pool-hero.png',
    description: 'A two-level modular residence that brings living spaces, terrace, and pool together in a bright indoor-outdoor composition.',
    challenge: 'Achieve the amenity and presence of a custom home while retaining the speed and precision of modular construction.', solution: 'Stacked modules create distinct private and social levels, while generous glazing frames the garden and pool terrace.',
    materiality: 'Soft white cladding, dark window frames, glass balustrades, and water create a crisp contemporary palette.',
    technicalSpecs: [{ label: 'Configuration', value: 'Stacked Modules' }, { label: 'Outdoor Space', value: 'Terrace & Pool' }, { label: 'Delivery', value: 'Prefabricated Build' }],
    details: [{ label: 'Type', value: 'Family Residence' }, { label: 'Levels', value: 'Two Storeys' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/container-pool.jpeg', '/images/modular-home-garden.jpeg']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'modular-home-design', title: 'Modular Home Design',
    description: 'We design modern prefabricated homes that bring thoughtful planning, flexible layouts, and refined architecture into a faster build process.',
    features: ['Concept Planning', 'Module Configuration', 'Structural Coordination', '3D Visualization']
  },
  {
    id: 'commercial-container-spaces', title: 'Commercial Container Spaces',
    description: 'We turn container structures into memorable cafés, retail spaces, pop-ups, and hospitality venues designed for real operation.',
    features: ['Space Planning', 'Service Counter Design', 'Rooftop Terraces', 'Brand-ready Interiors']
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
