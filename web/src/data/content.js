export const brand = {
  name: 'TechMitra',
  tagline: 'Technology That Moves Nepal Forward.',
  secondary: 'Born in Nepal. Built for the World.',
  location: 'Kathmandu, Nepal',
  email: 'hello@techmitra.com',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/techmitra' },
  { label: 'Instagram', href: 'https://instagram.com/techmitra' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/techmitra' },
  { label: 'GitHub', href: 'https://github.com/techmitra' },
]

export const services = [
  {
    id: 'web',
    label: 'WEB',
    title: 'Web Development',
    description:
      'High-performance websites and web applications designed around your business.',
    detail:
      'From marketing sites to complex portals, we design and engineer experiences that load fast, convert clearly, and stay maintainable as you grow.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    outcomes: ['Faster launches', 'Clearer conversion paths', 'Scalable architecture'],
  },
  {
    id: 'mobile',
    label: 'MOBILE',
    title: 'Mobile App Development',
    description:
      'Native-feeling mobile products that keep customers engaged on every screen.',
    detail:
      'We build Android and iOS experiences with practical UX, reliable APIs, and release pipelines that keep updates shipping.',
    stack: ['React Native', 'Flutter', 'Firebase'],
    outcomes: ['Higher retention', 'Offline-ready flows', 'Store-ready delivery'],
  },
  {
    id: 'erp',
    label: 'ERP',
    title: 'ERP & Business Systems',
    description:
      'Operational systems that unify inventory, finance, HR and reporting.',
    detail:
      'Replace scattered spreadsheets with one operational system tailored to how Nepali and regional businesses actually work.',
    stack: ['Custom ERP', 'Integrations', 'Analytics'],
    outcomes: ['Fewer manual errors', 'Live operational visibility', 'Faster decisions'],
  },
  {
    id: 'saas',
    label: 'SAAS',
    title: 'SaaS Products',
    description:
      'Subscription-ready platforms built to onboard users and scale cleanly.',
    detail:
      'Multi-tenant products with billing, roles, dashboards and the infrastructure needed to grow a recurring revenue business.',
    stack: ['Multi-tenant', 'Billing', 'Dashboards'],
    outcomes: ['Faster onboarding', 'Recurring revenue ready', 'Admin control'],
  },
  {
    id: 'cloud',
    label: 'CLOUD',
    title: 'Cloud & DevOps',
    description:
      'Reliable infrastructure with monitoring, backups and performance tuning.',
    detail:
      'Deployments, servers, SSL, monitoring and backups configured for uptime — without unnecessary complexity.',
    stack: ['VPS', 'CI/CD', 'Monitoring'],
    outcomes: ['Stable uptime', 'Safer releases', 'Clear monitoring'],
  },
  {
    id: 'ai',
    label: 'AI',
    title: 'AI & Automation',
    description:
      'Practical automation that reduces repetitive work and improves decisions.',
    detail:
      'Chatbots, document workflows and business intelligence that remove busywork and surface useful signals.',
    stack: ['Chatbots', 'Workflows', 'BI'],
    outcomes: ['Less repetitive work', 'Faster responses', 'Better insight'],
  },
  {
    id: 'security',
    label: 'SECURITY',
    title: 'Cybersecurity',
    description:
      'Security practices woven into design, deployment and ongoing operations.',
    detail:
      'Authentication, audits, backups and monitoring built into the stack — without absolute security claims.',
    stack: ['Audits', 'Auth', 'Backups'],
    outcomes: ['Hardened access', 'Recoverable systems', 'Ongoing visibility'],
  },
  {
    id: 'digital',
    label: 'DIGITAL',
    title: 'Digital Marketing',
    description:
      'Brand presence and campaigns that turn attention into measurable growth.',
    detail:
      'SEO, content and paid campaigns aligned with the products and funnels we help you build.',
    stack: ['SEO', 'Content', 'Ads'],
    outcomes: ['Qualified traffic', 'Clearer messaging', 'Measurable leads'],
  },
]

export const solutions = [
  {
    id: 'startups',
    title: 'Startups',
    description: 'Launch and validate ideas faster.',
    detail:
      'MVPs, landing systems and early product infrastructure so founders can test demand without overbuilding.',
    focus: ['MVP builds', 'Product UX', 'Launch infrastructure'],
  },
  {
    id: 'smes',
    title: 'SMEs',
    description: 'Automate operations and improve efficiency.',
    detail:
      'ERP, POS, inventory and customer systems that replace scattered tools and manual follow-ups.',
    focus: ['Operations automation', 'Reporting', 'Team workflows'],
  },
  {
    id: 'enterprises',
    title: 'Enterprises',
    description: 'Build scalable digital infrastructure.',
    detail:
      'Integrations, internal platforms and cloud architecture designed for multi-team reliability.',
    focus: ['Integrations', 'Governance', 'Scale'],
  },
  {
    id: 'institutions',
    title: 'Institutions',
    description: 'Modernize workflows and services.',
    detail:
      'Digital services for education, healthcare and public-facing organizations with clarity and accessibility.',
    focus: ['Service portals', 'Process digitization', 'Support systems'],
  },
]

export const industries = [
  'Restaurants',
  'Retail',
  'Education',
  'Healthcare',
  'Hospitality',
  'Logistics',
  'Finance',
  'Real Estate',
]

export const products = [
  {
    id: 'restro-sewa',
    name: 'Restro Sewa',
    category: 'Restaurant Platform',
    description:
      'Restaurant technology for ordering, inventory and day-to-day operations.',
    features: ['POS', 'QR Ordering', 'Inventory', 'Orders', 'Analytics'],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'bakery-erp',
    name: 'Bakery ERP',
    category: 'ERP System',
    description:
      'End-to-end bakery operations from production planning to outlet management.',
    features: ['Production', 'Inventory', 'Outlets', 'Finance', 'Staff'],
    tech: ['React', 'Express', 'MongoDB'],
  },
  {
    id: 'koseli-xpress',
    name: 'Koseli Xpress',
    category: 'E-commerce & Logistics',
    description:
      'Commerce and delivery workflows for regional gift and parcel experiences.',
    features: ['E-commerce', 'Orders', 'Logistics', 'Delivery'],
    tech: ['Next.js', 'Node.js', 'Maps APIs'],
  },
]

export const projects = [
  {
    id: 'restro',
    category: 'SaaS Product',
    name: 'Restro Sewa',
    description: 'A restaurant operating system for Nepali hospitality teams.',
    tech: 'React · Node · PostgreSQL',
  },
  {
    id: 'bakery',
    category: 'ERP',
    name: 'Bakery ERP',
    description: 'Production-to-outlet visibility for growing bakery networks.',
    tech: 'React · Express · MongoDB',
  },
  {
    id: 'koseli',
    category: 'Commerce',
    name: 'Koseli Xpress',
    description: 'Order and logistics flow designed for regional delivery.',
    tech: 'Next.js · Node · Maps',
  },
  {
    id: 'custom',
    category: 'Custom Software',
    name: 'Business Platforms',
    description: 'Tailored systems for retail, education and service businesses.',
    tech: 'Full-stack · Cloud · Integrations',
  },
]

export const processSteps = [
  { id: 'discover', number: '01', title: 'Discover', visual: 'idea' },
  { id: 'strategy', number: '02', title: 'Strategy', visual: 'network' },
  { id: 'design', number: '03', title: 'Design', visual: 'wireframe' },
  { id: 'build', number: '04', title: 'Build', visual: 'code' },
  { id: 'test', number: '05', title: 'Test', visual: 'shield' },
  { id: 'deploy', number: '06', title: 'Deploy', visual: 'cloud' },
  { id: 'grow', number: '07', title: 'Grow', visual: 'global' },
]

export const aiNodes = [
  'Automation',
  'AI Chatbots',
  'Document Processing',
  'Business Intelligence',
  'Recommendation Systems',
  'Workflow Automation',
]

export const cloudLayers = [
  'User',
  'Application',
  'API',
  'Database',
  'Cloud',
  'Backup',
]

export const cloudServices = [
  'VPS',
  'Cloud Deployment',
  'Server Management',
  'SSL',
  'Monitoring',
  'Backups',
  'Performance Optimization',
]

export const securityItems = [
  'Website Security',
  'Security Audits',
  'Authentication',
  'Backups',
  'Monitoring',
  'Secure Infrastructure',
]

export const values = [
  {
    title: 'Innovation',
    description: 'Practical ideas that move products and teams forward.',
  },
  {
    title: 'Trust',
    description: 'Clear communication and dependable delivery.',
  },
  {
    title: 'Growth',
    description: 'Systems designed to expand with the business.',
  },
  {
    title: 'Partnership',
    description: 'A technology companion, not a one-off vendor.',
  },
]

export const nepalLocations = [
  { id: 'everest', name: 'Mount Everest', x: 0.72, y: 0.28 },
  { id: 'kathmandu', name: 'Kathmandu', x: 0.48, y: 0.52 },
  { id: 'pokhara', name: 'Pokhara', x: 0.32, y: 0.48 },
  { id: 'chitwan', name: 'Chitwan', x: 0.42, y: 0.68 },
  { id: 'lumbini', name: 'Lumbini', x: 0.28, y: 0.72 },
  { id: 'mustang', name: 'Mustang', x: 0.22, y: 0.36 },
  { id: 'bhaktapur', name: 'Bhaktapur', x: 0.54, y: 0.54 },
  { id: 'janakpur', name: 'Janakpur', x: 0.62, y: 0.74 },
]

export const insights = [
  {
    id: 'website-cost',
    category: 'Business',
    title: 'How Much Does a Business Website Cost in Nepal?',
    excerpt: 'A practical breakdown of scope, timelines and investment ranges.',
    readTime: '6 min',
    body: 'Website cost depends on scope, integrations, content and ongoing care. A brochure site differs from a productized portal with auth, payments and admin tooling. We help teams map required outcomes first, then price the build against that reality.',
  },
  {
    id: 'excel-erp',
    category: 'Technology',
    title: 'Why SMEs Are Moving From Excel to ERP',
    excerpt: 'When spreadsheets stop scaling and systems start paying off.',
    readTime: '5 min',
    body: 'Spreadsheets work until multiple staff edit conflicting versions, inventory drifts and reporting becomes a weekend chore. ERP is useful when operations need shared truth — not when you only need a simple checklist.',
  },
  {
    id: 'ai-ops',
    category: 'AI',
    title: 'How AI Can Automate Business Operations',
    excerpt: 'Where automation creates real time savings for growing teams.',
    readTime: '7 min',
    body: 'The highest-ROI AI work is usually unglamorous: drafting replies, classifying documents, summarizing tickets and flagging exceptions. Start with repetitive queues, then expand once quality and oversight are clear.',
  },
  {
    id: 'vps-choice',
    category: 'Cloud',
    title: 'How to Choose the Right VPS for Your Business',
    excerpt: 'Performance, security and cost factors that actually matter.',
    readTime: '5 min',
    body: 'Choose capacity for peak traffic, place servers near your users, and insist on backups, monitoring and a patch plan. Cheap compute without recovery is expensive the first time something fails.',
  },
  {
    id: 'digital-transformation',
    category: 'Digital Transformation',
    title: 'A Practical Path to Digital Transformation in Nepal',
    excerpt: 'Modernize operations without buying every shiny tool at once.',
    readTime: '8 min',
    body: 'Transformation works best as sequenced upgrades: stabilize core operations, digitize customer journeys, then automate. TechMitra partners with teams to prioritize the next useful system — not a vague roadmap.',
  },
  {
    id: 'cybersecurity-basics',
    category: 'Cybersecurity',
    title: 'Security Basics Every Growing Business Should Have',
    excerpt: 'Authentication, backups and monitoring before advanced tooling.',
    readTime: '6 min',
    body: 'Most incidents exploit weak access, unpatched software or missing backups. Start with MFA, least privilege, tested restores and monitoring — then deepen controls as risk grows.',
  },
]

/** Testimonials intentionally empty until genuine client quotes are supplied. */
export const testimonials = []

/** Open roles — keep empty or real only; no invented positions. */
export const careers = []

export const careerBenefits = [
  {
    id: 'craft',
    title: 'Meaningful craft',
    description: 'Ship products that help Nepali businesses operate better every day.',
  },
  {
    id: 'growth',
    title: 'Growth with mentorship',
    description: 'Learn modern stacks with clear feedback and ownership.',
  },
  {
    id: 'flexibility',
    title: 'Flexible collaboration',
    description: 'Hybrid-friendly ways of working focused on outcomes.',
  },
  {
    id: 'impact',
    title: 'Local impact, global tech',
    description: 'Build from Nepal with standards that travel anywhere.',
  },
]

export const whyChooseUs = [
  {
    title: 'Partner mindset',
    description: 'We stay with you after launch — systems, support and iteration.',
  },
  {
    title: 'Business-first delivery',
    description: 'Technology choices follow outcomes, not trend checklists.',
  },
  {
    title: 'Nepal context',
    description: 'Local operations knowledge with modern engineering practices.',
  },
  {
    title: 'Clear communication',
    description: 'Transparent timelines, scoped milestones and honest tradeoffs.',
  },
]

