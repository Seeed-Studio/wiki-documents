---
description: reComputer J4012 (J401キャリアボード)にJetPackをフラッシュする
title: reComputer J1020v2の使い方
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_J1020v2_with_Jetson_getting_start
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer J1020v2の使い方

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110061441.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## はじめに
Jetson向けreComputerシリーズは、NVIDIAの高度なAI組み込みシステムを搭載したコンパクトなエッジコンピュータです。J10（Jetson Nano 4GB）およびJ20（Jetson [Xavier NX](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Module-p-4421.html?queryID=fa33abfaf6f67f95a4c01b60263d2793&objectID=4421&indexName=bazaar_retailer_products) 8GBおよびJetson Xavier 16GB）を含みます。豊富な拡張モジュール、産業用周辺機器、熱管理を備えたJetson向けreComputerは、人気のあるDNNモデルやMLフレームワークをエッジに展開し、高性能で推論を行うことで次世代AI製品の加速とスケールを支援します。

reComputer J1020 v2は、Jetson Nanoプロダクションモジュールを搭載した強力でコンパクトなインテリジェントエッジボックスで、最新のAI性能をエッジにもたらします。内蔵のJ202キャリアボードはJetson Nano開発キットと同じ寸法で、4xUSB 3、M.2 Key M、HDMI、DPを含みます。完全なシステムにはファンと電源アダプターも含まれています。

AI初心者の方で、重要なAIスキルを習得し、ディープラーニングに挑戦したい場合は、[NVIDIAのDeep Learning Institute (DLI)](https://www.nvidia.com/en-us/training/)が実践的なハンズオントレーニングと認定を提供しています。また、Jetson Nanoの使い方やさまざまなプロジェクトの構築を含むSeeedの[wiki](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Started_Guide/)ガイドもぜひご覧ください。

ソリューションプロバイダー向けに、reComputer J1020 v2はJetpack 4.6.1がプリインストールされており、豊富なI/Oを備えています。このAIボックスは開発を簡素化し、スマートシティ、セキュリティ、産業オートメーション、スマートファクトリーなどの業界で、ビデオ分析、物体検出、自然言語処理、医療画像処理、ロボティクスに取り組むエッジAIソリューションプロバイダーに適しています。

## 特徴

- **NVIDIA Jetson Nano Dev Kitの代替:** Jetson Nano 4GBプロダクションモジュールを搭載した手のひらサイズのエッジAIデバイス。キャリアボードは豊富なI/Oを提供します：GPIO、CSI、ギガビットイーサネット、4 x USB 3.0 Type A、オンボード16 GB eMMC。SSDストレージ拡張についてはこちらをご確認ください。
- **128 NVIDIA CUDA®コアが0.5 TFLOPs (FP16)** を提供し、画像分類、物体検出、セグメンテーション、音声処理などのアプリケーション向けにAIフレームワークとモデルを実行します。
- **NVIDIA Jetpackがプリインストール済み**, JetPack SDKにはボードサポートパッケージ（BSP）、Linux OS、NVIDIA CUDA、cuDNN、TensorRTソフトウェアライブラリが含まれており、ディープラーニング、コンピュータビジョン、GPUコンピューティング、マルチメディア処理などに対応します。
- **Jetsonソフトウェアスタック全体** [Jetsonソフトウェアスタック](https://developer.nvidia.com/embedded/develop/software)およびSeeed Edge AIパートナーが提供する高速で堅牢なAIアプリケーションを構築するためのさまざまな[開発者ツール](https://wiki.seeedstudio.com/ja/Jetson-AI-developer-tools/)をサポートします。

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
      <td colspan='2'>Jetson Nano 4GB（製品版）</td>
      <td>Nano（製品版ではない）</td>
    </tr>
    <tr>
      <td>ストレージ</td>
      <td colspan='2' align='center'>16 GB eMMC</td>
      <td>MicroSD（カードは含まれていません）</td>
    </tr>
    <tr>
      <td>SDカードスロット</td>
      <td>含まれる（キャリアボード上）</td>
      <td>-</td>
      <td>含まれる（モジュール上）</td>
    </tr>
    <tr>
      <td>ビデオエンコーダー</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30（H.265 & H.264）</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30（H.264/H.265）</td>
    </tr>
    <tr>
      <td>ビデオデコーダー</td>
      <td colspan='2'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60（H.265 & H.264）</td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30（H.264/H.265）</td>
    </tr>
    <tr>
      <td>ギガビットイーサネット</td>
      <td colspan='3' align='center'>1*RJ45 ギガビットイーサネットコネクタ（10/100/1000）</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 * USB 3.0 Type A; 
2 * USB 2.0 Type A;
1 * USB Type C（デバイスモード用）;
1 * USB Type C（5V電源入力用）</td>
      <td>4 * USB 3.0 Type-A；
1 * Micro-USBポート（デバイスモード用）</td>
      <td>4 * USB 3.0 Type-A; 
1 * Micro-USBポート（5V電源入力またはデバイスモード用）</td>
    </tr>
    <tr>
      <td>CSIカメラ接続</td>
      <td colspan='3' align='center'>2×CSIカメラ（15ピン、1mmピッチ、MIPI CSI-2）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1×HDMI Type A</td>
      <td colspan='2' align='center'>1×HDMI Type A; 1×DP</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colspan='3' align='center'>1×ファンコネクタ（5V PWM）</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1×M.2 Key E</td>
      <td>1×M.2 Key E（無効化）</td>
      <td>1×M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 KEY M</td>
      <td>-</td>
      <td>1×M.2 Key M</td>
      <td>-</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1×RTCソケット</td>
      <td>1×RTCソケット 1×RTC 2ピン</td>
      <td>-</td>
    </tr>
    <tr>
      <td>多機能ポート</td>
      <td colspan='3' align='center'>1×40ピンヘッダー</td>
    </tr>
    <tr>
      <td>電源供給</td>
      <td>USB-Type C 5V⎓3A</td>
      <td>9-12V 電源アダプタは含まれていません（バレルジャック 5.5/2.5mm）</td>
      <td>DCジャック 5V⎓4A；Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>機械的仕様</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm（ケース付き）</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## reComputer J1020v2 に JetPack をフラッシュする

:::info
J1020v2 は J202 キャリアボードを使用しているため、詳細についてはこの [wiki](/ja/reComputer_J2021_J202_Flash_Jetpack) ページを参照してください。
:::

## リソース
[reComputer J1020 v2 データシート](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1020-v2-datasheet.pdf)

[reComputer J102 (J202も含む) キャリアボード回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[reComputer J1010 3Dファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio エッジAI成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson デバイスワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)