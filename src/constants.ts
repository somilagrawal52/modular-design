import { Project, Service } from './types';

export const PROJECTS: Project[] = [
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
    id: 'courtyard-house', title: 'Courtyard House', category: 'Residential', location: 'Site-specific', year: '2026', image: '/images/modular-courtyard-home-exterior.jpg',
    description: 'A calm two-module home organised around a planted courtyard, combining factory-built precision with warm, everyday living spaces.',
    challenge: 'Create a spacious-feeling family home from transportable modules while keeping the garden at the centre of daily life.',
    solution: 'Two prefabricated volumes are joined by a glazed connection and sheltered deck, creating a protected courtyard and a flexible open-plan living zone.',
    materiality: 'Charcoal standing-seam cladding, cedar-lined reveals, black aluminium glazing, and low-maintenance native planting give the home a durable, grounded finish.',
    technicalSpecs: [{ label: 'Configuration', value: 'Two Connected Modules' }, { label: 'Construction', value: 'Off-site Prefabrication' }, { label: 'Outdoor Space', value: 'Central Courtyard' }],
    details: [{ label: 'Type', value: 'Modular Family Home' }, { label: 'Layout', value: 'Courtyard Plan' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-courtyard-home-exterior.jpg', '/images/modular-courtyard-home-interior.jpg', '/images/modular-courtyard-home-dusk.jpg']
  },
  {
    id: 'monsoon-modular-home', title: 'Monsoon Modular Home', category: 'Residential', location: 'South India', year: '2026', image: '/images/india-modular-home-exterior.jpg',
    description: 'A climate-responsive modular family home for South India, combining factory-built steel-frame volumes with deep shade, cross-ventilation, and a sheltered courtyard.',
    challenge: 'Adapt a repeatable modular system to warm weather, intense monsoon rain, local construction practices, and the everyday needs of an Indian family.',
    solution: 'Three prefabricated modules sit on a raised concrete plinth and connect through covered verandas, while brick jaali screens, generous overhangs, and operable openings control sun, rain, and airflow.',
    materiality: 'Off-white insulated panels and charcoal steel frames are softened by local brick jaali, Kota stone, cane furniture, terracotta accents, and post-monsoon planting.',
    technicalSpecs: [{ label: 'System', value: 'Steel-frame Modules' }, { label: 'Climate', value: 'Warm & Monsoon-ready' }, { label: 'Energy', value: 'Passive Shade + Solar' }],
    details: [{ label: 'Type', value: 'Climate-responsive Home' }, { label: 'Region', value: 'South India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/india-modular-home-exterior.jpg', '/images/india-modular-home-courtyard.jpg', '/images/india-modular-home-interior.jpg']
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
    description: 'A water-facing hospitality retreat composed of refined capsule suites, pairing panoramic guest rooms with low-impact foundations and a phased modular delivery strategy.',
    challenge: 'Create a memorable backwater stay that feels close to the landscape while avoiding heavy, disruptive construction at the water’s edge.',
    solution: 'Factory-finished volumetric capsules arrive with interiors, services, and glazing complete, then are positioned on slender piers and linked by a raised timber boardwalk. The system can grow suite by suite as demand increases.',
    materiality: 'Warm-grey insulated capsule shells, rounded low-iron glazing, teak-lined reveals, and quiet dark-metal details create a durable, contemporary response to the tropical setting.',
    technicalSpecs: [{ label: 'System', value: 'Volumetric Capsule Modules' }, { label: 'Foundation', value: 'Low-impact Pier Supports' }, { label: 'Delivery', value: 'Factory-finished + Phased' }],
    details: [{ label: 'Type', value: 'Capsule Hospitality' }, { label: 'Region', value: 'Kerala Backwaters, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-backwater-retreat-hero.png', '/images/modular-capsule-backwater-retreat-interior.png', '/images/modular-capsule-backwater-retreat-installation.png']
  },
  {
    id: 'modular-capsule-forest-retreat', title: 'Modular Capsule Forest Retreat', category: 'Hospitality', location: 'Coorg, Karnataka, India', year: '2026', image: '/images/modular-capsule-forest-retreat-hero.png',
    description: 'A low-impact forest stay made from elevated capsule suites, combining private canopy views with a repeatable modular hospitality system.',
    challenge: 'Place premium guest rooms across a planted hillside without extensive excavation or disturbance to the coffee-estate landscape.',
    solution: 'Factory-complete capsules are lifted onto independent pier supports and joined by light timber paths, allowing installation to move around mature planting and expand in measured phases.',
    materiality: 'Warm-grey weatherproof capsule shells, rounded glazing, oak-lined interiors, dark metal connections, and rain-ready timber decks keep the experience refined and resilient.',
    technicalSpecs: [{ label: 'Accommodation', value: '4 Capsule Guest Suites' }, { label: 'Foundation', value: 'Independent Pier Supports' }, { label: 'Climate', value: 'Monsoon-ready Envelope' }],
    details: [{ label: 'Type', value: 'Forest Capsule Hospitality' }, { label: 'Region', value: 'Coorg, Karnataka, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-forest-retreat-hero.png', '/images/modular-capsule-forest-retreat-interior.png', '/images/modular-capsule-forest-retreat-installation.png']
  },
  {
    id: 'modular-capsule-desert-retreat', title: 'Modular Capsule Desert Retreat', category: 'Hospitality', location: 'Jaisalmer, Rajasthan, India', year: '2026', image: '/images/modular-capsule-desert-retreat-hero.png',
    description: 'A compact capsule retreat that brings shaded, panoramic guest suites to the Thar landscape through a transportable and phased modular system.',
    challenge: 'Create a premium desert experience that can withstand heat, sand, and open exposure while keeping permanent ground works to a minimum.',
    solution: 'Pre-finished capsule modules are aligned on raised pier pads and connected by a low-impact boardwalk, with shaded porches and service zones integrated before delivery.',
    materiality: 'Sand-toned insulated shells, bronzed frames, timber privacy screens, and durable raised decks echo the desert palette while protecting guests from the elements.',
    technicalSpecs: [{ label: 'System', value: 'Transportable Capsule Modules' }, { label: 'Foundation', value: 'Raised Pier Pads' }, { label: 'Climate', value: 'Heat + Sand-ready Envelope' }],
    details: [{ label: 'Type', value: 'Desert Capsule Hospitality' }, { label: 'Region', value: 'Jaisalmer, Rajasthan, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-desert-retreat-hero.png', '/images/modular-capsule-desert-retreat-interior.png', '/images/modular-capsule-desert-retreat-installation.png']
  },
  {
    id: 'modular-capsule-alpine-retreat', title: 'Modular Capsule Alpine Retreat', category: 'Hospitality', location: 'Manali, Himachal Pradesh, India', year: '2026', image: '/images/modular-capsule-alpine-retreat-hero.png',
    description: 'An insulated capsule retreat that places panoramic guest rooms across a Himalayan slope with minimal permanent construction.',
    challenge: 'Deliver warm, comfortable accommodation on steep mountain terrain while limiting road work, earth movement, and impact on the forested site.',
    solution: 'Transport-ready capsules arrive complete with interior finishes and high-performance glazing, then are set onto stepped pier foundations and connected by a lightweight cedar boardwalk.',
    materiality: 'Charcoal insulated shells, cedar-lined reveals, dark aluminium glazing, wool-rich interiors, and weathered timber paths bring warmth to a high-altitude setting.',
    technicalSpecs: [{ label: 'System', value: 'Insulated Capsule Modules' }, { label: 'Foundation', value: 'Stepped Pier Supports' }, { label: 'Delivery', value: 'Transport-ready Volumes' }],
    details: [{ label: 'Type', value: 'Alpine Capsule Hospitality' }, { label: 'Region', value: 'Manali, Himachal Pradesh, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-alpine-retreat-hero.png', '/images/modular-capsule-alpine-retreat-interior.png', '/images/modular-capsule-alpine-retreat-installation.png']
  },
  {
    id: 'modular-capsule-tea-estate-retreat', title: 'Modular Capsule Tea Estate Retreat', category: 'Hospitality', location: 'Munnar, Kerala, India', year: '2026', image: '/images/modular-capsule-tea-estate-retreat-hero.png',
    description: 'A capsule hospitality retreat that steps gently through Munnar’s tea landscape, pairing misty hillside views with a repeatable, low-impact modular system.',
    challenge: 'Add premium guest accommodation to a planted tea-estate slope while preserving drainage, mature trees, and the layered views that define the setting.',
    solution: 'Factory-finished capsules are lifted onto independent supports and linked by narrow timber paths, allowing each suite to follow the contours of the hillside without heavy excavation.',
    materiality: 'Warm-grey insulated shells, dark aluminium frames, timber-lined interiors, and rain-ready decks establish the same refined capsule language across a humid mountain climate.',
    technicalSpecs: [{ label: 'Accommodation', value: '4 Capsule Guest Suites' }, { label: 'Foundation', value: 'Independent Pier Supports' }, { label: 'Climate', value: 'Monsoon-ready Envelope' }],
    details: [{ label: 'Type', value: 'Tea Estate Capsule Hospitality' }, { label: 'Region', value: 'Munnar, Kerala, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-tea-estate-retreat-hero.png', '/images/modular-capsule-tea-estate-retreat-interior.png', '/images/modular-capsule-tea-estate-retreat-installation.png']
  },
  {
    id: 'modular-capsule-island-retreat', title: 'Modular Capsule Island Retreat', category: 'Hospitality', location: 'Havelock Island, Andaman & Nicobar, India', year: '2026', image: '/images/modular-capsule-island-retreat-hero.png',
    description: 'A small island retreat of raised capsule suites, placing panoramic coastal rooms within palms and native planting without overbuilding the shoreline.',
    challenge: 'Deliver a premium beach stay that respects the sand, coastal planting, and tropical exposure of a sensitive island site.',
    solution: 'Compact off-site volumes arrive with interiors complete, then sit on short adjustable supports behind the beach and connect through a raised timber path that protects the ground below.',
    materiality: 'Warm-grey corrosion-resistant shells, rounded glazing, teak interiors, dark metal trim, and shaded decks carry the core capsule system into a tropical coastal setting.',
    technicalSpecs: [{ label: 'System', value: 'Volumetric Capsule Modules' }, { label: 'Foundation', value: 'Adjustable Raised Supports' }, { label: 'Climate', value: 'Tropical + Coastal-ready' }],
    details: [{ label: 'Type', value: 'Island Capsule Hospitality' }, { label: 'Region', value: 'Havelock Island, Andaman & Nicobar, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-island-retreat-hero.png', '/images/modular-capsule-island-retreat-interior.png', '/images/modular-capsule-island-retreat-installation.png']
  },
  {
    id: 'modular-capsule-lake-retreat', title: 'Modular Capsule Lake Retreat', category: 'Hospitality', location: 'Nainital, Uttarakhand, India', year: '2026', image: '/images/modular-capsule-lake-retreat-hero.png',
    description: 'A lake-facing capsule retreat that steps through a wooded Nainital slope, combining panoramic rooms with minimal permanent construction.',
    challenge: 'Create comfortable, view-led accommodation on steep lakeside terrain while avoiding extensive earthworks and keeping access routes light.',
    solution: 'Transport-ready capsule suites are carefully lifted to stepped pier supports and linked by a lightweight boardwalk, allowing a phased build that protects the slope and frames the lake.',
    materiality: 'Warm-grey weatherproof shells, rounded panoramic glazing, oak interiors, charcoal metal frames, and timber decks keep the capsule collection cohesive in a mountain-lake setting.',
    technicalSpecs: [{ label: 'System', value: 'Transport-ready Capsule Modules' }, { label: 'Foundation', value: 'Stepped Pier Supports' }, { label: 'Delivery', value: 'Phased Hillside Installation' }],
    details: [{ label: 'Type', value: 'Lake Capsule Hospitality' }, { label: 'Region', value: 'Nainital, Uttarakhand, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-lake-retreat-hero.png', '/images/modular-capsule-lake-retreat-interior.png', '/images/modular-capsule-lake-retreat-installation.png']
  },
  {
    id: 'modular-capsule-courtyard-residence', title: 'Modular Capsule Courtyard Residence', category: 'Residential', location: 'India', year: '2026', image: '/images/modular-capsule-courtyard-residence-hero.png',
    description: 'A family residence built around two capsule volumes and a sheltered communal pavilion, combining a planted courtyard with precise off-site delivery.',
    challenge: 'Create a warm, permanent-feeling family home from transportable volumes while keeping garden space and outdoor living at the centre of daily life.',
    solution: 'Factory-finished residential capsules are set around a light timber-and-steel pavilion, forming a protected courtyard that can grow with an additional room module when needed.',
    materiality: 'Warm-grey insulated shells, low-iron glazing, oak interiors, dark structural frames, and planted edges establish the capsule language in a residential setting.',
    technicalSpecs: [{ label: 'Configuration', value: '2 Capsule Volumes + Pavilion' }, { label: 'Foundation', value: 'Low Plinth + Adjustable Supports' }, { label: 'Growth', value: 'Add-on Room Module' }],
    details: [{ label: 'Type', value: 'Capsule Family Residence' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-courtyard-residence-hero.png', '/images/modular-capsule-courtyard-residence-interior.png', '/images/modular-capsule-courtyard-residence-installation.png']
  },
  {
    id: 'modular-capsule-cafe', title: 'Modular Capsule Café', category: 'Commercial', location: 'India', year: '2026', image: '/images/modular-capsule-cafe-hero.png',
    description: 'A compact two-capsule café that pairs an efficient service bar with a bright, relaxed guest lounge and shaded outdoor seating.',
    challenge: 'Deliver a distinct, high-quality café experience on a compressed programme and short opening timeline without losing hospitality character.',
    solution: 'Factory-finished service and lounge capsules arrive with bar equipment, seating, lighting, and façade glazing in place, then connect to a simple timber deck on site.',
    materiality: 'Warm-grey insulated shells, rounded low-iron glazing, oak lining, charcoal aluminium details, and a timber terrace make the compact format feel generous.',
    technicalSpecs: [{ label: 'Format', value: 'Two Capsule Café' }, { label: 'Service', value: 'Coffee + Light Dining' }, { label: 'Setup', value: 'Rapid Site Installation' }],
    details: [{ label: 'Type', value: 'Capsule Café' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-cafe-hero.png', '/images/modular-capsule-cafe-interior.png', '/images/modular-capsule-cafe-installation.png']
  },
  {
    id: 'modular-capsule-coworking-studio', title: 'Modular Capsule Co-working Studio', category: 'Workplace', location: 'India', year: '2026', image: '/images/modular-capsule-coworking-studio-hero.png',
    description: 'An expandable work cluster made from connected capsule modules, with open desks, meeting rooms, and a shared outdoor work court.',
    challenge: 'Create a premium, flexible workplace that can be installed quickly and expanded without interrupting the working day.',
    solution: 'Four factory-built work capsules connect around a landscaped deck, separating focused spaces from social work zones while retaining a clear plug-in route for future modules.',
    materiality: 'Warm-grey shells, panoramic glazing, oak work surfaces, acoustic lining, charcoal frames, and a timber courtyard deck create a refined, productive setting.',
    technicalSpecs: [{ label: 'Configuration', value: '4 Capsule Work Modules' }, { label: 'Workplace', value: 'Desks + Meeting Rooms' }, { label: 'Growth', value: 'Plug-in Module Expansion' }],
    details: [{ label: 'Type', value: 'Capsule Co-working Studio' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-coworking-studio-hero.png', '/images/modular-capsule-coworking-studio-interior.png', '/images/modular-capsule-coworking-studio-installation.png']
  },
  {
    id: 'modular-capsule-wellness-pavilion', title: 'Modular Capsule Wellness Pavilion', category: 'Amenities', location: 'India', year: '2026', image: '/images/modular-capsule-wellness-pavilion-hero.png',
    description: 'A tranquil wellness cluster for movement, recovery, and hydrotherapy, arranged as a series of capsule rooms around a planted water court.',
    challenge: 'Deliver a calm, amenity-rich destination with the smallest possible construction impact and a finish that feels considered rather than temporary.',
    solution: 'Factory-finished movement and spa capsules gather around a sheltered deck, allowing a low-impact, phased installation with services integrated into each module.',
    materiality: 'Warm-grey insulated shells, curved glazing, pale oak interiors, dark aluminium frames, stone-edged planting, and timber decks support a quiet wellness atmosphere.',
    technicalSpecs: [{ label: 'Format', value: 'Three Capsule Wellness Modules' }, { label: 'Use', value: 'Yoga + Hydrotherapy' }, { label: 'Delivery', value: 'Low-impact Installation' }],
    details: [{ label: 'Type', value: 'Capsule Wellness Amenity' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-wellness-pavilion-hero.png', '/images/modular-capsule-wellness-pavilion-interior.png', '/images/modular-capsule-wellness-pavilion-installation.png']
  },
  {
    id: 'modular-capsule-learning-studio', title: 'Modular Capsule Learning Studio', category: 'Community', location: 'India', year: '2026', image: '/images/modular-capsule-learning-studio-hero.png',
    description: 'A compact, adaptable learning campus that combines a bright classroom, a project studio, and a shaded courtyard for informal teaching.',
    challenge: 'Create a welcoming teaching environment that can open quickly, adapt to different learning formats, and grow as demand increases.',
    solution: 'Factory-built learning capsules group beneath a light canopy around an outdoor teaching court, creating a simple campus pattern that can extend one module at a time.',
    materiality: 'Warm-grey weatherproof shells, wide rounded glazing, oak classroom finishes, durable dark frames, and shaded timber decks give the campus a coherent identity.',
    technicalSpecs: [{ label: 'Format', value: 'Two Capsule Learning Modules' }, { label: 'Learning', value: 'Flexible Classroom + Studio' }, { label: 'Delivery', value: 'Phased Campus Expansion' }],
    details: [{ label: 'Type', value: 'Capsule Learning Studio' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-learning-studio-hero.png', '/images/modular-capsule-learning-studio-interior.png', '/images/modular-capsule-learning-studio-installation.png']
  },
  {
    id: 'modular-capsule-ev-charging-lounge', title: 'Modular Capsule EV Charging Lounge', category: 'Amenities', location: 'India', year: '2026', image: '/images/modular-capsule-ev-charging-lounge-hero.png',
    description: 'A roadside charging and refreshment lounge that turns a short EV stop into a comfortable, high-quality pause through a pair of transport-ready capsule modules.',
    challenge: 'Create a fast-to-deploy charging amenity that gives drivers shelter, refreshment, work space, and a clear premium identity without a conventional roadside build.',
    solution: 'Two factory-finished capsule modules combine a bright guest lounge with integrated service space, then connect to charging bays and a shaded timber deck on a compact prepared plinth.',
    materiality: 'Warm-grey insulated shells, low-iron panoramic glazing, oak-lined interiors, dark charging hardware, and restrained planting give the mobility hub a calm, durable character.',
    technicalSpecs: [{ label: 'Configuration', value: '2 Capsule Lounge Modules' }, { label: 'Mobility', value: '4 EV Charging Bays' }, { label: 'Delivery', value: 'Rapid Plinth Installation' }],
    details: [{ label: 'Type', value: 'EV Charging Amenity' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-ev-charging-lounge-hero.png', '/images/modular-capsule-ev-charging-lounge-interior.png', '/images/modular-capsule-ev-charging-lounge-installation.png']
  },
  {
    id: 'modular-capsule-drive-through-restaurant', title: 'Container Drive-through Restaurant', category: 'Commercial', location: 'India', year: '2026', image: '/images/modular-capsule-drive-through-restaurant-hero.png',
    description: 'A compact food-service destination that pairs container efficiency with capsule-like glazed ends, combining drive-through service, dining, and a planted terrace.',
    challenge: 'Deliver a recognisable restaurant that can open quickly on a constrained site while keeping back-of-house operations, pickup flow, and guest seating efficient.',
    solution: 'Two factory-finished food-service modules frame a covered timber terrace: one contains the kitchen and service line, while the other adds order and pickup points with a flexible dining edge.',
    materiality: 'Charcoal corrugated shells, rounded aluminium end caps, oak slats, low-iron service glazing, terrazzo flooring, and planted paving make the container system feel refined.',
    technicalSpecs: [{ label: 'Format', value: '2 Food-service Modules' }, { label: 'Service', value: 'Drive-through + Dining' }, { label: 'Setup', value: 'Fast Commercial Installation' }],
    details: [{ label: 'Type', value: 'Container Restaurant' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-drive-through-restaurant-hero.png', '/images/modular-capsule-drive-through-restaurant-interior.png', '/images/modular-capsule-drive-through-restaurant-installation.png']
  },
  {
    id: 'modular-capsule-visitor-gateway', title: 'Modular Capsule Visitor Gateway', category: 'Community', location: 'India', year: '2026', image: '/images/modular-capsule-visitor-gateway-hero.png',
    description: 'A low-impact arrival hub for natural destinations, bringing orientation, public amenities, and sheltered gathering space together in a repeatable capsule system.',
    challenge: 'Create an inviting visitor facility in a sensitive landscape while reducing permanent construction, protecting trees, and allowing the destination to grow in phases.',
    solution: 'Three factory-built capsules link by a raised timber boardwalk, separating the orientation lounge, accessible amenity, and gathering room while keeping the landscape continuous below.',
    materiality: 'Warm-grey weatherproof shells, wide rounded glazing, oak display finishes, dark aluminium frames, timber walkways, and stone-edged planting sit quietly within the setting.',
    technicalSpecs: [{ label: 'Configuration', value: '3 Capsule Visitor Modules' }, { label: 'Programme', value: 'Orientation + Public Amenity' }, { label: 'Foundation', value: 'Raised Adjustable Supports' }],
    details: [{ label: 'Type', value: 'Visitor Information Gateway' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-visitor-gateway-hero.png', '/images/modular-capsule-visitor-gateway-interior.png', '/images/modular-capsule-visitor-gateway-installation.png']
  },
  {
    id: 'modular-capsule-workforce-services-hub', title: 'Modular Capsule Workforce Services Hub', category: 'Workplace', location: 'India', year: '2026', image: '/images/modular-capsule-workforce-services-hub-hero.png',
    description: 'A permanent-quality support hub for infrastructure, industry, and renewable-energy campuses, bringing rest, changing, first-aid, and team amenities into one modular cluster.',
    challenge: 'Replace the temporary site-cabin experience with a robust, dignified workforce facility that can be delivered quickly, relocated, or expanded with changing project needs.',
    solution: 'Four factory-finished capsules group around a shaded timber court, separating quiet rest, lockers, first-aid, and team support while sharing a compact service spine.',
    materiality: 'Warm-grey insulated shells, curved glazing, oak screens, durable rubber flooring, dark metal frames, and tough low-maintenance planting create a precise operational environment.',
    technicalSpecs: [{ label: 'Configuration', value: '4 Capsule Support Modules' }, { label: 'Programme', value: 'Rest + Lockers + First-aid' }, { label: 'Growth', value: 'Add-on Service Modules' }],
    details: [{ label: 'Type', value: 'Workforce Services Hub' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-workforce-services-hub-hero.png', '/images/modular-capsule-workforce-services-hub-interior.png', '/images/modular-capsule-workforce-services-hub-installation.png']
  },
  {
    id: 'modular-capsule-care-clinic', title: 'Modular Capsule Care Clinic', category: 'Community', location: 'India', year: '2026', image: '/images/modular-capsule-care-clinic-hero.png',
    description: 'A calm, primary-care clinic that brings consultation, treatment, and a welcoming waiting area together in a compact cluster of fully finished capsule modules.',
    challenge: 'Provide a reassuring, professional health facility that can reach growing communities quickly while avoiding the temporary character of a portable cabin.',
    solution: 'Three factory-finished care capsules connect around a sheltered entry court, separating reception, consultation, and treatment while allowing the clinic to grow through additional modules.',
    materiality: 'Warm-grey insulated shells, rounded low-iron glazing, hygienic soft-touch surfaces, oak joinery, acoustic ceilings, and planted edges create a calm clinical setting.',
    technicalSpecs: [{ label: 'Configuration', value: '3 Capsule Care Modules' }, { label: 'Programme', value: 'Consultation + Treatment' }, { label: 'Access', value: 'Step-free Entry + Ramp' }],
    details: [{ label: 'Type', value: 'Capsule Primary-care Clinic' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-care-clinic-hero.png', '/images/modular-capsule-care-clinic-interior.png', '/images/modular-capsule-care-clinic-installation.png']
  },
  {
    id: 'modular-capsule-smart-washroom-pavilion', title: 'Modular Capsule Smart Washroom Pavilion', category: 'Amenities', location: 'India', year: '2026', image: '/images/modular-capsule-smart-washroom-pavilion-hero.png',
    description: 'A dignified, accessible public washroom pavilion that replaces the portable-unit aesthetic with a durable capsule amenity designed for parks, transport stops, and visitor sites.',
    challenge: 'Provide a robust public facility with accessible circulation, simple maintenance, and a clean welcoming presence in locations where conventional construction is disruptive.',
    solution: 'Two fully serviced capsule amenity modules connect beneath a sheltered canopy, pairing factory-integrated plumbing with a clear step-free arrival and adaptable site services.',
    materiality: 'Weatherproof warm-grey shells, ribbed privacy glazing, solid-surface wash counters, matte dark fittings, oak ceiling slats, and tactile paving create a refined public amenity.',
    technicalSpecs: [{ label: 'Configuration', value: '2 Capsule Amenity Modules' }, { label: 'Access', value: 'Step-free + Accessible Layout' }, { label: 'Services', value: 'Factory-integrated Plumbing' }],
    details: [{ label: 'Type', value: 'Smart Public Washroom' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-smart-washroom-pavilion-hero.png', '/images/modular-capsule-smart-washroom-pavilion-interior.png', '/images/modular-capsule-smart-washroom-pavilion-installation.png']
  },
  {
    id: 'modular-capsule-skills-learning-lab', title: 'Modular Capsule Skills Learning Lab', category: 'Community', location: 'India', year: '2026', image: '/images/modular-capsule-skills-learning-lab-hero.png',
    description: 'A flexible hands-on learning campus for skills training, digital work, and small-group teaching, arranged as a connected set of bright capsule studios.',
    challenge: 'Create adaptable teaching space that can open quickly, support practical learning, and expand without disrupting the programme as student numbers change.',
    solution: 'Three factory-built learning capsules group around a covered timber terrace, separating digital practice, collaborative workshop, and quiet teaching while sharing a repeatable service spine.',
    materiality: 'Warm-grey shells, panoramic glazing, oak work surfaces, durable rubber flooring, acoustic linings, dark frames, and shaded outdoor learning space support intensive daily use.',
    technicalSpecs: [{ label: 'Configuration', value: '3 Capsule Learning Modules' }, { label: 'Learning', value: 'Digital + Practical Skills' }, { label: 'Growth', value: 'Plug-in Classroom Expansion' }],
    details: [{ label: 'Type', value: 'Skills & Digital Learning Lab' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-skills-learning-lab-hero.png', '/images/modular-capsule-skills-learning-lab-interior.png', '/images/modular-capsule-skills-learning-lab-installation.png']
  },
  {
    id: 'modular-capsule-micro-library-hub', title: 'Modular Capsule Micro-library Hub', category: 'Community', location: 'India', year: '2026', image: '/images/modular-capsule-micro-library-hub-hero.png',
    description: 'A compact civic reading and gathering place that pairs a glazed capsule library with a flexible community room and timber outdoor reading terrace.',
    challenge: 'Give neighbourhoods a welcoming, high-quality learning space without the cost and construction impact of a conventional civic building.',
    solution: 'Two factory-finished capsule modules link to a generous timber step and garden deck, providing a book-lined reading room alongside a flexible space for quiet events and small groups.',
    materiality: 'Warm-grey weatherproof shells, rounded low-iron glazing, oak bookshelves, acoustic wall panels, soft seating, terrazzo flooring, and planted stone edges define a calm civic interior.',
    technicalSpecs: [{ label: 'Configuration', value: '2 Capsule Community Modules' }, { label: 'Programme', value: 'Reading + Community Room' }, { label: 'Foundation', value: 'Low Adjustable Supports' }],
    details: [{ label: 'Type', value: 'Micro-library & Community Hub' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-micro-library-hub-hero.png', '/images/modular-capsule-micro-library-hub-interior.png', '/images/modular-capsule-micro-library-hub-installation.png']
  },
  {
    id: 'modular-capsule-brand-experience-gallery', title: 'Modular Capsule Brand Experience Gallery', category: 'Commercial', location: 'India', year: '2026', image: '/images/modular-capsule-brand-experience-gallery-hero.png',
    description: 'A high-impact, low-footprint commercial gallery that turns transportable capsule modules into a warm destination for display, consultation, and small events.',
    challenge: 'Create a memorable premium customer environment that can move with a launch programme or evolve with a changing commercial site, without a permanent conventional fit-out.',
    solution: 'Three factory-finished capsules form a composed gallery sequence with glazed display rooms, a dedicated consultation lounge, and a timber arrival deck that can be installed or relocated as one coordinated system.',
    materiality: 'Warm-grey insulated shells, rounded low-iron glazing, light-oak joinery, acoustic linings, charcoal aluminium frames, and planted stone edges create a durable commercial setting.',
    technicalSpecs: [{ label: 'Configuration', value: '3 Capsule Gallery Modules' }, { label: 'Programme', value: 'Display + Consultation' }, { label: 'Delivery', value: 'Rapid Commercial Installation' }],
    details: [{ label: 'Type', value: 'Capsule Brand Experience Gallery' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-brand-experience-gallery-hero.png', '/images/modular-capsule-brand-experience-gallery-interior.png', '/images/modular-capsule-brand-experience-gallery-installation.png']
  },
  {
    id: 'modular-capsule-retail-kiosk', title: 'Modular Capsule Retail Kiosk', category: 'Commercial', location: 'India', year: '2026', image: '/images/modular-capsule-retail-kiosk-hero.png',
    description: 'A compact deployable retail and customer-service point that brings a polished capsule format to plazas, campuses, events, and high-footfall public settings.',
    challenge: 'Deliver a premium small-footprint retail environment that can adapt to seasonal demand and change location without losing the quality of a permanent storefront.',
    solution: 'One fully finished retail capsule combines a glazed display front, point-of-sale counter, concealed storage, and timber landing deck in a single crane-set commercial unit.',
    materiality: 'A warm-grey insulated shell, rounded charcoal glazing frame, oak cabinetry, matte metal shelving, seamless flooring, and integrated lighting give the kiosk a precise and welcoming character.',
    technicalSpecs: [{ label: 'Format', value: 'Single Capsule Kiosk' }, { label: 'Programme', value: 'Display + Point of Sale' }, { label: 'Setup', value: 'Plug-in Site Services' }],
    details: [{ label: 'Type', value: 'Capsule Retail Kiosk' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-retail-kiosk-hero.png', '/images/modular-capsule-retail-kiosk-interior.png', '/images/modular-capsule-retail-kiosk-installation.png']
  },
  {
    id: 'modular-capsule-last-mile-logistics-hub', title: 'Modular Capsule Last-mile Logistics Hub', category: 'Workplace', location: 'India', year: '2026', image: '/images/modular-capsule-last-mile-logistics-hub-hero.png',
    description: 'A compact operations system for last-mile, e-commerce, and campus distribution, combining sorting, dispatch, administration, and protected service space in a scalable modular cluster.',
    challenge: 'Provide reliable full-capacity fulfilment space near customers without defaulting to a short-life temporary cabin or a large conventional warehouse build.',
    solution: 'Four factory-built operations capsules create a controlled working courtyard with dedicated zones for sorting, packing, dispatch, and oversight; additional modules can extend the hub as demand grows.',
    materiality: 'Weatherproof warm-grey shells, ribbed insulated cladding, durable charcoal frames, practical oak worktops, powder-coated shelving, acoustic linings, and robust hardscape support intensive daily use.',
    technicalSpecs: [{ label: 'Configuration', value: '4 Capsule Operations Modules' }, { label: 'Programme', value: 'Sorting + Dispatch' }, { label: 'Growth', value: 'Add-on Fulfilment Modules' }],
    details: [{ label: 'Type', value: 'Last-mile Logistics Hub' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-last-mile-logistics-hub-hero.png', '/images/modular-capsule-last-mile-logistics-hub-operations.png', '/images/modular-capsule-last-mile-logistics-hub-installation.png']
  },
  {
    id: 'modular-capsule-exhibition-pavilion', title: 'Modular Capsule Exhibition Pavilion', category: 'Commercial', location: 'India', year: '2026', image: '/images/modular-capsule-exhibition-pavilion-hero.png',
    description: 'A transportable exhibition destination for product, cultural, and public displays, composed as a refined cluster of glazed capsule rooms and a sheltered event terrace.',
    challenge: 'Make a strong, reusable public presence for fairs and short-term programmes while preserving a high-quality visitor experience and minimising site disruption.',
    solution: 'Three factory-finished capsules sit around a covered oak-lined terrace, pairing flexible exhibition rooms with a natural arrival and gathering space that can be crane-set, removed, and reused.',
    materiality: 'Warm-grey weatherproof shells, panoramic curved glazing, oak flooring and soffits, acoustic ceilings, dark aluminium frames, stone paving, and landscape planting set an understated gallery tone.',
    technicalSpecs: [{ label: 'Configuration', value: '3 Capsule Pavilion Modules' }, { label: 'Programme', value: 'Exhibition + Events' }, { label: 'Delivery', value: 'Crane-set + Reusable' }],
    details: [{ label: 'Type', value: 'Capsule Exhibition Pavilion' }, { label: 'Region', value: 'India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-exhibition-pavilion-hero.png', '/images/modular-capsule-exhibition-pavilion-interior.png', '/images/modular-capsule-exhibition-pavilion-installation.png']
  },
  {
    id: 'modular-capsule-coastal-leisure-pavilion', title: 'Modular Capsule Coastal Leisure Pavilion', category: 'Amenities', location: 'Goa, India', year: '2026', image: '/images/modular-capsule-coastal-leisure-pavilion-hero.png',
    description: 'A low-impact coastal leisure destination that groups glazed capsule rooms, a shaded deck, and a compact water lounge into a refined tropical amenity.',
    challenge: 'Create a premium social and relaxation setting for a sensitive coastal site while limiting wet construction, protecting planting, and allowing the system to evolve with the destination.',
    solution: 'Three factory-finished capsules sit lightly around a teak deck and small plunge-pool lounge, combining a flexible gathering room, refreshment point, and quiet retreat space in a reusable installation.',
    materiality: 'Warm-grey weatherproof shells, deep charcoal glazing frames, curved low-iron glass, teak decking, oak linings, pale stone, and layered tropical planting balance durability with a calm coastal feel.',
    technicalSpecs: [{ label: 'Configuration', value: '3 Capsule Leisure Modules' }, { label: 'Programme', value: 'Lounge + Water Deck' }, { label: 'Foundation', value: 'Low Adjustable Supports' }],
    details: [{ label: 'Type', value: 'Capsule Coastal Leisure Pavilion' }, { label: 'Region', value: 'Goa, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-coastal-leisure-pavilion-hero.png', '/images/modular-capsule-coastal-leisure-pavilion-interior.png', '/images/modular-capsule-coastal-leisure-pavilion-installation.png']
  },
  {
    id: 'modular-capsule-desert-adventure-lodge', title: 'Modular Capsule Desert Adventure Lodge', category: 'Hospitality', location: 'Rajasthan, India', year: '2026', image: '/images/modular-capsule-desert-adventure-lodge-hero.png',
    description: 'A climate-ready adventure lodge that uses insulated capsule guest suites and a shared shaded courtyard to create a durable, low-impact desert stay.',
    challenge: 'Give guests a comfortable, memorable base in a hot and fragile landscape without relying on heavy construction, standard tents, or a fixed resort footprint.',
    solution: 'Four factory-built capsules establish private suites around a protected communal court, with deep shade, light-touch supports, and timber walkways that make phased installation and relocation practical.',
    materiality: 'Sand-grey mineral-coated shells, thermally efficient glazing, oak interiors, woven shade layers, dark aluminium frames, local stone, and native desert planting create a grounded hospitality palette.',
    technicalSpecs: [{ label: 'Configuration', value: '4 Capsule Lodge Modules' }, { label: 'Climate', value: 'Desert-ready Envelope' }, { label: 'Site Strategy', value: 'Light-touch Foundations' }],
    details: [{ label: 'Type', value: 'Capsule Desert Adventure Lodge' }, { label: 'Region', value: 'Rajasthan, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-desert-adventure-lodge-hero.png', '/images/modular-capsule-desert-adventure-lodge-interior.png', '/images/modular-capsule-desert-adventure-lodge-installation.png']
  },
  {
    id: 'modular-capsule-mountain-trail-basecamp', title: 'Modular Capsule Mountain Trail Basecamp', category: 'Hospitality', location: 'Himachal Pradesh, India', year: '2026', image: '/images/modular-capsule-mountain-trail-basecamp-hero.png',
    description: 'A robust mountain basecamp that combines weather-ready capsule rooms, gear storage, warm gathering space, and a sheltered terrace at the start of a trail network.',
    challenge: 'Provide a dependable visitor base in a remote mountain setting while reducing construction disruption and avoiding the temporary look of an ordinary trail cabin.',
    solution: 'Three high-performance capsule modules form a clear arrival sequence of gear lounge, shared refreshment space, and flexible accommodation, set on a compact stone terrace with extendable plug-in capacity.',
    materiality: 'High-performance insulated shells, rounded low-iron glazing, charcoal frames, oak storage and benches, durable rubber flooring, local stone, and weathered timber meet a demanding mountain climate.',
    technicalSpecs: [{ label: 'Configuration', value: '3 Capsule Basecamp Modules' }, { label: 'Programme', value: 'Gear + Gathering + Stay' }, { label: 'Climate', value: 'Mountain-ready Envelope' }],
    details: [{ label: 'Type', value: 'Capsule Mountain Trail Basecamp' }, { label: 'Region', value: 'Himachal Pradesh, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-mountain-trail-basecamp-hero.png', '/images/modular-capsule-mountain-trail-basecamp-interior.png', '/images/modular-capsule-mountain-trail-basecamp-installation.png']
  },
  {
    id: 'modular-capsule-lakeside-wellness-deck', title: 'Modular Capsule Lakeside Wellness Deck', category: 'Amenities', location: 'Kerala, India', year: '2026', image: '/images/modular-capsule-lakeside-wellness-deck-hero.png',
    description: 'A waterside wellness setting that brings treatment, meditation, and relaxed gathering spaces together in a low-impact cluster of glazed capsule modules.',
    challenge: 'Offer a calm, premium guest experience at the backwater edge without intensive shoreline works or a fixed building footprint that compromises the landscape.',
    solution: 'Three factory-finished capsules align along a planted teak deck, creating adaptable wellness rooms and a covered meditation zone that can be carefully crane-set and serviced above the water edge.',
    materiality: 'Warm-grey insulated shells, rounded glazing, pale oak interiors, charcoal frames, natural woven textures, teak decking, local stone, and dense tropical planting form a restrained wellness palette.',
    technicalSpecs: [{ label: 'Configuration', value: '3 Capsule Wellness Modules' }, { label: 'Programme', value: 'Treatment + Meditation' }, { label: 'Foundation', value: 'Low-impact Adjustable Supports' }],
    details: [{ label: 'Type', value: 'Capsule Lakeside Wellness Deck' }, { label: 'Region', value: 'Kerala, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-lakeside-wellness-deck-hero.png', '/images/modular-capsule-lakeside-wellness-deck-interior.png', '/images/modular-capsule-lakeside-wellness-deck-installation.png']
  },
  {
    id: 'modular-capsule-garden-family-residence', title: 'Modular Capsule Garden Family Residence', category: 'Residential', location: 'Bengaluru, India', year: '2026', image: '/images/modular-capsule-garden-family-residence-hero.png',
    description: 'A permanent-quality family home that arranges private and shared capsule rooms around a planted courtyard, pairing everyday comfort with a flexible off-site construction system.',
    challenge: 'Create a warm, spacious home on a leafy urban site without sacrificing construction speed, future adaptability, or the garden space that makes the site special.',
    solution: 'Four factory-finished capsules form a family living room, kitchen-dining room, private bedrooms, and an upper retreat around a shaded central garden that links the home together.',
    materiality: 'Warm-grey insulated shells, curved low-iron glazing, oak joinery, charcoal aluminium frames, teak thresholds, pale stone paving, and dense garden planting make a calm and durable residential palette.',
    technicalSpecs: [{ label: 'Configuration', value: '4 Capsule Family Modules' }, { label: 'Programme', value: 'Living + Bedrooms + Courtyard' }, { label: 'Foundation', value: 'Low Adjustable Supports' }],
    details: [{ label: 'Type', value: 'Capsule Garden Family Residence' }, { label: 'Region', value: 'Bengaluru, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-garden-family-residence-hero.png', '/images/modular-capsule-garden-family-residence-interior.png', '/images/modular-capsule-garden-family-residence-installation.png']
  },
  {
    id: 'modular-capsule-orchard-farmhouse', title: 'Modular Capsule Orchard Farmhouse', category: 'Residential', location: 'Nashik, India', year: '2026', image: '/images/modular-capsule-orchard-farmhouse-hero.png',
    description: 'A low-impact farmhouse cluster that turns transportable capsule rooms into a comfortable orchard-facing home with a generous shaded verandah.',
    challenge: 'Provide a high-quality rural retreat that can be built with minimal disruption to a working orchard and extend gradually as the property’s needs change.',
    solution: 'Three factory-built capsules form living, sleeping, and kitchen zones around a covered timber verandah, sitting lightly above the ground with a repeatable system for future add-on rooms.',
    materiality: 'Warm-grey weatherproof shells, oak cabinetry, panoramic low-iron glazing, charcoal frames, teak decking, local stone terraces, and orchard planting blend a precise modular system with its rural setting.',
    technicalSpecs: [{ label: 'Configuration', value: '3 Capsule Farmhouse Modules' }, { label: 'Programme', value: 'Living + Stay + Verandah' }, { label: 'Growth', value: 'Add-on Guest Capsule' }],
    details: [{ label: 'Type', value: 'Capsule Orchard Farmhouse' }, { label: 'Region', value: 'Nashik, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-orchard-farmhouse-hero.png', '/images/modular-capsule-orchard-farmhouse-interior.png', '/images/modular-capsule-orchard-farmhouse-installation.png']
  },
  {
    id: 'modular-capsule-creative-studio-office', title: 'Modular Capsule Creative Studio Office', category: 'Workplace', location: 'Pune, India', year: '2026', image: '/images/modular-capsule-creative-studio-office-hero.png',
    description: 'A refined workplace cluster for focused making, client sessions, and collaborative work, designed as a reusable capsule system around a landscaped social courtyard.',
    challenge: 'Give a growing creative team a distinctive, professional home that feels permanent and client-ready without committing to a fixed conventional office build.',
    solution: 'Four factory-finished capsules create open studio space, focus rooms, client meeting areas, and a shared outdoor work court, with clear connections and an extendable modular framework.',
    materiality: 'Warm-grey insulated shells, broad curved glazing, oak worktops, acoustic linings, charcoal aluminium frames, timber deck surfaces, and garden planting support calm, productive daily use.',
    technicalSpecs: [{ label: 'Configuration', value: '4 Capsule Studio Modules' }, { label: 'Programme', value: 'Work + Clients + Collaboration' }, { label: 'Growth', value: 'Plug-in Meeting Expansion' }],
    details: [{ label: 'Type', value: 'Capsule Creative Studio Office' }, { label: 'Region', value: 'Pune, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-creative-studio-office-hero.png', '/images/modular-capsule-creative-studio-office-interior.png', '/images/modular-capsule-creative-studio-office-installation.png']
  },
  {
    id: 'modular-capsule-coliving-courtyard', title: 'Modular Capsule Co-living Courtyard', category: 'Residential', location: 'Bengaluru, India', year: '2026', image: '/images/modular-capsule-coliving-courtyard-hero.png',
    description: 'A contemporary co-living community that balances private long-stay capsule rooms with a lush shared courtyard and generous outdoor table for everyday connection.',
    challenge: 'Create compact, high-quality long-stay rooms without losing the social space, planting, privacy, and resident identity expected of a permanent home.',
    solution: 'Five factory-built residential capsules form private studios around a shaded central courtyard, pairing individual decks and storage-rich rooms with one adaptable communal gathering space.',
    materiality: 'Warm-grey weatherproof shells, curved glazing, oak storage, soft neutral interiors, charcoal frames, teak paths, textured paving, and dense urban planting create a welcoming shared setting.',
    technicalSpecs: [{ label: 'Configuration', value: '5 Capsule Living Modules' }, { label: 'Programme', value: 'Private Rooms + Shared Court' }, { label: 'Delivery', value: 'Phased Residential Installation' }],
    details: [{ label: 'Type', value: 'Capsule Co-living Courtyard' }, { label: 'Region', value: 'Bengaluru, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-capsule-coliving-courtyard-hero.png', '/images/modular-capsule-coliving-courtyard-interior.png', '/images/modular-capsule-coliving-courtyard-installation.png']
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
    id: 'modular-pool-leisure', title: 'Modular Pool & Leisure', category: 'Amenities', location: 'Site-specific', year: '2026', image: '/images/modular-pool-realistic.jpg',
    description: 'A practical container-pool and leisure concept designed to add outdoor recreation quickly to homes, hotels, and retreats.',
    challenge: 'Add a usable pool facility with minimal on-site construction and a simple serviceable layout.', solution: 'A container-based pool is delivered as a finished unit, then paired with practical deck, access, and landscape works.',
    materiality: 'Durable steel cladding, timber decking, standard pool fittings, and low-maintenance planting create a robust outdoor amenity.',
    technicalSpecs: [{ label: 'Configuration', value: 'Container Pool' }, { label: 'Access', value: 'Integrated Steps' }, { label: 'Delivery', value: 'Prefabricated Unit' }],
    details: [{ label: 'Type', value: 'Outdoor Amenity' }, { label: 'Use', value: 'Pool & Leisure' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-pool-realistic.jpg', '/images/modular-pool-leisure-pavilion.png']
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
  { id: 'modular-learning-campus', title: 'Modular Learning Campus', category: 'Community', location: 'India', year: '2026', image: '/images/modular-learning-campus-hero.png', description: 'A flexible modular learning campus with bright classrooms, shared courtyards, and space to grow as enrolment changes.', details: [{ label: 'Type', value: 'Education Campus' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-learning-campus-hero.png', '/images/modular-learning-campus-interior.png', '/images/modular-learning-campus-courtyard.png'] },
  { id: 'modular-workforce-village', title: 'Modular Workforce Village', category: 'Community', location: 'India', year: '2026', image: '/images/modular-workforce-village-hero.png', description: 'A well-planned modular accommodation village with private rooms, communal landscape, and durable shared amenities.', details: [{ label: 'Type', value: 'Workforce Accommodation' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-workforce-village-hero.png', '/images/modular-workforce-village-interior.png', '/images/modular-workforce-village-common.png'] },
  { id: 'modular-site-command-hub', title: 'Modular Site Command Hub', category: 'Workplace', location: 'India', year: '2026', image: '/images/modular-site-command-hub-hero.png', description: 'A secure modular command hub for site administration, visitor control, security operations, and team coordination.', details: [{ label: 'Type', value: 'Site Office & Security' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-site-command-hub-hero.png', '/images/modular-site-command-hub-control-room.png', '/images/modular-site-command-hub-entry.png'] },
  { id: 'modular-experience-showroom', title: 'Modular Experience Showroom', category: 'Commercial', location: 'India', year: '2026', image: '/images/modular-experience-showroom-hero.png', description: 'A flexible showroom module that brings product display, consultation, and branded customer experience into one refined space.', details: [{ label: 'Type', value: 'Retail Showroom' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-experience-showroom-hero.png', '/images/modular-experience-showroom-interior.png', '/images/modular-experience-showroom-evening.png'] },
  { id: 'modular-pool-spa-club', title: 'Modular Pool & Spa Club', category: 'Amenities', location: 'India', year: '2026', image: '/images/modular-pool-spa-club-hero.png', description: 'A modular leisure club combining a pool deck, shaded spa pavilion, changing facilities, and landscape-ready social space.', details: [{ label: 'Type', value: 'Leisure Amenity' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-pool-spa-club-hero.png', '/images/modular-pool-spa-club-deck.png', '/images/modular-pool-spa-club-wellness.png'] },
  { id: 'modular-performance-gym', title: 'Modular Performance Gym', category: 'Amenities', location: 'India', year: '2026', image: '/images/modular-performance-gym-hero.png', description: 'A compact, high-performance modular gym with a bright training floor and an outdoor fitness terrace.', details: [{ label: 'Type', value: 'Fitness Module' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-performance-gym-hero.png', '/images/modular-performance-gym-interior.png', '/images/modular-performance-gym-terrace.png'] },
  { id: 'modular-family-house', title: 'Modular Family House', category: 'Residential', location: 'India', year: '2026', image: '/images/modular-family-house-hero.png', description: 'A refined modular family home arranged around a planted courtyard, with flexible living spaces and a sheltered terrace.', details: [{ label: 'Type', value: 'Family Residence' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-family-house-hero.png', '/images/modular-family-house-interior.png', '/images/modular-family-house-terrace.png'] },
  { id: 'modular-farmhouse-retreat', title: 'Modular Farmhouse Retreat', category: 'Residential', location: 'India', year: '2026', image: '/images/modular-farmhouse-hero.png', description: 'A modern modular farmhouse that connects a warm, practical interior to broad views of the surrounding landscape.', details: [{ label: 'Type', value: 'Farmhouse Residence' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-farmhouse-hero.png', '/images/modular-farmhouse-interior.png', '/images/modular-farmhouse-veranda.png'] },
  { id: 'modular-office-campus', title: 'Modular Office Campus', category: 'Workplace', location: 'India', year: '2026', image: '/images/modular-office-campus-hero.png', description: 'An expandable modular office campus with connected workspaces, meeting rooms, and shaded arrival courts.', details: [{ label: 'Type', value: 'Office Campus' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-office-campus-hero.png', '/images/modular-office-campus-workspace.png', '/images/modular-office-campus-entry.png'] },
  { id: 'modular-care-clinic', title: 'Modular Care Clinic', category: 'Community', location: 'India', year: '2026', image: '/images/modular-care-clinic-hero.png', description: 'A calm, rapidly deployable primary-care clinic with reception, treatment rooms, and a welcoming landscaped entry.', details: [{ label: 'Type', value: 'Healthcare Module' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-care-clinic-hero.png', '/images/modular-care-clinic-reception.png', '/images/modular-care-clinic-treatment.png'] },
  { id: 'modular-coworking-hub', title: 'Modular Co-working Hub', category: 'Workplace', location: 'India', year: '2026', image: '/images/modular-coworking-hub-hero.png', description: 'A flexible workplace hub with open desks, focused meeting rooms, and shaded breakout space.', details: [{ label: 'Type', value: 'Co-working Workplace' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-coworking-hub-hero.png', '/images/modular-coworking-hub-workspace.png', '/images/modular-coworking-hub-meeting.png'] },
  { id: 'urban-garden-residence', title: 'Urban Garden Residence', category: 'Residential', location: 'India', year: '2026', image: '/images/urban-garden-residence-hero.png', description: 'A compact modular residence that pairs refined living spaces with a planted urban garden and terrace.', details: [{ label: 'Type', value: 'Modular Residence' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/urban-garden-residence-hero.png', '/images/urban-garden-residence-interior.png', '/images/urban-garden-residence-terrace.png'] },
  { id: 'transit-amenity-hub', title: 'Transit Amenity Hub', category: 'Amenities', location: 'India', year: '2026', image: '/images/transit-amenity-hub-hero.png', description: 'A durable modular hub for waiting, refreshments, accessible washrooms, and visitor support at transit points.', details: [{ label: 'Type', value: 'Public Amenity Hub' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/transit-amenity-hub-hero.png', '/images/transit-amenity-hub-interior.png', '/images/transit-amenity-hub-evening.png'] },
  { id: 'compact-roadside-cafe', title: 'Compact Roadside Café', category: 'Commercial', location: 'India', year: '2026', image: '/images/compact-roadside-cafe-hero.png', description: 'A single-module café with fast service, a shaded terrace, and a crisp modern identity.', details: [{ label: 'Type', value: 'Compact Café Module' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/compact-roadside-cafe-hero.png', '/images/compact-roadside-cafe-interior.png', '/images/compact-roadside-cafe-terrace.png'] },
  { id: 'modular-rooftop-restaurant', title: 'Modular Rooftop Restaurant', category: 'Commercial', location: 'India', year: '2026', image: '/images/modular-rooftop-restaurant-hero.png', description: 'A glass-and-steel modular restaurant designed for compact urban rooftops.', details: [{ label: 'Type', value: 'Rooftop Restaurant' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-rooftop-restaurant-hero.png', '/images/modular-rooftop-restaurant-interior.png', '/images/modular-rooftop-restaurant-terrace.png'] },
  { id: 'modular-forest-cafe', title: 'Modular Forest Café', category: 'Commercial', location: 'India', year: '2026', image: '/images/forest-cafe-hero.png', description: 'A low-impact modular café that connects warm interior service spaces with a forest deck.', details: [{ label: 'Type', value: 'Forest Café Module' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/forest-cafe-hero.png', '/images/forest-cafe-interior.png', '/images/forest-cafe-deck.png'] },
  { id: 'darjeeling-tea-cafe', title: 'Darjeeling Tea Café', category: 'Commercial', location: 'Darjeeling, India', year: '2026', image: '/images/darjeeling-tea-cafe.png', description: 'A compact modular tea café with warm timber interiors and misty hillside views.', details: [{ label: 'Type', value: 'Café Module' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/darjeeling-tea-cafe.png', '/images/darjeeling-tea-cafe-interior.png', '/images/darjeeling-tea-cafe-terrace.png'] },
  { id: 'hampi-courtyard-restaurant', title: 'Hampi Courtyard Restaurant', category: 'Commercial', location: 'Hampi, Karnataka, India', year: '2026', image: '/images/hampi-courtyard-restaurant.png', description: 'A shaded modular courtyard restaurant designed for rest, dining, and clear landscape connection.', details: [{ label: 'Type', value: 'Restaurant Module' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/hampi-courtyard-restaurant.png', '/images/hampi-courtyard-restaurant-interior.png', '/images/hampi-courtyard-restaurant-exterior.png'] },
  { id: 'manali-mountain-restaurant', title: 'Manali Mountain Restaurant', category: 'Commercial', location: 'Manali, Himachal Pradesh, India', year: '2026', image: '/images/manali-mountain-restaurant.png', description: 'A glazed modular mountain restaurant that pairs warm dining spaces with panoramic forest views.', details: [{ label: 'Type', value: 'Restaurant Module' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/manali-mountain-restaurant.png', '/images/manali-mountain-restaurant-interior.png', '/images/manali-mountain-restaurant-terrace.png'] },
  { id: 'darjeeling-tea-pavilion', title: 'Darjeeling Tea Pavilion', category: 'Hospitality', location: 'Darjeeling, India', year: '2026', image: '/images/darjeeling-tea-pavilion.png', description: 'A compact modular tea pavilion with one guest suite, framed by misty hillside views.', details: [{ label: 'Type', value: 'Tea Pavilion' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/darjeeling-tea-pavilion.png', '/images/darjeeling-tea-pavilion-gallery.png', '/images/darjeeling-tea-pavilion-detail.png'] },
  { id: 'manali-mountain-cafe', title: 'Manali Mountain Café', category: 'Commercial', location: 'Manali, Himachal Pradesh, India', year: '2026', image: '/images/manali-mountain-cafe.png', description: 'A compact modular café with warm interiors and panoramic mountain views.', details: [{ label: 'Type', value: 'Café Module' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/manali-mountain-cafe.png', '/images/manali-mountain-cafe-gallery.png', '/images/manali-mountain-cafe-detail.png'] },
  { id: 'coorg-forest-retreat', title: 'Coorg Forest Retreat', category: 'Hospitality', location: 'Coorg, Karnataka, India', year: '2026', image: '/images/coorg-forest-retreat-hero.png', description: 'A low-impact modular retreat of timber-and-glass suites set among coffee estate planting and misty hills.', details: [{ label: 'Type', value: 'Forest Hospitality' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/coorg-forest-retreat-hero.png', '/images/coorg-forest-retreat-terrace.png', '/images/coorg-forest-retreat-interior.png'] },
  { id: 'ladakh-highland-retreat', title: 'Ladakh Highland Retreat', category: 'Hospitality', location: 'Ladakh, India', year: '2026', image: '/images/ladakh-highland-retreat-hero.png', description: 'An insulated modular high-altitude retreat with warm guest suites and a sheltered shared lounge.', details: [{ label: 'Type', value: 'High-altitude Hospitality' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/ladakh-highland-retreat-hero.png', '/images/ladakh-highland-retreat-evening.png', '/images/ladakh-highland-retreat-aerial.png'] },
  { id: 'kutch-salt-retreat', title: 'Kutch Salt Retreat', category: 'Hospitality', location: 'Kutch, Gujarat, India', year: '2026', image: '/images/kutch-salt-retreat-hero.png', description: 'A restrained modular retreat designed for the wide, bright landscape of Gujarat’s salt desert.', details: [{ label: 'Type', value: 'Desert Hospitality' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/kutch-salt-retreat-hero.png', '/images/kutch-salt-retreat-evening.png', '/images/kutch-salt-retreat-interior.png'] },
  { id: 'jaisalmer-desert-camp', title: 'Jaisalmer Desert Camp', category: 'Hospitality', location: 'Jaisalmer, Rajasthan, India', year: '2026', image: '/images/jaisalmer-desert-camp-hero.png', description: 'A contemporary modular desert camp that combines private guest suites, a shaded central lounge, and low-impact site planning for the Thar landscape.', challenge: 'Create a premium hospitality experience that responds to heat, wind, and the fragility of a desert site.', solution: 'Prefabricated suites are placed on light-touch foundations around a shared pavilion, with deep overhangs, sheltered outdoor rooms, and efficient off-site fabrication.', materiality: 'Sand-toned mineral panels, bronzed frames, glazed openings, and local stone create a calm palette that sits naturally within the dunes.', technicalSpecs: [{ label: 'Accommodation', value: 'Modular Guest Suites' }, { label: 'Climate', value: 'Desert-ready Envelope' }, { label: 'Site Strategy', value: 'Low-impact Foundations' }], details: [{ label: 'Type', value: 'Desert Hospitality' }, { label: 'Region', value: 'Rajasthan, India' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/jaisalmer-desert-camp-hero.png', '/images/jaisalmer-desert-camp-evening.png', '/images/jaisalmer-desert-camp-aerial.png'] },
  { id: 'jaipur-boutique-stay', title: 'Jaipur Boutique Stay', category: 'Hospitality', location: 'Jaipur, Rajasthan, India', year: '2026', image: '/images/jaipur-boutique-stay-hero.png', description: 'A modular boutique stay shaped around a planted courtyard, using warm regional tones and precise prefabricated construction.', challenge: 'Bring a distinct contemporary identity to a repeatable hospitality system while providing shade, privacy, and a memorable arrival.', solution: 'Two-storey guest wings frame a reflective courtyard, with modular structural bays and perforated screens regulating light and views.', materiality: 'Pink sandstone-toned panels, terracotta screens, black steel, and limestone paving give the stay a refined Jaipur character.', technicalSpecs: [{ label: 'Configuration', value: 'Courtyard Guest Wings' }, { label: 'Facade', value: 'Screened Modular Panels' }, { label: 'Climate', value: 'Passive Shading' }], details: [{ label: 'Type', value: 'Boutique Hospitality' }, { label: 'Region', value: 'Rajasthan, India' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/jaipur-boutique-stay-hero.png', '/images/jaipur-boutique-stay-courtyard.png', '/images/jaipur-boutique-stay-arrival.png'] },
  { id: 'goa-coastal-retreat', title: 'Goa Coastal Retreat', category: 'Hospitality', location: 'Goa, India', year: '2026', image: '/images/goa-coastal-retreat-hero.png', description: 'A small modular coastal retreat of shaded guest suites, private decks, and landscaped water features designed for a tropical setting.', challenge: 'Deliver an elevated resort experience while managing strong sun, seasonal rain, and dense coastal planting.', solution: 'Independent factory-finished suites are connected by shaded paths and pool terraces, making phased construction possible with minimal site disruption.', materiality: 'White mineral walls, teak screens, dark aluminium, pale stone, and layered tropical planting keep the architecture cool and restrained.', technicalSpecs: [{ label: 'Format', value: 'Modular Resort Suites' }, { label: 'Climate', value: 'Tropical + Monsoon-ready' }, { label: 'Delivery', value: 'Phased Installation' }], details: [{ label: 'Type', value: 'Coastal Hospitality' }, { label: 'Region', value: 'Goa, India' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/goa-coastal-retreat-hero.png', '/images/goa-coastal-retreat-evening.png', '/images/goa-coastal-retreat-suite.png'] },
  { id: 'rishikesh-wellness-retreat', title: 'Rishikesh Wellness Retreat', category: 'Hospitality', location: 'Rishikesh, Uttarakhand, India', year: '2026', image: '/images/rishikesh-wellness-retreat-hero.png', description: 'An elevated modular wellness retreat with private cabins, a riverside yoga pavilion, and low-impact paths through a Himalayan landscape.', challenge: 'Protect a sensitive river-edge setting while giving guests quiet, comfortable spaces that connect to the surrounding forest.', solution: 'Lightweight modular cabins sit on slender supports, while a shared glass pavilion provides a flexible centre for wellness and gathering.', materiality: 'Charred timber, cedar screens, dark steel, glass, and local stone bring warmth and durability to the forested riverbank.', technicalSpecs: [{ label: 'Foundation', value: 'Elevated Light-touch Piers' }, { label: 'Shared Space', value: 'Yoga Pavilion' }, { label: 'Site Impact', value: 'Reduced Ground Works' }], details: [{ label: 'Type', value: 'Wellness Hospitality' }, { label: 'Region', value: 'Uttarakhand, India' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/rishikesh-wellness-retreat-hero.png', '/images/rishikesh-wellness-retreat-pavilion.png', '/images/rishikesh-wellness-retreat-aerial.png'] },
  { id: 'kerala-backwater-retreat', title: 'Kerala Backwater Retreat', category: 'Hospitality', location: 'Kerala, India', year: '2026', image: '/images/kerala-backwater-retreat-hero.png', description: 'A water-edge modular retreat of elevated villas and shaded verandas, designed to sit lightly within Kerala’s tropical backwater landscape.', challenge: 'Offer a high-quality waterside stay without heavy construction or disruption to the shoreline and surrounding vegetation.', solution: 'Prefabricated villas rest on slim supports above a carefully retained landscape, connecting to the water through small jetties and shared paths.', materiality: 'White composite panels, dark steel, weathered timber, local stone, and generous covered verandas provide a durable tropical palette.', technicalSpecs: [{ label: 'Configuration', value: 'Elevated Villa Modules' }, { label: 'Water Edge', value: 'Light-touch Jetty Access' }, { label: 'Climate', value: 'Tropical + Monsoon-ready' }], details: [{ label: 'Type', value: 'Backwater Hospitality' }, { label: 'Region', value: 'Kerala, India' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/kerala-backwater-retreat-hero.png', '/images/kerala-backwater-retreat-waterfront.png', '/images/kerala-backwater-retreat-interior.png'] },
  { id: 'modular-gym', title: 'Modular Gym', category: 'Amenities', location: 'Site-specific', year: '2026', image: '/images/modular-gym.jpg', description: 'A practical prefabricated fitness studio for communities, hotels, and workplaces.', details: [{ label: 'Type', value: 'Fitness' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-gym.jpg'] },
  { id: 'event-washroom-unit', title: 'Event Washroom Unit', category: 'Amenities', location: 'Site-specific', year: '2026', image: '/images/modular-washroom-event-unit.jpeg', description: 'A multi-cubicle mobile washroom unit that brings clean, practical facilities to events, festivals, and temporary sites.', challenge: 'Provide high-capacity, easy-access washrooms that can be deployed quickly while keeping the visitor experience orderly and comfortable.', solution: 'A towable prefabricated unit consolidates individual cubicles, handwashing provision, durable access stairs, and service connections into one ready-to-use facility.', materiality: 'Smooth white composite panels, robust black steel access stairs, durable door hardware, and a compact towable chassis create a clean, hard-wearing event solution.', technicalSpecs: [{ label: 'Format', value: 'Towable Multi-cubicle Unit' }, { label: 'Access', value: 'External Stairs + Handrails' }, { label: 'Deployment', value: 'Rapid On-site Setup' }], details: [{ label: 'Type', value: 'Mobile Washroom Facility' }, { label: 'Use', value: 'Events & Temporary Sites' }, { label: 'Status', value: 'Reference Work' }], gallery: ['/images/modular-washroom-event-unit.jpeg'] },
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
