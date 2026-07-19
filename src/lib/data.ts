import type { Project, ScreenSpec } from './types';

export const projects: Project[] = [
  {
    slug: 'commerce-fulfillment-operations',
    name: 'Commerce State Consistency',
    family: 'commerce-fulfillment',
    summary: 'A public-safe case about tracing inconsistent order, shipping, claim, and settlement states across database records, admin actions, user-facing conditions, batch jobs, and external API responses.',
    stack: ['PHP', 'MySQL', 'Order State', 'Admin', 'Batch', 'External API'],
    publicStatus: 'sanitized',
    status: 'Primary problem-solving case',
    problem: 'The same order could appear differently in database records, admin screens, and user-facing screens. A screen-only fix or direct data correction could leave payment, shipping, claim, settlement, and batch side effects unresolved.',
    approach: 'Separate source state from display state, identify every state-changing actor, compare related tables and admin history, and define the smallest safe change only after checking downstream payment, shipping, claim, settlement, batch, and API effects.',
    publicEvidence: [
      'Classified the issue into source-data, display-condition, admin-action, batch, external-API, and claim-linkage candidates instead of treating it as one incorrect status value.',
      'Mapped the change path from order and payment through shipping, claim, settlement, and role-specific screens before modifying production logic.',
      'Separated immediate correction from reusable verification rules for permissions, duplicate processing, failure responses, and downstream state changes.'
    ],
    redactionNotes: [
      'No real order numbers, customer or seller data, table names, status codes, endpoints, payloads, or production logs.',
      'Settlement and payment ownership is described only at the confirmed state-management level; accounting or payout ownership is not claimed.'
    ],
    verification: [
      'Compared buyer, seller, and admin views for the same synthetic state path.',
      'Checked normal, cancellation, return, refund, duplicate-batch, API-failure, and timeout paths.',
      'Verified that admin changes and batch/API processing did not leave conflicting downstream states.'
    ],
    screens: ['S-COM-001', 'S-COM-002', 'S-COM-003'],
    nextMilestone: 'Synthetic state-transition map and a source/display/actor/downstream-impact matrix.'
  },
  {
    slug: 'manufacturing-mes-business-systems',
    name: 'MES Requirement Systemization',
    family: 'manufacturing-systems',
    summary: 'A public-safe case about converting manufacturing-site requests into input rules, process states, permissions, query conditions, statistics criteria, rollout tasks, and support boundaries.',
    stack: ['PHP', 'MySQL', 'MES', 'Production', 'Quality', 'Inventory'],
    publicStatus: 'sanitized',
    status: 'Primary problem-solving case',
    problem: 'Requests such as “show production status” were not implementable until the responsible user, input timing, process state, defect handling, inventory timing, permission scope, and statistics criteria were made explicit.',
    approach: 'Start from the actual work sequence, convert field language into system conditions, separate common MES flows from site-specific rules, and use rollout, training, and remote support feedback as part of the development loop.',
    publicEvidence: [
      'Translated manufacturing requests into user, input, state, permission, query, and aggregation conditions before dividing implementation work.',
      'Connected work orders, process progress, production results, defects, quality, inventory movement, and delivery criteria at a public-safe domain level.',
      'Separated application and database defects from PC, network, printer, label, account, and user-training issues during rollout and support.'
    ],
    redactionNotes: [
      'No customer names, factory processes, production records, internal tickets, hostnames, screenshots, or operational metrics.',
      'Team leadership and customer scale are not published as strong claims until role scope and disclosure permission are confirmed.'
    ],
    verification: [
      'Reviewed input and query behavior by role and process state.',
      'Compared statistics criteria with the field team’s actual management 기준 using synthetic examples.',
      'Reproduced support issues by separating system behavior from device, network, printer, label, and account conditions.'
    ],
    screens: ['S-MES-001', 'S-MES-002'],
    nextMilestone: 'Synthetic process-to-system map, permission matrix, and rollout/support checklist.'
  },
  {
    slug: 'legacy-php-impact-analysis',
    name: 'Legacy PHP Change Impact Analysis',
    family: 'legacy-modernization',
    summary: 'A public-safe case about reducing change risk in production PHP systems by tracing entry points, shared includes and helpers, queries, permissions, admin paths, batch jobs, external APIs, logs, and server conditions.',
    stack: ['PHP', 'MySQL', 'nginx', 'php-fpm', 'Cron', 'Operational Debugging'],
    publicStatus: 'sanitized',
    status: 'Primary problem-solving case',
    problem: 'A reported screen symptom could originate in permissions, input validation, SQL, session behavior, a slow query, a duplicate batch, an external API timeout, or a shared helper. Editing only the visible code path could create regressions elsewhere.',
    approach: 'Freeze the reproduction conditions, classify the issue by layer, trace dependencies from the entry point through shared code and data paths, then separate the minimum production fix from later commonization or refactoring work.',
    publicEvidence: [
      'Used a repeatable inspection order: entry point, shared include/helper, input and permission checks, queries and states, admin/user screens, batch jobs, external APIs, and runtime logs.',
      'Separated feature, permission, database, performance, external-integration, UI, and user-environment causes before changing code.',
      'Recorded reproduction conditions, candidate causes, change details, and verification results so another developer could repeat the check.'
    ],
    redactionNotes: [
      'No private class or file names, real queries, schemas, credentials, endpoints, server paths, customer data, or runtime values.',
      'This is not presented as a full framework migration or a complete automated regression-test implementation.'
    ],
    verification: [
      'Checked user and permission variants, valid and invalid input, SQL results, and related admin paths.',
      'Reviewed execution plans, indexes, joins, filters, batch duplication, API failure and timeout behavior, and nginx/php-fpm/application logs where relevant.',
      'Ran focused regression checks on dependent screens and state-changing paths after the minimum safe fix.'
    ],
    screens: ['S-LEG-001', 'S-LEG-002'],
    nextMilestone: 'Change-impact checklist, dependency map, and reproduction/change/verification record template.'
  },
  {
    slug: 'live-commerce-architecture-direction',
    name: 'Live-Commerce Architecture Direction',
    family: 'architecture-direction',
    summary: 'A supporting architecture direction for extending commerce operations into a live sales channel without claiming a completed production integration.',
    stack: ['WebRTC', 'SFU', 'LiveKit', 'Realtime UX', 'Commerce Channel'],
    publicStatus: 'sanitized',
    status: 'Supporting architecture direction',
    problem: 'A live sales channel must connect realtime media, chat, product exposure, moderation, order handoff, and fulfillment without bypassing existing commerce and operational boundaries.',
    approach: 'Treat the live session as an additional sales channel and keep realtime-media responsibilities separate from product, order, fulfillment, reconciliation, and trust-and-safety responsibilities.',
    publicEvidence: [
      'Viewer, product-overlay, and moderation surfaces are represented as synthetic screens.',
      'Realtime media and commerce responsibilities are separated at the architecture level.',
      'Fulfillment connection remains an explicit future extension point rather than a completed integration claim.'
    ],
    redactionNotes: [
      'No production stream keys, endpoints, seller identifiers, buyer identifiers, chat logs, or live metrics.',
      'The case is labeled as architecture direction, not completed production delivery.'
    ],
    verification: ['architecture direction preserved', 'completion claim removed', 'synthetic screen boundary retained'],
    screens: ['S-LC-001', 'S-LC-002', 'S-LC-003'],
    nextMilestone: 'Realtime commerce channel boundaries without claiming completed production integration.'
  },
  {
    slug: 'ai-assisted-development-workflow',
    name: 'AI-assisted Development Workflow',
    family: 'ai-workflow-agent-tooling',
    summary: 'A supporting workflow case for requirements analysis, code and SQL review, test planning, documentation, version control, and public/private evidence boundaries.',
    stack: ['Markdown', 'Git', 'LLM Context', 'Review Workflow', 'Release Notes'],
    publicStatus: 'public',
    status: 'Supporting workflow case',
    problem: 'AI-generated notes, code suggestions, review output, and career claims require source authority, verification, privacy boundaries, and version management before use.',
    approach: 'Use LLMs as review and documentation support, verify output against actual code, database relations, permissions, official documentation, and tests, and separate protected evidence from public-safe claims.',
    publicEvidence: [
      'Versioned resume-data workflow with source registry, review gates, changelog, and redaction boundaries.',
      'Claim lifecycle separates raw evidence, protected review, role confirmation, public-safe projection, and target-role variants.',
      'Protected interview-kit architecture keeps detailed evidence outside the static public bundle.'
    ],
    redactionNotes: [
      'No raw AI transcripts, private wiki pages, credentials, private workspace paths, or source-evidence exports.',
      'Public examples describe the verification pattern rather than private contents.'
    ],
    verification: ['source authority recorded', 'public/private boundary reviewed', 'generated claims remain gated until human confirmation'],
    screens: ['S-AI-001', 'S-AI-002'],
    nextMilestone: 'Source review, redaction, versioning, and protected interview-kit handoff.'
  },
  {
    slug: 'db-mcp-safety-boundary',
    name: 'DB MCP Safety Boundary',
    family: 'infra-mcp-safety',
    summary: 'A supporting safety-boundary case for agent-assisted schema and query analysis.',
    stack: ['MCP', 'Database', 'Query Validation', 'Security Boundary'],
    publicStatus: 'sanitized',
    status: 'Supporting safety case',
    problem: 'Agent database access must be constrained by read-only policy, schema visibility, query validation, secret handling, and human review.',
    approach: 'Use synthetic connection and query-validation screens to explain read-only and human-review boundaries without exposing production schemas, credentials, or logs.',
    publicEvidence: [
      'Connection registry concept with redacted metadata and explicit safety modes.',
      'Query validation path that blocks unsafe operations before execution.',
      'Human-review boundary for database access in agent-assisted workflows.'
    ],
    redactionNotes: [
      'No database URLs, credentials, real table names, customer schemas, or query logs.',
      'Connection names and schemas remain abstracted into public-safe examples.'
    ],
    verification: ['read-only boundary described at public-safe level', 'secret values excluded', 'synthetic examples only'],
    screens: ['S-MCP-001', 'S-MCP-002'],
    nextMilestone: 'Read-only query validation and human-review boundaries for database-assisted workflows.'
  }
];

export const screens: ScreenSpec[] = [
  {
    id: 'S-COM-001',
    project: 'commerce-fulfillment-operations',
    title: 'State Source Matrix',
    status: 'sanitized',
    purpose: 'Show source state, display state, change actor, and downstream effect using synthetic order data.',
    targetUser: 'Reviewer evaluating commerce state-model and operational debugging skills.',
    entryPoint: 'Commerce state-consistency case page.',
    components: ['source state', 'display condition', 'change actor', 'downstream effect'],
    states: ['consistent', 'display differs', 'downstream state missing'],
    engineeringSignal: 'state consistency and change-impact analysis',
    dataBoundary: 'Synthetic identifiers only; no real buyer, seller, order, payment, shipment, or settlement data.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-COM-002',
    project: 'commerce-fulfillment-operations',
    title: 'State-changing Actor Map',
    status: 'sanitized',
    purpose: 'Explain how admin actions, batch jobs, and external API responses can affect the same operational state.',
    targetUser: 'Reviewer evaluating backend side-effect and failure-path analysis.',
    entryPoint: 'Commerce case decision section.',
    components: ['admin action', 'batch job', 'external API', 'state transition'],
    states: ['manual change', 'scheduled change', 'API success', 'API failure'],
    engineeringSignal: 'multi-actor state transition control',
    dataBoundary: 'No endpoints, payloads, status codes, credentials, or production logs.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-COM-003',
    project: 'commerce-fulfillment-operations',
    title: 'Failure and Regression Checklist',
    status: 'sanitized',
    purpose: 'Show verification across permissions, duplicate processing, claims, timeouts, and downstream state changes.',
    targetUser: 'Reviewer evaluating production verification discipline.',
    entryPoint: 'Commerce case verification section.',
    components: ['permission variants', 'duplicate run', 'claim state', 'timeout', 'downstream check'],
    states: ['passed', 'failed', 'needs review'],
    engineeringSignal: 'failure-path and regression verification',
    dataBoundary: 'Synthetic scenarios only; no real customer or operational records.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-MES-001',
    project: 'manufacturing-mes-business-systems',
    title: 'Requirement-to-System Map',
    status: 'sanitized',
    purpose: 'Convert field requests into user, input, state, permission, query, and aggregation conditions.',
    targetUser: 'Reviewer evaluating manufacturing-domain requirement analysis.',
    entryPoint: 'MES requirement-systemization case page.',
    components: ['field request', 'responsible user', 'input rule', 'state', 'permission', 'statistics rule'],
    states: ['ambiguous request', 'condition defined', 'implementation ready'],
    engineeringSignal: 'domain language translated into implementable conditions',
    dataBoundary: 'No customer names, factory processes, production records, or internal tickets.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-MES-002',
    project: 'manufacturing-mes-business-systems',
    title: 'Rollout and Support Boundary',
    status: 'sanitized',
    purpose: 'Separate application and database issues from user training, account, PC, network, printer, and label conditions.',
    targetUser: 'Reviewer evaluating internal IT and field-support judgment.',
    entryPoint: 'MES case verification section.',
    components: ['system issue', 'user input', 'account', 'device', 'network', 'support owner'],
    states: ['system defect', 'training issue', 'environment issue', 'resolved'],
    engineeringSignal: 'rollout feedback and support triage',
    dataBoundary: 'No real user names, device details, network values, support records, or screenshots.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-LEG-001',
    project: 'legacy-php-impact-analysis',
    title: 'Change Impact Inspection Order',
    status: 'sanitized',
    purpose: 'Show the repeatable path from entry point through shared code, data, permissions, admin screens, batch jobs, APIs, and runtime logs.',
    targetUser: 'Reviewer evaluating legacy PHP maintenance and operational-risk control.',
    entryPoint: 'Legacy PHP case page.',
    components: ['entry point', 'include/helper', 'input/permission', 'query/state', 'admin/user path', 'batch/API', 'logs'],
    states: ['symptom reported', 'dependencies traced', 'safe change scoped'],
    engineeringSignal: 'systematic dependency and side-effect analysis',
    dataBoundary: 'No private paths, class names, queries, schemas, endpoints, or runtime values.',
    wireframe: '/wireframes/placeholder.svg'
  },
  {
    id: 'S-LEG-002',
    project: 'legacy-php-impact-analysis',
    title: 'Reproduction to Verification Record',
    status: 'sanitized',
    purpose: 'Show how reproduction conditions, candidate causes, the selected fix, and regression checks are recorded.',
    targetUser: 'Reviewer evaluating debugging, documentation, and handoff quality.',
    entryPoint: 'Legacy PHP case verification section.',
    components: ['reproduction conditions', 'candidate causes', 'change scope', 'verification result', 'follow-up debt'],
    states: ['reproduced', 'cause isolated', 'fixed', 'verified'],
    engineeringSignal: 'repeatable incident and change documentation',
    dataBoundary: 'Synthetic examples only; no private logs, tickets, customer data, or production output.',
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
  'Commerce order, shipping, claim, and settlement state analysis',
  'MES requirements converted into input, state, permission, query, and statistics rules',
  'Legacy PHP change-impact analysis across code, data, batch, API, and runtime layers',
  'PHP / MySQL business-system development and maintenance',
  'Admin workflow, operational debugging, and failure-path verification',
  'Linux, nginx, php-fpm, batch/cron, and external API operating context',
  'AI-assisted requirements, review, test planning, and documentation with human verification',
  'Public-safe evidence design and protected interview-material boundaries'
];

export const releases = [
  { version: 'PF-v1.1.0', date: '2026-07-19', summary: 'Reframed the public portfolio around three primary problem-solving cases and moved architecture and AI workflow topics into supporting evidence.' },
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
