---
description: reComputer R1225 LoRaWAN Gateway クイックスタート
title: reComputer R1225 LoRaWAN Gateway クイックスタート
keywords:
  - ゲートウェイ
  - SenseCAP
  - エッジコントローラ
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_quick_start
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/25/2026
  author: Kian
createdAt: '2026-03-18'
url: https://wiki.seeedstudio.com/ja/r1225_quick_start/
updatedAt: '2026-03-31'
---
# クイックスタート

## 電源接続

### 電源アダプタによる給電

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1225 は、定格 AC 電圧 12&#126;24V または DC 電圧 9&#126;36V で給電されます。電源は 2 ピンの電源端子ブロックコネクタを介して接続します。reComputer R1225 をアースするには、アース線を電源端子左上のネジに固定します。

:::note
この電源ソリューションは、逆極性保護のためにブリッジ整流ダイオードを採用しており、AC と DC の両方の入力に対応しています。これにより、**電源のプラス端子とマイナス端子の接続方法に関係なく**、回路が損傷することはありません。ブリッジ整流器を使用することで、入力 DC の極性に関係なく出力電圧の極性が一定に保たれ、効果的な逆極性保護が実現されます。
:::

### PoE 給電

PoE モジュールを搭載すると、reComputer R1225 の ETH0 ポートは PoE 給電をサポートし、Ethernet 経由でデバイスに電源を供給する便利で効率的な方法を提供します。このオプションにより、設置作業が簡素化され、必要な配線の量が削減されるため、電源が限られている、または電源コンセントが容易に利用できない用途に最適なソリューションとなります。

- PoE 入力：範囲 44~57V、標準 48V
- PoE 出力：12V、最大 1.1A

:::tip
reComputer R1225 に付属する PoE モジュールは IEEE 802.3af 規格に準拠しており、最大 12.95W の電力を供給できます。**そのため、SSD や 4G モジュールなどの高消費電力の周辺機器を接続する必要がある場合、PoE 給電だけでは十分でない可能性があります。**この場合は、デバイスの安定かつ信頼性の高い動作を確保するために、AC/DC 端子から給電することを推奨します。
:::

## SenseCAP Gateway OS へのアクセス

### ルーター経由でアクセス

- ステップ 1：R1225 を Ethernet ケーブルで接続し、PC を同じルーターに接続します

:::note
 PC とデバイスは同じルーター／ネットワークに接続されている必要があります。
:::

#### ネットワーク接続図

R1225 を初めて使用する際、近くにルーターと Ethernet ケーブルがある場合は、有線接続で R1225 をネットワークに接続することを選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Network_Connection_Diagram1.png" alt="pir" width={800} height="auto" /></p>

<!--加一个，如果不是首次连接，已经连接了Wifi，即使不插网线，也可以通过访问路由器分配的IP进入管理界面-->

:::tip
Wi-Fi が設定されている場合、PC と R1225 が同じネットワーク上にある限り、Ethernet ケーブルを使用しなくても、R1225 の IP アドレス経由で LuCI インターフェースにアクセスできます。
:::

- ステップ 2：デバイスの IP アドレスを取得します

ルーターの管理ページでデバイスの IP アドレスを確認します。

- ステップ 3：デバイスのユーザー名とパスワードを取得します

  - ユーザー名：admin
  - パスワード：null（**初回ログイン時はパスワード不要**）

- ステップ 4：Luci にログイン

ブラウザにデバイスの IP アドレスを入力して Luci ページにアクセスします。
その後、デバイスのユーザー名とパスワードを入力してログインし、Login ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

### デバイスの AP ホットスポット経由でアクセス

:::caution
R1225 を初めて起動したとき、Wi-Fi ホットスポットはデフォルトで 5 分間有効になります。この時間が経過すると、R1225 のホットスポットは自動的にオフになります。
:::

- ステップ 1：R1225 の電源を入れる

reComputer R1225 LoRaWAN Gateway を接続すると、デバイスは自動的に起動します。

- ステップ 2：AP ホットスポットに接続

  - SSID：R1225-XXXX（**SN の下 4 桁**）
  - パスワード：1234567890

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_AP.png" alt="pir" width={450} height="auto" /></p>

reComputer R1225 の電源を初めて入れると、自動的にホットスポットモードが有効になります。ホットスポットのデフォルト SSID は「R1225-XXXX（**SN の下 4 桁**）」で、デフォルトパスワードは「1234567890」です。PC をこの AP ホットスポットに接続してください。

- ステップ 3：デバイスの IP アドレスを取得

SSID R1225-XXXX の AP に接続した後、右上の詳細アイコンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_Wifi.png" alt="pir" width={450} height="auto" /></p>

システム設定の「ネットワークとインターネット」ページを開き、下までスクロールして IP アドレスを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_Wifi2.png" alt="pir" width={450} height="auto" /></p>

- ステップ 4：デバイスのユーザー名とパスワードを取得

  - ユーザー名：admin
  - パスワード：null（**初回ログイン時はパスワード不要**）

- ステップ 5：Luci にログイン

ブラウザに IP アドレス（192.168.2.1）を入力してローカルコンソールにアクセスします。  
その後、デバイスのユーザー名とパスワードを入力し、Login ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

## R1225 ネットワーク設定

### Ethernet 接続

Ethernet はプラグアンドプレイで、設定は不要です。
<!--补充图片和内容-->

### Wi-Fi 接続

- ステップ 1：`Network` - `Wi-Fi` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi1.png" alt="pir" width={200} height="auto" /></p>

- ステップ 2：`Scan` ボタンをクリックして Wi-Fi をスキャンします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi2.png" alt="pir" width={800} height="auto" /></p>

- ステップ 3：自分の Wi-Fi を選択してネットワークに参加します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi3.png" alt="pir" width={800} height="auto" /></p>

- ステップ 4：Wi-Fi パスワードを入力し、`Submit` をクリックしてから Save をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi4.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi5.png" alt="pir" width={800} height="auto" /></p>

- ステップ 5：`Save & Apply` をクリックして設定を反映します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi6.png" alt="pir" width={800} height="auto" /></p>

### セルラー接続（4G バージョン用）

- ステップ 1：Nano-SIM カードスロットに SIM カードを挿入します

付属の DIN レールクリップを使用して、SIM カードスロット横の小さな穴に差し込み、その後 SIM カードを挿入してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE.png" alt="pir" width={400} height="auto" /></p>

- ステップ 2：Luci ページにログインし、`Network` - `LTE` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE1.png" alt="pir" width={200} height="auto" /></p>

- ステップ 3：APN 情報を設定し、`Save & Apply` をクリックして設定を反映します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE2.png" alt="pir" width={800} height="auto" /></p>

## R1225 LoRaWAN 設定

- ステップ 1：`LoRa` - `LoRa Network` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LoRa1.png" alt="pir" width={200} height="auto" /></p>

- ステップ 2：`Enable LoRa functionality` にチェックを入れます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LoRa2.png" alt="pir" width={800} height="auto" /></p>

- ステップ 3：`Save & Apply` をクリックして設定を反映します

### チャネルプラン設定

- ステップ 1：`LoRa` > `Channel Plan` に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/channel_plan1.png" alt="pir" width={200} height="auto" /></p>

- ステップ 2：`Region` と `Channel-plan` を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/channel_plan2.png" alt="pir" width={800} height="auto" /></p>

- ステップ 3：`Save & Apply` をクリックして設定を反映します

### 内蔵 Chirpstack プラットフォームの選択

:::tip
R1225 には、ChirpStack（オープンソースの LoRaWAN ネットワークサーバー）がプリインストールされています。
:::

- ステップ 1：`Platform Type` - `ChirpStack` を選択します

- ステップ 2：**EUI** を確認します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack1.png" alt="pir" width={800} height="auto" /></p>

- ステップ 3：左下の `Open ChirpStack Application Server` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack2.png" alt="pir" width={800} height="auto" /></p>

- ステップ 4: Chirpstack クラウドプラットフォームにログインします

  - ユーザー名/メールアドレス: admin

  - パスワード: admin

デフォルトのユーザー名とパスワードはどちらも「admin」です

その後、`Submit` をクリックして Chirpstack プラットフォームのインターフェースに進みます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack3.png" alt="pir" width={800} height="auto" /></p>

### R1225 LoRaWAN Gateway をバインドする

- ステップ 5: `Gateway` > `Add gateway` に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack4.png" alt="pir" width={800} height="auto" /></p>

- ステップ 6: `Gateway Name` と `Gateway ID (EUI: 64)` を入力します

  - Gateway name: ゲートウェイの名前

  - Gateway ID(EUI64): ゲートウェイの EUI はデバイスラベルまたはローカルコンソールで確認できます

  - Stats interval(secs): ゲートウェイが統計情報を送信する想定の秒単位の間隔

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack5.png" alt="pir" width={800} height="auto" /></p>

その後、`Submit` をクリックします

### ゲートウェイ接続ステータスの確認

すべての設定手順が完了すると、ゲートウェイは ChirpStack プラットフォーム上で **`Online`** と表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack6.png" alt="pir" width={800} height="auto" /></p>

#### ゲートウェイデータ

Gateways に移動し、確認したいゲートウェイを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack7.png" alt="pir" width={800} height="auto" /></p>