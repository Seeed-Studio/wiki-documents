---
description: この記事では主にfuxaを使用してSCADAを実現する方法を紹介します。

title: reComputer R1000でfuxaを使用してSCADAを実現
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - SCADA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fuxa_achieve_scada
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## はじめに

FUXAはWebベースのプロセス可視化（SCADA/HMI/ダッシュボード）ソフトウェアです。FUXAを使用すると、機械用の個別設計による現代的なプロセス可視化とリアルタイムデータ表示を作成できます。Modbus RTU/TCP、Siemens S7プロトコル、OPC-UA、BACnet IP、MQTT、その他のプロトコルをサポートしています。

この記事では主にfuxaを使用してSCADAを実現する方法を紹介します。記事では、fuxaが`node-red`と`OPC UA Simulator`からデータを受信し、`chart`と`Circular Gauge`を使用して表示します。同時に、工業プロセスをシミュレートするための一連のパターンを描画します。

## はじめに

このプロジェクトを開始する前に、ここで説明されているようにハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェアの準備

- Python 3.11はfuxaと互換性がない可能性があります。Pythonバージョンが3.11の場合は、別のPythonバージョンへの変更を検討してください。

- reComputer R1000で[fuxa](https://github.com/frangoteam/FUXA)を使用します。reComputer R1000にfuxaをインストールするには、以下の手順を参照してください。

  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

- fuxa を使用して OPC-UA データ相互作用を実装する方法については、この [wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_opc_ua/) を参照してください。

- fuxa を使用して mqtt クライアントとのデータ相互作用を実装する方法については、この [wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_mqtt_client/) を参照してください。この wiki とは異なり、`node-red` で公開するデータは `function` モジュールで処理され、`loop` モジュールが継続的な公開に使用されます。`function` モジュールのコードは以下の通りです：

  ```java
  ## On Start
    global.set('firstTank', '10000');
    global.set('secondTank', '0');
    global.set('thirdTank', '0');
  ```

  ```java
  ## On Message
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

  主な作業は、firstTank、secondTank、thirdTankをjson形式にカプセル化し、mqtt-outモジュールに公開させることです。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/node-red-mqtt.png" /></center>

- fuxaの右下角の`+`ボタンをクリックし、`Name`、`Type`を入力し、`Internal`を選択し、最後に`OK`をクリックして新しいモジュールを取得します。このモジュールは外部デバイスとの通信機能はありませんが、カスタムタグを追加することができます。これらのタグは`boolean`、`number`、`string`などの3つのデータタイプをサポートし、後続の作業を便利にします。

    <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_internal.gif" /></center>

### ハードウェア構成

イーサネットケーブルを使用してW10 PCとreComputer R1000をスイッチに接続し、同じネットワークセグメント上にあることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## ビジュアル表示とメインコントロールの紹介

### チャート

fuxaには曲線チャートとヒストグラムが利用できます。曲線チャートを例に取ると、`Chart`のプロパティは図に示すとおりです。`Chart`の`Name`、`フォントサイズ`、`データ形式`、`時間形式`、`X軸とY軸のスタイル`などのプロパティを設定できます。最も重要なのは`Chart to show`で、これは表示したいデータソースと線の形式を決定します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/chart_property.png" /></center>

`Chart to show`をクリックし、`New Chart`を選択すると、新しいポップアップウィンドウが表示されます。新しいポップアップウィンドウの右上角の`+`ボタンをクリックし、`Name`を入力し、`OK`をクリックすると、新しい線の設定を正常に作成できます。次に、新しく作成した線の設定をクリックし、`Add Line`をクリックし、表示したいデータを選択し、最後に`OK`をクリックすると、新しい曲線が表示されます。このプロセスを通じて複数の曲線を追加できます。最後に`OK`をクリックして設定を完了します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/new_chart_line_confiigure.png" /></center>

ここでは`Chart`を使用して`Prosys OPC UA Simulation Server`からのデータを表示します。データがグラフの形式で正常に表示されていることがわかります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_chart.gif" /></center>

### スイッチ

スイッチの属性は図に示すとおりです。`swich_1`という名前のbooleanデータをスイッチ状態として選択します。オンまたはオフ時の`swich`の表示状態を設定でき、色の設定、テキスト表示などが含まれます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/swich_property.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_swich.gif" /></center>

### シェイプ

Fuxaは、ユーザーが産業用可視化インターフェースを描画するための様々な`shape`を提供します。各`shape`には`Property`、`Events`、`Actions`の3つの属性があります。
その中で、`Property`は主に`shape`の色を設定するために使用されます。`Tag`をバインドすることで、`shape`は`Tag`値の変化に応じて異なる色を表示します。右上角の`+`をクリックして異なる色を設定できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_property.png" /></center>

ここでは倉庫パターンを例に取り、`Property`でその色を塗りつぶします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/fill_color.gif" /></center>

`Events`には主に2つの内容があり、`Type`はイベントタイプを表し、`Action`はイベントがトリガーされた後のアクションを表します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shap_setting_Events.gif" /></center>

`Actions`は`Tag`にバインドする必要があり、異なる`Tag`値は異なるアクションをトリガーできます。`Min`と`Max`の値を設定し、`Type`オプションで希望するアクションを選択します。`Tag`データがMinとMaxの間の区間に達すると、対応するアクションがトリガーされます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/shape_setting_actions.png" /></center>

ここでは倉庫パターンを例に取り、`Actions`を通じてその回転と停止を制御します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/turn_use_action.gif" /></center>

### パイプ

産業プロセスを表示する際、`pipe`を使用して産業材料の流れ方向を表すことができます。パイプのプロパティは図に示すとおりです。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/pipe_prorety.png" /></center>

`Property`部分では、パイプの幅、色などのプロパティを設定できます。`Actions`も`Tag`にバインドする必要があります。異なるタグ値により、パイプラインは異なるアクションを持つことができます。主に4つのアクションがあります：`Stop`、`Turn clockwise`、`Turn anticlockwise`、`Hide conten`。この記事では`Stop`と`Turn clockwise`の2つのアクションを示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/creat_pipe.gif" /></center>

産業プロセスをシミュレートするために、2つのタンクといくつかのパイプなどのパターンを追加しました。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/after_add.gif" /></center>

### 円形ゲージ

`charts`に加えて、`Circular Gauge`もリアルタイムでデータを表示できます。3つの`Circular Gauge`が利用できます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/three_gauge.png" /></center>

使用時には、`Tag`をバインドして表示するデータを指定する必要があります。同時に、計器が表示できるデータの最大範囲を指定する必要があります。また、計器パネル上の線などの属性も設定できます。ここでは、表示用に`/dev/fromfuxa`トピック内の`Tank1`のデータを選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/gauge_show_data.gif" /></center>

その後、`Tank2`と`Tank3`のデータも`Circular Gauge`を通じて表示し、各タンクの現在の容量を示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/add_gauge.gif" /></center>

### Slider

スライダーを使用して、流量、圧力などの変数を調整します。その属性は図に示すとおりです。色と形式を設定できます。使用時には`Tag`をバインドする必要があります。そうすると、スライダーは`Tag`の値をリアルタイムで調整できます。ここでは、カスタムの`Flow control 1`タグをバインドします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider_property.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/slider.gif" /></center>

### Alarm

産業プロセスでは、特定のパラメータ（圧力など）が過度になると危険を引き起こす可能性があります。この時、スタッフにここで何らかの問題が発生している可能性があることを知らせるアラームが必要です。Fuxaは特定の値のリアルタイム監視をサポートし、値が特定の危険範囲に達したときにアラームをトリガーします。
デフォルトでは、fuxaのインターフェースはアラームバーを開いていません。アラームバーを開くには設定が必要です。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/start_alarm.gif" /></center>

アラームバーが開かれた後、アラームを設定できます。左上の設定ボタンをクリックし、次に`Alarms`をクリックし、新しいウィンドウで`+`をクリックするとアラーム設定ウィンドウが表示されます。この時、`Tag`をバインドする必要があり、システムは`Tag`の値を監視します。`Alarms`には4つのレベルがあります：`High High`、`High`、`Low`、`Message`。各レベルに対して`Tag`値の範囲を設定でき、`Tag`値がこの範囲に達すると、対応するレベルのアラートがトリガーされます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/alarm_show.gif" /></center>

### SCADA デモ

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif" /></center>

## 技術サポート・製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
