import type { ProjectFamily, PublicStatus, ScreenStatus } from './types';

export const familyLabels: Record<ProjectFamily, string> = {
  'manufacturing-systems': 'Manufacturing systems',
  'commerce-fulfillment': 'Commerce fulfillment',
  'product-engineering': 'Product engineering',
  'architecture-direction': 'Architecture direction',
  'ai-workflow-agent-tooling': 'AI workflow',
  'infra-mcp-safety': 'MCP safety',
  'legacy-modernization': 'Legacy modernization'
};

export const publicStatusLabels: Record<PublicStatus, string> = {
  public: 'Public',
  sanitized: 'Public-safe',
  private: 'Private',
  excluded: 'Excluded'
};

export const screenStatusLabels: Record<ScreenStatus, string> = {
  implemented: 'Implemented',
  prototype: 'Prototype',
  planned: 'Planned',
  sanitized: 'Public-safe',
  archived: 'Archived'
};
