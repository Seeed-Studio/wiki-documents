import React, { useState } from 'react';
import clsx from 'clsx';
import css from './form.module.scss';
import contributorBanner from '../../../assets/index/contributor_banner.png';
import rangerBanner from '../../../assets/index/ranger_banner.png';
import affiliateBanner from '../../../assets/index/bazaar_affiliate_banner.png';
import { detectLocaleFromPath, localizeHref } from '../../pages/home/lib/locale';

const imageMap: Record<string, string> = {
  'contributor_banner.png': contributorBanner,
  'ranger_banner.png': rangerBanner,
  'bazaar_affiliate_banner.png': affiliateBanner,
};

// 主标题与三个 Tab 文案（按各语言习惯微调）
const I18N_HEADER_TABS = {
  en: { header: 'Get Involved', tabs: { contributor: 'Contributors', ranger: 'Rangers', affiliate: 'Creator & Affiliate' } },
  cn: { header: '加入我们',       tabs: { contributor: '贡献者',          ranger: '社区大使',                 affiliate: '创作者与推广' } },
  ja: { header: '参加しよう',     tabs: { contributor: 'コントリビューター', ranger: 'コミュニティアンバサダー',   affiliate: 'クリエイター＆アフィリエイト' } },
  es: { header: 'Participa',      tabs: { contributor: 'Colaboradores',    ranger: 'Embajador/a de la comunidad', affiliate: 'Creadores y afiliados' } },
} as const;

// 统一主题色
const THEME_COLOR = '#89b929';

// 原始（默认英文）项目数据
const programsData = [
  {
    id: 'contributor',
    title: 'Join Our Contributor Community',
    subtitle: 'Become a Wiki Contributor & Share Your Knowledge!',
    description: `At Seeed Studio, we believe in the power of community. Our Contributor Program invites developers, writers, and creators to help improve our open-source Wiki and projects.

Whether you’re fixing bugs, updating documentation, creating tutorials, or sharing your own IoT/AI projects, your work makes a difference. Explore our GitHub board for open assignments and start collaborating!`,
    contact: 'Explore tasks and collaborate on GitHub: ',
    contactEmail: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479',
    contactLinkText: 'GitHub Project Board',
    buttons: [
      { text: 'Learn More', link: 'https://wiki.seeedstudio.com/contributors/', primary: true },
    ],
    image: 'contributor_banner.png',
  },
  {
    id: 'ranger',
    title: 'Become a Seeed Ranger',
    subtitle: 'Join our exclusive developer community!',
    description: `The Seeed Studio Ranger Program gathers skilled developers who provide expertise, build communities, and drive innovation.

Join us to foster global connections, strengthen local partnerships, and gain insights from community feedback.

Enjoy flexible recruitment and opportunities to explore diverse experiences with meaningful rewards.`,
    contact: 'Interested in becoming a Ranger? Apply here: ',
    contactEmail: 'https://docs.google.com/forms/d/e/1FAIpQLSdiAWHmRJqgVNTJyJDkzhufc1dygFyhWFyEtUTm-mrgSKaEgg/viewform',
    contactLinkText: 'Ranger Application Form',
    buttons: [
      { text: 'Explore Ranger Program', link: 'https://www.seeedstudio.com/ranger-program/', primary: true },
    ],
    image: 'ranger_banner.png',
  },
  {
    id: 'affiliate',
    title: 'Join Creators & Affiliate Program',
    subtitle: 'Seeed is looking for tech creators & community promoters!',
    description: `Join and unlock 10% commission Home Assistant compatible hardware campaign. Developer favourites are packed with project potential.

Don't hesitate, start promoting and earning high rewards.`,
    contact: 'Got questions? Email us to know more: ',
    contactEmail: 'affiliate@seeed.cc',
    contactLinkText: undefined, // 显示邮箱
    buttons: [
      { text: 'See Program Details', link: 'https://www.seeedstudio.com/blog/affiliate-program/', primary: true },
    ],
    image: 'bazaar_affiliate_banner.png',
  },
] as const;

// ✅ 多语言覆盖：仅提供需要覆盖的字段，缺省字段自动回退到英文 programsData
const COPY = {
  cn: {
    contributor: {
      title: '加入我们的贡献者社区',
      subtitle: '成为 Wiki 贡献者，分享你的知识！',
      description: `在 Seeed，我们相信社区的力量。贡献者计划欢迎开发者、写作者和创作者一起改进我们的开源 Wiki 与项目。

无论是修复问题、更新文档、撰写教程，还是分享你的 IoT/AI 项目，你的贡献都至关重要。前往我们的 GitHub 面板查看任务，一键参与协作！`,
      contact: '前往 GitHub 查看任务与协作：',
      contactLinkText: 'GitHub 任务看板',
      buttons: [{ text: '了解更多' }],
    },
    ranger: {
      title: '成为 Seeed 社区大使',
      subtitle: '加入我们的开发者核心社区！',
      description: `Seeed 社区大使计划汇聚经验丰富的开发者，共同提供技术见解、建设社区并推动创新。

加入我们，建立全球连接、加强本地合作，并通过社区反馈获得一线洞察。

灵活的招募机制，丰富的体验机会，以及具有价值的回馈等着你。`,
      contact: '想成为社区大使吗？可以在此申请：',
      contactLinkText: 'Ranger 申请表',
      buttons: [{ text: '了解更多' }],
    },
    affiliate: {
      title: '加入创作者与推广计划',
      subtitle: 'Seeed 正在寻找技术内容创作者与社区推广者！',
      description: `参与活动即可解锁 Home Assistant 兼容硬件 10% 佣金。多款开发者口碑产品，蕴含无限项目潜力。

别犹豫，现在就开始推广并获得丰厚回报吧。`,
      contact: '有疑问？发送邮件了解更多：',
      buttons: [{ text: '了解更多' }],
    },
  },
  ja: {
    contributor: {
      title: 'コントリビューターコミュニティに参加しよう',
      subtitle: 'Wiki のコントリビューターになってナレッジを共有！',
      description: `Seeed Studio はコミュニティの力を信じています。コントリビュータープログラムは、開発者・ライター・クリエイターの皆さんが、オープンソース Wiki やプロジェクトを改善することを歓迎します。

バグ修正、ドキュメント更新、チュートリアル作成、IoT/AI プロジェクトの共有など、あなたの貢献は大きな価値になります。GitHub のボードでタスクをチェックして今すぐ参加！`,
      contact: 'GitHub のタスク一覧：',
      contactLinkText: 'GitHub プロジェクトボード',
      buttons: [{ text: '詳しく見る' }],
    },
    ranger: {
      title: 'Seeed コミュニティアンバサダーになろう',
      subtitle: '開発者コミュニティに参加！',
      description: `Seeed コミュニティアンバサダープログラムは、知見共有・コミュニティ形成・イノベーション推進に取り組む熟練の開発者を集めています。

グローバルなつながりを築き、ローカルパートナーシップを強化し、コミュニティからのフィードバックを活かしましょう。

柔軟な募集と多様な体験機会、そして価値あるリワードをご用意しています。`,
      contact: 'アンバサダーに応募：',
      contactLinkText: '申請フォーム',
      buttons: [{ text: 'アンバサダーについて' }],
    },
    affiliate: {
      title: 'クリエイター＆アフィリエイトプログラム',
      subtitle: 'テッククリエイター／コミュニティプロモーター募集中！',
      description: `Home Assistant 対応ハードウェアのキャンペーンで 10% のコミッションを獲得。開発者に人気の製品で、豊富なプロジェクトを展開できます。

今すぐプロモーションを始めて、高いリワードを手に入れましょう。`,
      contact: 'ご質問はメールで：',
      buttons: [{ text: 'プログラム詳細' }],
    },
  },
  es: {
    contributor: {
      title: 'Únete a nuestra comunidad de colaboradores',
      subtitle: '¡Conviértete en colaborador del Wiki y comparte tu conocimiento!',
      description: `En Seeed Studio creemos en el poder de la comunidad. Nuestro programa de colaboradores invita a desarrolladores, redactores y creadores a mejorar nuestro Wiki y proyectos de código abierto.

Ya sea corrigiendo errores, actualizando documentación, creando tutoriales o compartiendo proyectos de IoT/IA, tu trabajo marca la diferencia. ¡Explora nuestro tablero de GitHub y colabora!`,
      contact: 'Tareas en GitHub: ',
      contactLinkText: 'Tablero del proyecto en GitHub',
      buttons: [{ text: 'Saber más' }],
    },
    ranger: {
      title: 'Conviértete en Embajador/a de la comunidad de Seeed',
      subtitle: 'Únete a nuestra comunidad de desarrolladores',
      description: `El programa de Embajadores de Seeed reúne a desarrolladores con experiencia para aportar conocimientos, construir comunidad e impulsar la innovación.

Únete para crear conexiones globales, fortalecer alianzas locales y obtener ideas valiosas del feedback de la comunidad.

Reclutamiento flexible, experiencias diversas y recompensas significativas.`,
      contact: '¿Quieres ser Embajador/a? Solicita aquí: ',
      contactLinkText: 'Formulario de solicitud',
      buttons: [{ text: 'Conocer el programa' }],
    },
    affiliate: {
      title: 'Programa de creadores y afiliados',
      subtitle: 'Buscamos creadores técnicos y promotores de comunidad',
      description: `Consigue un 10% de comisión con la campaña de hardware compatible con Home Assistant. Productos favoritos de desarrolladores con gran potencial para proyectos.

No lo dudes: empieza a promocionar y gana grandes recompensas.`,
      contact: '¿Dudas? Escríbenos: ',
      buttons: [{ text: 'Ver detalles del programa' }],
    },
  },
} as const;

type LocaleKey = keyof typeof I18N_HEADER_TABS;

// ✅ 英文直连白名单：contributors / ranger 一律不加语言前缀
function isEnglishOnlyWiki(url: string) {
  if (!url) return false;
  try {
    // 绝对地址
    const u = new URL(url);
    const hostOk = /(^|\.)wiki\.seeedstudio\.com$/i.test(u.hostname);
    const p = u.pathname.replace(/\/+$/, '/');
    if (hostOk && (p === '/contributors/')) return true;
  } catch {
    // 相对地址
    const p = url.replace(/[?#].*$/, '').replace(/\/+$/, '/');
    if (p === '/contributors/') return true;
  }
  return false;
}

// 根据 locale + program.id 取覆盖文本（缺失字段回退到英文 programsData）
function getLocalizedProgram(
  base: typeof programsData[number],
  locale: LocaleKey
) {
  const byLocale = (COPY as any)[locale]?.[base.id] || {};
  return {
    ...base,
    title: byLocale.title ?? base.title,
    subtitle: byLocale.subtitle ?? base.subtitle,
    description: byLocale.description ?? base.description,
    contact: byLocale.contact ?? base.contact,
    contactEmail: byLocale.contactEmail ?? base.contactEmail,
    contactLinkText: byLocale.contactLinkText ?? base.contactLinkText,
    buttons: (byLocale.buttons ?? []).length
      ? base.buttons.map((b, i) => ({
          ...b,
          text: byLocale.buttons?.[i]?.text ?? b.text,
        }))
      : base.buttons,
  };
}

const BazaarAffiliate: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const locale = detectLocaleFromPath(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  ) as LocaleKey;

  const currentProgramBase = programsData[currentIndex];
  const currentProgram = getLocalizedProgram(currentProgramBase, locale);

  return (
    <div className={clsx(css.bazaar_carousel_container, 'com_module')}>
      {/* 主标题 */}
      <div className={css.get_involved_header}>
        <div className={css.get_involved_title}>
          {I18N_HEADER_TABS[locale].header}
        </div>
      </div>

      {/* 内容包装器 - 除标题外的所有内容 */}
      <div className={css.get_involved_content_wrapper}>
        {/* 项目标签导航 */}
        <div className={css.project_tabs}>
          {programsData.map((program, index) => (
            <button
              key={program.id}
              className={clsx(css.project_tab, index === currentIndex && css.active)}
              onClick={() => setCurrentIndex(index)}
            >
              {program.id === 'contributor' && I18N_HEADER_TABS[locale].tabs.contributor}
              {program.id === 'ranger' && I18N_HEADER_TABS[locale].tabs.ranger}
              {program.id === 'affiliate' && I18N_HEADER_TABS[locale].tabs.affiliate}
            </button>
          ))}
        </div>

        {/* 项目标题 */}
        <div className={css.bazaar_carousel_title} style={{ color: THEME_COLOR }}>
          {currentProgram.title}
        </div>

        {/* 内容区域 */}
        <div className={css.bazaar_carousel_row}>
          {/* 左侧文字内容 */}
          <div className={css.bazaar_carousel_content}>
            <h3 style={{ color: THEME_COLOR }}>{currentProgram.subtitle}</h3>

            {/* description 支持多段换行 */}
            {String(currentProgram.description)
              .split('\n')
              .filter(Boolean)
              .map((line, i) => (
                <p key={i}>{line}</p>
              ))}

            <div className={css.bazaar_carousel_contact}>
              {currentProgram.contact}
              <a
                href={
                  currentProgram.contactEmail?.startsWith('http')
                    ? (isEnglishOnlyWiki(currentProgram.contactEmail)
                        ? currentProgram.contactEmail
                        : localizeHref(currentProgram.contactEmail, locale))
                    : `mailto:${currentProgram.contactEmail}`
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: THEME_COLOR }}
              >
                {currentProgram.contactLinkText
                  ? currentProgram.contactLinkText
                  : currentProgram.contactEmail}
              </a>
            </div>

            <div className={css.bazaar_carousel_buttons}>
              {currentProgram.buttons.map((button, index) => (
                <a
                  key={`${currentProgram.id}-btn-${index}`}
                  href={isEnglishOnlyWiki(button.link) ? button.link : localizeHref(button.link, locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(button.primary ? css.btn_primary : css.btn_secondary)}
                  style={{
                    backgroundColor: button.primary ? THEME_COLOR : 'transparent',
                    borderColor: THEME_COLOR,
                    color: button.primary ? 'white' : THEME_COLOR,
                  }}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>

          {/* 右侧图片（点击跳转第一个按钮链接） */}
          <a
            href={
              isEnglishOnlyWiki(currentProgram.buttons[0]?.link)
                ? currentProgram.buttons[0]?.link
                : localizeHref(currentProgram.buttons[0]?.link, locale)
            }
            target="_blank"
            rel="noopener noreferrer"
            className={css.bazaar_carousel_image_wrapper}
          >
            <img
              src={imageMap[currentProgram.image]}
              alt={`${currentProgram.title} Banner`}
              className={css.bazaar_carousel_image}
              width={1600}
              height={1600}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BazaarAffiliate;
