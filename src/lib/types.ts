export type ProjectFamily =
  | 'manufacturing-systems'
  | 'commerce-fulfillment'
  | 'product-engineering'
  | 'architecture-direction'
  | 'ai-workflow-agent-tooling'
  | 'infra-mcp-safety'
  | 'legacy-modernization';

export type PublicStatus = 'public' | 'sanitized' | 'private' | 'excluded';
export type ScreenStatus = 'implemented' | 'prototype' | 'planned' | 'sanitized' | 'archived';

export type Project = {
  slug: string;
  name: string;
  family: ProjectFamily;
  summary: string;
  stack: string[];
  publicStatus: PublicStatus;
  status: string;
  problem: string;
  approach: string;
  publicEvidence: string[];
  redactionNotes: string[];
  verification: string[];
  screens: string[];
  nextMilestone: string;
};

export type ScreenSpec = {
  id: string;
  project: string;
  title: string;
  status: ScreenStatus;
  purpose: string;
  targetUser: string;
  entryPoint: string;
  components: string[];
  states: string[];
  engineeringSignal: string;
  dataBoundary: string;
  wireframe: string;
};
