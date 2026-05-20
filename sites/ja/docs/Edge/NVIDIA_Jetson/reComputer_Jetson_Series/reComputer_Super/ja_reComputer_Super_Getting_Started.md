---
description: reComputer Super 入門ガイド
title: reComputer Super を使い始める
keywords:
  - reComputer Super
  - reComputer Super 入門ガイド
  - Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /recomputer_jetson_super_getting_started
sku: E2025032601,114110314,114110312,114110313,114110311
last_update:
  date: 06/19/2025
  author: Yaohui
createdAt: '2025-03-26'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/recomputer_jetson_super_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# reComputer Super を使い始める

<div align="center">
  <img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png"/>  
</div>

reComputer Super シリーズは reComputer Classic を強化し、AI パフォーマンスを最大 1.7 倍、157 TOPS まで引き上げます。Jetson Orin Nano（11410311, 11410312）および Jetson Orin NX（11410313, 11410314）を搭載したモデルを備えています。
開発と量産の両方を想定して設計されており、M.2 Key E/M、デュアル RJ45 Ethernet、Mini-PCIe、4xUSB 3.2、HDMI 2.1、4xCSI、CAN など豊富なインターフェースを備えています。Jetpack 6.2 と Linux OS BSP をプリインストールしているため、すぐに市場投入が可能です。
また、NVIDIA、Hugging Face、ONNX、PyTorch、ROS2/1 など、幅広い LLM および Physical AI フレームワークをエッジでシームレスにサポートし、これらのマルチモーダル機能をロボティクスアプリケーションと統合することで、Physical AI 開発をさらに充実させます。

:::note
ロゴブランディング、パッケージング、ファームウェア書き込みのカスタマイズが可能です。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>今すぐカスタマイズ ➜</font></span></strong></a>
</div>

## 主な特長  

### 🚀 ​**パフォーマンス向上**  

- reComputer Classic 比で ​**1.7 倍の AI パフォーマンス向上**、​**157 TOPS** を実現  
- ​**Jetson Orin Nano**（モデル: 11410311, 11410312）および ​**Jetson Orin NX**（モデル: 11410313, 11410314）を搭載  

### 🔌 ​**豊富な接続性とインターフェース**  

- 拡張性のための ​**M.2 Key E/M** + ​**Mini-PCIe**  
- 高速ネットワーキング向け ​**デュアル RJ45 Ethernet** ポート  
- ​**4x USB 3.2**、​**HDMI 2.1**、​**4x CSI**（Camera Serial Interface）  
- 産業用 / ロボティクス用途向けの ​**CAN バス** 対応  

### 🛠️ ​**開発と量産にすぐ使える設計**  

- ​**Jetpack 6.2** と ​**Linux OS BSP** をプリインストールし、箱から出してすぐにデプロイ可能  
- 次のフレームワークとシームレスに連携したエッジ AI 統合：  
  - ​**NVIDIA**、​**Hugging Face**、​**ONNX**、​**PyTorch**  
  - ロボティクスアプリケーション向け ​**ROS2/1**  
- ​**マルチモーダル AI** および ​**Physical AI** 開発をサポート  

### 🤖 ​**エッジ AI & ロボティクス最適化**  

- エッジにおいて ​**LLM（大規模言語モデル）** の機能と ​**Physical AI** を統合  
- ロボティクス、産業オートメーション、リアルタイム AI 推論に最適  
- 事前構成済みソフトウェアスタックにより ​**市場投入までの時間** を短縮  

:::tip

### ⚠️ 電源とアクセサリに関するガイドライン  

#### 1. ​**電源アダプタ**  

- ​**Jetson Orin Nano**: 12V 5A（5525 バレルジャック）  
- ​**Jetson Orin NX**: 19V 4.74A（5525 バレルジャック）  
- 常に ​**純正アダプタ** を使用し、電源要件を満たしてください。  

#### 2. ​**AC 電源コード**  

- ​**地域仕様** のクローバーリーフ型電源コードを使用してください。  

#### 3. ​**アクセサリ**  

- 最適な性能と互換性のために、（カメラ、無線モジュールなど）​**公式に推奨されている** アクセサリのみを使用してください。

:::

## 仕様

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin Super System on Module</th>
    </tr>
    <tr>
      <th>Specifications</th>
      <th>reComputer Super J3010</th>
      <th>reComputer Super J3011</th>
      <th>reComputer Super J4011</th>
      <th>reComputer Super J4012</th>
    </tr>
    <tr>
      <td>Module</td>
      <td>NVIDIA Jetson Orin™ Nano 4GB</td>
      <td>NVIDIA Jetson Orin™ Nano 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 16GB</td>
    </tr>
    <tr>
      <td>AI Performance</td>
      <td>34 TOPS</td>
      <td>67 TOPS</td>
      <td>117 TOPS</td>
      <td>157 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>16 Tensor コアを備えた 512 コア NVIDIA Ampere アーキテクチャ GPU</td>
      <td colSpan={3}>32 Tensor コアを備えた 1024 コア NVIDIA Ampere アーキテクチャ GPU</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6 コア Arm® Cortex®-A78AE v8.2 64-bit CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6 コア Arm® Cortex®-A78AE v8.2 64-bit CPU 1.5MB L2 + 4MB L3</td>
      <td>8 コア Arm® Cortex®-A78AE v8.2 64-bit CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU Max Frequency</td>
      <td colSpan={2}>1.7 GHz（MAXN_SUPER）</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>Memory</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>DL Accelerator</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>Video Encoder</td>
      <td colSpan={2}>1～2 コアの CPU により 1080p30 をサポート</td>
      <td colSpan={2}>1x 4K60（H.265） | 3x 4K30（H.265）<br />6x 1080p60（H.265） | 12x 1080p30（H.265）</td>
    </tr>
    <tr>
      <td>Video Decoder</td>
      <td colSpan={2}>1x 4K60（H.265）<br />2x 4K30（H.265）<br />5x 1080p60（H.265）<br />11x 1080p30（H.265）</td>
      <td colSpan={2}>1x 8K30（H.265）<br />2x 4K60（H.265）<br />4x 4K30（H.265）<br />9x 1080p60（H.265）<br />18x 1080p30（H.265）</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td colSpan={5}>最大 4 台のカメラ<br />(バーチャルチャネル経由で 8 台)<br />8 レーン MIPI CSI-2<br />D-PHY 2.1（最大 20Gbps）</td>
    </tr>
    <tr>
      <td>Mechanical</td>
      <td colSpan={5}>69.6mm x 45mm<br />260 ピン SO-DIMM コネクタ</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Carrier Board</th>
    </tr>
    <tr>
      <td>Storage</td>
      <td colSpan={4}>1x M.2 KEY M PCIe（M.2 NVMe 2280 SSD 128G 付属）</td>
    </tr>
    <tr>
      <td rowSpan={3}>Networking</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>WiFi/Bluetooth モジュール用 1x M.2 Key E</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan={3}>LTE 4G モジュール用 1x mini-PCIe</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td colSpan={3}>2x RJ45 ギガビット Ethernet</td>
    </tr>
    <tr>
      <td rowSpan={11}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A（5Gbps）；<br />1x USB 2.0 Type-C（デバイスモード / デバッグ）；</td>
    </tr>
    <tr>
      <td>Camera</td>
      <td colSpan={3}>4x mipi CSI（2 レーン 15 ピン）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1 x CAN（4 ピンヘッダ）</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan={3}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>Fan</td>
      <td colSpan={3}>1x 4 ピンファンコネクタ（5V PWM）；<br />1x 4 ピンファンコネクタ（12V PWM）；</td>
    </tr>
    <tr>
      <td>Extension Port</td>
      <td colSpan={3}>1x 40 ピン拡張ヘッダ；<br />1x 12 ピン制御および UART ヘッダ；</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2 ピン；<br />1x RTC ソケット</td>
    </tr>
    <tr>
      <td>LED</td>
      <td colSpan={3}>2x LED（PWR および ACT）</td>
    </tr>
    <tr>
      <td>Pinhole Button</td>
      <td colSpan={3}>1x PWR；<br />1x RESET；</td>
    </tr>
    <tr>
      <td>DIP Switch</td>
      <td colSpan={3}>1x REC</td>
    </tr>
    <tr>
      <td>Antenna Hole</td>
      <td colSpan={3}>4x アンテナホール</td>
    </tr>
    <tr>
      <td>Power</td>
      <td colSpan={4}>12-19V 5525 バレル DC ジャック </td>
    </tr>
    <tr>
      <td>Jetpack Version</td>
      <td colSpan={4}>Jetpack 6.2 </td>
    </tr>
    <tr>
      <td>Mechanical Dimensions</td>
      <td colSpan={4}>130mm x 120mm x 66mm</td>
    </tr>
    <tr>
      <td>Installation</td>
      <td colSpan={4}>デスク、壁掛け</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td colSpan={4}>-10℃～60℃</td>
    </tr>
    <tr>
      <td>Warranty</td>
      <td colSpan={4}>2 年</td>
    </tr>
    <tr>
      <td>Certification</td>
      <td colSpan={4}>CE,FCC,RoHS,REACH,Telec, KC, 振動試験（GB/T 2423）</td>
    </tr>
  </tbody>
</table>
</div>

## JetPack OS をフラッシュする

### 対応モジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### 事前準備

- Ubuntu ホスト PC
- reComputer Super
- USB Type-C データ転送ケーブル

:::info

仮想マシンではなく、物理的な Ubuntu ホストデバイスを使用することを推奨します。
ホストマシンを準備する際は、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack Version </td>
        <td class="dbon" colspan="3"> Ubuntu Version (Host Computer) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
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

### Jetpack イメージを準備する

ここでは、使用している Jetson モジュールに対応するシステムイメージを Ubuntu PC にダウンロードする必要があります。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack Version</th>
      <th>Jetson Module</th>
      <th> GMSL </th>
      <th>Download Link1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC_1-Pv5_FDR4n5j9gQV5KQAZ_mvUQAiacz_5QTE0xdeQ8?e=LkQBPH">Download</a></td>
      <td>7a1f2085f50d77e5d86d3f01ccdc1255<br />c90a7c7d22a6ab7e4c4e3263e3148670</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCkqeSMa1GUQ57Y0K-pz0GtAYgobLanXDHP_d-rJIAzkcY?e=VqEnca">Download</a></td>
      <td>d26cbf4e16b9d5879e4b737754f65bb0<br />ea485b98760a1aa0657e07054efd8877</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAuSOue4x97QKJGLUkBabdzAamlCy6twJd68P69GlaTzws?e=hw82Sw">Download</a></td>
      <td>55a559dc6736650d45c2d787265c7e2c<br />36cd2d7f233ae58b00364aec7d82455c</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAdI1ka4kNkRb8wipNloxXOAUAyCwTYci47z_eLpjvh1iQ?e=9YQ5nm">Download</a></td>
      <td>51f816d57dedd6e2305acd0ae8e0ffdc<br />19aec7319e351b7a70489f7eab8d69c6</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6 イメージファイルのサイズは約 **14.1GB** で、ダウンロードには約 60 分かかります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの完全性を検証するには、SHA256 ハッシュ値を比較します。

Ubuntu ホストマシンでターミナルを開き、コマンド `sha256sum <File>` を実行して、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが wiki に記載されている SHA256 ハッシュと一致すれば、ダウンロードしたファームウェアが完全で破損していないことが確認できます。
:::

### 強制リカバリーモードに入る

:::info
インストール手順に進む前に、ボードが強制リカバリーモードになっていることを確認する必要があります。
:::

<details>

<summary> 手順 </summary>

**Step 1.** スイッチを RESET モードに切り替えます。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/flash.jpg"/>  
</div>

**Step 2.** 電源ケーブルを接続して reComputer Super の電源を入れます。

**Step 3.** USB Type-C データ転送ケーブルで Super を Ubuntu ホスト PC に接続します。

**Step 4.** Linux ホスト PC でターミナルウィンドウを開き、コマンド `lsusb` を入力します。使用している Jetson SoM に応じて、返された内容に次のいずれかの出力が含まれていれば、ボードは強制リカバリーモードになっています。

- Orin NX 16GB の場合: **0955:7323 NVidia Corp**
- Orin NX 8GB の場合: **0955:7423 NVidia Corp**
- Orin Nano 8GB の場合: **0955:7523 NVidia Corp**
- Orin Nano 4GB の場合: **0955:7623 NVidia Corp**

以下の画像は Orin Nano 8GB の例です

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Jetson へフラッシュする

**Step 1:** ダウンロードしたイメージファイルを解凍します：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-super-orin-nx-16g-j401-6.2-36.4.3-2026-02-05.tar.gz
```

**Step 2:** 次のコマンドを実行して、Jetpack システムを NVMe SSD にフラッシュします：

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュ処理が正常に完了すると、次のような出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には 2～10 分かかる場合があります。
:::

**Step 3:** HDMI ケーブルでモニターを接続し、reComputer Super システムの初期設定を完了します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
ニーズに応じて **System Configuration** を完了してください。
:::


## リソース

- [reComputer Robotics J401 キャリアボード データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
- [回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
- [3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
- [メカニカルドキュメント - reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
- [メカニカルドキュメント - reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)
- [Seeed Nvidia Jetson 導入事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson ワンページ資料](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
