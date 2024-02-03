import { DocsSpecsGlobalEnv } from './docs-specs-global-env';

export function generateExamples(expectations: string[]): void {
  if (typeof global !== 'undefined' && (global as DocsSpecsGlobalEnv).generateExamples) {
    (global as DocsSpecsGlobalEnv).generateExamples(expectations);
  }
}
