---
description: SenseCAP ONE Compact Weather Sensor の使用を開始する
title: SenseCAP ONE Compact Weather Sensor の使用を開始する
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor
sku: 101990787,101990693,101990784,101990902,101990961,101991022,101991021,101991023,101991024,101991044,101991102,101991050,101991232,101991141
last_update:
  date: 03/18/2026
  author: Kian
createdAt: '2023-04-13'
updatedAt: '2026-03-31'
url: https://wiki.seeedstudio.com/ja/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor/
---
# SenseCAP ONE Compact Weather Sensor の使用を開始する

# 事前インストール

## 取り付け

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image2.png" /></div>

# 取り付け

### デバイスインターフェースの紹介

本体の底面には 2 つのコネクタがあります。

- USB Type-C インターフェースにより、一般的な USB Type-C ケーブルでコンピュータと本機を接続して設定を行うことができます。

- メインデータインターフェースには M12 8 ピンケーブルを接続でき、複数のバスプロトコルをサポートします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image4.png" /></div>

#### V1 と V2 の気象ステーション

V1 と V2 の気象ステーションは、**白いラベル上の SKU** またはベースデザインによって識別できます。

さらに、USB Type-C ポートの位置も異なります。V1 では白いラベルと同じ側にあり、V2 では反対側にあります。

:::tip
次の気象ステーションは V2 に更新されています：S500、S700、S1000。
:::

| 製品名 | V1 SKU    | V2 SKU    |
| -----------  | --------  | --------- |
| S200         |    None   | 101991044 |
| S500         | 101990693 | 101991021 |
| S600-A       |    None   | 101991232 |
| S700         | 101990787 | 101991022 |
| S700-A       |    None   | 101991050 |
| S700-B       |    None   | 101991102 |
| S700-C       |    None   | 101991141 |
| S800         |    None   | 101991023 |
| S900         | 101990784 |    None   |
| S1000        | 101990902 | 101991024 |

:::info
- SenseCAP ONE V2 と V1 の違いは何ですか？
  - ソフトウェア機能は変更されておらず、V2 は V1 の完全な代替として互換性があります。
  - 風速測定など、一部の性能が最適化されています。
  - RS422/RS232 インターフェースは削除されています。
:::

#### V1 デバイスインターフェースレイアウト

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/V1.png" /></div>

#### V2 デバイスインターフェースレイアウト

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image3_V2.png" /></div>

### USB ケーブルで接続する

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image5.png" /></div>

### M12 ケーブル

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image6.png" /></div>

本機は M12 8 ピンコネクタを採用しており、色分けされた各ピンが電源およびデータ通信を提供します（上図参照）。

RS-485 で動作させる場合、4 本の線のみを接続することができます（ヒーター機能は使用しません）。残りの線はショートを防ぐために個別にテープで巻いてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image7.png" /></div>

ケーブルを挿し込む際は、ケーブル側の穴と本機コネクタ側のピンの位置を合わせる必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image8.png" /></div>

ケーブルを差し込み、時計回りに回して締め付けます。

注意：ケーブルを底面に挿し込む前に、ケーブルが底面に正しく向くようにしてください。そうしないと、ピンが斜めになり、通信異常の原因となる可能性があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image9.png" /></div>

ヒーター機能付きで本機を使用する場合は、別途 24V（24V@1A を推奨）の電源が必要です。グレーの 5 番線を電源のマイナスに、ピンクの 6 番線を電源のプラス極に接続します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image10.png" /></div>

### デバイスの取り付け

主な取り付け方法は 2 つあり、スリーブを使ってポールに取り付ける方法と、フランジプレートでプラットフォームに取り付ける方法があります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image11.png" /></div>

スリーブのサイズは以下の通りです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image12.png" /></div>

ポールの直径は 75cm 以下であることを推奨します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image13.png" /></div>

フランジプレートの寸法は以下の通りです。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image14.png" /></div>

> 注意：可能な限り正確な風向データを取得するため、取り付け時にはベースの**矢印**を真北に正確に向けて、物理的な北方向を確保してください。そうでない場合は、設定時に電子コンパスを有効にしてください。

# デバイスの動作モード

取り付け後、本機の電源を入れ、設定を行い、デバイスからデータを収集できます。

本機には 2 つの動作モード、**設定モードと動作モード**があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image15.png" /></div>

### USB ポート経由でデバイスを設定する

本機の底面には防水の丸いカバーがあります。これを反時計回りに回して取り外すと、USB Type-C コネクタと設定ボタンが見えます。

USB Type-C ケーブルで本機とコンピュータを接続します。コンピュータは自動的にデバイスドライバをインストールします。ドライバが正常にインストールされると、デバイスマネージャーにシリアルポートが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image16.png" /></div>

ドライバが自動的にインストールされない場合は、このリンクをクリックして[手動でダウンロード](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)し、[インストール](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)してください。[driver](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)（バージョンは CP210x Windows Drivers）を使用します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image17.png" /></div>

**デバイスを設定する方法は 2 つあります：**

- SenseCAP ONE Configuration Tool

- シリアルデバッグツール

### SenseCAP ONE Configuration Tool

SenseCAP ONE Configuration Tool は、デバイスを設定するためのグラフィカルインターフェースを提供します。以下の GitHub リンクからツールをダウンロードできます。

&lt;https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases&gt;

ご利用の環境に応じて、Windows、macOS、または Linux 用のソフトウェアを選択してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png" /></div>

次の画像は、SenseCAP ONE Configuration Tool のメインインターフェースを示しています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png" /></div>

1. ソフトウェアを開き、シリアルポートのプルダウンボックスをクリックして、本機に対応するシリアルポートを選択します。

2. ボーレートを 9600 に設定します。

3. Connect をクリックします。接続に成功すると、右側のセンサーデータエリアに対応する測定値が表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image20.png" /></div>

Settings をクリックしてデバイス設定画面に入り、"Read From Device" をクリックしてデバイス情報を取得します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image21.png" /></div>

1. 通信プロトコルを選択します。この例では RS-485 Modbus RTU を選択しています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image22.png" /></div>

2. Modbus アドレスを変更します：Modbus address 欄にアドレスを書き込み、その後 "Write to Device" をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image23.png" /></div>

設定ページでは、デバイス名、データタイプ、データアップロード間隔を変更できます。いずれかを変更した場合は、変更を有効にするために "Write to Device" をクリックする必要があります。

アプリケーション設定では、ツールがセンサーデータを読み取る周期（最小 2 秒）と、カーブのドット範囲を設定できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image24.png" /></div>

"Firmware Update" をクリックしてデバイスのファームウェアを更新します。ファームウェアを入手するには、営業または技術サポート（sensecap@seeed.cc）までご連絡ください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image25.png" /></div>

アップグレードページでは、メインボードファームウェアまたはドライバボードファームウェアのどちらを更新するかを選択する必要があります。ローカルリポジトリからファームウェアファイルを選択し、"Update Now" をクリックします。更新中に予期しない電源断が発生した場合、更新は実行されません。その場合は、同じ手順で再度ファームウェアの更新を行ってください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image26.png" /></div>

#### ファームウェアのアップグレード

1. `SenseCAP One Configuration Tool` を開きます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_One_Configuration_Tool.png" /></div>

2. Type-C ケーブルでデバイスをコンピュータに接続します

3. ソフトウェアを開き、デバイスに対応する正しい `COM` ポートを選択し、`"Connect"` をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Connect.png" /></div>

4. 接続後、`"Firmware Update"` をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Firmware_Update.png" /></div>

5. 対象ボードと対応するファームウェアファイルを選択します

- `Master board` を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Master_board.png" /></div>

- `"Local File"` をクリックし、ファームウェアフォルダを参照します

- `"Update"` をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update.png" /></div>

6. `"Update"` をクリックした後、デバイスの Reset ボタン（Type-C ポートの横）を押します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset.png" /></div>

ボタンを押して数秒後にアップデート処理が開始されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update2.png" /></div>

7. アップデートが完了したら、もう一度 Reset ボタンを押し、画面上の `"OK"` をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset2.png" /></div>

8. 上記の手順を繰り返して、`Slave Board 1` に別のファームウェアを書き込みます。

9. 完了したら Firmware Update ウィンドウを閉じ、`"Disconnect"` をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Disconnect.png" /></div>

これで気象ステーションのファームウェアアップグレード手順はすべて完了です。

### シリアルデバッグツール

通信設定は次のとおりです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image27.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image28.png" /></div>

- Serial Debug Assistant で、対応する COM ポートを選択します。

- "click Enter to start a new line" チェックボックスにチェックを入れます。

- ボーレートを 9,600 に設定します。

- 送信エリアから送信します。

- シリアル受信ウィンドウで対応する 0XA メッセージを受信した場合、設定は成功です。受信しない場合は、COM ポートとボーレートを確認してください。

詳細な ASIIC コマンドについては次の章を確認してください。

# 通信プロトコル

本デバイスは次の通信プロトコルをサポートします：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image29.png" /></div>

## Modbus-RTU プロトコル

**プロトコル通信パラメータ**

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/DefaultDeviceAddress.png" /></div>

### Modbus-RTU プロトコルメッセージ形式

センサーデータは Input Register に格納されており、読み取り専用です。

デバイスアドレスと RS-485 の通信ボーレートは Holding Register に格納されており、変更可能です。

各レジスタは 16 ビットで、2 バイトを占有します。

**Input Register からメッセージを読み取ります。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image32.png" /></div>

**Holding Register を読み書きします。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image33.png" /></div>

### レジスタアドレス定義

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image34.png" /></div>

### Modbus-RTU 読み取り

以下は **Modbus Poll tool** の例です

(&lt;https://www.modbustools.com/download.html&gt; からダウンロード)。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image35.png" /></div>

接続パラメータの設定：ボーレート 9600bps、データビット 8、
パリティ None、ストップビット 1。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image36.png" /></div>

空気温度レジスタ 0x0000 から 0x0001 を読み取り、Setup をクリックして Read/Write Definition を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image37.png" /></div>

デフォルトのスレーブ ID（5-in-1 は 10、7-in-1 は 20、9-in-1 は 38）、ファンクションコード 04、開始アドレス 0、数量（5-in-1 は 6、7-in-1 は
28、9-in-1 は 32）を設定します；

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image38.png" /></div>

これでコンピュータは 1 秒ごとにセンサーデータを読み取り、測定値（line 0 と line 1）は下図のように表示されます。測定値を 1000 で割ると実際の温度値となり、28300/1000 = 28.3 °C です

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image39.png" /></div>

右側では、送受信された生データパケットを確認できます。

温度が正の場合：

1. ホスト送信 01 04 00 00 00 02 71 CB

2. スレーブ応答 01 04 04 00 00 6E 8C D6 41

3. 返される温度データ 0x00006E8C（16 進数）を 10 進数に変換すると 28300 となり、これを 1000 で割ることで対応する空気温度を取得します。空気温度 = 28300/1000 = 28.3 °C

**温度が負の場合**

温度は補数計算によって取得する必要があります。

1. ホスト送信 01 04 00 00 00 02 71 CB

2. スレーブ応答 01 04 04 FF FF FC 18 D6 41

3. 返される温度データ FFFFFC18H（16 進補数）。

4. 元のコードは - (FF FF FC 18-1 = FF FF FC 17) = 80 00 03 E8(16 進) = -1000 (10 進)。

5. したがって温度測定値は -1000/1000 = -1°

**S500 デコード**

レジスタ 0x0000~0x0005 を読み取ります。

コマンド送信：0A 04 00 00 00 06 71 73（チェックコード）；

応答：26 04 40 00 00 70 80（温度）00 00 95 10（湿度）06 07 94 40（気圧）99 09（チェックコード）；レジスタ 0x0008~0x0013 を読み取ります。コマンド送信：0A 04 00 08 00 0C 70 B6（チェックコード）；

応答：0A 04 0C 00 00 00 00（最小風向）00 03 6E 84（最大風向）00 03 C8 C0（平均風向）00 00 00 00（最小風速）00 00 04 BC（最大風速）00 00 02 10（平均風速）BC 78（チェックコード）

**S600 デコード**

レジスタ 0x0000~0x0013 を読み取ります

コマンド送信: 45 03 00 00 00 13 0B 43

応答: 45 04 40 00 00 70 80（温度）00 00 95 10（湿度）06 07 94 40（気圧）00 00 00 00（照度）00 00 00 00（最小風向）00 00 00 00（最大風速）00 00 00 00（平均風向）00 00 00 00（最小風速）00 00 00 00（最大風速）00 00 00 00（平均風速）77FD（チェックコード）

**S700 デコード**

レジスタ 0x0000-0x001F および 0x0030-0x0033 を読み取ります。

コマンド送信: 14 04 00 00 00 20 F3 06

応答: 14 04 40 00 00 70 80（温度）00 00 95 10（湿度）06 07 94 40（気圧）00 00 00 00（照度）00 00 00 00（最小風向）00 00 00 00（最大風向）00 00 00 00（平均風向）00 00 00 00（最小風速）00 00 00 00（最大風速）00 00 00 00（平均風速）00 00 00 00（累積降雨量）00 00 00 00（累積降雨時間）00 00 00 00（降雨強度）00 00 00 00（最大降雨強度）00 00 6A 7C（加熱温度）00 00 00 00（転倒状態）99 09（チェックコード）

**S900 デコード**

レジスタ 0x0000-0x001F および 0x0030-0x0033 を読み取ります。

コマンド送信: 26 04 00 00 00 20 F7 05

応答: 26 04 40 00 00 70 80 (温度) 00 00 95 10(湿度) 06 07 94 40(気圧) 00 00 00 00(照度) 00 00 00 00(最小風向) 00 00 00 00(最大風向) 00 00 00 00(平均風向) 00 00 00 00 (最小風速) 00 00 00 00(最大風速) 00 00 00 00(平均風速) 00 00 00 00(累積降雨量) 00 00 00 00(累積降雨時間) 00 00 00 00(降雨強度) 00 00 00 00(最大降雨強度)00 00 6A 7C(加熱温度) 00 00 00 00(転倒状態) 99 09(チェックコード)

PM2.5 と PM10 は別途読み取る必要があります：

コマンド送信: 26 04 00 30 00 04 F7 11

応答: 26 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(チェックコード)

**S1000 デコード**

レジスタ 0x0000-0x001F および 0x0030-0x0033 を読み取ります。

コマンド送信: 2B 04 00 00 00 20 F6 18

応答: 2B 04 40 00 00 70 80 (温度) 00 00 95 10(湿度) 06 07 94 40(気圧) 00 00 00 00(照度) 00 00 00 00(最小風向) 00 00 00 00(最大風向) 00 00 00 00(平均風向) 00 00 00 00 (最小風速) 00 00 00 00(最大風速) 00 00 00 00(平均風速) 00 00 00 00(累積降雨量) 00 00 00 00(累積降雨時間) 00 00 00 00(降雨強度) 00 00 00 00(最大降雨強度)00 00 6A 7C(加熱温度) 00 00 00 00(転倒状態) 99 09(チェックコード)

PM2.5、PM10、および CO2 は別途読み取る必要があります：

コマンド送信: 2B 04 00 30 00 04 F6 0C

応答: 2B 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(チェックコード)

レジスタ 0x0040~0x0041 を読み取ります。

コマンド送信:2B 04 00 40 00 02 77 D5

Return:2B 04 04 00 0C EC 98 （CO2） FD 2F （チェックコード）；

### 騒音センサ

騒音センサは独立した RS485 センサとして使用され、同じ RS-485 バス上で他の測定ユニットと並列に接続されるため、個別に読み取りおよび設定を行う必要があります。

仕様：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image40.png" /></div>

データ読み取りプロトコルと設定：

通信プロトコルには標準の RS485 Modbus-RTU プロトコルを採用しており、プロトコル通信パラメータは次のとおりです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image41.png" /></div>

騒音センサ（アドレス：40, 0x28）のデータを問い合わせる：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image42.png" /></div>

問い合わせが成功すると、次の情報が返されます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image01.png" /></div>

実際の dB = レジスタ値 /100

騒音レジスタ値は 0x128E=4750 であり、値は 4750/100=47.5dB となります

## ASCII プロトコル

### コマンド定義

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image44.png" /></div>

### クエリコマンド形式

コマンドには 2 つの形式があります：

**1.** **`=` を含まないコマンドは** **基本的なクエリ方法を指します。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/11.png" /></div>

*例：`?<CR><LF>` はデバイスのアドレスを問い合わせることを示します*

**2.** **`=` を含むコマンドは、引数付きのクエリを指します**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/22.png" /></div>

*例：0XA;BD=`?<CR><LF>` はデバイスのボーレートを問い合わせることを示します*

### 設定コマンド形式

**指定したパラメータを設定します。例えばボーレートを設定します。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/33.png" /></div>

*例：0XA;BD=96`<CR><LF>` はデバイスのボーレートを設定することを示します*

### コマンド一覧

以下を参照してください：
[SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

## SDI-12

SDI-12 通信は 3 本のワイヤを採用しており、そのうち 2 本はセンサの電源線、もう 1 本は SDI-12 信号線です。

SDI-12 バス上の各センサには一意のアドレスがあり、'0'、'1' ～ '9'、'A' ～ 'Z'、'A' ～ 'Z' に設定できます。SenseCAP ONE の SDI-12 アドレスはデフォルトで '0' です。このセンサがサポートする命令は次の章に示されており、各命令は SDI-12 v1.4 に準拠しています。

センサは 3.6～16V の DC 電源で駆動されます。センサに電源が投入されるとすぐにスリープモードに入り、データ収集装置からの指示を待ちます。SDI-12 はボーレート 9600bps、1 スタートビット（High レベル）、7 データビット（High が 0、Low が 1 の反転ロジック）、1 偶数パリティビット、1 ストップビットを使用します。

送信される各バイトのシーケンスは次の図のとおりです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/44.png" /></div>

### SDI-12 コマンドと応答

[SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf) を参照してください

### SDI-12 読み取り

**SDI-12 の配線**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image47.png" /></div>

**USB to SDI-12 デバッガを使用してデバイスと通信する**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image48.png" /></div>

**通信設定：**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image49.png" /></div>

緑のワイヤ（GND Data）と黄色のワイヤ（SDI-12 Data）を **USB to SDI-12** デバッガに接続します。

また、赤いワイヤ（Vin+ 電源プラス）と茶色のワイヤ（Vin- 電源マイナス）を 12V 電源に接続します。

シリアルポートデバッグアシスタントをダウンロードします：
&lt;https://github.com/Neutree/COMTool&gt; を開き、シリアルポートデバッグツールを起動します。

- 正しいポート番号を選択します

- ボーレートを USB to SDI-12 デバッガのボーレートに設定します（SDI-12 プロトコルのボーレートではないことに注意してください）

- 「CRLF」にチェックを入れます

- シリアルポートを開くをクリックします。

- クエリデバイスアドレスコマンド "?!" を送信し、応答 "0" が表示されれば、接続が正常であることを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image50.png" /></div>

**測定開始**

気温、湿度、気圧、照度を読み取ります

"start measurement command 0M!" を送信すると、センサはまず "00024" と応答します。これは "0M!" コマンドが測定に 2 秒を要し、4 つの測定値を返すことを意味します。2 秒後、センサは自分のアドレス "0" で応答し、測定が完了したことを示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image51.png" /></div>

その後 "Read measurement value command 0D0!" を送信して、この測定の 4 つの測定値を取得します。これらは、気温 +27.01℃、湿度 64.74%、気圧 100720Pa、照度 10Lux です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image52.png" /></div>

拡張測定コマンド 0M1! を使用して、最小風向、最大風向、平均風向、最小風速、最大風速、および平均風速を読み取ります。デバイスは "00056" と応答します。これは "0M1!" コマンドが測定に 5 秒を要し、6 つの測定値を返すことを意味します。5 秒後、デバイスは自分のアドレス "0" で応答し、測定が完了したことを示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image53.png" /></div>

その後 "Read measurement value command 0D0!" を送信して、この測定の 6 つの測定値を取得します。これらは、最小風向 345.9 度、最大風向 347.5 度、平均風向 346.3 度、最小風速 2.8m/s、最大風速 2.8m/s、平均風速 2.8m/s です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image54.png" /></div>

その後 "continuous measurement command 0R2!" を送信すると、デバイスは 4 つの測定値を返します：累積降雨量 1.2mm、累積降雨時間 20 秒、降雨強度 1.2mm/h、最大降雨強度 72.0mm/h。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image55.png" /></div>

## エラーコード

### Modbus エラーコード

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image56.png" /></div>

### ASCII エラーコード

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image57.png" /></div>

### SDI-12 エラーコード

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image58.png" /></div>

## リソース

[SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

## FAQ

**平均風速と平均風向はどのように計算されますか？**

デフォルトの平均時間ウィンドウは 5 秒です。このウィンドウ内で、デバイスは風速と風向のデータを 5 回収集し、平均値を返します。
