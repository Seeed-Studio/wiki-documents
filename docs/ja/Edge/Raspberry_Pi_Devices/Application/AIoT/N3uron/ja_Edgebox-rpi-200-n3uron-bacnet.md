---
description: このWikiでは、EdgeBox RPi 200を使用して、N3uronとBACnet IoTを活用したビル管理システム（BMS）を構築する方法を探ります。デバイスの統合とシミュレーションを学び、BMSソリューションを効果的に強化しましょう。
title: EdgeBox RPi 200でN3uronとBACnetを接続する
keywords:
  - Edge Box Rpi 200
  - 初めての使用
  - IIoT
  - BMS
  - N3uron
  - BACnet
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /ja/edgebox_rpi_200_n3uron_bacnet
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

BACnetは、オープンスタンダードであるため、異なるメーカーのデバイス間でシームレスな統合と通信を可能にすることから、ビル管理システム（BMS）で広く採用されているプロトコルです。その柔軟性により、さまざまなネットワーク構成をサポートし、強力な相互運用性を提供する点でも人気があります。[N3uron](https://n3uron.com/)は、効率的なデータ取得と管理を可能にする強力で多用途なプラットフォームであり、BACnetの機能をさらに強化します。YABE Room Simulatorを使用してBACnet TCPを活用することで、BACnetデバイスをシミュレートおよび視覚化し、テストと開発を容易にします。この組み合わせにより、各技術の強みを活用した包括的で効果的なBMSソリューションが実現します。

## 前提条件

### ハードウェア

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェア

[N3uronの使い方](https://wiki.seeedstudio.com/ja/Edgebox-rpi-200-n3uron/)ガイドを学習することを強くお勧めします。このガイドでは、N3uronのWebインターフェースの操作方法、Web UIやWeb Visionモジュールの概念、タグの概念の理解、基本的なダッシュボードの作成方法など、重要な情報を提供しています。これらの基本をまだ学んでいない場合は、先に学習することをお勧めします。リンクを通じてガイドにアクセスできます。

### YABE

この[リンク](https://sourceforge.net/projects/yetanotherbacnetexplorer/)にアクセスして、YABE（Yet Another BACnet Explorer）をダウンロードしてください。YABEは、BACnetデバイスをシミュレートおよび探索するための多用途なツールであり、テストや開発目的に最適です。ダウンロードしてホストPCにインストールした後、YABEを使用して室温データをシミュレートし、それをEdge Box上のNode-REDで読み取り処理します。

### Ethernet設定の構成

PLCのIPドメインが無線設定と異なるため、IP構成を手動で変更する必要がある場合があります。そのためには以下の手順を実行してください：
- ステップ01: 次のコマンドを実行します：

```sh
sudo nano /etc/dhcpcd.conf
```

- ステップ02: 次に、PLCネットワークドメインに従ってEthernetポート設定を構成し、'metric'コマンドを使用して優先順位を設定します。最も低いメトリック値が最も高い優先順位を持ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/ipconfig.PNG" /></center>

## N3uronを使用したBACnetクライアントによるルームコントロールへの接続

**モジュールの作成**
- `Config => Modules => Model => New Module` に移動します。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/Module.PNG" /></center>

**モジュールの設定**
- モジュールに名前を付けます（例: `BACnetClient`）。
- モジュールタイプを割り当てます（`BacnetClient`）。
- 新しい設定を保存します。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/bacnetmodule.PNG" /></center>

**新しいチャンネルの作成**
- モデルヘッダーの左側にあるボタンをクリックします。
- `New Channel` を選択します。
- チャンネルに名前を付けます（例: `CH01`）。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/channeladd.PNG" /></center>

**BACnetクライアントの設定**
- ネットワークインターフェイスフィールドの右側にある `Network interface discovery` ボタンをクリックします。
- 接続したいネットワークの対応するインターフェイスを選択します（例: すべてのインターフェイスを使用する場合は `0.0.0.0` を選択）。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/networkad.PNG" /></center>

- デフォルトのBACnet通信ポートは `47808`（HEXでBAC0）です。
- ブロードキャストアドレスは `255.255.255.255` のままにします。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/CH1.PNG" /></center>

- モジュールの設定が完了したら、`Save` をクリックします。
- モジュールを再起動します。

**デバイスの検出と選択**
- デバイスフィールドの右側にある `Browse Devices` ボタンをクリックします。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/browsedevice.PNG" /></center>

- 接続したい対応するデバイスを検出して選択します。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/searcheddevices.PNG" /></center>

- 他のパラメータはデフォルト値のままにします。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/room_1.PNG" /></center>

- モジュールとデバイスの設定が完了したら、`Save` をクリックします。
- モジュールを再起動します。

- N3uronの「BACnet Browser」を開き、デバイスを選択した後、「Rebrowse」をクリックしてオブジェクトのリストを表示します。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/browser.PNG" /></center>

- 「Temperature Indoor」フォルダーを見つけて「Model」セクションにドラッグします。「Real Time」タブの「Data」セクションで、「Temperature Indoor」のタグ値が正しく表示されます。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/drag.gif" /></center>

この時点で接続が完了し、新しいタグをゼロから作成する準備が整いました。

## 新しいタグの作成
- Explorerパネルで `Tags` を選択します。
- Modelパネルで新しいタグを作成し、`PRESENT_VALUE` と名付けます。

**タグの設定**

- 以下のように設定パラメータを構成します：
  - **Type**: `Number`
  - **Format**: `Default`
  - **Client Access**: `R`
  - **Details**:
    - **Description**: `Present value`（オプション）
  - **Scaling**:
    - **Enabled**: `Yes`
  - **Source**:
    - **Enabled**: `Yes`
    - **Module type**: `BacnetClient`
    - **Module name**: `BACnetClient`
    - **Config**:
      - **Scan rate**: `5000`
      - **Property**: 右側のボタンをクリックしてプロパティを参照および検出します。`ANALOG_INPUT:0` を選択し、次に `PRESENT_VALUE` を選択します。書き込み優先モードでは `From device` を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/tag-config.PNG" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/search-tag.png" /></center>

次に、ナビゲーションパネルの Data/Real-Time セクションに移動すると、そのデバイスから読み取ったすべてのデータが表示されるはずです。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_bacnet/realtime.png" /></center>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>