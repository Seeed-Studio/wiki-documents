---
description: このwikiでは、EdgeBox RPi 200をN3uronとBACnet IoTを使用したビル管理システム（BMS）に活用する方法を探ります。デバイスの統合とシミュレーション方法を学び、BMSソリューションを効果的に強化しましょう。
title: EdgeBox RPi 200でN3uronとBACnetを接続する
keywords:
  - Edge Box Rpi 200
  - Getting started
  - IIoT
  - BMS
  - N3uron
  - BACnet
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /ja/edgebox_rpi_200_n3uron_bacnet
last_update:
  date: 6/20/2024
  author: Kasun Thushara
---

BACnetは、オープンスタンダードであることから、ビル管理システム（BMS）で広く採用されているプロトコルです。これにより、異なるメーカーのデバイス間でのシームレスな統合と通信が可能になります。その人気は柔軟性によっても支えられており、様々なネットワーク構成をサポートし、堅牢な相互運用性を提供します。[N3uron](https://n3uron.com/)は、強力で多用途なプラットフォームであり、効率的なデータ取得と管理を可能にすることでBACnetの機能を強化します。YABE Room SimulatorとBACnet TCPを使用することで、ユーザーはBACnetデバイスをシミュレートし、視覚化することができ、テストと開発を促進します。この組み合わせにより、各技術の強みを活用した包括的で効果的なBMSソリューションへのアプローチが確保されます。

## 前提条件

### ハードウェア

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a></div></td>
    </tr>
  </table>
</div>

### ソフトウェア

[N3uronを始める](https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-n3uron/)ガイドを学習することを強く推奨します。このガイドでは、N3uronのWebインターフェースのナビゲーション、Web UIやWeb Visionモジュールなどの概念の理解、タグの概念の把握、基本的なダッシュボードの作成など、重要な洞察を提供しています。これらの基礎をまだ探索していない場合は、さらに進む前に行うことをお勧めします。提供されたリンクからガイドにアクセスできます。

### YABE

この[リンク](https://sourceforge.net/projects/yetanotherbacnetexplorer/)にアクセスして、YABE（Yet Another BACnet Explorer）をダウンロードしてください。YABEはBACnetデバイスをシミュレートおよび探索できる多機能ツールで、テストや開発目的に最適です。ホストPCにダウンロードしてインストールすると、YABEを使用して室温データをシミュレートし、Edge BoxのNode-REDを使用してそのデータを読み取り、処理します。

### イーサネット設定の構成

PLCのIPドメインがワイヤレス設定と異なるため、IP設定を手動で変更する必要がある場合があります。そのために、

- ステップ01：次のコマンドを実行します：

```sh
sudo nano /etc/dhcpcd.conf
```

- ステップ02: 次に、PLCネットワークドメインに応じてイーサネットポート設定を構成し、'metric'コマンドを使用して優先度を設定します。最も低いメトリックが最も高い優先度を持ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/ipconfig.PNG" /></center>

## N3uronからBACnetクライアントを使用してルームコントロールに接続する

**モジュールの作成**

- `Config => Modules => Model => New Module`に移動します。
  
  <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/Module.PNG" /></center>

**モジュールの設定**

- モジュールに名前を付けます（例：`BACnetClient`）。
- モジュールタイプ（`BacnetClient`）を割り当てます。
- 新しい設定を保存します。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/bacnetmodule.PNG" /></center>

**新しいチャンネルの作成**

- Modelヘッダーの左側にあるボタンをクリックします。
- `New Channel`を選択します。
- チャンネルに名前を付けます（例：`CH01`）。
  
  <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/channeladd.PNG" /></center>

**BACnetクライアントの設定**

- Network interfaceフィールドの右側にある`Network interface discovery`ボタンをクリックします。
- 接続したいネットワークの対応するインターフェースを選択します（例：すべてのインターフェースには`0.0.0.0`を使用）。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/networkad.PNG" /></center>

- デフォルトのBACnet通信ポートは`47808`です（HEXでBAC0）。
- ブロードキャストアドレスは`255.255.255.255`のままにしておきます。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/CH1.PNG" /></center>

- モジュールが設定されたら、`Save`をクリックします。
- モジュールを再起動します。

**デバイスの検出と選択**

- Devicesフィールドの右側にある`Browse Devices`ボタンをクリックします。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/browsedevice.PNG" /></center>

- 接続したい対応するデバイスを検出して選択します。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/searcheddevices.PNG" /></center>

- 他のパラメータはデフォルト値のままにしておきます。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/room_1.PNG" /></center>

- モジュールとデバイスが設定されたら、`Save`をクリックします。
- モジュールを再起動します。

- N3uronの「BACnetブラウザ」が開かれ、デバイスを選択した後、「Rebrowse」をクリックしてオブジェクトのリストを表示します。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/browser.PNG" /></center>

- 「Temperature Indoor」フォルダを見つけて「Model」セクションにドラッグします。「Data」セクションの「Real Time」タブで、「Temperature Indoor」のタグ値が正しく表示されます。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/drag.gif" /></center>

 この時点で接続の準備が整い、ゼロから新しいタグの作成に進むことができます。

## 新しいタグを作成する

- Explorerパネルで`Tags`を選択します。
- Modelパネルで新しいタグを作成し、`PRESENT_VALUE`と名前を付けます。

**タグを設定する**

- 設定パラメータを以下のように設定します：
  - **Type**: `Number`
  - **Format**: `Default`
  - **Client Access**: `R`
  - **Details**:
    - **Description**: `Present value` (オプション)
  - **Scaling**:
    - **Enabled**: `Yes`
  - **Source**:
    - **Enabled**: `Yes`
    - **Module type**: `BacnetClient`
    - **Module name**: `BACnetClient`
    - **Config**:
      - **Scan rate**: `5000`
      - **Property**: 右側のボタンをクリックしてプロパティを参照・検出します。`ANALOG_INPUT:0`を選択し、次に`PRESENT_VALUE`を選択します。書き込み優先度モードで`From device`を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/tag-config.PNG" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/search-tag.png" /></center>

次に、Navigationパネルの Data/Real-Time セクションに移動すると、そのデバイスから読み取られたすべてのデータを確認できるはずです。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/realtime.png" /></center>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
