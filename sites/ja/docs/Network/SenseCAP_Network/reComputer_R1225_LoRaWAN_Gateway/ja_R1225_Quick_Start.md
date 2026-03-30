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
  date: 03/13/2026
  author: Kian
createdAt: '2026-03-19'
url: https://wiki.seeedstudio.com/ja/r1225_quick_start/
updatedAt: '2026-03-26'
---

# クイックスタート

## 電源接続

### 電源アダプタによる給電

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

reComputer R1225 は、定格 AC 電圧 12&#126;24V または DC 電圧 9&#126;36V で給電されます。電源は 2 ピンの電源端子ブロックコネクタを介して接続します。reComputer R1225 をアースするには、電源端子左上のネジにアース線を固定します。

:::note
この電源ソリューションは、逆極性保護のためにブリッジ整流ダイオードを採用しており、AC と DC の両入力に対応しています。これにより、**電源のプラス端子とマイナス端子をどのように接続しても**回路が損傷することはありません。ブリッジ整流器を使用することで、入力 DC の極性に関係なく出力電圧の極性が一定に保たれ、効果的な逆極性保護が実現されます。
:::

### PoE 給電

PoE モジュールを搭載すると、reComputer R1225 の ETH0 ポートは PoE 給電をサポートし、Ethernet 経由でデバイスに電源を供給する便利で効率的な方法を提供します。このオプションにより、設置作業が簡素化され、必要な配線本数が削減されるため、電源が限られている、またはコンセントが容易に利用できない環境での用途に最適です。

- PoE 入力：範囲 44~57V、標準 48V
- PoE 出力：12V、最大 1.1A

:::tip
reComputer R1225 に付属する PoE モジュールは IEEE 802.3af 規格に準拠しており、最大 12.95W の電力を供給できます。**そのため、SSD や 4G モジュールなどの高消費電力の周辺機器を接続する必要がある場合、PoE 給電だけでは十分でない可能性があります。**この場合は、デバイスの安定かつ信頼性の高い動作を確保するために、AC/DC 端子から給電することを推奨します。
:::

## Seeed Gateway OS へのアクセス

### ルーター経由でアクセス

- Step 1: R1225 を Ethernet ケーブルで接続し、PC を同じルーターに接続します

:::note
 PC とデバイスは同じルーター／ネットワークに接続されている必要があります。
:::

#### ネットワーク接続図

R1225 を初めて使用する際、近くにルーターと Ethernet ケーブルがある場合は、有線接続で R1225 をネットワークに接続することを選択できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Network_Connection_Diagram.png" alt="pir" width={800} height="auto" /></p>

<!--加一个，如果不是首次连接，已经连接了Wifi，即使不插网线，也可以通过访问路由器分配的IP进入管理界面-->

:::tip
初期セットアップ時に Wi-Fi を設定している場合、PC と R1225 が同じ Wi-Fi ネットワークに接続されていれば、Ethernet ケーブルを接続していなくても、R1225 の IP アドレスを入力することで Luci インターフェースにアクセスできます。
:::

- Step 2: デバイスの IP アドレスを取得します

ルーターの管理ページでデバイスの IP アドレスを確認します。

- Step 3: デバイスのユーザー名とパスワードを取得します

  - Username：admin
  - Password：null  (**初回ログイン時はパスワード不要**)

- Step 4: Luci にログインします

ブラウザにデバイスの IP アドレスを入力して Luci ページにアクセスします。
その後、デバイスのユーザー名とパスワードを入力し、Login ボタンをクリックします。

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

### デバイスの AP ホットスポット経由でアクセス

- Step 1: R1225 の電源を入れます

- Step 2: AP ホットスポットに接続します

  - SSID : R1225-XXXX（**SN の下 4 桁**）
  - Password : 1234567890

reComputer R1225 が初めて起動すると、自動的にホットスポットモードが有効になります。ホットスポットのデフォルト SSID は「R1225-XXXX（**SN の下 4 桁**）」で、デフォルトパスワードは「1234567890」です。PC をこの AP ホットスポットに接続してください。

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 3: デバイスのユーザー名とパスワードを取得します

  - Username：admin
  - password：null  (**初回ログイン時はパスワード不要**)

- Step 4: Luci にログインします

ブラウザに IP アドレス（192.168.168.1）を入力して Local Console にアクセスします。  
その後、デバイスのユーザー名とパスワードを入力し、Login ボタンをクリックします。

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

## R1225 ネットワーク設定

### Ethernet 接続

<!--补充图片和内容-->

### WIFI 接続

- Step 1: `Network` - `Wireless` をクリックします

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 2: `Scan` ボタンをクリックして WIFI をスキャンします

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 3: 自分の WI-FI を選択してネットワークに参加します

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 4: Wi-Fi パスワードを入力し、`Submit` をクリックしてから Save をクリックします

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 5: `Save & Apply` をクリックして設定を反映します

### セルラー接続（4G バージョン用）

- Step 1: Nano-SIM カードスロットに SIM カードを挿入します

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 2: Luci ページにログインし、`Network` - `Cellular` をクリックします

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Step 3: APN 情報を設定し、`Save & Apply` をクリックして設定を反映します

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

## R1225 LoRaWAN 設定

- Step 1: `LoRa` - `LoRa Network` をクリックします

- Step 2: `Enable LoRa functionality` にチェックを入れます

- Step 3: `Save & Apply` をクリックして設定を反映します

### チャネルプラン設定

- Step : `LoRa` > `Channel Plan` に移動します

- Step : `Region` と `Channel-plan` を選択します

- Step : `Save & Apply` をクリックして設定を反映します

### 内蔵 Chirpstack プラットフォームの選択

:::tip
R1225 には、ChirpStack（オープンソースの LoRaWAN ネットワークサーバー）がプリインストールされています。
:::

- Step : `Platform Type` - `ChirpStack` を選択します

- Step : **EUI** を確認します

- Step : 左下の `Open ChirpStack Application Server` をクリックします

- Step : Chirpstack クラウドプラットフォームにログインします
  - Username/email: admin
  - Password: admin

デフォルトのユーザー名とパスワードはどちらも「admin」です

その後、`Submit` をクリックして Chirpstack プラットフォームの画面に進みます

### R1225 LoRaWAN Gateway のバインド

- Step : `Gateway` > `Add gateway` に移動します

  - Gateway name: ゲートウェイの名前

  - Gateway ID(EUI64): Gateway EUI はデバイスラベルまたは Local Console で確認できます

  - Stats interval(secs): ゲートウェイが統計情報を送信する想定間隔（秒）

その後、`Submit` をクリックします

### ゲートウェイ接続ステータスの確認
