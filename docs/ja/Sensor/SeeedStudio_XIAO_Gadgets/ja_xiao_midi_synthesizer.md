---
description: XIAO MIDI シンセサイザーの入門ガイド
title: XIAO MIDI シンセサイザーの入門ガイド
keywords:
  - XIAO
  - MIDI
  - ESP32-C3
  - SAM2695
  - synthesizer
sidebar_position: 7
image: https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/1.webp
slug: /ja/xiao_midi_synthesizer
last_update:
  date: 05/15/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/1.jpg" style={{width:600, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-MIDI-Synthesizer-p-6462.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

**XIAO MIDI シンセサイザー**は、XIAO ESP32-C3 とプロフェッショナルグレードの SAM2695 MIDI チップを搭載したコンパクトなオールインワン音楽制作ガジェットです。小さなサイズにもかかわらず、豊かで表現力豊かなサウンドを提供し、最大64音のポリフォニーをサポートし、数百種類の楽器音色を提供します。サウンドを実験する開発者でも、新しい楽曲を作曲するミュージシャンでも、このシンセサイザーは音楽制作をスムーズで刺激的なものにするよう設計されています。

## 特徴

- ゼロバリア創作、音楽初心者に最適
- オールインワン MIDI + メトロノーム -- よりスマートで滑らかなワークフロー
- 上級プレイヤー向けプロフェッショナルグレードのパフォーマンス
- 超ポータブル & 完全にハック可能

## ハードウェア概要

XIAO MIDI シンセサイザーは以下のコンポーネントを統合しています：

<div class="table-center">
  <table align="center">
    <tr>
      <th colspan="2">コアモジュール</th>
    </tr>
    <tr>
      <td>MCU</td>
      <td>XIAO ESP32-C3</td>
    </tr>
    <tr>
      <th colspan="2">サウンド生成</th>
    </tr>
    <tr>
      <td>MIDI チップ</td>
      <td>SAM2695</td>
    </tr>
    <tr>
      <td>ポリフォニー</td>
      <td>最大64音</td>
    </tr>
    <tr>
      <td>楽器プリセット</td>
      <td>100種類以上の異なる楽器サウンドが利用可能</td>
    </tr>
    <tr>
      <th colspan="2">インターフェースと接続性</th>
    </tr>
    <tr>
      <td>3.5mm オーディオジャック</td>
      <td>外部オーディオデバイス（スピーカーやヘッドフォンなど）の接続に使用<br />ケーブル挿入時のクラス D アンプの自動無効化と、取り外し時の再有効化機能を搭載</td>
    </tr>
    <tr>
      <td>物理ボタン</td>
      <td>ユーザーインタラクション用の4つのサイドマウント物理ボタン</td>
    </tr>
    <tr>
      <td>XIAO ソケット</td>
      <td>XIAO モジュール専用に設計されたソケット、追加のサイドコネクタによる拡張機能付き</td>
    </tr>
    <tr>
      <td>D クラスアンプ</td>
      <td>内蔵スピーカー</td>
    </tr>
    <tr>
      <th colspan="2">電源とインジケーター</th>
    </tr>
    <tr>
      <td>電源供給</td>
      <td>5V Type-C</td>
    </tr>
    <tr>
      <td>インジケーター LED</td>
      <td>電源状態の表示とユーザーフィードバックの提供に使用される単色 LED</td>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/3.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/4.png" style={{width:1000, height:'auto'}}/></div>

## 入門ガイド

このセクションでは、XIAO MIDI シンセサイザーを初めて設定する方法をガイドします。

### ファクトリーファームウェアの使用

XIAO MIDI シンセサイザーには多機能なファクトリーファームウェアが事前にフラッシュされており、箱から出してすぐに複数のサウンドとリズム機能を探索できます。以下はデフォルト機能と主要操作のクイックガイドです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/7.png" style={{width:600, height:'auto'}}/></div>

**詳細なキー機能**

- **サウンドテスト（デフォルトモード）：**
  - **🎵0**: 128のプリセット楽器サウンドを循環。各押下で次のサウンドに切り替わります。
  - **🎵1**: 音程を上げる（例：C4からD4へ）。
  - **🎵2**: 音程を下げる（例：C4からB3へ）。
  - **🎵3**: クリックでメトロノームの開始/停止。

- **ビートキーパーモード：**
  - **🎵0**: （このモードでは機能なし）
  - **🎵1**: BPM（テンポ）を1ステップ増加（メトロノームがアクティブな時のみ動作）。
  - **🎵2**: BPM（テンポ）を1ステップ減少（メトロノームがアクティブな時のみ動作）。
  - **🎵3**: クリックでメトロノームの開始/停止（デフォルト：120 BPM、範囲：40–240 BPM）。

- **マルチトラック再生モード：**
  - **🎵0**: トラック1を再生（プリロードされたサウンドまたはシーケンス）
  - **🎵1**: トラック2を再生
  - **🎵2**: トラック3を再生
  - **🎵3**: トラック4を再生

**長押し機能（全モード共通）：**

- **🎵1**（2秒間長押し）: 音量アップ
- **🎵2**（2秒間長押し）: 音量ダウン
- **🎵3**（2秒間長押し）: 次のモードに切り替え（サウンドテスト → ビートキーパー → マルチトラック再生 → ... の順で循環）

:::tip
追加の設定なしで全ての機能を試すことができます。高度なカスタマイズやファームウェアの再フラッシュについては、**[StateMachine サンプルコード](https://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster/blob/main/examples/StateMachine/StateMachine.ino)**を参照してください。
:::

### BootLoader モード

場合によっては、XIAO MIDI シンセサイザーがシリアルポート経由でプログラムできない状況があります（例：デバイスが認識されない、アップロードが失敗するなど）。このような状況では、ファームウェアを再フラッシュするために **Bootloader（BOOT）モード**に入る必要があります。

#### なぜ BOOT モードに入るのか？

- USB/シリアル経由で正常にプログラムできない場合のデバイス復旧のため
- アップロード失敗やファームウェア破損後のファームウェア再フラッシュのため

#### BOOT モードに入る方法

まず、ミニシンセサイザーの背面カバーを開けて、XIAO ESP32-C3 モジュールの BOOT と RESET ボタンにアクセスします。2つの方法があります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/5.jpg" style={{width:600, height:'auto'}}/></div>

- **方法1：ボタンシーケンス**
  1. デバイスの電源が入った状態で、**BOOT** ボタンを押し続けます（離さないでください）。
  2. **BOOT** を押し続けながら、**RESET** ボタンを一度押します。
  3. **BOOT** ボタンを離します。

- **方法2：電源サイクル**
  1. 電源を切断します（USB-C ケーブルを抜きます）。
  2. **BOOT** ボタンを押し続けます。
  3. **BOOT** を押し続けながら、電源を再接続します（USB-C ケーブルを差し込みます）。
  4. **BOOT** ボタンを離します。

BOOT モードに入ると、デバイスは Arduino IDE やその他のツールを介したファームウェアアップロードの準備が整います。

### リセット

デバイスをリセットするには、XIAO ESP32-C3 モジュールの **RESET** ボタンを押すだけです。デバイスが再起動します。

## Arduino ライブラリ概要

:::tip
Arduino を初めて使用する場合は、[Arduino 入門ガイド](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

XIAO MIDI シンセサイザーは [Seeed_Arduino_MIDIMaster](https://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster) ライブラリによってサポートされており、包括的な MIDI 制御とサウンド合成機能を提供します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="ttps://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 機能

スケッチの開発を始める前に、ライブラリの利用可能な機能を見てみましょう。

`static SAM2695Synth& getInstance()` – SAM2695Synth クラスのシングルトンインスタンスを返します。

- **入力パラメータ**: なし。
- **戻り値**: シングルトン SAM2695Synth オブジェクトへの参照。

`void begin(T& serial, int baud)` – 指定されたシリアルインターフェースとボーレートでシンセサイザーを初期化します。

- **入力パラメータ**:
  - `T& serial`: MIDI 通信に使用するシリアルポートオブジェクト（ハードウェアまたはソフトウェアシリアル）。
  - `int baud`: MIDI 通信のボーレート（標準 MIDI では通常31250）。
- **戻り値**: なし。

`void setInstrument(uint8_t bank, uint8_t channel, uint8_t value)` – 特定の MIDI チャンネルとバンクの楽器（音色）を設定します。

- **入力パラメータ**:
  - `uint8_t bank`: 楽器バンク番号（0–127）。
  - `uint8_t channel`: MIDI チャンネル番号（0–15）。
  - `uint8_t value`: 楽器（プログラム）番号（0–127）。
- **戻り値**: なし。

`void setNoteOn(uint8_t channel, uint8_t pitch, uint8_t velocity)` – 指定されたチャンネルで、与えられたピッチとベロシティでノートオンイベントをトリガーします。

- **入力パラメータ**:
  - `uint8_t channel`: MIDI チャンネル番号（0–15）。
  - `uint8_t pitch`: MIDI ノート番号（0–127）。
  - `uint8_t velocity`: ノートのベロシティ（音量）（0–127）。
- **戻り値**: なし。

`void setNoteOff(uint8_t channel, uint8_t pitch)` – 指定されたチャンネルで、与えられたピッチのノートオフイベントをトリガーします。

- **入力パラメータ**:
  - `uint8_t channel`: MIDI チャンネル番号（0–15）。
  - `uint8_t pitch`: MIDI ノート番号（0–127）。
- **戻り値**: なし。

`void setAllNotesOff(uint8_t channel)` – 指定されたチャンネルで現在再生中の全てのノートをオフにします。

- **入力パラメータ**:
  - `uint8_t channel`: MIDI チャンネル番号（0–15）。
- **戻り値**: なし。

`void playChord(const musicData& chord)` – 提供されたコード構造内の全てのノートに対してノートオンイベントを送信することでコードを演奏します。

- **入力パラメータ**:
  - `const musicData& chord`: コードのチャンネル、音符、ベロシティ、タイミング情報を含む構造体。
- **戻り値**: なし。

`void setPitch(uint8_t pitch)` – 後続の音符イベントのデフォルトピッチ値を設定します。

- **入力パラメータ**:
  - `uint8_t pitch`: デフォルトピッチとして設定するMIDI音符番号（0–127）。
- **戻り値**: なし。

`uint8_t getPitch() const` – 現在のデフォルトピッチ値を取得します。

- **入力パラメータ**: なし。
- **戻り値**: 現在のデフォルトMIDI音符番号（0–127）。

`void setVolume(uint8_t channel, uint8_t level)` – 特定のMIDIチャンネルの音量を設定します。

- **入力パラメータ**:
  - `uint8_t channel`: MIDIチャンネル番号（0–15）。
  - `uint8_t level`: 音量レベル（0–127）。
- **戻り値**: なし。

`void increasePitch()` – デフォルトピッチ値を半音上げます。

- **入力パラメータ**: なし。
- **戻り値**: なし。

`void decreasePitch()` – デフォルトピッチ値を半音下げます。

- **入力パラメータ**: なし。
- **戻り値**: なし。

`void increaseVelocity()` – 音符イベントのデフォルトベロシティ（音量）を上げます。

- **入力パラメータ**: なし。
- **戻り値**: なし。

`void decreaseVelocity()` – 音符イベントのデフォルトベロシティ（音量）を下げます。

- **入力パラメータ**: なし。
- **戻り値**: なし。

`void increaseBpm()` – 現在のテンポ（1分間の拍数）を事前定義されたステップで上げます。

- **入力パラメータ**: なし。
- **戻り値**: なし。

`void decreaseBpm()` – 現在のテンポ（1分間の拍数）を事前定義されたステップで下げます。

- **入力パラメータ**: なし。
- **戻り値**: なし。

`void setBpm(uint8_t bpm)` – テンポ（1分間の拍数）を指定された値に設定します。

- **入力パラメータ**:
  - `uint8_t bpm`: 希望するテンポ（1分間の拍数、通常40–240）。
- **戻り値**: なし。

`uint8_t getBpm() const` – 現在のテンポ（1分間の拍数）を取得します。

- **入力パラメータ**: なし。
- **戻り値**: 現在のBPM値。

### デフォルト変数

以下のコードは、楽器タイプ、音符などのライブラリで事前定義された値の一部を示しており、参照することができます。

<details>

<summary>完全なコードをプレビューするにはここをクリック</summary>

```cpp
#define MIDI_SERIAL_BAUD_RATE           31250   //MIDI serial baud rate
#define USB_SERIAL_BAUD_RATE            115200  //USB  serial baud rate
#define MIDI_COMMAND_ON                 0x90    //MIDI Control Switch - On
#define MIDI_COMMAND_OFF                0x80    //MIDI Control Switch - Off
#define BPM_DEFAULT                     120     //default bpm
#define BPM_MIN                         40      //min bpm
#define BPM_MAX                         240     //max bpm
#define BPM_STEP                        10      //step of bpm
#define MIDI_CMD_CONTROL_CHANGE \
0xB0                              // Control Change (or Channel Mode
                                      // Message)
#define MIDI_CMD_PROGRAM_CHANGE 0xC0  // Program Change

#define VELOCITY_MIN                    0       //min velocity(0~127) 0
#define VELOCITY_MAX                    127     //max velocity(0~127) 127
#define VELOCITY_STEP                   10      //step velocity
#define VELOCITY_DEFAULT                64      //default velocity(0~127) 64
#define BASIC_TIME                      60000   //The number of milliseconds corresponding to 1 minute
#define QUATER_NOTE                     0       //Quarter note
#define EIGHTH_NOTE                     1       //Eighth note
#define SIXTEENTH_NOTE                  2       //sixteenth note
#define BEATS_BAR_DEFAULT               4       //default beat - 4/4 beat
#define BEATES_BAR_2                    2       //2/4 beat
#define BEATS_BAR_3                     3       //3/4 beat
#define BEATS_BAR_4                     4       //4/4 beat
#define NOTE_COUNT_DEFAULT              4       //default note count
#define NOTE_COUNT_MIN                  1       //min note count
#define NOTE_COUNT_MAX                  16      //max note count


/* define channel begin */
#define CHANNEL_0                       0
#define CHANNEL_1                       1
#define CHANNEL_2                       2
#define CHANNEL_3                       3
#define CHANNEL_4                       4
#define CHANNEL_5                       5
#define CHANNEL_6                       6
#define CHANNEL_7                       7
#define CHANNEL_8                       8
#define CHANNEL_9                       9
#define CHANNEL_10                      10
#define CHANNEL_11                      11
#define CHANNEL_12                      12
#define CHANNEL_13                      13
#define CHANNEL_14                      14
#define CHANNEL_15                      15


#define NOTE_B0                         23
#define NOTE_C1                         24
#define NOTE_CS1                        25
#define NOTE_D1                         26
#define NOTE_DS1                        27
#define NOTE_E1                         28
#define NOTE_F1                         29
#define NOTE_FS1                        30
#define NOTE_G1                         31
#define NOTE_GS1                        32
#define NOTE_A1                         33
#define NOTE_AS1                        34
#define NOTE_B1                         35
#define NOTE_C2                         36
#define NOTE_CS2                        37
#define NOTE_D2                         38
#define NOTE_DS2                        39
#define NOTE_E2                         40
#define NOTE_F2                         41
#define NOTE_FS2                        42
#define NOTE_G2                         43
#define NOTE_GS2                        44
#define NOTE_A2                         45
#define NOTE_AS2                        46
#define NOTE_B2                         47
#define NOTE_C3                         48
#define NOTE_CS3                        49
#define NOTE_D3                         50
#define NOTE_DS3                        51
#define NOTE_E3                         52
#define NOTE_F3                         53
#define NOTE_FS3                        54
#define NOTE_G3                         55
#define NOTE_GS3                        56
#define NOTE_A3                         57
#define NOTE_AS3                        58
#define NOTE_B3                         59
#define NOTE_C4                         60
#define NOTE_CS4                        61
#define NOTE_D4                         62
#define NOTE_DS4                        63
#define NOTE_E4                         64
#define NOTE_F4                         65
#define NOTE_FS4                        66
#define NOTE_G4                         67
#define NOTE_GS4                        68
#define NOTE_A4                         69
#define NOTE_AS4                        70
#define NOTE_B4                         71
#define NOTE_C5                         72
#define NOTE_CS5                        73
#define NOTE_D5                         74
#define NOTE_DS5                        75
#define NOTE_E5                         76
#define NOTE_F5                         77
#define NOTE_FS5                        78
#define NOTE_G5                         79
#define NOTE_GS5                        80
#define NOTE_A5                         81
#define NOTE_AS5                        82
#define NOTE_B5                         83
#define NOTE_C6                         84
#define NOTE_CS6                        85
#define NOTE_D6                         86
#define NOTE_DS6                        87
#define NOTE_E6                         88
#define NOTE_F6                         89
#define NOTE_FS6                        90
#define NOTE_G6                         91
#define NOTE_GS6                        92
#define NOTE_A6                         93
#define NOTE_AS6                        94
#define NOTE_B6                         95
#define NOTE_C7                         96
#define NOTE_CS7                        97
#define NOTE_D7                         98
#define NOTE_DS7                        99
#define NOTE_E7                         100
#define NOTE_F7                         101
#define NOTE_FS7                        102
#define NOTE_G7                         103
#define NOTE_GS7                        104
#define NOTE_A7                         105
#define NOTE_AS7                        106
#define NOTE_B7                         107
#define NOTE_C8                         108
#define NOTE_CS8                        109
#define NOTE_D8                         110
#define NOTE_DS8                        111
#define REST                            0


typedef enum {
    GrandPiano_1 = 0,
    BrightPiano_2,
    ElGrdPiano_3,
    HonkyTonkPiano,
    ElPiano1,
    ElPiano2,
    Harpsichord,
    Clavi,
    Celesta,
    Glockenspiel,
    MusicBox,
    Vibraphone,
    Marimba,
    Xylophone,
    TubularBells,
    Santur,
    DrawbarOrgan,
    PercussiveOrgan,
    RockOrgan,
    ChurchOrgan,
    ReedOrgan,
    AccordionFrench,
    Harmonica,
    TangoAccordion,
    AcGuitarNylon,
    AcGuitarSteel,
    AcGuitarJazz,
    AcGuitarClean,
    AcGuitarMuted,
    OverdrivenGuitar,
    DistortionGuitar,
    GuitarHarmonics,
    AcousticBass,
    FingerBass,
    PickedBass,
    FretlessBass,
    SlapBass1,
    SlapBass2,
    SynthBass1,
    SynthBass2,
    Violin,
    Viola,
    Cello,
    Contrabass,
    TremoloStrings,
    PizzicatoStrings,
    OrchestralHarp,
    Timpani,
    StringEnsemble1,
    StringEnsemble2,
    SynthStrings1,
    SynthStrings2,
    ChoirAahs,
    VoiceOohs,
    SynthVoice,
    OrchestraHit,
    Trumpet,
    Trombone,
    Tuba,
    MutedTrumpet,
    FrenchHorn,
    BrassSection,
    SynthBrass1,
    SynthBrass2,
    SopranoSax,
    AltoSax,
    TenorSax,
    BaritoneSax,
    Oboe,
    EnglishHorn,
    Bassoon,
    Clarinet,
    Piccolo,
    Flute,
    Recorder,
    PanFlute,
    BlownBottle,
    Shakuhachi,
    Whistle,
    Ocarina,
    Lead1Square,
    Lead2Sawtooth,
    Lead3Calliope,
    Lead4Chiff,
    Lead5Charang,
    Lead6Voice,
    Lead7Fifths,
    Lead8BassLead,
    Pad1Fantasia,
    Pad2Warm,
    Pad3PolySynth,
    Pad4Choir,
    Pad5Bowed,
    Pad6Metallic,
    Pad7Halo,
    Pad8Sweep,
    FX1Rain,
    FX2Soundtrack,
    FX3Crystal,
    FX4Atmosphere,
    FX5Brightness,
    FX6Goblins,
    FX7Echoes,
    FX8SciFi,
    Sitar,
    Banjo,
    Shamisen,
    Koto,
    Kalimba,
    BagPipe,
    Fiddle,
    Shanai,
    TinkleBell,
    Agogo,
    SteelDrums,
    Woodblock,
    TaikoDrum,
    MelodicTom,
    SynthDrum,
    ReverseCymbal,
    GtFretNoise,
    BreathNoise,
    Seashore,
    BirdTweet,
    TelephRing,
    Helicopter,
    Applause,
    Gunshot,
} unit_synth_instrument_t;
```

</details>

### インストール

ステップ 1. [Seeed_Arduino_MIDIMaster](https://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster) ライブラリを ZIP ファイルとしてダウンロードします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="ttps://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>コードをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

ステップ 2. Arduino IDE で、**Sketch > Include Library > Add .ZIP Library** をクリックし、ダウンロードした ZIP ファイルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## XIAO MIDI シンセサイザーの例

ライブラリがインストールされ、基本的な機能を理解したので、XIAO MIDI シンセサイザーのいくつかの例を実行して、その動作を確認してみましょう。

**ステップ 1.** Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
</div>

**ステップ 2.** 開発ボードモデルを選択し、Arduino IDE に追加します。

- XIAO MIDI シンセサイザーには **XIAO ESP32-C3** が内蔵されています。追加を完了するには、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started/)** を参照してください。

### デモ 1: 基本的な MIDI ノート演奏

このデモでは、XIAO MIDI シンセサイザーを使用して単一のノートを演奏する方法を示します。

#### 必要な材料

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO MIDI シンセサイザー</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-MIDI-Synthesizer-p-6462.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### 参考プログラム

```cpp
#include <Arduino.h>
#include "SAM2695Synth.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if defined(ARDUINO_ARCH_RP2040) || defined(ARDUINO_ARCH_RP2350) ||  defined(ARDUINO_XIAO_RA4M1) 
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(D7, D6); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if  defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6) || defined(CONFIG_IDF_TARGET_ESP32S3)
    #define COM_SERIAL Serial0
    #define SHOW_SERIAL Serial
    SAM2695Synth<HardwareSerial> synth = SAM2695Synth<HardwareSerial>::getInstance();
#endif

#ifdef SEEED_XIAO_M0
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#elif defined(ARDUINO_SAMD_VARIANT_COMPLIANCE)
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL SerialUSB
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif

#if defined(NRF52840_XXAA)
    #ifdef USE_TINYUSB
    #include <Adafruit_TinyUSB.h>
    #endif
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial

    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif


void setup()
{
  //serial init to usb
  SHOW_SERIAL.begin(USB_SERIAL_BAUD_RATE);
  // Synth initialization. Since a hardware serial port is used here, the software serial port is commented out.
  synth.begin(COM_SERIAL, MIDI_SERIAL_BAUD_RATE);
  synth.setInstrument(0,CHANNEL_0,unit_synth_instrument_t::GrandPiano_1);
  delay(1000);
}

void loop()
{
  synth.setNoteOn(CHANNEL_0,NOTE_E4,VELOCITY_DEFAULT);
  delay(1000);
  synth.setNoteOff(CHANNEL_0,NOTE_E4);
  delay(1000);
}
```

> このコードは、内蔵シンセサイザーで E4 ノートを演奏し、1 秒ごとにオン・オフを切り替えます。必要に応じて、ノート、楽器、またはタイミングを変更できます。

#### プログラムの注釈

このコードは、SAM2695 シンセサイザーチップをベースとしたコンパクトなオーディオ合成ソリューションである XIAO MIDI シンセサイザーの中核機能を表しています。ソフトウェア実装では、シンセサイザーがさまざまなシリアル通信方法を通じて、さまざまな XIAO プラットフォームバリアントとどのようにインターフェースするかを示しています。

XIAO MIDI シンセサイザーは、条件付きコンパイルを通じて XIAO エコシステム内の複数のマイクロコントローラープラットフォームをサポートします：

- **AVR ベースボード**: シンセサイザーチップとの通信に SoftwareSerial を利用
- **RP2040/RP2350 および XIAO RA4M1**: 指定されたピン（D7、D6）で SoftwareSerial を実装
- **ESP32 バリアント**: Serial0 を介してネイティブハードウェアシリアル機能を活用
- **SAMD ベースボード**（XIAO M0 を含む）: ハードウェア UART インターフェースを使用
- **nRF52840**: オプションの TinyUSB サポートで UART 通信を実装

この汎用的なアプローチにより、シンセサイザーモジュールは XIAO 製品ファミリー全体で一貫して動作することが保証されます。

シンセサイザーの実装では、2 つの通信経路を確立します：

```cpp
  SHOW_SERIAL.begin(USB_SERIAL_BAUD_RATE);
  synth.begin(COM_SERIAL, MIDI_SERIAL_BAUD_RATE);
```

- MIDI コマンド用の SAM2695 チップへの専用シリアル接続
- 監視と制御のための別のデバッグ/ユーザーインターフェースシリアル接続

起動時、XIAO MIDI シンセサイザーは：

1. 適切なボーレートでシリアル通信を確立
2. SAM2695 シンセサイザーエンジンを初期化
3. チャンネル 0 でデフォルト楽器（グランドピアノ）を設定

```cpp
  synth.setInstrument(0,CHANNEL_0,unit_synth_instrument_t::GrandPiano_1);
```

4. タイミング遅延で安定化を許可

デモンストレーションループは、次の方法で基本的な音生成機能を示します：

```cpp
void loop()
{
  synth.setNoteOn(CHANNEL_0,NOTE_E4,VELOCITY_DEFAULT);
  delay(1000);
  synth.setNoteOff(CHANNEL_0,NOTE_E4);
  delay(1000);
}
```

1. 標準ベロシティでノート E4 をトリガー
2. 1 秒間ノートを維持
3. ノートをリリース
4. 次のサイクル前に一時停止

この実装は、教育目的、音楽プロトタイピング、または組み込みオーディオプロジェクトのいずれであっても、XIAO MIDI シンセサイザープラットフォームを使用してより複雑な音楽アプリケーションを構築できる基盤を表しています。

### デモ 2: ボタン制御付きリズムシーケンサー

このデモでは、XIAO MIDI シンセサイザーの物理ボタンを使用してシンプルなリズムシーケンサーを制御する方法を示します。ボタンを使用してリズムの開始/停止、およびリアルタイムでのテンポ調整ができます。

#### 必要な材料

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO MIDI シンセサイザー</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-MIDI-Synthesizer-p-6462.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### 参考プログラム

```cpp
#include <Arduino.h>
#include "SAM2695Synth.h"
#include "Button.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if defined(ARDUINO_ARCH_RP2040) || defined(ARDUINO_ARCH_RP2350) ||  defined(ARDUINO_XIAO_RA4M1) 
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(D7, D6); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if  defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6) || defined(CONFIG_IDF_TARGET_ESP32S3) 
    #define COM_SERIAL Serial0
    #define SHOW_SERIAL Serial
    SAM2695Synth<HardwareSerial> synth = SAM2695Synth<HardwareSerial>::getInstance();
#endif

#ifdef SEEED_XIAO_M0
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#elif defined(ARDUINO_SAMD_VARIANT_COMPLIANCE)
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL SerialUSB
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif


#if defined(NRF52840_XXAA)
    #ifdef USE_TINYUSB
    #include <Adafruit_TinyUSB.h>
    #endif
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial

    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif

#if defined(CONFIG_IDF_TARGET_ESP32S3)
    #define BUTTON_A_PIN 4
    #define BUTTON_B_PIN 3
    #define BUTTON_C_PIN 2 
    #define BUTTON_D_PIN 1 
#elif defined(CONFIG_IDF_TARGET_ESP32C3)
    #define BUTTON_A_PIN 5
    #define BUTTON_B_PIN 4
    #define BUTTON_C_PIN 3 
    #define BUTTON_D_PIN 2 
#elif defined(CONFIG_IDF_TARGET_ESP32C6)
    #define BUTTON_A_PIN 21
    #define BUTTON_B_PIN 2
    #define BUTTON_C_PIN 1 
    #define BUTTON_D_PIN 0
#else //You need to refer to the corresponding manual...
    #define BUTTON_A_PIN 0 //You need to refer to the corresponding manual...
    #define BUTTON_B_PIN 1 //You need to refer to the corresponding manual...
    #define BUTTON_C_PIN 2 //You need to refer to the corresponding manual...
    #define BUTTON_D_PIN 3 //You need to refer to the corresponding manual...
#endif

//Define the structure needed for the button
BtnState btnA = {HIGH, HIGH, 0, 0, false};
BtnState btnB = {HIGH, HIGH, 0, 0, false};
BtnState btnC = {HIGH, HIGH, 0, 0, false};


bool music_on_off_flag = false;
int bpm = BPM_DEFAULT;                            // init BPM，BPM_DEFAULT = 120
int beatsPerBar = BEATS_BAR_DEFAULT;              // Beats per measure, which can be 2, 3, or 4
int noteType = QUATER_NOTE;                       // Note type selection: 0 (quarter note), 1 (eighth note), 2 (sixteenth note)
int beatCount = 0;                                // Beat counter
unsigned long previousMillis = 0;                 // Record the time of the last MIDI signal sent


void setup()
{
    //serial init to usb
    SHOW_SERIAL.begin(USB_SERIAL_BAUD_RATE);
    // Synth initialization. Since a hardware serial port is used here, the software serial port is commented out.
    synth.begin(COM_SERIAL, MIDI_SERIAL_BAUD_RATE);
    synth.setInstrument(0,CHANNEL_0,unit_synth_instrument_t::GrandPiano_1);
    initButtons(BUTTON_A_PIN);
    initButtons(BUTTON_B_PIN);
    initButtons(BUTTON_C_PIN);

    delay(1000);
}

void loop()
{
    detectButtonEvents(BUTTON_A_PIN, btnA, shortPressFlag_A, longPressFlag_A, releaseFlag_A);
    detectButtonEvents(BUTTON_B_PIN, btnB, shortPressFlag_B, longPressFlag_B, releaseFlag_B);
    detectButtonEvents(BUTTON_C_PIN, btnC, shortPressFlag_C, longPressFlag_C, releaseFlag_C);
    if(shortPressFlag_A){
        shortPressFlag_A = false;
        music_on_off_flag = !music_on_off_flag;
    }
    if(shortPressFlag_B){
        shortPressFlag_B = false;
        synth.increaseBpm();
    }
    if(shortPressFlag_C){
        shortPressFlag_C = false;
        synth.decreaseBpm();
    }
    play();
}

void play()
{
    // Calculate the interval between each beat (quarter note) in milliseconds
    // 60,000 milliseconds equals 1 minute
    // Adjust interval based on note type
    unsigned long interval = (BASIC_TIME / synth.getBpm()) / (noteType + 1); 

    if(music_on_off_flag)
    {
        unsigned long currentMillis = millis();
        if (currentMillis - previousMillis >= interval)
        {
            previousMillis = currentMillis;
            if (beatCount == 0)
                synth.setNoteOn(CHANNEL_9, NOTE_D2, VELOCITY_DEFAULT);
            else
                synth.setNoteOn(CHANNEL_9, NOTE_C2, VELOCITY_DEFAULT);

            // Increment beat count
            beatCount++;

            // Every four beats, indicating the end of a measure
            if (beatCount >= beatsPerBar)
            {
                // Reset count
                beatCount = 0;
            }
        }
    }
}
```

> このコードは、シンプルなリズムシーケンサーのデモンストレーションです。ボタンAでリズムのオン/オフを切り替え、ボタンBでテンポ（BPM）を上げ、ボタンCでテンポを下げます。シーケンサーはチャンネル9でMIDIノートを使用して基本的なドラムパターンを演奏します。この例を拡張して、より複雑なリズムや追加のボタン機能を追加することができます。

#### プログラム解説

このプログラムは、物理ボタンを通じたリアルタイムユーザーインタラクションを導入することで、基本的なMIDIノートデモを拡張しています。コードは3つのボタンを使用します：

- **ボタンA**: リズムシーケンスの開始/停止
- **ボタンB**: テンポ（BPM）の増加
- **ボタンC**: テンポ（BPM）の減少

`play()`関数は、現在のBPMとノートタイプに基づいてビート間の間隔を計算し、繰り返しパターンでドラムサウンド（チャンネル9のMIDIノートD2とC2を使用）をトリガーします。ビートカウントは各小節ごとにリセットされ、シンプルなメトロノームやドラムマシンの効果を作り出します。

この例では以下の方法を実演しています：

- リアルタイム制御のためのボタン入力の統合
- テンポと再生状態の動的調整
- プログラマブルリズムジェネレーターとしてのXIAO MIDIシンセサイザーの使用

このデモは、より多くのボタンの追加、異なるドラムサウンドのサポート、またはより高度なシーケンサーロジックの実装によってさらに強化することができます。

### デモ3: ボタン制御によるマルチトラックコード再生

このデモでは、XIAO MIDIシンセサイザーを使用してマルチトラックコードを演奏する方法を示します。各コードはボタンによってトリガーされます。2つの物理ボタンを使用して、2つの異なるコードパターンを独立して開始/停止できます。

#### 必要な材料

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO MIDIシンセサイザー</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-MIDI-Synthesizer-p-6462.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### 参考プログラム

```cpp
#include <Arduino.h>
#include "SAM2695Synth.h"
#include "Button.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if defined(ARDUINO_ARCH_RP2040) || defined(ARDUINO_ARCH_RP2350) ||  defined(ARDUINO_XIAO_RA4M1) 
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(D7, D6); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if  defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6) || defined(CONFIG_IDF_TARGET_ESP32S3)
    #define COM_SERIAL Serial0
    #define SHOW_SERIAL Serial
    SAM2695Synth<HardwareSerial> synth = SAM2695Synth<HardwareSerial>::getInstance();
#endif

#ifdef SEEED_XIAO_M0
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#elif defined(ARDUINO_SAMD_VARIANT_COMPLIANCE)
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL SerialUSB
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif

#if defined(NRF52840_XXAA)
    #ifdef USE_TINYUSB
    #include <Adafruit_TinyUSB.h>
    #endif
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial

    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif

#if defined(CONFIG_IDF_TARGET_ESP32S3)
    #define BUTTON_A_PIN 4
    #define BUTTON_B_PIN 3
    #define BUTTON_C_PIN 2 
    #define BUTTON_D_PIN 1 
#elif defined(CONFIG_IDF_TARGET_ESP32C3)
    #define BUTTON_A_PIN 5
    #define BUTTON_B_PIN 4
    #define BUTTON_C_PIN 3 
    #define BUTTON_D_PIN 2 
#elif defined(CONFIG_IDF_TARGET_ESP32C6)
    #define BUTTON_A_PIN 21
    #define BUTTON_B_PIN 2
    #define BUTTON_C_PIN 1 
    #define BUTTON_D_PIN 0
#else //You need to refer to the corresponding manual...
    #define BUTTON_A_PIN 0 //You need to refer to the corresponding manual...
    #define BUTTON_B_PIN 1 //You need to refer to the corresponding manual...
    #define BUTTON_C_PIN 2 //You need to refer to the corresponding manual...
    #define BUTTON_D_PIN 3 //You need to refer to the corresponding manual...
#endif

//Define the structure needed for the button
BtnState btnA = {HIGH, HIGH, 0, 0, false};
BtnState btnB = {HIGH, HIGH, 0, 0, false};

//Example of multi-track chord data definition
// This structure controls playback on channel 9, with only two notes being played. 
// The sound is set to the default sound, and the duration can be adjusted as needed.
const musicData chordTwoNotes =
{
    CHANNEL_1,                          //play on channel 9
    {
        {NOTE_C2, true},                //NOTE_C2 on
        {NOTE_FS2, true},               //NOTE_FS2 on
        {NOTE_E6, false},               //NOTE_E6 off
        {NOTE_CS5, false},              //NOTE_CS5 off
    },
    VELOCITY_DEFAULT ,                  //default velocity(64)
    0,                                  // index Not used here
    BPM_DEFAULT*8,                      //interval time
};

const musicData chordFourNotes =
{
    CHANNEL_2,                          // play on channel 0
    {
        {NOTE_F2, true},                // NOTE_F2 on
        {NOTE_B2, true},                // NOTE_B2 on
        {NOTE_E6, true},                // NOTE_E6 on
        {NOTE_CS5, true},               // NOTE_CS5 on
    },
    VELOCITY_DEFAULT ,                  // default velocity(64)
    0,                                  // index Not used here
    BPM_DEFAULT*4,                      // interval time
};

bool chordTwoNotesFlag = false;         // on or off chord_twoNotes
bool chordFourNotesFlag = false;        // on or off chord_fourNotes
unsigned long preMillisTwoNotes = 0;    // Record the time of the last MIDI signal sent on chord_twoNotes
unsigned long preMillisFourNotes= 0;    // Record the time of the last MIDI signal sent on const musicData chord_fourNotes =


void setup()
{
    //serial init to usb
    SHOW_SERIAL.begin(USB_SERIAL_BAUD_RATE);
    // Synth initialization. Since a hardware serial port is used here, the software serial port is commented out.
    synth.begin(COM_SERIAL, MIDI_SERIAL_BAUD_RATE);
    synth.setInstrument(0,CHANNEL_0,unit_synth_instrument_t::GrandPiano_1);
    // Initialize the buttons you are using.
    initButtons(BUTTON_A_PIN);
    initButtons(BUTTON_B_PIN);

    delay(1000);
}

void loop()
{
    detectButtonEvents(BUTTON_A_PIN, btnA, shortPressFlag_A, longPressFlag_A, releaseFlag_A);
    detectButtonEvents(BUTTON_B_PIN, btnB, shortPressFlag_B, longPressFlag_B, releaseFlag_B);
    if(shortPressFlag_A)
    {
        shortPressFlag_A = false;
        chordTwoNotesFlag = !chordTwoNotesFlag;
    }
    if(shortPressFlag_B)
    {
        shortPressFlag_B = false;
        chordFourNotesFlag = !chordFourNotesFlag;
    }
    play();
}

void play()
{
    unsigned long currentMillis = millis();
    if(chordTwoNotesFlag)
    {
        if (currentMillis - preMillisTwoNotes >= chordTwoNotes.delay)
        {
            preMillisTwoNotes = currentMillis;
            synth.playChord(chordTwoNotes);
        }
    }

    if(chordFourNotesFlag)
    {
        if (currentMillis - preMillisFourNotes >= chordFourNotes.delay)
        {
            preMillisFourNotes = currentMillis;
            synth.playChord(chordFourNotes);
        }
    }
}
```

> このコードは、2つのボタンを使用して2つの異なるマルチノートコードをトリガーする方法を実演しています。ボタンAは2ノートコードの再生を切り替え、ボタンBは4ノートコードの再生を切り替えます。各コードは異なるMIDIチャンネルで独自のタイミングで演奏されます。

#### プログラム解説

このプログラムは、リアルタイムボタン制御によるマルチトラックコード再生を実演しています。コードは2つのコードパターン（`chordTwoNotes`と`chordFourNotes`）を定義し、それぞれが独自のMIDIチャンネル、ノート、タイミングを持ちます。2つのボタンが使用されます：

- **ボタンA**: 2ノートコードシーケンスの開始/停止
- **ボタンB**: 4ノートコードシーケンスの開始/停止

`play()`関数は各コードのタイミングをチェックし、対応するフラグが有効な場合に再生をトリガーします。これにより、異なるコードパターンの独立した重複再生が可能になり、シンプルなマルチトラックシーケンサーをシミュレートします。

この例では以下の方法を実演しています：

- カスタムコード構造の定義と演奏
- 独立した音楽制御のための複数ボタンの使用
- XIAO MIDIシンセサイザーによるより複雑で層状の音楽パフォーマンスの構築

このデモは、より多くのコードパターンの追加、追加ボタンのサポート、またはより高度な音楽効果のための再生同期によって拡張することができます。

### デモ4: 完全なメロディーシーケンスの演奏

このデモでは、XIAO MIDIシンセサイザーを使用して、ノート、持続時間、遅延データを配列に格納することで完全なメロディーシーケンス（楽曲など）を演奏する方法を示します。この例では、内蔵のバイオリン楽器を使用してプリプログラムされたメロディーを演奏する方法を実演しています。

#### 必要な材料

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO MIDIシンセサイザー</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-MIDI-Synthesizer-p-6462.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

#### 参考プログラム

```cpp
#include <SAM2695Synth.h>

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if defined(ARDUINO_ARCH_RP2040) || defined(ARDUINO_ARCH_RP2350) ||  defined(ARDUINO_XIAO_RA4M1) 
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(D7, D6); // RX, TX
    #define COM_SERIAL SSerial
    #define SHOW_SERIAL Serial
    SAM2695Synth<SoftwareSerial> synth = SAM2695Synth<SoftwareSerial>::getInstance();
#endif

#if  defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6) || defined(CONFIG_IDF_TARGET_ESP32S3) 
    #define COM_SERIAL Serial0
    #define SHOW_SERIAL Serial
    SAM2695Synth<HardwareSerial> synth = SAM2695Synth<HardwareSerial>::getInstance();
#endif

#ifdef SEEED_XIAO_M0
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#elif defined(ARDUINO_SAMD_VARIANT_COMPLIANCE)
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL SerialUSB
    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif


#if defined(NRF52840_XXAA)
    #ifdef USE_TINYUSB
    #include <Adafruit_TinyUSB.h>
    #endif
    #define COM_SERIAL Serial1
    #define SHOW_SERIAL Serial

    SAM2695Synth<Uart> synth = SAM2695Synth<Uart>::getInstance();
#endif

// Can be moved in header file i.e notes.h
#define ARRAY_LEN(array) (sizeof(array) / sizeof(array[0]))

const int midi1[453][3] = {
 {NOTE_D4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_C4, 600, 0},
 {NOTE_D4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 1500, 0},
 {NOTE_D4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_C4, 600, 0},
 {NOTE_D4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 2000, 500},


 {NOTE_F4, 300, 0},
 {NOTE_E4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_A3, 300, 0},
 {NOTE_D4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1200, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 2000, 500},


 {NOTE_C4, 1200, 0},
 {NOTE_E4, 400, 0},
 {NOTE_F4, 2000, 500},
 {NOTE_C4, 1500, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 1600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_AS4, 600, 0},
 {NOTE_A4, 1200, 0},
 {NOTE_G4, 500, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 1000, 500},
 {NOTE_F4, 400, 0},
 {NOTE_E4, 300, 0},
 {NOTE_F4, 3000, 0},
 {NOTE_C4, 1200, 0},
 {NOTE_E4, 400, 0},
 {NOTE_F4, 2000, 500},
 {NOTE_C4, 1500, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 1600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_AS4, 600, 0},
 {NOTE_A4, 1200, 0},
 {NOTE_G4, 500, 0},
 {NOTE_F4, 800, 0},
 {NOTE_G4, 800, 0},
 {NOTE_AS4, 400, 0},
 {NOTE_A4, 300, 0},
 {NOTE_F4, 3000, 0},

 {NOTE_AS4, 1200, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 2000, 500},
 {NOTE_AS4, 1200, 0},
 {NOTE_F4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 2000, 500},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_C4, 600, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 1100, 500},
 {NOTE_F4, 300, 0},
 {NOTE_AS4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 1800, 500},
 {NOTE_C4, 300, 0},
 {NOTE_E4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 1000, 500},


 {NOTE_G4, 400, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 700, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_A4, 1500, 500},


 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1200, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 1200, 500},


 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_B4, 300, 57},
 {NOTE_A4, 1000, 0},

 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1000, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 1000, 0},


 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_B4, 300, 26},
 {NOTE_A4, 1200, 0},


 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1000, 0},
 {NOTE_E4, 1000, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},


 {NOTE_C4, 800, 0},
 {NOTE_C4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_DS4, 300, 0},
 {NOTE_D4, 300, 0},
 {NOTE_C4, 600, 0},
 {NOTE_AS3, 600, 0},
 {NOTE_C4, 2000, 0},
 {NOTE_C4, 800, 0},
 {NOTE_C4, 800, 0},
 {NOTE_DS4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_GS4, 600, 0},
 {NOTE_G4, 1200, 0},
 {NOTE_C4, 800, 0},
 {NOTE_C4, 800, 0},
 {NOTE_DS4, 300, 0},
 {NOTE_D4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_AS3, 600, 0},
 {NOTE_C4, 1200, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_GS4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_DS4, 600, 1200},


 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 500, 100},
 {NOTE_G4, 500, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 500, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 500, 100},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_B4, 300, 57},
 {NOTE_A4, 1000, 0},


 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1000, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 1500, 0},


 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 10},
 {NOTE_B4, 300, 10},
 {NOTE_A4, 1500, 0},
 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1200, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 1500, 0},


 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_B4, 300, 57},
 {NOTE_A4, 1200, 0},
 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1200, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 2000, 0},


 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_G4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_A4, 1200, 0},
 {NOTE_G3, 300, 0},
 {NOTE_C4, 300, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_G4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_D4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 300, 0},
 {NOTE_B4, 300, 0},
 {NOTE_G4, 300, 0},
 {NOTE_A4, 600, 0},
 {NOTE_F4, 600, 0},
 {NOTE_E4, 600, 0},
 {NOTE_D4, 1200, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 300, 0},
 {NOTE_E4, 600, 0},
 {NOTE_F4, 1500, 0},
};

void playMidi(const int notes[][3], size_t len) {
    for (int i = 0; i < len; i++) {
        // Play note
        synth.setNoteOn(CHANNEL_0, notes[i][0], 110);
        delay(notes[i][1]);
        // Stop note
        synth.setNoteOff(CHANNEL_0, notes[i][0]);
        delay(notes[i][2]);
    }
}

void setup() {
    // Initialize USB serial port
    SHOW_SERIAL.begin(USB_SERIAL_BAUD_RATE);
    // Initialize MIDI synthesizer
    synth.begin(COM_SERIAL, MIDI_SERIAL_BAUD_RATE);
    // Set instrument sound to Violin
    synth.setInstrument(0, CHANNEL_0, unit_synth_instrument_t::Violin);
    delay(1000);

    // Play MIDI notes
    playMidi(midi1, ARRAY_LEN(midi1));
}

void loop() {
    // Main loop is empty because the music only plays once
}
```

> このコードは、音符、持続時間、遅延の大きな配列を反復処理することで、完全なメロディーシーケンスを再生する方法を示しています。メロディーは電源投入またはリセット後に一度再生されます。配列を変更して異なる曲を再生したり、より複雑なアレンジを追加したりできます。

#### プログラムの注釈

このプログラムは以下の方法を示しています：

- 音符、持続時間、遅延値の配列として完全なメロディーを保存する
- ヘルパー関数（`playMidi`）を使用してメロディーを反復処理し、各音符を順番に再生する
- 再生用の特定の楽器（バイオリン）を選択する
- 起動時に自動的に曲を再生する

このデモは以下の方法で拡張できます：

- 楽器や音符データを変更して異なる曲を再生する
- 再生の開始/停止や繰り返しのためのボタンコントロールを追加する
- より高度な音楽効果のためのマルチトラックやポリフォニック再生を実装する

:::tip
MIDIファイルをArduinoコードに変換したい方は、[Midi2ArduinoTone](https://tawsiftorabi.github.io/Midi2ArduinoTone/)などのツールを試すことができます。ただし、このようなツールで生成される音符値は、異なる音符マッピングを使用するため、XIAO MIDI Synthesizerで動作するように変更が必要な場合があることにご注意ください。これらのツールは、MIDIファイルをこのシンセサイザー用に適応できる形式に変換するための出発点として役立ちます。

:::

## リソース

- **[PDF]** [XIAO MIDI Synthesizer SCH](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/202004281_XIAO_MIDI_Synthesizer_v1.0_SCH&PDF_250421.pdf)
- **[ZIP]** [XIAO MIDI Synthesizer SCH&PCB](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/202004281_XIAO_MIDI_Synthesizer_v1.0_SCH&PCB_050421.zip)
- **[GitHub]** [Seeed_Arduino_MIDIMaster Library](https://github.com/Seeed-Studio/Seeed_Arduino_MIDIMaster)

## トラブルシューティング

### Q1: MIDIファイルをXIAO MIDI Synthesizer用のArduinoコードに変換するにはどうすればよいですか？

MIDIファイルをXIAO MIDI Synthesizerで使用できるArduinoコードに変換するには、以下の手順に従ってください：

1. MIDIファイルを取得する

    以下のウェブサイトから無料のMIDIファイルをダウンロードできます：
    - [The Wild West MIDIs](https://thewildwestmidis.github.io/?search=animals)
    - [LibreScore MIDI Library](https://github.com/LibreScore/app-librescore?tab=readme-ov-file#installation)

2. MIDIファイルをテキストに変換する

    オープンソースツール[midicomp](https://github.com/markc/midicomp)を使用して、MIDIファイルを人間が読める形式のテキストに変換します。

3. MIDIテキストを再生可能なコードに変換する

    `midicomp`を使用してMIDIファイルをテキスト形式に変換した後、このテキストをXIAO MIDI Synthesizerが再生できるC/C++配列に処理する必要があります。Seeedはこの変換を自動化するPythonスクリプトを提供しています：

    - **高速リズム、シングルトラック（各音符の開始を間隔とする）：**  
    [change_fast.py](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/change_fast.py)
    - **低速リズム、シングルトラック（各音符の終了を間隔とする）：**  
    [change_shuqing.py](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/change_shuqing.py)
    - **マルチトラック処理：**  
    [change_mutich.py](https://files.seeedstudio.com/wiki/xiao_midi_synthesizer/res/change_mutich.py)

    **使用例：**

    1. MIDIテキストファイル（例：`1.txt`）をスクリプトと同じディレクトリに配置します。
    2. ターミナルでスクリプトを実行します：

    ```sh
    python change_fast.py
    ```

    これにより、音符配列を含むヘッダーファイル（例：`track_from_miditext.h`）が生成されます。

    3. 生成された配列をArduinoスケッチにコピーし、メロディーデータを置き換えます。

    :::tip
    - スクリプトはMIDI音符番号をXIAO MIDI Synthesizerの音符定義に自動的にマッピングします。
    - カスタムアレンジやメモリ制約に合わせて、スクリプトや生成された配列を調整できます。
    :::

    4. 生成されたコードを統合する

    - 生成された`.h`ファイルを開き、`musicData`配列をコピーします。
    - それをArduinoプロジェクトに貼り付け、既存のメロディー配列を置き換えます。
    - 必要に応じて、新しい配列構造に合わせて再生ロジックを更新します。

### Q2: XIAO MIDI Synthesizerにプログラムをアップロードできない場合があるのはなぜですか？

ESP32-C3のプログラムはUART経由でフラッシュされるため、時折プログラムがクラッシュすると、XIAOへのプログラムアップロードを妨げるエラーが発生する場合があります。また、XIAOとMIDIボードがUART経由で直接通信するため、従来のブート方法がXIAOで直接動作しない場合があります。以下の方法を試してください：

1. XIAO MIDI Synthesizerの電源を入れ、XIAO ESP32-C3開発ボードを取り外します。
2. USBケーブルを取り外します。
3. XIAO ESP32-C3ボードのBボタンを離さずに押し続けます。
4. USBケーブルを再接続し、その後Bボタンを離します。
5. プログラムをアップロードします。

この手順により、プログラムのアップロードが成功するはずです。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
