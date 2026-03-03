---
description: Edge Impulseに基づく音声認識
title: Edge Impulseに基づく音声認識
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-PDM-EI
last_update:
  date: 10/12/2023
  author: Bruno Santos (Feiticeir0)
---

:::caution
このチュートリアルの内容は既に有効でない可能性があり、新しいソフトウェアメンテナンスと技術サポートは提供されなくなりました。
:::

# XIAO nRF52840を使用したEdge Impulseベースの音声認識

このwikiでは、音声認識のためにSeeed Studio XIAO nRF52840のML機能とEdge Impulseを使用する方法を紹介します。XIAO nRF52840 Senseに既に搭載されているマイクロフォンを使用します。

## プロジェクト前の知識

XIAO nRF52840はEdge Impulseによって公式にサポートされておらず、データを収集するデバイスとして存在しませんが、デバイスのマイクロフォンを使用して推論を実行する方法を実演します。

## はじめに

このチュートリアルに従うには、以下のハードウェアが必要です

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ハードウェア準備

ハードウェアの準備は必要ありません。XIAO nRF52840には、このプロジェクトに必要なものがすべて既に搭載されています。PDMマイクロフォンだけが必要です。

#### XIAO nRF52840 Senseのハードウェアピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/XIAO_nrf82840_hardware.png" alt="XIAO nrf82840 hardware" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}></p>

## ソフトウェア準備

これを試すには、3つのものが必要です：

1. Google音声コマンドデータセット（以下を確認）
2. [Edge Impulseアカウント](https://edgeimpulse.com/)
3. [Arduino IDE](https://www.arduino.cc/)

### データセット

- Google音声コマンドデータセットを使用します。全データセットではなく、その中のいくつかの単語だけです。
- まず、データセットをダウンロードして解凍してください。完全なデータセットは2.3GBです。
- この<a href="https://www.tensorflow.org/lite/microcontrollers" target="_blank">Google音声コマンドデータセット</a>は、GoogleがTensorFlow Lite for MicroControllersのマイクロ音声例で使用しているものです。
- <a href="https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb" target="_blank">コードはこちらで確認できます。</a>

上記の最初のリンクからデータセットをダウンロードでき、以下のように展開されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/dataset_extracted.png" alt="Dataset extracted" alt="Speech commands dataset" width={600} height="auto" /></p>

## はじめに

それでは、Edge Impulseを使用してデータセットに基づくMLモデルを作成しましょう。

### ステップ1 - Edge Impulseを開く

- Edge Impulseは、開発者がマイクロコントローラーやスマートフォンなどのエッジデバイスにカスタムMLモデルを作成・デプロイできる機械学習（ML）開発プラットフォームです。
- キーワードスポッティング、異常検知、分類などの特定のタスクに対してMLモデルを構築・最適化するための様々なツールとリソースを提供します。

新しいプロジェクトを作成しましょう。名前を付けてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge1.png" alt="Edge Impulse New project" width={600} height="auto" /></p>

新しいプロジェクトを作成した後、データ取得ページに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge2.png" alt="Edge Impulse Data Aquisition" width="{600}" height="auto" /></p>

### ステップ2 - データを追加

Google音声コマンドデータセットを使用するため、「Add existing data」を選択します。
次に、「Upload data」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge3.png" alt="Edge Impulse upload data" width={600} height="auto" /></p>

次に、データを選択します - 音声データセットのフォルダの1つを選択しましょう。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge4.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

データセットには訓練用の多くの単語があります。3つのフォルダ（ラベル）と背景ノイズを選択して訓練しましょう。4つのラベルを取得します。
「Browse」ボタンを押します。
最初は「go」です。フォルダを選択すると、すべての.wavファイルが表示されます - 「Upload」を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge5.png" alt="Files to upload" width={600} height="auto" /></p>

次に、カテゴリのデフォルトオプションを保持します。Edge Impulseにデータを分割させます。
ラベルについては、自分でラベルを書きます。これらすべての後、「Upload data」を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge6.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

右側で、ファイルがアップロードされているのが確認できます。ファイル数が多いため、時間がかかる場合があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge7.png" alt="Files upload progress" width={600} height="auto" /></p>

しばらくすると完了し、アップロードされたファイルの簡単な要約が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge8.png" alt="Files upload resume" width={600} height="auto" /></p>

この後、画面は以下のようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge9.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

さらにデータをアップロードするには、ファイルリストの上にある右側の小さなアップロードボタンを押します。
これをさらに3回繰り返します - さらに2つのラベルと背景ノイズです。
happy、bird、そして「noise」ラベルの「background noise」フォルダを選択します。
最終的に、これらがすべてのラベルです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge10.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

次に、単語を学習するネットワークを作成しましょう。Impulse designをクリックしてインパルスを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge11.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### ステップ3 - 訓練方法を選択

クリップはそれぞれ1秒で16Khzなので、ウィンドウサイズと周波数を同じに保ちましょう。次に、処理ブロックを追加しましょう。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge12.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

Edge Impulse はここでも大いに役立ちます。「Add a processing block」をクリックして、Audio (MFCC) を選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge13.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

次に、「Add learning block」をクリックして Classification を選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge14.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

これで、最後の列 - Output features - に4つのラベル（bird、go、happy、noise）が表示されます。
「Save Impulse」を押して、これまでの作業を保存してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge15.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### ステップ 4 - 特徴量の生成

それでは、MFCC パラメータを見てみましょう。必要に応じて値を変更できます。
今回は、デフォルト値を保持しましょう。「Save Parameters」をクリックしてください。
パラメータを保存すると、「Generate features」の新しいウィンドウが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge16.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

クリック後、Edge Impulse が特徴量の生成を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge17.png" alt="Generate features" width={600} height="auto" /></p>

しばらくすると、特徴量が生成され、それらを視覚化できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge18.png" alt="Feature explorer" width={600} height="auto" /></p>

これで、選択したパラメータでネットワークを訓練できます。「Classifier」をクリックしてください。

### ステップ 5 - 分類器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge19.png" alt="Classifier" width={600} height="auto" /></p>

ここでは、訓練サイクル、データ拡張の有無など、ネットワーク設定を調整できます。
Edge Impulse は、キーワードスポッティング用のシンプルで効果的なニューラルネットワークアーキテクチャを提供します。このアーキテクチャは以下の層で構成されています：

- <b>入力層：</b> 入力層は MFCC 特徴量を入力として受け取ります。
- <b>隠れ層：</b> 隠れ層は MFCC 特徴量からより高次の特徴を抽出することを学習します。Edge Impulse は、畳み込み層やリカレント層など、さまざまな隠れ層タイプをサポートしています。
- <b>出力層：</b> 出力層は、音声入力にキーワードが含まれている確率を予測します。

デフォルトパラメータを変更できますが、デフォルトで十分です。「Start Training」をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge20.png" alt="Network architecture" width={600} height="auto" /></p>

訓練開始後、画面の右側で訓練の進行状況を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge21.png" alt="Training progress" width={600} height="auto" /></p>

Target device を nRF52840 - 私たちの XIAO nRF52840 Sense のような - に変更して、パフォーマンス計算と最適化を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge22.png" alt="Target device" width={600} height="auto" /></p>

訓練が完了すると、混同行列とデータエクスプローラが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge23.png" alt="Confusion Matrix" width={600} height="auto" /></p>

ネットワークの準備ができたので、いくつかのサンプルを試してライブ分類を行ってみましょう。
ライブ分類に移動すると、サンプルを選択して分類結果を確認できます。ここでは、鳥の例について、結果で bird が得られます。素晴らしいです。モデルが動作しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge24.png" alt="Live classification" width={600} height="auto" /></p>

それでは、モデルテストに移動しましょう。
テスト用に分割されたサンプルを使用してモデルをテストしてみましょう。「Classify all」をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge25.png" alt="Test data" width={600} height="auto" /></p>

約90%の精度が得られます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge26.png" alt="Accuracy" width={600} height="auto" /></p>

### ステップ 6 - デプロイメントと Arduino ライブラリの取得

それでは、デプロイメントに移動して、マイクロコントローラ用のファイルを取得しましょう。

#### デプロイメントオプション

Arduino を選択しましょう。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge27.png" alt="Accuracy" width={600} height="auto" /></p>

次に、Quantized(int8) を選択したまま、「Build」をクリックして Arduino IDE で使用するファイルをダウンロードしてください。
最適化を少し試すことができます。精度が低いことに気づいた場合は、EON コンパイラをオフにして再試行してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge28.png" alt="Accuracy" width={600} height="auto" /></p>

しばらくすると、ファイルが自動的にダウンロードされます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge29.png" alt="Arduino Files download" width={600} height="auto" /></p>

### ステップ 7 - Arduino IDE にライブラリを追加

Arduino IDEで、新しくダウンロードしたファイルを追加しましょう。
Sketch > Include Library > Add .ZIP Libraryに移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge30.png" alt="Arduino IDE Add library" width={600} height="auto" /></p>

ダウンロードしたファイルを選択します。しばらくすると、出力ウィンドウにライブラリがインストールされたというメッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge31.png" alt="Library installed" width={600} height="auto" /></p>

### ステップ8 - XIAO nRF52840 SenseのRGBライトを音声制御する

サンプルを開きましょう
Examples > &lt;your_files_names&gt; > nano_ble33_sense > nano_ble33_sense_microphoneに移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge32.png" alt="Library installed" width={600} height="auto" /></p>

なぜArduino BLE 33 Senseなのでしょうか？これらは同じライブラリ - PDM（パルス密度変調）- を使用してマイクを制御します。Arduino Nano BLE 33 SenseはMP34DT05を搭載し、XIAO nRF52840 SenseはMSM261D3526H1CPMを搭載しています。
スケッチが開いたら、コンパイルしてエラーがないか確認しましょう。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge33.png" alt="Sketch open" width={600} height="auto" /></p>

しばらくすると、スケッチがコンパイルされ、エラーは報告されません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge34.png" alt="Sketch open" width={600} height="auto" /></p>

次に、XIAO nRF52840 Senseを接続し（まだ接続していない場合）、コードをボードにアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge35.png" alt="Sketch open" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge36.png" alt="Compile result" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge37.png" alt="Upload" width={600} height="auto" /></p>

次に、シリアルポートを開き（Ctrl+Shift+M）、推論結果を確認します（ボードはすでに録音、推論、予測を開始しています）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge38.png" alt="Serial Monitor" width={600} height="auto" /></p>

選択した単語の一つを言ってみてください。私は「go」と言いました

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge39.png" alt="Serial Monitor" width={600} height="auto" /></p>

単語が正しく検出されると、最も可能性の高い単語は1.0に近い結果を持ち、他の単語は0.0に近い値を持ちます。
では、少し楽しんでコードを少し変更してみましょう。
XIAO nRF52840 Senseには3色の内蔵LEDがあります：

- 赤 - LED_BUILTINまたはLED_RED

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge40.gif" alt="Red LED" width={600} height="auto" /></p>
- 緑 - LED_GREEN
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge41.gif" alt="Green LED" width={600} height="auto" /></p>
- 青 - LED_BLUE
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge42.gif" alt="Blue LED" width={600} height="auto" /></p>

3つの単語があるので、それぞれに色を割り当てて、その単語に対応する色を点灯させましょう。

- 赤はbirdに
- 緑はGoに
- 青はhappyに

より簡単にするため、ボードのPIN定義を確認し、以下のPINがLEDの色に割り当てられています：

- RED - Pin 11
- GREEN - Pin 13
- BLUE - Pin 12

まず、閾値を定義する必要があります。予測は0.0から1.0の範囲であることがわかっています。1.0に近いほど、単語の分類に確信があります。この値は後で調整できます。0.7に設定します。

まず、いくつかの変数を定義します。これらをインクルードライブラリの直後に定義しました：

```cpp
/* threshold for predictions */
float threshold = 0.7;

/** 
  LABELS INDEX:
  0 - bird
  1 - go
  2 - happy
  3 - noise
*/
// LED pin (defines color) to light up
/**
 PIN 11 - RED
 PIN 12 - BLUE
 PIN 13 - GREEN
*/
int LED = 0;
int oldLED;
```

<i>int oldLED</i> は、予測がない場合や予測が変わった場合にオフにできるよう、前回点灯したLEDを定義します。

<i>int LED</i> は、現在点灯させるLEDです。

次に、loop()関数内のforループ命令の中で、CLASSIFIER_LABEL_COUNTをループする箇所（129行目付近 - 上記の行を含む）：

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
```

if命令を使用して分類値をチェックします。定義された閾値を上回っている場合、switch命令を使用してどの単語が記録されているかを確認します。

私たちの追加を含む完全なforループは以下の通りです：

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
        //lets light up some LEDS

        if (result.classification[ix].value > threshold) {
          //now let's see what label were in
          switch (ix) {
            case 0: LED = 11; break;
            case 1: LED = 13; break;
            case 2: LED = 12; break;
            default: LED = 0;
          }
          //in Sense, LOW will light up the LED
          if (LED != 0) {
            digitalWrite (oldLED, HIGH); //if we enter a word right next to previous - we turn off the previous LED
            digitalWrite (LED, LOW);            
            oldLED = LED;
          }
          else //turn off LED
            digitalWrite (oldLED, HIGH);
        }
    }
```

変更後、コードをマイコンにアップロードして、訓練した単語を言ってみて、その単語に応じてLEDが点灯するかを確認してください。

これで完了です。直接サポートされていませんが、Edge Impulseを使用してXIAO nRF52840 SenseでMLモデルを実行できるようになりました。

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Brunoの努力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)に感謝し、あなたの作品は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
