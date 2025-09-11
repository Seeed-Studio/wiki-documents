---
description: この記事では、fuxaを使用してSCADAを実現する方法を主に紹介します。

title: reComputer R1000とfuxaを使用してSCADAを実現
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - SCADA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fuxa_achieve_scada
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
FUXAは、ウェブベースのプロセス可視化（SCADA/HMI/Dashboard）ソフトウェアです。FUXAを使用すると、機械の個別デザインとリアルタイムデータ表示を備えた最新のプロセス可視化を作成できます。Modbus RTU/TCP、Siemens S7 Protocol、OPC-UA、BACnet IP、MQTTなどのプロトコルをサポートしています。

この記事では、fuxaを使用してSCADAを実現する方法を主に紹介します。記事内では、fuxaが`node-red`と`OPC UA Simulator`からデータを受信し、`chart`や`Circular Gauge`を使用して表示します。同時に、産業プロセスをシミュレートする一連のパターンを描画します。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているようにハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェアの準備
* Python 3.11はfuxaと互換性がない可能性があります。Pythonのバージョンが3.11の場合は、別のバージョンに変更することを検討してください。
* reComputer R1000で[fuxa](https://github.com/frangoteam/FUXA)を使用します。以下の手順に従ってreComputer R1000にfuxaをインストールする方法を参照してください。
  ```shell
    ## Node Version 14 || 16 || 18をインストール済みである必要があります。
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## 次にnpmからFUXAをインストールします
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```
* fuxaを使用してOPC-UAデータのやり取りを実現する方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_opc_ua/)を参照してください。
* fuxaを使用してmqttクライアントとのデータやり取りを実現する方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_mqtt_client/)を参照してください。このwikiとは異なり、`node-red`で公開するデータは`function`モジュールで処理され、`loop`モジュールを使用して継続的に公開されます。`function`モジュールのコードは以下の通りです：
  ```java
  ## 起動時
    global.set('firstTank', '10000');
    global.set('secondTank', '0');
    global.set('thirdTank', '0');
  ```
  ```java
  ## メッセージ受信時
    var firstTank = global.get('firstTank');
    var secondTank = global.get('secondTank');
    var thirdTank = global.get('thirdTank');
    if (firstTank <= 0) {
        global.set('firstTank', 10000);
        global.set('secondTank', 0);
        global.set('thirdTank', 0);
        firstTank=10000;
        secondTank=0;
        thirdTank=0;
    }

    firstTank = firstTank - 3;
    secondTank++;
    thirdTank++;
    thirdTank++;
    global.set('firstTank',firstTank);
    global.set('secondTank',secondTank);
    global.set('thirdTank',thirdTank);
    var data = {
        "firstTank":firstTank,
        "scondTank":secondTank,
        "thirdTank":thirdTank,
    };
    msg.payload = data;
    return msg;
  ```
  主に、firstTank、secondTank、thirdTankをjson形式にカプセル化し、mqtt-outモジュールに公開させます。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/node-red-mqtt.png" /></center>

- fuxaの右下にある`+`ボタンをクリックし、`Name`、`Type`を入力し、`Internal`を選択して最後に`OK`をクリックすると新しいモジュールが作成されます。このモジュールは外部デバイスとの通信機能を持ちませんが、カスタムタグを追加することができます。これらのタグは`boolean`、`number`、`string`の3つのデータ型をサポートしており、後続の作業を容易にします。

    <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_internal.gif" /></center>

### ハードウェア構成

W10 PCとreComputer R1000をスイッチに接続するためにイーサネットケーブルを使用し、同じネットワークセグメントにあることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## 視覚表示と主要コントロールの紹介
### チャート
Fuxa では、曲線チャートとヒストグラムが利用可能です。ここでは曲線チャートを例に説明します。`Chart` のプロパティは以下の図のようになっています。`Chart` の `Name`、`フォントサイズ`、`データ形式`、`時間形式`、`X軸およびY軸のスタイル` などのプロパティを設定できます。最も重要なのは `Chart to show` で、これにより表示したいデータソースと線の形式が決まります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/chart_property.png" /></center>

`Chart to show` をクリックし、`New Chart` を選択すると、新しいポップアップウィンドウが表示されます。この新しいウィンドウの右上にある `+` ボタンをクリックし、`Name` を入力して `OK` をクリックすると、新しい線の設定を作成できます。その後、新しく作成した線の設定をクリックし、`Add Line` をクリックして表示したいデータを選択し、最後に `OK` をクリックすると、新しい曲線が表示されます。このプロセスを繰り返すことで、複数の曲線を追加できます。最後に `OK` をクリックして設定を完了します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/new_chart_line_confiigure.png" /></center>

ここでは `Chart` を使用して `Prosys OPC UA Simulation Server` のデータを表示します。データがグラフ形式で正常に表示されていることが確認できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_chart.gif" /></center>

### スイッチ
スイッチの属性は以下の図のようになっています。`swich_1` という名前のブールデータをスイッチ状態として選択します。スイッチがオンまたはオフのときの表示状態（色の設定、テキスト表示など）を構成できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/swich_property.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_swich.gif" /></center>

### シェイプ
Fuxa は、ユーザーが産業用ビジュアライゼーションインターフェースを描画するためのさまざまな `shape` を提供します。各 `shape` には、`Property`、`Events`、`Actions` の3つの属性があります。
その中で、`Property` は主に `shape` の色を設定するために使用されます。`Tag` をバインドすることで、`Tag` の値の変化に応じて `shape` が異なる色を表示します。右上の `+` をクリックして、異なる色を設定できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_property.png" /></center>

ここでは倉庫のパターンを例に取り、`Property` を使用してその色を塗りつぶします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/fill_color.gif" /></center>

`Events` には主に2つの内容があります。`Type` はイベントの種類を表し、`Action` はイベントがトリガーされた後のアクションを表します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_Events.gif" /></center>

`Actions` は `Tag` にバインドする必要があり、異なる `Tag` の値によって異なるアクションをトリガーできます。`Min` と `Max` の値を設定し、`Type` オプションで希望するアクションを選択します。`Tag` のデータが Min と Max の間の範囲に達すると、対応するアクションがトリガーされます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shape_setting_actions.png" /></center>

ここでは倉庫のパターンを例に取り、`Actions` を使用してその回転と停止を制御します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/turn_use_action.gif" /></center>

### パイプ
産業プロセスを表示する際、`pipe` を使用して産業材料の流れの方向を表すことができます。パイプのプロパティは以下の図のようになっています。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/pipe_prorety.png" /></center>

`Property` 部分では、パイプの幅、色などのプロパティを設定できます。`Actions` も `Tag` にバインドする必要があります。異なる `Tag` の値により、パイプラインに異なるアクションを設定できます。主なアクションは4つあります：`Stop`、`Turn clockwise`、`Turn anticlockwise`、および `Hide content`。この記事では、`Stop` と `Turn clockwise` の2つのアクションを示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_pipe.gif" /></center>

産業プロセスをシミュレートするために、2つのタンクやいくつかのパイプなどのパターンを追加しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/after_add.gif" /></center>

### 円形ゲージ
`チャート` に加えて、`Circular Gauge` もリアルタイムでデータを表示できます。3種類の `Circular Gauge` が利用可能です。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/three_gauge.png" /></center>

使用する際には、`Tag` をバインドして表示するデータを指定する必要があります。同時に、計器が表示できるデータの最大範囲を指定する必要があります。また、計器パネル上の線などの属性を設定することもできます。ここでは、`/dev/fromfuxa` トピックの `Tank1` のデータを選択して表示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/gauge_show_data.gif" /></center>

その後、`Tank2` と `Tank3` のデータも `Circular Gauge` を通じて表示し、それぞれのタンクの現在の容量を示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/add_gauge.gif" /></center>

### スライダー
スライダーを使用して、流量や圧力などの変数を調整します。そのプロパティは以下の図のようになっています。色や形式を設定できます。使用する際には、`Tag` をバインドする必要があります。その後、スライダーは `Tag` の値をリアルタイムで調整できます。ここではカスタム `Flow control 1` タグをバインドします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider_property.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider.gif" /></center>

### アラーム
工業プロセスにおいて、特定のパラメータ（例えば圧力）が過剰になると、危険を引き起こす可能性があります。このような場合、スタッフに問題が発生している可能性を知らせるためにアラームが必要です。Fuxaは、特定の値をリアルタイムで監視し、その値が危険な範囲に達したときにアラームをトリガーする機能をサポートしています。  
デフォルトでは、Fuxaのインターフェースにはアラームバーが表示されていません。アラームバーを表示するには設定が必要です。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/start_alarm.gif" /></center>

アラームバーを開いた後、アラームを設定することができます。左上の設定ボタンをクリックし、次に`Alarms`をクリックします。その後、新しいウィンドウで`+`をクリックするとアラーム設定ウィンドウが表示されます。この時点で、`Tag`をバインドする必要があります。システムはこの`Tag`の値を監視します。  
`Alarms`には4つのレベルがあり、それぞれ`High High`、`High`、`Low`、`Message`です。各レベルに対して`Tag`の値の範囲を設定することができ、`Tag`の値がその範囲に達したときに、対応するレベルのアラートがトリガーされます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/alarm_show.gif" /></center>

### SCADA デモ

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif" /></center>


## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>