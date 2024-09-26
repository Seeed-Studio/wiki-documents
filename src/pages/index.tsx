import React, { useEffect ,useState} from 'react';
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
import IndexForm from '../components/home/form'
import IndexLatestedViki from '../components/home/lasted'
import IndexPlatform from '../components/home/platform'
import IndexBrowseBy from '../components/home/browseBy'
import {judgeHomePath} from '../utils/jsUtils'
import { startedList, exploreList } from '../define/indexData'
import { log } from 'console';
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
    <div className={clsx(css.index_banner, 'com_module')}>
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
            <SwiperSlide >
              <div className={css.banner_item}>
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
const renderNa = (list, isExplore?: boolean) => {
  const htmlElement = document.documentElement;
  const dataTheme = htmlElement.getAttribute('data-theme');
  var navbar = document.querySelector('.navbar');
  var navContainer = navbar.querySelector('.nav_container');
  if (isExplore) {
    navContainer.classList.add('explore')
  } else {
    navContainer.classList.remove('explore')
  }
  let html = ''
  list.forEach((item, index) => {
    let cHtm = ''
    item.children.forEach((cItem, index) => {
      cHtm += `<a class="home_nav_item_a" href="${cItem.link}" target="_blank" >${cItem.title}</a>`
      if (cItem.children && cItem.children.length > 0) {
        cItem.children.forEach((ccItem, index) => {
          cHtm += `<a class="home_nav_item_a sub  ${cItem.split ? 'split' : ''}" href="${ccItem.link}" target="_blank" > - ${ccItem.title}</a>`
        })
      }
    })
    html += `
        <div class="home_nav_item">
        <a href="${item.link}" class="home_nav_item_img" target="_blank" > <img src="${getIndexImage(item.img+`${dataTheme==='light'?'_light':''}.png`)}" alt="" /></a>
        <div class="nav_item_box">
        ${cHtm}
        </div>
      </div>
        `
  })
  navContainer.innerHTML = html
  var container = navbar.querySelector('.nav_container');
  container.style.display = 'flex';
  // 监听移出事件
  container.addEventListener('mouseleave', () => {
    container.style.display = 'none';
  });
}

function Home() {
  const [theme, setTheme] = useState('light');
  // setTimeout(() => {
  //   renderNa(exploreList,true)
  // }, 1000);

  useEffect(() => {
    var navbar = document.querySelector('.navbar');
    var navContainer = navbar.querySelector('.nav_container');
    if (!navContainer) {
      var newNavContainer: any = document.createElement('div');
      newNavContainer.className = 'nav_container com_module';
      navbar.appendChild(newNavContainer);
      navbar.querySelector('.js_getting_started').addEventListener('mouseenter', () => {
        renderNa(startedList)
        navbar.querySelector('.js_getting_started').classList.add('active')
        navbar.querySelector('.js_explore_learn').classList.remove('active')

      });
      navbar.querySelector('.js_explore_learn').addEventListener('mouseenter', () => {
        renderNa(exploreList, true)
        navbar.querySelector('.js_getting_started').classList.remove('active')
        navbar.querySelector('.js_explore_learn').classList.add('active')

      });
      navbar.addEventListener('mouseleave', () => {
        newNavContainer.style.display = 'none';
        navbar.querySelector('.js_explore_learn').classList.remove('active')
        navbar.querySelector('.js_getting_started').classList.remove('active')

      });
      navbar.querySelector('.dropdown').addEventListener('mouseleave', () => {
        newNavContainer.style.display = 'none';
        navbar.querySelector('.js_explore_learn').classList.remove('active')
        navbar.querySelector('.js_getting_started').classList.remove('active')
      });
      document.querySelector('.navbar__items--right').addEventListener('mouseenter', () => {
        newNavContainer.style.display = 'none';
        navbar.querySelector('.js_explore_learn').classList.remove('active')
        navbar.querySelector('.js_getting_started').classList.remove('active')
      });
      
    }


    judgeHomePath()
    const htmlElement = document.documentElement;
    const dataTheme = htmlElement.getAttribute('data-theme');
    setTheme(dataTheme)
  }, [])
  return (
    <Layout>
      <div className={clsx(css.index_container,css[theme])}>
        {renderBanner()}
        <IndexLatestedViki ></IndexLatestedViki>
        <IndexBrowseBy theme={theme}></IndexBrowseBy>
        <IndexPlatform></IndexPlatform>
        <IndexForm ></IndexForm>
      </div>
    </Layout>
  )
  // return <Redirect to="/Getting_Started" />;
}

export default Home;