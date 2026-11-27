import React, { useEffect, useRef, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';

import { SKILLS, LANDING_SKILLS, type SkillAgent, type SkillId } from './data';
import { getAgentSkillsCopy } from './copy';
import { localizeReCameraHref } from '../recamera/i18n';
import styles from './index.module.scss';

async function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

function useAgentSkillsCopy() {
  const { i18n } = useDocusaurusContext();
  const { pathname } = useLocation();
  return getAgentSkillsCopy(i18n.currentLocale, pathname);
}

export interface AgentSkillsInstallerProps {
  skill: SkillId;
}

/**
 * Tabbed "install once" console for the official reCamera agent skills.
 * Renders the same layout the wiki uses for each supported coding agent.
 */
export function AgentSkillsInstaller({ skill }: AgentSkillsInstallerProps): React.ReactElement {
  const copy = useAgentSkillsCopy();
  const config = SKILLS[skill];
  const [activeId, setActiveId] = useState(config.agents[0].id);
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  const agent: SkillAgent =
    config.agents.find((item) => item.id === activeId) ?? config.agents[0];
  const stepLabels =
    skill === 'recamera-pro' ? copy.stepLabels.pro : copy.stepLabels.legacy;

  useEffect(
    () => () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    },
    []
  );

  const handleCopy = async (): Promise<void> => {
    try {
      await copyToClipboard(agent.steps.join('\n'));
      setCopied(true);
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be denied; leave the button unchanged.
    }
  };

  const handleTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ): void => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
      return;
    }
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex =
      (index + direction + config.agents.length) % config.agents.length;
    setActiveId(config.agents[nextIndex].id);
  };

  return (
    <div className={styles.installer}>
      <div className={styles.installHeading}>
        <span className={styles.eyebrow}>{copy.eyebrow}</span>
        <h3 className={styles.installTitle}>{copy.installTitle}</h3>
        <p className={styles.installDesc}>{copy.installDesc}</p>
      </div>

      <div className={styles.console}>
        <div className={styles.consoleBar}>
          <span className={styles.consoleMeta}>
            {copy.runOn} · {agent.label.toUpperCase()}
          </span>
          <button type="button" className={styles.copyButton} onClick={handleCopy}>
            {copied ? copy.copied : copy.copyAll}
          </button>
        </div>

        <div className={styles.tabs} role="tablist" aria-label={copy.selectAgent}>
          {config.agents.map((item, index) => {
            const selected = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`skill-tab-${skill}-${item.id}`}
                aria-selected={selected}
                aria-controls={`skill-panel-${skill}`}
                tabIndex={selected ? 0 : -1}
                className={`${styles.tab} ${selected ? styles.tabActive : ''}`}
                onClick={() => setActiveId(item.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          id={`skill-panel-${skill}`}
          role="tabpanel"
          aria-labelledby={`skill-tab-${skill}-${activeId}`}
          className={styles.steps}
        >
          {agent.steps.map((step, index) => (
            <div key={step} className={styles.step}>
              <span className={styles.stepNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={styles.stepBody}>
                <span className={styles.stepLabel}>{stepLabels[index] ?? ''}</span>
                <code className={styles.stepCode}>{step}</code>
              </div>
            </div>
          ))}

          <div className={styles.targetRow}>
            {copy.targetLabel}: <code>{agent.target}</code>
          </div>
        </div>

        <div className={styles.consoleFooter}>
          <a href={config.repoPage} target="_blank" rel="noopener noreferrer">
            {copy.sourceRepo}
          </a>
          <span>{copy.restart}</span>
        </div>
      </div>
    </div>
  );
}

function renderAccentTitle(text: string): React.ReactNode {
  const parts = text.split('reCamera');
  if (parts.length === 1) {
    return text;
  }

  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < parts.length - 1 && <span className={styles.accent}>reCamera</span>}
    </React.Fragment>
  ));
}

/**
 * Landing-page section that introduces both official skills and links to
 * their install guides.
 */
export function AgentSkillsSection(): React.ReactElement {
  const { i18n } = useDocusaurusContext();
  const { pathname } = useLocation();
  const copy = getAgentSkillsCopy(i18n.currentLocale, pathname);

  const agentsBySkill: Record<SkillId, string> = {
    'recamera-2002': 'Claude Code · Codex · Gemini CLI',
    'recamera-pro': 'Claude Code · Codex · Cursor · GitHub Copilot · Gemini CLI',
  };

  return (
    <section className={styles.landingSection}>
      <div className={styles.landingInner}>
        <div className={styles.landingHeader}>
          <span className={styles.eyebrow}>{copy.eyebrow}</span>
          <h2 className={styles.landingTitle}>{renderAccentTitle(copy.landingTitle)}</h2>
          <p className={styles.landingDesc}>{copy.landingDesc}</p>
        </div>

        <div className={styles.cardGrid}>
          {LANDING_SKILLS.map((skillId) => {
            const config = SKILLS[skillId];
            const title =
              skillId === 'recamera-pro' ? copy.proCardTitle : copy.legacyCardTitle;
            const description =
              skillId === 'recamera-pro' ? copy.proCardDesc : copy.legacyCardDesc;

            return (
              <a
                key={skillId}
                className={styles.card}
                href={localizeReCameraHref(
                  config.detailPath,
                  i18n.currentLocale,
                  pathname
                )}
              >
                <span className={styles.cardTag}>{config.tag}</span>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{description}</p>
                <span className={styles.cardAgents}>
                  <strong>{copy.worksWith}:</strong> {agentsBySkill[skillId]}
                </span>
                <span className={styles.cardCta}>{copy.viewGuide} →</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// MDX imports default-export the component; named exports are used by TSX.
export default AgentSkillsInstaller;
