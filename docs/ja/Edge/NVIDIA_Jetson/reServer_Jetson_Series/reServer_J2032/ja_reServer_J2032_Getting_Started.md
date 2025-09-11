---
description: reServer J2032
title: reServer Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reServer_J2032_Getting_Started
last_update:
  date: 05/15/2025
  author: w0x7ce
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reServer J2032 の使い方

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/J2032_product_image.png" alt="pir" width={800} height="auto" /></p>

reServer J2032 は、私たちの reThings ファミリーに新たに加わった強力なエッジ AI コンピュートデバイスです。洗練された reServer フォームファクターケースデザインを採用し、非常にコンパクトな形状に強力なユニットを詰め込んでいます。このスマートな小型サーバーは、エッジからクラウドまで簡単かつ効率的に動作するだけでなく、AI 処理能力を加えることも可能です。

reServer J2032 は、最先端の Nvidia Jetson™ Xavier NX 16GB モジュール（オプションで Jetson™ Xavier NX 8GB モジュール）を搭載しており、一般的な AI タスクを処理するために最大 21 TOPS を提供できます。大量の GPU RAM により、複数のニューラルネットワークを並列処理することが可能です。デュアルイーサネットポートを備え、1つは高速な 2.5 ギガビットイーサネットポート、もう1つは 1 ギガビットポートで構成されており、5G、LoRa®、BLE を含むハイブリッド接続もサポートしています。さらに、デュアル SATA III 6.0Gbps データコネクタを備えており、最大 2 台の 3.5"/2.5" SATA 内蔵ハードディスクドライブを装備して、より多くのストレージを確保できます。

同時に、reServer はコンパクトなデザインで、ほぼすべてのサーバーシナリオで効率的に動作します。reServer の整然とした構造により、ハードドライブや拡張通信モジュールスロットへのアクセスが簡単で、インストール、アップグレード、メンテナンスが容易です。

デュアル SATA III 6.0Gbps データコネクタを備えた reServer は、最大 2 台の 3.5"/2.5" SATA 内蔵ハードディスクドライブを装備して、より多くのストレージを確保できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-Jetson-20-1-H2-p-5337.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 全体寸法 132mm x 124mm x 233mm のコンパクトなデスクトップサーバーデザイン
- Nvidia Jetson™ Xavier NX 16Gb モジュールを搭載
- 豊富な周辺機器：デュアル LAN ポート（1 x 2.5 ギガビットポート、1 x 1 ギガビットポート）、2 x USB 3.2 gen 2 Type-A、HDMI ポート、DP ポート、1 x M.2 Key B、1 x Mini-PCIe ポート
- 5G、LoRa®、BLE を含むハイブリッド接続をサポート（5G と LoRa® は追加モジュールが必要）
- デュアル SATA III 6.0 Gbps データコネクタで 3.5"/2.5" SATA ハードディスクドライブをサポートし、筐体内に両方を収納可能な十分なスペースを確保
- M.2 B-Key による拡張性（例：4G/5G モジュール）
- Mini-PCIe ポートによる拡張性（例：4G/5G モジュールおよび LoRaWAN® モジュール（**WM1302-USB-XXXX**））
- 大型 VC ヒートシンクを備えた静音冷却ファンで優れた放熱性能
- 筐体を開けた後、内部コンポーネントへのアクセスが容易で、インストール、アップグレード、メンテナンスが簡単
- NVIDIA Jetpack 4.6.1（Jetson™ Linux R32.7.1）をプリインストール

> LoRaWAN® は LoRa Alliance® のライセンスの下で使用されるマークです。
LoRa® マークは Semtech Corporation またはその子会社の商標です。

## 仕様

<div>
  <div className="document">
    

<table><colgroup><col width="115px" /><col width="188px" /><col width="392px" /></colgroup>
      <tbody>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={12} align valign="middle" style={{width: 119}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">プロセッサ</p>
          </td>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">モジュール</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">NVIDIA® Jetson Xavier™ NX 16GB</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">AI性能</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">21 TOPS</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">GPU</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">NVIDIA Voltaアーキテクチャ、384 NVIDIA CUDA®コアおよび48 Tensorコア</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">CPU</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">6コア NVIDIA Carmel ARM®v8.2 64ビット CPU 6 MB L2 + 4 MB L3</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">DLアクセラレータ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2x NVDLAエンジン</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ビジョンアクセラレータ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">7-Way VLIWビジョンプロセッサ</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">メモリ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">8 GB 128ビット LPDDR4x @ 51.2GB/s</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ストレージ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">16 GB eMMC 5.1</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ビデオエンコーダ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2x 4K60 | 4x 4K30 | 10x 1080p60 | 22x 1080p30 (H.265)</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2x 4K60 | 4x 4K30 | 10x 1080p60 | 20x 1080p30 (H.264)</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ビデオデコーダ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2x 8K30 | 6x 4K60 | 12x 4K30 | 22x 1080p60 | 44x 1080p30 (H.265)</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2x 4K60 | 6x 4K30 | 10x 1080p60 | 22x 1080p30 (H.264)</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ストレージ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2 x 2.5''/3.5" SATA (HDD/SSD)をサポート、最大SATA3 (2.5インチ256GB SSD x1、最大SATA3すでにインストール済み)</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">コプロセッサ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">Raspberry Pi® RP2040 32ビットデュアルARM Cortex-M0+ @ 133MHz</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={6} align valign="middle" style={{width: 119}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">外部I/O</p>
          </td>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2.5Gイーサネットポート</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">PCIeから変換</p>
            <div>RX:&nbsp;2.35&nbsp;Gbits/sec</div>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">TX: 1.4 ~ 1.6 Gbits/sec</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">1000Mイーサネットポート</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">Jetson Xavier NXのネイティブイーサネットインターフェース</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">HDMIインターフェース</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">HDMI2.0まで対応</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">DisplayPortインターフェース</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">DP1.4まで対応</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">USB3.1 GNE2インターフェース x2</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">最大10Gbitまで対応</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">DCジャック電源インターフェース</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">DC 12V @5A, 2.5mmセンターピン</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={16} align valign="middle" style={{width: 119}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">内部I/O</p>
          </td>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">M.2 KEY Bコネクタ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">USB3.2 GEN2付き、5G/4Gワイヤレスモジュール対応</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">MiNi-PCIeコネクタ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">LoRa®/シリーズワイヤレスモジュール対応</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={2} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">SIMカードスロット</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">MiNi-PCIe用トップレイヤー</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">M.2用ボトムレイヤー</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">SATA電源コネクタ x2</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={2} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2.5インチまたは3.5インチHDD/SSD対応、最大SATA3</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">SATAデータコネクタ x2</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">メインファンコネクタ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">エンクロージャーファン用、12Vファンのみ対応、ボトムファンはすでにインストール済み</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">Jetson Xavier NXファンコネクタ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">5Vファンのみ対応、アルミヒートシンク冷却ファンはすでにインストール済み</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">RTCバッテリーコネクタ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">RTCバッテリーはすでにインストール済み</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">260Pin SODIMMコネクタ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">Jetson Xavier NX用</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">NX用USB TYPE-Cコネクタ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">NXプログラミング用</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">コプロセッサ用USB TYPE-Cコネクタ</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">コプロセッサファームウェアアップグレード用</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">オートパワーオンヘッダー</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ショートサーキットでキーオンモードに入り、浮動状態でオートパワーオンモードに入る</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2x5Pinデバッグヘッダー</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">デバッグ</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">電源ボタン</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">緑色LED付き</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 594px;" colSpan={2} rowSpan={1} align valign="middle" style={{width: 594}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">アクティブブザー</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={4} align valign="middle" style={{width: 119}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ネットワーク</p>
          </td>
          <td data-style="width: 193px;" colSpan={1} rowSpan={2} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ギガイーサネット</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2.5Gイーサネットポート</p>
            <ul>
              <li>rx:&nbsp;2.35&nbsp;Gbits/sec</li>
              <li class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">tx:&nbsp;1.4&nbsp;~&nbsp;1.6&nbsp;Gbits/sec</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">1000Mイーサネットポート</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={2} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ワイヤレス接続</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">M.2 KEY Bコネクタ、5G/4Gワイヤレスモジュール対応</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">MiNi-PCIeコネクタ、LoRa®/シリーズワイヤレスモジュール対応</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={3} align valign="middle" style={{width: 119}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ディスプレイ</p>
          </td>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">LED1: SATA0ステータスLED</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={2} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">スリープモードまたはSSD/HDD未挿入-----LED OFF</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">SSD/HDD挿入済みでPHY準備完了-----LED ON</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">データ転送ステータス-----LED点滅</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">LED2: SATA1ステータスLED</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">LED3</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">M.2ワイヤレスモジュールステータスLED</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={3} align valign="middle" style={{width: 119}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">電源</p>
          </td>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">DCジャック電源インターフェース</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">DC 12V @5A, 2.5mmセンターピン</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">電源ボタン</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">電源オン</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 193px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 193}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">再起動ボタン</p>
          </td>
          <td data-style="width: 395px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 395}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">再起動</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={4} align valign="middle" style={{width: 119}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">プリインストール済み</p>
          </td>
          <td data-style="width: 594px;" colSpan={2} rowSpan={1} align valign="middle" style={{width: 594}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2.5インチ256GB SSD x1、最大SATA3</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 594px;" colSpan={2} rowSpan={1} align valign="middle" style={{width: 594}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">アルミヒートシンク冷却ファン</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 594px;" colSpan={2} rowSpan={1} align valign="middle" style={{width: 594}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">RTCバッテリー</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 594px;" colSpan={2} rowSpan={1} align valign="middle" style={{width: 594}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ボトムファン</p>
          </td>
        </tr>
        <tr>
          <td data-style="width: 119px;" colSpan={1} rowSpan={1} align valign="middle" style={{width: 119}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">寸法</p>
          </td>
          <td data-style="width: 594px;" colSpan={2} rowSpan={1} align valign="middle" style={{width: 594}}>
            <p class="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">&nbsp;</p>
            <p class="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">132mm*124mm*233mm</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware1.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware2.png" alt="pir" width={1000} height="auto" /></p>

## 寸法

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/reserverpm2.jpg" alt="pir" width={1000} height="auto" /></p>

## JetPack のフラッシュ

reServer J2032 は、出荷時に JetPack がプリフラッシュされています。ただし、デバイスを再フラッシュしたい場合は、[このウィキ](https://wiki.seeedstudio.com/ja/reServer_J2032_Flash_Jetpack)を参照してください。

## reServer 周辺機器およびモジュールの組み立てによるクイックスタート

!!! 注意:
    reServer J2032 には、Jetson Xavier NX モジュールの EMMC に **Jetpack 4.6.1 がプリインストール**されており、これを使用してすぐに独自のアプリケーション開発を開始できます。

### 必要なハードウェア

reServer を始める前に、以下のハードウェアを準備してください。

- reServer
- 電源アダプタ（付属）
- 外部モニター
- HDMI/DP ケーブル
- キーボードとマウス

### 周辺機器およびモジュールの組み立て

このセクションでは、reServer 内部にサポートされているハードウェア/モジュールをインストールまたは交換する方法を紹介します。以下の手順が使用ケースに該当しない場合はスキップしてください。
このセクションを読む前に、reServer のメインボードにアクセスするための **組み立てガイドマニュアル** をページの最後に添付していますので、それを参照してください。

#### LoRaWAN® モジュール Mini-PCIe ポートのインストール

!!! 注意:
    Mini-PCIe ポートに LoRaWAN® モジュールをインストールする以下のセットアップガイドは、[WM1302-USB-US915](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-US915-p-4891.html?queryID=6e7ba3140d26416085ce7ea85c0be886&objectID=4891&indexName=bazaar_retailer_products) または [WM1302-USB-868](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html?queryID=6e7ba3140d26416085ce7ea85c0be886&objectID=4892&indexName=bazaar_retailer_products) モジュールでのみテストされています。LoRaWAN® モジュールは含まれていません。

- **ステップ 1.** キャリアボードの背面にある Mini-PCIe スロットを見つけ、LoRaWAN® モジュールをインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032_wm1302_minipcie.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 2.** アンテナケーブルを接続し、reServer J2032 ケースの背面にあるアンテナ取り付けスロットを見つけます。このスロットにはゴム製のインサートが穴を塞いでいるはずです。

!!! 注意:
     reServer J2032 にはアンテナアダプタおよびアンテナは付属していません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/antenna.jpg" alt="pir" width={650} height="auto" /></p>

- **ステップ 3.** LoRaWAN® モジュールを使用するために reServer J2032 を設定します。`Terminal` に以下のコマンドを入力してください：

```
sudo -i
cd /sys/class/gpio/
echo 268 > export; echo out > gpio268/direction; echo 1 > gpio268/value
echo 495 > export; echo out > gpio495/direction; echo 0 > gpio495/value
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/enable_lorawan.png" alt="pir" width={700} height="auto" /></p>

- **ステップ 4.** LoRaWAN® モジュールが正しく接続されているか確認します。`Terminal` を開き、以下のコマンドを入力してください：

!!! 注意:
    LoRaWAN® モジュールを有効にする以下の手順は、工場出荷時の Jetpack 4.6.1 でのみテストおよび適用されています。

```
ls /dev/ttyACM*
```

以下のような出力が表示されるはずです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/lsusb_lorawan.png" alt="pir" width={500} height="auto" /></p>

または

```
lsusb -t
```

以下のような出力が表示されるはずです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/lsusb_t_lorawan.png" alt="pir" width={700} height="auto" /></p>

- **ステップ 5.** LoRaWAN® モジュールを使用するには、ソースコードをダウンロードしてください：

まず、git をインストールし、GitHub から sx1302_hal（SX1302 LoRa® ゲートウェイ用のライブラリとプログラム）をダウンロードします：

```
sudo apt update
sudo apt install -y git
git clone https://github.com/Lora-net/sx1302_hal
```

sx1302_hal フォルダに移動し、プログラムをビルドします：

```
cd ~/sx1302_hal
make
```

LoRaWAN® ゲートウェイアプリケーションを実行します。以下は [WM1302-USB-868](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html?queryID=6e7ba3140d26416085ce7ea85c0be886&objectID=4892&indexName=bazaar_retailer_products) モジュールを使用する例で、`global_conf.json.sx1250.EU868.USB` 設定ファイルを選択しています：

```
cd packet_forwarder/
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

以下のような出力が表示されるはずです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/lorawan_start.png" alt="pir" width={800} height="auto" /></p>

#### 4G/5G モジュール Mini-PCIe のインストール

!!! 注意:
     **QC25-EUX 4G モジュール**を以下のセットアップガイドで使用していますが、モジュールは付属していません。

- **ステップ 1.** キャリアボードの背面にある Mini-PCIe スロットを見つけ、LoRaWAN® モジュールをインストールします。

!!! 注意:
     4G/5G ネットワークを有効にするには、標準 SIM カードを reServer J2032 の SIM カードスロットに挿入する必要があります。
     **SIM カードトレイ**には 2 層があり、**Mini-PCIe** ポートは以下の画像で示されているように **SIM スロット 2** を使用しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032_sim2_minipcie.png" alt="pir" width={550} height="auto" /></p>

- **ステップ 2.** アンテナケーブルを接続し、reServer J2032 ケースの背面にあるアンテナ取り付けスロットを見つけます。このスロットにはゴム製のインサートが穴を塞いでいるはずです。

!!! 注意:
     reServer J2032 にはアンテナアダプタおよびアンテナは付属していません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/antenna.jpg" alt="pir" width={650} height="auto" /></p>

- **ステップ 3.** **QC25-EUX 4G モジュール**を使用するために reServer J2032 を設定します。以下のコマンドを `Terminal` に入力してください：

```
sudo -i
cd /sys/class/gpio/
echo 436 > export; echo in > gpio436/direction;
export; echo in > gpio268/direction;
export; echo out > gpio393/direction; echo 1 > gpio393/value
echo 495 > export; echo out > gpio495/direction;
echo 1 > gpio495/value
echo 0 > gpio495/value
```

- **ステップ 4.** **QC25-EUX 4G モジュール**が正しく接続されているか確認するために、電源を入れてシステムを起動し、`Terminal` を開いて以下のコマンドを入力してください：

!!! 注意:
    **QC25-EUX 4G モジュール**を有効にする以下の手順は、**Factory Default Jetpack OS Version 4.6.1** のみでテストおよび適用されています。

```
lsusb -t
```

以下のような出力が表示されるはずです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/4G_lsusb_t.png" alt="pir" width={650} height="auto" /></p>

- **ステップ 5.** **QC25-EUX 4G モジュール**を有効にして 4G ネットワークに接続するには、```Terminal``` を開いて以下を入力してください：

4G モジュールを接続した状態で minicom シリアルモニターを開きます：
```
sudo apt install -y minicom
sudo minicom -D /dev/ttyUSB2 -b 115200m1
```
シリアル接続が開いたら、`AT` と入力して 'Enter' を押します。`OK` が表示されるはずです。

同じ minicom シリアルウィンドウで以下を入力してください：
```
AT+QCFG="usbnet"
```
`+QCFG: "usbnet",0` のような出力が返されますが、これを 1 (ECM モード) に設定する必要があります。以下のコマンドを入力してください：
```
AT+QCFG="usbnet",1
```
次に、モデムを再起動するために以下のコマンドを入力してください：
```
AT+CFUN=1,1
```
その後、再起動するか、SIM カードキャリアからインターネットを取得するまでしばらく待ちます。

`Terminal` で `ifconfig` を入力すると、以下の画像のように SIM カードのモバイルキャリアから IP アドレスが割り当てられていることが確認できます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/4Gnetwork.png" alt="pir" width={700} height="auto" /></p>

#### 4G/5G モジュール M.2 B-key ポートのインストール

!!! 注意:
    reServer J2032 の M.2 B-Key は 3042/3052 (USB3.2 GEN2) フォーマットをサポートし、4G/5G ワイヤレスモジュールをサポートします (**4G/5G モジュールは reServer に含まれていません**)。以下の手順では SIM8202G-M2 5G モジュールを使用します。

- **ステップ 1.** SIM8202G-M2 モジュールを M.2 B-Key に取り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032_installM2.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 2.** アンテナケーブルをモジュールに接続します。

!!! 注意:
     reServer J2032 にはアンテナアダプターやアンテナが付属していません。**SIM8202G-M2** 5G モジュールをネットワークに接続するには、モジュールにアンテナを取り付ける必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/antenna.jpg" alt="pir" width={650} height="auto" /></p>

- **ステップ 3.** M.2 B-Key ポートで **SIM8202G-M2 5G モジュール**を使用するために reServer J2032 を設定します。以下のコマンドを `Terminal` に入力してください：

```
sudo -i
cd /sys/class/gpio/
echo 419 > export; echo out > gpio419/direction; echo 0 > gpio419/valueexport; echo in > gpio268/direction;
echo 417 > export; echo out > gpio417/direction; echo 1 > gpio417/value
echo 266 > export; echo out > gpio266/direction; echo 1 > gpio266/value
```

- **ステップ 4.** **SIM8202G-M2 5G モジュール**が正しく接続されているか確認するために、電源を入れてシステムを起動し、`Terminal` を開いて以下のコマンドを入力してください：

!!! 注意:
    **SIM8202G-M2 5G モジュール**を有効にする以下の手順は、**Factory Default Jetpack OS Version 4.6.1** のみでテストおよび適用されています。

```
lsusb -t
```

以下のような出力が表示されるはずです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/enable5G.png" alt="pir" width={700} height="auto" /></p>

**ステップ 5.** **SIM8202G-M2** 5G モジュールを有効にして 5G ネットワークに接続します。

!!! 注意:
     4G/5G ネットワークを有効にするには、reServer J2032 の SIM カードスロットに標準 SIM カードを挿入する必要があります。
     **SIM カードトレイ**には上下 2 つのスロットがありますが、**M.2 B-key** ポートは**下部スロット**を使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032_sim1.png" alt="pir" width={500} height="auto" /></p>

SIM8202G-M2 5G モジュールを接続した状態で minicom シリアルモニターを開きます：
```
sudo apt install -y minicom
sudo minicom -D /dev/ttyUSB2 -b 115200m1
```
シリアル接続が開いたら、`AT` と入力して 'Enter' を押します。次の行に `OK` が表示されるはずです。

次に、4G/5G ネットワークに接続するために、SIM8202G-M2 5G モジュール用の必要なドライバーをインストールする以下のコマンドを実行してください：

```
cd ~
wget https://files.seeedstudio.com/wiki/reServerJ2032/SIM8200.tar.gz
tar xvf SIM8200.tar.gz
sudo chmod 777 -R SIM8200/
cd SIM8200/
sudo ./install.sh
cd Goonline
make
sudo ./simcom-cm -i wwan0
```

`Terminal` で `ifconfig` を入力すると、以下の画像のように SIM カードのモバイルキャリアから IP アドレスが割り当てられていることが確認できます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/5Gnetwork.png" alt="pir" width={700} height="auto" /></p>

#### HDD のインストール

reServer は、より多くのストレージを確保するために 2 台の 3.5"/2.5" 内蔵ハードディスクドライブをインストールすることをサポートしています。
以下の手順に従って HDD をインストールしてください。

- **ステップ 1.** ネジを外してブラケットを引き出します。

- **ステップ 2.** HDD をブラケットにネジで固定します。

- **ステップ 3.** HDD ブラケットを押し下げて、HDD を SATA ポートに接続します。

- **ステップ 4.** HDD ブラケットをネジで固定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/07.png" alt="pir" width height="auto" /></p>

### ハードウェアインターフェース

このセクションでは、reServer のインターフェース接続について説明します。

#### 電源接続

AC-DC電源アダプター（製品ボックスに同梱）をAC電源コード（製品ボックス外だがパッケージ内）に接続し、それをreServerの12V DCジャックに接続してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/reserver_power.png" alt="pir" width={300} height="auto" /></p>

#### デュアルUSB 3.1ポート

デュアルUSB 3.1ポートを使用して、キーボードやマウスなどのUSBデバイスを接続できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/reserver_usb.png" alt="pir" width={300} height="auto" /></p>

#### ディスプレイ接続

reServerをディスプレイに接続する方法は2つあります。

**方法1.** HDMIポート  
**方法2.** DPポート

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/reserver_display.png" alt="pir" width={300} height="auto" /></p>

#### イーサネット接続

reServer J2032には2つのイーサネットポートが搭載されており、それぞれの接続速度は1000BASE-Tおよび2.5GBASE-Tです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServerJ2032/ethernetport.png" alt="pir" width={300} height="auto" /></p>

## リソース

- **[PDF]** [reServer 組み立てガイド](https://files.seeedstudio.com/wiki/reComputer/reServer_Jetson_Assembly_Guide.pdf)
- [Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson デバイス ワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>