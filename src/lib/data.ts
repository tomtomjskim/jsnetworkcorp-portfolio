import type { Project, ScreenSpec } from './types';

export const projects: Project[] = [
  {
    slug: 'burstexpress-platform',
    name: 'BurstExpress / Frecto PHP Ecommerce Modernization',
    family: 'legacy-modernization',
    summary: 'PHP ecommerce mirror with DDD-style domain, application, infrastructure, and legacy compatibility layers.',
    stack: ['PHP', 'DDD', 'Composer', 'Legacy Modernization'],
    publicStatus: 'sanitized',
    status: 'v0.2.0 sanitized case page',
    problem: 'A legacy PHP ecommerce surface needs modernization evidence without exposing production data.',
    approach: 'Frame the mirror as a DDD migration and admin-domain case using sanitized screen specs and diagrams.',
    publicEvidence: [
      'Admin domain map organized around board, event, banner, coupon, and product-management surfaces.',
      'Synthetic coupon lifecycle showing business-rule complexity without order or customer records.',
      'Merchandising workflow summary for banner scheduling, product linkage, and active-state control.'
    ],
    redactionNotes: [
      'No production hostnames, merchant identifiers, customer data, order data, or payment records.',
      'Screens use synthetic labels and placeholder wireframes until redacted screenshots are approved.'
    ],
    verification: ['README and code-path review complete', 'public redaction pass complete', 'raw admin data excluded'],
    screens: ['S-BE-001', 'S-BE-002', 'S-BE-003'],
    nextMilestone: 'Replace placeholder wireframes with approved redacted admin-flow captures.'
  },
  {
    slug: 'live-commerce',
    name: 'BurstExpress Live Commerce Integration',
    family: 'product-engineering',
    summary: 'Node.js + LiveKit live-commerce extension connected to a PHP ecommerce marketplace.',
    stack: ['Node.js', 'Express', 'WebSocket', 'LiveKit', 'MySQL'],
    publicStatus: 'sanitized',
    status: 'v0.2.0 sanitized case page',
    problem: 'Existing marketplace context must support live video, chat, product overlay, admin moderation, and PIP embed.',
    approach: 'Show PHP marketplace + Node live backend + LiveKit architecture through screen-first portfolio evidence.',
    publicEvidence: [
      'Viewer journey from stream discovery to live room, chat, and product overlay.',
      'Moderation surface covering blind, forced stop, seller suspension, blacklist, and mute actions.',
      'Integration boundary between commerce data, realtime transport, and WebRTC room state.'
    ],
    redactionNotes: [
      'No production stream keys, API endpoints, seller identifiers, buyer identifiers, or chat logs.',
      'Counts and room states are represented as synthetic states until live measurements are rechecked.'
    ],
    verification: ['repo docs reviewed', 'public architecture boundary reviewed', 'deployment metrics require remeasurement'],
    screens: ['S-LC-001', 'S-LC-002', 'S-LC-003'],
    nextMilestone: 'Add sanitized sequence diagram for stream creation, viewer join, chat, and product click-through.'
  },
  {
    slug: 'mykitchen',
    name: 'mykitchen',
    family: 'product-engineering',
    summary: 'Flutter + NestJS personal food inventory and household expense product.',
    stack: ['Flutter', 'NestJS', 'TypeScript', 'E2E'],
    publicStatus: 'sanitized',
    status: 'v0.2.0 sanitized case page',
    problem: 'Food inventory, price history, expiry, and recipe consumption need a clear product flow.',
    approach: 'Use dashboard, ingredient detail, and consumption screens to expose data model and validation.',
    publicEvidence: [
      'Inventory dashboard states for expiry risk, empty inventory, and shopping signals.',
      'Ingredient detail model covering price history, expiry history, and validation failures.',
      'Household-oriented product flow that can be explained without personal purchase records.'
    ],
    redactionNotes: [
      'No personal grocery records, addresses, receipts, account values, or real household data.',
      'Example values must remain synthetic until a demo fixture is approved.'
    ],
    verification: ['E2E evidence pending recheck', 'scenario validation pending recheck', 'private fixture data excluded'],
    screens: ['S-MK-001', 'S-MK-002'],
    nextMilestone: 'Add one sanitized consumption-flow screen after scenario validation is rerun.'
  },
  {
    slug: 'llm-wiki-starter',
    name: 'LLM Wiki Starter / Personal Wiki Pattern',
    family: 'ai-workflow-agent-tooling',
    summary: 'Git/Markdown source-of-truth and context-pack workflow pattern for AI-assisted work.',
    stack: ['Markdown', 'Git', 'LLM Context', 'Knowledge System'],
    publicStatus: 'public',
    status: 'knowledge-system case',
    problem: 'Raw AI memory and generated notes need trust levels, review flow, and context export boundaries.',
    approach: 'Show inbox/generated/reviewed/canonical flow and context-pack export as productized screens.',
    publicEvidence: [
      'Trust-level workflow for generated, reviewed, and canonical notes.',
      'Context-pack export boundary for moving reviewed knowledge between AI sessions.',
      'Public-safe operating pattern separated from private personal wiki contents.'
    ],
    redactionNotes: [
      'No private wiki pages, raw transcripts, personal notes, credentials, or private workspace paths.',
      'Public examples describe the workflow pattern rather than the private knowledge base.'
    ],
    verification: ['public starter link pending', 'private wiki details excluded', 'content boundary reviewed'],
    screens: ['S-WIKI-001', 'S-WIKI-002'],
    nextMilestone: 'Link only to public starter material after final public-safe README review.'
  },
  {
    slug: 'db-mcp',
    name: 'DB MCP',
    family: 'infra-mcp-safety',
    summary: 'Safe multi-database MCP workflow for agent-assisted schema and query analysis.',
    stack: ['MCP', 'Database', 'Query Validation', 'Security Boundary'],
    publicStatus: 'sanitized',
    status: 'v0.2.0 sanitized case page',
    problem: 'Agent database access must be constrained by read-only policy, schema visibility, and validation.',
    approach: 'Show connection registry, schema browser, and query validation result screens.',
    publicEvidence: [
      'Connection registry concept showing redacted metadata and explicit safety modes.',
      'Query validation path that blocks unsafe operations before execution.',
      'Human-review boundary for database access in agent-assisted workflows.'
    ],
    redactionNotes: [
      'No database URLs, credentials, table names from private systems, or query logs.',
      'Connection names and schemas are abstracted into public-safe examples.'
    ],
    verification: ['read-only boundary pending recheck', 'public repo status pending', 'secret values excluded'],
    screens: ['S-MCP-001', 'S-MCP-002'],
    nextMilestone: 'Add public-safe schema browser screen after the read-only boundary is reverified.'
  }
];

export const screens: ScreenSpec[] = [
  {
    id: 'S-BE-001',
    project: 'burstexpress-platform',
    title: 'Ecommerce Admin Domain Map',
    status: 'sanitized',
    purpose: 'Show Board/Event/Banner/Coupon domain surfaces without production data.',
    targetUser: 'Hiring reviewer evaluating legacy modernization scope.',
    entryPoint: 'Project detail page and legacy-modernization project filter.',
    components: ['domain list', 'selected domain panel', 'risk markers', 'redaction notice'],
    states: ['overview', 'domain selected', 'redacted'],
    engineeringSignal: 'DDD and legacy compatibility mapping',
    dataBoundary: 'Synthetic labels only; no merchant, customer, order, or admin values.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-BE-002',
    project: 'burstexpress-platform',
    title: 'Coupon Admin Lifecycle',
    status: 'sanitized',
    purpose: 'Explain coupon status, targeting, issue period, and validation rules.',
    targetUser: 'Reviewer checking business-rule complexity.',
    entryPoint: 'BurstExpress case study screen evidence section.',
    components: ['status timeline', 'targeting rules', 'date window', 'validation result'],
    states: ['draft', 'active', 'stopped', 'expired'],
    engineeringSignal: 'admin business-rule complexity',
    dataBoundary: 'No real coupon names, customer groups, issue counts, or usage history.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-BE-003',
    project: 'burstexpress-platform',
    title: 'Product Banner Management',
    status: 'sanitized',
    purpose: 'Show banner rules, product linkage, period, ordering, and active state.',
    targetUser: 'Reviewer evaluating ecommerce merchandising operations.',
    entryPoint: 'BurstExpress case study screen evidence section.',
    components: ['banner list', 'schedule control', 'product link', 'active state'],
    states: ['list', 'create', 'expired', 'duplicate'],
    engineeringSignal: 'ecommerce merchandising workflow',
    dataBoundary: 'No production products, media URLs, partner names, or campaign metrics.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-LC-001',
    project: 'live-commerce',
    title: 'Live Landing',
    status: 'prototype',
    purpose: 'Show active streams, thumbnails, viewer count, and entry CTA.',
    targetUser: 'Reviewer evaluating product entry and stream-state handling.',
    entryPoint: 'Live commerce project page and product-engineering project filter.',
    components: ['stream cards', 'viewer count', 'room status', 'join action'],
    states: ['empty', 'active', 'loading'],
    engineeringSignal: 'public room list and stream state',
    dataBoundary: 'Synthetic stream metadata only; no seller IDs, room secrets, or real metrics.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-LC-002',
    project: 'live-commerce',
    title: 'Viewer With Product Overlay',
    status: 'prototype',
    purpose: 'Show WebRTC video, chat, product overlay, and product click path.',
    targetUser: 'Reviewer evaluating realtime commerce interaction design.',
    entryPoint: 'Live commerce project page screen list.',
    components: ['video surface', 'chat rail', 'product overlay', 'reconnect banner'],
    states: ['joining', 'live', 'reconnecting', 'ended'],
    engineeringSignal: 'LiveKit + WebSocket + product bridge',
    dataBoundary: 'No stream tokens, chat logs, buyer data, product URLs, or checkout details.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-LC-003',
    project: 'live-commerce',
    title: 'Admin Moderation',
    status: 'sanitized',
    purpose: 'Show stream blind, forced stop, seller suspension, blacklist, and mute operations.',
    targetUser: 'Reviewer evaluating trust and safety controls.',
    entryPoint: 'Live commerce project page verification section.',
    components: ['incident state', 'moderation actions', 'audit note', 'operator confirmation'],
    states: ['healthy', 'flagged', 'suspended'],
    engineeringSignal: 'trust and safety control surface',
    dataBoundary: 'No operator names, user identifiers, raw reports, or audit logs.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-MK-001',
    project: 'mykitchen',
    title: 'Inventory Dashboard',
    status: 'prototype',
    purpose: 'Summarize food inventory, expiry risk, and shopping signals.',
    targetUser: 'Reviewer evaluating product model and dashboard states.',
    entryPoint: 'mykitchen project page.',
    components: ['inventory summary', 'expiry risk list', 'shopping signal', 'empty state'],
    states: ['default', 'empty', 'expired items'],
    engineeringSignal: 'stateful dashboard with inventory aggregation',
    dataBoundary: 'Synthetic inventory only; no real household, receipt, or account data.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-MK-002',
    project: 'mykitchen',
    title: 'Ingredient Detail',
    status: 'prototype',
    purpose: 'Show price and expiry history for a single ingredient.',
    targetUser: 'Reviewer evaluating entity detail and validation behavior.',
    entryPoint: 'mykitchen project page screen list.',
    components: ['ingredient profile', 'price history', 'expiry history', 'validation message'],
    states: ['default', 'history empty', 'validation failed'],
    engineeringSignal: 'entity detail with history records',
    dataBoundary: 'Example prices and dates are synthetic; no user purchase history.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-WIKI-001',
    project: 'llm-wiki-starter',
    title: 'Knowledge Trust Flow',
    status: 'prototype',
    purpose: 'Navigate inbox/generated/reviewed/canonical memory states.',
    targetUser: 'Reviewer evaluating AI workflow governance.',
    entryPoint: 'AI agents portfolio page and wiki project page.',
    components: ['trust lane', 'review state', 'promotion action', 'staleness marker'],
    states: ['candidate', 'reviewed', 'stale'],
    engineeringSignal: 'AI memory governance',
    dataBoundary: 'Workflow pattern only; no private notes, prompts, transcripts, or personal wiki exports.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-WIKI-002',
    project: 'llm-wiki-starter',
    title: 'Context Pack Export',
    status: 'planned',
    purpose: 'Package reviewed context for external AI sessions.',
    targetUser: 'Reviewer evaluating context handoff and secret hygiene.',
    entryPoint: 'AI agents portfolio page.',
    components: ['profile selector', 'source scan result', 'export summary', 'blocked item list'],
    states: ['select profile', 'scan failed', 'export ready'],
    engineeringSignal: 'AI handoff and secret hygiene',
    dataBoundary: 'No private file paths, secret values, raw transcripts, or unreviewed notes.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-MCP-001',
    project: 'db-mcp',
    title: 'Connection Registry',
    status: 'planned',
    purpose: 'List redacted DB connections and safety mode.',
    targetUser: 'Reviewer evaluating infrastructure safety boundaries.',
    entryPoint: 'AI agents portfolio page and DB MCP project page.',
    components: ['connection list', 'permission mode', 'health state', 'redacted metadata'],
    states: ['default', 'disconnected', 'permission denied'],
    engineeringSignal: 'secret-free connection metadata',
    dataBoundary: 'No URLs, credentials, real schemas, customer tables, or production hostnames.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-MCP-002',
    project: 'db-mcp',
    title: 'Query Validation',
    status: 'planned',
    purpose: 'Validate query safety before execution.',
    targetUser: 'Reviewer evaluating agent safety gates.',
    entryPoint: 'DB MCP project page screen evidence section.',
    components: ['query preview', 'policy result', 'blocked reason', 'review handoff'],
    states: ['valid', 'blocked', 'needs review'],
    engineeringSignal: 'agent safety gate',
    dataBoundary: 'Synthetic query examples only; no raw logs, private schema, or production data.',
    wireframe: '/wireframes/placeholder.svg'
  }
];

export const capabilities = [
  'Legacy PHP modernization',
  'Live commerce system integration',
  'AI-assisted development workflow',
  'Context pack and knowledge-system architecture',
  'Human review gate and release governance',
  'MCP / DB safety boundary',
  'Screen-first portfolio evidence design'
];

export const releases = [
  { version: 'v0.2.0', date: '2026-06-29', summary: 'Refined sanitized project pages, public evidence lists, redaction boundaries, screen metadata, and deployment/authentication runbooks.' },
  { version: 'v0.1.0', date: '2026-06-29', summary: 'Initial public scaffold with IA, stateful components, project evidence map, screen gallery, and release workflow placeholders.' }
];
