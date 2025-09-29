---
description: FUXA を使い始める
title: FUXA を使い始める - Web ベースの SCADA ツール
keywords:
  - reTerminal Dm
  - Getting started
  - SCADA
  - Industrial 
  - FUXA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM_intro_FUXA
last_update:
  date: 1/27/2024
  author: Kasun Thushara
---

## SCADA とは？

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-demo.gif" /></center>

**監視制御・データ収集システム（SCADA）** は、プロセスの監視と制御を目的として設計された産業環境における重要なシステムです。これは**産業ネットワーク全体の様々なセンサーやデバイスからリアルタイムデータを収集する集中プラットフォーム**として機能します。SCADA により、オペレーターは**このデータを視覚化、分析、対応することができ、効率的な意思決定を促進**します。さらに、**リモートアクセスと制御機能を提供し、オペレーターが中央の場所からプロセスを管理**できるようにします。SCADA の統合により、システム全体の包括的な概要と制御を提供することで、産業運用の全体的な効率性、安全性、信頼性が向上します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-editor.png" /></center>

## FUXA

FUXA は堅牢な Web ベースソフトウェアとして、スケーラブルな SCADA、HMI、ダッシュボード、または IIoT システムの迅速な作成と展開を可能にします。FUXA を使用することで、自動化された産業プラントにおいてリアルタイムデータを表示し、機器を制御する、機械に合わせた現代的なプロセス視覚化を作成する能力を持つことができます。

## 使い始める

このプロジェクトを開始する前に、ここで説明されているようにハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェアの準備

公式ウェブサイトから Raspberry Pi 64 bit OS の **Bullesye** バージョンをインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この[**ガイド**](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/)で説明されている手順に従ってください。

## reTerminal DM への FUXA のインストール

:::note

Node バージョン 18 がインストールされている必要があります。以下のコマンドをターミナルで一つずつ実行してください。

:::

```sh
wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz

tar -xf node-v18.20.3-linux-arm64.tar.xz

cd node-v18.20.3-linux-arm64
    
sudo cp -R * /usr/local/
    
node -v
    
npm -v

```

**次に NPM から FUXA をインストールします**

```sh
sudo npm install -g --unsafe-perm @frangoteam/fuxa-min

sudo fuxa

```

FUXA UIは以下のURLで利用できます：**`http://localhost:1881`**。

基本的にFUXA Webサーバーは2つのページを提供します：

- エンドユーザー向けの可視化 **`http://localhost:1881/home`**
- プロジェクトと設計のためのエディター **`http://localhost:1881/editor`**

## デバイスとタグの追加方法

デバイスとの接続を確立するには、まず必要なデバイス認証情報を取得することが最初のステップです。FUXAはModbus RTU/TCP、Siemens S7プロトコル、OPC-UA、BACnet IP、MQTT、Ethernet/IP（Allen Bradley）など、さまざまなデバイスをサポートしています。デバイスに接続した後、ライブ値、タグ、センサーなどのサブスクリプションを設定できます。

**ステップ1**

設定メニューに移動し、「Connections」を選択してデバイス設定にアクセスします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/tagdevice.PNG" /></center>

**ステップ2**

画面下部にある「+」アイコンをクリックします。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/devicesadd.PNG" /></center>

**ステップ3**

この例では、MQTTサーバーに接続します。デバイスタイプ（Modbus RTU/TCP、Siemens S7プロトコル、OPC-UA、BACnet IP、MQTT、またはEthernet/IP）に応じて、適切な接続タイプを選択します。

**詳細については** [こちらをクリック](https://github.com/frangoteam/FUXA/wiki/HowTo-Devices-and-Tags)

デバイスタイプを選択し、ポーリング間隔を希望する秒数に設定し、有効にします。その後、アドレス、クライアントID、ユーザー名、パスワードを含む必要な認証情報をサーバーに提供します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtdevice.PNG" /></center>

## タグの選択

**ステップ1**

その後、MQTTサーバーへの接続が成功したことを示す緑色のインジケーターが表示されます。続いて、アタッチアイコンをクリックします。

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtgreen.PNG" /></center>

**ステップ2**

「+」アイコンをクリックしてMQTTブローカーを追加します。関連するトピックをサブスクライブし、検索アイコンをクリックして続行します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe.png" /></center>

**ステップ3**

次に、サブスクリプション用にリストから希望するトピックを選択します。名前を入力し、「Subscribe」をクリックします。複数のトピックをサブスクリプション用に追加する柔軟性があります。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe2.png" /></center>

トピックをパブリッシュするには、それを指定する必要があります。識別用の名前を入力し、トピックを指定します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/publishmqqt.png" /></center>

その後、トピックのリストが表示され、パブリッシュまたはサブスクライブを選択できます。

## スライダーを使用してエンドデバイスに送信される値を調整する

この例では、コントローラーをデバイスタグにバインドします。Controlタブは値を入力するためのさまざまな機能を提供しており、この場合はスライダーを使用します。スライダーは特定の要件に合わせてカスタマイズできます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-slider-control.gif" /></center>

## デバイスからのデータ表示

システムには、表示すべきセンサー値があるかもしれません。この目的のために、円形ゲージ、バーゲージなどのツールを利用できます。このデモンストレーションでは、Controlsタブにある円形ゲージを使用します。

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/gauge.png" /></center>

次に、円形ゲージを変更するためのインタラクティブなユーザーインターフェースが表示されます。タグを選択し、お好みに応じてカスタマイズしてください。細分化に分割し、これらの分割に色を割り当て、テキストの位置を変更するなど、その他のカスタマイズ機能もあります。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/bar.gif" /></center>

## プロセスエンジニアリング要素の追加

このセクションでは、**ポンプ、モーター、ブロワー、タンク、ミキサー**などの豊富なプロセスエンジニアリングコンポーネントを発見できます。デモンストレーションでは、ポンプのオンとオフの色の設定に焦点を当てます。関連するタグを選択し、オンとオフの両方の状況に対する色を指定するだけです。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/processengineer.gif" /></center>

## パイプのアニメーション方法

まずパイプの形状をデザインし、次にDevice-Tag（変数）をアニメーションにバインドしてアクションを定義します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-pipe.gif" /></center>

## チャートの追加方法

ビューにチャートコントロールを追加するには、エディターに移動してビューを選択します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-chart.gif" /></center>

## アラームの追加方法

アラームを追加するには、エディターウィンドウの設定に移動し、**Alarms**を選択する必要があります。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/setup-alarms.png" /></center>

次に、アラーム設定にはいくつかのオプションがあります：High-High、High、Low、Messagesです。**High-High**では、しきい値を設定してアラームを構成できます。**High**では、値が特定の範囲を超えた場合、2つの重要なポイント間でアラームを設定できます。**Message**は、値が特定のしきい値に達したときにポップアップして消える通知です。**Low**は、センサーデータが特定のレベルを下回ったときにトリガーされます。例えば、タンクの液面レベルが低いときです。このシナリオでも2つの重要な設定ポイントでアラームを設定できます。この例では、**High-High**と**Message**アラームが素晴らしく機能することを実演します。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-alarms.gif" /></center>

アラームを表示するには、デフォルトで非表示になっているため、レイアウトを少し調整する必要があるかもしれません。そのためには、**Layout**に移動し、**Header Navigation Bar**に移動します。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/Layout1.PNG" /></center>

次に、**Alarms notification mode**が**fixed**に設定され、**Info notification mode**も**fixed**に設定されていることを確認してください。この構成により、SCADAシステムを操作する際にアラーム通知を表示できます。

<center><img width={650} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/layoutalarms.PNG" /></center>

<center><img width={750} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/alrmnotification.PNG" /></center>

## デモ

この包括的なデモンストレーションでは、3つのタンクを含むセットアップが構成されており、そのうち2つには様々な溶液が満たされています。さらに、2つの独立したバルブとポンプが設置されており、溶液を混合タンクに移送します。混合プロセスの後、結果として得られる溶液を取得するための別のバルブが配置されています。この操作全体を通じて、混合タンクの温度が継続的に監視されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif" /></center>

このwikiの作成を通じてサポートとガイダンスを提供してくださった**frangoteam**に心より感謝いたします。FUXAプロジェクトの詳細については、以下のリソースタブをご参照ください。

## リソース

- **[Web Page]** [FUXA公式ドキュメント](https://github.com/frangoteam/FUXA/wiki)

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、様々なサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
