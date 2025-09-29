---
description: Edge Impulseに基づくモーション認識
title: Edge Impulseに基づくモーション認識
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAOEI
last_update:
  date: 04/11/2023
  author: Citric
---

# Seeed Studio XIAO nRF52840 Sense Edge Impulse 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/50.jpg" style={{width:1000, height:'auto'}}/></div>

Seeed Studio XIAO nRF52840 SenseでEdge Impulseを使用するためのクイックスタートwikiへようこそ！このガイドでは、オンボードIMUセンサーを使用して人間の動きを検出し、異なる動作を分類する方法を探求します。経験豊富な開発者でも、始めたばかりの方でも、このチュートリアルはXIAO nRF52840 SenseボードでEdge Impulseを始めるために必要な知識とスキルを提供します。それでは、早速始めましょう！

<iframe width={560} height={315} src="https://www.youtube.com/embed/hLKKorpDlYw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 入門

このwikiでは、Seeed Studio XIAO nRF52840 Senseの加速度センサーをEdge Impulseと組み合わせて利用し、モーション認識を可能にする方法を紹介します。ここで紹介するコードは、最新バージョンのSeeed nRF52 Boardsでサポートされています。

> 組み込みAIアプリケーションに関しては、「Seeed nrf52 mbed-enabled Boards Library」の使用を強く推奨します。

### ハードウェア

このwikiでは、以下の材料を準備する必要があります：

- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Li-poバッテリー (702025)
- [Grove - OLED Display 0.66"](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)
- DupontケーブルまたはGroveケーブル
- 3Dプリントシェル
- 導光プラスチックファイバー

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/BLEmotion.png" alt="pir" width={600} height="auto" /></p>

**ハードウェアセットアップ**

- **ステップ1**. はんだごてを使用してGrove - OLED Display 0.66"のGroveベースを取り外します
- **ステップ2**. ワイヤーカッターを使用してDupontケーブルを約3cmの長さに加工し、両端で約2mmの内部ケーブルを露出させます
- **ステップ3**. ファイバーを前面の小さな穴に通し、端部をLEDに配置します

- **ステップ4**. 以下の図に従って、Seeed Studio XIAO nRF52840 Senseを他の要素とはんだ付けします：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition2.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition3.png" alt="pir" width={500} height="auto" /></p>

:::note
    溶接部を補強するためにホットメルト接着剤を使用するとより良いでしょう。
:::

- **ステップ5**. すべてのコンポーネントを組み立てます：

  1. ファイバーをシェル前面の小さな穴に通します
  2. スクリーンを固定位置に取り付けます
  3. バッテリーをSeeed Studio XIAO nRF52840とスクリーンの間に挟みます
  4. ワイヤーを慎重に処理します
  5. 導光プラスチックファイバーの端をSeeed Studio XIAO nRF52840のRGBライトに配置し、余分な部分を切り取ります
  6. ケースを組み立てます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition4.png" alt="pir" width={400} height="auto" /></p>

組み立て後：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition6.png" alt="pir" width={400} height="auto" /></p>

### ソフトウェア

必要なライブラリは以下の通りです。ハードウェアが正常に機能しているかどうかを確認するために、ここのコードを使用することを強く推奨します。ライブラリのインストールに問題がある場合は、[こちら](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)を参照してください。

- [Seeed_Arduino_LSM6DS3-master](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Seeed_Arduino_LSM6DS3-master.zip)
- [U8g2](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/U8g2.zip)

Edge ImpulseでSeeed Studio XIAO nRF52840 Senseをセットアップするには、以下のソフトウェアをインストールする必要があります：

1. [Node.js v12](https://nodejs.org/en/)以上。
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
3. Edge Impulse CLIとシリアルモニター。コマンドプロンプトまたはターミナルを開いて以下を実行してインストールします：

```sh
npm install -g edge-impulse-cli 
```

:::note
CLIのインストールに問題がありますか？詳細については[インストールとトラブルシューティング](https://docs.edgeimpulse.com/docs/cli-installation)をご確認ください。
:::

## Edge Impulseへの接続

すべてのソフトウェアが準備できたら、開発ボードをEdge Impulseに接続します。

- **ステップ1.** Seeed Studio XIAO nRF52840 SenseをUSB Type-Cケーブルでコンピューターに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={600} height="auto" /></p>

- **ステップ2.** [Edge Impulse](https://studio.edgeimpulse.com/)で新しいプロジェクトを作成します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition9.png" alt="pir" width={800} height="auto" /></p>

- **ステップ3.** 「Accelerometer data」を選択し、「Let's get started!」をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition10.png" alt="pir" width={1000} height="auto" /></p>

## データ取得とトレーニング

:::note
このステップでは、Seeed Studio XIAO nRF52840 SenseオンボードのIMUから「加速度計データ」を収集してデータセットを構築し、その後EdgeImpulseプラットフォームでモデルをトレーニングします。
:::

- **ステップ4.** 「Accelerometer Raw Data」スケッチをSeeed Studio XIAO nRF52840 Senseにアップロードします。

[Seeed_Arduino_LSM6DS3ライブラリをダウンロード](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3)してzipファイルとして保存します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>

Arduino IDEを開き、`Sketch > Include Library > Add .ZIP Library...`に移動して、ダウンロードしたzipファイルを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

以下のコードをアップロードし、**シリアルモニター**を開きます

```
// XIAO BLE Sense LSM6DS3 Accelerometer Raw Data 

#include "LSM6DS3.h"
#include "Wire.h"

//Create a instance of class LSM6DS3
LSM6DS3 myIMU(I2C_MODE, 0x6A);  //I2C device address 0x6A

#define CONVERT_G_TO_MS2 9.80665f
#define FREQUENCY_HZ 50
#define INTERVAL_MS (1000 / (FREQUENCY_HZ + 1))

static unsigned long last_interval_ms = 0;


void setup() {
  Serial.begin(115200);
  while (!Serial)
    ;

  if (myIMU.begin() != 0) {
    Serial.println("Device error");
  } else {
    Serial.println("Device OK!");
  }
}


void loop() {
  if (millis() > last_interval_ms + INTERVAL_MS) {
    last_interval_ms = millis();
    Serial.print(myIMU.readFloatAccelX() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.print(myIMU.readFloatAccelY() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.println(myIMU.readFloatAccelZ() * CONVERT_G_TO_MS2, 4);
  }
}


```

これで、シリアルモニターに加速度計とジャイロスコープのデータが次々と表示されるのが確認できます！

<p style={{textAlign: 'center'}}><img src="https://workshop.makergram.com/assets/images/raawIMUSerial-095365f65dd0cde808620906ab5a7ab8.png" alt="IMU Raw" width={800} height="auto" /></p>

- **ステップ 5.** `terminal` または `cmd` または `powershell` でコマンドを実行して開始します。

```
edge-impulse-data-forwarder
```

- **ステップ 6.** CLIを使用してSeeed Studio XIAO nRF52840 SenseをEdge Impulseに接続する必要があります。まず、アカウントにログインしてプロジェクトを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition11.png" alt="pir" width={800} height="auto" /></p>

加速度計とデバイスに名前を付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition12.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 7.** XIAO nRF52840 SenseをEdge Impulseに接続します

Edge Impulseの「Data acquisition」ページに移動します。接続が成功した場合、結果は次のようになります。ページの右側に「Seeed Studio XIAO nRF52840 Sense」のデバイスが表示されていることを確認できます。

- **ステップ 8.** センサーを「3 axes」として選択します。ラベルに`up`と`down`という名前を付け、Sample length (ms.)を20000に変更して、start samplingをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition13.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 9.** Seeed Studio XIAO nRF52840 Senseを上下に振り、20秒間その動作を続けます。取得結果は次のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition14.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 10.** 生データの右上をクリックして「Split Sample」を選択し、データを分割します。+Add Segmentをクリックしてからグラフをクリックします。これを20回以上繰り返してセグメントを追加します。Splitをクリックすると、1秒ごとのサンプルデータが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition30.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 11.** **ステップ 8.** と **ステップ 9.** を繰り返し、異なる動作データをクリックするために異なる名前でデータにラベルを付けます。例えば`left`と`right`、`clockwise`、`anticlockwise`などです。提供されている例では、上下、左右、円の分類を行っています。ここで必要に応じて変更できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition16.png" alt="pir" width={1000} height="auto" /></p>

:::note
ステップ 9. では分割時間が1秒です。これは、ステップ 8. で1秒間に少なくとも1回の上下の振りを行う必要があることを意味します。そうでなければ、結果は正確になりません。同時に、自分の動作速度に応じて分割時間を調整できます。
:::

## 機械学習モデルの構築

- **ステップ 12.** データセットのリバランス、**Dashboard**をクリックしてページを下にスクロールし、**Perform train** / **test split**を見つけます

Perform train / test splitをクリックしてYesを選択し、確認します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition17.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 13.** Impulseの作成

**Create impulse**をクリック -> Add a processing blockを追加 -> **Spectral Analysis**を選択 -> Add a learning blockを追加 -> **Classification (Keras)**を選択 -> Save Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew1.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 14.** スペクトル特徴

クリックしてSet upします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew2.png" alt="pir" width={800} height="auto" /></p>

**Spectral features**をクリック -> ページを下にスクロールしてSave parametersをクリック -> **Generate features**をクリック

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew3.png" alt="pir" width={800} height="auto" /></p>

出力ページは次のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew4.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 15.** モデルのトレーニング

NN Classifierをクリック -> Start trainingをクリック -> Unoptimized (float32)を選択

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew5.png" alt="pir" width={800} height="auto" /></p>

:::note
トレーニングモデルの精度は最終結果にとって非常に重要です。出力されるトレーニング結果が65%未満と低い場合は、より多くの回数でトレーニングすることを強く推奨します。
:::

## Seeed Studio XIAO nRF52840 Sense へのデプロイ

- **ステップ 16.** モデルテスト

Model testing をクリック -> Classify all をクリック

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition23.png" alt="pir" width={800} height="auto" /></p>

:::note
精度が低い場合は、トレーニングセットを増やしてサンプル時間を延長することで、データセットを確認できます
:::

- **ステップ 17.** Arduino ライブラリのビルド

Deployment をクリック -> Arduino Library をクリック -> **Build** をクリック -> .ZIP ファイルをダウンロード

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew7.png" alt="pir" width={400} height="auto" /></p>

- **ステップ 18.** .ZIP ファイルの名前は非常に重要で、デフォルトで Edge Impulse プロジェクトの名前として設定されます。ここではプロジェクト名が "XIAO-BLE-gestures_inferencing" です。ファイルを選択して ".ZIP ファイル" を Arduino ライブラリに追加します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition35.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition36.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 19.** [こちら](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEI.ino)からコードをダウンロードします。ヘッダーファイルの名前を自分のものに変更してアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/Motion-Recognition33.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 20.** Seeed Studio XIAO nRF52840 Sense を動かしたり保持したりして結果を確認します：

Arduino の右上角にあるモニターをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew15a.png" alt="pir" width={800} height="auto" /></p>

Seeed Studio XIAO nRF52840 Sense を**左右**方向に動かすと：

モニターは次のような出力を表示します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew11a.png" alt="pir" width={500} height="auto" /></p>

そして出力表示は次のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png" alt="pir" width={300} height="auto" /></p>

Seeed Studio XIAO nRF52840 Sense を**上下**方向に動かすと：

モニターは次のような出力を表示します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew9a.png" alt="pir" width={500} height="auto" /></p>

そして出力表示は次のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew12a.png" alt="pir" width={300} height="auto" /></p>

Seeed Studio XIAO nRF52840 Sense をアイドル状態で**保持**すると：

モニターは次のような出力を表示します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew10a.png" alt="pir" width={500} height="auto" /></p>

そして出力表示は次のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew13a.png" alt="pir" width={300} height="auto" /></p>

おめでとうございます！プロジェクトの最後まで到達しました。より多くの方向を試して、どれが最高の出力を実行するかを確認することをお勧めします。

## リソース

- [Seeed Studio XIAO nRF52840 ケースファイル](https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/xiao-case-pink.stl)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
