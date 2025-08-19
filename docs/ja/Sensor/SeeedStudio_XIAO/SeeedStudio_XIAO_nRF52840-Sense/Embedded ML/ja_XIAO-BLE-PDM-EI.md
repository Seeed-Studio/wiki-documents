---
description: Edge Impulse を使用した音声認識
title: Edge Impulse を使用した音声認識
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-BLE-PDM-EI
last_update:
  date: 05/15/2025
  author: Bruno Santos (Feiticeir0)
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

:::caution
このチュートリアルの内容は有効でない可能性があり、新しいソフトウェアのメンテナンスおよび技術サポートは提供されていません。
:::

# Edge Impulse を使用した XIAO nRF52840 による音声認識

この Wiki では、Seeed Studio XIAO nRF52840 の ML 機能を使用して、Edge Impulse を活用した音声認識の方法を紹介します。XIAO nRF52840 Sense に内蔵されているマイクを使用します。

## プロジェクト前の知識

XIAO nRF52840 は Edge Impulse に公式対応しておらず、データ収集用デバイスとしては登録されていませんが、デバイスのマイクを使用して推論を実行する方法を示します。

## はじめに

このチュートリアルを進めるには、以下のハードウェアが必要です。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ハードウェアの準備

特別なハードウェア準備は必要ありません。XIAO nRF52840 には、このプロジェクトに必要なものがすべて揃っています。必要なのは PDM マイクだけです。

#### XIAO nRF52840 Sense のハードウェアピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/XIAO_nrf82840_hardware.png" alt="XIAO nrf82840 hardware" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}></p>

## ソフトウェアの準備

このプロジェクトを試すには、以下の 3 つが必要です：

1. Google Speech commands データセット（以下を参照）
2. [Edge Impulse アカウント](https://edgeimpulse.com/)
3. [Arduino IDE](https://www.arduino.cc/)

### データセット

- Google Speech commands データセットを使用します。ただし、すべてのデータセットではなく、一部の単語のみを使用します。
- まず、データセットをダウンロードして解凍してください。完全なデータセットのサイズは 2.3GB です。
- この <a href="https://www.tensorflow.org/lite/microcontrollers" target="_blank">Google Speech commands データセット</a> は、Google が TensorFlow Lite for MicroControllers のマイクロスピーチ例で使用しているものです。
- <a href="https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb" target="_blank"> コードはこちらで確認できます。</a>

上記の最初のリンクからデータセットをダウンロードし、以下のように展開されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/dataset_extracted.png" alt="Dataset extracted" alt="Speech commands dataset" width={600} height="auto" /></p>

## はじめに

それでは、Edge Impulse を使用してデータセットに基づいた機械学習 (ML) モデルを作成する方法を始めましょう。

### ステップ 1 - Edge Impulse を開く

- Edge Impulse は、開発者がマイクロコントローラーやスマートフォンなどのエッジデバイス向けにカスタム ML モデルを作成およびデプロイできる機械学習 (ML) 開発プラットフォームです。
- キーワード検出、異常検出、分類など、特定のタスク向けに ML モデルを構築および最適化するためのさまざまなツールとリソースを提供します。

新しいプロジェクトを作成しましょう。名前を付けてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge1.png" alt="Edge Impulse 新規プロジェクト" width={600} height="auto" /></p>

新しいプロジェクトを作成したら、データ取得ページに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge2.png" alt="Edge Impulse データ取得" width="{600}" height="auto" /></p>

### ステップ 2 - データを追加

Google の音声コマンドデータセットを使用するため、「既存のデータを追加」を選択します。  
次に、「データをアップロード」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge3.png" alt="Edge Impulse データアップロード" width={600} height="auto" /></p>

次に、データを選択します。音声データセットのフォルダの 1 つを選択しましょう。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge4.png" alt="Edge Impulse データアップロード画面" width={600} height="auto" /></p>

このデータセットには、トレーニング用の多くの単語が含まれています。トレーニング用に 3 つのフォルダ (ラベル) とバックグラウンドノイズを選択します。これで 4 つのラベルが得られます。  
「参照」ボタンを押します。  
最初は「go」です。フォルダを選択し、すべての .wav ファイルが表示されたら、「アップロード」を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge5.png" alt="アップロードするファイル" width={600} height="auto" /></p>

次に、カテゴリのデフォルトオプションをそのままにします。Edge Impulse にデータを分割させます。  
ラベルについては、自分でラベルを記入してください。すべて完了したら、「データをアップロード」を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge6.png" alt="Edge Impulse データアップロード画面" width={600} height="auto" /></p>

右側にアップロード中のファイルが表示されます。ファイルが多いため、少し時間がかかる場合があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge7.png" alt="ファイルアップロード進行状況" width={600} height="auto" /></p>

しばらくすると、アップロードされたファイルの簡単な概要が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge8.png" alt="ファイルアップロード概要" width={600} height="auto" /></p>

その後、この画面が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge9.png" alt="Edge Impulse データセット画面" width={600} height="auto" /></p>

さらにデータをアップロードするには、右側のファイルリスト上部にある小さなアップロードボタンを押します。  
これをあと 3 回繰り返します。2 つのラベルとバックグラウンドノイズです。  
私は「happy」、「bird」、および「バックグラウンドノイズ」フォルダを「noise」というラベルで選択します。  
最終的に、以下がすべてのラベルです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge10.png" alt="Edge Impulse データセット画面" width={600} height="auto" /></p>

次に、単語を学習するためのネットワークを作成します。「Impulse デザイン」をクリックしてインパルスを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge11.png" alt="Edge Impulse データセット画面" width={600} height="auto" /></p>

### ステップ 3 - トレーニング方法を選択

クリップはそれぞれ 1 秒で 16kHz なので、ウィンドウサイズと周波数をそのままにします。次に、処理ブロックを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge12.png" alt="Edge Impulse データセット画面" width={600} height="auto" /></p>

Edge Impulse はここでも大いに役立ちます。「処理ブロックを追加」をクリックし、「Audio (MFCC)」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge13.png" alt="Edge Impulse データセット画面" width={600} height="auto" /></p>

次に、「学習ブロックを追加」をクリックし、「分類」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge14.png" alt="Edge Impulse データセット画面" width={600} height="auto" /></p>

これで、最後の列「出力特徴量」に 4 つのラベル (bird、go、happy、noise) が表示されます。  
「インパルスを保存」を押して、ここまでの作業を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge15.png" alt="Edge Impulse データセット画面" width={600} height="auto" /></p>

### ステップ 4 - 特徴量を生成

次に、MFCC パラメータを確認します。必要に応じて値を変更できます。  
今回はデフォルト値をそのまま使用します。「パラメータを保存」をクリックします。  
パラメータを保存すると、「特徴量を生成」するための新しいウィンドウが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge16.png" alt="Edge Impulse データセット画面" width={600} height="auto" /></p>

クリックすると、Edge Impulse が特徴量の生成を開始します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge17.png" alt="特徴量生成" width={600} height="auto" /></p>

しばらくすると、特徴量が生成され、それらを視覚化することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge18.png" alt="特徴量エクスプローラー" width={600} height="auto" /></p>

次に、選択したパラメータを使用してネットワークをトレーニングします。「Classifier」をクリックしてください。

### ステップ 5 - 分類器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge19.png" alt="分類器" width={600} height="auto" /></p>

ここでは、トレーニングサイクルやデータ拡張の有無など、ネットワーク設定を調整できます。  
Edge Impulse は、キーワード検出のためのシンプルで効果的なニューラルネットワークアーキテクチャを提供します。このアーキテクチャは以下の層で構成されています：
  - <b>入力層:</b> 入力層は MFCC 特徴量を入力として受け取ります。
  - <b>隠れ層:</b> 隠れ層は、MFCC 特徴量から高次の特徴を抽出することを学習します。Edge Impulse は、畳み込み層やリカレント層など、さまざまな隠れ層タイプをサポートしています。
  - <b>出力層:</b> 出力層は、音声入力にキーワードが含まれている確率を予測します。

デフォルトのパラメータを変更することもできますが、デフォルト設定で十分です。「Start Training」をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge20.png" alt="ネットワークアーキテクチャ" width={600} height="auto" /></p>

トレーニングを開始すると、画面の右側でトレーニングの進行状況を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge21.png" alt="トレーニング進行状況" width={600} height="auto" /></p>

ターゲットデバイスを nRF52840（例：XIAO nRF52840 Sense）に変更することで、パフォーマンス計算や最適化を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge22.png" alt="ターゲットデバイス" width={600} height="auto" /></p>

トレーニングが完了すると、混同行列とデータエクスプローラーが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge23.png" alt="混同行列" width={600} height="auto" /></p>

ネットワークが準備できたので、いくつかのサンプルを試し、ライブ分類を行ってみましょう。  
ライブ分類に移動すると、サンプルを選択して分類結果を確認できます。例えば、鳥のサンプルでは、結果に「bird」と表示されます。素晴らしいですね。モデルが機能しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge24.png" alt="ライブ分類" width={600} height="auto" /></p>

次に、モデルテストに進みましょう。  
テスト用に分割されたサンプルを使用してモデルをテストします。「Classify all」をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge25.png" alt="テストデータ" width={600} height="auto" /></p>

約 90% の精度が得られます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge26.png" alt="精度" width={600} height="auto" /></p>

### ステップ 6 - デプロイと Arduino ライブラリの取得

次に、マイクロコントローラー用のファイルを取得するためにデプロイに進みます。

#### デプロイオプション

Arduino を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge27.png" alt="精度" width={600} height="auto" /></p>

次に、「Quantized(int8)」を選択したままにして、「Build」をクリックして Arduino IDE で使用するファイルをダウンロードします。  
最適化を少し調整することもできます。精度が低いと感じた場合は、EON コンパイラをオフにして再試行してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge28.png" alt="精度" width={600} height="auto" /></p>

しばらくすると、ファイルが自動的にダウンロードされます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge29.png" alt="Arduino ファイルダウンロード" width={600} height="auto" /></p>

### ステップ 7 - Arduino IDE にライブラリを追加

Arduino IDE で、新しくダウンロードしたファイルを追加します。  
「Sketch > Include Library > Add .ZIP Library」に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge30.png" alt="Arduino IDE ライブラリ追加" width={600} height="auto" /></p>

ダウンロードしたファイルを選択します。しばらくすると、出力ウィンドウに「ライブラリがインストールされました」というメッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge31.png" alt="ライブラリインストール済み" width={600} height="auto" /></p>

### ステップ 8 - XIAO nRF52840 Sense で RGB ライトを音声制御

例を開きます。  
「Examples > &lt;your_files_names&gt; > nano_ble33_sense > nano_ble33_sense_microphone」に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge32.png" alt="ライブラリインストール済み" width={600} height="auto" /></p>

なぜ Arduino BLE 33 Sense を使用するのか？  
それは、マイクを制御するために同じライブラリ（PDM：パルス密度変調）を使用しているからです。Arduino Nano BLE 33 Sense には MP34DT05 が搭載されており、XIAO nRF52840 Sense には MSM261D3526H1CPM が搭載されています。  
スケッチを開いたら、コンパイルしてエラーがないか確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge33.png" alt="スケッチオープン" width={600} height="auto" /></p>

しばらくすると、スケッチがコンパイルされ、エラーが報告されませんでした。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge34.png" alt="スケッチを開く" width={600} height="auto" /></p>

次に、XIAO nRF52840 Sense を接続し（まだ接続していない場合）、コードをボードにアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge35.png" alt="スケッチを開く" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge36.png" alt="コンパイル結果" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge37.png" alt="アップロード" width={600} height="auto" /></p>

次に、シリアルポートを開き（Ctrl+Shift+M）、推論結果を確認します（ボードはすでに録音、推論、予測を開始しています）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge38.png" alt="シリアルモニタ" width={600} height="auto" /></p>

選択した単語の1つを言ってみてください。ここでは「go」と言いました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge39.png" alt="シリアルモニタ" width={600} height="auto" /></p>

単語が正しく検出されると、最も確率の高い単語の結果が1.0に近くなり、他の単語は0.0に近い値になります。

次に、少し楽しむためにコードを少し変更してみましょう。  
XIAO nRF52840 Senseには、3色の内蔵LEDがあります：

- 赤 - LED_BUILTIN または LED_RED
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge40.gif" alt="赤色LED" width={600} height="auto" /></p>
- 緑 - LED_GREEN
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge41.gif" alt="緑色LED" width={600} height="auto" /></p>
- 青 - LED_BLUE
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge42.gif" alt="青色LED" width={600} height="auto" /></p>

3つの単語があるので、それぞれの単語に色を割り当て、単語に応じて対応する色を点灯させます。  
- 赤は「bird」用  
- 緑は「Go」用  
- 青は「happy」用  

簡単にするために、ボードのPIN定義を確認したところ、以下のPINがLEDの色に割り当てられていました：
- 赤 - Pin 11  
- 緑 - Pin 13  
- 青 - Pin 12  

まず、しきい値を定義する必要があります。予測値は0.0から1.0の範囲であることがわかっています。1.0に近いほど、単語の分類に確信が持てます。この値は後で調整可能です。ここでは0.7に設定します。

まず、いくつかの変数を定義します。これらはインクルードされたライブラリの直後に定義しました：

```cpp
/* 予測のしきい値 */
float threshold = 0.7;

/** 
  ラベルインデックス:
  0 - bird
  1 - go
  2 - happy
  3 - noise
*/
// 点灯するLEDピン（色を定義）
/**
 PIN 11 - 赤
 PIN 12 - 青
 PIN 13 - 緑
*/
int LED = 0;
int oldLED;
```

<i>int oldLED</i> は、予測がない場合や予測が変わった場合に前回点灯していたLEDを消灯するために使用します。  
<i>int LED</i> は、現在点灯するLEDを定義します。

次に、loop()関数内で、forループ命令の中（CLASSIFIER_LABEL_COUNTをループする箇所、約129行目 - 上記のコードを含む）に以下を追加します：

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
```

if命令を使用して分類値を確認します。定義したしきい値を超えた場合、switch命令を使用して記録された単語を確認します。

以下は、追加した内容を含む完全なforループです：

```cpp
for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
        // LEDを点灯させる

        if (result.classification[ix].value > threshold) {
          // どのラベルか確認
          switch (ix) {
            case 0: LED = 11; break;
            case 1: LED = 13; break;
            case 2: LED = 12; break;
            default: LED = 0;
          }
          // Senseでは、LOWでLEDが点灯
          if (LED != 0) {
            digitalWrite (oldLED, HIGH); // 直前の単語と異なる場合、前回のLEDを消灯
            digitalWrite (LED, LOW);            
            oldLED = LED;
          }
          else // LEDを消灯
            digitalWrite (oldLED, HIGH);
        }
    }
```

変更後、コードをマイクロコントローラにアップロードし、トレーニングした単語を言ってみて、単語に応じてLEDが点灯する様子を確認してください。

以上です。直接サポートされているわけではありませんが、XIAO nRF52840 Senseを使用してEdge ImpulseでいくつかのMLモデルを実行できるようになりました。

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- [Brunoの努力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237) に感謝します。あなたの作業は[展示されます](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>