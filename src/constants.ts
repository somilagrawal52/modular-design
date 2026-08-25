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
    id: 'western-ghats-modular-retreat', title: 'Western Ghats Modular Retreat', category: 'Hospitality', location: 'Western Ghats, India', year: '2026', image: '/images/western-ghats-retreat-masterplan.jpg',
    description: 'A monsoon-ready boutique retreat formed from repeatable prefabricated guest suites, placed lightly across a forested Western Ghats slope.',
    challenge: 'Create a comfortable hospitality destination on sensitive sloping land while limiting heavy construction, managing intense rainfall, and preserving mature vegetation.',
    solution: 'Factory-built guest-room modules sit on small pier foundations and connect through stone paths to a shared modular reception and breakfast pavilion, allowing phased installation with reduced site disturbance.',
    materiality: 'Charcoal steel frames, warm timber rain screens, off-white insulated panels, standing-seam roofs, and locally sourced laterite plinths give the retreat a practical regional character.',
    technicalSpecs: [{ label: 'Accommodation', value: '6 Guest-room Modules' }, { label: 'Foundation', value: 'Low-impact Piers' }, { label: 'Climate', value: 'Monsoon-ready Envelope' }],
    details: [{ label: 'Type', value: 'Modular Eco-retreat' }, { label: 'Region', value: 'Western Ghats, India' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/western-ghats-retreat-masterplan.jpg', '/images/western-ghats-retreat-guest-suite.jpg', '/images/western-ghats-retreat-reception.jpg']
  },
  {
    id: 'modular-retail-showroom', title: 'Modular Retail Showroom', category: 'Commercial', location: 'Site-specific', year: '2026', image: '/images/modular-retail-realistic.jpg',
    description: 'A practical modular retail showroom with adaptable display space, generous glazing, and a clean customer-facing arrival.',
    challenge: 'Create an adaptable retail space that can open quickly and deliver a clear customer experience.', solution: 'Prefabricated volumes form a flexible showroom shell with display zones, storage, and an efficient customer entry.',
    materiality: 'Clean panel cladding, black-framed glazing, simple awnings, and durable paving give the showroom a practical commercial finish.',
    technicalSpecs: [{ label: 'Format', value: 'Retail Module' }, { label: 'Use', value: 'Showroom & Pop-Up' }, { label: 'Installation', value: 'Low-disruption' }],
    details: [{ label: 'Type', value: 'Retail Showroom' }, { label: 'Use', value: 'Customer Display' }, { label: 'Status', value: 'Concept Study' }],
    gallery: ['/images/modular-retail-realistic.jpg', '/images/modular-retail-interior.png']
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
  { id: 'modular-hotel', title: 'Modular Hotel', category: 'Hospitality', location: 'Site-specific', year: '2026', image: '/images/modular-hotel-realistic.jpg', description: 'A low-rise modular hotel with repeatable guest-room modules, efficient circulation, and phased growth potential.', details: [{ label: 'Type', value: 'Hotel' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-hotel-realistic.jpg'] },
  { id: 'compact-roadside-cafe', title: 'Compact Roadside Café', category: 'Commercial', location: 'India', year: '2026', image: '/images/compact-roadside-cafe-hero.png', description: 'A single-module café with fast service, a shaded terrace, and a crisp modern identity.', details: [{ label: 'Type', value: 'Compact Café Module' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/compact-roadside-cafe-hero.png', '/images/compact-roadside-cafe-interior.png', '/images/compact-roadside-cafe-terrace.png'] },
  { id: 'modular-rooftop-restaurant', title: 'Modular Rooftop Restaurant', category: 'Commercial', location: 'India', year: '2026', image: '/images/modular-rooftop-restaurant-hero.png', description: 'A glass-and-steel modular restaurant designed for compact urban rooftops.', details: [{ label: 'Type', value: 'Rooftop Restaurant' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-rooftop-restaurant-hero.png', '/images/modular-rooftop-restaurant-interior.png', '/images/modular-rooftop-restaurant-terrace.png'] },
  { id: 'modular-forest-cafe', title: 'Modular Forest Café', category: 'Commercial', location: 'India', year: '2026', image: '/images/forest-cafe-hero.png', description: 'A low-impact modular café that connects warm interior service spaces with a forest deck.', details: [{ label: 'Type', value: 'Forest Café Module' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/forest-cafe-hero.png', '/images/forest-cafe-interior.png', '/images/forest-cafe-deck.png'] },
  { id: 'darjeeling-tea-cafe', title: 'Darjeeling Tea Café', category: 'Commercial', location: 'Darjeeling, India', year: '2026', image: '/images/darjeeling-tea-cafe.png', description: 'A compact modular tea café with warm timber interiors and misty hillside views.', details: [{ label: 'Type', value: 'Café Module' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/darjeeling-tea-cafe.png', '/images/darjeeling-tea-cafe-interior.png', '/images/darjeeling-tea-cafe-terrace.png'] },
  { id: 'hampi-courtyard-restaurant', title: 'Hampi Courtyard Restaurant', category: 'Commercial', location: 'Hampi, Karnataka, India', year: '2026', image: '/images/hampi-courtyard-restaurant.png', description: 'A shaded modular courtyard restaurant designed for rest, dining, and clear landscape connection.', details: [{ label: 'Type', value: 'Restaurant Module' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/hampi-courtyard-restaurant.png', '/images/hampi-courtyard-restaurant-interior.png', '/images/hampi-courtyard-restaurant-exterior.png'] },
  { id: 'manali-mountain-restaurant', title: 'Manali Mountain Restaurant', category: 'Commercial', location: 'Manali, Himachal Pradesh, India', year: '2026', image: '/images/manali-mountain-restaurant.png', description: 'A glazed modular mountain restaurant that pairs warm dining spaces with panoramic forest views.', details: [{ label: 'Type', value: 'Restaurant Module' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/manali-mountain-restaurant.png', '/images/manali-mountain-restaurant-interior.png', '/images/manali-mountain-restaurant-terrace.png'] },
  { id: 'pondicherry-coastal-cafe', title: 'Pondicherry Coastal Café', category: 'Commercial', location: 'Pondicherry, India', year: '2026', image: '/images/pondicherry-coastal-cafe.png', description: 'A compact modular café arranged around a cool tropical courtyard.', details: [{ label: 'Type', value: 'Café Module' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/pondicherry-coastal-cafe.png', '/images/pondicherry-coastal-cafe-interior.png', '/images/pondicherry-coastal-cafe-courtyard.png'] },
  { id: 'darjeeling-tea-pavilion', title: 'Darjeeling Tea Pavilion', category: 'Hospitality', location: 'Darjeeling, India', year: '2026', image: '/images/darjeeling-tea-pavilion.png', description: 'A compact modular tea pavilion with one guest suite, framed by misty hillside views.', details: [{ label: 'Type', value: 'Tea Pavilion' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/darjeeling-tea-pavilion.png', '/images/darjeeling-tea-pavilion-gallery.png', '/images/darjeeling-tea-pavilion-detail.png'] },
  { id: 'hampi-visitor-pavilion', title: 'Hampi Visitor Pavilion', category: 'Amenities', location: 'Hampi, Karnataka, India', year: '2026', image: '/images/hampi-visitor-pavilion.png', description: 'A shaded modular visitor pavilion designed for clear arrival, rest, and orientation.', details: [{ label: 'Type', value: 'Visitor Amenity' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/hampi-visitor-pavilion.png', '/images/hampi-visitor-pavilion-gallery.png', '/images/hampi-visitor-pavilion-detail.png'] },
  { id: 'manali-mountain-cafe', title: 'Manali Mountain Café', category: 'Commercial', location: 'Manali, Himachal Pradesh, India', year: '2026', image: '/images/manali-mountain-cafe.png', description: 'A compact modular café with warm interiors and panoramic mountain views.', details: [{ label: 'Type', value: 'Café Module' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/manali-mountain-cafe.png', '/images/manali-mountain-cafe-gallery.png', '/images/manali-mountain-cafe-detail.png'] },
  { id: 'pondicherry-arrival-pavilion', title: 'Pondicherry Arrival Pavilion', category: 'Amenities', location: 'Pondicherry, India', year: '2026', image: '/images/pondicherry-arrival-pavilion.png', description: 'A concise modular arrival pavilion organised around a calm tropical courtyard.', details: [{ label: 'Type', value: 'Arrival Amenity' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/pondicherry-arrival-pavilion.png', '/images/pondicherry-arrival-pavilion-gallery.png', '/images/pondicherry-arrival-pavilion-detail.png'] },
  { id: 'udaipur-lakeside-retreat', title: 'Udaipur Lakeside Retreat', category: 'Hospitality', location: 'Udaipur, Rajasthan, India', year: '2026', image: '/images/udaipur-lakeside-retreat-hero.png', description: 'A modular lakeside boutique retreat with shaded guest suites and calm water-facing terraces.', details: [{ label: 'Type', value: 'Lakeside Hospitality' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/udaipur-lakeside-retreat-hero.png', '/images/udaipur-lakeside-retreat-courtyard.png', '/images/udaipur-lakeside-retreat-suite.png'] },
  { id: 'coorg-forest-retreat', title: 'Coorg Forest Retreat', category: 'Hospitality', location: 'Coorg, Karnataka, India', year: '2026', image: '/images/coorg-forest-retreat-hero.png', description: 'A low-impact modular retreat of timber-and-glass suites set among coffee estate planting and misty hills.', details: [{ label: 'Type', value: 'Forest Hospitality' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/coorg-forest-retreat-hero.png', '/images/coorg-forest-retreat-terrace.png', '/images/coorg-forest-retreat-interior.png'] },
  { id: 'ladakh-highland-retreat', title: 'Ladakh Highland Retreat', category: 'Hospitality', location: 'Ladakh, India', year: '2026', image: '/images/ladakh-highland-retreat-hero.png', description: 'An insulated modular high-altitude retreat with warm guest suites and a sheltered shared lounge.', details: [{ label: 'Type', value: 'High-altitude Hospitality' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/ladakh-highland-retreat-hero.png', '/images/ladakh-highland-retreat-evening.png', '/images/ladakh-highland-retreat-aerial.png'] },
  { id: 'kutch-salt-retreat', title: 'Kutch Salt Retreat', category: 'Hospitality', location: 'Kutch, Gujarat, India', year: '2026', image: '/images/kutch-salt-retreat-hero.png', description: 'A restrained modular retreat designed for the wide, bright landscape of Gujarat’s salt desert.', details: [{ label: 'Type', value: 'Desert Hospitality' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/kutch-salt-retreat-hero.png', '/images/kutch-salt-retreat-evening.png', '/images/kutch-salt-retreat-interior.png'] },
  { id: 'jaisalmer-desert-camp', title: 'Jaisalmer Desert Camp', category: 'Hospitality', location: 'Jaisalmer, Rajasthan, India', year: '2026', image: '/images/jaisalmer-desert-camp-hero.png', description: 'A contemporary modular desert camp that combines private guest suites, a shaded central lounge, and low-impact site planning for the Thar landscape.', challenge: 'Create a premium hospitality experience that responds to heat, wind, and the fragility of a desert site.', solution: 'Prefabricated suites are placed on light-touch foundations around a shared pavilion, with deep overhangs, sheltered outdoor rooms, and efficient off-site fabrication.', materiality: 'Sand-toned mineral panels, bronzed frames, glazed openings, and local stone create a calm palette that sits naturally within the dunes.', technicalSpecs: [{ label: 'Accommodation', value: 'Modular Guest Suites' }, { label: 'Climate', value: 'Desert-ready Envelope' }, { label: 'Site Strategy', value: 'Low-impact Foundations' }], details: [{ label: 'Type', value: 'Desert Hospitality' }, { label: 'Region', value: 'Rajasthan, India' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/jaisalmer-desert-camp-hero.png', '/images/jaisalmer-desert-camp-evening.png', '/images/jaisalmer-desert-camp-aerial.png'] },
  { id: 'jaipur-boutique-stay', title: 'Jaipur Boutique Stay', category: 'Hospitality', location: 'Jaipur, Rajasthan, India', year: '2026', image: '/images/jaipur-boutique-stay-hero.png', description: 'A modular boutique stay shaped around a planted courtyard, using warm regional tones and precise prefabricated construction.', challenge: 'Bring a distinct contemporary identity to a repeatable hospitality system while providing shade, privacy, and a memorable arrival.', solution: 'Two-storey guest wings frame a reflective courtyard, with modular structural bays and perforated screens regulating light and views.', materiality: 'Pink sandstone-toned panels, terracotta screens, black steel, and limestone paving give the stay a refined Jaipur character.', technicalSpecs: [{ label: 'Configuration', value: 'Courtyard Guest Wings' }, { label: 'Facade', value: 'Screened Modular Panels' }, { label: 'Climate', value: 'Passive Shading' }], details: [{ label: 'Type', value: 'Boutique Hospitality' }, { label: 'Region', value: 'Rajasthan, India' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/jaipur-boutique-stay-hero.png', '/images/jaipur-boutique-stay-courtyard.png', '/images/jaipur-boutique-stay-arrival.png'] },
  { id: 'goa-coastal-retreat', title: 'Goa Coastal Retreat', category: 'Hospitality', location: 'Goa, India', year: '2026', image: '/images/goa-coastal-retreat-hero.png', description: 'A small modular coastal retreat of shaded guest suites, private decks, and landscaped water features designed for a tropical setting.', challenge: 'Deliver an elevated resort experience while managing strong sun, seasonal rain, and dense coastal planting.', solution: 'Independent factory-finished suites are connected by shaded paths and pool terraces, making phased construction possible with minimal site disruption.', materiality: 'White mineral walls, teak screens, dark aluminium, pale stone, and layered tropical planting keep the architecture cool and restrained.', technicalSpecs: [{ label: 'Format', value: 'Modular Resort Suites' }, { label: 'Climate', value: 'Tropical + Monsoon-ready' }, { label: 'Delivery', value: 'Phased Installation' }], details: [{ label: 'Type', value: 'Coastal Hospitality' }, { label: 'Region', value: 'Goa, India' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/goa-coastal-retreat-hero.png', '/images/goa-coastal-retreat-evening.png', '/images/goa-coastal-retreat-suite.png'] },
  { id: 'rishikesh-wellness-retreat', title: 'Rishikesh Wellness Retreat', category: 'Hospitality', location: 'Rishikesh, Uttarakhand, India', year: '2026', image: '/images/rishikesh-wellness-retreat-hero.png', description: 'An elevated modular wellness retreat with private cabins, a riverside yoga pavilion, and low-impact paths through a Himalayan landscape.', challenge: 'Protect a sensitive river-edge setting while giving guests quiet, comfortable spaces that connect to the surrounding forest.', solution: 'Lightweight modular cabins sit on slender supports, while a shared glass pavilion provides a flexible centre for wellness and gathering.', materiality: 'Charred timber, cedar screens, dark steel, glass, and local stone bring warmth and durability to the forested riverbank.', technicalSpecs: [{ label: 'Foundation', value: 'Elevated Light-touch Piers' }, { label: 'Shared Space', value: 'Yoga Pavilion' }, { label: 'Site Impact', value: 'Reduced Ground Works' }], details: [{ label: 'Type', value: 'Wellness Hospitality' }, { label: 'Region', value: 'Uttarakhand, India' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/rishikesh-wellness-retreat-hero.png', '/images/rishikesh-wellness-retreat-pavilion.png', '/images/rishikesh-wellness-retreat-aerial.png'] },
  { id: 'kerala-backwater-retreat', title: 'Kerala Backwater Retreat', category: 'Hospitality', location: 'Kerala, India', year: '2026', image: '/images/kerala-backwater-retreat-hero.png', description: 'A water-edge modular retreat of elevated villas and shaded verandas, designed to sit lightly within Kerala’s tropical backwater landscape.', challenge: 'Offer a high-quality waterside stay without heavy construction or disruption to the shoreline and surrounding vegetation.', solution: 'Prefabricated villas rest on slim supports above a carefully retained landscape, connecting to the water through small jetties and shared paths.', materiality: 'White composite panels, dark steel, weathered timber, local stone, and generous covered verandas provide a durable tropical palette.', technicalSpecs: [{ label: 'Configuration', value: 'Elevated Villa Modules' }, { label: 'Water Edge', value: 'Light-touch Jetty Access' }, { label: 'Climate', value: 'Tropical + Monsoon-ready' }], details: [{ label: 'Type', value: 'Backwater Hospitality' }, { label: 'Region', value: 'Kerala, India' }, { label: 'Status', value: 'Reference Proposal' }], gallery: ['/images/kerala-backwater-retreat-hero.png', '/images/kerala-backwater-retreat-waterfront.png', '/images/kerala-backwater-retreat-interior.png'] },
  { id: 'modular-clinic', title: 'Modular Clinic & Classroom', category: 'Community', location: 'Site-specific', year: '2026', image: '/images/modular-clinic-realistic.jpg', description: 'An accessible modular building for clinics, classrooms, training centres, and community spaces.', details: [{ label: 'Type', value: 'Community Building' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-clinic-realistic.jpg'] },
  { id: 'workforce-accommodation', title: 'Workforce Accommodation', category: 'Community', location: 'Site-specific', year: '2026', image: '/images/modular-workforce.jpg', description: 'Practical prefabricated accommodation modules designed for fast deployment and everyday comfort.', details: [{ label: 'Type', value: 'Accommodation' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-workforce.jpg'] },
  { id: 'modular-classroom', title: 'Modular Classroom', category: 'Community', location: 'Site-specific', year: '2026', image: '/images/modular-classroom.jpg', description: 'A flexible, accessible classroom building that expands with changing school needs.', details: [{ label: 'Type', value: 'Education' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-classroom.jpg'] },
  { id: 'modular-site-office', title: 'Site Office & Security', category: 'Workplace', location: 'Site-specific', year: '2026', image: '/images/modular-site-office.jpg', description: 'A compact site office and security unit for controlled access, administration, and project coordination.', details: [{ label: 'Type', value: 'Site Office' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-site-office.jpg'] },
  { id: 'modular-gym', title: 'Modular Gym', category: 'Amenities', location: 'Site-specific', year: '2026', image: '/images/modular-gym.jpg', description: 'A practical prefabricated fitness studio for communities, hotels, and workplaces.', details: [{ label: 'Type', value: 'Fitness' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-gym.jpg'] },
  { id: 'modular-restroom', title: 'Restroom & Shower Block', category: 'Amenities', location: 'Site-specific', year: '2026', image: '/images/modular-restroom.jpg', description: 'A durable accessible modular restroom and shower building for parks, events, and worksites.', details: [{ label: 'Type', value: 'Amenities' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-restroom.jpg', '/images/modular-washroom-event-unit.jpeg'] },
  { id: 'event-washroom-unit', title: 'Event Washroom Unit', category: 'Amenities', location: 'Site-specific', year: '2026', image: '/images/modular-washroom-event-unit.jpeg', description: 'A multi-cubicle mobile washroom unit that brings clean, practical facilities to events, festivals, and temporary sites.', challenge: 'Provide high-capacity, easy-access washrooms that can be deployed quickly while keeping the visitor experience orderly and comfortable.', solution: 'A towable prefabricated unit consolidates individual cubicles, handwashing provision, durable access stairs, and service connections into one ready-to-use facility.', materiality: 'Smooth white composite panels, robust black steel access stairs, durable door hardware, and a compact towable chassis create a clean, hard-wearing event solution.', technicalSpecs: [{ label: 'Format', value: 'Towable Multi-cubicle Unit' }, { label: 'Access', value: 'External Stairs + Handrails' }, { label: 'Deployment', value: 'Rapid On-site Setup' }], details: [{ label: 'Type', value: 'Mobile Washroom Facility' }, { label: 'Use', value: 'Events & Temporary Sites' }, { label: 'Status', value: 'Reference Work' }], gallery: ['/images/modular-washroom-event-unit.jpeg'] },
  { id: 'modular-canteen', title: 'Modular Kitchen & Canteen', category: 'Commercial', location: 'Site-specific', year: '2026', image: '/images/modular-canteen.jpg', description: 'A transportable commercial kitchen and canteen for staff, campuses, and events.', details: [{ label: 'Type', value: 'Food Service' }, { label: 'Status', value: 'Concept Study' }], gallery: ['/images/modular-canteen.jpg'] }
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
