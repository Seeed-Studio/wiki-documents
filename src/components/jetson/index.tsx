import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import { useColorMode } from '@docusaurus/theme-common';

// 动态加载四种语言的配置
import * as config_en from './config.en';
import * as config_ja from './config.ja';
import * as config_zh from './config.zh';
import * as config_es from './config.es';

function getImgUrl(str: string, suffix?: string) {
  return `https://files.seeedstudio.com/wiki/Jetson/${str}.${suffix || 'png'}`;
}

const toUrl = (url: string) => {
  if (!url) return;
  window.location.href = url;
};

export const translations = {
  en: {
    banner: {
      title: "Community Projects",
      desc: "NVIDIA® Jetson™ delivers high-performance AI at the edge with energy-efficient modules using NVIDIA CUDA-X™ software. As an authorized reseller and Elite Partner, Seeed provides a comprehensive edge AI development solution, leveraging 15+ years of hardware expertise.",
      bottom: "Learn more about the comparison between the NVIDIA Jetson powered devices",
    },
    usage1: {
      title: "Jetpack Flash and Hardware Usage",
      desc: "Most of our reComputer Jetson products come with NVIDIA JetPack system pre-installed on the device. However, if you want to flash these devices again or flash other devices which do not come with JetPack system, follow these guides.",
    },
    usage2: {
      title: "AI Developer Tools",
      desc: "The AI development process includes data collection, training, optimization, and deployment. We provide a full stack of documentation to support each phase.",
    },
    community: {
      title: "Community Projects",
      cv: "Computer Vision",
      gen: "Generative AI",
      robot: "Robotics",
    },
  },
  ja: {
    banner: {
      title: "コミュニティプロジェクト",
      desc: "NVIDIA® Jetson™ は、エネルギー効率に優れたモジュールを使用し、エッジで高性能な AI を実現します。Seeed は正規代理店およびエリートパートナーとして、15 年以上のハードウェア経験を活かし、エッジ AI ソリューションを提供します。",
      bottom: "NVIDIA Jetson 搭載デバイスの比較についてさらに詳しく",
    },
    usage1: {
      title: "Jetpack フラッシュとハードウェアの使用",
      desc: "reComputer Jetson 製品のほとんどには JetPack システムがプリインストールされています。必要に応じて再フラッシュまたは他デバイスへのインストールが可能です。",
    },
    usage2: {
      title: "AI 開発ツール",
      desc: "データ収集、学習、最適化、デプロイなど、Jetson における AI 開発プロセスをサポートする完全なドキュメントを提供します。",
    },
    community: {
      title: "コミュニティプロジェクト",
      cv: "コンピュータビジョン",
      gen: "生成 AI",
      robot: "ロボティクス",
    },
  },
  zh: {
    banner: {
      title: "社区项目",
      desc: "NVIDIA® Jetson™ 通过搭载 NVIDIA CUDA-X™ 软件的高能效模块，在边缘提供高性能 AI。作为授权经销商和精英合作伙伴，Seeed 凭借 15 年以上的硬件经验，提供全面的边缘 AI 开发解决方案。",
      bottom: "了解更多 NVIDIA Jetson 驱动设备的比较信息",
    },
    usage1: {
      title: "Jetpack 刷机与硬件使用",
      desc: "我们的多数 reComputer Jetson 产品已预装 NVIDIA JetPack 系统。如果你希望重新刷机或为未预装 JetPack 的设备安装系统，请参考以下指南。",
    },
    usage2: {
      title: "AI 开发工具",
      desc: "AI 开发流程包括数据收集、模型训练、优化和部署。我们为每个阶段提供了完整的文档支持。",
    },
    community: {
      title: "社区项目",
      cv: "计算机视觉",
      gen: "生成式 AI",
      robot: "机器人",
    },
  },
  es: {
    banner: {
      title: "Proyectos Comunitarios",
      desc: "NVIDIA® Jetson™ ofrece inteligencia artificial de alto rendimiento en el borde mediante módulos energéticamente eficientes y el software NVIDIA CUDA-X™. Como distribuidor autorizado y socio Elite, Seeed proporciona una solución integral de desarrollo de IA en el borde con más de 15 años de experiencia en hardware.",
      bottom: "Conozca más sobre la comparación entre los dispositivos impulsados por NVIDIA Jetson",
    },
    usage1: {
      title: "Uso de Hardware y Flash de JetPack",
      desc: "La mayoría de nuestros productos Jetson reComputer vienen con el sistema JetPack preinstalado. Si desea volver a flashear el dispositivo o instalar JetPack en otros dispositivos, siga estas guías.",
    },
    usage2: {
      title: "Herramientas de Desarrollo de IA",
      desc: "El proceso de desarrollo de IA incluye recopilación de datos, entrenamiento, optimización y despliegue. Ofrecemos documentación completa para respaldar cada fase.",
    },
    community: {
      title: "Proyectos Comunitarios",
      cv: "Visión por Computadora",
      gen: "IA Generativa",
      robot: "Robótica",
    },
  },
};

const configMap = {
  en: config_en,
  ja: config_ja,
  zh: config_zh,
  es: config_es,
};

type Props = {
  lang?: 'en' | 'ja' | 'zh' | 'es';
};

const usageRender = (obj) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={clsx(styles.section, styles.usage, obj.class)}>
      <div className={styles.title}>{obj.title}</div>
      <div className={styles.desc}>{obj.desc}</div>
      <div className={clsx(styles.com_wrapper, styles.flex, styles.section_wrapper)}>
        <div className={styles.left_container}>
          {obj.list.map((item, index) => (
            <div
              key={index}
              className={clsx(styles.flex, styles.tab, activeIndex === index && styles.active)}
              onClick={() => setActiveIndex(index)}
            >
              <img src={item.img} alt={item.name} />
              <div className={styles.name}>{item.name}</div>
            </div>
          ))}
        </div>
        <div className={styles.right_container}>
          <div className={styles.right_wrapper}>
            {obj.list[activeIndex].brands.map((brand, idx) => (
              <div
                key={idx}
                className={clsx(styles.prod_item, styles.cursor)}
                onClick={() => toUrl(brand.href)}
              >
                <img src={brand.img} alt={brand.name} />
                <div className={styles.name}>{brand.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RecomputerPage = ({ lang = 'en' }: Props) => {
  const { colorMode } = useColorMode();
  const t = translations[lang];
  const config = configMap[lang];

  return (
    <div className={clsx(styles.jetson_page, styles[colorMode])}>
      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.banner_left}>
          <div className={styles.title}>{t.banner.title}</div>
          <div>{t.banner.desc}</div>
          <div className={clsx(styles.flex, styles.bottom)}>
            <div className={clsx(styles.right, styles.flex)}>
              <img src={getImgUrl('right', 'svg')} alt="" />
            </div>
            <span>{t.banner.bottom}</span>
          </div>
        </div>
        <div className={styles.banner_right}>
          <img src={getImgUrl('banner_img')} alt="" />
        </div>
      </div>

      {/* Usage Section 1 */}
      {usageRender({
        title: t.usage1.title,
        desc: t.usage1.desc,
        list: config.listData,
      })}

      {/* Usage Section 2 */}
      {usageRender({
        class: styles.gray,
        title: t.usage2.title,
        desc: t.usage2.desc,
        list: config.listData1,
      })}

      {/* Community Section */}
      <div className={clsx(styles.section, styles.community)}>
        <div className={styles.title}>{t.community.title}</div>

        <div className={clsx(styles.subtitle, styles.bold, styles.center)}>{t.community.cv}</div>
        <div className={clsx(styles.com_wrapper, styles.flex, styles.section_wrapper)}>
          {config.communityList_cv.map((item, idx) => (
            <div key={idx} className={clsx(styles.com_item)}>
              <img src={item.img} alt={item.name} />
              <div className={clsx(styles.com_title, styles.cursor)} onClick={() => toUrl(item.URL)}>
                {item.name}
              </div>
            </div>
          ))}
        </div>

        <div className={clsx(styles.subtitle, styles.bold, styles.center)}>{t.community.gen}</div>
        <div className={clsx(styles.com_wrapper, styles.flex, styles.section_wrapper)}>
          {config.communityList_gen.map((item, idx) => (
            <div key={idx} className={clsx(styles.com_item)}>
              <img src={item.img} alt={item.name} />
              <div className={clsx(styles.com_title, styles.cursor)} onClick={() => toUrl(item.URL)}>
                {item.name}
              </div>
            </div>
          ))}
        </div>

        <div className={clsx(styles.subtitle, styles.bold, styles.center)}>{t.community.robot}</div>
        <div className={clsx(styles.com_wrapper, styles.flex, styles.section_wrapper)}>
          {config.communityList_robot.map((item, idx) => (
            <div key={idx} className={clsx(styles.com_item)}>
              <img src={item.img} alt={item.name} />
              <div className={clsx(styles.com_title, styles.cursor)} onClick={() => toUrl(item.URL)}>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecomputerPage;
