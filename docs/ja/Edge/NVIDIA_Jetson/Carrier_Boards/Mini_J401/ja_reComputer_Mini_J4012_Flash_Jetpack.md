---
description: この記事では、J401-MiniキャリアボードにJetPack 6.0をフラッシュする方法を説明します。デバイスの概要、準備、Force Recoveryモードへの移行、フラッシュ用のワンクリックスクリプトの使用について取り上げ、NVIDIA Jetson Orinデバイスを迅速に展開する方法をユーザーに提供します。
title: Jetpackをフラッシュする
keywords:
- reComputer Mini
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/recomputer-mini-1.webp
slug: /ja/recomputer_mini_j401_getting_started
last_update:
  date: 05/15/2025
  author: Dayu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# J401-MiniキャリアボードにJetPackをフラッシュする

reComputer Miniは、NVIDIA Jetson Orin Nano/Orin NXモジュールによって駆動される小型AIコンピュータで、最大100 TOPSのAI性能を提供します。底部にPCIeポートを備え、豊富な拡張性を提供し、柔軟にカスタマイズ可能です。このシステム全体は、ドローン、巡回ロボット、配送ロボットなどの自律型機械に組み込むために設計されています。54V DC入力を直接受け入れることができ、バッテリー駆動システムで広く使用可能です。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/recomputer-mini-1.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

<!-- 購入リンク -->

## 特徴

- **生産向けの優れたAI性能:** NVIDIA Orin SoCにより、低消費電力と低遅延で最大**100 TOPS**のAI性能を実現。NVIDIA Ampere™ GPUアーキテクチャ、64ビット動作能力、統合された高度なマルチ機能ビデオおよび画像処理、NVIDIA Deep Learning Acceleratorsを組み合わせています。
- **手のひらサイズのエッジAIデバイス:** コンパクトなサイズ（**63mmx95mmx42mm**）で、NVIDIA Jetson Orin NX 16GBモジュール、Mini J401キャリアボード、ファン、エンクロージャを搭載。デスクトップおよび壁掛けに対応。
- **豊富なI/Oによる拡張性:** 最大7つのUSB、1つのDP 2.1、2つのCSI、1つのGbE用RJ45、M.2 Key E、M.2 Key M、デュアルチャンネルCAN、GPIOを拡張ボードでサポート。
- **市場投入を加速:** **JetPack 6.0**を128GB NVMe SSDにプリインストール。Linux OS BSPを搭載し、Jetsonソフトウェアおよび主要なAIフレームワークをサポート。
- **展開のスケール:** OTA、AllxonおよびBalenaによるリモート管理サービスをサポート。
- **柔軟なカスタマイズ:** reComputer Mini J4012のオリジナル設計に基づき、アクセサリーモジュール、ロゴ、ハードウェアインターフェースの変更を含むカスタマイズが可能。

## 仕様

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orinシステムオンモジュール</th>
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
      <td>512コアNVIDIA AmpereアーキテクチャGPU（16 Tensorコア）</td>
      <td colSpan={3}>1024コアNVIDIA AmpereアーキテクチャGPU（32 Tensorコア）</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6コアArm® Cortex®-A78AE v8.2 64ビットCPU<br />1.5MB L2 + 4MB L3</td>
      <td>6コアArm® Cortex®-A78AE v8.2 64ビットCPU 1.5MB L2 + 4MB L3</td>
      <td>8コアArm® Cortex®-A78AE v8.2 64ビットCPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU最大周波数</td>
      <td colSpan={2}>1.5 GHz</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>4GB 64ビットLPDDR5<br />34 GB/s</td>
      <td>8GB 128ビットLPDDR5<br />68 GB/s</td>
      <td>8GB 128ビットLPDDR5 102.4GB/s</td>
      <td>16GB 128ビットLPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>DLアクセラレータ</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>ビデオエンコーダ</td>
      <td colSpan={2}>1080p30（1-2 CPUコアでサポート）</td>
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
      <td>ネットワーキング</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E（WiFi/Bluetoothモジュール用）</td>
    </tr>
    <tr>
      <td rowSpan={7}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>2x USB 3.2 Type-A (10Gbps)<br />1x USB 2.0 Micro-B（デバイスモード）<br />1x USB 2.0 Type-C（ホストモード）<br />1x USB 2.0 JST-4pin（ホストモード）</td>
    </tr>
    <tr>
      <td>UART</td>
      <td colSpan={3}>1x UART; 1x UART（デバッグ用）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan={3}>1x DP 2.1（Type-Cコネクタに含む）</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan={3}>1x 4ピンファンコネクタ（5V PWM）</td>
    </tr>
    <tr>
      <td>ボタン</td>
      <td colSpan={3}>1x リセットボタン; 1x リカバリーボタン</td>
    </tr>
    <tr>
      <td>拡張ポート</td>
      <td colSpan={3}>2x 60ピン高速コネクタ（拡張ボード用）<br />1x 10ピン電源コネクタ（拡張ボード用）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2ピン</td>
    </tr>
    <tr>
      <td>電源</td>
      <td colSpan={4}>1x XT30コネクタ（12-54V DC）</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>拡張ボード</td>
    </tr>
    <tr>
      <td>ネットワーキング</td>
      <td>イーサネット</td>
      <td colSpan={3}>1x RJ-45ギガビットイーサネット（10/100/1000M）</td>
    </tr>
    <tr>
      <td rowSpan={5}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (10 Gbps)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1x CAN JST 4ピン（3.3V）; 1x CAN（XT30 2+2）</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan={3}>1x 4ピンファンコネクタ（5V PWM）</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td colSpan={3}>2x I2C JST 4ピン（3.3V）</td>
    </tr>
    <tr>
      <td>SPI</td>
      <td colSpan={3}>1x I2S JST 6ピン（3.3V）</td>
    </tr>
    <tr>
      <td>電源</td>
      <td colSpan={4}>2x XT30 2+2コネクタ（12-54V DC）</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>その他</td>
    </tr>
    <tr>
      <td rowSpan={3}>機械的仕様</td>
      <td >寸法（W x D x H）</td>
      <td colSpan={3}>63mm * 95mm * 42mm（拡張なし）<br />63mm * 95mm * 66.7mm（拡張あり）</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={3}>345g（拡張なし）<br />462g（拡張あり）</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td colSpan={3}>デスク、壁掛け</td>
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

## JetPack OS のフラッシュ

ここでは、reComputer Mini に接続された NVMe SSD に [Jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-archive) をフラッシュする方法を説明します。

### 対応する Nvidia Jetson モジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html) 
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html) 
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html) 
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html) 

### 必要条件

- Ubuntu ホストコンピュータ
- reComputer J401-Mini キャリアボードと Jetson Orin モジュール
- USB Micro-B データ転送ケーブル

:::info

物理的な Ubuntu ホストデバイスを使用することを推奨します。仮想マシンの使用は避けてください。
以下の表を参照してホストマシンを準備してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td rowspan="2"> JetPack バージョン </td>
        <td class="dbon" colspan="3"> Ubuntu バージョン (ホストコンピュータ) </td>
    </tr>
    <tr>
        <td> 18.04 </td>
        <td> 20.04 </td>
        <td> 22.04 </td>
    </tr>
    <tr>
        <td>JetPack 5.x</td>
        <td> ✅ </td>
        <td> ✅ </td>
        <td> </td>
    </tr>
    <tr>
        <td>JetPack 6.x</td>
        <td> </td>
        <td> ✅ </td>
        <td> ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Jetpack イメージの準備

ここでは、使用する Jetson モジュールに対応するシステムイメージを Ubuntu PC にダウンロードする必要があります。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack バージョン</th>
      <th>Jetson モジュール</th>
      <th>ダウンロードリンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZDMO2dBwiJIjw82nlOmxpgBpaKBuRk2a2coH0sIl2rlAA?e=xF3X5M" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>8C3E89F54198DA2AC6094B7602C8AA2<br />CE14A2AB2C75A885A915BF2D04EDF2BD4</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcvT_P3RFzRGtzWfQQrofw0Bi8CptGEHqKDIUs6j7kI5Tw?e=VWh5Ww" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>B7C50661695C7E42360B6DCD8E5679B<br />E2807DC1B10C94FF12BB43B223FF3CFCB</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERyWCoUKxZ5NkussOSSiX4AB0uKN8Mo_DhKsXhi1x_SGqA?e=bdhxnE" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>9A7EEE111D8175EF8286A276BE2668A<br />AA9DE1AB4E850D722351B5BE76C8610B1</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUJePP-bzqJAoQQ2pLw_VaABpJfj4K4EbCja9QH-OYqWSg?e=vI1M1K" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>24A37D1EB26B65CEA9830961F0270AA<br />CCF4909C06D8CC1FCC91DB560C1B9060E</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZojl6PUN4FFkshyt9a8kFEBUVVrQVO669V-pB_PNJvCuQ?e=YzFd1Z" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>C579FF60F6F140E43C592F784EA5417<br />91DD8F7DDA49924F36EFBB63196FC1C35</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNTXrMsDcJCnIN2RvmXg6EBBLY6PRZiegvUjqI_N2i0YQ?e=SXEXXz" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>3A96643CF7CF8D765FD7B1B43CA7BEE<br />AAD97AF6094E073CE392AF6E1BAD45B91</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EabRgwAjKaJFv11KtK2r06QB_fn91IFoC97qV0LGKGPyWQ?e=fy7LwO" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>C0D23150DE73F3E6D31203F7BA1B198<br />D26A7A67F109264D049B3E0F9EEE1EE7A</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVGTsdS4n-RLhFxn6tx1NFgB4axESjVlifNXHaFzNAsmWw?e=1oNQeE" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>029F135F8A86E55892F1AD4C3049C9D<br />9908D4503C1BBEEAB324AB038A77B4027</td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2</td>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVjuq6G9y_5OjIxMIHFiBj0BVckYdcRQBunaXMHFBLZ3tw?e=tY89se" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>23855098982DD1E05C025D3F078BCA0<br />2F396C1FB68DC58E539D83569A894571D</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcdaeIBdGRpCp0Dev5R3o1sB2Tr4HIwjgtp3d_XX7lE9Gg?e=bxteCW" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>A1C5F44B19B6C06E11AC38ABDA79AD6<br />CBFF2AAFBEEA7BF3A14B2FE08EA37267F</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6のイメージファイルは約**16.7GB**のサイズがあり、ダウンロードには約60分かかります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの整合性を確認するには、SHA256ハッシュ値を比較することができます。

Ubuntuホストマシンでターミナルを開き、以下のコマンドを実行してダウンロードしたファイルのSHA256ハッシュ値を取得してください：`sha256sum <File>`。結果のハッシュ値がWikiに記載されているSHA256ハッシュ値と一致する場合、ダウンロードしたファームウェアが完全であることが確認できます。
:::

### 強制リカバリモードに入る

:::info
インストール手順に進む前に、ボードが強制リカバリモードにあることを確認する必要があります。
:::

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/HEIXFkizP5Y" title="強制リカバリモードに入る (reComputer Mini)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> 手順 </summary>

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini_rec.png" />
</div>

- **ステップ1.** USB Micro-BケーブルをUSB2.0 DEVICEポートとUbuntuホストPCに接続します。
- **ステップ2.** ピンを使用してRECOVERYホールに挿入し、リカバリボタンを押し続けます。
- **ステップ3.** 電源を接続します。
- **ステップ4.** リカバリボタンを離します。

</details>

LinuxホストPCでターミナルウィンドウを開き、以下のコマンドを入力します：`lsusb`。使用しているJetson SoMに応じて、以下のいずれかの出力が表示されれば、ボードは強制リカバリモードにあります。
- Orin NX 16GBの場合: 0955:7323 NVidia Corp
- Orin NX 8GBの場合: 0955:7423 NVidia Corp
- Orin Nano 8GBの場合: 0955:7523 NVidia Corp
- Orin Nano 4GBの場合: 0955:7623 NVidia Corp

以下の画像はOrin NX 16GBの場合です：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/>
</div>


### 単一コマンドでJetsonにフラッシュする

<details>

<summary> 単一コマンドでデバイスをフラッシュする </summary>

reComputer Jetson J30/40 Miniは、Jetpack 6.0のフラッシュをサポートするワンクリックフラッシュスクリプトを提供しています。

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZFBzTlyOjhE?si=uNN-l5VVGbAyGnot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::caution
免責事項: ワンクリックフラッシュスクリプトはJetpackのフラッシュを迅速に行うことを目的としています。現在のバージョンはベータ版であり、多くの問題がある可能性があります。ご理解いただければ幸いです。フラッシュに問題がある場合は、以下の`Flash The Device Step by Step`を参照し、[Discord Jetsonチャンネル](https://discord.com/channels/862602258452578314/930732339624026152)でフィードバックをお寄せください。迅速に修正し、この機能を改善していきます。
:::

</details>


### Jetsonへのステップバイステップフラッシュ

**ステップ1:** UbuntuホストPCでダウンロードしたイメージファイルを解凍します：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# 例: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**ステップ2:** 以下のコマンドを実行してJetpackシステムをNVMe SSDにフラッシュします：

```bash
cd mfi_xxxx
# 例: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功すると、以下の出力が表示されます：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には2〜10分かかる場合があります。
:::

**ステップ3:** HDMIコネクタを使用してJ501をディスプレイに接続し、初期設定を完了します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
必要に応じて**システム設定**を完了してください。
:::

**ステップ4 (オプション):** Nvidia Jetpack SDKをインストールする

Jetsonデバイスでターミナルを開き、以下のコマンドを実行してください：

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## ハードウェアインターフェースの使用

:::info
ハードウェアインターフェースの詳細な仕様と使用方法について詳しく知りたい場合は、[こちらのWiki](https://wiki.seeedstudio.com/ja/recomputer_jetson_mini_hardware_interfaces_usage/)をご参照ください。
:::

## リソース
- [reComputer Mini データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [reComputer Mini 回路図](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [reComputer Mini 3Dファイル](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)
- [Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio エッジAI成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson デバイスワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>