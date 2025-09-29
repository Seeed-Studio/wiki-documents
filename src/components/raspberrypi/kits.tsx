import React from 'react';
import './kits.css';

const items = [
  {
    id: 1,
    name_en: "Grove Base Kit for Raspberry Pi",
    name_cn: "树莓派Grove基础套件",
    name_ja: "Raspberry Pi用Groveベースキット",
    name_es: "Kit base Grove para Raspberry Pi",
    description_en: "Seeed Grove starter kit contains one Grove Base Hat(for Raspberry Pi ) and 10 Grove modules",
    description_cn: "Seeed Grove入门套件包含一个Grove基础扩展板（适用于树莓派）和10个Grove模块",
    description_ja: "Seeed Groveスターターキットは、Raspberry Pi用のGroveベースハット1台と10個のGroveモジュールを含みます",
    description_es: "El kit inicial Grove de Seeed incluye un Grove Base Hat (para Raspberry Pi) y 10 módulos Grove",
    compatibleWith_en: "3B+,4B,Zero,Zero W/H",
    compatibleWith_cn: "3B+,4B,Zero,Zero W/H",
    compatibleWith_ja: "3B+,4B,Zero,Zero W/H",
    compatibleWith_es: "3B+,4B,Zero,Zero W/H",
    image: "https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/groveSystem.png",
    wikiPage: "./Grove_Base_Kit_for_Raspberry_Pi",
    purchasePage: "https://www.seeedstudio.com/Grove-Base-Kit-for-Raspberry-Pi-p-2945.html"
  },
  {
    id: 2,
    name_en: "LoRa/LoRaWAN Gateway Kit",
    name_cn: "LoRa/LoRaWAN网关套件",
    name_ja: "LoRa/LoRaWANゲートウェイキット",
    name_es: "Kit de pasarela LoRa/LoRaWAN",
    description_en: "Provides all the basic elements you need to collect and transfer data from all your LoRa nodes. Build your IOT prototype within minutes",
    description_cn: "提供从所有LoRa节点收集和传输数据所需的所有基本元素。几分钟内构建您的物联网原型",
    description_ja: "すべてのLoRaノードからデータを収集・転送するための基本要素を提供。数分でIoTプロトタイプを構築可能",
    description_es: "Proporciona todos los elementos básicos que necesitas para recopilar y transferir datos de todos tus nodos LoRa. Crea tu prototipo IoT en minutos",
    compatibleWith_en: "3B+,4B,Zero,Zero W/H",
    compatibleWith_cn: "3B+,4B,Zero,Zero W/H",
    compatibleWith_ja: "3B+,4B,Zero,Zero W/H",
    compatibleWith_es: "3B+,4B,Zero,Zero W/H",
    image: "https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/loragate_hardware.png",
    wikiPage: "./LoRa_LoRaWan_Gateway_Kit",
    purchasePage: "https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3.html"
  },
  {
    id: 3,
    name_en: "Grove Starter Kit for Microsoft IoT",
    name_cn: "Microsoft IoT Grove入门套件",
    name_ja: "Microsoft IoT用Groveスターターキット",
    name_es: "Kit de inicio Grove para Microsoft IoT",
    description_en: "Seeed and Microsoft have worked together to alleviate some of the challenges in complex setup using Windows 10 IoT Core and Grove modules",
    description_cn: "Seeed和微软合作，减轻了使用Windows 10 IoT Core和Grove模块进行复杂设置时的一些挑战",
    description_ja: "SeeedとMicrosoftが協力し、Windows 10 IoT CoreとGroveモジュールを使用した複雑なセットアップの課題を軽減",
    description_es: "Seeed y Microsoft han colaborado para aliviar algunos de los desafíos de la configuración compleja con Windows 10 IoT Core y módulos Grove",
    compatibleWith_en: "3B+,4B,Zero,Zero W/H",
    compatibleWith_cn: "3B+,4B,Zero,Zero W/H",
    compatibleWith_ja: "3B+,4B,Zero,Zero W/H",
    compatibleWith_es: "3B+,4B,Zero,Zero W/H",
    image: "https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/cover.jpg",
    wikiPage: "./Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi",
    purchasePage: "https://www.seeedstudio.com/Grove-Starter-Kit-for-IoT-based-on-Raspberry-Pi.html"
  },
];

const Value = ({ lang = "en" }) => {
  return (
    <div>
      <div className="rpi_item_container">
        {items.map((item) => (
          <div key={item.id} className='rpi_item_grid'>
            <div className="rpi_item_vertical">
              <span className='rpi_item_description'>
                <h2>
                  {lang === "zh" ? item.name_cn
                    : lang === "ja" ? item.name_ja
                    : lang === "es" ? item.name_es
                    : item.name_en}
                </h2>
                <p>
                  {lang === "zh" ? item.description_cn
                    : lang === "ja" ? item.description_ja
                    : lang === "es" ? item.description_es
                    : item.description_en}
                </p>
              </span>
              <span className='rpi_item_compatible'>
                <h3>
                  {lang === "zh" ? "兼容型号"
                    : lang === "ja" ? "対応機種"
                    : lang === "es" ? "Compatible con"
                    : "Compatible With"}
                </h3>
                <p>
                  {lang === "zh" ? item.compatibleWith_cn
                    : lang === "ja" ? item.compatibleWith_ja
                    : lang === "es" ? item.compatibleWith_es
                    : item.compatibleWith_en}
                </p>
              </span>
            </div>

            <img
              className={"rpi_item_pic " + (item.id % 2 ? 'reverse' : '')}
              src={item.image}
              alt={
                lang === "zh" ? item.name_cn
                  : lang === "ja" ? item.name_ja
                  : lang === "es" ? item.name_es
                  : item.name_en
              }
            />

            <span className='grid_item_center pagelink'>
              <a href={item.purchasePage} target="_blank" rel="noopener noreferrer">
                {lang === "zh" ? "🖱️ 立即购买"
                  : lang === "ja" ? "🖱️ 今すぐ購入"
                  : lang === "es" ? "🖱️ Comprar ahora"
                  : "🖱️ Buy Now"}
              </a>
            </span>

            <span className='grid_item_center pagelink'>
              <a href={item.wikiPage} target="_blank" rel="noopener noreferrer">
                {lang === "zh" ? "📚 快速入门"
                  : lang === "ja" ? "📚 はじめに"
                  : lang === "es" ? "📚 Guía de inicio"
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
