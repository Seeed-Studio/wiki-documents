---
description:  SenseCAP ONE コンパクト気象センサーの入門ガイド
title:  SenseCAP ONE コンパクト気象センサーの入門ガイド
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor
last_update:
  date: 12/25/2025
  author: Janet
---
# SenseCAP ONE コンパクト気象センサーの入門ガイド

# 設置前の準備

## インストール

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image2.png" /></div>

# インストール

### デバイスインターフェースの紹介

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image3.png" /></div>

デバイスの底部には2つのコネクタがあります。

- USB Type-Cインターフェースを使用すると、通常のUSB Type-Cケーブルでコンピュータをデバイスに接続して設定を行うことができます。

- メインデータインターフェースはM12 8ピンケーブルに接続でき、複数のバスプロトコルをサポートします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image4.png" /></div>

### USBケーブルでの接続

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image5.png" /></div>

### M12ケーブル

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image6.png" /></div>

デバイスはM12 8ピンコネクタを採用しており、異なる色のピンが電源とデータ通信を提供します（上図参照）。

RS-485で動作する場合、4本のワイヤーのみを接続し（加熱機能を使用しない）、残りは個別にテープで包んでショートを防ぐことができます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image7.png" /></div>

ケーブルを差し込む際は、ケーブルの穴とデバイスコネクタのピンを合わせる必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image8.png" /></div>

ケーブルを差し込み、時計回りに締めます

注意：ケーブルを底部に挿入する前に、底部に向けて狙いを定めてください。そうしないと、ピンが斜めになり、通信が異常になる可能性があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image9.png" /></div>

加熱機能付きデバイスを使用する場合、別途24V（24V@1Aを推奨）電源が必要です。グレーワイヤー5は電源のマイナスに、ピンクワイヤー6は電源のプラスに接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image10.png" /></div>

### デバイスの設置

主要な設置方法は2つあり、スリーブ付きポールに取り付けるか、フランジプレート付きプラットフォームに取り付けます。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image11.png" /></div>

スリーブのサイズは以下の通りです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image12.png" /></div>

ポールの直径は75cm以下にすることを推奨します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image13.png" /></div>

フランジプレートの寸法は以下の通りです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image14.png" /></div>

> 注意：可能な限り正確な風向データを取得するため、設置時にベースの**矢印**を真北に直接向けて物理的な北方向を確保してください。そうでない場合は、設定時に電子コンパスを有効にしてください。

# デバイスの動作モード

設置後、デバイスの電源を入れ、設定を行い、デバイスからデータを収集できます。

デバイスには2つの動作モードがあります：**設定モードと動作モード**です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image15.png" /></div>

### USBポート経由でのデバイス設定

デバイスの底部に防水の丸いカバーがあります。反時計回りに回してこのカバーを取り外すと、USB Type-Cコネクタと設定ボタンが見えます。

USB Type-Cケーブルでデバイスをコンピュータに接続します。コンピュータは自動的にデバイスドライバをインストールします。ドライバが正常にインストールされると、デバイスマネージャーでシリアルポートを確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image16.png" /></div>

ドライバが自動的にインストールされない場合は、このリンクをクリックして[手動でダウンロード](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)し、[ドライバをインストール](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)してください（バージョンはCP210x Windows Drivers）。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image17.png" /></div>

**デバイスを設定する方法は2つあります：**

- SenseCAP ONE Configuration Tool

- シリアルデバッグツール

### SenseCAP ONE Configuration Tool

SenseCAP ONE Configuration Toolは、デバイスを設定するためのグラフィカルインターフェースを提供します。以下のGitHubリンクからツールをダウンロードできます：

&lt;https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases&gt;

ニーズに応じて、Windows、macOS、またはLinux用のソフトウェアを選択してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png" /></div>

次の画像は、SenseCAP ONE Configuration Toolのメインインターフェースを示しています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png" /></div>

1. ソフトウェアを開き、シリアルポートのプルダウンボックスをクリックして、デバイスの対応するシリアルポートを選択します。

2. ボーレートを9600に設定します。

3. 接続をクリックし、接続が成功すると、右側のセンサーデータエリアに対応する測定値が表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image20.png" /></div>

Settings をクリックしてデバイス設定に入り、"Read From Device" をクリックしてデバイスの情報を取得します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image21.png" /></div>

1. 通信プロトコルを選択します。この例では、RS-485 Modbus RTUを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image22.png" /></div>

2. Modbusアドレスを変更：Modbusアドレスにアドレスを書き込み、"Write to Device" をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image23.png" /></div>

設定ページでは、デバイス名、データタイプ、データアップロード間隔を変更できます。変更後は、"Write to Device" をクリックして変更を有効にする必要があります。

アプリケーション設定では、ツールがセンサーデータを読み取るサイクルを設定でき、最小は2S、カーブのドット範囲を設定できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image24.png" /></div>

"Firmware Update" をクリックしてデバイスファームウェアを更新します。ファームウェアを取得するには、営業または技術サポート（sensecap@seeed.cc）にお問い合わせください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image25.png" /></div>

アップグレードページでは、メインボードファームウェアまたはドライバーボードファームウェアの更新を選択する必要があります。ローカルリポジトリでファームウェアファイルを選択し、"Update Now" をクリックします。更新プロセス中に予期しない電源断が発生した場合、更新は実行されません。同じプロセスを経てファームウェアを更新する必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image26.png" /></div>

#### ファームウェアアップグレード

1. `SenseCAP One Configuration Tool` を開きます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_One_Configuration_Tool.png" /></div>

2. Type-Cケーブルでデバイスをコンピュータに接続します

3. ソフトウェアを開き、デバイスの正しい `COM` ポートを選択し、`"Connect"` をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Connect.png" /></div>

4. 接続後、`"Firmware Update"` をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Firmware_Update.png" /></div>

5. ターゲットボードと対応するファームウェアファイルを選択します

- `Master board` を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Master_board.png" /></div>

- `"Local File"` をクリックし、ファームウェアフォルダを参照します

- `"Update"` をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update.png" /></div>

6. `"Update"`をクリックした後、デバイスのResetボタン（Type-Cポートの隣にあります）を押します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset.png" /></div>

ボタンを押してから数秒後にアップデートプロセスが開始されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update2.png" /></div>

7. アップデートが完了したら、再度Resetボタンを押し、画面上の`"OK"`をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset2.png" /></div>

8. 上記の手順を繰り返して、`Slave Board 1`に別のファームウェアをフラッシュします。

9. 完了後、ファームウェアアップデートウィンドウを閉じ、`"Disconnect"`をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Disconnect.png" /></div>

これで気象ステーションのファームウェアアップグレード手順がすべて完了しました。

### シリアルデバッグツール

通信設定は以下の通りです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image27.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image28.png" /></div>

- シリアルデバッグアシスタントで、対応するCOMポートを選択します。

- "click Enter to start a new line"チェックボックスにチェックを入れます。

- ボーレートを9,600に設定します。

- 送信エリアで送信します。

- シリアル受信ウィンドウで対応する0XAメッセージを受信した場合、設定は成功です。そうでない場合は、COMポートとボーレートを確認してください。

詳細なASIICコマンドについては、次の章を確認してください。

# 通信プロトコル

デバイスは以下の通信プロトコルをサポートしています：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image29.png" /></div>

## Modbus-RTUプロトコル

**プロトコル通信パラメータ**

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/DefaultDeviceAddress.png" /></div>

### Modbus-RTUプロトコルメッセージフォーマット

センサーデータは入力レジスタに格納され、読み取り専用です。

デバイスアドレスとRS-485の通信ボーレートは保持レジスタに格納され、変更可能です。

各レジスタは16ビットで、2バイトを占有します。

**入力レジスタからメッセージを読み取る。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image32.png" /></div>

**保持レジスタの読み取りと書き込み。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image33.png" /></div>

### レジスタアドレス定義

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image34.png" /></div>

### Modbus-RTU読み取り

以下は**Modbus Pollツール**の例です

（&lt;https://www.modbustools.com/download.html&gt;からダウンロード）。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image35.png" /></div>

接続パラメータの設定：ボーレート9600bps、8データビット、
パリティなし、1ストップビット。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image36.png" /></div>

気温レジスタ0x0000から0x0001を読み取り、Setupをクリックし、Read/Write Definitionを選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image37.png" /></div>

デフォルトのスレーブID（5-in-1は10、7-in-1は20、9-in-1は38）、ファンクションコード04、開始アドレス0、数量（5-in-1は6、7-in-1は
28、9-in-1は32）を設定します；

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image38.png" /></div>

コンピュータは1秒ごとにセンサーデータを読み取り、測定値（行0と行1）は下の画像に示されています。測定値を1000で割ると真の温度値になります。28300/1000 = 28.3 °C

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image39.png" /></div>

右側では、送受信された生データパッケージを確認できます。

温度が正の場合：

1. ホストが01 04 00 00 00 02 71 CBを送信

2. スレーブが01 04 04 00 00 6E 8C D6 41で応答

3. 温度データ0x00006E8C（16進）を返し、10進数に変換 = 28300、1000で割って対応する気温を取得、気温 = 28300/1000 = 28.3 °C

**温度が負の場合**

温度は補数計算を通じて取得する必要があります。

1. ホストが01 04 00 00 00 02 71 CBを送信

2. スレーブが01 04 04 FF FF FC 18 D6 41で応答

3. 返された温度データFFFFFC18H（16進補数）。

4. 元のコードは - (FF FF FC 18-1 = FF FF FC 17) = 80 00 03 E8（16進）= -1000（10進）。

5. そして温度測定値は-1000/1000 = -1°

**S500デコード**

レジスタ0x0000~0x0005を読み取り。

送信コマンド：0A 04 00 00 00 06 71 73（チェックコード）；

返信：26 04 40 00 00 70 80（温度）00 00 95 10（湿度） 06 07 94 40（気圧）99 09（チェックコード）；レジスタ0x0008~0x0013を読み取り。送信コマンド：0A 04 00 08 00 0C 70 B6（チェックコード）；

返信：0A 04 0C 00 00 00 00（最小風向）00 03 6E 84（最大風向）00 03 C8 C0（平均風向）00 00 00 00（最小風速）00 00 04 BC（最大風速）00 00 02 10（平均風速）BC 78（チェックコード）

**S600デコード**

レジスタ0x0000~0x0013を読み取り

送信コマンド: 45 03 00 00 00 13 0B 43

返信: 45 04 40 00 00 70 80（温度） 00 00 95 10（湿度） 06 07 94 40（気圧） 00 00 00 00（光） 00 00 00 00（最小風向） 00 00 00 00（最大風速） 00 00 00 00（平均風向） 00 00 00 00 （最小風速） 00 00 00 00（最大風速） 00 00 00 00（平均風速）77FD（チェックコード）

**S700デコード**

レジスタ0x0000-0x001F & 0x0030-0x0033を読み取り。

送信コマンド: 14 04 00 00 00 20 F3 06

返信: 14 04 40 00 00 70 80（温度） 00 00 95 10（湿度） 06 07 94 40（気圧） 00 00 00 00（光） 00 00 00 00（最小風向） 00 00 00 00（最大風向） 00 00 00 00（平均風向） 00 00 00 00 （最小風速）00 00 00 00（最大風速) 00 00 00 00（平均風速） 00 00 00 00（累積降雨量） 00 00 00 00（累積降雨時間） 00 00 00 00（雨強度） 00 00 00 00（最大雨強度） 00 00 6A 7C（加熱温度） 00 00 00 00（転倒状態） 99 09（チェックコード）

**S900デコード**

レジスタ0x0000-0x001F & 0x0030-0x0033を読み取り。

送信コマンド: 26 04 00 00 00 20 F7 05

返信: 26 04 40 00 00 70 80 (温度) 00 00 95 10(湿度) 06 07 94 40(気圧) 00 00 00 00(光) 00 00 00 00(最小風向) 00 00 00 00(最大風向) 00 00 00 00(平均風向) 00 00 00 00 (最小風速) 00 00 00 00(最大風速) 00 00 00 00(平均風速) 00 00 00 00(累積降雨量) 00 00 00 00(累積降雨時間) 00 00 00 00(雨強度) 00 00 00 00(最大雨強度)00 00 6A 7C(加熱温度) 00 00 00 00(転倒状態) 99 09(チェックコード)

PM2.5とPM10は別途読み取る必要があります：

送信コマンド: 26 04 00 30 00 04 F7 11

返信: 26 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(チェックコード)

**S1000デコード**

レジスタ0x0000-0x001Fと0x0030-0x0033を読み取り。

送信コマンド: 2B 04 00 00 00 20 F6 18

返信: 2B 04 40 00 00 70 80 (温度) 00 00 95 10(湿度) 06 07 94 40(気圧) 00 00 00 00(光) 00 00 00 00(最小風向) 00 00 00 00(最大風向) 00 00 00 00(平均風向) 00 00 00 00 (最小風速) 00 00 00 00(最大風速) 00 00 00 00(平均風速) 00 00 00 00(累積降雨量) 00 00 00 00(累積降雨時間) 00 00 00 00(雨強度) 00 00 00 00(最大雨強度)00 00 6A 7C(加熱温度) 00 00 00 00(転倒状態) 99 09(チェックコード)

PM2.5、PM10、CO2は別途読み取る必要があります：

送信コマンド: 2B 04 00 30 00 04 F6 0C

返信: 2B 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(チェックコード)

レジスタ0x0040~0x0041を読み取り。

送信コマンド:2B 04 00 40 00 02 77 D5

返信:2B 04 04 00 0C EC 98 （CO2） FD 2F （チェックコード）；

### ノイズセンサー

ノイズセンサーは独立したRS485センサーとして使用され、同じRS-485バス上の他の測定ユニットと並列に接続されているため、個別に読み取りと設定を行う必要があります。

仕様：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image40.png" /></div>

データ読み取りプロトコルと設定：

通信プロトコルは標準RS485 Modbus-RTUプロトコルを採用し、プロトコル通信パラメータは以下の通りです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image41.png" /></div>

ノイズセンサー（アドレス：40、0x28）のデータを照会：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image42.png" /></div>

照会が成功した場合、以下の情報が返されます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image01.png" /></div>

実際のDB = レジスタ値 /100

ノイズレジスタ値は0x128E=4750で、値は=4750/100=47.5dB

## ASCIIプロトコル

### コマンド定義

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image44.png" /></div>

### クエリコマンド形式

コマンドには2つの形式があります：

**1.** **= なしのコマンドは基本的なクエリ方法を指します。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/11.png" /></div>

*例：`?<CR><LF>` はデバイスのアドレスをクエリすることを示します*

**2.** **= 付きのコマンドは引数付きのクエリを指します**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/22.png" /></div>

*例：0XA;BD=`?<CR><LF>` はデバイスのボーレートをクエリすることを示します*

### 設定コマンド形式

**ボーレートの設定など、指定されたパラメータを設定します。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/33.png" /></div>

*例：0XA;BD=96`<CR><LF>` はデバイスのボーレートをクエリすることを示します*

### コマンドリスト

以下を参照してください：
[SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

## SDI-12

SDI-12通信は3本の線を使用し、そのうち2本はセンサー電源線で、もう1本はSDI-12信号線です。

SDI-12バス上の各センサーには固有のアドレスがあり、'0'、'1' ～ '9'、'A' ～ 'Z'、'A' ～ 'Z'に設定できます。SenseCAP ONEのSDI-12アドレスはデフォルトで'0'です。このセンサーがサポートする命令は次の章に示されており、各命令はSDI-12 v1.4に準拠しています。

センサーは3.6～16VのDC電源で駆動されます。センサーの電源を入れると、すぐにスリープモードに入り、データ取得機器からの指示を待ちます。SDI-12は9600bpsのボーレート、1スタートビット（ハイレベル）、7データビット（ハイ0とロー1、反論理）、1偶数パリティビット、1ストップビットを使用します。

送信される各バイトのシーケンスを次の図に示します：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/44.png" /></div>

### SDI-12コマンドと応答

[SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)を参照してください

### SDI-12読み取り

**SDI-12の配線**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image47.png" /></div>

**USB to SDI-12デバッガーを使用してデバイスと通信する**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image48.png" /></div>

**通信設定：**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image49.png" /></div>

緑線（GND Data）と黄線（SDI-12 Data）を**USB to SDI-12**デバッガーに接続します。

そして赤線（Vin+ 電源正極）と茶線（Vin- 電源グランド）を12V電源に接続します。

シリアルポートデバッグアシスタントをダウンロードします：
&lt;https://github.com/Neutree/COMTool&gt;、そしてシリアルポートデバッグツールを開きます。

- 正しいポート番号を選択します

- ボーレートをUSB to SDI-12デバッガーのボーレートに設定します（SDI-12プロトコルのボーレートではないことに注意）

- "CRLF"をチェックします

- シリアルポートを開くためにクリックします。

- クエリデバイスアドレスコマンド"?!"を送信し、応答"0"が表示されれば、接続が正常であることを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image50.png" /></div>

**測定開始**

気温、湿度、気圧、光強度を読み取ります

"測定開始コマンド0M!"を送信すると、センサーはまず"00024"で応答し、これは"0M!"コマンドが測定に2秒かかり、4つの測定値を返すことを意味します。2秒後、センサーは自身のアドレス"0"で応答し、測定が完了したことを示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image51.png" /></div>

次に"測定値読み取りコマンド0D0!"を送信して、この測定の4つの測定値を取得します。これらは気温+27.01℃、湿度64.74%、気圧100720Pa、光強度10Luxです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image52.png" /></div>

拡張測定コマンド0M1!を使用して、最小風向、最大風向、平均風向、最小風速、最大風速、平均風速を読み取ります。デバイスは"00056"で応答し、これは"0M1!"コマンドが測定に5秒かかり、6つの測定値を返すことを意味します。5秒後、デバイスは自身のアドレス"0"で応答し、測定が完了したことを示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image53.png" /></div>

次に"測定値読み取りコマンド0D0!"を送信して、この測定の6つの測定値を取得します。これらは最小風向345.9度、最大風向347.5度、平均風向346.3度、最小風速2.8m/s、最大風速2.8m/s、平均風速2.8m/sです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image54.png" /></div>

次に"連続測定コマンド0R2!"を送信すると、デバイスは4つの測定値を返します：累積降雨量1.2mm、累積降雨時間20秒、降雨強度1.2mm/h、最大降雨強度72.0mm/h。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image55.png" /></div>

## エラーコード

### Modbusエラーコード

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image56.png" /></div>

### ASCIIエラーコード

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image57.png" /></div>

### SDI-12エラーコード

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image58.png" /></div>

## リソース

[SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

## よくある質問（FAQ）

**平均風速および風向はどのように計算されますか？**

デフォルトの平均時間ウィンドウは 5 秒です。この時間内に、デバイスは風速と風向のデータを 5 回取得し、その平均値を算出して返します。
