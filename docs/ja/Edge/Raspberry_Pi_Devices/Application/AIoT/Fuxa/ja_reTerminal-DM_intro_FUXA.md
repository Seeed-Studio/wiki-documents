---
description: FUXAの使い方を始める
title: FUXAの使い方を始める - WebベースのSCADAツール
keywords:
  - reTerminal Dm
  - 初めての使用
  - SCADA
  - 産業
  - FUXA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM_intro_FUXA
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## SCADAとは？

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-demo.gif" /></center>

**SCADA（監視制御およびデータ収集）**は、産業環境においてプロセスを監視および制御するために設計された重要なシステムです。これは、**産業ネットワーク全体のさまざまなセンサーやデバイスからリアルタイムデータを収集する集中型プラットフォーム**として機能します。SCADAは、オペレーターが**このデータを視覚化、分析、対応することで効率的な意思決定を可能にします**。さらに、**リモートアクセスおよび制御機能を提供し、オペレーターが中央の場所からプロセスを管理できるようにします**。SCADAの統合により、システム全体の包括的な概要と制御が提供され、産業運用の全体的な効率、安全性、信頼性が向上します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-editor.png" /></center>

## FUXA

FUXAは、スケーラブルなSCADA、HMI、Dashboard、またはIIoTシステムを迅速に作成および展開するための強力なWebベースのソフトウェアです。FUXAを使用すると、機械に合わせた現代的なプロセスの視覚化を作成し、リアルタイムデータを表示し、自動化された産業プラント内の機器を制御することができます。

## 始め方

このプロジェクトを始める前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェアの準備

公式ウェブサイトからRaspberry Pi 64ビットOSの**Bullseye**バージョンをインストールすることをお勧めします。新しいRaspbian OSをインストールしたい場合は、この[**ガイド**](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/)に従ってください。

## reTerminal DMへのFUXAのインストール

:::note

Nodeバージョン18をインストールする必要があります。以下のコマンドを1つずつターミナルで実行してください。

:::

```sh
wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz

tar -xf node-v18.20.3-linux-arm64.tar.xz

cd node-v18.20.3-linux-arm64
    
sudo cp -R * /usr/local/
    
node -v
    
npm -v

```

**次にNPMからFUXAをインストールします**

```sh
sudo npm install -g --unsafe-perm @frangoteam/fuxa-min

sudo fuxa

```
FUXAのUIは以下のURLで利用可能です: **http://localhost:1881**

FUXAのWebサーバーは主に2つのページを提供します:

- エンドユーザー向けのビジュアライゼーション **http://localhost:1881/home**
- プロジェクトとデザイン用のエディター **http://localhost:1881/editor**

## デバイスとタグを追加する方法

デバイスとの接続を確立するための最初のステップは、必要なデバイス認証情報を取得することです。FUXAは、Modbus RTU/TCP、Siemens S7 Protocol、OPC-UA、BACnet IP、MQTT、Ethernet/IP (Allen Bradley) など、さまざまなデバイスをサポートしています。デバイスに接続した後は、ライブ値、タグ、センサーなどの購読を設定することができます。

**ステップ 1**

設定メニューに移動し、「Connections」を選択してデバイス設定にアクセスします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/tagdevice.PNG" /></center>

**ステップ 2**

画面下部にある「+」アイコンをクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/devicesadd.PNG" /></center>

**ステップ 3**

この例では、MQTTサーバーに接続します。デバイスの種類（Modbus RTU/TCP、Siemens S7 Protocol、OPC-UA、BACnet IP、MQTT、またはEthernet/IP）に応じて適切な接続タイプを選択してください。

**詳細については** [こちらをクリック](https://github.com/frangoteam/FUXA/wiki/HowTo-Devices-and-Tags)

デバイスの種類を選択し、ポーリング間隔を希望する秒数に設定して有効化します。その後、サーバーに必要な認証情報（アドレス、クライアントID、ユーザー名、パスワード）を入力します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtdevice.PNG" /></center>

## タグを選択する

**ステップ 1**

その後、MQTTサーバーへの接続が成功したことを示す緑色のインジケーターが表示されます。次に、アタッチアイコンをクリックします。

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtgreen.PNG" /></center>

**ステップ 2**

「+」アイコンをクリックしてMQTTブローカーを追加します。関連するトピックを購読し、次に検索アイコンをクリックして続行します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe.png" /></center>

**ステップ 3**

次に、購読するトピックをリストから選択します。名前を入力し、「Subscribe」をクリックします。複数のトピックを購読することも可能です。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe2.png" /></center>

トピックを公開するには、指定する必要があります。識別用の名前を入力し、トピックを指定してください。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/publishmqqt.png" /></center>

その後、トピックのリストが表示され、公開または購読するかを選択できます。

## スライダーを使用してエンドデバイスに送信する値を調整する

この例では、コントローラーをデバイスタグにバインドします。「Control」タブには値を入力するためのさまざまな機能があり、この場合はスライダーを使用します。スライダーは特定の要件に合わせてカスタマイズできます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-slider-control.gif" /></center>

## デバイスからデータを表示する

システム内でセンサー値を表示する必要がある場合があります。この目的のために、Circular Gauge、Bar Gaugeなどのツールを利用できます。このデモでは、「Controls」タブにあるCircular Gaugeを使用します。

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/gauge.png" /></center>

次に、Circular Gaugeを変更するためのインタラクティブなユーザーインターフェースが表示されます。タグを選択し、好みに応じてカスタマイズします。分割数を設定したり、これらの分割に色を割り当てたり、テキストの位置を変更したりするなど、さまざまなカスタマイズ機能があります。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/bar.gif" /></center>

## プロセスエンジニアリングの要素を追加する

このセクションでは、**ポンプ、モーター、ブロワー、タンク、ミキサー**など、多くのプロセスエンジニアリング要素を見つけることができます。デモンストレーションでは、ポンプのオンとオフの色を設定する方法に焦点を当てます。関連するタグを選択し、オンとオフの両方の状況に対して色を指定するだけです。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/processengineer.gif" /></center>

## パイプをアニメーション化する方法

まず、パイプの形状をデザインし、その後、デバイスタグ（変数）をアニメーションにバインドすることで動作を定義します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-pipe.gif" /></center>

## チャートを追加する方法

ビューにチャートコントロールを追加するには、エディタに入り、ビューを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-chart.gif" /></center>

## アラームを追加する方法

アラームを追加するには、エディタウィンドウの設定に移動し、**Alarms** を選択します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/setup-alarms.png" /></center>

次に、アラームを設定するためのいくつかのオプションがあります：High-High、High、Low、そして Messages です。**High-High** では、しきい値を設定し、アラームを構成できます。**High** では、値が特定の範囲を超えた場合に、2つの重要なポイント間でアラームを設定できます。**Message** は、値が特定のしきい値に達したときにポップアップして消える通知です。**Low** は、センサーデータが特定のレベルを下回ったときにトリガーされます。例えば、タンクの液体レベルが低い場合です。このシナリオでは、2つの重要な設定ポイントに対してアラームを設定することもできます。この例では、**High-High** と **Message** アラームの機能が優れていることを示します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-alarms.gif" /></center>

アラームを表示するには、レイアウトを少し調整する必要がある場合があります。デフォルトでは非表示になっているためです。そのためには、**Layout** に移動し、**Header Navigation Bar** を選択します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/Layout1.PNG" /></center>

次に、**Alarms notification mode** を **fixed** に設定し、**Info notification mode** も **fixed** に設定します。この構成により、SCADAシステムを操作する際にアラーム通知を表示できるようになります。

<center><img width={650} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/layoutalarms.PNG" /></center>

<center><img width={750} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/alrmnotification.PNG" /></center>

## デモ

この包括的なデモでは、3つのタンクがセットアップされており、そのうち2つにはさまざまな溶液が入っています。さらに、2つの独立したバルブとポンプがあり、溶液を混合タンクに移送します。混合プロセスの後、別のバルブを使用して得られた溶液を取り出します。この操作全体を通じて、混合タンクの温度が継続的に監視されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif" /></center>

このWikiの作成においてサポートとガイダンスを提供してくださった **frangoteam** に心より感謝申し上げます。FUXAプロジェクトの詳細については、以下のリソースタブをご参照ください。

## リソース

- **[ウェブページ]** [FUXA公式ドキュメント](https://github.com/frangoteam/FUXA/wiki)


# 技術サポート

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>