import React from 'react';
import './hats.css'

const hats = [
    {
        id: 1,
        name_en: "Grove Base Hat for Raspberry Pi",
        name_cn: "树莓派Grove基础扩展板",
        name_ja: "Raspberry Pi用Groveベースハット",
        description_en: "Add-on board that provides an array of Digital/Analog/I2C/PWM/UART ports to meet all your needs",
        description_cn: "提供数字/模拟/I2C/PWM/UART端口阵列的扩展板，满足您的所有需求",
        description_ja: "あらゆるニーズに対応したデジタル/アナログ/I2C/PWM/UARTポートを備えた拡張ボード",
        compatibleWith_en: "3B+, 4B",
        compatibleWith_cn: "3B+, 4B",
        compatibleWith_ja: "3B+, 4B",
        image: "https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg",
        wikiPage: "./Grove_Base_Hat_for_Raspberry_Pi",
        purchasePage: "https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"
    },
    {
        id: 2,
        name_en: "Grove Base Hat for Raspberry Pi Zero",
        name_cn: "树莓派Zero Grove基础扩展板",
        name_ja: "Raspberry Pi Zero用Groveベースハット",
        description_en: "Add-on board that provides an array of Digital/Analog/I2C/PWM/UART ports to meet all your needs in the pHat form factor of the RPi Zero family",
        description_cn: "适用于树莓派Zero系列pHat尺寸的扩展板，提供多种端口满足您的需求",
        description_ja: "RPi ZeroシリーズのpHatフォームファクターで、多様なポートを備えた拡張ボード",
        compatibleWith_en: "Zero, Zero W/WH",
        compatibleWith_cn: "Zero, Zero W/WH",
        compatibleWith_ja: "Zero, Zero W/WH",
        image: "https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/main.jpg",
        wikiPage: "./Grove_Base_Hat_for_Raspberry_Pi_Zero",
        purchasePage: "https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html"
    },
    {
        id: 3,
        name_en: "WM1302 Raspberry Pi Hat",
        name_cn: "WM1302 树莓派扩展板",
        name_ja: "WM1302 Raspberry Piハット",
        description_en: "Add-on board for connecting the WM1302 LoRaWAN module, based on LoRa Concentrator Semtech SX1302",
        description_cn: "基于LoRa集中器Semtech SX1302的WM1302 LoRaWAN模块连接扩展板",
        description_ja: "LoRa Concentrator Semtech SX1302をベースにしたWM1302 LoRaWANモジュール接続用拡張ボード",
        compatibleWith_en: "3B+, 4B, Zero, Zero W/WH",
        compatibleWith_cn: "3B+, 4B, Zero, Zero W/WH",
        compatibleWith_ja: "3B+, 4B, Zero, Zero W/WH",
        image: "https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png",
        wikiPage: "./WM1302_Pi_HAT",
        purchasePage: "https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html"
    },
    {
        id: 4,
        name_en: "LTE Cat 1 Pi HAT",
        name_cn: "LTE Cat 1 树莓派扩展板",
        name_ja: "LTE Cat 1 Pi HAT",
        description_en: "Open-source cellular extension modem for Raspberry Pi, based on u-blox LARA-R2xx series",
        description_cn: "基于u-blox LARA-R2xx系列的树莓派开源蜂窝扩展调制解调器",
        description_ja: "u-blox LARA-R2xxシリーズをベースにしたRaspberry Pi用オープンソースセルラー拡張モデム",
        compatibleWith_en: "3B+, 4B, Zero, Zero W/WH",
        compatibleWith_cn: "3B+, 4B, Zero, Zero W/WH",
        compatibleWith_ja: "3B+, 4B, Zero, Zero W/WH",
        image: "https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG",
        wikiPage: "./LTE_Cat_1_Pi_HAT",
        purchasePage: "https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-USA-AT--p-3056.html"
    },
    {
        id: 5,
        name_en: "ReSpeaker 2-Mics Pi HAT",
        name_cn: "ReSpeaker 2麦克风树莓派扩展板",
        name_ja: "ReSpeaker 2マイク Pi HAT",
        description_en: "Dual-microphone expansion board for Raspberry Pi designed for AI and voice applications.",
        description_cn: "专为AI和语音应用设计的树莓派双麦克风扩展板。",
        description_ja: "AIと音声アプリ向けに設計されたRaspberry Pi用2マイク拡張ボード",
        compatibleWith_en: "3B+, 4B, Zero, Zero W/WH",
        compatibleWith_cn: "3B+, 4B, Zero, Zero W/WH",
        compatibleWith_ja: "3B+, 4B, Zero, Zero W/WH",
        image: "https://files.seeedstudio.com/products/107100001/01.png",
        wikiPage: "./ReSpeaker_2_Mics_Pi_HAT",
        purchasePage: "https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html"
    },
    {
        id: 6,
        name_en: "ReSpeaker 4-Mics Pi HAT",
        name_cn: "ReSpeaker 4麦克风树莓派扩展板",
        name_ja: "ReSpeaker 4マイク Pi HAT",
        description_en: "Quad-microphone expansion board for Raspberry Pi designed for more powerful AI and voice applications.",
        description_cn: "专为更强大的AI和语音应用设计的树莓派四麦克风扩展板。",
        description_ja: "より強力なAIと音声アプリ向けの4マイク拡張ボード",
        compatibleWith_en: "3B+, 4B",
        compatibleWith_cn: "3B+, 4B",
        compatibleWith_ja: "3B+, 4B",
        image: "https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg",
        wikiPage: "./ReSpeaker_4_Mic_Array_for_Raspberry_Pi",
        purchasePage: "https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html"
    }
];

const Value = ({ lang = "en" }) => {
  const isZH = lang === "zh" || lang === "cn";
  const isJA = lang === "ja";
  const isES = lang === "es";

  const tCompatibleWith = isZH ? "兼容型号" : isJA ? "対応機種" : isES ? "Compatible con" : "Compatible With";
  const tBuyNow        = isZH ? "🖱️ 立即购买" : isJA ? "🖱️ 今すぐ購入" : isES ? "🖱️ Comprar ahora" : "🖱️ Buy Now";
  const tGettingStarted= isZH ? "📚 快速入门" : isJA ? "📚 はじめに" : isES ? "📚 Guía de inicio" : "📚 Getting Started";

  return (
    <div>
      <div className="rpi_hat_container">
        {hats.map((hat) => {
          const name =
            isZH ? hat.name_cn : isJA ? hat.name_ja : hat.name_en;
          const description =
            isZH ? hat.description_cn : isJA ? hat.description_ja : hat.description_en; // es 无数据字段时回退 en
          const compatibleWith =
            isZH ? hat.compatibleWith_cn : isJA ? hat.compatibleWith_ja : hat.compatibleWith_en; // es 回退 en

          return (
            <div key={hat.id} className="rpi_hat_grid">
              <div className="rpi_hat_vertical">
                <span className='rpi_hat_description'>
                  <h2>{name}</h2>
                  <p>{description}</p>
                </span>
                <span className='rpi_hat_compatible'>
                  <h3>{tCompatibleWith}</h3>
                  <p>{compatibleWith}</p>
                </span>
              </div>

              <img
                className={"rpi_hat_pic " + (hat.id % 2 ? "reverse" : "")}
                src={hat.image}
                alt={name}
              />

              <span className='rpi_hat_purchase pagelink'>
                <a href={hat.purchasePage} target="_blank" rel="noopener noreferrer">
                  {tBuyNow}
                </a>
              </span>

              <span className='rpi_hat_wikilink pagelink'>
                <a href={hat.wikiPage} target="_blank" rel="noopener noreferrer">
                  {tGettingStarted}
                </a>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Value;
