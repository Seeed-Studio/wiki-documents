import React, { useEffect } from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/DocItem/Layout';
import '../../css/indexPage.css'

import { exploreList ,startedList} from '../../define/indexData'

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */

const getIndexImage = (src) => {
  return src && require(`../../../assets/index/${src}`).default;
}

const renderNa = (list, isExplore?: boolean) => {
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
      cHtm += `<a class="home_nav_item_a" href="${cItem.link}" target="_blank" >${cItem.title}</a>`
      if (cItem.children && cItem.children.length > 0) {
        cItem.children.forEach((ccItem, index) => {
          cHtm += `<a class="home_nav_item_a sub  ${cItem.split ? 'split' : ''}" href="${ccItem.link}" target="_blank" > - ${ccItem.title}</a>`
        })
      }
    })
    html += `
        <div class="home_nav_item">
        <a href="${item.link}" class="home_nav_item_img" target="_blank" > <img src="${getIndexImage(item.img + `${dataTheme === 'light' ? '_light' : ''}.png`)}" alt="" /></a>
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
