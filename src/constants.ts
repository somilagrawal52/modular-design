import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'modular-capsule-riverside-resort', title: 'Riverside Capsule Resort', category: 'Hospitality', location: 'Rishikesh, Uttarakhand, India', year: '2026', image: '/images/capsule-riverside-resort-hero.png',
    description: 'A riverside hospitality pair of compact E3 capsules that brings panoramic guest rooms to the edge of the Ganges without the footprint of a conventional resort wing.',
    challenge: 'Create an all-season destination beside a fast mountain river while keeping the built edge light, serviceable, and respectful of the natural terrain.',
    solution: 'Two factory-finished E3 capsules are set on slim independent supports and linked by a raised service bridge, with the guest fit-out completed before installation.',
    materiality: 'Smooth white shells, dark-framed curved glazing, pale oak interiors, stainless support frames, and river-stone thresholds balance a compact capsule language with the landscape.',
    technicalSpecs: [{ label: 'Capsule System', value: 'E3 Panoramic Capsule' }, { label: 'Configuration', value: 'Twin River Suites + Bridge' }, { label: 'Foundation', value: 'Raised Independent Supports' }],
    details: [{ label: 'Type', value: 'Riverside Capsule Hospitality' }, { label: 'Location', value: 'Rishikesh, Uttarakhand, India' }, { label: 'Status', value: 'Concept Ready' }],
    gallery: ['/images/capsule-riverside-resort-hero.png', '/images/capsule-riverside-resort-evening.png', '/images/capsule-riverside-resort-interior.png']
  },
  {
    id: 'modular-capsule-meadow-studio', title: 'Meadow Capsule Studio', category: 'Hospitality', location: 'Nainital, Uttarakhand, India', year: '2026', image: '/images/capsule-meadow-studio-hero.png',
    description: 'A compact panoramic capsule studio that creates a complete guest suite in a single factory-built volume, positioned lightly in a misty mountain meadow.',
    challenge: 'Deliver a premium one-key stay to a sloping landscape while protecting the open character of the meadow and keeping construction time short.',
    solution: 'The fully fitted capsule is lifted onto small independent supports with services pre-routed, then paired with a minimal deck and stone path after placement.',
    materiality: 'A white weatherproof composite shell, deep black panoramic glazing, warm oak interior panels, and a slim dark plinth make the unit feel refined without adding visual weight to the site.',
    technicalSpecs: [{ label: 'System', value: 'Compact Capsule Studio' }, { label: 'Foundation', value: 'Independent Micro-piers' }, { label: 'Envelope', value: 'Insulated Composite Shell' }],
    details: [{ label: 'Type', value: 'Mountain Capsule Hospitality' }, { label: 'Location', value: 'Nainital, Uttarakhand, India' }, { label: 'Status', value: 'Concept Ready' }],
    gallery: ['/images/capsule-meadow-studio-hero.png', '/images/capsule-meadow-studio-evening.png', '/images/capsule-meadow-studio-interior.png']
  },
  {
    id: 'modular-rounded-cabin-courtyard-village', title: 'Garden Cabin Courtyard Village', category: 'Hospitality', location: 'Bengaluru, Karnataka, India', year: '2026', image: '/images/garden-cabin-village-hero.png',
    description: 'A repeatable garden hospitality village that uses soft-cornered cabin suites to frame planted courtyards, private paths, and independent guest stays.',
    challenge: 'Create a compact multi-key destination with a calm residential feel, strong privacy, and a modular system that can expand in phases.',
    solution: 'Complete rounded-cabin suites are positioned around a shared garden court, with prefabricated interiors and services ready before installation so the landscape can remain the focus.',
    materiality: 'White powder-coated composite panels, rounded corners, black framed panoramic windows, pale oak interiors, dark plinths, and lush planting give the village its composed identity.',
    technicalSpecs: [{ label: 'System', value: 'Rounded Cabin Suite Modules' }, { label: 'Configuration', value: 'Four-key Courtyard Village' }, { label: 'Delivery', value: 'Factory-finished + Phased' }],
    details: [{ label: 'Type', value: 'Garden Cabin Hospitality' }, { label: 'Location', value: 'Bengaluru, Karnataka, India' }, { label: 'Status', value: 'Concept Ready' }],
    gallery: ['/images/garden-cabin-village-hero.png', '/images/garden-cabin-village-garden.png', '/images/garden-cabin-village-interior.png']
  },
  {
    id: 'modular-capsule-quarry-lake-retreat', title: 'Quarry Lake Capsule Retreat', category: 'Hospitality', location: 'Site-specific', year: '2026', image: '/images/capsule-lake-retreat-hero.jpeg',
    description: 'A waterside capsule retreat that pairs panoramic guest suites with a quiet boardwalk and a light-touch landscape strategy at the lake edge.',
    challenge: 'Create an immersive hospitality stay beside a sensitive water body without relying on heavy conventional construction.',
    solution: 'Factory-finished capsule suites arrive with interiors and services complete, then settle onto independent supports and connect through a compact timber circulation system.',
    materiality: 'White insulated composite shells, black panoramic glazing, warm oak interiors, and dark timber paths bring a precise contemporary finish to the tropical lake setting.',
    technicalSpecs: [{ label: 'System', value: 'Panoramic Capsule Suites' }, { label: 'Foundation', value: 'Light-touch Lake-edge Supports' }, { label: 'Envelope', value: 'Insulated Composite Shell' }],
    details: [{ label: 'Type', value: 'Lakeside Capsule Hospitality' }, { label: 'Location', value: 'Site-specific' }, { label: 'Status', value: 'Concept Ready' }],
    gallery: ['/images/capsule-lake-retreat-hero.jpeg', '/images/capsule-lake-retreat-evening.png', '/images/capsule-lake-retreat-interior.png']
  },
  {
    id: 'modular-capsule-mountain-panorama-suite', title: 'Mountain Panorama Capsule Suite', category: 'Hospitality', location: 'Himalayan Ridge, India', year: '2026', image: '/images/capsule-mountain-suite-hero.jpeg',
    description: 'A self-contained mountain suite that frames long ridge views through faceted panoramic glazing while keeping installation compact and reversible.',
    challenge: 'Deliver an all-season guest room to a remote ridge without sacrificing the wide views that make the site special.',
    solution: 'A finished single capsule arrives as one transportable unit, with services pre-routed and a small entry deck assembled only after placement on the ridge.',
    materiality: 'White aluminium-composite panels, deep black window frames, integrated rooflight, pale interiors, and a low timber threshold keep the cabin crisp against the landscape.',
    technicalSpecs: [{ label: 'System', value: 'Panoramic Capsule Suite' }, { label: 'Foundation', value: 'Screw-pile Supports' }, { label: 'Climate', value: 'High-altitude Thermal Envelope' }],
    details: [{ label: 'Type', value: 'Mountain Capsule Hospitality' }, { label: 'Location', value: 'Himalayan Ridge, India' }, { label: 'Status', value: 'Concept Ready' }],
    gallery: ['/images/capsule-mountain-suite-hero.jpeg', '/images/capsule-mountain-suite-panorama.png', '/images/capsule-mountain-suite-interior.jpeg']
  },
  {
    id: 'modular-capsule-hillside-lodge', title: 'Hillside Capsule Lodge', category: 'Hospitality', location: 'Himalayan Foothills, India', year: '2026', image: '/images/capsule-hillside-lodge-hero.jpeg',
    description: 'An elevated hillside lodge made from sculpted capsule suites, lifting guests above meadow planting for wide valley views and minimal ground impact.',
    challenge: 'Place premium suites on a sloping, planted site while avoiding major excavation and retaining the character of the hillside.',
    solution: 'Finished cabins are crane-set onto slender independent steel supports, with short decks and compact paths following the contours between existing planting.',
    materiality: 'Rounded white shells, deep black panoramic glazing, slim steel supports, warm oak interiors, stone retaining edges, and meadow planting make the system feel light on the land.',
    technicalSpecs: [{ label: 'System', value: 'Elevated Capsule Lodges' }, { label: 'Foundation', value: 'Independent Steel Pier Supports' }, { label: 'Glazing', value: 'Panoramic Low-E Glass' }],
    details: [{ label: 'Type', value: 'Hillside Capsule Hospitality' }, { label: 'Location', value: 'Himalayan Foothills, India' }, { label: 'Status', value: 'Concept Ready' }],
    gallery: ['/images/capsule-hillside-lodge-hero.jpeg', '/images/capsule-hillside-lodge-garden.png', '/images/capsule-hillside-lodge-interior.png']
  },
  {
    id: 'modular-capsule-rounded-garden-suite', title: 'Rounded Garden Cabin Suite', category: 'Residential', location: 'Site-specific', year: '2026', image: '/images/capsule-rounded-garden-suite-hero.jpeg',
    description: 'A bright garden residence built from soft-cornered cabin modules, combining compact living, deep panoramic glazing, and a precise landscaped setting.',
    challenge: 'Make a compact prefabricated home feel open to the garden while preserving privacy, day-to-day storage, and a refined interior finish.',
    solution: 'Two transportable cabin modules are positioned around a planted path, with the interior fit-out complete before delivery and the landscape finished around the installed units.',
    materiality: 'White powder-coated panels, black framed glass, pale oak cabinetry, soft interior lighting, and planted garden edges create a clean, durable garden residence.',
    technicalSpecs: [{ label: 'System', value: 'Rounded Cabin Modules' }, { label: 'Foundation', value: 'Compact Pad Foundations' }, { label: 'Facade', value: 'Panoramic Insulated Glazing' }],
    details: [{ label: 'Type', value: 'Garden Modular Residence' }, { label: 'Location', value: 'Site-specific' }, { label: 'Status', value: 'Concept Ready' }],
    gallery: ['/images/capsule-rounded-garden-suite-hero.jpeg', '/images/capsule-rounded-garden-suite-exterior.jpeg', '/images/capsule-rounded-garden-suite-interior.png']
  },
  {
    id: 'modular-capsule-coastal-resort', title: 'Coastal Capsule Resort', category: 'Hospitality', location: 'Konkan Coast, India', year: '2026', image: '/images/capsule-coastal-resort-hero.jpeg',
    description: 'A coastal hospitality campus of faceted white-and-black capsule suites, each positioned for sea views, timber decks, and a memorable guest arrival.',
    challenge: 'Create a high-impact seaside resort identity while using a modular system that can be deployed in phases along a sensitive coast.',
    solution: 'Prefinished capsule suites are set on compact elevated foundations and linked by a shared waterside path, allowing individual rooms and deck zones to grow with the resort.',
    materiality: 'Marine-grade white composite panels, black framed glazing, warm timber decks, integrated shading, and calm oak interiors suit the salt-air setting without losing the futuristic capsule character.',
    technicalSpecs: [{ label: 'System', value: 'Faceted Capsule Suites' }, { label: 'Foundation', value: 'Raised Coastal Deck Supports' }, { label: 'Envelope', value: 'Marine-grade Composite Shell' }],
    details: [{ label: 'Type', value: 'Coastal Capsule Hospitality' }, { label: 'Location', value: 'Konkan Coast, India' }, { label: 'Status', value: 'Concept Ready' }],
    gallery: ['/images/capsule-coastal-resort-hero.jpeg', '/images/capsule-coastal-resort-gallery.jpeg', '/images/capsule-coastal-resort-interior.png']
  },
  {
    id: 'garden-pavilion', title: 'Garden Pavilion', category: 'Residential', location: 'Site-specific', year: '2026', image: '/images/modular-home-garden-hero.jpg',
    description: 'A compact prefabricated residence designed to settle lightly into a landscaped garden, pairing panoramic glazing with a calm, efficient living plan.',
    challenge: 'Create a fully finished home with minimal on-site disruption and a strong connection to the landscape.', solution: 'The residence is assembled from precision-built modules, then placed on a light-touch foundation with services integrated before arrival.',
    materiality: 'A crisp white modular shell, low-iron glazing, and warm planting textures give the home a quiet, contemporary character.',
    technicalSpecs: [{ label: 'Construction', value: 'Off-site Modular' }, { label: 'Foundation', value: 'Light-touch Supports' }, { label: 'Glazing', value: 'Panoramic Insulated Glass' }],
    details: [{ label: 'Type', value: 'Modular Residence' }, { label: 'Delivery', value: 'Turnkey Module' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-home-garden-hero.jpg', '/images/garden-pavilion-interior.png']
  },
  {
    id: 'modular-restaurant', title: 'Modular Restaurant', category: 'Commercial', location: 'Site-specific', year: '2026', image: '/images/modular-restaurant-realistic.jpg',
    description: 'A practical modular restaurant that combines a transportable kitchen, customer seating, and efficient service windows in one compact build.',
    challenge: 'Create a full café operation with a memorable guest experience in a small, rapidly deployable footprint.', solution: 'The bar, kitchen, storage, opening façade, and planted terrace are organised as a complete modular hospitality system.',
    materiality: 'Refined metal cladding, warm timber, glass, and abundant planting give the café a relaxed, premium character.',
    technicalSpecs: [{ label: 'Format', value: 'Modular Hospitality' }, { label: 'Service', value: 'Restaurant' }, { label: 'Setup', value: 'Rapid Installation' }],
    details: [{ label: 'Type', value: 'Restaurant Module' }, { label: 'Experience', value: 'Indoor-Outdoor Dining' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-restaurant-realistic.jpg', '/images/modular-restaurant-interior.png', '/images/modular-restaurant-terrace.png']
  },
  {
    id: 'modular-living-campus', title: 'Modular Living Campus', category: 'Hospitality', location: 'Site-specific', year: '2026', image: '/images/modular-campus-aerial-hero.jpg',
    description: 'A collection of independent modular suites arranged around shared landscape, giving each guest privacy while creating a connected destination.',
    challenge: 'Balance repeatable construction with a setting that feels personal, grounded, and close to nature.', solution: 'Standardised modules are positioned around a central path network, allowing the site to grow in phases as demand changes.',
    materiality: 'Light modular volumes sit above the terrain, with timber decks and planted paths softening the edges between architecture and landscape.',
    technicalSpecs: [{ label: 'System', value: 'Repeatable Modules' }, { label: 'Growth', value: 'Phased Deployment' }, { label: 'Site Impact', value: 'Reduced Ground Works' }],
    details: [{ label: 'Type', value: 'Hospitality Campus' }, { label: 'Configuration', value: 'Multi-unit' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-campus-aerial-hero.jpg', '/images/modular-campus-suite.png', '/images/modular-campus-reception.png']
  },
  {
    id: 'modular-capsule-backwater-retreat', title: 'Modular Capsule Backwater Retreat', category: 'Hospitality', location: 'Kerala Backwaters, India', year: '2026', image: '/images/modular-capsule-backwater-retreat-hero.png',
    description: 'A water-facing hospitality retreat composed of compact E3 capsule suites, pairing panoramic guest rooms with low-impact foundations and a phased modular delivery strategy.',
    challenge: 'Create a memorable backwater stay that feels close to the landscape while avoiding heavy, disruptive construction at the water’s edge.',
    solution: 'Factory-finished E3 capsules arrive with interiors, services, and panoramic glazing complete, then are positioned on slender piers and linked by a raised timber boardwalk. The system can grow suite by suite as demand increases.',
    materiality: 'Smooth white E3 shells, dark rounded panoramic glazing, pale-wood interiors, teak-lined reveals, and quiet dark-metal details create a durable response to the tropical setting.',
    technicalSpecs: [{ label: 'Capsule System', value: 'E3 Panoramic Capsule' }, { label: 'Foundation', value: 'Low-impact Pier Supports' }, { label: 'Delivery', value: 'Factory-finished + Phased' }],
    details: [{ label: 'Type', value: 'Capsule Hospitality' }, { label: 'Region', value: 'Kerala Backwaters, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-backwater-retreat-hero.png', '/images/modular-capsule-backwater-retreat-interior.png', '/images/modular-capsule-backwater-retreat-installation.png']
  },
  {
    id: 'modular-capsule-forest-retreat', title: 'Modular Capsule Forest Retreat', category: 'Hospitality', location: 'Coorg, Karnataka, India', year: '2026', image: '/images/modular-capsule-forest-retreat-hero-v2.png',
    description: 'A low-impact forest stay made from elevated E3 capsule suites, combining private canopy views with a repeatable modular hospitality system.',
    challenge: 'Place premium guest rooms across a planted hillside without extensive excavation or disturbance to the coffee-estate landscape.',
    solution: 'Factory-complete capsules are lifted onto independent pier supports and joined by light timber paths, allowing installation to move around mature planting and expand in measured phases.',
    materiality: 'White E3 shells, dark-framed panoramic glazing, compact oak-lined interiors, dark metal connections, and rain-ready timber decks keep the experience refined and resilient.',
    technicalSpecs: [{ label: 'Capsule System', value: 'E3 Panoramic Capsule' }, { label: 'Accommodation', value: '4 Capsule Guest Suites' }, { label: 'Foundation', value: 'Independent Pier Supports' }],
    details: [{ label: 'Type', value: 'Forest Capsule Hospitality' }, { label: 'Region', value: 'Coorg, Karnataka, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-forest-retreat-hero-v2.png', '/images/modular-capsule-forest-retreat-interior-v2.png', '/images/modular-capsule-forest-retreat-installation-v2.png']
  },
  {
    id: 'modular-capsule-desert-retreat', title: 'Modular Capsule Desert Retreat', category: 'Hospitality', location: 'Jaisalmer, Rajasthan, India', year: '2026', image: '/images/modular-capsule-desert-retreat-hero.png',
    description: 'A compact E3 capsule retreat that brings panoramic guest suites to the Thar landscape through a transportable and phased modular system.',
    challenge: 'Create a premium desert experience that can withstand heat, sand, and open exposure while keeping permanent ground works to a minimum.',
    solution: 'Pre-finished E3 capsule modules are aligned on raised pier pads and connected by a low-impact boardwalk, with service zones integrated before delivery.',
    materiality: 'Smooth white E3 shells, dark rounded panoramic glazing, timber privacy screens, and durable raised decks bring a crisp counterpoint to the desert palette.',
    technicalSpecs: [{ label: 'Capsule System', value: 'E3 Panoramic Capsule' }, { label: 'Foundation', value: 'Raised Pier Pads' }, { label: 'Climate', value: 'Heat + Sand-ready Envelope' }],
    details: [{ label: 'Type', value: 'Desert Capsule Hospitality' }, { label: 'Region', value: 'Jaisalmer, Rajasthan, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-desert-retreat-hero.png', '/images/modular-capsule-desert-retreat-interior.png', '/images/modular-capsule-desert-retreat-installation.png']
  },
  {
    id: 'modular-capsule-alpine-retreat', title: 'Modular Capsule Alpine Retreat', category: 'Hospitality', location: 'Manali, Himachal Pradesh, India', year: '2026', image: '/images/modular-capsule-alpine-retreat-hero.png',
    description: 'A panoramic A50 capsule retreat that places guest rooms across a Himalayan slope with minimal permanent construction.',
    challenge: 'Deliver warm, comfortable accommodation on steep mountain terrain while limiting road work, earth movement, and impact on the forested site.',
    solution: 'Transport-ready A50 Ultra modules arrive complete with interior finishes and high-performance glazing, then are set onto stepped pier foundations and connected by a lightweight cedar boardwalk.',
    materiality: 'Pale grey and white A50 Ultra shells, dark rounded glazing, cedar-lined reveals, wool-rich interiors, and weathered timber paths bring warmth to a high-altitude setting.',
    technicalSpecs: [{ label: 'Capsule System', value: 'A50 Panoramic Capsule' }, { label: 'Foundation', value: 'Stepped Pier Supports' }, { label: 'Delivery', value: 'Transport-ready Volumes' }],
    details: [{ label: 'Type', value: 'Alpine Capsule Hospitality' }, { label: 'Region', value: 'Manali, Himachal Pradesh, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-alpine-retreat-hero.png', '/images/modular-capsule-alpine-retreat-interior.png', '/images/modular-capsule-alpine-retreat-installation.png']
  },
  {
    id: 'modular-capsule-tea-estate-retreat', title: 'Modular Capsule Tea Estate Retreat', category: 'Hospitality', location: 'Munnar, Kerala, India', year: '2026', image: '/images/modular-capsule-tea-estate-retreat-hero-v2.png',
    description: 'An E8 capsule hospitality retreat that steps gently through Munnar’s tea landscape, pairing misty hillside views with a repeatable, low-impact modular system.',
    challenge: 'Add premium guest accommodation to a planted tea-estate slope while preserving drainage, mature trees, and the layered views that define the setting.',
    solution: 'Factory-finished capsules are lifted onto independent supports and linked by narrow timber paths, allowing each suite to follow the contours of the hillside without heavy excavation.',
    materiality: 'White E8 shells, black geometric frame details, timber-lined interiors, and rain-ready decks establish a crisp capsule language across a humid mountain climate.',
    technicalSpecs: [{ label: 'Capsule System', value: 'E8 Panoramic Capsule' }, { label: 'Accommodation', value: '4 Capsule Guest Suites' }, { label: 'Foundation', value: 'Independent Pier Supports' }],
    details: [{ label: 'Type', value: 'Tea Estate Capsule Hospitality' }, { label: 'Region', value: 'Munnar, Kerala, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-tea-estate-retreat-hero-v2.png', '/images/modular-capsule-tea-estate-retreat-interior-v2.png', '/images/modular-capsule-tea-estate-retreat-installation-v2.png']
  },
  {
    id: 'modular-capsule-island-retreat', title: 'Modular Capsule Island Retreat', category: 'Hospitality', location: 'Havelock Island, Andaman & Nicobar, India', year: '2026', image: '/images/modular-capsule-island-retreat-hero-v2.png',
    description: 'A small island retreat of raised floating-house capsule suites, placing panoramic coastal rooms within palms and native planting without overbuilding the shoreline.',
    challenge: 'Deliver a premium beach stay that respects the sand, coastal planting, and tropical exposure of a sensitive island site.',
    solution: 'Compact off-site volumes arrive with interiors complete, then sit on short adjustable supports behind the beach and connect through a raised timber path that protects the ground below.',
    materiality: 'White arched capsule shells, curved blue-black glazing, teak interiors, dark marine-grade trim, and shaded decks carry the capsule system into a tropical coastal setting.',
    technicalSpecs: [{ label: 'Capsule System', value: 'Floating-House Capsule' }, { label: 'Foundation', value: 'Adjustable Raised Supports' }, { label: 'Climate', value: 'Tropical + Coastal-ready' }],
    details: [{ label: 'Type', value: 'Island Capsule Hospitality' }, { label: 'Region', value: 'Havelock Island, Andaman & Nicobar, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-island-retreat-hero-v2.png', '/images/modular-capsule-island-retreat-interior-v2.png', '/images/modular-capsule-island-retreat-installation-v2.png']
  },
  {
    id: 'modular-capsule-lake-retreat', title: 'Modular Capsule Lake Retreat', category: 'Hospitality', location: 'Nainital, Uttarakhand, India', year: '2026', image: '/images/modular-capsule-lake-retreat-hero.png',
    description: 'A lake-facing E3 capsule retreat that steps through a wooded Nainital slope, combining panoramic rooms with minimal permanent construction.',
    challenge: 'Create comfortable, view-led accommodation on steep lakeside terrain while avoiding extensive earthworks and keeping access routes light.',
    solution: 'Transport-ready E3 suites are carefully lifted to stepped pier supports and linked by a lightweight boardwalk, allowing a phased build that protects the slope and frames the lake.',
    materiality: 'Smooth white E3 shells, dark rounded panoramic glazing, oak interiors, charcoal metal frames, and timber decks keep the collection cohesive in a mountain-lake setting.',
    technicalSpecs: [{ label: 'Capsule System', value: 'E3 Panoramic Capsule' }, { label: 'Foundation', value: 'Stepped Pier Supports' }, { label: 'Delivery', value: 'Phased Hillside Installation' }],
    details: [{ label: 'Type', value: 'Lake Capsule Hospitality' }, { label: 'Region', value: 'Nainital, Uttarakhand, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-lake-retreat-hero.png', '/images/modular-capsule-lake-retreat-interior.png', '/images/modular-capsule-lake-retreat-installation.png']
  },
  {
    id: 'modular-capsule-courtyard-residence', title: 'Modular Capsule Courtyard Residence', category: 'Residential', location: 'India', year: '2026', image: '/images/modular-capsule-courtyard-residence-hero-v2.png',
    description: 'A family residence built around two compact capsule homes and a sheltered communal pavilion, combining a planted courtyard with straightforward off-site delivery.',
    challenge: 'Create a warm, permanent-feeling family home from transportable volumes while keeping garden space and outdoor living at the centre of daily life.',
    solution: 'Two factory-finished E3-based homes sit around a light timber-and-glass pavilion, forming a protected courtyard that can grow with an additional room module when needed.',
    materiality: 'White E3-style insulated shells, curved black-framed glazing, oak interiors, simple dark supports, and planted edges establish a durable residential language.',
    technicalSpecs: [{ label: 'Capsule System', value: 'E3 Panoramic Capsule' }, { label: 'Foundation', value: 'Low Plinth + Adjustable Supports' }, { label: 'Growth', value: 'Add-on Room Module' }],
    details: [{ label: 'Type', value: 'Capsule Family Residence' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-courtyard-residence-hero-v2.png', '/images/modular-capsule-courtyard-residence-interior-v2.png', '/images/modular-capsule-courtyard-residence-installation-v2.png']
  },
  {
    id: 'modular-capsule-coworking-studio', title: 'Modular Capsule Co-working Studio', category: 'Workplace', location: 'India', year: '2026', image: '/images/modular-capsule-coworking-studio-hero-v2.png',
    description: 'An expandable work cluster of connected capsule modules, with open desks, meeting rooms, and a shared outdoor work court.',
    challenge: 'Create a premium, flexible workplace that can be installed quickly and expanded without interrupting the working day.',
    solution: 'Four factory-built E8-based work modules connect around a simple landscaped deck, separating focused spaces from social work zones while retaining a clear plug-in route for future modules.',
    materiality: 'White E8-style shells, panoramic black-framed glazing, oak work surfaces, acoustic lining, simple dark steel, and a timber courtyard deck create a durable, productive setting.',
    technicalSpecs: [{ label: 'Capsule System', value: 'E8 Panoramic Capsule' }, { label: 'Workplace', value: 'Desks + Meeting Rooms' }, { label: 'Growth', value: 'Plug-in Module Expansion' }],
    details: [{ label: 'Type', value: 'Capsule Co-working Studio' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-coworking-studio-hero-v2.png', '/images/modular-capsule-coworking-studio-interior-v2.png', '/images/modular-capsule-coworking-studio-installation-v2.png']
  },
  {
    id: 'modular-capsule-wellness-pavilion', title: 'Modular Capsule Wellness Pavilion', category: 'Amenities', location: 'India', year: '2026', image: '/images/modular-capsule-wellness-pavilion-hero-v2.png',
    description: 'A tranquil wellness cluster for movement, recovery, and hydrotherapy, arranged as three simple cabins around a planted water court.',
    challenge: 'Deliver a calm, amenity-rich destination with the smallest possible construction impact and a finish that feels considered rather than temporary.',
    solution: 'Factory-finished arched movement and spa cabins gather around a sheltered deck, allowing low-impact phased installation with services integrated into each module.',
    materiality: 'White arched floating-house-style shells, dark rounded glazing, pale oak interiors, simple steel supports, stone-edged planting, and timber decks support a quiet wellness atmosphere.',
    technicalSpecs: [{ label: 'Capsule System', value: 'Floating-House Capsule' }, { label: 'Use', value: 'Yoga + Hydrotherapy' }, { label: 'Delivery', value: 'Low-impact Installation' }],
    details: [{ label: 'Type', value: 'Capsule Wellness Amenity' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-wellness-pavilion-hero-v2.png', '/images/modular-capsule-wellness-pavilion-interior-v2.png', '/images/modular-capsule-wellness-pavilion-installation-v2.png']
  },
  {
    id: 'modular-capsule-visitor-gateway', title: 'Modular Capsule Visitor Gateway', category: 'Community', location: 'India', year: '2026', image: '/images/modular-capsule-visitor-gateway-hero.png',
    description: 'A low-impact arrival hub for natural destinations, bringing orientation, public amenities, and sheltered gathering space together in a repeatable A50 capsule system.',
    challenge: 'Create an inviting visitor facility in a sensitive landscape while reducing permanent construction, protecting trees, and allowing the destination to grow in phases.',
    solution: 'Three factory-built A50 Ultra modules link by a raised timber boardwalk, separating the orientation lounge, accessible amenity, and gathering room while keeping the landscape continuous below.',
    materiality: 'Pale grey and white A50 Ultra shells, wide dark rounded glazing, oak display finishes, timber walkways, and stone-edged planting sit quietly within the setting.',
    technicalSpecs: [{ label: 'Capsule System', value: 'A50 Panoramic Capsule' }, { label: 'Programme', value: 'Orientation + Public Amenity' }, { label: 'Foundation', value: 'Raised Adjustable Supports' }],
    details: [{ label: 'Type', value: 'Visitor Information Gateway' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-visitor-gateway-hero.png', '/images/modular-capsule-visitor-gateway-interior.png', '/images/modular-capsule-visitor-gateway-installation.png']
  },
  {
    id: 'modular-capsule-micro-library-hub', title: 'Modular Capsule Micro-library Hub', category: 'Community', location: 'India', year: '2026', image: '/images/modular-capsule-micro-library-hub-hero-v2.png',
    description: 'A compact civic reading and gathering place that pairs a glazed modular library with a flexible community room and timber outdoor reading terrace.',
    challenge: 'Give neighbourhoods a welcoming, high-quality learning space without the cost and construction impact of a conventional civic building.',
    solution: 'Two factory-finished OT11-based modules link to a generous timber step and garden deck, providing a book-lined reading room alongside a flexible space for quiet events and small groups.',
    materiality: 'White weatherproof shells, continuous dark glazing, oak bookshelves, simple acoustic lining, durable seating, timber flooring, and planted stone edges define a calm civic interior.',
    technicalSpecs: [{ label: 'Capsule System', value: 'OT11 Civic Capsule' }, { label: 'Programme', value: 'Reading + Community Room' }, { label: 'Foundation', value: 'Low Adjustable Supports' }],
    details: [{ label: 'Type', value: 'Micro-library & Community Hub' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-micro-library-hub-hero-v2.png', '/images/modular-capsule-micro-library-hub-interior-v2.png', '/images/modular-capsule-micro-library-hub-installation-v2.png']
  },
  {
    id: 'modular-capsule-desert-adventure-lodge', title: 'Modular Capsule Desert Adventure Lodge', category: 'Hospitality', location: 'Rajasthan, India', year: '2026', image: '/images/modular-capsule-desert-adventure-lodge-hero.png',
    description: 'A climate-ready adventure lodge that uses E3 capsule guest suites and a shared shaded courtyard to create a durable, low-impact desert stay.',
    challenge: 'Give guests a comfortable, memorable base in a hot and fragile landscape without relying on heavy construction, standard tents, or a fixed resort footprint.',
    solution: 'Four factory-built E3 capsules establish private suites around a protected communal court, with deep shade, light-touch supports, and timber walkways that make phased installation and relocation practical.',
    materiality: 'Smooth white E3 shells, dark rounded panoramic glazing, oak interiors, woven shade layers, local stone, and native desert planting create a grounded hospitality palette.',
    technicalSpecs: [{ label: 'Capsule System', value: 'E3 Panoramic Capsule' }, { label: 'Climate', value: 'Desert-ready Envelope' }, { label: 'Site Strategy', value: 'Light-touch Foundations' }],
    details: [{ label: 'Type', value: 'Capsule Desert Adventure Lodge' }, { label: 'Region', value: 'Rajasthan, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-desert-adventure-lodge-hero.png', '/images/modular-capsule-desert-adventure-lodge-interior.png', '/images/modular-capsule-desert-adventure-lodge-installation.png']
  },
  {
    id: 'modular-capsule-mountain-trail-basecamp', title: 'Modular Capsule Mountain Trail Basecamp', category: 'Hospitality', location: 'Himachal Pradesh, India', year: '2026', image: '/images/modular-capsule-mountain-trail-basecamp-hero.png',
    description: 'A robust mountain basecamp formed from stackable A50 capsule modules, combining gear storage, warm gathering space, and a sheltered terrace at the start of a trail network.',
    challenge: 'Provide a dependable visitor base in a remote mountain setting while reducing construction disruption and avoiding the temporary look of an ordinary trail cabin.',
    solution: 'Three A50 Ultra modules form a clear arrival sequence of gear lounge, shared refreshment space, and flexible accommodation, with elevated bridge components extending the compact stone-terrace basecamp.',
    materiality: 'Pale grey and white insulated shells, dark rounded glazing, white external stairs, oak storage and benches, durable rubber flooring, local stone, and weathered timber meet a demanding mountain climate.',
    technicalSpecs: [{ label: 'Capsule System', value: 'A50 Panoramic Capsule' }, { label: 'Configuration', value: '3 Stackable Basecamp Modules' }, { label: 'Programme', value: 'Gear + Gathering + Stay' }],
    details: [{ label: 'Type', value: 'Capsule Mountain Trail Basecamp' }, { label: 'Region', value: 'Himachal Pradesh, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-mountain-trail-basecamp-hero.png', '/images/modular-capsule-mountain-trail-basecamp-interior.png', '/images/modular-capsule-mountain-trail-basecamp-installation.png']
  },
  {
    id: 'modular-rooftop-bar', title: 'Modular Café & Bar', category: 'Commercial', location: 'Site-specific', year: '2026', image: '/images/container-cafe-rooftop.jpeg',
    description: 'A café and bar built from a shipping-container shell, with a rooftop terrace that makes the modular structure visible and useful.',
    challenge: 'Deliver a high-impact bar experience that can be installed as a compact, self-contained hospitality destination.', solution: 'The modular build integrates the bar, back-of-house, lighting, and terrace edge into a single transport-ready configuration.',
    materiality: 'Dark metal, warm timber, soft lighting, and planted borders create a refined atmosphere after sunset.',
    technicalSpecs: [{ label: 'Format', value: 'Rooftop Module' }, { label: 'Service', value: 'Bar & Events' }, { label: 'Lighting', value: 'Integrated Ambient System' }],
    details: [{ label: 'Type', value: 'Hospitality Module' }, { label: 'Use', value: 'Bar & Events' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/container-cafe-rooftop.jpeg', '/images/modular-rooftop-bar-interior.png']
  },
  {
    id: 'modular-office', title: 'Modular Office', category: 'Workplace', location: 'Bengaluru Region, India', year: '2026', image: '/images/modular-office-india-exterior.jpg',
    description: 'A permanent-quality two-storey workplace assembled from six prefabricated office modules, combining rapid installation with shaded, comfortable spaces for an Indian climate.',
    challenge: 'Create a professional office that can be delivered quickly, expand with the business, and avoid the temporary appearance associated with portable site cabins.',
    solution: 'Six factory-finished modules form a clear two-storey structural grid around a glazed entrance, with bolted connections, external circulation, solar shading, and flexible internal work bays.',
    materiality: 'Charcoal steel frames and off-white insulated panels express the modular system, while terracotta perforated screens, warm soffits, and native planting give the workplace a grounded regional character.',
    technicalSpecs: [{ label: 'Configuration', value: '6 Stacked Modules' }, { label: 'Workplace', value: 'Open Office + Meeting Rooms' }, { label: 'Energy', value: 'Solar + Passive Shading' }],
    details: [{ label: 'Type', value: 'Modular Workplace' }, { label: 'Region', value: 'Bengaluru, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-office-india-exterior.jpg', '/images/modular-office-india-interior.jpg', '/images/modular-office-india-installation.jpg']
  },
  { id: 'modular-office-campus', title: 'Modular Office Campus', category: 'Workplace', location: 'India', year: '2026', image: '/images/modular-office-campus-hero.png', description: 'An expandable modular office campus with connected workspaces, meeting rooms, and shaded arrival courts.', details: [{ label: 'Type', value: 'Office Campus' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-office-campus-hero.png', '/images/modular-office-campus-workspace.png', '/images/modular-office-campus-entry.png'] },
  { id: 'modular-coworking-hub', title: 'Modular Co-working Hub', category: 'Workplace', location: 'India', year: '2026', image: '/images/modular-coworking-hub-hero.png', description: 'A flexible workplace hub with open desks, focused meeting rooms, and shaded breakout space.', details: [{ label: 'Type', value: 'Co-working Workplace' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-coworking-hub-hero.png', '/images/modular-coworking-hub-workspace.png', '/images/modular-coworking-hub-meeting.png'] },
  { id: 'modular-rooftop-restaurant', title: 'Modular Rooftop Restaurant', category: 'Commercial', location: 'India', year: '2026', image: '/images/modular-rooftop-restaurant-hero.png', description: 'A glass-and-steel modular restaurant designed for compact urban rooftops.', details: [{ label: 'Type', value: 'Rooftop Restaurant' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-rooftop-restaurant-hero.png', '/images/modular-rooftop-restaurant-interior.png', '/images/modular-rooftop-restaurant-terrace.png'] },
  { id: 'modular-forest-cafe', title: 'Modular Forest Café', category: 'Commercial', location: 'India', year: '2026', image: '/images/forest-cafe-hero.png', description: 'A low-impact modular café that connects warm interior service spaces with a forest deck.', details: [{ label: 'Type', value: 'Forest Café Module' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/forest-cafe-hero.png', '/images/forest-cafe-interior.png', '/images/forest-cafe-deck.png'] },
  { id: 'darjeeling-tea-cafe', title: 'Darjeeling Tea Café', category: 'Commercial', location: 'Darjeeling, India', year: '2026', image: '/images/darjeeling-tea-cafe.png', description: 'A compact modular tea café with warm timber interiors and misty hillside views.', details: [{ label: 'Type', value: 'Café Module' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/darjeeling-tea-cafe.png', '/images/darjeeling-tea-cafe-interior.png', '/images/darjeeling-tea-cafe-terrace.png'] },
  { id: 'darjeeling-tea-pavilion', title: 'Darjeeling Tea Pavilion', category: 'Hospitality', location: 'Darjeeling, India', year: '2026', image: '/images/darjeeling-tea-pavilion.png', description: 'A compact modular tea pavilion with one guest suite, framed by misty hillside views.', details: [{ label: 'Type', value: 'Tea Pavilion' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/darjeeling-tea-pavilion.png', '/images/darjeeling-tea-pavilion-gallery.png', '/images/darjeeling-tea-pavilion-detail.png'] },
  { id: 'manali-mountain-cafe', title: 'Manali Mountain Café', category: 'Commercial', location: 'Manali, Himachal Pradesh, India', year: '2026', image: '/images/manali-mountain-cafe.png', description: 'A compact modular café with warm interiors and panoramic mountain views.', details: [{ label: 'Type', value: 'Café Module' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/manali-mountain-cafe.png', '/images/manali-mountain-cafe-gallery.png', '/images/manali-mountain-cafe-detail.png'] },
  { id: 'coorg-forest-retreat', title: 'Coorg Forest Retreat', category: 'Hospitality', location: 'Coorg, Karnataka, India', year: '2026', image: '/images/coorg-forest-retreat-hero.png', description: 'A low-impact modular retreat of timber-and-glass suites set among coffee estate planting and misty hills.', details: [{ label: 'Type', value: 'Forest Hospitality' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/coorg-forest-retreat-hero.png', '/images/coorg-forest-retreat-terrace.png', '/images/coorg-forest-retreat-interior.png'] },
  { id: 'modular-gym', title: 'Modular Gym', category: 'Amenities', location: 'Site-specific', year: '2026', image: '/images/modular-gym.jpg', description: 'A practical prefabricated fitness studio for communities, hotels, and workplaces.', details: [{ label: 'Type', value: 'Fitness' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-gym.jpg'] },
  {
    id: 'capsule-forest-spa-suite', title: 'Capsule Forest Spa Suite', category: 'Hospitality', location: 'Coorg, Karnataka, India', year: '2026', image: '/images/capsule-showcase/capsule-forest-spa-retreat.png',
    description: 'A secluded forest spa suite that pairs a panoramic capsule room with a sunken fire-circle lounge and a low-impact timber terrace.',
    challenge: 'Create a calm, high-comfort guest suite that feels immersed in dense forest while keeping its installation light on the site.',
    solution: 'The capsule is crane-set onto discrete supports before a dark timber deck, planted edges, and outdoor lounge are completed around it.',
    materiality: 'White aluminium, dark glazing, pale oak joinery, teak decking, woven upholstery, and layered tropical planting create a warm, quiet retreat.',
    technicalSpecs: [{ label: 'Capsule Reference', value: 'Panoramic E6-style Form' }, { label: 'Programme', value: 'Suite + Spa Lounge' }, { label: 'Foundation', value: 'Low-impact Supports' }],
    details: [{ label: 'Type', value: 'Forest Capsule Suite' }, { label: 'Region', value: 'Coorg, India' }, { label: 'Status', value: 'Design Showcase' }],
    gallery: ['/images/capsule-showcase/capsule-forest-spa-retreat.png', '/images/capsule-showcase/capsule-forest-spa-installation.png', '/images/capsule-showcase/capsule-forest-spa-interior.png']
  },
  {
    id: 'capsule-alpine-lake-lodge', title: 'Capsule Alpine Lake Lodge', category: 'Hospitality', location: 'Himachal Pradesh, India', year: '2026', image: '/images/capsule-showcase/capsule-alpine-lake-lodge.png',
    description: 'A long panoramic capsule lodge overlooking an alpine lake, with an outdoor conversation deck designed for slow evenings by the water.',
    challenge: 'Give a prefabricated hospitality room a strong relationship to a dramatic lakeside setting without overwhelming the landscape.',
    solution: 'The capsule is placed first on a compact lakeshore foundation, followed by a stepped timber deck and low lounge furniture that frame the view.',
    materiality: 'Matte white aluminium, black-framed glazing, charcoal timber, warm wool upholstery, natural stone, and subtle lakeside lighting create a refined alpine atmosphere.',
    technicalSpecs: [{ label: 'Capsule Reference', value: 'Long Panoramic K70-style Form' }, { label: 'Programme', value: 'Lodge + Lakeside Lounge' }, { label: 'Foundation', value: 'Compact Lakeshore Base' }],
    details: [{ label: 'Type', value: 'Alpine Capsule Lodge' }, { label: 'Region', value: 'Himachal Pradesh, India' }, { label: 'Status', value: 'Design Showcase' }],
    gallery: ['/images/capsule-showcase/capsule-alpine-lake-lodge.png', '/images/capsule-showcase/capsule-alpine-lake-installation.png', '/images/capsule-showcase/capsule-alpine-lake-interior.png']
  },
  {
    id: 'capsule-desert-stargazing-suite', title: 'Capsule Desert Stargazing Suite', category: 'Hospitality', location: 'Jaisalmer, Rajasthan, India', year: '2026', image: '/images/capsule-showcase/capsule-desert-stargazing-suite.png',
    description: 'A private desert suite centred on a dark panoramic capsule, with a sheltered lantern-lit lounge for evenings beneath open skies.',
    challenge: 'Make a compact capsule feel generous and climate-aware in an exposed desert setting.',
    solution: 'The suite is assembled in stages: the capsule is lifted into position first, then shaded decking, built-in seating, and a fire lounge establish a protected outdoor room.',
    materiality: 'Charcoal metal cladding, reflective glazing, walnut interiors, sand-toned textiles, weathered timber, and low stone edging balance heat, shelter, and night-time comfort.',
    technicalSpecs: [{ label: 'Capsule Reference', value: 'Panoramic S70-style Form' }, { label: 'Programme', value: 'Suite + Stargazing Lounge' }, { label: 'Foundation', value: 'Raised Desert Deck' }],
    details: [{ label: 'Type', value: 'Desert Capsule Suite' }, { label: 'Region', value: 'Jaisalmer, India' }, { label: 'Status', value: 'Design Showcase' }],
    gallery: ['/images/capsule-showcase/capsule-desert-stargazing-suite.png', '/images/capsule-showcase/capsule-desert-stargazing-installation.png', '/images/capsule-showcase/capsule-desert-stargazing-interior.png']
  },
  {
    id: 'capsule-kerala-backwater-retreat', title: 'Capsule Kerala Backwater Retreat', category: 'Hospitality', location: 'Alappuzha, Kerala, India', year: '2026', image: '/images/capsule-showcase/capsule-kerala-backwater-exterior.png',
    description: 'A tropical backwater stay that sets a panoramic capsule beside a quiet palm-lined canal, with a private waterside deck for slow mornings and sunset gatherings.',
    challenge: 'Create a memorable guest suite that feels immersed in Kerala’s waterscape while responding to monsoon conditions and a delicate canal edge.',
    solution: 'The existing capsule form is crane-set on a compact raised base, then a teak deck, laterite edge, rattan lounge, and planted water frontage are assembled around it.',
    materiality: 'White capsule cladding, dark glazing, teak decking, laterite stone, cane furniture, pale linen, and tropical planting create a warm, low-impact retreat.',
    technicalSpecs: [{ label: 'Capsule Form', value: 'Existing Panoramic White Capsule' }, { label: 'Programme', value: 'Suite + Waterside Lounge' }, { label: 'Setting', value: 'Tropical Backwater Edge' }],
    details: [{ label: 'Type', value: 'Backwater Capsule Retreat' }, { label: 'Region', value: 'Kerala, India' }, { label: 'Status', value: 'Design Showcase' }],
    gallery: ['/images/capsule-showcase/capsule-kerala-backwater-exterior.png', '/images/capsule-showcase/capsule-kerala-backwater-installation.png', '/images/capsule-showcase/capsule-kerala-backwater-interior.png']
  },
  {
    id: 'capsule-jaisalmer-courtyard-suite', title: 'Capsule Jaisalmer Courtyard Suite', category: 'Hospitality', location: 'Jaisalmer, Rajasthan, India', year: '2026', image: '/images/capsule-showcase/capsule-jaisalmer-courtyard-exterior.png',
    description: 'A desert guest suite that places a panoramic capsule within a sandstone courtyard, combining open dune views with a sheltered, lantern-lit outdoor room.',
    challenge: 'Give a compact prefabricated suite the comfort and sense of place needed for an exposed desert climate.',
    solution: 'The existing capsule is crane-installed on a raised timber base before sandstone walls, a shaded pergola, low seating, and dune-facing terraces complete the guest experience.',
    materiality: 'Charcoal capsule cladding, dark glazing, hand-cut sandstone, weathered timber, woven rugs, linen upholstery, and bronze lanterns balance heat, shade, and evening comfort.',
    technicalSpecs: [{ label: 'Capsule Form', value: 'Existing Panoramic Charcoal Capsule' }, { label: 'Programme', value: 'Suite + Desert Courtyard' }, { label: 'Setting', value: 'Sandstone + Dune Horizon' }],
    details: [{ label: 'Type', value: 'Desert Courtyard Suite' }, { label: 'Region', value: 'Rajasthan, India' }, { label: 'Status', value: 'Design Showcase' }],
    gallery: ['/images/capsule-showcase/capsule-jaisalmer-courtyard-exterior.png', '/images/capsule-showcase/capsule-jaisalmer-courtyard-installation.png', '/images/capsule-showcase/capsule-jaisalmer-courtyard-interior.png']
  },
  {
    id: 'capsule-rishikesh-riverside-retreat', title: 'Capsule Rishikesh Riverside Retreat', category: 'Hospitality', location: 'Rishikesh, Uttarakhand, India', year: '2026', image: '/images/capsule-showcase/capsule-rishikesh-riverside-exterior.png',
    description: 'A riverside mountain stay that reuses a long panoramic capsule form on a quiet timber platform above the turquoise Himalayan river.',
    challenge: 'Create a restorative retreat that feels close to the river and foothills while staying light on a rocky, seasonal site.',
    solution: 'The existing capsule is crane-set on discrete footings, followed by a compact deck, yoga platform, low stone fire lounge, and carefully placed path lighting.',
    materiality: 'White capsule cladding, dark-framed glazing, charred timber, local river stone, pale oak, soft wool, and native planting give the retreat a calm mountain character.',
    technicalSpecs: [{ label: 'Capsule Form', value: 'Existing Long Panoramic White Capsule' }, { label: 'Programme', value: 'Suite + Yoga Deck' }, { label: 'Setting', value: 'Himalayan Riverbank' }],
    details: [{ label: 'Type', value: 'Riverside Capsule Retreat' }, { label: 'Region', value: 'Uttarakhand, India' }, { label: 'Status', value: 'Design Showcase' }],
    gallery: ['/images/capsule-showcase/capsule-rishikesh-riverside-exterior.png', '/images/capsule-showcase/capsule-rishikesh-riverside-installation.png', '/images/capsule-showcase/capsule-rishikesh-riverside-interior.png']
  },
  {
    id: 'capsule-munnar-tea-estate-lodge', title: 'Capsule Munnar Tea Estate Lodge', category: 'Hospitality', location: 'Munnar, Kerala, India', year: '2026', image: '/images/capsule-showcase/capsule-munnar-tea-estate-exterior.png',
    description: 'A misty tea-estate lodge that places a long panoramic capsule above the terraces of Munnar, with a sheltered viewing deck for slow mornings and fireside evenings.',
    challenge: 'Create a high-comfort stay that belongs to Munnar’s dramatic tea landscape while remaining light on a steep, rain-prone hillside.',
    solution: 'The E8 capsule form is crane-set onto discrete footings, then a compact dark-timber deck, low stone lounge, planted edges, and view-oriented seating are assembled around it.',
    materiality: 'White aluminium cladding, black-framed glazing, dark timber, local stone, woven outdoor furniture, pale oak joinery, and tea-estate planting balance crisp prefabrication with a warm hill-station atmosphere.',
    technicalSpecs: [{ label: 'Capsule System', value: 'E8 Panoramic Capsule' }, { label: 'Capsule Size', value: '11.5 m × 3.2 m' }, { label: 'Programme', value: 'Panoramic Suite + View Deck' }],
    details: [{ label: 'Type', value: 'Tea Estate Capsule Lodge' }, { label: 'Region', value: 'Munnar, Kerala, India' }, { label: 'Status', value: 'Design Showcase' }],
    gallery: ['/images/capsule-showcase/capsule-munnar-tea-estate-exterior.png', '/images/capsule-showcase/capsule-munnar-tea-estate-installation.png', '/images/capsule-showcase/capsule-munnar-tea-estate-interior.png']
  }
];
export const SERVICES: Service[] = [
  {
    id: 'modular-home-design', title: 'Modular Home Design',
    description: 'Modular home concepts that bring thoughtful planning, flexible layouts, and refined living spaces into a clear product-led starting point.',
    features: ['Concept Planning', 'Module Configuration', 'Structural Coordination', '3D Visualization']
  },
  {
    id: 'modular-hotels-retreats', title: 'Modular Hotels & Retreats',
    description: 'Capsule suites, shared spaces, and hospitality applications suited to resorts, retreats, and phased destination planning.',
    features: ['Guest Room Modules', 'Resort Masterplanning', 'Reception & Shared Spaces', 'Phased Expansion']
  },
  {
    id: 'modular-offices', title: 'Modular Offices & Workspaces',
    description: 'Flexible workplace pavilions and modular office applications that can be considered around teams, sites, and changing business needs.',
    features: ['Office Planning', 'Meeting Modules', 'Campus Layouts', 'Future Expansion']
  },
  {
    id: 'cafes-bars-restaurants', title: 'Cafés, Bars & Restaurants',
    description: 'Modular food-and-beverage applications for compact service spaces, social settings, and memorable guest experiences.',
    features: ['Café & Bar Planning', 'Kitchen Coordination', 'Rooftop Terraces', 'Guest Experience Design']
  },
  {
    id: 'retail-popups', title: 'Retail & Pop-Ups',
    description: 'Transportable retail, showroom, and pop-up applications designed to support changing locations and opportunities.',
    features: ['Retail Layouts', 'Display Systems', 'Brand-ready Interiors', 'Transport Planning']
  },
  {
    id: 'modular-amenities', title: 'Modular Amenities & Pools',
    description: 'Flexible outdoor amenities—from modular pools to landscape-ready leisure spaces—considered as part of a broader site experience.',
    features: ['Pool Integration', 'Landscape Coordination', 'Deck & Access Design', 'Site Installation']
  }
];
