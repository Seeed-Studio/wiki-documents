import React, { useState, useEffect } from 'react';
import css from './form.module.scss'
import clsx from 'clsx'
import 'react-toastify/dist/ReactToastify.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const getIndexImage = (src) => {
  return src && require(`../../../assets/index/browse/${src}`).default;
}

function IndexLatestedViki(props) {
  const [theme, setTheme] = useState(props.theme);
  const wikiList = [
    {
      key: 'arduino',
      image: 'arduino',
      moreLink:'https://wiki.seeedstudio.com/Arduino/',
      docList: [
        {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        },
        {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }
        , {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }, {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }
      ]
    }, {
      key: 'raspberry',
      image: 'raspberry',
      moreLink:'https://wiki.seeedstudio.com/Raspberry_Pi/',
      docList: [
        {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        },
        {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }
        , {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }, {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }
      ]
    }
    ,
    {
      key: 'nvidia',
      image: 'nvidia',
      moreLink:'https://wiki.seeedstudio.com/NVIDIA_Jetson/',

      docList: [
        {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",
          "title": "Fan is not turning on",
        },
        {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }
        , {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }, {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }
      ]
    }, {
      key: 'homeAssistant',
      image: 'ha',
      moreLink:'https://wiki.seeedstudio.com/home_assistant_topic/',
      docList: [
        {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        },
        {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }
        , {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }, {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }
      ]
    }, {
      key: 'edgeAi',
      image: 'edgeAi',
      moreLink:'',
      docList: [
        {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        },
        {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",
          "title": "Fan is not turning on",
        }
        , {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }, {
          "path": "/Fan_Pinout",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan Pinout",
        },
        {
          "path": "/Turn_on_the_Fan",
          "image": "https://files.seeedstudio.com/wiki/wiki-platform/S.png",
          "title": "Fan is not turning on",
        }
      ]
    }
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const [docList, setDocsList] = useState(wikiList[0].docList)
  const [moreLink, setMoreLink] = useState(wikiList[0].moreLink)

  const changeTab = (index) => {
    setActiveIndex(index)
    setDocsList(wikiList[index].docList)
    setMoreLink(wikiList[index].moreLink)
  }
  useEffect(() => {
    const dom = document.querySelector('.navbar__items--right .clean-btn')
    dom && dom.addEventListener('click', () => {
      setTimeout(() => {
        const htmlElement = document.documentElement;
        const dataTheme = htmlElement.getAttribute('data-theme');
        setTheme(dataTheme)
      }, 20);
    });
  }, [props.theme])

  return (
    <div className={clsx(css.browseBy, 'com_module')}>
      <div className={css.latested_header}>
        <div className={css.latested_header_left}>
          <div className={css.latested_header_title}>
            Browse by
          </div>
        </div>
      </div>
      <div className={css.browseBy_box}>
        <div className={css.browseBy_header}>
          {wikiList.map((item, index) => {
            const src = getIndexImage(item.image + `${theme === 'light' ? '_light' : ''}.png`)
            return (
              <div className={clsx(css.browseBy_item, index === activeIndex ? css.active : '')} key={item.key} onClick={() => changeTab(index)}>
                <img src={src} alt="" />
              </div>
            )
          })}
        </div>
        <div className={css.browseBy_container}>
          {docList.map((item, index) => {
            return (
              <a className={css.doc_item} href={item.path}>
                <img src={item.image} alt="" />
                <div className={css.wiki_name}>{item.title}</div>
              </a>
            )
          })}
        </div>
        <div className={css.browseBy_more}>
          <a href={moreLink}>More  <FaChevronRight size={14}/></a>
        </div>
      </div>
    </div>
  )
}

export default IndexLatestedViki;