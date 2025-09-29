---
description: Wio Terminal ガイド
title: Wio Terminal ガイド
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio_Terminal_Intro
last_update:
  date: 05/15/2025
  author: Frank
---


## はじめに

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:600, height:'auto'}}/></div>

Wio Terminal は、ATSAMD51マイクロコントローラーを搭載し、2.4インチLCDスクリーンを備えた多機能な開発ボードです。オンボードのWi-Fi/Bluetooth機能、内蔵加速度計、マイク、ブザー、microSDカードスロット、さまざまなI/Oインターフェースを備えています。Wio Terminal はIoTアプリケーションの開発を簡素化するよう設計されており、初心者から経験豊富な開発者まで幅広いユーザーに最適なツールです。

## OSHW（製造可能なオープンソースハードウェア）の理念

オープンソースハードウェア（OSHW）とは、その設計が公開されており、誰でもその設計を学び、変更し、配布し、製造し、販売できるハードウェアを指します。[Wio Terminal は、広範なドキュメント、オープンソースコード、設計ファイルを提供することでOSHWの理念を体現しています](https://github.com/Seeed-Studio/OSHW-WioTerminal)。これにより、ユーザーはハードウェアを完全に理解し、再現することができます。このオープン性は、開発者コミュニティ内でのイノベーション、コラボレーション、学習を促進します。

## Wio Terminal の使い方を始める

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Wio Terminal の使い方を始める</th>
      <th class="table-trnobg">Wio Terminal での CircuitPython</th>
      <th class="table-trnobg">ArduinoでFreeRTOSを使ったマルチタスクの方法</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-logo.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセッションでは、エンジニアのLakshanthaがWio Terminalの使用方法をソフトウェアとともに説明し、楽しいデモをお見せします！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Adafruit Industriesが提供する公式CircuitPythonをSeeeduino Wio Terminal にインストールして実行する方法を紹介します！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Arduino互換性のために、FreeRTOSをArduinoフレームワークに移植しました。これにより、お気に入りのArduinoボードでFreeRTOSを簡単に使用できます！このWikiでは、Arduino用FreeRTOSの始め方を紹介します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-CircuitPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Software-FreeRTOS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## ハードウェア概要

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">LCDの使用</th>
      <th class="table-trnobg">入出力</th>
      <th class="table-trnobg">IMUの使用</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0129.2019-12-03%2014_10_15.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Wio Terminalで使用されるTFT LCDライブラリのインストール方法を紹介します。最小限の労力でWio Terminalに基本的なグラフィカル機能を提供します！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Wio TerminalでGrove IOを使用する方法を紹介します。これにより、Groveエコシステムのプラグアンドプレイ機能を楽しむだけでなく、40ピンのRaspberry Pi互換GPIOも使用できます！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Wio Terminalで使用される内蔵3軸デジタル加速度計（LIS3DHTR）ライブラリのインストール方法を紹介します。これにより、Wio Terminalの加速度計情報にアクセスでき、モーションコントロールなどに使用できます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-IO-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-IMU-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">SDカード</th>
      <th class="table-trnobg">Wi-Fi</th>
      <th class="table-trnobg">Bluetooth</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_13-53-10.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Wio-connect.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Wio Terminalで使用されるファイルシステムライブラリのインストール方法を紹介します。これにより、SPIインターフェースを使用してSDカードへの読み書きが可能になります。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Wio TerminalのWireless Core Realtek RTL8720の最新ファームウェアを更新する方法と、無線接続を有効にするためのすべての依存ライブラリをインストールする方法を紹介します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Wio TerminalのWireless Core Realtek RTL8720の最新ファームウェアを更新する方法と、Bluetooth接続を有効にするためのすべての依存ライブラリをインストールする方法を紹介します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-FS-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Network-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Bluetooth-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">RTC</th>
      <th class="table-trnobg">赤外線エミッター</th>
      <th class="table-trnobg">マイク</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-RTC/demo.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/MIC.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Wio Terminal内のSAMD51コアに内蔵されたRTC機能を使用して時間を追跡する方法を紹介します。この機能により、外部RTCモジュールをシステムに追加する必要がなくなります！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Wio Terminalに内蔵された赤外線エミッターを使用する方法を紹介します。赤外線エミッターはデジタルインターフェースであり、リモコンのようにIR信号を送信するために使用できます！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Wio Terminalに内蔵されたマイクを使用して音声入力を行う方法を紹介します。マイクは周囲の音を検出し、それに応じて反応することができます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-RTC/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Infrared-Emitter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Mic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>ボタン</font></th>
      <th class="table-trnobg"><font size={"4"}>5方向スイッチ</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Wio Terminalの設定可能なボタンの使用方法を説明します。Wio Terminalには使用可能なボタンが3つあります。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Wio Terminalの5方向スイッチの使用方法を説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Buttons/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Switch/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>光センサー</font></th>
      <th class="table-trnobg"><font size={"4"}>ブザー</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Wio Terminalに内蔵された光センサーをコンポーネントとして使用する方法を説明します。光センサーはアナログインターフェースを使用しており、ピンを読み取ることで周囲の光センサー値を簡単に取得できます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Wio Terminalに内蔵された圧電ブザーをコンポーネントとして使用する方法を説明します。圧電ブザーはアナログのパルス幅変調（PWM）出力に接続して、さまざまな音や効果を生成することができます！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Light/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Buzzer/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## 拡張ボード

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Wio Terminal シャーシバッテリー（650mAh）</font></th>
      <th class="table-trnobg"><font size={"4"}>Wio Terminal LoRaWanシャーシ（アンテナ内蔵LoRa-E5およびGNSS、EU868/US915）</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-02.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Wio Terminal バッテリーシャーシは、Wio Terminal開発ボードにとって必須の拡張ボードであり、外部電源を提供することでWio Terminalの携帯性とコンパクトさを向上させます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Wio Terminal LoRaWanシャーシ（アンテナ内蔵LoRa-E5およびGNSS、EU868/US915）は、LoRa-E5 STM32WLE5JCを組み込んでおり、ARM Cortex M4超低消費電力MCUコアとLoRa SX126xによって駆動されます。この無線モジュールは、EU868およびUS915周波数でLoRaおよびLoRaWANプロトコルをサポートし、(G)FSK、BPSK、(G)MSK、LoRa変調を提供します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Chassis-Battery_650mAh/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>イーサネット接続</font></th>
      <th class="table-trnobg"><font size={"4"}>オーディオ拡張ボード</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/enc-wio.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Raspberry Pi用ENC28J60 OVERLAYS HATをWio Terminalで使用して安定したネットワーク接続を実現する方法を紹介します。これは、Raspberry Pi 40ピン拡張ボードをWio Terminalで使用する完璧な例です。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、ReSpeaker 2-Mic Hatを使用してWio Terminalでオーディオライブラリを使用する方法を紹介します。このライブラリを使用すると、Wio Terminalで音声を録音、再生、分析することができます！さらに、このオーディオライブラリは音声認識などのさまざまな分野に実装することが可能です！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Ethernet/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Audio-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## コース付きキット

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Applications Kit ML101 with Prof. Vijay コース</th>
      <th class="table-trnobg">TinyMLとは何ですか？</th>
      <th class="table-trnobg">メーカー向け人工知能入門</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/hardvarddetection2.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/cc_tinyml_2.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056241911.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この書籍は、教育者がWio Terminalを教室やワークショップに導入し、学習者にTinyMLの力を示すために特別に設計されています。機械学習の基本を教えるために必要な基礎を提供し、実践的な演習を通じて概念を具体化します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>MLはご想像の通り「機械学習」を意味し、現在ではほとんどの場合（必ずしもそうではありませんが）ディープラーニングを指します。TinyMLの「Tiny」は、MLモデルが非常に低消費電力で小型のデバイス（例えば、さまざまなMCU）で動作するように最適化されていることを意味します。これは、エッジ上のMLまたは組み込み機械学習のサブセットです。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この記事の目的は、ディープラーニングの旅を始めたいメーカーに興味を持たせ、一般的な理解を提供することです。一般的なユースケースや潜在的な落とし穴をいくつか指摘します。また、この記事の最後に、このトピックについてさらに学ぶためのコースや書籍をいくつか推奨します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-Kit-Course/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Introduction_to_Artificial_Intelligence_for_Makers/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## アプリケーション

### 簡単な IoT

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Wio Terminal を Microsoft Azure IoT Central に接続する</font></th>
      <th class="table-trnobg"><font size={"4"}>Wio Terminal を Microsoft Azure IoT に接続する</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Azure-IOT/Wio-terminal-azureiot.jpeg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このチュートリアルでは、Wio Terminal を Microsoft Azure IoT Central に接続し、Wio Terminal のオンボードセンサーやハードウェア（3軸加速度センサー、光センサー、3つのボタンなど）から Microsoft Azure IoT Central にテレメトリデータを送信するプロセスを説明します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このサンプルアプリケーションでは、Wio Terminal を Azure IoT Hub に接続する方法を示します。これは、Azureサービスとの通信のための小型で移植が容易なライブラリである Azure SDK for Embedded C を基盤としています。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Azure-IOT/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Wio Terminal を Google Cloud IoT Core に接続する</font></th>
      <th class="table-trnobg"><font size={"4"}>Wio Terminal と Wappsto IoT を使い始める</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto1.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このチュートリアルでは、Wio Terminal を Google Cloud IoT Core に接続し、Wio Terminal から Google Cloud IoT Core にテレメトリデータを送信するプロセスを説明します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このチュートリアルでは、Wio Terminal を Wappsto IoT に接続し、接続後に Wappsto のさまざまな機能を使用する方法を案内します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Get-Started-with-Wio-Terminal-and-Wappsto-IoT/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### 組み込み型 ML

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Impulse ベースのプロジェクト</th>
      <th class="table-trnobg">TensorFlow Lite ベースのプロジェクト</th>
      <th class="table-trnobg">AIoTs GPS を搭載した LoRa ノード</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-6-1024x416.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Alots/connectpc.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Edge Impulse は、組み込み型機械学習を使用して次世代のインテリジェントデバイスソリューションを開発するためのプラットフォームを提供します。エッジでの機械学習は、コスト、帯域幅、または電力制約のために今日廃棄されているセンサーデータの99%を有効活用することを可能にします。
      現在、Wio Terminal は公式に Edge Impulse に対応しています。エッジでの機械学習を使って Wio Terminal を始める方法を見てみましょう！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この記事では、公式の Arduino TensorFlow Lite ライブラリを Wio Terminal にインストールし、Wio Terminal を使用していくつかの機械学習モデルを試す方法を紹介します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このプロジェクトでは、内蔵の3軸加速度センサーとニューラルネットワークアルゴリズムを使用して、インテリジェントな認識システムを構築します。Wio Terminal の動きに基づいて、リアルタイムでその状態を表示することができます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-EI-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-TinyML-TFLM-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/AIoTs_GPS_state_tester/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## チュートリアル

### 基本的な使い方

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">USBホスト</th>
      <th class="table-trnobg">USBクライアント</th>
      <th class="table-trnobg">ジャイロ表示</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108143407.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0279.2019-11-28%2018_25_43.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Wio TerminalをUSBホストとして使用する方法を紹介します。これにより、USBデバイスをWio Terminalに接続し、コンピュータのように操作することができます！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiでは、Wio TerminalをUSBクライアントとして使用する方法を紹介します。これには、キーボードやマウスなどのヒューマンインターフェースデバイス（HID）としての使用が含まれます。また、MIDI（Musical Instrument Digital Interface）もサポートしています。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この例では、Wio Terminalで折れ線グラフを描画する方法を示しています。この例では、3軸加速度センサーの読み取り値（3セットのデータ）を1つの折れ線グラフにプロットし、Wio Terminalのリアルタイムの位置を表示します！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-USBH-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-USBCLIENT-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Displaying-Gyro/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">データの保存</th>
      <th class="table-trnobg">写真の表示</th>
      <th class="table-trnobg">インタラクティブな顔デモ</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/products.2019-11-26%2017_40_45.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0274.2019-11-26%2014_50_05.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この例では、折れ線グラフ機能を使用してWio Terminal上でGrove - 光センサーの読み取り値を表示する方法を示しています。まるでシリアルプロッターのようです！さらに、光センサーのデータはSDカードに保存されます。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この例では、SDカードから画像をループで表示する方法を示しています。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この例では、SDカード（BMP形式）を使用してLCD画面に複数の画像（目）を表示する方法を示しています。また、内蔵ボタンとジャイロスコープを使用してユーザーと対話することができます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Storting-Analog-Data/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Displaying-Photos/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Interactive-Face/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### プロジェクト

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Wio Terminalを使用した圧力センサー</th>
      <th class="table-trnobg">Wio Terminalを使用したコロナウイルスライブデータの読み取り</th>
      <th class="table-trnobg">Wio Terminalを使用した赤外線サーマルイメージングカメラの構築</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/pre_temp_222gGIF.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/COVID-19.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IRcamera.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このデモでは、Grove - 高精度圧力センサーDPS310がWio Terminalと完全に互換性があり、その測定が高精度であることを示しています。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このWikiはWio Terminalを使用したGithubリポジトリ統計の読み取りを改良したもので、Coronavirus COVID19 APIにアクセスし、データを解析してLCD画面にライブCOVID-19データを表示するように変更されています。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Grove - 赤外線温度センサーアレイ（AMG8833）とWio Terminalを使用することで、低コストでFLIR™のようなサーマルイメージングカメラを簡単に構築できます！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Barometric-Pressure-sensor-using-the-Wio-terminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Reading-COVID19/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Thermal-Camera/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Raspberry Pi 用 HMI ディスプレイを構築する</th>
      <th class="table-trnobg">Wio Terminal を使用して騒音レベルを測定する方法</th>
      <th class="table-trnobg">Wio Terminal を使用して GitHub にアクセスする方法</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/Wio-Terminal-HMI.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Sound-Meter/sound-Meter_gGIF.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Github.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、Wio Terminal を HMI (Human Machine Interface) USB ディスプレイとして使用し、Raspberry Pi、Nvidia Jetson Nano、BeagleBone、さらには Odyssey X86J4105 に接続する方法を紹介します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この例では、ReSpeaker 2-Mic Hat のマイクを使用して dB を検出します。周囲の環境が検出され、その結果がディスプレイに表示されます。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、Wio Terminal を使用して HTTPS サーバーにアクセスする方法を紹介します。これにより、Wio Terminal を使用してインターネットからライブデータを取得することが可能になります！ここでは、Wio Terminal を Wi-Fi に接続し、GitHub からデータを取得します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-HMI/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Sound-Meter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Reading-Github/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Wio Terminal 用 Blynk</th>
      <th class="table-trnobg">Edge Impulse Tuner</th>
      <th class="table-trnobg">Codecraft を使用して Azure IoT に Wio Terminal を接続する</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/banner.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EON-Tuner/connecttuner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CCandAzure/jihe.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、Wio Terminal を Blynk ソフトウェアと連携させて Wi-Fi または Bluetooth を操作する方法を紹介します。これにより、Wio Terminal を IoT デバイスの中心として使用し、スマートフォンから簡単にハードウェアを制御することができます！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>ここでは、音声分類プロジェクトを提供し、EON Tuner の使用方法を紹介します。Wio Terminal と Edge Impulse を使用して LoRa を介してデータを送信することに興味がある場合は、例のプロジェクトをクリックして確認できます。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>ここでは、Wio Terminal を基に Codecraft を Azure IoT に接続し、センサーを IoT プロジェクトに適用する方法を紹介します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Blynk/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Edge-Impulse-Tuner/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Azure_IoT_CC/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストを用意しており、それは私たちの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)の一環として分類されています。私たちはユーザー体験を向上させ、Wikiプラットフォームの開発を通じてより良いサポートを提供することに専念しています。
- [このページへのあなたの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962236)は私たちにとって非常に重要です！あなたの意見を大切にしており、アイデアの生成におけるご協力を心から感謝します。

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>