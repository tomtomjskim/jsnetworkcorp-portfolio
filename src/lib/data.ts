import type { Project, ScreenSpec } from './types';

export const projects: Project[] = [
  {
    slug: 'manufacturing-mes-business-systems',
    name: 'Manufacturing MES Business Systems',
    family: 'manufacturing-systems',
    summary: 'PHP/Laravel/MySQL business-system experience around manufacturing production management, maintenance, and on-premise operations.',
    stack: ['PHP', 'Laravel', 'MySQL', 'MES', 'On-Premise'],
    publicStatus: 'sanitized',
    status: 'PF-v0.6.0 content-model case',
    problem: 'Manufacturing business systems need stable maintenance, clear data handling, and domain-aware changes without exposing customer operations.',
    approach: 'Present the work as sanitized MES and business-system experience focused on backend maintenance, data processing, and gradual legacy improvement.',
    publicEvidence: [
      'Manufacturing production-management domain experience summarized without customer names or operational records.',
      'Legacy PHP/Laravel maintenance and data-handling experience framed as backend business-system work.',
      'On-premise and JSON-data processing context included only at a public-safe level.'
    ],
    redactionNotes: [
      'No customer names, production data, internal hostnames, screenshots, or operational logs.',
      'No unverifiable improvement percentages or maintenance-rate claims.'
    ],
    verification: ['resume raw data reviewed', 'public claim wording downgraded to non-metric form', 'customer identifiers excluded'],
    screens: ['S-MES-001', 'S-MES-002'],
    nextMilestone: 'Add a public-safe architecture diagram for MES maintenance and data-flow boundaries.'
  },
  {
    slug: 'commerce-fulfillment-operations',
    name: 'Seller Commerce & Fulfillment Operations',
    family: 'commerce-fulfillment',
    summary: 'Sanitized seller commerce and logistics operations case covering product, inbound, inventory, external order, outbound, dashboard, and fulfillment integration themes.',
    stack: ['PHP', 'MySQL', 'Commerce Operations', 'OMS', 'Signed API', 'Idempotency'],
    publicStatus: 'sanitized',
    status: 'PF-v0.6.0 content-model case',
    problem: 'Seller operations can fragment across inbound, inventory, external order intake, outbound processing, and fulfillment tracking unless the integration model is explicit.',
    approach: 'Use a public-safe architecture narrative: canonical order normalization, all-or-nothing batch handling, signed integration, masked payloads, and read-only synchronization verification.',
    publicEvidence: [
      'External order registration is described through upload, preview, confirm, and all-or-nothing batch semantics.',
      'Fulfillment integration is framed around canonical order fields, idempotency, signed API calls, and fail-closed gates.',
      'Reconciliation is described as a read-only comparison between internal dispatch logs and external projections.'
    ],
    redactionNotes: [
      'No private project name, repository link, customer data, order data, endpoints, credentials, or internal evidence map.',
      'No completed SaaS or completed live-commerce integration claim.'
    ],
    verification: ['private evidence reviewed outside public repo', 'public-safe one-pager added', 'redaction boundary documented'],
    screens: ['S-COM-001', 'S-COM-002', 'S-COM-003'],
    nextMilestone: 'Convert this case into a structured project page with problem, architecture, reliability, and boundary sections.'
  },
  {
    slug: 'live-commerce-architecture-direction',
    name: 'Live-Commerce Architecture Direction',
    family: 'architecture-direction',
    summary: 'Portfolio-adjacent architecture direction for extending commerce operations into live sales channels without claiming a completed production integration.',
    stack: ['WebRTC', 'SFU', 'LiveKit', 'Realtime UX', 'Commerce Channel'],
    publicStatus: 'sanitized',
    status: 'architecture direction',
    problem: 'A live sales channel needs realtime media, chat, product exposure, order handoff, moderation, and fulfillment boundaries to fit existing commerce operations.',
    approach: 'Describe live-commerce as a channel-extension architecture that can reuse product, order, fulfillment, and reconciliation boundaries from the commerce operations model.',
    publicEvidence: [
      'Viewer, product-overlay, and moderation surfaces are represented as synthetic screens.',
      'Realtime media and commerce responsibilities are separated at the architecture level.',
      'Fulfillment connection is described as a future extension point, not a completed integration.'
    ],
    redactionNotes: [
      'No production stream keys, endpoints, seller identifiers, buyer identifiers, chat logs, or live metrics.',
      'Do not describe this as a completed integration unless separately verified and redacted.'
    ],
    verification: ['architecture direction preserved', 'completion claim removed', 'synthetic screen boundary retained'],
    screens: ['S-LC-001', 'S-LC-002', 'S-LC-003'],
    nextMilestone: 'Add a sequence diagram for live session to order-handoff boundaries using synthetic data only.'
  },
  {
    slug: 'ai-assisted-development-workflow',
    name: 'AI-assisted Development Workflow',
    family: 'ai-workflow-agent-tooling',
    summary: 'Workflow case for AI-assisted documentation, review, test planning, version management, and public/private knowledge boundaries.',
    stack: ['Markdown', 'Git', 'LLM Context', 'Review Workflow', 'Release Notes'],
    publicStatus: 'public',
    status: 'governance case',
    problem: 'Generated notes, AI-assisted code review, and resume data need trust levels, redaction rules, and version management before they are used in resumes or public portfolio pages.',
    approach: 'Show a public-safe workflow from raw/private evidence through reviewed claims, sanitized public content, and protected interview-kit generation.',
    publicEvidence: [
      'Versioned resume-data workflow with goal, roadmap, changelog, and redaction boundaries.',
      'Claim lifecycle separates raw evidence, public claims, role-scope confirmation, and final resume bullets.',
      'Protected interview-kit architecture keeps detailed evidence out of the static public bundle.'
    ],
    redactionNotes: [
      'No raw AI transcripts, private wiki pages, credentials, private workspace paths, or source evidence exports.',
      'Public examples describe the workflow pattern rather than private contents.'
    ],
    verification: ['goal and workflow documents added', 'content boundary reviewed', 'public/private split documented'],
    screens: ['S-AI-001', 'S-AI-002'],
    nextMilestone: 'Add a public-safe workflow diagram for claim review and interview-kit handoff.'
  },
  {
    slug: 'db-mcp-safety-boundary',
    name: 'DB MCP Safety Boundary',
    family: 'infra-mcp-safety',
    summary: 'Safe multi-database MCP workflow pattern for agent-assisted schema and query analysis.',
    stack: ['MCP', 'Database', 'Query Validation', 'Security Boundary'],
    publicStatus: 'sanitized',
    status: 'safety-boundary case',
    problem: 'Agent database access must be constrained by read-only policy, schema visibility, query validation, and human review.',
    approach: 'Use synthetic connection registry and query validation screens to show safety boundaries without exposing real schemas or logs.',
    publicEvidence: [
      'Connection registry concept with redacted metadata and explicit safety modes.',
      'Query validation path that blocks unsafe operations before execution.',
      'Human-review boundary for database access in agent-assisted workflows.'
    ],
    redactionNotes: [
      'No database URLs, credentials, real table names, customer schemas, or query logs.',
      'Connection names and schemas remain abstracted into public-safe examples.'
    ],
    verification: ['read-only boundary pending recheck', 'secret values excluded', 'synthetic examples only'],
    screens: ['S-MCP-001', 'S-MCP-002'],
    nextMilestone: 'Add public-safe schema browser screen after the read-only boundary is reverified.'
  }
];

export const screens: ScreenSpec[] = [
  {
    id: 'S-MES-001',
    project: 'manufacturing-mes-business-systems',
    title: 'MES Maintenance Boundary',
    status: 'sanitized',
    purpose: 'Explain how manufacturing business-system changes are framed without exposing customer operations.',
    targetUser: 'Hiring reviewer evaluating manufacturing systems experience.',
    entryPoint: 'Manufacturing MES case page.',
    components: ['domain boundary', 'maintenance queue', 'data processing note', 'redaction notice'],
    states: ['request received', 'analysis', 'safe public summary'],
    engineeringSignal: 'manufacturing-domain maintenance and backend data handling',
    dataBoundary: 'No customer names, production records, operational logs, or internal endpoints.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-MES-002',
    project: 'manufacturing-mes-business-systems',
    title: 'Legacy PHP Improvement Map',
    status: 'planned',
    purpose: 'Show module separation and maintainability direction without private code paths.',
    targetUser: 'Reviewer evaluating legacy backend modernization capability.',
    entryPoint: 'Manufacturing MES case page architecture section.',
    components: ['legacy layer', 'application boundary', 'data access boundary', 'risk markers'],
    states: ['legacy mixed', 'module separated', 'review pending'],
    engineeringSignal: 'legacy modernization and safe refactoring narrative',
    dataBoundary: 'No private class names, customer-specific modules, or repository paths.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-COM-001',
    project: 'commerce-fulfillment-operations',
    title: 'External Order Intake Flow',
    status: 'sanitized',
    purpose: 'Show upload, preview, confirm, and all-or-nothing batch semantics using synthetic data.',
    targetUser: 'Reviewer evaluating commerce operations and batch-safety design.',
    entryPoint: 'Commerce fulfillment case page.',
    components: ['file upload', 'preview token', 'row validation', 'confirm gate'],
    states: ['preview ready', 'validation failed', 'confirmed'],
    engineeringSignal: 'batch safety and operational guardrails',
    dataBoundary: 'Synthetic order rows only; no real seller, recipient, order, or shipment data.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-COM-002',
    project: 'commerce-fulfillment-operations',
    title: 'Canonical Fulfillment Dispatch',
    status: 'sanitized',
    purpose: 'Explain canonical order normalization, idempotency, signed import, and fail-closed behavior.',
    targetUser: 'Reviewer evaluating backend integration reliability.',
    entryPoint: 'Commerce fulfillment case page architecture section.',
    components: ['canonical fields', 'channel-region grouping', 'idempotency key', 'signed import gate'],
    states: ['dry-run', 'sent', 'rejected'],
    engineeringSignal: 'external integration and retry-safe dispatch design',
    dataBoundary: 'No endpoints, credentials, private tenant values, order numbers, or payload dumps.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-COM-003',
    project: 'commerce-fulfillment-operations',
    title: 'Read-only Sync Verification',
    status: 'sanitized',
    purpose: 'Show how dispatch logs and external projections can be compared to detect missing or divergent states.',
    targetUser: 'Reviewer evaluating operational reliability and reconciliation design.',
    entryPoint: 'Commerce fulfillment case page reliability section.',
    components: ['dispatch log', 'external projection', 'matched count', 'missing/state-difference markers'],
    states: ['matched', 'missing in external system', 'external inflow', 'status differs'],
    engineeringSignal: 'read-only reconciliation and status-drift visibility',
    dataBoundary: 'Synthetic identifiers only; no real order numbers, logs, or external-system data.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-LC-001',
    project: 'live-commerce-architecture-direction',
    title: 'Live Channel Entry',
    status: 'prototype',
    purpose: 'Show active live sessions, synthetic stream state, and entry CTA.',
    targetUser: 'Reviewer evaluating product entry and stream-state handling.',
    entryPoint: 'Live-commerce architecture page.',
    components: ['stream cards', 'viewer count', 'room status', 'join action'],
    states: ['empty', 'active', 'loading'],
    engineeringSignal: 'public room list and stream state',
    dataBoundary: 'Synthetic stream metadata only; no seller IDs, room secrets, or real metrics.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-LC-002',
    project: 'live-commerce-architecture-direction',
    title: 'Viewer With Product Overlay',
    status: 'prototype',
    purpose: 'Show WebRTC video, chat, product overlay, and future order-handoff boundary.',
    targetUser: 'Reviewer evaluating realtime commerce interaction design.',
    entryPoint: 'Live-commerce architecture page screen list.',
    components: ['video surface', 'chat rail', 'product overlay', 'handoff boundary'],
    states: ['joining', 'live', 'reconnecting', 'ended'],
    engineeringSignal: 'realtime media and commerce-channel boundary',
    dataBoundary: 'No stream tokens, chat logs, buyer data, product URLs, or checkout details.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-LC-003',
    project: 'live-commerce-architecture-direction',
    title: 'Moderation Boundary',
    status: 'sanitized',
    purpose: 'Show trust-and-safety controls with synthetic incidents and no operator data.',
    targetUser: 'Reviewer evaluating safety control surfaces.',
    entryPoint: 'Live-commerce architecture verification section.',
    components: ['incident state', 'moderation actions', 'audit note', 'operator confirmation'],
    states: ['healthy', 'flagged', 'suspended'],
    engineeringSignal: 'trust and safety control surface',
    dataBoundary: 'No operator names, user identifiers, raw reports, or audit logs.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-AI-001',
    project: 'ai-assisted-development-workflow',
    title: 'Resume Claim Lifecycle',
    status: 'sanitized',
    purpose: 'Show raw evidence moving into reviewed claims, public-safe content, and target-role variants.',
    targetUser: 'Reviewer evaluating AI-assisted workflow governance.',
    entryPoint: 'AI-assisted workflow page.',
    components: ['raw evidence', 'private review', 'public claim', 'role variant'],
    states: ['raw', 'role-confirm', 'public-safe'],
    engineeringSignal: 'versioned AI-assisted knowledge governance',
    dataBoundary: 'No raw transcripts, private evidence, or private wiki exports.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-AI-002',
    project: 'ai-assisted-development-workflow',
    title: 'Protected Interview Kit Handoff',
    status: 'planned',
    purpose: 'Describe how detailed Q&A and evidence maps are generated outside the public bundle.',
    targetUser: 'Reviewer evaluating content-boundary discipline.',
    entryPoint: 'AI-assisted workflow page handoff section.',
    components: ['public portfolio', 'private source', 'protected output', 'redaction checklist'],
    states: ['draft', 'reviewed', 'protected output'],
    engineeringSignal: 'public/private separation and release governance',
    dataBoundary: 'No protected interview materials are committed to the public repository.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-MCP-001',
    project: 'db-mcp-safety-boundary',
    title: 'Connection Registry',
    status: 'planned',
    purpose: 'List redacted DB connections and safety mode.',
    targetUser: 'Reviewer evaluating infrastructure safety boundaries.',
    entryPoint: 'DB MCP safety page.',
    components: ['connection list', 'permission mode', 'health state', 'redacted metadata'],
    states: ['default', 'disconnected', 'permission denied'],
    engineeringSignal: 'secret-free connection metadata',
    dataBoundary: 'No URLs, credentials, real schemas, customer tables, or production hostnames.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-MCP-002',
    project: 'db-mcp-safety-boundary',
    title: 'Query Validation',
    status: 'planned',
    purpose: 'Validate query safety before execution.',
    targetUser: 'Reviewer evaluating agent safety gates.',
    entryPoint: 'DB MCP safety page screen evidence section.',
    components: ['query preview', 'policy result', 'blocked reason', 'review handoff'],
    states: ['valid', 'blocked', 'needs review'],
    engineeringSignal: 'agent safety gate',
    dataBoundary: 'Synthetic query examples only; no raw logs, private schema, or production data.',
    wireframe: '/wireframes/placeholder.svg'
  }
];

export const capabilities = [
  'Manufacturing MES and business-system maintenance',
  'Seller commerce and fulfillment operations',
  'External order, inbound, inventory, outbound, and dashboard workflows',
  'Canonical order modeling and idempotent integration',
  'Signed API, fail-closed, dry-run, masked-payload, and sync-verification boundaries',
  'AI-assisted documentation, review, and release/version management',
  'MCP / DB safety boundary',
  'Screen-first public-safe portfolio evidence design'
];

export const releases = [
  { version: 'PF-v1.0.0', date: '2026-06-29', summary: 'Application-ready public-safe resume and portfolio content architecture with final checklist and handoff.' },
  { version: 'PF-v0.9.0', date: '2026-06-29', summary: 'Added protected interview bridge documentation and public-safe templates.' },
  { version: 'PF-v0.8.0', date: '2026-06-29', summary: 'Added role-specific public-safe resume variants for backend, full-stack, commerce, manufacturing, AI workflow, and English backend use.' },
  { version: 'PF-v0.7.0', date: '2026-06-29', summary: 'Added public-safe project pages for manufacturing, commerce/fulfillment, live-commerce direction, AI workflow, and DB/MCP safety.' },
  { version: 'PF-v0.6.0', date: '2026-06-29', summary: 'Connected sanitized resume/project content to the site-facing data model and removed private project identifiers from public project metadata.' },
  { version: 'PF-v0.5.1', date: '2026-06-29', summary: 'Added /goal, roadmap, versioned workflow, and governance gates through PF-v1.0.0.' },
  { version: 'PF-v0.5.0', date: '2026-06-29', summary: 'Introduced public-safe resume data layer, claim bank, redaction boundary, and sanitized resume/project drafts.' },
  { version: 'v0.2.0', date: '2026-06-29', summary: 'Refined sanitized project pages, public evidence lists, redaction boundaries, screen metadata, and deployment/authentication runbooks.' },
  { version: 'v0.1.0', date: '2026-06-29', summary: 'Initial public scaffold with IA, stateful components, project evidence map, screen gallery, and release workflow placeholders.' }
];
