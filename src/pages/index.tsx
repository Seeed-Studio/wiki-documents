// import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import styles from './index.module.css';

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/Getting_Started">
//             Get Start ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): JSX.Element {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

import React, { useEffect, useState } from 'react';
import { Redirect } from '@docusaurus/router';
import css from './index.module.scss'
import clsx from 'clsx'
import {
  ColorModeProvider,
} from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
// import IndexForm from '../components/home/form'
import IndexLatestedViki from '../components/home/lasted'
import TopNav from '../components/topNav';
import IndexPlatform from '../components/home/platform'
import IndexBrowseBy from '../components/home/browseBy'
import { judgeHomePath } from '../utils/jsUtils'
// import { useThemeConfig,useColorMode} from '@docusaurus/theme-common';
const getIndexImage = (src) => {
  return src && require(`../../assets/index/${src}`).default;
}




// banner part

const renderBanner = () => {
  const bannerList = [
    // {
    //   title1: 'SSCMA',
    //   title: 'Open-source project focused on embedded AI',
    //   description: 'We have optimized excellent algorithms for real-world scenarios and made implementation more user-friendly, achieving faster and more accurate inference on embedded devices.',
    //   link: '',
    //   bannerImg: 'sscma.png',
    //   btnList: [
    //     {
    //       text: 'Get Started',
    //       link: 'https://sensecraftma.seeed.cc/introduction/quick_start',
    //       class: 'green'
    //     },
    //     {
    //       text: 'Install SSCMA',
    //       link: 'https://sensecraftma.seeed.cc/introduction/installation'
    //     },
    //     {
    //       text: 'View on GitHub',
    //       link: 'https://github.com/Seeed-Studio/ModelAssistant'
    //     }
    //   ]
    // },
    {
      title: 'Seeed Studio Wiki Platform',
      description: 'Seeed Studio has dedicated to realizing interactive digital replica of our physical world, as being an IoT hardware partner since 2008. This is an open platform collecting all the wikis published by Seeed Studio, to show you the full picture of our efforts, natural environments digitization and outcome production.',
      link: '',
      bannerImg: 'platform.png',
      btnList: [
        {
          text: 'Getting Started',
          link: '/Getting_Started',
          class: 'green'
        },
        {
          text: 'Technology',
          link: 'https://wiki.seeedstudio.com/topicintroduction/'
        },
        {
          text: 'GitHub',
          link: 'https://github.com/Seeed-Studio/wiki-documents'
        },
      ]
    },
  ]
  return (
    <div className={clsx(css.index_banner)}>
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        slidesPerView={1} // 每次显示的幻灯片数量
        pagination={{ clickable: true }} // 显示分页器
        scrollbar={{ draggable: true }} // 显示滚动条
      >


        {bannerList.map((item, index) => {
          return (
            <SwiperSlide className="com_module">
              <div className={clsx(css.banner_item)}>
                <div className={css.banner_item_info}>
                  <h1 className={clsx(css.banner_item_info_title, css.green)}>{item.title1}</h1>
                  <h2 className={css.banner_item_info_title}>{item.title}</h2>
                  <p className={css.banner_description}>{item.description}</p>
                  <div className={css.banner_btn}>
                    {item.btnList.map((btn, index) => {
                      return (
                        <a href={btn.link} className={clsx(css.banner_btn_item, css[btn.class])} key={index}>
                          {btn.text}
                        </a>
                      )
                    })}
                  </div>
                </div>

                <div className={css.banner_item_img}>
                  <img src={getIndexImage(item.bannerImg)} alt="" />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}



function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    judgeHomePath()
    const htmlElement = document.documentElement;
    const dataTheme = htmlElement.getAttribute('data-theme');
    setTheme(dataTheme)
  }, [])
  return (
    <Layout>
      <div className={clsx(css.index_container, css[theme])}>
        <TopNav></TopNav>
        {renderBanner()}
        <IndexLatestedViki ></IndexLatestedViki>
        <IndexBrowseBy theme={theme}></IndexBrowseBy>
        <IndexPlatform></IndexPlatform>
        {/* <IndexForm ></IndexForm> */}

        <div className={clsx(css.tech_container, 'com_module')}>
        <h2>Tech Support & Product Discussion</h2>
        <p>
          Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.
        </p>

        <div className={clsx(css.tech_container,'com_module')}>
          <div className={clsx(css.tech_wrapper,"button_tech_support_container")} >
            <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
            <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
          </div>

          <div className={clsx(css.tech_wrapper,"button_tech_support_container")}>
            <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
            <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  )
  // return <Redirect to="/Getting_Started" />;
}

export default Home;