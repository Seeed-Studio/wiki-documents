---
description: 音声認識と音声からインテントへの変換
title: 音声認識と音声からインテントへの変換
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-TinyML-TFLM-3
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal Tensorflow Lite Microを使用したMCU上での音声認識 – 音声からインテントへの変換

デバイス制御やユーザーリクエストの実現に音声を使用する従来のアプローチは、まず音声をテキストに書き起こし、その後テキストを適切な形式のコマンドやクエリに解析するというものです。このアプローチは語彙やアプリケーションシナリオの柔軟性を提供しますが、音声認識モデルと専用のパーサーを組み合わせる方法は、マイクロコントローラーの制約されたリソースには適していません。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-6-1024x416.png" /></div>

    出典: Wio Terminal, Picovoice, Tensorflow Lite

このプロジェクトでは、より効率的な方法を採用し、ユーザーの発話を直接インテント/スロット形式の実行可能な出力に解析します。特定のドメイン向けの音声からインテントへのモデルをトレーニングし、内蔵マイクを備えたCortex M4Fベースの開発ボードであるSeeed StudioのWio Terminalにデプロイする手法を共有します。

詳細やビジュアルについては、対応するビデオをご覧ください！

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/CVq4cet5jgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

音声認識タスクにはさまざまな種類があり、大まかに以下の3つに分類できます：

- 大語彙連続音声認識（LVCSR）
- キーワードスポッティング
- 音声からインテントへの変換

キーワードスポッティングはマイクロコントローラーでうまく機能し、さまざまなノーコードのオープンソースツール（例：Edge Impulse）を使用して比較的簡単にトレーニングできますが、大きな語彙には対応できません。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-7-768x570.png" /></div>

音声入力に基づいてデバイスが有用なアクションを実行するようにしたい場合、LVCSRモデルとテキストベースの自然言語パーサーを組み合わせる必要があります。このアプローチは堅牢で、公開されているASRエンジンが豊富にあるため比較的実装が容易ですが、SBC（シングルボードコンピュータ）でさえ実行が難しく、マイクロコントローラーではなおさら適していません。

3つ目の方法として、特定のドメイン語彙に基づいて音声を直接解析されたインテントに変換する方法があります。例えば、スマート洗濯機やスマートライトを例に挙げます。音声からインテントへのモデルは、「低速回転で通常サイクル」という発話を処理すると、以下のような解析されたインテントを出力します：

```json
{ Intent: washClothes },
{ Slots: cycle: normal,
         spin: low,
         water: default }
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-9-768x621.png" /></div>

これだけで、音声でスマート洗濯機を制御するために必要なすべてが揃います。

音声からインテントへの変換は研究ではよく取り上げられていますが、マイクロコントローラーに適した広く利用可能なオープンソース実装は不足しています。
製品レベルで利用可能だがオープンソースではないもの：

- Picovoice
- Fluent.ai

製品レベルで利用可能なFOSS（自由でオープンソースのソフトウェア）だが、マイクロコントローラーには適していないもの：

- Speechbrain.io

モデルのトレーニングには、準備したJupyter NotebookまたはGitHubリポジトリのトレーニングスクリプトを使用できます（記事の最後の**参考資料**セクションで見つけることができます）。Jupyter Notebookには非常に基本的なリファレンスモデルの実装が含まれており、各セルの説明もあります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-10.png" /></div>

モデルをトレーニングした後、Wio Terminal用のコードが入ったフォルダにコピーし、[106行目](https://github.com/AIWintermuteAI/Speech-to-Intent-Micro/blob/886746bb1878971d43e3e39584e0e2a492933491/inference_code/Wio_Terminal/wio_speech_to_intent_150_10/wio_speech_to_intent_150_10.ino#L106)でモデル名を自分のモデル名に変更します。コードの最も重要な部分を見ていきましょう。大まかに以下の3つの部分に分けられます：

- 音声取得
- MFCC計算
- MFCC特徴量に基づく推論

## 音声取得

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/DMAPIO.GIF" /></div>

Wio Terminal の内蔵マイクを使用して音声を録音し処理するために、Cortex M4F MCU の DMA ADC 機能を使用します。DMA は「直接メモリアクセス」を意味し、その名の通り、MCU の特定部分である DMAC（Direct Memory Access Control）が事前に設定され、データをある場所（例：内部メモリ、SPI、I2C、ADC またはその他のインターフェース）から別の場所へ「パイプ」します。この方法では、初期設定を除いて MCU の関与をほとんど必要とせずに転送が行われます。ここでは転送元と転送先を設定します。

```cpp
descriptor.descaddr = (uint32_t)&descriptor_section[1]; // 循環ディスクリプタを設定
descriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg; // ADC0 RESULT レジスタから結果を取得
descriptor.dstaddr = (uint32_t)adc_buf_0 + sizeof(uint16_t) * ADC_BUF_LEN;  // adc_buf_0 配列に配置
descriptor.btcnt = ADC_BUF_LEN;  // ビートカウント
descriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |   // ビートサイズは HWORD (16ビット)
                      DMAC_BTCTRL_DSTINC |      // 転送先アドレスをインクリメント
                      DMAC_BTCTRL_VALID |       // ディスクリプタが有効
                      DMAC_BTCTRL_BLOCKACT_SUSPEND; // ブロック転送後に DMAC チャンネル 0 を停止
memcpy(&descriptor_section[0], &descriptor, sizeof(descriptor));  // ディスクリプタをディスクリプタセクションにコピー
descriptor.descaddr = (uint32_t)&descriptor_section[0];           // 循環ディスクリプタを設定
descriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg;                 // ADC0 RESULT レジスタから結果を取得
descriptor.dstaddr = (uint32_t)adc_buf_1 + sizeof(uint16_t) * ADC_BUF_LEN;  // adc_buf_1 配列に配置
descriptor.btcnt = ADC_BUF_LEN;  // ビートカウント
descriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |    // ビートサイズは HWORD (16ビット)
                      DMAC_BTCTRL_DSTINC |    // 転送先アドレスをインクリメント
                      DMAC_BTCTRL_VALID |      // ディスクリプタが有効
                      DMAC_BTCTRL_BLOCKACT_SUSPEND; // ブロック転送後に DMAC チャンネル 0 を停止
memcpy(&descriptor_section[1], &descriptor, sizeof(descriptor));  // ディスクリプタをディスクリプタセクションにコピー
```

DMA ディスクリプタのパラメータ `DMAC_BTCTRL_BLOCKACT_SUSPEND;` を指定することで、DMA チャンネルは完全なブロック転送後に停止する必要があります。その後、TC5 タイマーでトリガーされる ISR（割り込みサービスルーチン）を設定します。

```cpp
 // Timer/Counter 5 を設定
GCLK->PCHCTRL[TC5_GCLK_ID].reg = GCLK_PCHCTRL_CHEN | // TC5 用の周辺チャンネルを有効化
GCLK_PCHCTRL_GEN_GCLK1;    // 汎用クロック 0 を 48MHz に接続
TC5->COUNT16.WAVE.reg = TC_WAVE_WAVEGEN_MFRQ;     // TC5 を周波数一致(MFRQ)モードに設定
TC5->COUNT16.CC[0].reg = 3000 - 1;                          // トリガーを 16 kHz に設定: (4Mhz / 16000) - 1
while (TC5->COUNT16.SYNCBUSY.bit.CC0);                      // 同期を待機
// Timer/Counter 5 を開始
TC5->COUNT16.CTRLA.bit.ENABLE = 1;                          // TC5 タイマーを有効化
while (TC5->COUNT16.SYNCBUSY.bit.ENABLE);                   // 同期を待機
```

ISR は TC5 タイマーによって制御される等間隔の時間で特定の関数を呼び出します。その関数を見てみましょう。

```cpp
/**
 * DMAC 1 の割り込みサービスルーチン (ISR)
 */
void DMAC_1_Handler() {

  static uint8_t count = 0;

  // DMAC チャンネル 1 が停止 (SUSP) しているか確認
  if (DMAC->Channel[1].CHINTFLAG.bit.SUSP) {

     // デバッグ: バッファコピー前にピンを HIGH に設定
#ifdef DEBUG
    digitalWrite(debug_pin, HIGH);
#endif

    // チャンネル 1 の DMAC を再開し、SUSP 割り込みフラグをクリア
    DMAC->Channel[1].CHCTRLB.reg = DMAC_CHCTRLB_CMD_RESUME;
    DMAC->Channel[1].CHINTFLAG.bit.SUSP = 1;

    // どのバッファが埋まったか確認し、大きなバッファに結果をダンプ
    if (count) {
      audio_rec_callback(adc_buf_0, ADC_BUF_LEN);
    } else {
      audio_rec_callback(adc_buf_1, ADC_BUF_LEN);
    }

    // 次のバッファに切り替え
    count = (count + 1) % 2;

    // デバッグ: バッファコピー後にピンを LOW に設定
#ifdef DEBUG
    digitalWrite(debug_pin, LOW);
#endif
  }
}
```

DMAC1_Handler() と呼ばれる ISR 関数は、DMAC チャンネル 1 が停止しているかどうかを確認します。これは、情報の 1 ブロックの記録が終了したときに発生します。停止している場合、ユーザー定義関数 `audio_rec_callback()` を呼び出し、記録された DMA ADC バッファの内容を（おそらく）MFCC 特徴量を計算するために使用される大きなバッファにコピーします。このステップで音声の後処理をオプションで適用することもできます。

## MFCC 計算

TensorFlow の MFCC Op コードに一致するように MFCC 特徴量を抽出するコードは、ARM マイクロコントローラーでのキーワード検索用に ARM リポジトリから借用されています。元のコードは [こちら](https://github.com/ARM-software/ML-KWS-for-MCU) で確認できます。

MFCC 特徴量計算に関連するほとんどの作業は、MFCC クラスの `mfcc_compute(const int16_t *audio_data, float* mfcc_out)` メソッド内で行われます。このメソッドは、オーディオデータへのポインタ（この場合、320 の音声データポイント）と、MFCC 出力値の配列内の特定の位置へのポインタを受け取ります。1つのタイムスライスに対して以下の操作を行います：

データを -1,1 に正規化し、パディングを行います（この場合、オーディオデータは常に MFCC 特徴量の1スライスを計算するのに必要な正確なサイズであるため、パディングは発生しません）：

```cpp
  // TensorFlow の .wav データを (-1,1) に正規化する方法
  for (i = 0; i < frame_len; i++) {
    frame[i] = (float)audio_data[i]/(1<<15); 
  }
  // 残りをゼロで埋める
  memset(&frame[frame_len], 0, sizeof(float) * (frame_len_padded-frame_len));
```

ARM Math ライブラリ関数を使用して RFFT または [Real Fast Fourier Transform](https://www.keil.com/pack/doc/CMSIS/DSP/html/group__RealFFT.html) を計算します：

```cpp
  // FFT を計算
  arm_rfft_fast_f32(rfft, frame, buffer, 0);
```

値をパワースペクトルに変換します：

```cpp
  // frame は [real0, realN/2-1, real1, im1, real2, im2, ...] として格納される
  int32_t half_dim = frame_len_padded/2;
  float first_energy = buffer[0] * buffer[0],
        last_energy =  buffer[1] * buffer[1];  // この特別なケースを処理
  for (i = 1; i < half_dim; i++) {
    float real = buffer[i*2], im = buffer[i*2 + 1];
    buffer[i] = real*real + im*im;
  }
  buffer[0] = first_energy;
  buffer[half_dim] = last_energy;  
```

次に、前のステップでバッファに保存されたデータの平方根にメルフィルタバンクを適用します。メルフィルタバンクは、MFCC クラスがインスタンス化される際に `create_mel_fbank()` メソッド内で作成されます。フィルタバンクの数、最小および最大周波数は事前にユーザーによって指定されます。これらはトレーニングスクリプトと推論コードの間で一貫性を保つことが非常に重要であり、そうでない場合、精度が大幅に低下します。

```cpp
  float sqrt_data;
  // メルフィルタバンクを適用
  for (bin = 0; bin < NUM_FBANK_BINS; bin++) {
    j = 0;
    float mel_energy = 0;
    int32_t first_index = fbank_filter_first[bin];
    int32_t last_index = fbank_filter_last[bin];
    for (i = first_index; i <= last_index; i++) {
      arm_sqrt_f32(buffer[i],&sqrt_data);
      mel_energy += (sqrt_data) * mel_fbank[bin][j++];
    }
    mel_energies[bin] = mel_energy;

    // ゼロの対数を回避
    if (mel_energy == 0.0)
      mel_energies[bin] = FLT_MIN;
  }
```

最後に、メルエネルギーの配列に対して [離散コサイン変換](https://en.wikipedia.org/wiki/Discrete_cosine_transform) を行い、MFCC 特徴量出力配列に書き込みます。元のスクリプトでは、このステップで量子化が行われますが、ここでは TensorFlow Lite for Microcontrollers の例から量子化手順を使用することにしました。

## MFCC 特徴量での推論

1つのサンプル（3秒）のすべてのオーディオが処理され、MFCC 特徴量に変換された後、MFCC 特徴量配列全体を FLOAT32 から INT8 値に変換し、ニューラルネットワークに入力します。TensorFlow Lite for Microcontrollers の初期化および推論プロセスについては、以前の記事で既に説明しているため、ここでは繰り返しません。

スケッチをコンパイルする前に、必要なすべてのライブラリがインストールされていること、および Seeed SAMD ボード定義が少なくともバージョン 1.8.2 であることを確認してください。これは、TensorFlow Lite ライブラリをエラーなくコンパイルするために非常に重要です。スケッチをコンパイルしてアップロードします。DEBUG パラメータが false に設定されている場合、コードはすぐに実行を開始し、Wio Terminal の上部にある C ボタンを押して、データセットからの文の1つを話すだけです。結果は画面に表示され、Wio Terminal がコンピュータに接続されている場合はシリアルモニタにも出力されます。

このコースは Wio Terminal を基にしていますが、組み込み機械学習を探求するのに非常に適しているため、他のデバイスで実装することも可能です。最も簡単なのは、コードを他の Cortex M4F MCU（例：Nano33 BLE Sense）に移植することです。これには、異なるマイクに合わせて調整するだけで済みます。他の ARM MCU への移植も比較的簡単です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-13-768x626.png" /></div>

他のアーキテクチャ（例：ESP32 や K210 など）への移植には、MFCC 計算を再実装する必要があります。これらは CMSIS-DSP の ARM 固有の関数を使用しているためです。

このプロジェクトの基本的なニューラルネットワークアーキテクチャには、以下のような複数の改善が可能です：

- モデルの事前トレーニング
- seq2seq、LSTM、アテンション
- 学習可能なフィルタ
- AutoML、合成データ

このトピックに関する TinyML の講演を見て、さらに詳しい情報や論文へのリンクを確認してください！

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/YmJrr1D191k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

コードリポジトリをフォークし、自分のデータセットでトレーニングを試したり、より高度なアーキテクチャやモデルトレーニング手法を実装してみてください。もし実施した場合は、ぜひここで知らせていただくか、Github で PR を作成してください！

## 参考文献

- [Jupyter notebook](https://github.com/AIWintermuteAI/Speech-to-Intent-Micro/blob/main/jupyter_notebooks/prepare_data.ipynb)

- [プロジェクトのGithub](https://github.com/AIWintermuteAI/Speech-to-Intent-Micro)