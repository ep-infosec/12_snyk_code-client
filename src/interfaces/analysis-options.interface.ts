import { SupportedFiles } from '..';
import { ConnectionOptions } from '../http';

export interface AnalysisOptions {
  readonly shard?: string;
  readonly severity?: number;
  readonly limitToFiles?: string[];
  readonly prioritized?: boolean;
  readonly legacy?: boolean;
}

// eslint-disable-next-line import/prefer-default-export, no-shadow
export enum AnalysisSeverity {
  info = 1,
  warning = 2,
  critical = 3,
}

export interface AnalysisContext {
  analysisContext?: {
    initiator: 'IDE' | 'CLI' | 'GIT' | 'unknown';
    flow?: string;
    org?: {
      name: string;
      displayName: string;
      publicId: string;
      flags: Record<string, boolean>;
    };
    project?: {
      name: string;
      publicId: string;
      type: string;
    };
    //TODO: this should be removed - leaving here for backwards compatibility
    orgPublicId?: string;
    orgDisplayName?: string;
    projectPublicId?: string;
    projectName?: string;
  };
}

export interface FileAnalysisOptions extends AnalysisContext {
  connection: ConnectionOptions;
  analysisOptions: AnalysisOptions;
  fileOptions: AnalyzeFoldersOptions;
  languages?: string[];
}

export interface AnalyzeFoldersOptions extends AnalysisContext {
  paths: string[];
  symlinksEnabled?: boolean;
  defaultFileIgnores?: string[];
  languages?: string[];
}

export interface CollectBundleFilesOptions extends AnalyzeFoldersOptions {
  supportedFiles: SupportedFiles;
  baseDir: string;
  fileIgnores: string[];
}
