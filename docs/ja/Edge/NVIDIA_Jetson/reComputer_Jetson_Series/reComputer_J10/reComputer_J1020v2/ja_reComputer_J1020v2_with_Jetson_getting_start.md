---
description: reComputer J4012（J401キャリアボード）にJetPackをフラッシュする
title: reComputer J1020v2の使用開始
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_J1020v2_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
---

# reComputer J1020v2の使用開始

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110061441.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## はじめに
Jetson用reComputerシリーズは、NVIDIAの先進的なAI組み込みシステムで構築されたコンパクトなエッジコンピュータです：J10（Jetson Nano 4GB）およびJ20（Jetson [Xavier NX](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Module-p-4421.html?queryID=fa33abfaf6f67f95a4c01b60263d2793&objectID=4421&indexName=bazaar_retailer_products) 8GBおよびJetson Xavier 16GB）。豊富な拡張モジュール、産業用周辺機器、熱管理により、Jetson用reComputerは、人気のDNNモデルとMLフレームワークをエッジに展開し、高性能で推論することで、次世代AI製品の加速とスケールを支援する準備が整っています。

reComputer J1020 v2は、Jetson Nano製品モジュールで構築された強力でコンパクトなインテリジェントエッジボックスで、モダンなAI性能をエッジにもたらします。内蔵のJ202キャリアボードは、Jetson Nano Developer Kitと同じ寸法で、4xUSB 3、M.2 Key M、HDMI、DPを含みます。完全なシステムには、ファンと電源アダプターも含まれています。

AI初心者の方で、重要なAIスキルを習得し、深層学習に取り組みたい場合は、[NVIDIAのDeep Learning Institute（DLI）](https://www.nvidia.com/en-us/training/)が実践的なハンズオントレーニングと認定を提供しています。また、Jetson Nanoの使用開始や様々なプロジェクトの構築を含むSeeedの[wiki](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Started_Guide/)ガイドもご確認ください。

ソリューションプロバイダーの場合、reComputer J1020 v2にはJetpack 4.6.1がプリインストールされており、豊富なI/Oセットにより、このAIボックスは開発を簡素化し、スマートシティ、セキュリティ、産業オートメーション、スマートファクトリーの業界で動画解析、物体検出、自然言語処理、医療画像、ロボティクスに取り組むエッジAIソリューションプロバイダーの展開に適しています。

## 特徴

- **NVIDIA Jetson Nano Dev Kitの代替品：** Jetson Nano 4GB製品モジュールで構築された手のひらサイズのエッジAIデバイス。キャリアボードは豊富なI/Oを提供：GPIO、CSI、ギガビットイーサネット、4 x USB 3.0 Type A、オンボード16 GB eMMC。SSDストレージ拡張についてはこちらをご確認ください。
- **128 NVIDIA CUDA®コアが0.5 TFLOPs（FP16）を提供**し、画像分類、物体検出、セグメンテーション、音声処理などのアプリケーション用のAIフレームワークとモデルを実行します。
- **NVIDIA JetPackがプリインストール**、JetPack SDKには、ボードサポートパッケージ（BSP）、Linux OS、NVIDIA CUDA、cuDNN、深層学習、コンピュータビジョン、GPU計算、マルチメディア処理などのためのTensorRTソフトウェアライブラリが含まれています。
- **完全な**[Jetsonソフトウェアスタック](https://developer.nvidia.com/embedded/develop/software)と、Seeed Edge AIパートナーが提供する高速で堅牢なAIアプリケーション構築のための様々な[開発者ツール](https://wiki.seeedstudio.com/ja/Jetson-AI-developer-tools/)をサポート。

## 仕様

<table>
  <thead>
    <tr>
      <th>仕様</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html">reComputer J1020v2</a></th>
      <th><a href="https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html">NVIDIA Jetson Nano Developer Kit-B01</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>モジュール</td>
      <td colspan='2'>Jetson Nano 4GB（量産版）</td>
      <td>Nano（量産版ではない）</td>
    </tr>
    <tr>
      <td>ストレージ</td>
      <td colspan='2' align='center'>16 GB eMMC</td>
      <td>MicroSD（カードは含まれません）</td>
    </tr>
    <tr>
      <td>SDカードスロット</td>
      <td>含まれる（キャリアボード上）</td>
      <td>-</td>
      <td>含まれる（モジュール上）</td>
    </tr>
    <tr>
      <td>ビデオエンコーダー</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>ビデオデコーダー</td>
      <td colspan='2'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)</td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>ギガビットイーサネット</td>
      <td colspan='3' align='center'>1\*RJ45 ギガビットイーサネットコネクタ (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 \* USB 3.0 Type A;
2 \* USB 2.0 Type A;
1 \* USB Type C（デバイスモード用）;
1 \* USB Type C（5V電源入力用）</td>
      <td>4 \* USB 3.0 Type-A ；
1 \* Micro-USBポート（デバイスモード用）;</td>
      <td>4 \* USB 3.0 Type-A;
1 \* Micro-USBポート（5V電源入力またはデバイスモード用）</td>
    </tr>
    <tr>
      <td>CSI カメラ接続</td>
      <td colspan='3' align='center'>2\*CSI カメラ (15 pos, 1mm pitch, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1\*HDMI Type A</td>
      <td colspan='2' align='center'>1\*HDMI Type A; 1\*DP</td>
    </tr>
    <tr>
      <td>FAN</td>
      <td colspan='3' align='center'>1\* FANコネクタ (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1\*M.2 Key E</td>
      <td>1\*M.2 Key E（無効）</td>
      <td>1\*M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 KEY M</td>
      <td>-</td>
      <td>1\*M.2 Key M</td>
      <td>-</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1\*RTCソケット</td>
      <td>1\*RTCソケット 1\*RTC 2-pin</td>
      <td>-</td>
    </tr>
    <tr>
      <td>多機能ポート</td>
      <td colspan='3' align='center'>1\* 40-Pinヘッダー</td>
    </tr>
    <tr>
      <td>電源供給</td>
      <td>USB-Type C 5V⎓3A</td>
      <td>9-12V 電源アダプター（別売）(Barrel Jack 5.5/2.5mm)</td>
      <td>DC Jack 5V⎓4A；Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>機械的仕様</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm（ケース付き）</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## reComputer J1020v2 に Flash JetPack

:::info
J1020v2 は J202 キャリアボードを使用しているため、詳細については[こちらのwiki](/ja/reComputer_J2021_J202_Flash_Jetpack)ページを参照してください。
:::

## リソース
[reComputer J1020 v2 データシート](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1020-v2-datasheet.pdf)

[reComptuer J102 (J202も含む) キャリアボード回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J1010 3Dファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetsonシリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio Edge AI 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetsonシリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetsonデバイス一覧](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

