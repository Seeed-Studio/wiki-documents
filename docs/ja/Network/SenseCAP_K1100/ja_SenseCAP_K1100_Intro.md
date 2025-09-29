---
description: SenseCAP K1100 ガイド - センサープロトタイプキット
title: SenseCAP K1100 ガイド - センサープロトタイプキット
keywords:
- SenseCAP Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_K1100_Intro
last_update:
  date: 05/15/2025
  author: Frank
---


## はじめに

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/___-1-_-7_1_.png" style={{width:800, height:'auto'}}/></div>

SenseCAP K1100 は、シームレスなデータ収集と分析を提供する包括的で最先端の環境モニタリングキットです。高度なセンサーと接続オプションを統合しており、さまざまな環境モニタリング用途に対応する汎用性の高いソリューションです。このキットは、効率的に堅牢な IoT ソリューションをプロトタイプ化および展開したい開発者、研究者、趣味愛好家に最適です。

## 真の野外環境のアイデア

SenseCAP K1100 プロトタイプキットは、初期のコンセプト開発と実際の展開のギャップを埋めます。ユーザーが環境モニタリングソリューションを迅速に作成し、テストした後、フィールドに展開することを可能にします。このプロトタイプから真の野外環境への移行により、デバイスが信頼性が高く、耐久性があり、さまざまな環境条件に耐えられることが保証されます。

## SenseCAP K1100 の使い方

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>センサープロトタイプキットの紹介</font></th>
      <th class="table-trnobg"><font size={"4"}>SenseCraft を使った迅速かつコード不要の開始</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/banner.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100-quick-start/step.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このチュートリアルでは、オープンソースプロジェクトを使用して、データ収集とデータ処理の楽しさを最短時間で体験できます。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 私たちはユーザーが IoT を体験するための2つの方法を提供しています。一つは LoRa®、もう一つは WiFi です。このチュートリアルでは、それらの使い方を学ぶことができます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-quickstart/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## LoRaWAN-ネットワークアプリケーション

### Arduinoを使用したセンサーの基本的な使い方

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Wio Terminal 光センサー</th>
      <th class="table-trnobg">Wio Terminal IMUセンサー</th>
      <th class="table-trnobg">Grove 土壌湿度センサー</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/102.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/137.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/162.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、光センサーの動作、Wio Terminalを使用してセンサーデータを取得する方法、およびWio TerminalとGrove - Wio-E5を使用してデータを送信する方法について詳しく説明します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、IMUセンサーの動作、Wio Terminalを使用してセンサーデータを取得する方法、およびWio TerminalとGrove - Wio-E5を使用してデータを送信する方法について詳しく説明します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、Grove土壌湿度センサーの動作、Wio Terminalを使用してセンサーデータを取得する方法、およびWio TerminalとGrove - Wio-E5を使用してデータを送信する方法について詳しく説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Light-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-IMU-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Grove VOCおよびeCO2ガスセンサー (SGP30)</th>
      <th class="table-trnobg">Grove 温湿度センサー (SHT40)</th>
      <th class="table-trnobg">Grove Vision AIモジュール</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/168.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/165.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/197.jpeg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、Grove VOCおよびeCO2ガスセンサーの動作、Wio Terminalを使用してセンサーデータを取得する方法、およびWio TerminalとGrove - Wio-E5を使用してデータを送信する方法について詳しく説明します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、Grove温湿度センサーの動作、Wio Terminalを使用してセンサーデータを取得する方法、およびWio TerminalとGrove - Wio-E5を使用してデータを送信する方法について詳しく説明します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このセクションでは、Grove Vision AIモジュールの動作、Wio Terminalを使用してセンサーデータを取得する方法、およびWio TerminalとGrove - Wio-E5を使用してデータを送信する方法について詳しく説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Vision-AI-Module-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>


### クラウドサービス

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Helium クラウドサービス</th>
      <th class="table-trnobg">TTN クラウドサービス</th>
      <th class="table-trnobg">SenseCAP & Node-Red クラウドサービス</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/25.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/k1100-nodered/node-red.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この章では、Heliumコンソールの操作方法を紹介し、Heliumコンソールの第一印象を得るための説明を行います。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この章では、TTNコンソールの操作方法を紹介し、TTNコンソールの第一印象を得るための説明を行います。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Node-REDは、ハードウェアデバイス、API、オンラインサービスを新しい方法で接続するためのプログラミングツールです。SenseCAP & Node-REDに関する一連のチュートリアルを行います。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1100-Vision-AI-Module-Grove-LoRa-E5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Wi-Fi ネットワークアプリケーション

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">高度な Wi-Fi 使用法</th>
      <th class="table-trnobg">クラウドサービス</th>
      <th class="table-trnobg">Azure IoT プラットフォームの使用</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/k1100_ubidots/1.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、HTTPClient、DNSServer、WebServer ライブラリなど、Wi-Fi の高度なライブラリ使用法を紹介します。これらのライブラリを実装することで、シンプルな API を使用して IoT プロジェクトを開発することができます。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この章では、Wio Terminal を使用して Ubidots、Blynk、Google Cloud に接続する方法を案内します。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>このチュートリアルでは、Wio Terminal を Microsoft Azure IoT Central に接続し、3 軸加速度センサー、光センサー、3 つのボタンなど、Wio Terminal のオンボードセンサー/ハードウェアから Microsoft Azure IoT Central にテレメトリデータを送信するプロセスを説明します。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Wio-Terminal-Advanced-WiFi/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Getting_started_with_Ubidots/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Connect-Wio-Terminal-to-Azure-IoT-Central/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>


## 組み込み ML アプリケーション

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Edge Impulse を使用した内蔵センサー</font></th>
      <th class="table-trnobg"><font size={"4"}>カスタマイズ可能なモデルを使用した Vision AI</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/intergration.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この記事では、Edge Impulse を使用してモデルを生成し、クラウドに接続するソリューションを紹介します。デモでは Google スプレッドシートを使用します。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>この Wiki では、特定のアプリケーション向けに独自の AI モデルをトレーニングし、それを Grove - Vision AI モジュールに簡単にデプロイする方法を説明します。さあ、始めましょう！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1111-Edge-Impulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/Vision_AI_with_Customizable_Models/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## プロジェクトセクション

各プラットフォーム向けの基本的なチュートリアルに加えて、このキットの使用例を豊富に準備しました。このキットの価値が無限であることをここで確認できます！

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>持続可能な地球のためのIoT Into the Wildコンテスト 2022</font></th>
      <th class="table-trnobg"><font size={"4"}>カスタマイズ可能なモデルを使用したVision AI</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/K1100_overview/000000.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> この素晴らしいキットを使用して参加者が制作したプロジェクトを共有できることを嬉しく思います。彼らのプロジェクトを参考にして、さらに多くの可能性を探ることができます！</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> このWikiでは、Wio Terminalを使用して、キットに含まれるGrove - Wio-E5およびGrove - 土壌湿度センサーをリンクし、それらをHeliumおよびAzure IoT Centralプラットフォームに接続して、リアルタイムの庭の植木モニターと水やりリマインダーを構築する方法を紹介します。これにより、IoTの一端を垣間見ることができます。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/IoT-into-the-wild-contest/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/K1111-Quick-Start-Guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## ✨ コントリビュータープロジェクト

- このページを更新するためのタスクリストを用意しており、[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)のカテゴリに分類されています。私たちはユーザー体験を向上させ、Wikiプラットフォームの開発を通じてより良いサポートを提供することに専念しています。
- [このページへの貢献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962909)は私たちにとって非常に重要です！皆様のご意見を大切にしており、アイデアの生成にご協力いただけると幸いです。

## SenseCAP 技術サポート

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>