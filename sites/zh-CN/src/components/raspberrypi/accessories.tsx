import React from 'react';
import { useLocation } from '@docusaurus/router';
import './kits.css';

type Lang = 'en' | 'zh' | 'ja' | 'es' | 'pt';

type Props = {
  lang?: Lang;
};

const getLangFromPath = (pathname?: string): Lang => {
  const path = (pathname || '').toLowerCase();

  if (path === '/cn' || path.startsWith('/cn/')) return 'zh';
  if (path === '/ja' || path.startsWith('/ja/')) return 'ja';
  if (path === '/es' || path.startsWith('/es/')) return 'es';
  if (path === '/pt-br' || path.startsWith('/pt-br/')) return 'pt';

  return 'en';
};

const items = [
  {
    id: 1,
    name_en: "Skeleton Box for Raspberry Pi Compute Module Development Kit",
    name_cn: "树莓派计算模块开发套件骨架盒",
    name_ja: "Raspberry Pi Compute Module 開発キット用スケルトンボックス",
    name_es: "Caja esqueleto para el kit de desarrollo del módulo Compute de Raspberry Pi",
    name_pt: "Caixa esqueleto para o kit de desenvolvimento do módulo Compute do Raspberry Pi",
    description_en: "Constructed from military grade aluminum and hardwearing acrylic, this box is stackable in all three dimensions, allowing for limitless expansion possibilities",
    description_cn: "采用军用级铝材和耐用亚克力制成，这个盒子可在三个维度上堆叠，提供无限的扩展可能性",
    description_ja: "軍用グレードのアルミニウムと耐久性の高いアクリルで作られており、3次元すべてに積み重ね可能で、無限の拡張性を提供します。",
    description_es: "Construida con aluminio de grado militar y acrílico resistente, esta caja es apilable en las tres dimensiones, lo que permite posibilidades de expansión ilimitadas",
    description_pt: "Construída com alumínio de grau militar e acrílico resistente, esta caixa pode ser empilhada nas três dimensões, permitindo possibilidades ilimitadas de expansão",
    compatibleWith_en: "CM4",
    compatibleWith_cn: "CM4",
    compatibleWith_ja: "CM4",
    compatibleWith_es: "CM4",
    compatibleWith_pt: "CM4",
    image: "https://files.seeedstudio.com/wiki/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit/img/Pic_2100.bmp",
    wikiPage: "./Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit",
    purchasePage: "https://www.seeedstudio.com/Skeleton-Box-for-Raspberry-Pi-Compute-Module.html",
  },
  {
    id: 2,
    name_en: "Skeleton Box for Raspberry Pi",
    name_cn: "树莓派骨架盒",
    name_ja: "Raspberry Pi用スケルトンボックス",
    name_es: "Caja esqueleto para Raspberry Pi",
    name_pt: "Caixa esqueleto para Raspberry Pi",
    description_en: "Provides all the basic elements you need to collect and transfer data from all your LoRa nodes. Build your IOT prototype within minutes",
    description_cn: "提供保护和展示树莓派所需的基本元素。坚固耐用的设计，便于安装和使用",
    description_ja: "すべてのLoRaノードからデータを収集・転送するための基本要素を提供します。数分でIoTプロトタイプを構築可能。",
    description_es: "Proporciona los elementos básicos para proteger y exhibir tu Raspberry Pi. Diseño robusto y duradero, fácil de instalar y usar",
    description_pt: "Fornece os elementos básicos para proteger e exibir o seu Raspberry Pi. Design robusto e durável, fácil de instalar e usar",
    compatibleWith_en: "3B+,4B",
    compatibleWith_cn: "3B+,4B",
    compatibleWith_ja: "3B+,4B",
    compatibleWith_es: "3B+,4B",
    compatibleWith_pt: "3B+,4B",
    image: "https://files.seeedstudio.com/wiki/Skeleton_box_for_Rasberry_Pi/img/Pi_skeleton_02.jpg",
    wikiPage: "./Skeleton_box_for_Rasberry_Pi",
    purchasePage: "https://www.seeedstudio.com/Skeleton-box-for-Raspberry-Pi.html",
  },
  {
    id: 3,
    name_en: "Raspberry PI B+ Clear Case",
    name_cn: "树莓派B+透明外壳",
    name_ja: "Raspberry PI B+ クリアケース",
    name_es: "Carcasa transparente para Raspberry Pi B+",
    name_pt: "Case transparente para Raspberry Pi B+",
    description_en: "An easy to assemble clear acryllic case, made using a better-performing 4-piece design over the standard 6-piece",
    description_cn: "易于组装的透明亚克力外壳，采用性能更好的4片式设计，优于标准的6片式设计",
    description_ja: "標準的な6ピース設計に比べて組み立てやすく、性能向上した4ピースのクリアアクリルケースです。",
    description_es: "Carcasa de acrílico transparente fácil de montar, con un diseño de 4 piezas de mejor rendimiento que el estándar de 6 piezas",
    description_pt: "Case de acrílico transparente fácil de montar, com um design de 4 peças de melhor desempenho do que o padrão de 6 peças",
    compatibleWith_en: "3B+",
    compatibleWith_cn: "3B+",
    compatibleWith_ja: "3B+",
    compatibleWith_es: "3B+",
    compatibleWith_pt: "3B+",
    image: "https://files.seeedstudio.com/wiki/Raspberry_PI_Bplus_Case/img/IMG_9955b.jpg",
    wikiPage: "./Raspberry_PI_Bplus_Case",
    purchasePage: "https://www.seeedstudio.com/Raspberry-Pi-Model-B-2-Case.html?queryID=f4fedf9ea695b42efea237236cb2a0ab&objectID=1036&indexName=bazaar_retailer_products",
  },
];

const Value = ({ lang }: Props) => {
  const location = useLocation();
  const resolvedLang: Lang = lang ?? getLangFromPath(location.pathname);

  return (
    <div>
      <div className="rpi_item_container">
        {items.map((item) => (
          <div key={item.id} className='rpi_item_grid'>
            <div className="rpi_item_vertical">
              <span className='rpi_item_description'>
                <h2>
                  {resolvedLang === "zh" ? item.name_cn
                    : resolvedLang === "ja" ? item.name_ja
                    : resolvedLang === "es" ? item.name_es
                    : resolvedLang === "pt" ? item.name_pt
                    : item.name_en}
                </h2>
                <p>
                  {resolvedLang === "zh" ? item.description_cn
                    : resolvedLang === "ja" ? item.description_ja
                    : resolvedLang === "es" ? item.description_es
                    : resolvedLang === "pt" ? item.description_pt
                    : item.description_en}
                </p>
              </span>

              <span className='rpi_item_compatible'>
                <h3>
                  {resolvedLang === "zh" ? "兼容型号"
                    : resolvedLang === "ja" ? "対応機種"
                    : resolvedLang === "es" ? "Compatible con"
                    : resolvedLang === "pt" ? "Compatível com"
                    : "Compatible With"}
                </h3>
                <p>
                  {resolvedLang === "zh" ? item.compatibleWith_cn
                    : resolvedLang === "ja" ? item.compatibleWith_ja
                    : resolvedLang === "es" ? item.compatibleWith_es
                    : resolvedLang === "pt" ? item.compatibleWith_pt
                    : item.compatibleWith_en}
                </p>
              </span>
            </div>

            <img
              className={"rpi_item_pic " + (item.id % 2 ? 'reverse' : '')}
              src={item.image}
              alt={
                resolvedLang === "zh" ? item.name_cn
                  : resolvedLang === "ja" ? item.name_ja
                  : resolvedLang === "es" ? item.name_es
                  : resolvedLang === "pt" ? item.name_pt
                  : item.name_en
              }
            />

            <span className='grid_item_center pagelink'>
              <a href={item.purchasePage} target="_blank" rel="noopener noreferrer">
                {resolvedLang === "zh" ? "🖱️ 立即购买"
                  : resolvedLang === "ja" ? "🖱️ 今すぐ購入"
                  : resolvedLang === "es" ? "🖱️ Comprar ahora"
                  : resolvedLang === "pt" ? "🖱️ Comprar agora"
                  : "🖱️ Buy Now"}
              </a>
            </span>

            <span className='grid_item_center pagelink'>
              <a href={item.wikiPage} target="_blank" rel="noopener noreferrer">
                {resolvedLang === "zh" ? "📚 快速入门"
                  : resolvedLang === "ja" ? "📚 はじめに"
                  : resolvedLang === "es" ? "📚 Guía de inicio"
                  : resolvedLang === "pt" ? "📚 Guia de introdução"
                  : "📚 Getting Started"}
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Value;