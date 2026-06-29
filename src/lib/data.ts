import type { Project, ScreenSpec } from './types';

export const projects: Project[] = [
  {
    slug: 'burstexpress-platform',
    name: 'BurstExpress / Frecto PHP Ecommerce Modernization',
    family: 'legacy-modernization',
    summary: 'PHP ecommerce mirror with DDD-style domain, application, infrastructure, and legacy compatibility layers.',
    stack: ['PHP', 'DDD', 'Composer', 'Legacy Modernization'],
    publicStatus: 'sanitized',
    status: 'mirror analysis / redaction required',
    problem: 'A legacy PHP ecommerce surface needs modernization evidence without exposing production data.',
    approach: 'Frame the mirror as a DDD migration and admin-domain case using sanitized screen specs and diagrams.',
    verification: ['README and code-path review', 'sensitivity review required', 'no raw customer/order/admin data'],
    screens: ['S-BE-001', 'S-BE-002', 'S-BE-003']
  },
  {
    slug: 'live-commerce',
    name: 'BurstExpress Live Commerce Integration',
    family: 'product-engineering',
    summary: 'Node.js + LiveKit live-commerce extension connected to a PHP ecommerce marketplace.',
    stack: ['Node.js', 'Express', 'WebSocket', 'LiveKit', 'MySQL'],
    publicStatus: 'sanitized',
    status: 'R&D/MVP case study',
    problem: 'Existing marketplace context must support live video, chat, product overlay, admin moderation, and PIP embed.',
    approach: 'Show PHP marketplace + Node live backend + LiveKit architecture through screen-first portfolio evidence.',
    verification: ['repo docs reviewed', 'test counts require recheck', 'deployment requires live remeasurement'],
    screens: ['S-LC-001', 'S-LC-002', 'S-LC-003']
  },
  {
    slug: 'mykitchen',
    name: 'mykitchen',
    family: 'product-engineering',
    summary: 'Flutter + NestJS personal food inventory and household expense product.',
    stack: ['Flutter', 'NestJS', 'TypeScript', 'E2E'],
    publicStatus: 'sanitized',
    status: 'pre-deployment evidence verification',
    problem: 'Food inventory, price history, expiry, and recipe consumption need a clear product flow.',
    approach: 'Use dashboard, ingredient detail, and consumption screens to expose data model and validation.',
    verification: ['E2E evidence pending recheck', 'scenario validation pending recheck'],
    screens: ['S-MK-001', 'S-MK-002']
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
    verification: ['public starter link pending', 'private wiki details excluded'],
    screens: ['S-WIKI-001', 'S-WIKI-002']
  },
  {
    slug: 'db-mcp',
    name: 'DB MCP',
    family: 'infra-mcp-safety',
    summary: 'Safe multi-database MCP workflow for agent-assisted schema and query analysis.',
    stack: ['MCP', 'Database', 'Query Validation', 'Security Boundary'],
    publicStatus: 'sanitized',
    status: 'safety/infra case',
    problem: 'Agent database access must be constrained by read-only policy, schema visibility, and validation.',
    approach: 'Show connection registry, schema browser, and query validation result screens.',
    verification: ['read-only boundary pending recheck', 'public repo status pending'],
    screens: ['S-MCP-001', 'S-MCP-002']
  }
];

export const screens: ScreenSpec[] = [
  { id: 'S-BE-001', project: 'burstexpress-platform', title: 'Ecommerce Admin Domain Map', status: 'planned', purpose: 'Show Board/Event/Banner/Coupon domain surfaces without production data.', states: ['overview', 'domain selected', 'redacted'], engineeringSignal: 'DDD and legacy compatibility mapping', wireframe: '/wireframes/placeholder.svg' },
  { id: 'S-BE-002', project: 'burstexpress-platform', title: 'Coupon Admin Lifecycle', status: 'planned', purpose: 'Explain coupon status, targeting, issue period, and validation rules.', states: ['draft', 'active', 'stopped', 'expired'], engineeringSignal: 'admin business-rule complexity', wireframe: '/wireframes/placeholder.svg' },
  { id: 'S-BE-003', project: 'burstexpress-platform', title: 'Product Banner Management', status: 'planned', purpose: 'Show banner rules, product linkage, period, ordering, and active state.', states: ['list', 'create', 'expired', 'duplicate'], engineeringSignal: 'ecommerce merchandising workflow', wireframe: '/wireframes/placeholder.svg' },
  { id: 'S-LC-001', project: 'live-commerce', title: 'Live Landing', status: 'prototype', purpose: 'Show active streams, thumbnails, viewer count, and entry CTA.', states: ['empty', 'active', 'loading'], engineeringSignal: 'public room list and stream state', wireframe: '/wireframes/placeholder.svg' },
  { id: 'S-LC-002', project: 'live-commerce', title: 'Viewer With Product Overlay', status: 'prototype', purpose: 'Show WebRTC video, chat, product overlay, and product click path.', states: ['joining', 'live', 'reconnecting', 'ended'], engineeringSignal: 'LiveKit + WebSocket + product bridge', wireframe: '/wireframes/placeholder.svg' },
  { id: 'S-LC-003', project: 'live-commerce', title: 'Admin Moderation', status: 'sanitized', purpose: 'Show stream blind, forced stop, seller suspension, blacklist, and mute operations.', states: ['healthy', 'flagged', 'suspended'], engineeringSignal: 'trust and safety control surface', wireframe: '/wireframes/placeholder.svg' },
  { id: 'S-MK-001', project: 'mykitchen', title: 'Inventory Dashboard', status: 'prototype', purpose: 'Summarize food inventory, expiry risk, and shopping signals.', states: ['default', 'empty', 'expired items'], engineeringSignal: 'stateful dashboard with inventory aggregation', wireframe: '/wireframes/placeholder.svg' },
  { id: 'S-MK-002', project: 'mykitchen', title: 'Ingredient Detail', status: 'prototype', purpose: 'Show price and expiry history for a single ingredient.', states: ['default', 'history empty', 'validation failed'], engineeringSignal: 'entity detail with history records', wireframe: '/wireframes/placeholder.svg' },
  { id: 'S-WIKI-001', project: 'llm-wiki-starter', title: 'Knowledge Trust Flow', status: 'prototype', purpose: 'Navigate inbox/generated/reviewed/canonical memory states.', states: ['candidate', 'reviewed', 'stale'], engineeringSignal: 'AI memory governance', wireframe: '/wireframes/placeholder.svg' },
  { id: 'S-WIKI-002', project: 'llm-wiki-starter', title: 'Context Pack Export', status: 'planned', purpose: 'Package reviewed context for external AI sessions.', states: ['select profile', 'scan failed', 'export ready'], engineeringSignal: 'AI handoff and secret hygiene', wireframe: '/wireframes/placeholder.svg' },
  { id: 'S-MCP-001', project: 'db-mcp', title: 'Connection Registry', status: 'planned', purpose: 'List redacted DB connections and safety mode.', states: ['default', 'disconnected', 'permission denied'], engineeringSignal: 'secret-free connection metadata', wireframe: '/wireframes/placeholder.svg' },
  { id: 'S-MCP-002', project: 'db-mcp', title: 'Query Validation', status: 'planned', purpose: 'Validate query safety before execution.', states: ['valid', 'blocked', 'needs review'], engineeringSignal: 'agent safety gate', wireframe: '/wireframes/placeholder.svg' }
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
  { version: 'v0.1.0', date: '2026-06-29', summary: 'Initial public scaffold with IA, stateful components, project evidence map, screen gallery, and release workflow placeholders.' }
];
