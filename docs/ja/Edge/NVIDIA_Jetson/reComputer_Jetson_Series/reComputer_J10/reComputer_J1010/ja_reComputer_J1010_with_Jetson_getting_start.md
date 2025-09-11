---
description: reComputer J4012（J401キャリアボード）にJetPackをフラッシュする
title: reComputer J1010の使い方
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_J1010_with_Jetson_getting_start
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer J1010の使い方

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061362-recomputer-j1010-first.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## はじめに
reComputer J1010は、NVIDIA Jetson Nano 4GBプロダクションモジュールを搭載したコンパクトなエッジコンピュータで、128のNVIDIA CUDA®コアにより0.5 TFLOPs（FP16）の性能を発揮し、画像分類、物体検出、音声処理などのAIフレームワークやアプリケーションを実行できます。このプロダクションモジュールは16GB eMMC、長期保証、そして生産環境での5～10年の運用寿命を提供します（[Jetson FAQ](https://developer.nvidia.com/embedded/faq)）。また、より複雑なAIワークロードに対応するために21 TOPSのAI性能を発揮するJetson Xavier NXモジュールを搭載したreComputer [J20シリーズ](https://www.seeedstudio.com/reComputer-J2021-p-5438.html?queryID=14111cbf2ca4f2951fd8a4c1762eb435&objectID=5438&indexName=bazaar_retailer_products)もご用意しています。

Jetsonモジュールに加えて、reComputer J1010には、オンボードmicroSDカードスロット、1×USB 3.0、2×USB2.0、HDMI、WiFi、LTE、Bluetooth用のM.2 Key E、RTC、Raspberry Pi GPIO 40ピンなどを備えた[J101キャリアボード](https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html)、ヒートシンク、アルミケースが含まれています。デバイスにはJetpack 4.6.1がプリインストールされており、USB C 5V/3A電源、キーボード、マウス、イーサネットケーブルを接続するだけで、組み込みAIの旅を始める準備が整います！より多くのUSB 3.0ポートやSSD接続用のオンボードM.2 Key Mが必要な場合は、reComputer J1020を選択できます。

注意：16GB eMMCではストレージが不足するというお客様からの問い合わせを受け、2022年7月30日以降の注文分には、[キャリアボード](https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html)にmicroSDカードスロットを追加しました。microSDカードへのブートイメージの書き込みやI/O速度の調整については、[ガイド](https://wiki.seeedstudio.com/ja/J1010_Boot_From_SD_Card/#flashing-system-from-j101-to-sd-card)をご確認ください。

## 特徴

- **手のひらサイズのエッジAIフルシステム：** 0.5 TFLOPs（FP16）の最新AI性能を提供し、組み込み開発向けの豊富なインターフェースを搭載。
- **開発と展開に対応：** NVIDIA JetPackがプリインストールされており、[Jetsonソフトウェアスタック](https://developer.nvidia.com/embedded/develop/software)全体と業界をリードする[AI開発ツール](https://wiki.seeedstudio.com/ja/Jetson-AI-developer-tools/)をサポート。物流、小売、サービス、農業、スマートシティ、ヘルスケア、ライフサイエンスなどの堅牢なAIアプリケーション構築に最適。
- **省電力：** Type C 5V/3Aで駆動し、消費電力はわずか5ワット。
- **拡張性：** オンボードインターフェースとreComputerケースを使用して、背面の取り付け穴で壁に取り付け可能。

## 仕様

<table>
  <thead>
    <tr>
      <th>仕様</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></th>
      <th><a href="https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html">NVIDIA Jetson Nano Developer Kit-B01</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>モジュール</td>
      <td colspan='2'>Jetson Nano 4GB (製品版)</td>
      <td>Nano (製品版ではない)</td>
    </tr>
    <tr>
      <td>ストレージ</td>
      <td colspan='2' align='center'>16 GB eMMC</td>
      <td>MicroSD (カードは含まれていません)</td>
    </tr>
    <tr>
      <td>SDカードスロット</td>
      <td>含まれる (キャリアボード上)</td>
      <td>-</td>
      <td>含まれる (モジュール上)</td>
    </tr>
    <tr>
      <td>ビデオエンコーダ</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>ビデオデコーダ</td>
      <td colspan='2' align='center'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)</td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>ギガビットイーサネット</td>
      <td colspan='3' align='center'>1*RJ45 ギガビットイーサネットコネクタ (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 × USB 3.0 Type A;
2 × USB 2.0 Type A;
1 × USB Type C (デバイスモード用);
1 × USB Type C (5V電源入力用)</td>
      <td>4 × USB 3.0 Type-A ；
1 × Micro-USBポート (デバイスモード用);</td>
      <td>4 × USB 3.0 Type-A;
1 × Micro-USBポート (5V電源入力用またはデバイスモード用)</td>
    </tr>
    <tr>
      <td>CSIカメラ接続</td>
      <td colspan='3' align='center'>2×CSIカメラ (15ピン, 1mmピッチ, MIPI CSI-2)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1×HDMI Type A</td>
      <td colspan='2' align='center'>1×HDMI Type A; 1×DP</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td>1× ファンコネクタ (5V PWM)</td>
      <td colspan='2' align='center'>1× ファン (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1×M.2 Key E</td>
      <td>1×M.2 Key E (無効化)</td>
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
      <td colspan='2'>RTCソケット (予約済み)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>多機能ポート</td>
      <td colspan='3' align='center'>1× 40ピンヘッダー</td>
    </tr>
    <tr>
      <td>電源供給</td>
      <td>USB-Type C 5V⎓3A</td>
      <td>DCジャック 12V/2A</td>
      <td>DCジャック 5V⎓4A；Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>機械的仕様</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm (ケース付き)</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## reComputer J1010にJetPackをフラッシュする

:::info
J1010はJ101キャリアボードを使用しているため、詳細についてはこの[wiki](/ja/reComputer_J1010_J101_Flash_Jetpack)ページを参照してください。
:::

## リソース
[reComputer J1010 データシート](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1010-datasheet.pdf)

[reComputer J101 キャリアボード回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J101_V2.0_SCH_240822.pdf)

[reComputer J1010 3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/J1010-Jetson-Nano.stp)

[Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Seeed Studio エッジAI成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Seeed Jetson デバイスワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)