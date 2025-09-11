---
description: SenseCAP ONE コンパクト気象センサーの使用開始
title: SenseCAP ONE コンパクト気象センサーの使用開始
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor
last_update:
  date: 05/15/2025
  author: Yvonne
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP ONE コンパクト気象センサーの使用開始

# 事前準備

## 図解

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image1.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image2.png"/></div>


# 設置

### デバイスインターフェースの紹介

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image3.png"/></div>

デバイスの底部には2つのコネクタがあります。

- USB Type-C インターフェースは、通常のUSB Type-Cケーブルを使用してデバイスをコンピュータに接続し、設定を行うことができます。

- 主なデータインターフェースは、M12 8ピンケーブルに接続可能で、複数のバスプロトコルをサポートします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image4.png"/></div>

### USBケーブルで接続

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image5.png"/></div>

### M12ケーブル

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image6.png"/></div>

デバイスはM12 8ピンコネクタを採用しており、異なる色のピンが電源供給とデータ通信を提供します（上図参照）。

RS-485を使用する場合、4本のワイヤーのみを接続することができ（加熱機能を使用しない場合）、残りのワイヤーは短絡を防ぐために個別にテープで巻くことができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image7.png"/></div>

ケーブルの穴とデバイスコネクタのピンを合わせてケーブルを差し込む必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image8.png"/></div>

ケーブルを差し込み、時計回りに締めてください。

注意：ケーブルを差し込む前に、ケーブルが底部に正しく向いていることを確認してください。そうでない場合、ピンがずれて通信が異常になる可能性があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image9.png"/></div>

加熱機能を使用する場合、別途24V（24V@1A推奨）の電源が必要です。灰色のワイヤー5を電源の負極に接続し、ピンクのワイヤー6を電源の正極に接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image10.png"/></div>

### デバイスの設置

設置方法は主に2つあり、スリーブを使用してポールに取り付ける方法と、フランジプレートを使用してプラットフォームに取り付ける方法があります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image11.png" /></div>

スリーブのサイズは以下の通りです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image12.png"/></div>

ポールの直径は75cm以下であることを推奨します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image13.png"/></div>

フランジプレートの寸法は以下の通りです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image14.png"/></div>

# デバイスの動作モード

設置後、デバイスの電源を入れ、設定を行い、デバイスからデータを収集することができます。

デバイスには、**設定モード**と**動作モード**の2つの動作モードがあります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image15.png"/></div>

## USBポートを介したデバイスの設定

デバイスの底部には防水仕様の丸いカバーがあります。このカバーを反時計回りに回して取り外すと、USB Type-Cコネクタと設定ボタンが見えます。

USB Type-Cケーブルを使用してデバイスをコンピュータに接続します。コンピュータは自動的にデバイスドライバをインストールします。ドライバが正常にインストールされると、デバイスマネージャにシリアルポートが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image16.png"/></div>

もしドライバが自動的にインストールされない場合は、以下のリンクから[手動でダウンロード](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)し、[インストール](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)してください。（バージョンはCP210x Windows Driversです）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image17.png"/></div>

**デバイスを設定する方法は2つあります：**

-   SenseCAP ONE Configuration Tool

-   シリアルデバッグツール

## SenseCAP ONE Configuration Tool

SenseCAP ONE Configuration Toolは、デバイスを設定するためのグラフィカルインターフェースを提供します。このツールは以下のGitHubリンクからダウンロードできます：

[https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases](https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases)

必要に応じて、Windows、macOS、またはLinux用のソフトウェアを選択してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png"/></div>

次の画像は、SenseCAP ONE Configuration Toolのメインインターフェースを示しています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png"/></div>

1.  ソフトウェアを開き、シリアルポートのプルダウンボックスをクリックして、デバイスの対応するシリアルポートを選択します。

2.  ボーレートを9600に設定します。

3.  接続をクリックします。接続が成功すると、右側のセンサーデータエリアに対応する測定値が表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image20.png"/></div>

設定をクリックしてデバイス設定に入り、「Read From Device」をクリックしてデバイスの情報を取得します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image21.png"/></div>

1.  通信プロトコルを選択します。ここでは例としてRS-485 Modbus RTUを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image22.png" /></div>

2.  Modbusアドレスを変更します：Modbusアドレスにアドレスを入力し、「Write to Device」をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image23.png"/></div>

設定ページでは、デバイス名、データタイプ、データアップロード間隔を変更できます。変更後は、「Write to Device」をクリックして変更を反映させる必要があります。

アプリケーション設定では、ツールがセンサーデータを読み取るサイクルを設定できます。最小値は2秒で、曲線のドット範囲も設定可能です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image24.png"/></div>

「Firmware Update」をクリックしてデバイスのファームウェアを更新します。ファームウェアを入手するには、販売または技術サポート（sensecap@seeed.cc）にお問い合わせください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image25.png"/></div>

アップグレードページでは、メインボードファームウェアまたはドライバーボードファームウェアの更新を選択する必要があります。ローカルリポジトリからファームウェアファイルを選択し、「Update Now」をクリックします。更新プロセス中に予期しない電源切れが発生した場合、更新は実行されません。同じプロセスを再度実行してファームウェアを更新する必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image26.png"/></div>

## シリアルデバッグツール

通信設定は以下の通りです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image27.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image28.png"/></div>

- シリアルデバッグアシスタントで、対応するCOMポートを選択します。

- 「Enterキーを押して新しい行を開始する」チェックボックスをオンにします。

- ボーレートを9,600に設定します。

- 送信エリアで送信します。

- シリアル受信ウィンドウで対応する0XAメッセージを受信した場合、設定は成功です。受信できない場合は、COMポートとボーレートを確認してください。

詳細なASCIIコマンドについては次の章をご確認ください。

# 通信プロトコル

デバイスは以下の通信プロトコルをサポートしています：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image29.png"/></div>

## Modbus-RTUプロトコル

**プロトコル通信パラメータ**

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image31.png"/></div>

### Modbus-RTUプロトコルメッセージフォーマット

センサーデータはInput Registerに格納されており、読み取り専用です。

RS-485のデバイスアドレスと通信ボーレートはHolding Registerに格納されており、変更可能です。

各レジスタは16ビットで、2バイトを占有します。

**Input Registerからメッセージを読み取る**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image32.png"/></div>

**Holding Registerを読み書きする**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image33.png"/></div>

### レジスタアドレス定義

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image34.png"/></div>

### Modbus-RTU読み取り

以下は**Modbus Pollツール**の例です

([https://www.modbustools.com/download.html](https://www.modbustools.com/download.html)からダウンロード可能)。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image35.png"/></div>

接続パラメータの設定：ボーレート9600bps、データビット8、パリティなし、ストップビット1。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image36.png"/></div>

空気温度レジスタ0x0000から0x0001を読み取り、[Setup]をクリックしてRead/Write Definitionを選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image37.png"/></div>

デフォルトのスレーブIDを設定します（5-in-1は10、7-in-1は20、9-in-1は38）、機能コード04、開始アドレス0、数量（5-in-1は6、7-in-1は28、9-in-1は32）。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image38.png"/></div>

コンピュータがセンサーデータを1秒ごとに読み取り、測定値（ライン0とライン1）が以下の画像に示されます。測定値を1000で割ると、実際の温度値が得られます。28300/1000 = 28.3°C。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image39.png"/></div>

右側では、送信および受信されたデータパッケージの生データを確認できます。

温度が正の場合：

1. ホストが送信：01 04 00 00 00 02 71 CB

2. スレーブが応答：01 04 04 00 00 6E 8C D6 41

3. 温度データ0x00006E8C（16進数）が返され、10進数に変換すると28300となります。これを1000で割ることで対応する空気温度が得られます。空気温度 = 28300/1000 = 28.3°C。

**温度が負の場合：**

温度は補数計算を通じて取得する必要があります。

1. ホストが送信：01 04 00 00 00 02 71 CB

2. スレーブが応答：01 04 04 FF FF FC 18 D6 41

3. 返された温度データFFFFFC18H（16進数補数）。

4. 元のコードは - (FF FF FC 18-1 = FF FF FC 17) = 80 00 03 E8（16進数）= -1000（10進数）。

5. 温度測定値は -1000/1000 = -1°C。

**S500デコード：**

レジスタ0x0000~0x0005を読み取ります。

送信コマンド：0A 04 00 00 00 06 71 73（チェックコード）；

返答：26 04 40 00 00 70 80（温度）00 00 95 10（湿度）06 07 94 40（気圧）99 09（チェックコード）；レジスタ0x0008~0x0013を読み取ります。送信コマンド：0A 04 00 08 00 0C 70 B6（チェックコード）；

返答：0A 04 0C 00 00 00 00（最小風向）00 03 6E 84（最大風向）00 03 C8 C0（平均風向）00 00 00 00（最小風速）00 00 04 BC（最大風速）00 00 02 10（平均風速）BC 78（チェックコード）

**S700デコード：**

レジスタ0x0000~0x001Fおよび0x0030~0x0033を読み取ります。

送信コマンド：14 04 00 00 00 20 F3 06

返答：14 04 40 00 00 70 80（温度）00 00 95 10（湿度）06 07 94 40（気圧）00 00 00 00（光）00 00 00 00（最小風向）00 00 00 00（最大風向）00 00 00 00（平均風向）00 00 00 00（最小風速）00 00 00 00（最大風速）00 00 00 00（平均風速）00 00 00 00（累積降雨量）00 00 00 00（累積降雨時間）00 00 00 00（降雨強度）00 00 00 00（最大降雨強度）00 00 6A 7C（加熱温度）00 00 00 00（状態の傾き）99 09（チェックコード）

**S900デコード：**

レジスタ0x0000~0x001Fおよび0x0030~0x0033を読み取ります。

送信コマンド：26 04 00 00 00 20 F7 05

返答：26 04 40 00 00 70 80（温度）00 00 95 10（湿度）06 07 94 40（気圧）00 00 00 00（光）00 00 00 00（最小風向）00 00 00 00（最大風向）00 00 00 00（平均風向）00 00 00 00（最小風速）00 00 00 00（最大風速）00 00 00 00（平均風速）00 00 00 00（累積降雨量）00 00 00 00（累積降雨時間）00 00 00 00（降雨強度）00 00 00 00（最大降雨強度）00 00 6A 7C（加熱温度）00 00 00 00（状態の傾き）99 09（チェックコード）

PM2.5とPM10を個別に読み取る必要があります：

コマンド送信: 26 04 00 30 00 04 F7 11

返答: 26 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(チェックコード)

**S1000デコード:**

レジスタ0x0000~0x001Fおよび0x0030~0x0033を読み取ります。

コマンド送信: 2B 04 00 00 00 20 F6 18

返答: 2B 04 40 00 00 70 80 (温度) 00 00 95 10(湿度) 06 07 94 40(気圧) 00 00 00 00(光) 00 00 00 00(最小風向)  
00 00 00 00(最大風向) 00 00 00 00(平均風向) 00 00 00 00 (最小風速) 00 00 00 00(最大風速) 00 00 00 00(平均風速) 00 00 00 00(累積降雨量) 00 00 00 00(累積降雨時間) 00 00 00 00(降雨強度) 00 00 00 00(最大降雨強度) 00 00 6A 7C(加熱温度) 00 00 00 00(状態のダンピング) 99 09(チェックコード)

PM2.5、PM10、およびCO2を個別に読み取る必要があります：

コマンド送信: 2B 04 00 30 00 04 F6 0C

返答: 2B 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(チェックコード)

レジスタ0x0040~0x0041を読み取ります。

コマンド送信: 2B 04 00 40 00 02 77 D5

返答: 2B 04 04 00 0C EC 98 （CO2） FD 2F （チェックコード）

### ノイズセンサー

ノイズセンサーは独立したRS485センサーとして使用され、同じRS-485バス上の他の測定ユニットと並列で接続されるため、個別に読み取りおよび設定する必要があります。

仕様：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image40.png"/></div>

データ読み取りプロトコルと設定：

通信プロトコルは標準のRS485 Modbus-RTUプロトコルを採用しており、プロトコル通信パラメータは以下の通りです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image41.png"/></div>

ノイズセンサーのデータをクエリする（アドレス: 40, 0x28）：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image42.png"/></div>

クエリが成功すると、以下の情報が返されます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image01.png"/></div>

実際のDB = レジスタ値 / 100

ノイズレジスタ値が0x128E=4750の場合、値は=4750/100=47.5dB

## ASCIIプロトコル

### コマンド定義

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image44.png"/></div>

### クエリコマンド形式

コマンドには2つの形式があります：

**1.** **「=」を含まないコマンドは基本的なクエリ方法を指します。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/11.png"/></div>

*例: `?<CR><LF>` はデバイスのアドレスをクエリすることを示します*

**2.** **「=」を含むコマンドは引数付きのクエリを指します。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/22.png"/></div>

*例: 0XA;BD=`?<CR><LF>` はデバイスのボーレートをクエリすることを示します*

### 設定コマンド形式

**特定のパラメータを設定します。例えば、ボーレートを設定する場合。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/33.png"/></div>

*例: 0XA;BD=96`<CR><LF>` はデバイスのボーレートを設定することを示します*

### コマンドリスト

以下を参照してください：  
[https://files.seeedstudio.com/products/101990784/SenseCAP%20ONE%20Compact%20Weather%20Sensor%20User%20Guide-v2.0.pdf](https://files.seeedstudio.com/products/101990784/SenseCAP%20ONE%20Compact%20Weather%20Sensor%20User%20Guide-v2.0.pdf)

## SDI-12

SDI-12通信は3本のワイヤを使用します。そのうち2本はセンサーの電源供給用で、もう1本はSDI-12信号用です。

SDI-12バス上の各センサーには一意のアドレスが割り当てられており、'0'、'1'～'9'、'A'～'Z'、'a'～'z'に設定できます。SenseCAP ONEのSDI-12アドレスはデフォルトで'0'に設定されています。このセンサーがサポートする命令は次章に示されており、各命令はSDI-12 v1.4に準拠しています。

センサーは3.6～16VのDC電源で動作します。センサーが電源オンになると、すぐにスリープモードに入り、データ収集装置からの指示を待ちます。SDI-12は9600bpsのボーレート、1スタートビット（高レベル）、7データビット（高0と低1、反転ロジック）、1偶数パリティビット、1ストップビットを使用します。

送信される各バイトのシーケンスは以下の図に示されています：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/44.png"/></div>

### SDI-12コマンドと応答

以下を参照してください：
[https://files.seeedstudio.com/products/101990784/SenseCAP%20ONE%20Compact%20Weather%20Sensor%20User%20Guide-v2.0.pdf](https://files.seeedstudio.com/products/101990784/SenseCAP%20ONE%20Compact%20Weather%20Sensor%20User%20Guide-v2.0.pdf)

### SDI-12読み取り

**SDI-12の配線**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image47.png"/></div>

**USB to SDI-12デバッガを使用してデバイスと通信する**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image48.png"/></div>

**通信設定：**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image49.png"/></div>

緑のワイヤ（GNDデータ）と黄色のワイヤ（SDI-12データ）を**USB to SDI-12**デバッガに接続します。

赤のワイヤ（Vin+ 電源正極）と茶色のワイヤ（Vin- 電源負極）を12V電源に接続します。

シリアルポートデバッグアシスタントをダウンロードしてください：
[https://github.com/Neutree/COMTool](https://github.com/Neutree/COMTool)、その後シリアルポートデバッグツールを開きます。

- 適切なポート番号を選択します。
- ボーレートをUSB to SDI-12デバッガのボーレートに設定します（SDI-12プロトコルのボーレートではないことに注意してください）。
- "CRLF"をチェックします。
- シリアルポートを開くをクリックします。
- デバイスアドレスクエリコマンド"?! "を送信します。応答として"0"が表示されれば、接続が正常であることを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image50.png"/></div>

**測定開始**

気温、湿度、気圧、光強度を読み取ります。

"測定開始コマンド 0M!"を送信すると、センサーは最初に"00024"と応答します。これは"0M!"コマンドが測定に2秒かかり、4つの測定値を返すことを意味します。2秒後、センサーは自身のアドレス"0"で応答し、測定が完了したことを示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image51.png"/></div>

その後、"測定値読み取りコマンド 0D0!"を送信して、この測定の4つの測定値を取得します。それらは、気温+27.01℃、湿度64.74%、気圧100720Pa、光強度10Luxです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image52.png"/></div>

拡張測定コマンド0M1!を使用して、最小風向、最大風向、平均風向、最小風速、最大風速、平均風速を読み取ります。デバイスは"00056"と応答します。これは"0M1!"コマンドが測定に5秒かかり、6つの測定値を返すことを意味します。5秒後、デバイスは自身のアドレス"0"で応答し、測定が完了したことを示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image53.png"/></div>

その後、"測定値読み取りコマンド 0D0!"を送信して、この測定の6つの測定値を取得します。それらは、最小風向345.9度、最大風向347.5度、平均風向346.3度、最小風速2.8m/s、最大風速2.8m/s、平均風速2.8m/sです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image54.png"/></div>

その後、"連続測定コマンド 0R2!"を送信すると、デバイスは4つの測定値を返します：累積降雨量1.2mm、累積降雨時間20秒、降雨強度1.2mm/h、最大降雨強度72.0mm/h。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image55.png"/></div>

# エラーコード

## Modbus エラーコード

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image56.png"/></div>

## ASCII エラーコード 
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image57.png"/></div>

## SDI-12 エラーコード 

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image58.png"/></div>