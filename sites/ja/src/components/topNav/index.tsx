import React, { useEffect } from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/DocItem/Layout';
import '../../css/indexPage.css'

import { getExploreList, getStartedList } from '../../define/indexData'

// 语言与链接工具（只用到三个）
import { detectLocaleFromPath, localizeHref, localizedLink, type Locale } from '../../pages/home/lib/locale';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */

const getIndexImage = (src) => {
  return src && require(`@assets/index/${src}`).default;
};

// 根据是否为 http(s) 选择 localizeHref / localizedLink
function linkFor(rawHref: string, locale: Locale) {
  if (!rawHref) return rawHref;

  // 绝对链接：只对 wiki.seeedstudio.com 加语言前缀；其他域名原样返回
  if (/^https?:\/\//i.test(rawHref)) {
    return localizeHref(rawHref, locale);
  }

  // 相对路径（站内链接）：自动加 /cn /ja /es 前缀（英文为空）
  return localizedLink(rawHref, locale);
}

const renderNa = (list, locale: Locale, isExplore?: boolean) => {
  const htmlElement = document.documentElement;
  const dataTheme = htmlElement.getAttribute('data-theme');

  var navbar = document.querySelector('.navbar');
  var navContainer:any = navbar.querySelector('.nav_container');
  if (isExplore) {
    navContainer.classList.add('explore')
  } else {
    navContainer.classList.remove('explore')
  }
  let html = ''
  list.forEach((item, index) => {
    let cHtm = ''
    item.children.forEach((cItem, index) => {
      // 子级链接走 linkFor
      cHtm += `<a class="home_nav_item_a" href="${linkFor(cItem.link, locale)}" target="_blank">${cItem.title}</a>`
      if (cItem.children && cItem.children.length > 0) {
        cItem.children.forEach((ccItem, index) => {
          // 孙级链接走 linkFor
          cHtm += `<a class="home_nav_item_a sub  ${cItem.split ? 'split' : ''}" href="${linkFor(ccItem.link, locale)}" target="_blank"> - ${ccItem.title}</a>`
        })
      }
    })
    // 顶部图片链接也走 linkFor
    html += `
        <div class="home_nav_item">
        <a href="${linkFor(item.link, locale)}" class="home_nav_item_img" target="_blank"> <img src="${getIndexImage(item.img + `${dataTheme === 'light' ? '_light' : ''}.png`)}" alt="" /></a>
        <div class="nav_item_box">
        ${cHtm}
        </div>
      </div>
        `
  })
  navContainer.innerHTML = html
  var container:any = navbar.querySelector('.nav_container');
  container.style.display = 'flex';
  // 监听移出事件
  container.addEventListener('mouseleave', () => {
    container.style.display = 'none';
  });
}

export default function DocItemLayout({ children }: Props): JSX.Element {

  useEffect(() => {

    var navbar:any = document.querySelector('.navbar');
    var navContainer = navbar.querySelector('.nav_container');
    console.log(navContainer,9999)
    if (!navContainer) {
      const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
      const locale = detectLocaleFromPath(pathname);
      const startedList = getStartedList(locale);
      const exploreList = getExploreList(locale);
      var newNavContainer: any = document.createElement('div');
      newNavContainer.className = 'nav_container com_module';
      navbar.appendChild(newNavContainer);
      document.querySelectorAll('.navbar_dorp_items').forEach((item)=>{
        item.addEventListener('mouseenter', () => {
          console.log('.dropdown mouseenter' )
          newNavContainer.style.display = 'none';
          navbar.querySelector('.js_explore_learn').classList.remove('active')
          navbar.querySelector('.js_getting_started').classList.remove('active')
        });
      })
      navbar.querySelector('.js_getting_started').addEventListener('mouseenter', () => {
        renderNa(startedList, locale)
        navbar.querySelector('.js_getting_started').classList.add('active')
        navbar.querySelector('.js_explore_learn').classList.remove('active')

      });
      navbar.querySelector('.js_explore_learn').addEventListener('mouseenter', () => {
        renderNa(exploreList, locale, true)
        navbar.querySelector('.js_getting_started').classList.remove('active')
        navbar.querySelector('.js_explore_learn').classList.add('active')

      });
      navbar.addEventListener('mouseleave', () => {
        newNavContainer.style.display = 'none';
        navbar.querySelector('.js_explore_learn').classList.remove('active')
        navbar.querySelector('.js_getting_started').classList.remove('active')

      });
    
      navbar.querySelector('.dropdown').addEventListener('mouseenter', () => {
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


  }, [])
  return (
    <></>
  );
}
