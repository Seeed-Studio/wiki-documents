---
description: Blynkのクイックスタート
title: Blynkの使用方法
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Quick-Start-to-using-Blynk
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Blynkの使用方法のクイックスタート

このチュートリアルでは、Grove Vision AIモジュールをWio Terminalとセットアップし、Wi-Fiを介して人数カウントや検出信頼値などの検出データをアップロードする方法を簡単に説明します。その後、Blynkモバイルアプリのダッシュボードを利用して、Grove Vision AIモジュールの検出結果を視覚化します。

## 必要な材料

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={170} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove Vision AIモジュール</td>
    </tr>
  </tbody></table>

## 事前準備

### 接続

この手順では、以下の図に従ってVision AIモジュールを左側に接続する必要があります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/vi.jpg" /></div>

### ソフトウェア準備

**ステップ1.** Arduinoソフトウェアをインストールする必要があります。

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**ステップ2.** Arduinoアプリケーションを起動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**ステップ3.** Arduino IDEにWio Terminalを追加します。

Arduino IDEを開き、`ファイル > 設定`をクリックし、以下のURLを追加ボードマネージャURLにコピーします：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

`ツール > ボード > ボードマネージャ`をクリックし、ボードマネージャで**Wio Terminal**を検索します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**ステップ4.** ボードとポートを選択します

Arduino IDEの`ツール > ボード`メニューで、Arduinoに対応するエントリを選択する必要があります。**Wio Terminal**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

`ツール -> ポート`メニューからWio Terminalボードのシリアルデバイスを選択します。これは通常COM3以上になります（COM1とCOM2は通常ハードウェアシリアルポートに予約されています）。確認するには、Wio Terminalボードを切断してメニューを再度開き、消えるエントリがArduinoボードであるはずです。ボードを再接続してそのシリアルポートを選択します。

:::tip
Macユーザーの場合、`/dev/cu.usbmodem141401`のようなものになります。

スケッチをアップロードできない場合、主にArduino IDEがWio Terminalをブートローダーモードに切り替えることができないためです。（MCUが停止しているか、プログラムがUSBを処理している場合）対策として、Wio Terminalを手動でブートローダーモードに切り替える必要があります。
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

## ステップガイド

### ステップ 1. アカウント作成

[Blynk公式ウェブサイト](https://blynk.io/)にアクセスし、アカウントを作成してください。登録にはメールアドレスが必要です。登録後、メールを確認してアカウント登録を完了するために確認を行ってください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/18.png" /></div>

### ステップ 2. 新しいテンプレートを追加

Blynkコンソールにログインしたら、スタートアップウィザードのポップアップをキャンセルしてスキップし、**New Template** ボタンをクリックして新しいテンプレートを作成してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/1.png" /></div>

セットアップウィザードに従い、ポップアップウィンドウでテンプレートに名前を付け、**Seeed Wio Terminal** を **HARDWARE** として選択し、**WiFi** を **CONNECTION TYPE** として選択してください。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1101/2.png" /></div>

完了をクリックした後、テンプレートページが表示されます。新しいテンプレートに関するすべての情報を確認するには、右上隅の保存ボタンをクリックしてください。

### ステップ 3. 新しいデバイスを追加

ダッシュボードテンプレートを追加した後、**My devices** タブをクリックし、続いて **New Device** ボタンをクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/4.png" /></div>

その後、**From template** を選択してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/5.png" /></div>

**ステップ 2** で作成したテンプレート名を **TEMPLATE** ドロップダウンリストから選択し、この場合は **wio terminal vision ai** と呼ばれています。そして、**DEVICE NAME** ダイアログボックスにデバイス名を入力してください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1101/6.png" /></div>

これが完了すると、新しいデバイス情報がポップアップパネルに表示されます。テンプレートID、デバイス名、Auth Tokenが表示されますので、**Copy to clipboard** をクリックしてヘッダー情報をコピーし、後で使用するために保存してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/7.png" /></div>

### ステップ 4. 必要なArduinoライブラリを追加

Grove Vision AIモジュールを Wio Terminal で利用するために必要なArduinoライブラリを追加する必要があります。以下のアイコンをクリックして、Grove Vision AI Arduinoライブラリをダウンロードしてください。

<div>
  <p style={{}}><a href="https://files.seeedstudio.com/wiki/K1101/libraries.zip" target="_blank" /></p><div align="center"><a href="https://files.seeedstudio.com/wiki/K1101/libraries.zip" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

ライブラリのZIPファイルを正常にダウンロードした後、以下のパスにファイルを解凍してください：

- Windowsの場合：`C:\Users\{User Name}\Documents\Arduino\libraries`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/36.png" /></div>

- Macの場合：`/Users/{User Name}/Documents/Arduino/libraries`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/37.png" /></div>

### ステップ 5. ファームウェアコードを準備

[こちら](https://examples.blynk.cc/?board=Wio%20Terminal&shield=rpcWiFi&example=GettingStarted%2FPushData&auth=an8FkwZgCjShpV5NGCW-Lxl1qohRigeZ&dev=Quickstart%20Device&tmpl=TMPLx3C44oO0)から、Wio Terminal をBlynkサーバーに接続するための基本テンプレートコードを生成できます。

また、このクイックスタートガイド用に完全なサンプルコードを以下に準備しました：

```c
// Template ID, Device Name and Auth Token are provided by the Blynk.Cloud
// See the Device Info tab, or Template settings
#define BLYNK_TEMPLATE_ID ""
#define BLYNK_DEVICE_NAME ""
#define BLYNK_AUTH_TOKEN ""

// WiFiの認証情報を設定してください。
// オープンネットワークの場合、パスワードを "" に設定します。
char ssid[] = "";
char pass[] = "";

// デバッグ出力を有効にするにはコメントを外してください。
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;

char auth[] = BLYNK_AUTH_TOKEN;

BlynkTimer timer;

// この関数は、Arduinoの稼働時間を毎秒Virtual Pin (5) に送信します。
// アプリ内でウィジェットの読み取り頻度をPUSHに設定してください。
// これにより、Blynkアプリにデータを送信する頻度を定義できます。
void myTimerEvent()
{
  // 任意の値を任意のタイミングで送信できます。
  // 1秒間に10個以上の値を送信しないでください。
  if (state == 1)
  {
    if (ai.invoke()) // 実行開始
    {
      while (1) // 実行終了を待機
      {
        CMD_STATE_T ret = ai.state(); 
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }
     uint8_t len = ai.get_result_len(); // 検出された人数を取得
     if(len)
     {
       Serial.print("検出された人数: ");
       Serial.println(len);
       object_detection_t data;       // データを取得

       for (int i = 0; i < len; i++)
       {
          Serial.println("結果: 検出");
          Serial.print("検出および計算中: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); // 結果を取得
          Serial.print("信頼度:");
          Serial.print(data.confidence);
          Serial.println();
          Blynk.virtualWrite(V5, data.confidence);
          Blynk.virtualWrite(V4, len);
        }
     }
     else
     {
       Serial.println("識別なし");
       Blynk.virtualWrite(V4, 0);
       Blynk.virtualWrite(V5, 0);
     }
    }
    else
    {
      delay(1000);
      Serial.println("実行失敗。");
    }
  }
  else
  {
    state == 0;
  }
}

void setup()
{
  // デバッグコンソール
  Serial.begin(115200);

  Wire.begin();
  
  Serial.println("開始");
  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // オブジェクト検出と事前学習モデル1
  {
    Serial.print("バージョン: ");
    Serial.println(ai.version());
    Serial.print("ID: ");
    Serial.println( ai.id());
    Serial.print("アルゴリズム: ");
    Serial.println( ai.algo());
    Serial.print("モデル: ");
    Serial.println(ai.model());
    Serial.print("信頼度: ");
    Serial.println(ai.confidence());
    state = 1;
  }
  else
  {
    Serial.println("アルゴリズムの開始に失敗しました。");
  }

  Blynk.begin(auth, ssid, pass);
  // サーバーを指定することもできます:
  //Blynk.begin(auth, ssid, pass, "blynk.cloud", 80);
  //Blynk.begin(auth, ssid, pass, IPAddress(192,168,1,100), 8080);

  // 毎秒呼び出される関数を設定
  timer.setInterval(1000L, myTimerEvent);
}

void loop()
{
  Blynk.run();
  timer.run(); // BlynkTimerを開始
}
```

必要なヘッダーをサンプルコードの冒頭に記入し、Wio TerminalをWi-Fiに接続し、データをBlynkサーバーに送信できるようにします。

```c
#define BLYNK_TEMPLATE_ID ""
#define BLYNK_DEVICE_NAME ""
#define BLYNK_AUTH_TOKEN ""

char ssid[] = "";
char pass[] = "";
```

最初の3行の定義は、**ステップ 3**のプロセスで自動生成されたBlynkデバイス情報です。これをコピーして最初の3行に置き換えてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/7.png" /></div>

続いて、**ssid[]**と**pass[]**変数には、Wio Terminalが接続するWi-FiのSSIDとパスワードを記入してください。例：

```c
#define BLYNK_TEMPLATE_ID           "TMPLx3C44oO0"
#define BLYNK_DEVICE_NAME           "Quickstart Device"
#define BLYNK_AUTH_TOKEN            "an8FkwZgCjShpV5NGCW-Lxl1qohRigeZ"

char ssid[] = "SeeedStudio";
char pass[] = "yyds2022";
```

:::note
このクイックスタートガイドをテストする際には、個人のホットスポットを使用することをお勧めします。不安定な公共ネットワークよりも安定しています。
:::

### ステップ 6. Blynk Web Dashboard の設定

Blynkコンソールに戻り、上記のファームウェアコードに基づいてダッシュボードウィジェットを設定します。まず、再作成したテンプレートを選択し、右上にある**Edit**ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/19.png" /></div>

次に、**Datastreams**タブをクリックしてデータストリームを設定します。その後、**New Datastream**をクリックし、**Virtual Pin**を選択してデータの入力元を構成します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/11.png" /></div>

**ステップ 5**では、仮想ピン4と仮想ピン5を使用して、Grove Vision AIモジュールの検出データ（人数カウントや推論信頼度のパーセンテージデータ）を送信しました。

```c
Blynk.virtualWrite(V5, data.confidence); // 信頼度
Blynk.virtualWrite(V4, len); // 人数カウント
```

したがって、BlynkコンソールのDatastreamsタブで、V5とV4の2つの**Virtual Pin**を設定する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/20.png" /></div>

**Web Dashboard**の設定では、情報のレイアウトを定義できます。この場合、**Label**、**Gauge**、**Chart**といった最も一般的な可視化ウィジェットを3つ追加しました。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/21.png" /></div>

各ウィジェットの上部にあるギアボタンをクリックすると、ウィジェットの上にカーソルを合わせた際に表示される設定画面で、表示データを設定できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/22.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/23.png" /></div>

データ情報レイアウトの設定が完了したら、右上の**Save And Apply**ボタンをクリックしてください。

### ステップ 7. コードをアップロードしてデータを観察する

最後に、Groveケーブルを使用してGrove Vision AIモジュールとWio Terminalの左側のGroveポートを接続し、ステップ 7後に更新されたファームウェアをアップロードしてください。その後、Blynkデバイスコンソールに戻ります。
Grove Vision AIモジュールが有効な検出を行うと、人数カウント値と検出信頼度値が更新されるのが確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/17.png" /></div>

## Blynkモバイルアプリを使用してライブデータを観察する

Blynkは、ライブセンサーデータを表示するためのWebコンソールダッシュボードをサポートするだけでなく、モバイルアプリでもセンサーデータを表示することができます。ただし、モバイルアプリでデータを表示するには、上記の手順を完了する必要があります。

### ステップ 1. Blynkアプリをダウンロードする

- iOSデバイスを使用している場合は、[Blynk IoT](https://play.google.com/store/apps/details?id=cloud.blynk)をダウンロードしてください。

- Androidデバイスを使用している場合は、[Blynk IoT NEW](https://apps.apple.com/cn/app/blynk-iot-new/id1559317868)をダウンロードしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/25.png" /></div>

### ステップ 2. Blynkアプリでアカウントにログインする

Blynkアプリをダウンロードしてインストールしたら、アプリを開き、Webコンソール用に作成したのと同じアカウントでログインしてください。これにより、上記の手順で作成したテンプレートがモバイルアプリに同期されます。

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/K1101/26.png" /></div>

### ステップ 3. Blynkモバイルアプリでデータダッシュボードを設定する

アプリにログインしたら、右にスワイプして**My Profile**をタップし、プロフィール設定画面に移動します。その後、**Developer Mode**が有効になっていることを確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/29.png" /></div>

次にメインページに戻り、右上のレンチアイコンをタップしてテンプレート設定画面に入ります。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1101/30.png" /></div>

ここでは、以前に作成したテンプレートやBlynkアプリのサンプルテンプレートを見ることができます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/31.png" /></div>

次に、Seeed Wio Terminal テンプレートをタップしてモバイルウィジェット表示の設定に進みます。テンプレート設定画面に入ったら、右上の**+**ボタンをタップしてください。ウィジェットを追加するためのウィジェットボックスウィンドウが表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/32.png" /></div>

ここでの設定手順はWebコンソールの設定と似ています。**Value Display**ウィジェットと**Labeled Value**ウィジェットを選択し、それぞれ名前を変更して適切なデータストリーム（仮想ピンV4およびV5）を選択します。これにより、Grove Vision AIモジュールからWio Terminalが収集した検出データがWebコンソールとモバイルアプリの両方に継続的に同期・更新されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/33.png" /></div>

### ステップ 4. 新しいコードをアップロードして結果を観察する

新しいコードをWio Terminalにアップロードした後、Wio TerminalがWi-Fiに接続されると、接続されたWio TerminalデバイスがBlynkモバイルアプリに表示されるはずです。以下のように表示されます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/34.png" /></div>

Blynkモバイルアプリに表示されるデバイスをタップするだけで、センサーデータを観察することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/42.jpg" /></div>

## 声明

- LoRa® マークは Semtech Corporation またはその子会社の商標です。
- LoRaWAN® は LoRa Alliance® からのライセンスの下で使用されるマークです。