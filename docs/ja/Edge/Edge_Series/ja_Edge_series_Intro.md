---
description: Edge Series Guide
title: Edge Series Guide
keywords:
- Edge Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edge_series_Intro
last_update:
  date: 10/24/2023
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-platform/collection_page/Edge_Series_wiki_front.png" style={{width:1000, height:'auto'}}/></div>

## Edge Series 紹介

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">EdgeBox ESP 100</th>
      <th class="table-trnobg">EdgeBox RPI 200</th>
      <th class="table-trnobg">EdgeLogix RPI 1000</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Logix/edgelogix.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>EdgeBox-ESP-100は、ワイヤレス機能と複数のFieldbusオプションを備えた多用途で軽量なコントローラーです。フィールド自動化用のスタンドアロンPLCとして機能するか、産業用ゲートウェイとして機能し、ネットワークとクラウド接続のために既存のPLCとの通信を可能にします。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Raspberry Piベースのオールインワン産業用エッジコンピューティングコントローラー。高いスケーラビリティ、堅牢な設計、豊富なIOリソース、Raspberry Pi産業用ソフトウェアエコシステムとの互換性により、スマート自動化とIIoTソリューションに理想的な選択肢です。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>豊富なIO、モジュラー設計、産業用バスサポート、ワイヤレス機能を備えた強力なRaspberry Pi産業用コントローラー。オールインワン自動化に理想的で、シームレスなクラウド統合により複雑なシステムの管理に優れています。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
  </table>
</div>

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Edge Box RPi 200 用 Codesys</font></th>
      <th class="table-trnobg"><font size={"4"}>EdgeBox RPi 200 balena OS セットアップ</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesysicon.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Codesys Development System V3を使用してRaspberry Piベースの PLC である EdgeBox-RPI-200 をプログラムします。CODESYS Control for Raspberry Pi MC ランタイムをインストールします。Codesys は産業用コントローラープログラミング用の IEC 61131-3 ソフトウェアです。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Balena: 開発者がデバイスフリート全体でアプリケーションをデプロイ・管理するための IoT プラットフォーム。多様なアーキテクチャをサポートし、簡単な更新と現場での安全で信頼性の高いデバイス動作を可能にします。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-balena-OS-setup/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## EdgeBox RPI 200 アプリケーション

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>EdgeBox RPi 200 with N3uron</font></th>
      <th class="table-trnobg"><font size={"4"}>EdgeBox RPi 200 with LoRaWAN® Module</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron1.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  IIoT & DataOps向けの産業用エッジプラットフォームで、プラントフロアとサードパーティアプリケーション間のシームレスな統合を促進します。双方向データパイプラインを可能にし、デバイスをアプリケーションから分離し、運用データを単一の信頼できるソースで統合、モデル化、処理、可視化します。組織全体でのデータ可用性を向上させます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> WM1302: mini-PCIeフォームファクターの次世代LoRaWAN®ゲートウェイモジュール。Semtech® SX1302ベースバンドLoRaWAN®チップを搭載し、感度の向上、消費電力の削減、動作温度の低下により長距離無線伝送を強化します。このwikiではインストールと使用方法の詳細を説明しています。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-n3uron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/EdgeBox-rpi-200-with-LoRaWAN-module/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Ignition Edge

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Edgebox RPI 200 Getting Started with Ignition Edge</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/EdgeBox-200-Ignition/EdgeBox-200_Ignition_Edge.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Inductive Automation®によるIgnition Edge：ネットワークエッジのフィールドデバイスやOEMデバイス向けにカスタマイズされた軽量なIgnition®ソフトウェアソリューション。エッジコンピューティングを簡素化し、より手頃な価格で実現し、データ収集、可視化、システム管理をネットワークのエッジまでシームレスに拡張できます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-ignition-edge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

## EdgeBox ESP 100 アプリケーション

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>EdgeBox-ESP-100 Arduino入門</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> EdgeBox-ESP-100：軽量自動化向けのESP32ベースコントローラー。リモート監視・制御用のアナログ入力機能を搭載し、PID制御ループ、ロジックシーケンス、またはワイヤレス・フィールドセンサー拡張対応ゲートウェイとして適用可能。このwikiではハードウェア概要とArduinoプログラミング手順を説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Edgebox-ESP-100-Arduino/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストがあり、[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)の下に分類されています。私たちはwikiプラットフォームの開発を通じて、ユーザーエクスペリエンスの向上とより良いサポートの提供に専念しています。
- [このページへのあなたの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963241)は私たちにとって不可欠です！私たちはあなたの意見を本当に大切にしており、アイデアの創出においてあなたの支援を心から感謝いたします。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、あなたの製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供するためにここにいます。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
