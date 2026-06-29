export type ProjectFamily =
  | 'product-engineering'
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
  verification: string[];
  screens: string[];
};

export type ScreenSpec = {
  id: string;
  project: string;
  title: string;
  status: ScreenStatus;
  purpose: string;
  states: string[];
  engineeringSignal: string;
  wireframe: string;
};
