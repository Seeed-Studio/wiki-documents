---
description: Wio Terminal と Wappsto IoT の使い方を始める
title: Wio Terminal と Wappsto IoT の使い方を始める
keywords:
- Wio_terminal Easy_IoT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Get-Started-with-Wio-Terminal-and-Wappsto-IoT
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal と Wappsto IoT の使い方を始める

## 概要

**Wio Terminal** は、ArduinoおよびMicroPythonに対応した**Realtek RTL8720DN**によるワイヤレス接続を備えたSAMD51ベースのマイクロコントローラーです。現在、ワイヤレス接続はArduinoでのみサポートされています。**120MHz**（最大200MHzまでブースト）、**4MB**の外部フラッシュ、**192KB**のRAMで動作します。BluetoothとWi-Fiの両方をサポートしており、IoTプロジェクトの基盤を提供します。Wio Terminal自体には、**2.4インチLCDスクリーン、オンボードIMU（LIS3DHTR）、マイク、ブザー、microSDカードスロット、光センサー、赤外線エミッター（IR 940nm）**が装備されています。さらに、[Grove Ecosystem](https://www.seeedstudio.com/grove.html)用の多機能Groveポート2つと、追加機能のための40ピンのRaspberry Pi互換GPIOも備えています。

Wappstoは、さまざまなソースからデータを自動的に取得するために簡単に設定できる強力でインテリジェントなアプリケーションです。データを監視および分析するための統合標準ダッシュボードを備えています。

Wappstoはまた、開発者が統合や自動化を備えたWebアプリとしてIoTアプリケーションを作成できるツールを提供します。Wappstoにはマーケットプレイスも統合されており、開発者やユーザーがアプリを共有することができます。

SeluxitによるWappstoは、ライブまたは履歴データの視覚化を簡単にするカスタマイズ可能なダッシュボードを特徴とする強力なIoTプラットフォームであり、クラウド自動化を含む多くの機能を備えています。

IOSおよびAndroid用のWappsto APPを使用すると、デバイスを即座に表示および制御することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto1.png" alt="pir" width={500} height="auto" /></p>

## Wappstoの特徴

Wappstoに接続することで、以下の機能を操作できます。詳細については、[こちら](https://www.seluxit.com/iot-products/iot-solution-builder/wapps)でデータをさらに活用する方法をご覧ください。

### ダッシュボードの特徴

#### ダッシュボードの種類

1. 空白のダッシュボード - ウィジェットを自由に組み合わせる静的なキャンバス
2. フリート管理 - ウィジェットを自由に組み合わせる動的なキャンバス - デバイス間を簡単に切り替えて、可能な異常値の概要を取得
3. ジオロケーションダッシュボード - デバイスの地図概要、デバイスアラームに基づいてフィルタリング可能<br />
![](https://media-exp1.licdn.com/dms/image/C4E22AQEUQmsBHpzjaw/feedshare-shrink_2048_1536/0/1646730023138?e=1651708800&v=beta&t=cTkLbXeXVVgWV9a-Is62CDUlb3s4t-GqqSpBsusyy8A)
<!-- 画像リンクに問題があります -->

- フィルタリングされたリストフィルタを使用したジオロケーション:
![](https://media-exp1.licdn.com/dms/image/C4E22AQHzGNNMQWDfLw/feedshare-shrink_2048_1536/0/1646902827428?e=1651708800&v=beta&t=hChKemrGzqtM53xwikfvONJu_2DyrCSMX17jMKXuybc)
<!-- 画像リンクに問題があります -->

#### 空白およびフリート管理ダッシュボードのウィジェット

1. フィルタリングされたリスト - デバイス値の制限を設定し、ジオロケーションダッシュボードでアラームや視覚的なキューをトリガー
 ![](https://media-exp1.licdn.com/dms/image/C4E22AQGPxAJgcCVbKw/feedshare-shrink_2048_1536/0/1646809215991?e=1651708800&v=beta&t=-XvhET6EEvVJetMns_UcJ9AY8hBIcVw_R8XEi0vUZhI)
<!-- 画像リンクに問題があります -->

2. 履歴位置ウィジェット - 設定された期間内のデバイス位置に基づいて地図上に描画（最大1分ごとに1マーク、マーク間の最小距離50メートル）
![](https://media-exp1.licdn.com/dms/image/C4E22AQE8TWlSnbBS0Q/feedshare-shrink_2048_1536/0/1647252033404?e=2147483647&v=beta&t=YWuyjUFveAiTut4AwMgXFRZL5BiaqJYKV8MeYcwq31E)

3. チャートウィジェット - 複数のデータソース、期間、チャートスタイル、集計方法を選択して設定可能。ライブデータを表示するように切り替えることも可能。
![](https://media-exp1.licdn.com/dms/image/C4E22AQERLllOaWHaeA/feedshare-shrink_1280/0/1647331243930?e=1651708800&v=beta&t=wxkgoFKpxV8A2j-KsXqKRm6t6gnAEorUuR4UaSsu1pk)
<!-- 画像リンクに問題があります -->

4. ライブデータ例:
![](https://media-exp1.licdn.com/dms/image/C4E22AQHexShrPAZxHw/feedshare-shrink_1280/0/1647856842400?e=1651708800&v=beta&t=CziKwYL3y3drg7PyCN-NcC3t6lRjqTxoMoguKy9h_yE)
<!-- 画像リンクに問題があります -->

5. 値リストウィジェット - ライブデータをボックス内に表示し、制御/希望状態値を併せて表示。
![](https://media-exp1.licdn.com/dms/image/C4E22AQHLKi07FF-vjg/feedshare-shrink_1280/0/1647414020945?e=2147483647&v=beta&t=5PjZ0-bA5knscCdfUufKY7b98tXlXbWtpIfFjsZ_ykg)

6. コンパスウィジェット - ライブデータを使用して単一デバイスの角度を表示。
![](https://media-exp1.licdn.com/dms/image/C4E22AQH0uYCQd8y7XQ/feedshare-shrink_1280/0/1647522120991?e=2147483647&v=beta&t=9Biv-IoQukTwfiyEd1siexYGwS5EX5uCaVl_dROZYsI)

7. 液体チャートウィジェット - ライブデータを使用して単一デバイスの相対レベルを表示。
![](https://media-exp1.licdn.com/dms/image/C4E22AQEPNSFj-MKSVw/feedshare-shrink_2048_1536/0/1647609902322?e=2147483647&v=beta&t=suXEme0-tfR6PQQIAzU7xw8hD7CBTGLZ8aAOxogm7t0)

8. ゲージウィジェット - 単一値のライブデータをゲージで表示し、色のスキームや制限を設定可能。
![](https://media-exp1.licdn.com/dms/image/C4E22AQGwQ7COEUwKwA/feedshare-shrink_1280/0/1647939626856?e=2147483647&v=beta&t=NfZBE7e7R-kUNNRUpEiEyRYVO-xXBwrI13NjtvqZHjU)

9. 現在位置ウィジェット - 他のウィジェットとともに1つまたは複数のデバイスの現在位置を表示。
![](https://media-exp1.licdn.com/dms/image/C4D22AQFCTjZrX8RU4g/feedshare-shrink_2048_1536/0/1648046103353?e=1651708800&v=beta&t=CFn2wQhscrECrcNU65PcI7HpuK7NhHtZKVMXQ9VzoWA)
<!-- 画像リンクに問題があります -->

10. ログリストウィジェット - 他のウィジェットとともに1つまたは複数のデバイスや値のログを表示。
![](https://media-exp1.licdn.com/dms/image/C4E22AQEFmHPALVfFhw/feedshare-shrink_2048_1536/0/1648126885539?e=2147483647&v=beta&t=eKmZ70IIQZAq3DR96JXB_nsmSsvBqe8gKIJfG0XZXZs)

### クラウド自動化とWebアプリ

1. Twitter統合
2. Hue統合
3. Shelly統合
4. 天気予報統合（yr.no）
   - ブロック - クラウド自動化
   - Blockly NoCodeプログラミング
   - Blockly JavaScriptプログラミング
   - Wappstoに接続したすべてのデバイスやサービス間で自動化と相互作用を設定
   - TwitterとWappsto:bitのクロス自動化例: [url](https://bit.wappsto.com/project/wappsto-blocks/)

### Wappstoの見落とされがちな機能

1. 複数のバックアップを備えた分散型クラウドサービス
2. デバイス共有
3. エンドツーエンド暗号化（通信暗号化）
4. デバイスセキュリティ（ユニークなデバイスおよびネットワークキー）
5. データ転送
6. データ抽出（CSV形式）
7. プラットフォーム間でのスマートログイン（メール、Google、Facebook、Appleログイン）
8. マルチプラットフォーム対応：ウェブサイト + スマートフォンアプリ

## はじめに

### ハードウェア要件

- Wio Terminal x 1
- コンピュータ x 1
- USB Type-Cケーブル x 1

### ソフトウェア要件

この[リンク](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/#software)を確認してください。

## Wio Terminal WiFiファームウェアの更新

この[リンク](https://wiki.seeedstudio.com/ja/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware)を確認してください。

## Wappstoの前提条件

### Wappstoのアカウント

[Wappsto](https://wappsto.com/)でアカウントを作成していることが前提です。まだ作成していない場合は、まずアカウントを作成してください。

### PCにArduino IDEがインストールされていること

インストールされていない場合は、[url](https://www.arduino.cc/en/Guide)を参照してください。

#### ArduinoJsonライブラリのインストール

ライブラリマネージャーからArduinoJsonライブラリをインストールする必要があります。詳細は[url](https://arduinojson.org/v6/doc/installation/)を参照してください。

#### このWappstoライブラリをインストールする

Arduino IDEにこのライブラリをインストールするには、プロジェクトをZIPファイルとしてダウンロードします。「Code」をクリックし、「Download ZIP」を選択してください。その後、「Sketch」->「Include Library」->「Add .Zip Library...」を選択します。詳細は[url](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries)を参照してください。

### 新しいデバイス用の証明書とIDを生成する

物理デバイスがWappstoに対して自身を識別するためには、ネットワークID、サーバーCA証明書、クライアント証明書/キーが必要です。これらはすべてWappsto.comで生成し、（例に合わせる場合）wappsto_config.hという名前のファイルに配置する必要があります。

#### wappsto_config.h

これを生成するために、このリポジトリに含まれている**Pythonスクリプト**を使用できます。このスクリプトはgenerate_config_headerフォルダ内にあります。初回実行時には必要なライブラリをインストールする必要がある場合があります。

```
cd <ダウンロードしたarduino_wappstoiotのパス>
cd generate_config_header
pip install -r requirements.txt
```

ヘッダーファイルを生成する手順：

1. `generate_config_header`フォルダに移動します：

```
cd generate_config_header
```

2. 以下のコマンドを使用します：

```
python main.py --type arduino
```

3. Wappstoのユーザーとして、メールアドレスとパスワードでログインするよう求められます。

4. 新しく生成されたファイル`wappsto_config.h`をArduinoスケッチフォルダにコピーします。正しく生成されていれば、有効なUUID（例："d7fafe76-b020-4594-8f2a-aae11c6b6589"のような文字列）が`const char* network_uuid =`行に定義されているはずです。

注意：Python2とPython3の両方がインストールされている場合は、以下を使用する必要がある場合があります。

```
pip3 install -r requirements.txt
python3 main.py --type arduino
```

以下のようなエラーが発生した場合：

```
ImportError: cannot import name 'soft_unicode' from 'markupsafe' 
```

これは他のライブラリの依存関係の変更によるものです。以下のコマンドで修正できます。

```
pip install -U MarkupSafe==0.20
```

#### クレームと所有権 - 値へのアクセスが許可されていない

作成したデバイスで「値へのアクセスが許可されていない」というエラーが発生した場合、それはデバイスをクレームしていないか、所有権がリセットされているためです。

製造者である場合でも、ネットワークリストにデバイスが表示され、オンラインであることは確認できますが、値を確認したりデバイスを制御することはできません。

デバイスをクレームするには、[url](https://wappsto.com/devices)の「IoT Devices」タブに移動し、右上の「+ Add an IoT device」ボタンをクリックして、ネットワークUUIDをボックスに入力します。

ネットワークの削除ボタンをクリックすると、デバイスの所有権が解除され、他のユーザーがクレームできるようになります。一度デバイスがクレームされると、他のユーザーがクレームすることはできません。

## この Wappsto ライブラリ

### 必要な構造

ネットワーク ID は [Wappsto](https://wappsto.com/) によって生成され、証明書にリンクされています。

```
├── "ネットワーク名"
│   └── "デバイス1名"
│   |   └── "値1名"
│   |   └── "値2名"
|   |   ...
│   └── "デバイス2名"
│       └── "値1名"
│       └── "値2名"
...

```

デバイスおよび値オブジェクトの「名前」には追加の機能とルールがあります。

- ネットワークには同じ名前のデバイスを持つことはできません。
- 単一のデバイスには同じ名前の値を持つことはできません。（上記の例のように、異なるデバイスの下で同じ名前を使用することは許可されています。）

ライブラリはデバイス/値がその名前で存在するかどうかを Wappsto に確認し、存在する場合は正しい値にリンクします。何もその名前を持っていない場合は新しいものが作成されます。親が同じ名前の子を複数持っている場合、ライブラリは最初に利用可能なものを選択します。

名前を変更すると新しいものが作成されますが、古いものは削除されません。これを行うには、例えば [url](https://wappsto.com/devices) を使用してください。

### Wappsto の初期化

Wappsto を作成する際には WiFiClientSecure への参照が必要です。例：

```c
WiFiClientSecure client;
Wappsto wappsto(&client);
```

#### 設定を行い接続する

```c
#include "wappsto_config.h"
...
wappsto.config(network_uuid, ca, client_crt, client_key);
if(wappsto.connect()) {
    // 接続成功
} else {
    // 接続失敗
}
```

### オプションの設定パラメータ、ログと ping

必須コマンドに加えて、ping 間隔とログレベルを設定することもできます：

```c
wappsto.config(network_uuid, ca, client_crt, client_key, ping interval in minutes, log level);
```

- ping 間隔はデバイスから Wappsto に短いパッケージを送信して接続を維持します。デバイスがデータをほとんど送信しない場合、接続のタイムアウトを回避するためにこれを追加することをお勧めします。
- ログレベルは Wappsto ライブラリからシリアルデバッグポートに情報を出力することができます。以下のレベルが可能です：

```
   VERBOSE
   INFO
   WARNING
   ERROR
   NO_LOGS <- デフォルト
```

### ネットワークを作成する

```c
myNetwork = wappsto.createNetwork("ネットワーク名");
```

### デバイスを作成する

```c
DeviceDescription_t myDeviceDescription = {
    .name = "デバイス名",
    .product = "製品名",
    .manufacturer = "会社名",
    .description = "製品の説明",
    .version = "1.0",
    .serial = "00001",
    .protocol = "Json-RPC",
    .communication = "WiFi",
};

myDevice = myNetwork->createDevice("デバイス名", &myDeviceDescription);
```

#### 値

値はおそらく最も関心のある部分であり、以下のいずれかになります：

- Number - 整数または小数。これらはログに記録され、グラフとして表示されます。
- String - 人間が読める文字列 (UTF-8)
- Blob - データ。例えば、base64 エンコードされた画像、16進値など。
- Xml - 完全な XML ドキュメント

#### データの読み取りと書き込み

各値には 1 つまたは 2 つのデータポイントを持つことができます：

- Report: デバイスで読み取られ、サーバーに報告されるデータ [READ]
- Control: サーバーからデバイスに送信され、制御されるデータ [WRITE]

値はこれらのいずれかまたは両方を持つことができます。

### 値のパラメータ

パラメータを説明するために、リビングルームに配置された温度値の例を使用します。

- name: 値の名前。ここでは「リビングルーム」
- type: UI が適切なタイプの値を見つけるための補助。ここでは「温度」
- PERMISSION_e パラメータは、この値に対して報告および/または制御を作成するかどうかをライブラリに指示します。
  - READ -> 報告状態
  - WRITE -> 制御状態
  - READ_WRITE -> 報告および制御状態
- min: (Number のみ) 最小値 (UI で使用される)
- max: Number の場合は最大値、String/Blob の場合は最大長
- step: (Number のみ) 数値のステップサイズ。例えば、整数の場合は 1、小数の場合は 0.1
- unit: (Number のみ) この数値に単位がある場合。温度の例では °C

値が初めて作成されると、Number は NA の値を持ち、String/Blob は空になります。報告および制御の両方で同様です。

値が存在する場合、その値のデータは変更されません。デバイスが再起動したときに値を更新したい場合は、報告/制御を呼び出す必要があります。

#### 数値値を作成する

```c
ValueNumber_t myNumberValueParameters = {   .name = "リビングルーム",
                                            .type = "温度", // 値のタイプ
                                            .permission = READ_WRITE,
                                            .min = -20,
                                            .max = 100,
                                            .step = 0.1,
                                            .unit = "°C",
                                            .si_conversion = ""};

myNumberValue = myDevice->createValueNumber(&myNumberValueParameters);
```

#### 文字列値を作成する

```c
ValueString_t myStringValueParameters = { .name = "値の文字列名",
                                          .type = "値のタイプ",
                                          .permission = READ_WRITE,
                                          .max = 200,
                                          .encoding = ""};

myStringValue = myDevice->createValueString("値の文字列名", "値のタイプ", READ_WRITE, &myStringValueParameters);
```

#### Blob 値を作成する

```c
ValueBlob_t myBlobValueParameters =  { .name = "値の Blob 名",
                                       .type = "値のタイプ",
                                       .permission = READ_WRITE,
                                       .max = 200,
                                       .encoding = ""};

myBlobValue = myDevice->createValueBlob(&myBlobValueParameters);
```

#### XML 値を作成する

```c
ValueXml_t myXmlValueParameters =  { .name = "値の XML 名",
                                     .type = "値のタイプ",
                                     .permission = READ_WRITE,
                                     .xsd = "test",
                                     .namespace = "test"};

myXmlValue = myDevice->createValueXml(&myXmlValueParameters);
```

#### 値の報告を送信する

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.report("987");    // 数値をフォーマットした文字列として送信
myNumberValue.report(myInt);    // 数値を int として報告
myNumberValue.report(myDouble); // 数値を double として報告


myStringValue.report("例の文字列");

myBlobValue.report("A5FF2C");

```

#### 制御値を設定する

通常、制御値は wappsto.com からのみ更新されますが、起動時やその他の状況で現在の値を設定する必要がある場合があります。
これを設定する方法は報告と似ています。

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.control("987");    // 数値をフォーマットした文字列として送信可能
myNumberValue.control(myInt);    // int 型で制御値を設定
myNumberValue.control(myDouble); // double 型で制御値を設定

myStringValue.control("Example string");

myBlobValue.control("A5FF2C");

```

## ループ関数に wappsto を追加する

Wappsto がデータ（制御、リフレッシュ、ピン）を受信できるようにするには、Arduino のループ関数に含める必要があります。これを含めない場合、データのコールバックを受信することはなく、接続がタイムアウトする可能性があります。

また、ループを長時間ブロックしないことを推奨します。

```
wappsto.dataAvailable();
```

### 制御リクエストを受信する

制御データを double 型に変換するか、文字列として直接受け取るかを選択できます。

```c
// 数値（double）で制御を受信
void controlNumberCallback(Value *value, double data, String timestamp)
{
    // 制御リクエストを処理
}

// 文字列で制御を受信
void controlStringCallback(Value *value, String data, String timestamp)
{
    // 制御リクエストを処理
}

...
myNumberValue->onControl(&controlNumberCallback);
myStringValue->onControl(&controlStringCallback);
```

### リフレッシュリクエストを受信する（値の報告のみ）

```c
void refreshNumberCallback(Value *value)
{
    // リフレッシュリクエストを処理
}
...
myNumberValue->onRefresh(&refreshNumberCallback);

```

### 値から最後のデータとタイムスタンプを取得する

以下の関数を使用して、最後に受信または送信されたデータとタイムスタンプにアクセスできます。
例えば、新しい起動後に Wappsto.com で設定された最後の制御状態が取得されるため、プログラムはその状態で開始できます。

_注意_ 空の値から numberData を取得すると 0 が返されます。

```c
String ctrlData = myNumberValue.getControlData();

double ctrlDataNumber = myNumberValue.getControlNumberData();

String ctrlTime = myNumberValue.getControlTimestamp();

String reportData = myNumberValue.getReportData();

double reportDataNumber = myNumberValue.getReportNumberData();

String reportTime = myNumberValue.getReportTimestamp();
```

さらに例を確認するには、example フォルダー内のコードを参照するか、Arduino IDE の 'File -> Examples -> Wappsto' を参照してください。

### 温度検出デモ

ここでは提供された温度例を使用し、以下のように Wappsto に表示します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto2.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 1**. コードをアップロードした後、Wappsto ウェブサイトの "IoT Devices" で接続が成功したことが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto3.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 2**. 左側の "Dashboards" 列をクリックし、"Add widget" を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto4.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 3**. 提供されたブロックはデータをいくつかの方法で表示できます。ここでは "Chart" を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto5.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 4**. 前にアップロードした "Temperature Example" を選択し、"Next" をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto6.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 5**. 表示されるデータを設定します。ここではデータを "Line" で表示するように設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto7.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 6**. すべての設定が完了すると、Dashboards でデータ出力を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto8a.jpeg" alt="pir" width={800} height="auto" /></p>
