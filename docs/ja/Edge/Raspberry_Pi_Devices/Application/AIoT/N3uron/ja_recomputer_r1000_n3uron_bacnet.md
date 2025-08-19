---
description: このWikiでは、N3uronとBACnet IoTを使用して、reComputer 1000をビル管理システム（BMS）に活用する方法を探ります。デバイスの統合とシミュレーションを学び、BMSソリューションを効果的に強化しましょう。
title: reComputer R1000でN3uronとBACnetを接続する
keywords:
  - reComputer R1000
  - 初めての使用
  - IIoT
  - BMS
  - N3uron
  - BACnet
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/recomputer_r1000_n3uron_bacnet
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

BACnetは、異なるメーカーのデバイス間でシームレスな統合と通信を可能にするオープンスタンダードであるため、ビル管理システム（BMS）で広く採用されています。その柔軟性により、さまざまなネットワーク構成をサポートし、強力な相互運用性を提供する点でも人気があります。[N3uron](https://n3uron.com/)は、効率的なデータ収集と管理を可能にする強力で多用途なプラットフォームであり、BACnetの機能を強化します。YABE Room Simulatorを使用してBACnet TCPを利用することで、ユーザーはBACnetデバイスをシミュレートおよび可視化し、テストや開発を容易に行うことができます。この組み合わせにより、各技術の強みを活用した包括的で効果的なBMSソリューションが実現します。

## 必要条件

### ハードウェア

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

### ソフトウェア

[N3uronの使い方](https://wiki.seeedstudio.com/ja/recomputer_r1000_n3uron/)ガイドを学習することを強くお勧めします。このガイドでは、N3uronのWebインターフェースの操作方法、Web UIやWeb Visionモジュールの概念、タグの理解、基本的なダッシュボードの作成などの基本的な知識を提供します。これらの基本をまだ学んでいない場合は、先にこのガイドを確認することをお勧めします。リンクを通じてガイドにアクセスできます。

### YABE

この[リンク](https://sourceforge.net/projects/yetanotherbacnetexplorer/)にアクセスして、YABE（Yet Another BACnet Explorer）をダウンロードしてください。YABEは、BACnetデバイスをシミュレートおよび探索するための多用途なツールであり、テストや開発に最適です。ダウンロードしてホストPCにインストールした後、YABEを使用して室温データをシミュレートし、それをreComputer R1000上のNode-REDで読み取り、処理します。

### BACnet TCP/IP用のイーサネット設定を構成する

PLC/デバイスのIPドメインが無線設定と異なるため、IP構成を手動で変更する必要がある場合があります。そのためには、以下の手順を実行してください。

- **ステップ01**: **Bullseye**を実行している場合、以下のコマンドを実行します。

```sh
sudo nano /etc/dhcpcd.conf
```

- **ステップ02**: 次に、PLC/デバイスのネットワークドメインに従ってイーサネットポート設定を構成し、**metric**コマンドを使用して優先順位を設定します。最も低いメトリック値が最も高い優先順位を持ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG" /></center>

- **ステップ01**: **Bookworm OS**を実行している場合、GUIを使用してネットワークアイコンをクリックします。詳細オプションの下で「接続を編集」を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG" /></center>

- **ステップ02**: 「Wired Connection 2」（ETH 1）を選択し、IPv4設定の下でアドレス、ネットマスク、およびゲートウェイを追加します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG" /></center>

## N3uronを使用してBACnet Clientからルームコントロールに接続する

**モジュールの作成**
- `Config => Modules => Model => New Module`に移動します。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/Module.PNG" /></center>

**モジュールの設定**
- モジュールに名前を付けます（例: `BACnetClient`）。
- モジュールタイプを割り当てます（`BacnetClient`）。
- 新しい設定を保存します。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/bacnetmodule.PNG" /></center>

**新しいチャネルの作成**
- モデルヘッダーの左側にあるボタンをクリックします。
- `New Channel`を選択します。
- チャネルに名前を付けます（例: `CH01`）。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/channeladd.PNG" /></center>

**BACnet Clientの設定**
- ネットワークインターフェイスフィールドの右側にある`Network interface discovery`ボタンをクリックします。
- 接続したいネットワークの対応するインターフェイスを選択します（例: すべてのインターフェイスを使用する場合は`0.0.0.0`を選択）。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/networkad.PNG" /></center>

- デフォルトのBACnet通信ポートは`47808`（HEXでBAC0）です。
- ブロードキャストアドレスは`255.255.255.255`のままにします。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/CH1.PNG" /></center>

- モジュールを設定したら、`Save`をクリックします。
- モジュールを再起動します。

**デバイスの検出と選択**
- デバイスフィールドの右側にある`Browse Devices`ボタンをクリックします。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/browsedevice.PNG" /></center>

- 接続したい対応するデバイスを検出して選択します。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/searcheddevices.PNG" /></center>

- 他のパラメータはデフォルト値のままにします。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/room_1.PNG" /></center>

- モジュールとデバイスを設定したら、`Save`をクリックします。
- モジュールを再起動します。

- N3uronの「BACnet Browser」を開き、デバイスを選択した後、「Rebrowse」をクリックしてオブジェクトのリストを表示します。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/browser.PNG" /></center>

- 「Temperature Indoor」フォルダーを見つけて「Model」セクションにドラッグします。「Real Time」タブの「Data」セクションで、「Temperature Indoor」のタグ値が正しく表示されます。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/drag.gif" /></center>

 この時点で接続が準備完了となり、新しいタグをゼロから作成する準備が整います。

## 新しいタグの作成
- Explorerパネルで`Tags`を選択します。
- Modelパネルで新しいタグを作成し、名前を`PRESENT_VALUE`とします。

**タグの設定**

- 設定パラメータを以下のように設定します：
  - **Type**: `Number`
  - **Format**: `Default`
  - **Client Access**: `R`
  - **Details**:
    - **Description**: `Present value`（任意）
  - **Scaling**:
    - **Enabled**: `Yes`
  - **Source**:
    - **Enabled**: `Yes`
    - **Module type**: `BacnetClient`
    - **Module name**: `BACnetClient`
    - **Config**:
      - **Scan rate**: `5000`
      - **Property**: ボタンをクリックしてプロパティをブラウズして検出します。`ANALOG_INPUT:0`を選択し、次に`PRESENT_VALUE`を選択します。書き込み優先モードでは`From device`を選択します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/tag-config.PNG" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/search-tag.png" /></center>

次に、NavigationパネルのData/Real-Timeセクションに移動すると、そのデバイスから読み取ったすべてのデータが表示されるはずです。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/realtime.png" /></center>

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