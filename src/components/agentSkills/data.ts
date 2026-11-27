export type SkillId = 'recamera-pro' | 'recamera-2002';

export interface SkillAgent {
  id: string;
  label: string;
  /** Directory the skill is installed into for this agent. */
  target: string;
  steps: string[];
}

export interface SkillConfig {
  id: SkillId;
  name: string;
  repoPage: string;
  repoClone: string;
  detailPath: string;
  tag: string;
  agents: SkillAgent[];
}

const PRO_REPO = 'https://github.com/Seeed-Projects/recamera-pro-development-skill';
const LEGACY_REPO = 'https://github.com/Seeed-Projects/recamera-2002-cpp-dev';

const PRO_DIR = 'recamera-pro-development-skill';
const LEGACY_DIR = 'recamera-2002-cpp-dev';

function proSteps(branch: string): string[] {
  return [
    `git clone --branch ${branch} --single-branch ${PRO_REPO}.git`,
    `cd ${PRO_DIR}`,
    './scripts/install_skill.sh',
  ];
}

function legacySteps(skillsDir: string): string[] {
  return [
    `git clone --depth 1 ${LEGACY_REPO}.git`,
    `mkdir -p ${skillsDir}/${LEGACY_DIR}`,
    `cp -r ${LEGACY_DIR}/. ${skillsDir}/${LEGACY_DIR}/`,
  ];
}

export const SKILLS: Record<SkillId, SkillConfig> = {
  'recamera-pro': {
    id: 'recamera-pro',
    name: 'reCamera Pro',
    repoPage: PRO_REPO,
    repoClone: `${PRO_REPO}.git`,
    detailPath: '/recamera_pro_development_cpp_skill/',
    tag: 'RV1126B · aarch64',
    agents: [
      {
        id: 'claude',
        label: 'Claude Code',
        target: '~/.claude/skills/recamera-rknn-dev',
        steps: proSteps('claude-code'),
      },
      {
        id: 'codex',
        label: 'Codex',
        target: '~/.agents/skills/recamera-rknn-dev',
        steps: proSteps('main'),
      },
      {
        id: 'cursor',
        label: 'Cursor',
        target: '~/.cursor/skills/recamera-rknn-dev',
        steps: proSteps('cursor'),
      },
      {
        id: 'copilot',
        label: 'GitHub Copilot',
        target: '~/.copilot/skills/recamera-rknn-dev',
        steps: proSteps('github-copilot'),
      },
      {
        id: 'gemini',
        label: 'Gemini CLI',
        target: '~/.gemini/skills/recamera-rknn-dev',
        steps: proSteps('gemini-cli'),
      },
    ],
  },
  'recamera-2002': {
    id: 'recamera-2002',
    name: 'reCamera 2002',
    repoPage: LEGACY_REPO,
    repoClone: `${LEGACY_REPO}.git`,
    detailPath: '/recamera_2002_development_cpp_skill/',
    tag: 'SG200X · RISC-V',
    agents: [
      {
        id: 'claude',
        label: 'Claude Code',
        target: '~/.claude/skills/recamera-2002-cpp-dev',
        steps: legacySteps('~/.claude/skills'),
      },
      {
        id: 'codex',
        label: 'Codex',
        target: '~/.codex/skills/recamera-2002-cpp-dev',
        steps: legacySteps('~/.codex/skills'),
      },
      {
        id: 'gemini',
        label: 'Gemini CLI',
        target: '~/.gemini/skills/recamera-2002-cpp-dev',
        steps: legacySteps('~/.gemini/skills'),
      },
    ],
  },
};

export const LANDING_SKILLS: SkillId[] = ['recamera-2002', 'recamera-pro'];
