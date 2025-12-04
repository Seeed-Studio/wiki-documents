---
description: この記事では、reComputer Mini（NVIDIA Jetson Orinプラットフォームベース）の入門ガイドを提供し、デバイスの仕様と初期セットアップおよび設定の手順を含みます。
title: reComputer Mini 入門ガイド
keywords:
  - reComputer
  - reComputer mini
  - embedded computer
  - robots
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /ja/recomputer_jetson_mini_getting_started
last_update:
  date: 12/11/2024
  author: Youjiang
---

# reComputer Mini 入門ガイド

<!-- change image -->

reComputer Miniは、NVIDIA Jetson Orin Nano/Orin NXモジュールを搭載した小型AIコンピュータで、最大100 TOPSのAI性能を提供します。底部にPCIeポートを装備し、豊富な拡張機能を提供し、柔軟にカスタマイズすることも可能です。システム全体は、ドローン、パトロールロボット、配送ロボットなどの自律機械への組み込み用に設計されています。54V DC入力を直接受け入れることができ、バッテリー駆動システムで広く使用できます。

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## 特徴

- **本格的なAI性能を実現：** NVIDIA Orin SoCによって構築され、NVIDIA Ampere™ GPUアーキテクチャと64ビット動作機能を組み合わせ、高度なマルチファンクションビデオおよび画像処理、NVIDIA Deep Learning Acceleratorsを統合し、低消費電力・低遅延で最大**100 TOPS**のAI性能を実現します。
- **手のひらサイズのエッジAIデバイス：** **63mmx95mmx42mm**のコンパクトサイズで、NVIDIA Jetson Orin NX 16GBモジュール、Mini J401キャリアボード、ファン、筐体を搭載。デスクトップおよび壁面取り付けに対応。
- **豊富なI/Oで拡張可能：** 最大7つのUSB、1つのDP 2.1、1つのGbE用RJ45、M.2 Key E、M.2 Key M、デュアルチャンネルCAN、拡張ボード付きGPIOを含みます。
- **市場投入の加速：** 128GB NVMe SSDに**JetPack 6.0**がプリインストールされ、Linux OS BSP、Jetsonソフトウェアおよび主要なAIフレームワークをサポート。
- **デプロイメントのスケール：** AllxonとBalenaによって提供されるOTA、リモート管理サービスをサポート。
- **柔軟なカスタマイズ：** reComputer Mini J4012オリジナル設計をベースに、アクセサリモジュールの変更、ロゴ、ハードウェアインターフェースの変更を含みます。

## 仕様

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin System on Module</th>
    </tr>
    <tr>
      <th>仕様</th>
      <th>reComputer Mini J3010</th>
      <th>reComputer Mini J3011</th>
      <th>reComputer Mini J4011</th>
      <th>reComputer Mini J4012</th>
    </tr>
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
      <td colSpan={3}>1024コア NVIDIA Ampereアーキテクチャ GPU、32 Tensorコア搭載</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU 1.5MB L2 + 4MB L3</td>
      <td>8コア Arm® Cortex®-A78AE v8.2 64ビット CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU最大周波数</td>
      <td colSpan={2}>1.5 GHz</td>
      <td colSpan={2}>2 GHz</td>
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
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>ビデオエンコーダ</td>
      <td colSpan={2}>1080p30 1-2 CPUコアでサポート</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>ビデオデコーダ</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>キャリアボード</th>
    </tr>
    <tr>
      <td>ストレージ</td>
      <td colSpan={4}>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>ネットワーク</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E WiFi/Bluetoothモジュール用</td>
    </tr>
    <tr>
      <td rowSpan={7}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>2x USB 3.2 Type-A (10Gbps)<br />1x USB 2.0 Micro-B (デバイスモード)<br />1x USB 3.0 Type-C (ホストモード)<br />1x USB 2.0 JST-5pin (ホストモード)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td colSpan={3}>1x UART; 1x UART デバッグ用</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan={3}>1x DP 2.1 (Type-Cコネクタに含まれる)</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan={3}>1x 4ピン ファンコネクタ (5V PWM)</td>
    </tr>
    <tr>
      <td>ボタン</td>
      <td colSpan={3}>1x リセットボタン; 1x リカバリボタン</td>
    </tr>
    <tr>
      <td>拡張ポート</td>
      <td colSpan={3}>2x 60ピン 高速コネクタ (拡張ボード用)<br />1x 10ピン 電源コネクタ (拡張ボード用)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2ピン</td>
    </tr>
    <tr>
      <td>電源</td>
      <td colSpan={4}>1x XT30コネクタ (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>拡張ボード</td>
    </tr>
    <tr>
      <td>ネットワーク</td>
      <td>イーサネット</td>
      <td colSpan={3}>1x RJ-45 ギガビットイーサネット (10/100/1000M)</td>
    </tr>
    <tr>
      <td rowSpan={5}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (5 Gbps)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1x CAN JST 4ピン (3.3V); 1x CAN (XT30 2+2) </td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan={3}>1x 4ピン ファンコネクタ (5V PWM)</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td colSpan={3}>2x I2C JST 4ピン (3.3V)</td>
    </tr>
    <tr>
      <td>SPI</td>
      <td colSpan={3}>1x I2S JST 6ピン (3.3V)</td>
    </tr>
    <tr>
      <td>電源</td>
      <td colSpan={4}>2x XT30 2+2コネクタ (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>その他</td>
    </tr>
    <tr>
      <td rowSpan={3}>機械的仕様</td>
      <td >寸法 (W x D x H)</td>
      <td colSpan={3}>63mm * 95mm * 42mm (拡張なし)<br />63mm * 95mm * 66.7mm (拡張あり)</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={3}>345g (拡張なし)<br />462g (拡張あり)</td>
    </tr>
    <tr>
      <td>設置</td>
      <td colSpan={3}>デスク、壁面取り付け</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td colSpan={4}>-10℃ ~ 50℃</td>
    </tr>
    <tr>
      <td>保証</td>
      <td colSpan={4}>1年</td>
    </tr>
  </tbody>
</table>
</div>

## ハードウェア概要

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/hardware_overview.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B1.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B2.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B3.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B4.png"/>  
</div>

## JetPack OSのフラッシュ

ここでは、reComputer Miniに接続されたNVMe SSDに[Jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-archive)をフラッシュする方法を説明します。

### サポートされているNvidia Jetsonモジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### 前提条件

- Ubuntuホストコンピュータ
- reComputer Mini J4012/ J4011/ J3010 または J3011
- USB Micro-B データ転送ケーブル

:::info

仮想マシンではなく、物理的なubuntuホストデバイスを使用することをお勧めします。
ホストマシンを準備するには、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPackバージョン </td>
        <td class="dbon" colspan="3"> Ubuntuバージョン (ホストコンピュータ) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Jetpackイメージの準備

ここでは、使用しているJetsonモジュールに対応するシステムイメージをUbuntu PCにダウンロードする必要があります：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpackバージョン</th>
      <th>Jetsonモジュール</th>
      <th>ダウンロードリンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDSbMzCkdgXTJsBIw2bFLCgAV5njnZV4i3Tqk62-Z9UZGE?e=9dWNfh" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>82ab9068c5e03081391d22dc5d7c4db<br />ac9041016c1dd7a7ec2475871a10fd543</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC6mf8MQDgwRIDZweH69G45AYoMudFTg8oc5CiEyGU9jg8?e=KrAaiV" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>5f016131a9ab6e90c3bd21850efe13b<br />479d72046aea4aa6d3bd2f3a04df5a7a2</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCqGvCStwmPRpVHo4yBNEJEAfiD6w_iCeRtB0IuXotrdK0?e=P5sImI" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>a2ea4d9ad06e66e2befab14484471cb<br />6984ccef396e59262c83c40ed7911bbb2</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQApozlc_COgSLacJfvEAe6vAXeBTLY6z8H5WOfGQMGiLU4?e=ePzheb" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>928a20a94320e901576cfd8679affc2<br />6caae9e9a30f3bc9497534f42ac4093cc</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcQFCfXEWVREuzwvvBX7vRsBlr9H6HQpTBzmDw0rigIt1Q?e=IzLuYu" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>7B4ABE1D1A8711D5D4E9B676DBB1E76<br />CDA35C614608CE7ECE112BC4A50E71C7C</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUpeLu1P7RJOv7-nqR7QbmABfmWR45xVUt95bMplpp25mQ?e=oiWB6b" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>3956B968F2BFB9FDF37D952E83DDB70<br />3980C813156919BC367CA5E23BBDEC89F</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbSLkBX0XpIrFjkT0vndGsBysfm51HvFkBFsRnfRaWBxA?e=t7vRcH" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>BF6921DF313B467254154BDA835C379<br />AD86D817E03D0301543B62F7CA0C9222F</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUB7YoQeCrVHnDjsrfFaL8EBxkjRrclpDxFwDB3dJpM3xQ?e=oYHLp7" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>8941C13204A8069CE70B109B6A13EA2<br />40CBB02F69B8D4028D465134B3744BC28</td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2</td>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVjuq6G9y_5OjIxMIHFiBj0BVckYdcRQBunaXMHFBLZ3tw?e=tY89se" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>A1C5F44B19B6C06E11AC38ABDA79AD6<br />CBFF2AAFBEEA7BF3A14B2FE08EA37267F</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcdaeIBdGRpCp0Dev5R3o1sB2Tr4HIwjgtp3d_XX7lE9Gg?e=bxteCW" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>23855098982DD1E05C025D3F078BCA0<br />2F396C1FB68DC58E539D83569A894571D</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6イメージファイルのサイズは約**16.7GB**で、ダウンロードには約60分かかります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの整合性を確認するには、SHA256ハッシュ値を比較できます。

Ubuntuホストマシンでターミナルを開き、`sha256sum <File>`コマンドを実行してダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

### 強制リカバリモードに入る

:::info
インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります。
:::

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/HEIXFkizP5Y" title="Enter Force Recovery Mode (reComputer Mini)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> ステップバイステップ </summary>

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini_rec.png" />
</div>

- **ステップ1.** USB2.0 DEVICEポートとubuntuホストPCの間にUSB Micro-Bケーブルを接続します。
- **ステップ2.** ピンを使ってRECOVERYホールに挿入し、リカバリボタンを押しながら保持します。
- **ステップ3.** 電源を接続します。
- **ステップ4.** リカバリボタンを離します。

</details>

LinuxホストPCでターミナルウィンドウを開き、`lsusb`コマンドを入力します。使用するJetson SoMに応じて、返される内容に以下の出力のいずれかがある場合、ボードは強制リカバリモードになっています。

- Orin NX 16GBの場合：0955:7323 NVidia Corp
- Orin NX 8GBの場合：0955:7423 NVidia Corp
- Orin Nano 8GBの場合：0955:7523 NVidia Corp
- Orin Nano 4GBの場合：0955:7623 NVidia Corp

以下の画像はOrin Nx 16GBの場合です：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/>
</div>

### 単一コマンドでJetsonにフラッシュ

<details>

<summary> 単一コマンドでデバイスをフラッシュします。 </summary>

reComputer Jetson J30/40 Miniは、Jetpack 6.0のフラッシュをサポートするワンクリックフラッシュスクリプトを開始しました。

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZFBzTlyOjhE?si=uNN-l5VVGbAyGnot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::caution
免責事項：ワンクリックフラッシュスクリプトは、jetpackフラッシュをより迅速にすることを目的としています。現在のバージョンはベータ版であり、多くの問題がある可能性があります。ご理解をお願いします。フラッシュの問題がある場合は、以下の`デバイスをステップバイステップでフラッシュ`に従い、[Discord Jetsonチャンネル](https://discord.com/channels/862602258452578314/930732339624026152)でフィードバックをお寄せください。近い将来、迅速に修正し、この機能を改善します。
:::

</details>

### Jetsonにステップバイステップでフラッシュ

**ステップ1：** ubuntuホストPCでダウンロードしたイメージファイルを展開します：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**ステップ2：** 以下のコマンドを実行してjetpackシステムをNVMe SSDにフラッシュします：

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドは2〜10分実行される場合があります。
:::

**ステップ3：** ボード上の**USB Type-C with DisplayPort**を使用してJ401をディスプレイに接続し、初期設定セットアップを完了します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
ニーズに応じて**システム設定**を完了してください。
:::

**ステップ4（オプション）：** Nvidia Jetpack SDKをインストール

Jetsonデバイスでターミナルを開き、以下のコマンドを実行してください：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## ハードウェアインターフェースの使用方法

:::info
ハードウェアインターフェースの詳細な仕様と使用方法について詳しく知りたい場合は、[このwiki](https://wiki.seeedstudio.com/ja/recomputer_jetson_mini_hardware_interfaces_usage/)を参照してください。
:::

## リソース

- [reComptuer Miniデータシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [reComptuer Mini回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [reComputer Mini 3Dファイル](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)
- [Seeed Jetsonシリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetsonシリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetsonデバイス一覧](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
