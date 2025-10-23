---
description: reComputer J4012（J401キャリアボード）にJetPackをフラッシュする
title: reComputer J30/40の使用開始
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_J30_40_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
---

# reComputer J30/40の使用開始

<div class="video-container">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/-KAyUHzRxHc" title="Unboxing &amp; Plug in reComputer J4012 - Powered by NVIDIA Jetson Orin NX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## はじめに
Jetson Orinを搭載したreComputer J30/40は、最大100TOPSの最新AI性能をエッジに提供する強力でコンパクトなインテリジェントエッジボックスです。NVIDIA Ampere™ GPUアーキテクチャと64ビット動作機能を組み合わせています。

完全なシステムには、1つのNVIDIA Jetson Orin製品モジュール、ヒートシンク、および電源アダプターが含まれています。reComputer J30/40にはJetpack 5.1.1がプリインストールされており、開発を簡素化し、スマートシティ、セキュリティ、産業オートメーション、スマートファクトリーなどの業界で動画解析、物体検出、自然言語処理、医療画像、ロボティクスに取り組むエッジAIソリューションプロバイダーの展開に適しています。

電源アダプターなしのバージョンをお探しの場合は、[reComputer-Jetson](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html)をご確認ください。

## 特徴

- **製品向けの優れたAI性能：** 低消費電力・低遅延で最大100TOPS AI性能によるオンデバイス処理
- **手のひらサイズのエッジAIデバイス：** 130mm x120mm x 58.5mmのコンパクトサイズ、NVIDIA Jetson Orin製品モジュール、ヒートシンク、筐体、電源アダプターを含む。デスクトップ、壁掛け対応、どこにでも設置可能
- **豊富なI/Oによる拡張性：** 4x USB3.2、HDMI 2.1、2xCSI、GbE用1xRJ45、M.2 Key E、M.2 Key M、CANおよびGPIO
- **市場投入の加速：** 付属の128GB NVMe SSDにNVIDIA JetPack™ 5.1を含むJetpackがプリインストール、Linux OS BSP、128GB SSD、WiFi BTコンボモジュール、アンテナx2、Jetsonソフトウェアおよび主要なAIフレームワークとソフトウェアプラットフォームをサポート
- **包括的な認証：** FCC、CE、RoHS、UKCA

## 仕様

<table>
  <thead>
    <tr>
      <th>仕様</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html?queryID=e8d0ae9b2e338e8a860f07dacef58f6e&objectID=5631&indexName=bazaar_retailer_products">reComputer J3010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">reComputer J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html?queryID=5577f61da645361a7aad9179bc04efc2&objectID=5629&indexName=bazaar_retailer_products">reComputer J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html?queryID=639ef60cde4a38ccc9ff2f82070d4854&objectID=5628&indexName=bazaar_retailer_products">reComputer J4012</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>モジュール</td>
      <td>Jetson Orin Nano 4GB</td>
      <td>Jetson Orin Nano 8GB</td>
      <td>Jetson Orin NX 8GB</td>
      <td>Jetson Orin NX 16GB</td>
    </tr>
    <tr>
      <td>AI性能</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512コア NVIDIA Ampereアーキテクチャ GPU、16 Tensorコア搭載</td>
      <td>1024コア NVIDIA Ampereアーキテクチャ GPU、32 Tensorコア搭載</td>
      <td colspan='2' align='center'>1024コア NVIDIA Ampereアーキテクチャ GPU、32 Tensorコア搭載</td>
    </tr>
    <tr>
      <td>GPU最大周波数</td>
      <td colSpan='2' align='center'>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='2'>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU 1.5MB L2 + 4MB L3</td>
      <td>8コア Arm® Cortex®-A78AE v8.2 64ビット CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU最大周波数</td>
      <td colSpan='2' align='center'>1.5 GHz</td>
      <td colSpan='2' align='center'>2 GHz</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>4GB 64ビット LPDDR5<br />34 GB/s</td>
      <td>8GB 128ビット LPDDR5<br />68 GB/s</td>
      <td>8GB 128ビット LPDDR5 102.4GB/s</td>
      <td>16GB 128ビット LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>DLアクセラレータ</td>
      <td colSpan='2' align='center'>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>DLA最大周波数</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>614 MHz</td>
    </tr>
    <tr>
      <td>ビジョンアクセラレータ</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>1x PVA v2</td>
    </tr>
    <tr>
      <td>ストレージ</td>
      <td colSpan='4' align='center'>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>ビデオエンコーダ</td>
      <td colSpan='2' align='center'>1080p30 1-2 CPUコアでサポート</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>ビデオデコーダ</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan='2' align='center'>1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)<br />9x 1080p60 (H.265) | 18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan='4' align='center'>1* HDMI 2.1</td>
    </tr>
    <tr>
      <td>CSIカメラ</td>
      <td colSpan='4' align='center'>2* CSI （2レーン 15ピン）</td>
    </tr>
    <tr>
      <td>ネットワーク</td>
      <td colSpan='4' align='center'>1* ギガビットイーサネット (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='4' align='center'>4* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (デバイスモード)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan='4' align='center'>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan='4' align='center'>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan='4' align='center'>1* 4ピン ファンコネクタ(5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>多機能ポート</td>
      <td colSpan='4' align='center'>1* 40ピン拡張ヘッダー、1* 12ピン制御・UARTヘッダー</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='4' align='center'>RTC 2ピン、RTCソケット (CR1220対応、ただし付属せず)</td>
    </tr>
    <tr>
      <td>電源</td>
      <td colSpan='4' align='center'>9-19V</td>
    </tr>
    <tr>
      <td>電源供給</td>
      <td colSpan='4' align='center'>電源アダプタは付属しません</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td colSpan='4' align='center'>-10℃~60℃</td>
    </tr>
    <tr>
      <td>機械的寸法</td>
      <td colSpan='4' align='center'>130mm x120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## Flash JetPack

:::info
reComputer J30/40はJ401キャリアボードを搭載しています。
JetPackのフラッシュに関する詳細情報については、この[wikiページ](/ja/reComputer_J4012_Flash_Jetpack)を参照してください。
:::

## インターフェース使用方法

:::info
reComputer J30/40はJ401キャリアボードを搭載しています。
インターフェース使用方法に関する詳細情報については、この[wikiページ](/ja/J401_carrierboard_Hardware_Interfaces_Usage)を参照してください。
:::


## リソース
- [reComputer J30x データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 回路図](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3Dファイル](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetsonシリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetsonシリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetsonデバイス一覧](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetsonサンプル](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-for-Beginners](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
