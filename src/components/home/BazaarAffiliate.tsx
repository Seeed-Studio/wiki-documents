import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import css from './form.module.scss';
import contributorBanner from '../../../assets/index/contributor_banner.png';
import rangerBanner from '../../../assets/index/ranger_banner.png';
import affiliateBanner from '../../../assets/index/bazaar_affiliate_banner.png';

const imageMap: Record<string, string> = {
  'contributor_banner.png': contributorBanner,
  'ranger_banner.png': rangerBanner,
  'bazaar_affiliate_banner.png': affiliateBanner,
};


// 统一主题色
const THEME_COLOR = '#89b929';

// 项目数据配置
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
      {
        text: 'Learn More',
        link: 'https://wiki.seeedstudio.com/contributors/',
        primary: true
      }
    ],
    image: 'contributor_banner.png'
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
      {
        text: 'Explore Ranger Program',
        link: 'https://wiki.seeedstudio.com/ranger/',
        primary: true
      }
    ],
    image: 'ranger_banner.png'
  },
  {
    id: 'affiliate',
    title: 'Join Creators & Affiliate Program',
    subtitle: 'Seeed is looking for tech creators & community promoters!',
    description: `Join and unlock 10% commission Home Assistant compatible hardware campaign. Developer favourites are packed with project potential. 

Don't hesitate, start promoting and earning high rewards.`,
    contact: 'Got questions? Email us to know more: ',
    contactEmail: 'affiliate@seeed.cc',
    buttons: [
      {
        text: 'See Program Details',
        link: 'https://www.seeedstudio.com/blog/affiliate-program/',
        primary: true
      }
    ],
    image: 'bazaar_affiliate_banner.png'
  }
];

interface BazaarAffiliateProps {
  // 移除theme参数，直接使用HTML的data-theme属性
}

const BazaarAffiliate: React.FC<BazaarAffiliateProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮换
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % programsData.length);
  //   }, 6000); // 每6秒切换一次

  //   return () => clearInterval(interval);
  // }, []);

  const currentProgram = programsData[currentIndex];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={clsx(css.bazaar_carousel_container, 'com_module')}>
      {/* 主标题 */}
      <div className={css.get_involved_header}>
        <div className={css.get_involved_title}>
          Get Involved
        </div>
      </div>

      {/* 内容包装器 - 除标题外的所有内容 */}
      <div className={css.get_involved_content_wrapper}>
        {/* 项目标签导航 */}
        <div className={css.project_tabs}>
          {programsData.map((program, index) => (
            <button
              key={index}
              className={clsx(
                css.project_tab,
                index === currentIndex && css.active
              )}
              onClick={() => handleDotClick(index)}
            >
              {program.id === 'contributor' && 'Contributors'}
              {program.id === 'ranger' && 'Rangers'}
              {program.id === 'affiliate' && 'Creator & Affiliate'}
            </button>
          ))}
        </div>

        {/* 项目标题 */}
        <div 
          className={css.bazaar_carousel_title}
          style={{ color: THEME_COLOR }}
        >
          {currentProgram.title}
        </div>

        {/* 内容区域 */}
        <div className={css.bazaar_carousel_row}>
          {/* 左侧文字内容 */}
          <div className={css.bazaar_carousel_content}>
            <h3 style={{ color: THEME_COLOR }}>
              {currentProgram.subtitle}
            </h3>
            <p>{currentProgram.description}</p>

            <div className={css.bazaar_carousel_contact}>
              {currentProgram.contact}
              <a
                href={
                  currentProgram.contactEmail.startsWith('http')
                    ? currentProgram.contactEmail
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
                  key={index}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    button.primary ? css.btn_primary : css.btn_secondary
                  )}
                  style={{
                    backgroundColor: button.primary ? THEME_COLOR : 'transparent',
                    borderColor: THEME_COLOR,
                    color: button.primary ? 'white' : THEME_COLOR
                  }}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>

          {/* 右侧图片 */}
          <a
            href={currentProgram.buttons[0]?.link}
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