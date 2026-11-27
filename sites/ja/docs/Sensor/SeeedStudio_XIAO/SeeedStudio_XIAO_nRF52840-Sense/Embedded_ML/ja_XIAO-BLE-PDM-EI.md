---
description: Edge Impulse に基づく音声認識
title: Edge Impulse に基づく音声認識
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-PDM-EI
last_update:
  date: 10/12/2023
  author: Bruno Santos (Feiticeir0)
createdAt: '2023-10-11'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/ja/XIAO-BLE-PDM-EI/
---

:::caution
このチュートリアルの内容はすでに有効ではない可能性があり、新しいソフトウェアメンテナンスおよび技術サポートは提供されていません。
:::

# XIAO nRF52840 を使用した Edge Impulse に基づく音声認識

この wiki では、Seeed Studio XIAO nRF52840 の ML 機能と Edge Impulse を使用して音声認識を行う方法を紹介します。XIAO nRF52840 Sense にすでに搭載されているマイクを使用します。

## プロジェクト前に必要な知識

XIAO nRF52840 は Edge Impulse によって公式にはサポートされておらず、データ収集用デバイスとしては表示されませんが、ここではデバイスのマイクを使って推論を実行する方法を紹介します。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ハードウェアの準備

特別なハードウェアの準備は必要ありません。XIAO nRF52840 には、このプロジェクトに必要なものがすべて揃っています。必要なのは PDM マイクだけです。

#### XIAO nRF52840 Sense のハードウェアピン配置

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">インタラクティブピン配置を確認</a>
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/XIAO_nrf82840_hardware.png" alt="XIAO nrf82840 hardware" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}></p>

## ソフトウェアの準備

これを試すには、次の 3 つだけが必要です：

1. Google Speech commands データセット（下記参照）
2. [Edge Impulse アカウント](https://edgeimpulse.com/)
3. [Arduino IDE](https://www.arduino.cc/)

### データセット

- Google speech command データセットを使用します。すべてではなく、その中のいくつかの単語だけを使います。
- まずはデータセットをダウンロードして解凍します。完全なデータセットは 2.3GB あります。
- この <a href="https://www.tensorflow.org/lite/microcontrollers" target="_blank">Google Speech commands データセット</a> は、Google が TensorFlow Lite for MicroControllers の micro speech サンプルで使用しているものです。
- <a href="https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb" target="_blank"> コードはこちらで確認できます。</a>

データセットは上記の最初のリンクからダウンロードでき、次のように展開されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/dataset_extracted.png" alt="Dataset extracted" alt="Speech commands dataset" width={600} height="auto" /></p>

## はじめに

それでは、Edge Impulse を使って、このデータセットに基づいた ML モデルの作成を始めましょう。

### ステップ 1 - Edge Impulse を開く

- Edge Impulse は、マイクロコントローラやスマートフォンなどのエッジデバイス向けに、カスタム ML モデルを作成・デプロイできる機械学習（ML）開発プラットフォームです。
- キーワードスポッティング、異常検知、分類など、特定のタスク向けに ML モデルを構築・最適化するためのさまざまなツールやリソースを提供します。

新しいプロジェクトを作成しましょう。名前を付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge1.png" alt="Edge Impulse New project" width={600} height="auto" /></p>

新しいプロジェクトを作成したら、データ取得ページに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge2.png" alt="Edge Impulse Data Aquisition" width="{600}" height="auto" /></p>

### ステップ 2 - データを追加

Google speech commands データセットを使用するので、「Add existing data」を選択します。
次に「Upload data」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge3.png" alt="Edge Impulse upload data" width={600} height="auto" /></p>

次に、データを選択します。speech データセットのフォルダの 1 つを選びましょう。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge4.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

このデータセットには、学習に使える単語がたくさん含まれています。ここでは 3 つのフォルダ（ラベル）とバックグラウンドノイズを選びます。合計で 4 つのラベルを取得します。
「Browse」ボタンを押します。
最初は「go」です。フォルダを選択し（すべての .wav ファイルが見えます）、"Upload" を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge5.png" alt="Files to upload" width={600} height="auto" /></p>

次に、カテゴリのオプションはデフォルトのままにしておきます。Edge Impulse にデータの分割を任せます。
ラベルについては、自分でラベル名を入力します。すべて完了したら「Upload data」を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge6.png" alt="Edge Impulse upload data screen" width={600} height="auto" /></p>

右側に、アップロード中のファイルが表示されます。数が多いので、少し時間がかかる場合があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge7.png" alt="Files upload progress" width={600} height="auto" /></p>

しばらくすると完了し、アップロードされたファイルの簡単な概要が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge8.png" alt="Files upload resume" width={600} height="auto" /></p>

この後、次のような画面になります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge9.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

さらにデータをアップロードするには、右側のファイルリスト上部にある小さなアップロードボタンを押します。
これをあと 3 回繰り返します。さらに 2 つのラベルとバックグラウンドノイズです。
ここでは happy、bird と、「background noise」フォルダをラベル「noise」として選びます。
最終的に、ラベルは次のようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge10.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

次に、単語を学習させるためのネットワークを作成します。Impulse design をクリックしてインパルスを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge11.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### ステップ 3 - 学習方法を選択

クリップはそれぞれ 1 秒で 16Khz なので、ウィンドウサイズと周波数はそのままにしておきます。では、処理ブロックを追加しましょう。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge12.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

ここでも Edge Impulse が大いに助けてくれます。"Add a processing block" をクリックし、Audio (MFCC) を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge13.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

次に "Add learning block" をクリックし、Classification を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge14.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

ここまでで、最後の列「Output features」には 4 つのラベル（bird, go, happy, noise）が表示されています。
"Save Impulse" を押して、ここまでの作業を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge15.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

### ステップ 4 - 特徴量を生成

ここで、MFCC パラメータを確認してみましょう。必要であれば値を変更することもできます。
ここではデフォルト値のままにしておきます。"Save Parameters" をクリックします。
パラメータを保存すると、「Generate features」の新しいウィンドウが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge16.png" alt="Edge Impulse dataset screen" width={600} height="auto" /></p>

クリックすると、Edge Impulse が特徴量の生成を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge17.png" alt="Generate features" width={600} height="auto" /></p>

しばらくすると特徴量の生成が完了し、可視化できるようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge18.png" alt="Feature explorer" width={600} height="auto" /></p>

これで、選択したパラメータを使ってネットワークを学習させることができます。"Classifier" をクリックします。

### ステップ 5 - Classifier

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge19.png" alt="Classifier" width={600} height="auto" /></p>

ここでは、トレーニングサイクル数やデータ拡張を行うかどうかなど、ネットワーク設定を調整できます。
Edge Impulse は、キーワードスポッティング向けにシンプルながら効果的なニューラルネットワークアーキテクチャを提供しています。このアーキテクチャは、次のレイヤーで構成されています：

- <b>入力層:</b> 入力層は MFCC 特徴量を入力として受け取ります。
- <b>隠れ層:</b> 隠れ層は MFCC 特徴量から、より高次の特徴量を抽出することを学習します。Edge Impulse は、畳み込み層や再帰層など、さまざまな種類の隠れ層をサポートしています。
- <b>出力層:</b> 出力層は、オーディオ入力にキーワードが含まれている確率を予測します。

デフォルトのパラメータを変更することもできますが、デフォルトのままで十分です。"Start Training" をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge20.png" alt="Network architecture" width={600} height="auto" /></p>

トレーニングを開始すると、画面右側でトレーニングの進行状況を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge21.png" alt="Training progress" width={600} height="auto" /></p>

Target device を nRF52840 （XIAO nRF52840 Sense と同じ）に変更することで、パフォーマンスの計算と最適化の結果を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge22.png" alt="Target device" width={600} height="auto" /></p>

トレーニングが完了すると、Confusion matrix（混同行列）とデータエクスプローラーが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge23.png" alt="Confusion Matrix" width={600} height="auto" /></p>

これでネットワークの準備ができたので、いくつかサンプルを試してライブ分類を行ってみましょう。
Live classification に移動すると、サンプルを選択して分類結果を確認できます。ここでは、bird のサンプルに対して、結果に bird が得られています。素晴らしいですね。モデルは正常に動作しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge24.png" alt="Live classification" width={600} height="auto" /></p>

では、model testing に進みましょう。
テスト用に分割しておいたサンプルを使ってモデルをテストします。"Classify all" をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge25.png" alt="Test data" width={600} height="auto" /></p>

およそ 90% の精度が得られました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge26.png" alt="Accuracy" width={600} height="auto" /></p>

### ステップ 6 - デプロイして Arduino ライブラリを取得する

次に、マイコン用のファイルを取得するために deployment に進みます。

#### デプロイオプション

Arduino を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge27.png" alt="Accuracy" width={600} height="auto" /></p>

次に、Quantized(int8) を選択したままにして、"Build" をクリックし、Arduino IDE で使用するファイルをダウンロードします。
最適化の設定を少し変更して遊んでみることもできます。もし精度が低いと感じたら、EON compiler をオフにして再度試してみてください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge28.png" alt="Accuracy" width={600} height="auto" /></p>

しばらくすると、ファイルが自動的にダウンロードされます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge29.png" alt="Arduino Files download" width={600} height="auto" /></p>

### ステップ 7 - Arduino IDE にライブラリを追加する

Arduino IDE で、新しくダウンロードしたファイルを追加します。
Sketch > Include Library > Add .ZIP Library に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge30.png" alt="Arduino IDE Add library" width={600} height="auto" /></p>

ダウンロードしたファイルを選択します。しばらくすると、出力ウィンドウにライブラリがインストールされたというメッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge31.png" alt="Library installed" width={600} height="auto" /></p>

### ステップ 8 - XIAO nRF52840 Sense 上の RGB ライトを音声で制御する

サンプルスケッチを開きましょう。
Examples > &lt;your_files_names&gt; > nano_ble33_sense > nano_ble33_sense_microphone に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge32.png" alt="Library installed" width={600} height="auto" /></p>

なぜ Arduino BLE 33 Sense なのでしょうか？どちらもマイクを制御するために同じライブラリ - PDM (pulse-density modulation) - を使用しているからです。Arduino Nano BLE 33 Sense には MP34DT05 が、XIAO nRF52840 Sense には MSM261D3526H1CPM が搭載されています。
スケッチを開いたら、コンパイルしてエラーがないか確認しましょう。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge33.png" alt="Sketch open" width={600} height="auto" /></p>

しばらくするとスケッチがコンパイルされ、エラーは報告されませんでした。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge34.png" alt="Sketch open" width={600} height="auto" /></p>

まだ接続していない場合は、XIAO nRF52840 Sense を接続し、ボードにコードをアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge35.png" alt="Sketch open" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge36.png" alt="Compile result" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge37.png" alt="Upload" width={600} height="auto" /></p>

次に、シリアルポート（Ctrl+Shitf+M）を開き、推論結果を確認します（ボードはすでに録音、推論、予測を開始しています）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge38.png" alt="Serial Monitor" width={600} height="auto" /></p>

選択した単語のいずれかを発音してみてください。ここでは go と言ってみました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge39.png" alt="Serial Monitor" width={600} height="auto" /></p>

単語が正しく検出されると、最も確からしい単語の結果は 1.0 に近い値になり、その他は 0.0 に近い値になります。
では、少し遊んでみるために、コードを少し変更してみましょう。
XIAO nRF52840 Sense には、3 色の内蔵 LED があります：

- 赤 - LED_BUILTIN または LED_RED

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge40.gif" alt="Red LED" width={600} height="auto" /></p>
- 緑 - LED_GREEN
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge41.gif" alt="Green LED" width={600} height="auto" /></p>
- 青 - LED_BLUE
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge42.gif" alt="Blue LED" width={600} height="auto" /></p>

3 つの単語があるので、それぞれに色を割り当て、その単語に対応する色を点灯させましょう。

- 赤は bird 用
- 緑は Go 用
- 青は happy 用

簡単にするために、ボードの PIN 定義を確認したところ、次の PIN が LED の色に割り当てられていました：

- RED - Pin 11
- GREEN - Pin 13
- BLUE - Pin 12

まず、しきい値を定義する必要があります。予測値は 0.0 から 1.0 の範囲であることが分かっています。1.0 に近いほど、その単語の分類に自信があるということです。この値は後で調整できます。ここでは 0.7 に設定します。

まず、いくつかの変数を定義します。これらはインクルードしたライブラリの直後に定義しました：

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

<i>int oldLED</i> は、前回点灯していた LED を示す変数で、予測がない場合や予測が変化した場合に、その LED を消灯するために使用します。

<i>int LED</i> は、現在点灯させる LED を示す変数です。

次に、loop() 関数内で、for ループ命令の中、CLASSIFIER_LABEL_COUNT をループしている箇所（上記のコードを追加した後で、およそ 129 行目付近）に処理を追加します：

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
```

if 命令を使って分類値をチェックします。定義したしきい値を超えていれば、switch 命令を使って、どの単語が記録されたかを判定します。

追加を行った後の、完全な for ループは次のようになります：

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

変更が完了したら、コードをマイコンにアップロードし、学習させた単語を発音して、単語に応じて LED が点灯する様子を確認してみてください。

以上です。直接サポートはされていませんが、これで XIAO nRF52840 Sense を使って Edge Impulse でいくつかの ML モデルを実行できるようになりました

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- [Bruno の尽力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)に感謝します。あなたの成果は[展示されます](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
