---
description: LoRa/LoRaWAN ゲートウェイキット
title: LoRa/LoRaWAN ゲートウェイキット
keywords:
- キット
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LoRa_LoRaWan_Gateway_Kit
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: LoRa/LoRaWAN ゲートウェイキット
category: Wireless
bzurl:  https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3-p-2823.html
prodimagename:
surveyurl: https://www.research.net/r/LoRa_LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3
sku: 110060622
--- -->
<!-- ![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/LoraWan%20Getway%20868MHz.jpg) -->

LoRaは、低消費電力で広域ネットワークを構築するための完璧な長距離無線ソリューションです。これまでに、Seeeduino LoRaWanやGrove LoRa Radioなど、いくつかの「LoRa」ボードをリリースしてきました。また、ユーザーがすぐに使用できる[SenseCAP M2 マルチプラットフォーム LoRaWAN 室内ゲートウェイ](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)も用意されています。しかし、独自のLoRaネットワークを構築したい場合は、以下の3つの要素を準備する必要があります：ゲートウェイ、少なくとも1つのノード、そしてすべてのデバイスを監視できるローカルサーバーです。

このキットには、必要な基本要素がすべて含まれています：Raspberry Pi 3、GPS付きSeeeduino LoRaWAN、およびすべてのLoRaノード間でデータを収集・転送できるゲートウェイとローカルサーバーです。ゲートウェイをSeeeduino LoRaWANやGroveモジュールと接続することで、数分でIoTプロトタイプを構築できます。

ゲートウェイモジュールRHF0M301については、10チャンネル（8 x マルチSF + 1 x 標準LoRa + 1 x FSK）のLoRaWanゲートウェイモジュールで、ボード上に24ピンDIPポートを備えています。ユーザーはRHF0M301をPRI 2ブリッジRHF4T002、Raspberry Pi 3用アダプター、およびRHF0M301と簡単に接続できます。また、868MHzアンテナ、8GB SDカード、USBケーブル、イーサネットケーブル、その他のアクセサリーも含まれています。

<iframe width={800} height={450} src="https://www.youtube.com/embed/4df5kaaKa6I" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

:::caution
USB電源供給が不十分な場合に備えて、必ず3.7Vリポバッテリーを接続してください。このWikiでは868MHzキットを使用していますが、このWikiは868MHzキットと915MHzキットの両方に対応しています。

:::

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-s6z2{:center}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
</style> -->
<table className="tg">
  <tbody><tr>
      <th className="tg-s6z2">Raspberry Pi 3用868MHzキット</th>
      <th className="tg-s6z2"><a href="https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3-p-2823.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" width={200} height={30} border={0} /></a></th>
    </tr>
    <tr>
      <td className="tg-5hgy">Raspberry Pi 3用915MHzキット</td>
      <td className="tg-5hgy"><a href="https://www.seeedstudio.com/LoRa%2FLoRaWAN-Gateway-915MHz-for-Raspberry-Pi-3-p-2821.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" width={200} height={30} border={0} /></a></td>
    </tr>
  </tbody></table>

## 特徴

- 低消費電力 & 広域通信
- 工業規格の信頼性
- LoRa /LoRaWAN ネットワーク構築の経済的ソリューション
- センサーとアクチュエーターの豊富なアクセサリー
- リアルタイム監視

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/loragate_hardware.png)

### 部品リスト
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-vn4c{background-color:#D2E4FC}
.tg .tg-0fxu{background-color:#6ab0de;vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
.tg .tg-yw4l{vertical-align:top}
</style> -->
<table className="tg">
  <tbody><tr>
      <th className="tg-0fxu">部品番号</th>
      <th className="tg-0fxu">部品名</th>
      <th className="tg-0fxu">数量</th>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❶</font></td>
      <td className="tg-vn4c"><a href="https://wiki.seeedstudio.com/ja/Raspberry_Pi_3_Model_B/">Raspberry Pi 3</a></td>
      <td className="tg-vn4c">1 個</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❷</font></td>
      <td className="tg-031e">ゲートウェイモジュール RHF0M301–868</td>
      <td className="tg-031e">1 個</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❸</font></td>
      <td className="tg-vn4c">PRI 2 ブリッジ RHF4T002</td>
      <td className="tg-vn4c">1 個</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❹</font></td>
      <td className="tg-031e"><a href="https://wiki.seeedstudio.com/ja/Seeeduino_LoRAWAN/">Seeeduino LoRaWAN GPS付き (RHF76-052AM)</a></td>
      <td className="tg-031e">1 個</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❺</font></td>
      <td className="tg-vn4c">USB to UART アダプター</td>
      <td className="tg-vn4c">1 個</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❻</font></td>
      <td className="tg-031e">16GB Micro SDカード – クラス10にアップグレード</td>
      <td className="tg-031e">1 個</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❼</font></td>
      <td className="tg-vn4c">0dBi ラバーダックアンテナ</td>
      <td className="tg-vn4c">1 個</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❽</font></td>
      <td className="tg-yw4l">5V/2.1A アメリカ標準アダプター（Micro USBコネクター付き）</td>
      <td className="tg-yw4l">1 個</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❾</font></td>
      <td className="tg-6k2t">Micro USBケーブル 20cm</td>
      <td className="tg-6k2t">1 個</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❿</font></td>
      <td className="tg-yw4l">Micro USBケーブル 100cm</td>
      <td className="tg-yw4l">1 個</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">⓫</font></td>
      <td className="tg-6k2t">RJ45 イーサネットケーブル 200cm</td>
      <td className="tg-6k2t">1 個</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">⓬</font></td>
      <td className="tg-yw4l">JST2.0 ケーブル 10cm</td>
      <td className="tg-yw4l">1 個</td>
    </tr>
  </tbody></table>

## アプリケーションアイデア

- モノのインターネット (IoT)
- スマートハウス
- セキュリティ
- スマートグリッド
- インテリジェントファーム
- インテリジェントパーク

## はじめに

### ハードウェア

#### インターフェース概要

ここには多くのインターフェースがあるため、それらの機能を理解する必要があります。詳細は以下の図を参照してください。
![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_interface.jpg)

- <font face size={5} font color="ffc000">❶</font> <strong>Micro-USB 入力:</strong>
この Micro-USB インターフェースを使用してシステム全体に電源を供給します。

- <font face size={5} font color="ffc000">❷</font> <strong>USB HOST コネクタ:</strong>
Raspberry Pi に電力を供給します。

- <font face size={5} font color="ffc000">❸</font> <strong>Raspberry Pi 電源入力:</strong>
Raspberry Pi に電力を供給します。

- <font face size={5} font color="ffc000">❹</font> <strong>HDMI:</strong>
HDデジタルビデオ出力インターフェース。

- <font face size={5} font color="ffc000">❺</font> <strong>ヘッドフォンジャック:</strong>
3.5mm ヘッドフォンジャック。

- <font face size={5} font color="ffc000">❻</font> <strong>イーサネットインターフェース:</strong>
このインターフェースを使用してシステムをインターネットに接続できます。また、無線ネットワークを設定した後に Wi-Fi を使用することもできます。

### ハードウェア接続

- ステップ 1. **Gateway module RHF0M301–868** を **PRI 2 Bridge RHF4T002** に差し込みます。
- ステップ 2. **PRI 2 Bridge RHF4T002** を **Raspberry Pi 3** に差し込みます。
- ステップ 3. <font face size={5} font color="ffc000">❷</font> と <font face size={5} font color="ffc000">❸</font> を 20cm の Micro-USB ケーブルで接続します。
- ステップ 4. **USB to UART Adapter** を **Raspberry Pi 3** の GPIO に接続します。以下の図のように接続してください。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/RX-TX.png)

- ステップ 5. **USB to UART Adapter** を PC に差し込みます。
- ステップ 6. <font face size={5} font color="ffc000">❶</font> を 5V/2.1A 標準アダプタと 100cm の Micro-USB ケーブルで接続します。

すべてのステップを完了すると、システム全体は以下の図のようになります。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/connection.jpg)

## ソフトウェア

### ソフトウェアツール

以下のガイドでは、以下のツールが必要になります。これらをコンピュータにインストールしてください。

- **[Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)**: ポータブルシリアルツールで、Seeeduino LoRaWAN with GPS (RHF76-052AM) のシリアルポートを開き、ATコマンドを送信するために使用します。
- **[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)**: シリアルおよびSSHターミナルを含むターミナルツールで、Raspberry Pi を制御するために使用します。
- インターネットブラウザ: RHF2S001 統合 LoRaWAN サーバーにアクセスするために使用します（Chrome または Firefox を推奨）。

:::note
他のお気に入りのシリアルツールがある場合、それを使用することも可能です。ただし、ツールに自信がない場合は、推奨するツールを使用してください。
:::

### ローカルサーバーへの接続

#### ステップ 1. 電源を入れて PuTTY に接続

a) まず、シリアルツールと RPi (RHF4T002 アダプタ) が正しく接続されていることを確認します。

b) FT232 ツールを PC に接続します（COMポートが正しく認識されない場合は、[Virtual COM Port Drivers](https://www.ftdichip.com/Drivers/VCP.html) を参照してください）。

c) PC の **デバイスマネージャー** を開き、正しい COM ポートを取得します（例: COM15）。以下の図に従って ExtraPuTTY を設定します（速度 115200、その他はデフォルトを使用）、**Open** をクリックします。ゲートウェイがまだ起動していないため、ターミナルには何も表示されません。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/putty_lora.png)

d) ゲートウェイの電源を入れます。起動ログが PuTTY ターミナルに表示され、最後にログイン名の入力を求められます。プロンプト情報が表示されるまでに1〜2分かかることに注意してください。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/login_putty.png)

e) RHF2S001 のデフォルトのユーザー名とパスワードを使用してログインしてください（ユーザー名: **rxhf**, パスワード: **risinghf**）。パスワードを入力してもエコーは表示されません。

f) RHF2S001 をイーサネットケーブルでルーターに接続します。

g) **ifconfig** を実行して IP アドレスと MAC アドレスを確認します。
![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_getip.png)

##### IP は青い四角内、MAC アドレスはオレンジ色の四角内に表示されます（形式: b8:27:eb:xx:xx:xx）。

:::note
IP を取得した後、SSH を使用して RHF2S001 に再度ログインすることをお勧めします。SSH は（イーサネット経由のため）UART よりも高速で安定しています。通常、シリアルツールを使用して IP を取得します。PuTTY を再度開き、SSH モジュールを使用して接続します。
:::

SSH を使用してログインするには、取得した IP アドレスをホスト名に入力し、ポート 22 を使用して SSH 接続タイプを選択します。他のオプションはデフォルトのままにしておきます。その後、**Open** をクリックするだけです。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/putty_lora.png)

#### ステップ 2. SD カードファイルシステムの拡張

デフォルトでは、イメージは Raspbian システム用に 2GB のみを有効にしています。SD カード全体（8GB または 16GB）を使用するために拡張することをお勧めします。そうしないと、SD カードがすぐにいっぱいになります。
PuTTY ターミナルで以下のコマンドを実行して raspi-config を開始します。

```
sudo raspi-config
```

「Expand Filesystem」を選択し、完了後に再起動して有効にします。PuTTY ターミナルで以下のコマンドを実行して SD カードの容量と使用状況を確認します。

```
df -h
```

Raspberry Pi の raspi-config ツールの詳細については、[こちら](https://www.raspberrypi.org/documentation/configuration/raspi-config.md) を参照してください。

#### ステップ 3. RHF2S001 統合 LoRaWAN サーバーの使用

**a) ゲートウェイを内部サーバーに接続**

PuTTY ターミナルで以下のコマンドを実行し、ステータスを確認します。

```
sudo systemctl status pktfwd
```

pktfwd サービスがアクティブでない場合、以下のコマンドを実行して開始します。

```
sudo systemctl enable pktfwd
sudo systemctl restart pktfwd
```

**b) 周波数プラン**

EU868 用周波数プラン
<table class="tg">
  <tr>
    <th class="tg-s6z2"></th>
    <th class="tg-s6z2">EU868</th>
    <th class="tg-s6z2">アップリンク DR</th>
  </tr>
  <tr>
    <td class="tg-5hgy">CH0</td>
    <td class="tg-5hgy">867.1</td>
    <td class="tg-5hgy">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH1</td>
    <td class="tg-s6z2">867.3</td>
    <td class="tg-s6z2">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-5hgy">CH2</td>
    <td class="tg-5hgy">867.5</td>
    <td class="tg-5hgy">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH3</td>
    <td class="tg-s6z2">867.7</td>
    <td class="tg-s6z2">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH4</td>
    <td class="tg-j0tj">867.9</td>
    <td class="tg-j0tj">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH5</td>
    <td class="tg-baqh">868.1</td>
    <td class="tg-baqh">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH6</td>
    <td class="tg-j0tj">868.3</td>
    <td class="tg-j0tj">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH7</td>
    <td class="tg-baqh">868.5</td>
    <td class="tg-baqh">DR0 ~ DR5</td>
  </tr>
</table>

**US915 HYBRID の周波数プラン**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-s6z2{:center}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
.tg .tg-j0tj{background-color:#D2E4FC;:center;vertical-align:top}
</style> -->
<table class="tg">
  <tr>
    <th class="tg-s6z2"></th>
    <th class="tg-s6z2">US915</th>
    <th class="tg-s6z2">アップリンク DR</th>
  </tr>
  <tr>
    <td class="tg-5hgy">CH0</td>
    <td class="tg-5hgy">902.3</td>
    <td class="tg-5hgy">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH1</td>
    <td class="tg-s6z2">902.5</td>
    <td class="tg-s6z2">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-5hgy">CH2</td>
    <td class="tg-5hgy">902.7</td>
    <td class="tg-5hgy">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH3</td>
    <td class="tg-s6z2">902.9</td>
    <td class="tg-s6z2">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH4</td>
    <td class="tg-j0tj">903.1</td>
    <td class="tg-j0tj">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH5</td>
    <td class="tg-baqh">903.3</td>
    <td class="tg-baqh">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH6</td>
    <td class="tg-j0tj">903.5</td>
    <td class="tg-j0tj">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH7</td>
    <td class="tg-baqh">903.7</td>
    <td class="tg-baqh">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH64</td>
    <td class="tg-j0tj">903.0</td>
    <td class="tg-j0tj">DR4</td>
  </tr>
</table>

**c) RHF76-052AM の設定**

次に、Seeeduino LoRaWAN GPS (RHF76-052AM) を設定します。

- まず、Seeeduino LoRaWAN GPS を PC に接続します。

- 次に、**[Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)** IDE を開き、新しいスケッチに以下のコードをコピーします。

```
 void setup()
 {
     Serial1.begin(9600);
     SerialUSB.begin(115200);
 }

 void loop()
 {
     while(Serial1.available())
     {
         SerialUSB.write(Serial1.read());
     }
     while(SerialUSB.available())
     {
         Serial1.write(SerialUSB.read());
     }
 }
```

- 次に、Seeeduino LoRa GPS の正しいシリアルポートを選択し、ボードを **Tool->Board->Seeeduino_LoRAWAN** に設定します。その後、アップロードボタンをクリックします。ボードリストに Seeeduino_LoRAWAN が見つからない場合やコードの更新方法がわからない場合は、[こちら](https://wiki.seeedstudio.com/ja/Seeeduino_LoRAWAN/#install-the-driver-for-windows) をクリックして詳細情報をご確認ください。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/port_lora.png)

- 次に、右上のシリアルモニターを開きます（または Ctrl+Shift+M を同時に押します）。**Newline** を選択します（このオプションは各コマンドの末尾に "\r\n" を追加します）。ボーレートを 9600 に設定し、以下のコマンドを入力して **送信** を押します。

EU868 用

```
AT+FDEFAULT=RISINGHF
AT+DR=EU868
```

US915 用

```
 AT+FDEFAULT=RISINGHF
 AT+DR=US915HYBRID
 AT+RXWIN2=923.3,DR8
```

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/At_send.png)

:::caution
Seeeduino LoRaWAN GPS をコンピュータに接続すると、2つのシリアルポートが表示される場合があります。一つは Raspberry 用の Putty、もう一つは Seeeduino LoRaWAN GPS 用の SSCOM です。正しいポートを選択してください。
:::

**d) 内部サーバーコンソールへのアクセス**

ブラウザに IP アドレス（ゲートウェイの IP）を入力すると、以下のウェブサイトにジャンプします。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_webin.png)

#### ステップ 4. Seeeduino LoRaWAN GPS (RHF76-052AM) を使用して LoRaWAN サーバーにアクセスする

モードは2種類あります。この Wiki では ABP モード（誰でも無料で利用可能）についてのみ説明します。OTAA モード（商用であり、料金が必要）についての詳細は[こちら](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/%5BRHF-UM01649%5DIoT%20Discovery%20User%20Manual-seeed-v2.1.pdf) をクリックしてください。

a) 上記のウェブサイトの右上にある「Application」ボタンを見つけてクリックすると、新しいページが表示されます。

b) 次に、Seeeduino LoRaWAN の **APPEui**、**DevAddr**、**DevEui** を取得して新しいアプリケーションを追加する必要があります。
Seeeduino LoRaWAN の ID 情報を取得するには、Arduino IDE のシリアルモニターで以下のコマンドを入力して **送信** をクリックします。ID 情報が取得できます。

```
at+id
```

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/at%2Bid.png)

c) 取得した ID 情報を空欄に入力します。名前と所有者は自由に設定できます（ここでは Seeed とニックネームを使用します）。取得した APPEui を使用してください。その後、**Add** ボタンをクリックします。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/applicationpage.png)

次に、設定ページにジャンプします。このページでは「Personalised Motes」を選択します。Seeeduino LoRaWAN GPS の ID 情報を使用して **DevEUI** と **DevAddr** を入力します。そして **NWKSKEY** と **APPSKEY** をデフォルト値で設定します。以下の画像を参照してください。

- DevEui： AT+ID コマンドで取得した Seeeduino LoRaWAN GPS の情報
- DevAddr: AT+ID コマンドで取得した Seeeduino LoRaWAN GPS の情報
- NWKSKEY：デフォルト値 2B7E151628AED2A6ABF7158809CF4F3C
- APPSKEY：デフォルト値 2B7E151628AED2A6ABF7158809CF4F3C

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Add_info.png)

d) デバイスが正常に追加されたかどうかをテストするには、Arduino IDE のシリアルモニターで以下のコマンドを入力します。

```
at+mode=lwabp

AT+CMSGHEX="0a 0b 0c 0d 0e"
```

以下のような結果が表示されるはずです。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/test_send.png)

次にウェブサイトに移動し、**Application->Seeed（先ほど追加したアプリケーションの名前）->View application data** をクリックします。Seeeduino_LoRAWANから送信したデータが表示されます。おめでとうございます！作業完了です！

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/test.png)

### Loriot サーバーへの接続

#### ステップ1. Loriot サーバーゲートウェイ登録

a) 新規ユーザーはまずアカウントを登録する必要があります。**[登録アドレス](https://cn1.loriot.io/register.html)** をクリックしてください。ユーザー名、パスワード、メールアドレスを入力して登録します。登録後、メールが送信されますので、メール内の指示に従ってアクティベートしてください。

b) アクティベートが成功したら、**[こちら](https://cn1.loriot.io/home/login.html)** をクリックしてログインします（デフォルトのティアは「Community Network」で、1つのゲートウェイ（RHF2S001）と10個のノードをサポートします）。

c) **Dashboard -> Gateway** に移動し、**Add Gateway** をクリックしてゲートウェイの追加を開始します。

d) **Raspberry Pi 3** を選択します。

e) 以下のように設定します：

- Radio front-end -> RHF2S001 868/915 MHz(SX1257)
- BUS -> SPI

f) RHF2S001のMACアドレスを入力します（形式は b8:27:eb:xx:xx:xx）。また、ゲートウェイの位置情報も入力してください。

g) 「Register Raspberry Pi gateway」をクリックして登録を完了します。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/add_gateway.png)

h) 登録したゲートウェイをクリックして設定ページに入り、「Frequency Plan」を手動で切り替えます。ここでのプランはRHF2S001のタイプによって決まります。利用可能なプランはCN470、CN473、CN434、CN780、EU868です。選択後、ページをリフレッシュして正確なチャンネルを取得してください。このWikiでは**EU868**を選択します。

i) Puttyターミナルで以下のコマンドを実行します：

```
cd /home/rxhf/loriot/1.0.2
sudo systemctl stop pktfwd
sudo gwrst
wget https://cn1.loriot.io/home/gwsw/loriot-risinghf-rhf2s008-rhf1257-SPI-0-latest.bin -O loriot-gw.bin
chmod +x loriot-gw.bin
./loriot-gw.bin -f -s cn1.loriot.io
```

j) ゲートウェイ登録を完了します。ゲートウェイが「Connected」と表示されます。次はノードの登録です。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/service_done.png)

#### ステップ2. Loriot サーバーでノードデバイスを接続

**a) 利用可能なゲートウェイチャンネルを取得**

現在のゲートウェイチャンネルは **Dashboard -> Gateway -> Your Gateway** から確認できます。以下の画像のように利用可能なチャンネルが表示されます。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/radio_list.png)

**b) Seeeduino LoRAWAN GPS（RHF3M076）の設定**

Arduino IDEのシリアルモニターを開き、以下のコマンドを入力します。

```
at+ch
```  

Seeeduino_LoRAWAN GPSのデフォルトチャンネルを確認します。3つのチャンネルが表示されます。利用可能なチャンネルがない場合は、以下のコマンドでSeeeduino_LoRAWANのチャンネルを変更できます。

```
at+ch=0,868.1
at+ch=1,868.3
at+ch=2,868.5
```

その後、再度 **at+ch** を使用して確認してください。

**c) Seeeduino_LoRAWAN GPSをABPノードとして追加**

Loriotサーバーにログインし、**Dash Board->Applications->SimpleApp** をクリックします。**Import ABP** をクリックし、以下の項目を入力します：

- DevAddr：Seeeduino_LoRAWAN GPSで "AT+ID" コマンドを使用して取得（注：Loriotはコロンコネクタをサポートしていないため、手動で削除する必要があります）
- FCntUp：1に設定
- FCntDn：1に設定
- NWKSKEY：デフォルト値 2B7E151628AED2A6ABF7158809CF4F3C
- APPSKEY：デフォルト値 2B7E151628AED2A6ABF7158809CF4F3C
- EUI：DEVEUI、Seeeduino_LoRAWAN GPSで "AT+ID" コマンドを使用して取得

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/add_apb.png)

**Import Device** ボタンをクリックしてデバイスのインポートを完了します。
次に **Dashboard -> Applications -> SampleApp** を選択すると、先ほど追加した新しいABPノードが表示されます。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/inite_status_apb.png)

**d) Seeeduino_LoRAWANからデータを送信**

Arduino IDEのシリアルモニターに戻り、以下のコマンドを送信します：

```
AT+CMSGHEX="0a 0b 0c 0d 0e"
```

その後、**Dashboard -> Applications -> SampleApp ->Device** に移動し、ノードデバイスのEUIまたはDevAddrをクリックすると、送信したデータがここに表示されます。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/final.png).

## 概要
この記事では、LoRa/LoRaWAN Gateway Kitと独自のLoRaWANゲートウェイを作成するプロセスについて紹介しました。ハードウェアの接続とソフトウェアツールの設定における重要なステップを取り上げ、必要なコンポーネントの接続やLoRaWANサーバーとの通信について説明しました。このDIYゲートウェイの方法は柔軟性とカスタマイズ性を提供し、ユーザーが自分のニーズに応じて堅牢なLoRaWANネットワークを構築することを可能にします。

しかし、一部のユーザーにとっては、独自のLoRaWANゲートウェイを作成することが難しく、すぐに使えるデバイスを好む場合があります。このニーズを理解し、[SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)をオプションとして提供しています。わずか99ドルで、このゲートウェイを購入して簡単にLoRaWANネットワークを構築することができます。さらに一歩進んで、初心者向けに設計された[SenseCAP LoRaWAN Starter Kit](https://www.seeedstudio.com/SenseCAP-LoRaWAN-Starter-Kit-EU868-p-5789.html)も提供しています。このキットには、SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway、[XIAO ESP32-S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)、[Grove-Wio-E5](https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html)、および2つのGroveセンサーが含まれています。このキットは、LoRaWANの学習プロセスと実験を容易にするために特別に設計されています。

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html">
    <img src="https://files.seeedstudio.com/wiki/LoRa/LoRaWAN%20Gateway%20Kit/114992981_45-M2_1.jpg" width={450} height="auto" style={{ marginRight: '20px' }} />
  </a>
  <a href="https://www.seeedstudio.com/SenseCAP-LoRaWAN-Starter-Kit-EU868-p-5789.html">
    <img src="https://files.seeedstudio.com/wiki/LoRa/LoRaWAN%20Gateway%20Kit/1-114993166-sensecap-lorawan-starter-kit-eu-45font.jpg"  width={450} height="auto" />
  </a>
</div>

## FAQ

**Q1: 工場出荷時のファームウェアをどこで見つけることができますか？**

**A1:** ファームウェアが破損した場合や重大なエラーが発生した場合は、[こちら](https://drive.google.com/open?id=1MVLQlxjhir_mWvKhvuqBsr1a0ievZRDC)からダウンロードできます。このファームウェアはRaspberry Pi 3b専用であり、Raspberry Pi 3b+には対応していません。

**Q2: 最新のイメージをどのように作成しますか？**

**A2:** Raspberry Pi 3bおよび3b+の両方で正常に動作します。2018年11月13日のRaspbianイメージでテスト済みです。

- ステップ1: [最新のRaspberry Piイメージ](https://www.raspberrypi.org/downloads/raspbian/)をダウンロードします。

- ステップ2: `wget https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/libssl1.0.0.deb`を実行してRaspberry Piにlibssl1.0.0.debをダウンロードし、ターミナルで`sudo dpkg -i ./libssl1.0.0.deb`を実行してインストールします。

- ステップ3: ターミナルで`sudo raspi-config`を実行し、_Interfacing Options_ -- _P4 SPI_ -- _YES_を選択してSPIを有効にします。これにより、Raspberry PiがRHF0M301と通信できるようになります。

- ステップ4: ターミナルで以下のコマンドを実行し、Loriotゲートウェイをダウンロードして起動します。

```
wget https://cn1.loriot.io/home/gwsw/loriot-pi-3-rhf1257-SPI-0-latest.bin -O loriot-gw
chmod +x loriot-gw
./loriot-gw -f
```

## リソース

- **[PDF]** [Wiki PDFをダウンロード](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/LoRa_LoRaWan_Gateway_Kit.pdf)
- **[ユーザーマニュアル]** [ユーザーマニュアル](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/%5BRHF-UM01649%5DIoT%20Discovery%20User%20Manual%20-%20v3.2.pdf).<!-- 源文件链接有误 -->
- **[さらに読む]** <a href="/ja/Seeeduino_LoRAWAN" ><span><font size={"3"}> Seeeduino LoRaWAN のWiki </font></span></a>
- **[さらに読む]** [RisingHFウェブサイト](http://www.risinghf.com/product/risinghf-iot-dicovery/?lang=en)
- **[Azure IoT Edge LoRaWAN]** [Azure IoT Edge LoRaWAN](https://github.com/Azure/iotedge-lorawan-starterkit/)

## プロジェクト

**LoRa IoTea**: 茶畑に適用される自動情報収集システムです。これは、スマート農業情報収集の一部です。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>