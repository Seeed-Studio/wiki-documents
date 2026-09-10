import React, { useState, useRef, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import styles from './index.module.scss';
import {
  productFamily,
  resourceTabs,
} from './productData';
import { createReCameraTranslator, localizeReCameraHref } from './i18n';
import {
  CameraIcon,
  CpuIcon,
  WifiIcon,
  PuzzleIcon,
  LayoutIcon,
  CodeIcon,
  UsersIcon,
  HomeIcon,
  BellIcon,
  CityIcon,
  BotIcon,
  LightbulbIcon,
  BarChartIcon,
  TerminalIcon,
  MousePointerClickIcon,
  HackadayIcon,
  DiscordIcon,
  GithubIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
} from './icons';

// ===================== Icon Maps =====================
const categoryIconMap: Record<string, React.FC<{ className?: string }>> = {
  camera: CameraIcon,
  cpu: CpuIcon,
  wifi: WifiIcon,
  puzzle: PuzzleIcon,
};

const resourceIconMap: Record<string, React.FC<{ className?: string }>> = {
  layout: LayoutIcon,
  code: CodeIcon,
  users: UsersIcon,
  home: HomeIcon,
  bell: BellIcon,
  city: CityIcon,
  bot: BotIcon,
  lightbulb: LightbulbIcon,
  barchart: BarChartIcon,
  cpu: CpuIcon,
  terminal: TerminalIcon,
  mouseclick: MousePointerClickIcon,
  hackaday: HackadayIcon,
  github: GithubIcon,
  discord: DiscordIcon,
};

// ===================== i18n =====================
function useReCameraTranslator() {
  const { i18n } = useDocusaurusContext();
  const { pathname } = useLocation();
  return createReCameraTranslator(i18n.currentLocale, pathname);
}

function useReCameraHrefLocalizer() {
  const { i18n } = useDocusaurusContext();
  const { pathname } = useLocation();
  return (href: string) => localizeReCameraHref(href, i18n.currentLocale, pathname);
}

// ===================== Scroll Reveal =====================
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add(styles.reveal);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.revealVisible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ===================== 1. HERO =====================
function HeroSection() {
  const t = useReCameraTranslator();
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>{t('reCamera Family')}</h1>
          <p className={styles.heroSubtitle}>{t('Open Source AI Camera Platform')}</p>
          <p className={styles.heroDesc}>
            {t('From entry-level edge AI to high-performance industrial vision — the reCamera family offers flexible solutions for every scenario. Powered by open-source software, dual-architecture support, and a growing ecosystem of modules and accessories.')}
          </p>
        </div>
        <div className={styles.heroVisual}>
          <img
            src="https://files.seeedstudio.com/wiki/reCamera/20260825-100540.jpg"
            alt={t('reCamera Product Family')}
            className={styles.heroImage}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

// ===================== 2. PRODUCT FAMILY (Tab Switcher) =====================
function ProductFamilySection() {
  const t = useReCameraTranslator();
  const localizeHref = useReCameraHrefLocalizer();
  const [activeTab, setActiveTab] = useState(productFamily[0].id);
  const ref = useScrollReveal();
  const activeTabData = productFamily.find((t) => t.id === activeTab);

  return (
    <section className={styles.sectionDark} ref={ref}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitleWhite}>
            {t('Choose Your')} <span className={styles.accent}>reCamera</span>
          </h2>
          <p className={styles.sectionDescDim}>
            {t('Select from the reCamera family — devices, modules, and accessories to build your edge AI vision solution')}
          </p>
        </div>

        {/* Family Tabs */}
        <div className={styles.categoryTabs}>
          {productFamily.map((tab) => {
            const IconComp = categoryIconMap[tab.icon] || CameraIcon;
            return (
              <button
                key={tab.id}
                className={`${styles.categoryTab} ${
                  activeTab === tab.id ? styles.categoryTabActive : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <IconComp />
                <span>{t(tab.title)}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className={styles.productGrid}>
          {activeTabData?.items.map((item) => (
            <a key={item.name} href={localizeHref(item.href)} className={styles.productCard}>
              {item.isNew && <span className={styles.newBadge}>{t('New')}</span>}
              <div className={styles.productImageWrap}>
                <img
                  src={item.image}
                  alt={t(item.name)}
                  className={styles.productImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{t(item.name)}</h3>
                <p className={styles.productDesc}>{t(item.description)}</p>
                {item.tags && (
                  <div className={styles.productTags}>
                    {item.tags.map((tag) => (
                      <span key={tag} className={styles.productTag}>{t(tag)}</span>
                    ))}
                  </div>
                )}
                <span className={styles.gettingStartedBtn}>
                  {t('Getting Started')}
                  <ArrowRightIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== 3. AI TRAINING =====================
function AIDeploySection() {
  const t = useReCameraTranslator();
  const ref = useScrollReveal();
  return (
    <section className={styles.sectionLight} ref={ref}>
      <div className={styles.sectionInner}>
        <a
          href="https://sensecraft.seeed.cc/ai/training?trainTab=2"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.trainingLink}
        >
          <div style={{ textAlign: 'center' }}>
            <img
              src="https://sensecraft.seeed.cc/ai/static/img/sensecraft-duel.11bb24a0.svg"
              alt="SenseCraft AI"
              className={styles.sensecraftLogo}
              loading="lazy"
            />
          </div>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {t('Train your custom model in')} <span className={styles.accent}>{t('1 minute')}</span>
            </h2>
          </div>
          <div className={styles.flowSteps}>
            <div className={styles.flowStep}>
              <div className={styles.flowStepNumber}>1</div>
              <h4 className={styles.flowStepTitle}>{t('Collect data')}</h4>
            </div>
            <div className={styles.flowArrow}>
              <ArrowRightIcon />
            </div>
            <div className={styles.flowStep}>
              <div className={styles.flowStepNumber}>2</div>
              <h4 className={styles.flowStepTitle}>{t('One-click training')}</h4>
            </div>
            <div className={styles.flowArrow}>
              <ArrowRightIcon />
            </div>
            <div className={styles.flowStep}>
              <div className={styles.flowStepNumber}>3</div>
              <h4 className={styles.flowStepTitle}>{t('Deploy to reCamera')}</h4>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

// ===================== 4. RESOURCES =====================
function ResourcesSection() {
  const t = useReCameraTranslator();
  const localizeHref = useReCameraHrefLocalizer();
  const [activeTab, setActiveTab] = useState(resourceTabs[0].id);
  const ref = useScrollReveal();
  const activeTabData = resourceTabs.find((t) => t.id === activeTab);

  return (
    <section className={styles.sectionDarker} ref={ref}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitleWhite}>
            {t('Build with')} <span className={styles.accent}>reCamera</span>
          </h2>
          <p className={styles.sectionDescDim}>
            {t('Applications, open-source tools, and community to accelerate your development')}
          </p>
        </div>

        {/* Resource Tabs */}
        <div className={styles.categoryTabs}>
          {resourceTabs.map((tab) => {
            const IconComp = resourceIconMap[tab.icon] || CodeIcon;
            return (
              <button
                key={tab.id}
                className={`${styles.categoryTab} ${
                  activeTab === tab.id ? styles.categoryTabActive : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <IconComp />
                <span>{t(tab.title)}</span>
              </button>
            );
          })}
        </div>

        {/* Category Grid (3 columns) */}
        <div className={styles.resourceCategoryGrid}>
          {activeTabData?.categories.map((cat) => {
            const CatIcon = resourceIconMap[cat.icon];
            return (
              <div key={cat.title} className={styles.resourceCategoryCard}>
                <div className={styles.resourceCategoryHeader}>
                  {CatIcon && <CatIcon className={styles.resourceCategoryIcon} />}
                  <h3 className={styles.resourceCategoryTitle}>{t(cat.title)}</h3>
                </div>
                <p className={styles.resourceCategoryDesc}>{t(cat.description)}</p>
              <ul className={styles.resourceCategoryList}>
                {cat.items.map((sub) => (
                  <li key={sub.label}>
                    <a
                      href={localizeHref(sub.href)}
                      className={styles.resourceCategoryLink}
                      target={sub.href.startsWith('http') ? '_blank' : undefined}
                      rel={sub.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {t(sub.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}

// ===================== 5. FOOTER =====================
function FooterSection() {
  const t = useReCameraTranslator();
  const localizeHref = useReCameraHrefLocalizer();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerRow}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <img
              src="https://files.seeedstudio.com/wiki/wiki-platform/SeeedStudio.png"
              alt="Seeed Studio"
              className={styles.footerLogo}
            />
            <p>
              {t('Seeed Studio empowers innovators with open-source hardware and AI-powered edge computing solutions. reCamera is built for developers, by developers.')}
            </p>
          </div>

          {/* Links */}
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4>{t('Product')}</h4>
              <a href={localizeHref('https://wiki.seeedstudio.com/recamera_2002_series_introduction/')}>
                reCamera 2002
              </a>
              <a href={localizeHref('https://wiki.seeedstudio.com/recamera_pro_3002_series_introduction/')}>
                reCamera Pro
              </a>
              <a href={localizeHref('https://wiki.seeedstudio.com/recamera_accessories_lens/')}>
                {t('Accessories')}
              </a>
              <a href="https://www.seeedstudio.com/recamera.html" target="_blank" rel="noopener noreferrer">
                {t('Buy reCamera')} <ExternalLinkIcon className={styles.btnIcon} />
              </a>
            </div>
            <div className={styles.footerCol}>
              <h4>{t('Resources')}</h4>
              <a href={localizeHref('https://wiki.seeedstudio.com/recamera_getting_started/')}>
                {t('Getting Started')}
              </a>
              <a href={localizeHref('https://wiki.seeedstudio.com/recamera_nodered_flows/')}>
                {t('Node-RED Guide')}
              </a>
              <a href="https://github.com/Seeed-Studio/ModelAssistant" target="_blank" rel="noopener noreferrer">
                {t('Model Zoo')} <ExternalLinkIcon className={styles.btnIcon} />
              </a>
              <a href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
                {t('GitHub Repo')} <ExternalLinkIcon className={styles.btnIcon} />
              </a>
            </div>
            <div className={styles.footerCol}>
              <h4>{t('Community')}</h4>
              <a href="https://discord.gg/sensecraft" target="_blank" rel="noopener noreferrer">
                Discord <ExternalLinkIcon className={styles.btnIcon} />
              </a>
              <a href="https://forum.seeedstudio.com/" target="_blank" rel="noopener noreferrer">
                {t('Forum')} <ExternalLinkIcon className={styles.btnIcon} />
              </a>
              <a href="https://hackaday.io/project/202736-recamera" target="_blank" rel="noopener noreferrer">
                Hackaday <ExternalLinkIcon className={styles.btnIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Seeed Studio. {t('All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
}

// ===================== MAIN PAGE =====================
export default function ReCameraLandingPage(): React.ReactElement {
  return (
    <div className={styles.recameraPage}>
      <HeroSection />
      <ProductFamilySection />
      <AIDeploySection />
      <ResourcesSection />
      <FooterSection />
    </div>
  );
}
