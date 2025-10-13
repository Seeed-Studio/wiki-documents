---
description: Edge Impulse 入門ガイド
title: Edge Impulse 入門ガイド
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-TinyML-EI-1
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal Edge Impulse 入門ガイド

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

[**Edge Impulse**](https://www.edgeimpulse.com/) は、組み込み機械学習を活用して次世代のインテリジェントデバイスソリューションを開発するためのプラットフォームを提供します。エッジでの機械学習により、現在コスト、帯域幅、または電力制約のために破棄されているセンサーデータの99%を有効活用することが可能になります。

現在、[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) は公式に Edge Impulse に対応しています。それでは、エッジでの機械学習を使って Wio Terminal を始める方法を見てみましょう！

## 依存関係のインストール

Wio Terminal を Edge Impulse にセットアップするには、以下のソフトウェアをインストールする必要があります：

1. [Node.js v12](https://nodejs.org/en/) 以上。
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
3. Edge Impulse CLI とシリアルモニター。以下のコマンドをコマンドプロンプトまたはターミナルで実行してインストールします：

```sh
npm install -g edge-impulse-cli 
```

:::note
CLI のインストールに問題がありますか？詳細については [インストールとトラブルシューティング](https://docs.edgeimpulse.com/docs/cli-installation) をご確認ください。
:::

## Edge Impulse への接続

すべてのソフトウェアが準備できたら、開発ボードを Edge Impulse に接続します。

### 1. 開発ボードをコンピュータに接続する

Wio Terminal をコンピュータに接続します。電源スイッチを素早く2回スライドさせてブートローダーモードに入ります。詳細については [こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/#faq) もご参照ください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

PC に `Arduino` という名前の外部ドライブが表示されます。ダウンロードした [**Edge Impulse uf2 ファームウェアファイル**](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse/releases/tag/1.4.0) を `Arduino` ドライブにドラッグします。これで、Edge Impulse が Seeeduino Wio Terminal にロードされました！

**注意:** こちらが [Wio Terminal Edge Impulse ソースコード](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse) です。ここからファームウェアをビルドすることもできます。

### 2. キーの設定

コマンドプロンプトまたはターミナルで以下を実行します：

```sh
edge-impulse-daemon
```

**注意:** 新しいデバイスに接続する際は、`edge-impulse-daemon --clean` を実行して以前のキャッシュを削除してください。

### 3. デバイスが接続されていることを確認する

これで完了です！デバイスは Edge Impulse に接続されました。これを確認するには、[Edge Impulse プロジェクト](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1) に移動し、[Devices] をクリックします。デバイスがここに表示されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/device.png" /></div>

最初のプロジェクトでは、単一の光センサーを使用してじゃんけんのジェスチャーを分類する簡単なニューラルネットワークを迅速にトレーニングしてデプロイしてみましょう。詳細とビデオチュートリアルについては、対応するビデオをご覧ください！

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/iCmlKyAp8eQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## トレーニングデータの取得

データ取得タブに移動します。サンプルの長さを約10000ms（10秒）に設定し、各ジェスチャーに対して10個のサンプルを作成します。Wio Terminalの近くで手を振る動作を行ってください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif1.gif" /></div>

これは小規模なデータセットですが、使用するニューラルネットワークも小規模であるため、この場合は過学習よりも未学習が発生しやすいです。

**未学習**:
        統計モデルや機械学習アルゴリズムがデータの基礎的な傾向を捉えられない場合、未学習と呼ばれます。これは、モデルサイズが小さすぎて、データの多様性やノイズが多い場合に一般的なルールを構築できない場合に発生します。

**過学習**:
        統計モデルがデータセット内のノイズや不正確なデータエントリを学習し始めると、過学習と呼ばれます。これは、大規模なモデルと比較的小規模なデータセットを使用する場合に発生します。この場合、モデルはデータポイントを「丸暗記」してしまい、一般化ができなくなります。

サンプルを収集する際には、モデルがより良く一般化できるように多様性を提供することが重要です。例えば、センサーからの方向、速度、距離が異なるサンプルを収集してください。一般的に、ネットワークはデータセット内のデータからのみ学習できます。そのため、センサーの上で左から右に動かすジェスチャーのみを収集した場合、右から左や上下に動かすジェスチャーを認識することは期待できません。

## 機械学習モデルの構築

サンプルを収集した後は、「インパルス」を設計する時です。ここでのインパルスとは、Edge Impulseがデータ処理、つまりトレーニングパイプラインを指すために使用する用語です。「Create Impulse」をクリックし、ウィンドウの長さを1000ms、ウィンドウの長さの増加を50msに設定します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/main.png" /></div>

これらの設定は、推論が行われるたびにセンサー測定を1000ms間行うことを意味します。デバイスが測定を行う頻度はサンプリング周波数によります。データ収集時にサンプリング周波数を40Hz（1秒間に40回）に設定しました。つまり、デバイスは1000msの時間ウィンドウ内で40個のデータサンプルを収集し、それらの値を前処理してニューラルネットワークに入力し、推論結果を得ることになります。もちろん、トレーニング時にも同じウィンドウサイズを使用します。

この概念実証プロジェクトでは、デフォルトのパラメータ（スケーリングを追加することを除く）で3つの異なる前処理ブロックを試します：
**Flatten**ブロックは、時間ウィンドウ内の生データに対して平均、最小値、最大値などの関数を計算します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_ZEX5ydSwOS.jpeg" /></div>

**Spectral Features**ブロックは、信号の周波数とパワー特性を時間にわたって抽出します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_7uXlLwjT3E.jpeg" /></div>

**Raw data**ブロックは、予想通り、生データをそのままニューラルネットワーク学習ブロックに入力します（オプションでデータを正規化します）。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image.png" /></div>

まずはFlattenブロックから始めます。このブロックを追加し、学習ブロックとしてNeural Network (Keras)を追加します。入力特徴としてFlattenを選択し、「Save Impulse」をクリックします。次に、選択した処理ブロックの名前が付いたタブに移動します（例：Flatten）。スケーリングに0.001を入力し、他のパラメータはそのままにします。「Save parameters」をクリックし、「Generate features」を押します。

Edge Impulseのウェブインターフェースでは、特徴の視覚化が特に便利なツールです。これにより、前処理後のデータがどのように見えるかをグラフィカルに確認できます。例えば、Flatten処理ブロック後のデータは以下のようになります：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_4tnpR9t34s.jpeg" /></div>

異なるクラスのデータポイントが大まかに分離されていますが、rockと他のクラス間で多くの重なりがあり、これが問題を引き起こし、これら2つのクラスの精度が低くなる原因となります。特徴を生成して確認した後、「NN Classifier」タブに移動します。

2つの隠れ層を持つ単純な全結合ネットワークをトレーニングします。各隠れ層にはそれぞれ20個と10個のニューロンを配置し、学習率を1e-4に設定して500エポックでトレーニングします。トレーニングが完了すると、以下のような混同行列でテスト結果が表示されます：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/flatten.png" /></div>

「Create Impulse」タブに戻り、Flattenブロックを削除してSpectral Featuresブロックを選択します。特徴を生成し（スケーリングを0.001に設定することを忘れないでください）、Spectral Featuresデータでニューラルネットワークをトレーニングします。わずかな改善が見られるはずです。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/spectral.png" /></div>

FlattenとSpectral Featuresブロックは、実際にはrock-paper-scissorsジェスチャー認識タスクに最適な処理方法ではありません。このタスクについて考えると、光センサーが「通常より低い」値を受信した回数とその時間を数えるだけで十分です。1回の比較的長い時間であればrock（センサーの上を通過する拳）です。2回であればscissors、それ以上であればpaperです。簡単そうですが、ニューラルネットワークがデータポイント間の関係を学習できるようにするためには、時系列データを保持することが非常に重要です。

FlattenとSpectral Features処理ブロックは、各ウィンドウ内の時間関係を削除してしまいます。Flattenブロックは、生の値を順序に関係なく、時間ウィンドウ内のすべての値に基づいて計算された平均、最小値、最大値などの値に変換します。Spectral Featuresブロックは周波数とパワー特性を抽出しますが、このタスクにうまく機能しなかった理由は、おそらく各ジェスチャーの持続時間が短すぎるためです。

したがって、最高のパフォーマンスを達成する方法は、時系列データを保持するRaw dataブロックを使用することです。Raw dataと1D畳み込みネットワーク（全結合ネットワークよりも専門的なタイプのネットワーク）を使用したサンプルプロジェクトをご覧ください。同じデータで92.4%の精度を達成することができました！
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/raw.png" /></div>

最終的なトレーニング結果は以下の通りです：

- Flatten FC：69.9% の精度
- Spectral Features FC：70.4% の精度
- Raw Data Conv1D：92.4% の精度

トレーニング後、モデルをテストするには「Live classification」タブを使用します。このタブではデバイスからデータサンプルを収集し、Edge Impulseにホストされたモデルで分類を行います。3種類の異なるジェスチャーでテストを行い、概念実証としては満足のいく精度が得られました。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/live_class.png" /></div>

## Wio Terminal へのデプロイ

次のステップはデバイスへのデプロイです。「Deployment」タブをクリックし、Arduinoライブラリを選択してダウンロードします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/deploy.png" /></div>

アーカイブを解凍し、Arduinoのライブラリフォルダに配置します。Arduino IDEを開き、「static buffer」スケッチを選択します（File -> Examples -> プロジェクト名 -> static_buffer）。このスケッチには、モデルを使用した分類のための基本コードがすでに含まれています。便利ですね！

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/example.png" /></div>

唯一追加する必要があるのは、デバイス上でのデータ取得部分です。トレーニングデータセットを収集した際に25msの遅延を使用したことを思い出し、それに合わせて簡単なforループと遅延を使用します。

```cpp
int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
float features[40];
for (byte i = 0; i < 40; i = i + 1) 
    {
    features[i]=analogRead(WIO_LIGHT);
    delay(25);
    }
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}
```

もちろん、これを実装するより良い方法もあります。例えば、センサーデータバッファを使用すれば、より頻繁に推論を行うことが可能です。しかし、このシリーズの後続の記事でその方法について触れる予定です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif3.gif" /></div>

これは概念実証のデモンストレーションに過ぎませんが、TinyMLが大きな可能性を秘めていることを示しています。カメラセンサーを使用してジェスチャーを認識することが可能であることは既にご存知かもしれませんが、画像を大幅に縮小しても認識できることは驚きです。しかし、たった1ピクセルでジェスチャーを認識するというのは全く別次元の話です！

## 参考資料

- [Edge Impulse Public project](https://studio.edgeimpulse.com/public/15854/latest)

- [Project Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_1_Intro)