import type { UserConfig } from '@commitlint/types';

import { RuleConfigSeverity } from '@commitlint/types';

const CommitLintConfigurations: UserConfig = {
  extends: ['@commitlint/config-conventional'], // lint 的基底檔案為 @commitlint/config-conventional 裡的規則
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'chore',
        'core',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },

};

export default CommitLintConfigurations;
