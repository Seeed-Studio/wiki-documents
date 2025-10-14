---
description: AI Assistantの使用開始。
title: AI Assistantの使用開始
image: https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Top_Pic.webp
slug: /ja/ai_assistant_getting_started
# sidebar_position: 2
last_update:
  date: 08/07/2025
  author: Robin(STMicroelectronics),Atom
---

# AI Assistantの使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/1-114993645-Al-Assistant-v1.1.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://www.seeedstudio.com/AI-Assistant-p-6510.html">
   <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
 </a>
</div>

## はじめに

AI Assistant開発キットは、Seeed StudioとSTMicroelectronicsが共同で開発したものです。これは最先端のエッジAIアプリケーション向けに設計された開発プラットフォームです。統合されたST Neural-ART AIアクセラレータを搭載した高性能STM32N657 MCUを中心に、強力なAI計算能力と低消費電力、小型フォームファクタ、コスト効率性という従来のMCUの利点を完璧に融合しています。このキットには、オンボードグローバルシャッターカメラ、AI処理ユニット付きIMUセンサー、高解像度タッチスクリーン、Wi-Fiモジュールが搭載されており、次世代スマートビジョンおよび音声インタラクション製品の開発のための完全なハードウェアおよびソフトウェアソリューションを提供します。

### 特徴

- **特徴1：フラッグシップAIマイクロコントローラー**
 高性能Arm® Cortex®-M55コアと統合されたST Neural-ART NPUを搭載したST STM32N657により駆動され、効率的なAIモデルアクセラレーションのために最大600 GOPSを提供します。
- **特徴2：プロフェッショナルグレードビジョンセンサー**
ST VD55G1グローバルシャッターカメラを搭載し、高速移動物体の鮮明で歪みのない画像を提供し、高精度コンピュータビジョンタスクに重要です。
- **特徴3：ISPUによるインテリジェントセンシング**
内蔵インテリジェントセンサー処理ユニット（ISPU）を備えたLSM6DSO16IS IMUを搭載し、メインプロセッサーを起動することなく超低消費電力でジェスチャーと活動認識を可能にします。
- **特徴4：豊富なインタラクティブ周辺機器**
4.0インチ480x480静電容量式タッチディスプレイ、高忠実度デジタルマイクロフォン、オーディオコーデックを統合し、インタラクティブAIアプリケーションの開発のための完全なハードウェア基盤をすぐに提供します。
- **特徴5：包括的な接続性**
シームレスなIoT接続のためのオンボードWi-Fiモジュール、USB-Cポート、複数の拡張ヘッダーを含み、最大限の開発柔軟性を提供します。

## ハードウェア概要

すべてが始まる前に、製品の基本的なパラメータを把握することが非常に重要です。以下の表は**AI Assistant**の特性に関する情報を提供します。

| カテゴリ             | 機能               | 仕様                                                                 |
|----------------------|------------------------|-------------------------------------------------------------------------------|
| **コアシステム**      | メインコントローラー        | STMicroelectronics STM32N657X0H3Q                                             |
|                      | コアアーキテクチャ      | Arm® Cortex®-M55                                             |
|                      | ニューラル処理ユニット | ST Neural-ART、600 GOPS                                                       |
|                      | 外部メモリ        | 128MB NOR Flash、32MB DRAM                                                    |
| **センサー**          | カメラ                 | STMicroelectronics VD55G1（800x700、グローバルシャッター）                           |
|                      | IMU                    | STMicroelectronics LSM6DSO16IS（内蔵ISPU付き6軸）                    |
|                      | 磁力計           | STMicroelectronics LIS2MDL                                                    |
| **周辺機器**      | ディスプレイ                | 4.0" TFT LCD（480x480）、静電容量式タッチ                                      |
|                      | オーディオ                  | Cirrus Logic WM8994コーデック & ST MP34DT06JTRデジタルマイク                        |
| **接続性**     | ワイヤレス               | MXCHIP EMW3080 Wi-Fiモジュール                                                   |
|                      | インターフェース             | USB-C x1、SWDポート x1、マイク拡張 x1、RPiカメラインターフェース x1              |
| **機械的・電源**| 寸法（ケーシング）    | 130mm x 90mm                                                                  |
|                      | 電源           | USB-C経由5Vまたはリチウムバッテリーポート                                          |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Hardware_Overview.png" style={{width:800, height:'auto'}}/></div>

### ボード上層概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Top.png" style={{width:800, height:'auto'}}/></div>

### ボード下層概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Bottom.png" style={{width:800, height:'auto'}}/></div>

***

## AI Assistantリファレンスアプリケーションの開始

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/stm32-hotspot/STM32N6-AI-Assistant-People-Detection" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

開始するには、**GitHubリンクからリポジトリをクローンしてください**`git clone https://github.com/stm32-hotspot/STM32N6-AI-Assistant-People-Detection.git`をお好みのローカルフォルダに。

AI Assistantボード上でオブジェクト検出モデルの展開を可能にするコンピュータビジョンアプリケーション。これはSTM32N6570-DKボード用のn6-ai-people-detection-v1.0.0アプリケーションパッケージの公式リリースに基づいています。

このアプリケーションは人物検出モデル「TinyYOLOv2」で事前構築されています。

このセクションではアプリケーションの概要を提供します。追加のドキュメントは[アプリケーションの追加ドキュメント](#アプリケーションの追加ドキュメント)で利用できます。

### この例で実証される機能

- マルチスレッドアプリケーションフロー（Azure RTOS ThreadX）
- NPUアクセラレーション量子化AIモデル推論
- デュアルDCMIPPパイプ
- DCMIPPクロップ、間引き、ダウンスケール
- LTDCデュアルレイヤー実装
- DCMIPP ISP使用
- 開発モード
- 外部Flashからのブート

### ハードウェアサポート

- AI Assistantキット

- 3つのカメラがサポートされています：
  - MB1854B IMX335

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/3-114993645-Al-Assistant-v1.1.jpg" style={{width:800, height:'auto'}}/></div>
VD55G1カメラ付きAI Assistantキット。

### ツールバージョン

- STM32CubeIDE（**STM32CubeIDE 1.18.0**）
- STM32CubeProgrammer（**v2.18.0**）
- [STEdgeAI](https://www.st.com/en/development-tools/stedgeai-core.html)（**v2.1.0**）

### ST-Link接続

**右側コネクタ**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC1.PNG" style={{width:1000, height:'auto'}}/></div>

**左側コネクタ**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC2.PNG" style={{width:1000, height:'auto'}}/></div>

**デバッガー接続**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC3.PNG" style={{width:1000, height:'auto'}}/></div>

**ヘッダーピン配置**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC4.PNG" style={{width:1000, height:'auto'}}/></div>

### ブートモード

STM32N6には内部フラッシュがありません。再起動後にファームウェアを保持するには、外部フラッシュにプログラムする必要があります。
または、SRAM（開発モード）から直接ファームウェアをロードできます。ただし、開発モードでは、ボードの電源を切ると、プログラムは失われます。

**ブートモード：**

- 開発モード：RAMのデバッグセッションからファームウェアをロード（ブートスイッチを右に）
- フラッシュからブート：外部フラッシュにファームウェアをプログラム（ブートスイッチを左に）

### 事前構築バイナリを使用したクイックスタート

#### 事前構築バイナリのフラッシュ

以下の手順を使用して、3つのバイナリをボードの外部フラッシュにプログラムする必要があります：

  1. BOOTスイッチを上の位置に切り替えます。
  2. `Binary/ai_assistant_fsbl.hex`をプログラムします（一度だけ実行）（第一段階ブートローダー）。
  3. `Binary/network_data.hex`をプログラムします（ネットワークのパラメータ；ネットワークが変更された場合のみ変更）。
  4. `Binary/AI_Assistant_Ref_Project.hex`をプログラムします（ファームウェアアプリケーション）。
  5. BOOTスイッチを下の位置に切り替えます。
  6. 電源オフ/オンシーケンスを実行します。

#### STM32CubeProgrammer UIを使用したHexファイルのプログラム方法

[Hexファイルのプログラム方法STM32CubeProgrammer](#hexファイルのプログラム方法)を参照してください。

#### コマンドラインを使用したHexファイルのプログラム方法

STM32CubeProgrammerのbinフォルダがパスに追加されていることを確認してください。

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# First Stage Boot Loader
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/ai_fsbl.hex

# Network Parameters and Biases
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/network_data.hex

# Application Firmware
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/x-cube-n6-ai-people-detection.hex

```

### ソースコードを使用したクイックスタート

アプリケーションをビルドして実行する前に、`network_data.hex`（モデルの重みとバイアス）をプログラムする必要があります。

この手順は、AIモデルを変更しない限り、一度だけ実行すれば十分です。
詳細については、[事前構築バイナリを使用したクイックスタート](#事前構築バイナリを使用したクイックスタート)を参照してください。

ブートモードの詳細については、[ブート概要](#ブート概要)を参照してください。

#### アプリケーションのビルドと実行 - 開発モード

**スイッチが右側にあることを確認してください。**

##### STM32CubeIDE

`STM32CubeIDE/.project`をダブルクリックして、STM32CubeIDEでプロジェクトを開きます。ビルドボタンと実行ボタンでビルドして実行します。

##### Makefile

以下のコマンドを実行する前に、コマンドがPATHに含まれていることを確認してください。

1. 提供された`Makefile`を使用してプロジェクトをビルドします：

```bash
make -j8
```

2. STM32ターゲットに接続されたGDBサーバーを開きます：

```bash
ST-LINK_gdbserver -p 61234 -l 1 -d -s -cp <path-to-stm32cubeprogramer-bin-dir> -m 1 -g
```

3. 別のターミナルセッションで、GDBセッションを起動してファームウェアイメージをデバイスメモリにロードします：

```bash
$ arm-none-eabi-gdb build/Project.elf
(gdb) target remote :61234
(gdb) monitor reset
(gdb) load
(gdb) continue
```

#### アプリケーションのビルドと実行 - フラッシュからのブート

**スイッチが右側にあることを確認してください。**

##### STM32CubeIDE

`STM32CubeIDE/.project`をダブルクリックして、STM32CubeIDEでプロジェクトを開きます。ビルドボタンでビルドします。

##### Makefile

以下のコマンドを実行する前に、コマンドがPATHに含まれていることを確認してください。

1. 提供された`Makefile`を使用してプロジェクトをビルドします：

```bash
make -j8
```

Makefile、STM32CubeIDE、またはEWARMでアプリをビルドしたら、binファイルに署名を追加できます：

```bash
STM32_SigningTool_CLI -bin build/Project.bin -nk -t ssbl -hv 2.3 -o build/Project_sign.bin
```

署名されたbinファイルをアドレス`0x70100000`にプログラムできます。

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# IDEに合わせてビルドパスを調整してください
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w build/Project_sign.bin 0x70100000
```

注意：FSBLとnetwork_data.hexが以前にプログラムされている場合は、Appバイナリのみをプログラムする必要があります。

### 既知の問題と制限事項

- (NN_WIDTH * NN_BPP)は16の倍数である必要があります。
- (LCD_BG_WIDTH * 2)は16の倍数である必要があります。

***

## アプリケーションの追加ドキュメント

### アプリケーション概要

#### アプリケーションデータフロー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/DataFlow.JPG" style={{width:1000, height:'auto'}}/></div>

#### アプリケーションタイミング図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/ThreadTiming.JPG" style={{width:1000, height:'auto'}}/></div>

### メモリフットプリントの詳細

#### 読み取り専用データ

| 名前           | サイズ    | 場所 | 備考            |
|----------------|---------|----------|------------------|
| `network_data` | 10.59 MB | .rodata  | FLASH xSPI2 8b   |

#### 読み書きデータ

| 名前               | サイズ      | 場所   | 備考                             |
|--------------------|-----------|------------|-----------------------------------|
| `lcd_bg_buffer`    | 2300 KB   | .psram_bss | PSRAM / (800x480x2) x 3 / RGB565  |
| `lcd_fg_buffer`    | 1500 KB   | .psram_bss | PSRAM / (800x480x2) x 2 / ARGB4444|
| `nn_input_buffers` | 294 KB    | .psram_bss | PSRAM / (224x224x3) x 2 / RGB888  |
| `nn_output_buffers`| 12 KB     | .bss       | SRAM / 5880 x 2                   |
| `activations`      | 507 KB    | 0x34200000 | NPURAMS                           |
| `threads stacks`   | 20 KB     | .bss       | SRAM / 4096 * 5                   |

### DCMIPPとISP

#### DCMIPP概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/DCMIPP.JPG" style={{width:1000, height:'auto'}}/></div>

- パイプ1は`CMW_CAMERA_Start(DCMIPP_PIPE1, *ptr_dst, CAMERA_MODE_CONTINUOUS);`を使用して有効化され、imx335からDISPLAY_BUFFER_NBバッファリングされた`lcd_bg_buffer[]`に画像を連続的に送信します。`ptr_dst`はpipe1のframe_eventで更新されることに注意してください。
- パイプ2は`CMW_CAMERA_Start(DCMIPP_PIPE2, *ptr_dst, CAMERA_MODE_CONTINUOUS);`を使用して有効化され、imx335からダブルバッファリングされた`nn_input_buffers[]`に画像を連続的に送信します。`ptr_dst`はpipe2のframe_eventで更新されることに注意してください。これにより、バッファがnnスレッドによってまだ使用されている場合、前のフレームをドロップできます。
- 各キャプチャで、照明条件に応じて画質を向上させるためにISP設定が更新されます。`ISP_Init`で初期化され、`ISP_BackgroundProcess`で実行されます。

DCMIPPの詳細については、STM32N6リファレンスマニュアルのDigital Camera Interface Pixel Pipeline (DCMIPP)セクションを参照してください。

### ブート概要

#### 開発モード

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Dev_mode.png" style={{width:1000, height:'auto'}}/></div>

#### ファーストステージブートローダーでのフラッシュからのブート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/FSBL1.png" style={{width:1000, height:'auto'}}/></div>

### ビルドオプション

一部の機能は、ビルドオプションまたは`app_config.h`を使用して有効化されます：

- [カメラの向き](#カメラの向き)

このドキュメントでは、これらの機能とその変更方法について説明します。

#### カメラの向き

カメラは2つの軸に沿って画像を反転させることができます。

- `CMW_MIRRORFLIP_MIRROR`: セルフィーモード
- `CMW_MIRRORFLIP_FLIP`: 上下反転
- `CMW_MIRRORFLIP_FLIP_MIRROR`: 両軸反転
- `CMW_MIRRORFLIP_NONE`: デフォルト

1. **app_config.h**を開きます。

2. `CAMERA_FLIP`定義を変更します：

```c
/* Defines: CMW_MIRRORFLIP_NONE; CMW_MIRRORFLIP_FLIP; CMW_MIRRORFLIP_MIRROR; CMW_MIRRORFLIP_FLIP_MIRROR; */

#define CAMERA_FLIP CMW_MIRRORFLIP_NONE
```

### TFLiteモデルのデプロイ

独自の物体検出モデルを実行するには、以下の手順に従ってください：

- [1. TFLiteモデルからCモデルを生成](#1-tfliteモデルからcモデルを生成)
- [2. ネットワークデータをプログラム](#2-ネットワークデータをプログラム)
- [3. `app_config.h`でNN情報を提供](#3-app_confighでnn情報を提供)
  - [後処理タイプ](#後処理タイプ)
  - [ユーザーファイルを通じた後処理パラメータの設定](#ユーザーファイルを通じた後処理パラメータの設定)
  - [NNサイズ情報](#nnサイズ情報)
  - [クラスラベル](#クラスラベル)
  - [表示遅延](#表示遅延)
- [4. アプリケーションのビルド](#4-アプリケーションのビルド)
- [5. アプリケーションの実行](#5-アプリケーションの実行)
  - [開発モード](#開発モード)
  - [フラッシュからのブート](#フラッシュからのブート)

#### 1. TFLiteモデルからCモデルを生成

`network.c`、`network_ecblobs.h`、およびネットワークパラメータを含むファイルを生成するには、STM32Cube.AIをインストールする必要があります

1. `<folderInstall>/Utilities/<your_os>/`をパスに追加して、`stedgeai`をbashで認識できるようにします。

2. `<stm32cubeide_folderInstall>/plugins/com.st.stm32cube.ide.mcu.externaltools.gnu-tools-for-<plugin_version>/tools/bin`をパスに追加して、`arm-none-eabi-objcopy`をbashで認識できるようにします。

```bash
cd Model
stedgeai generate --no-inputs-allocation --no-outputs-allocation --model quantized_tiny_yolo_v2_224_.tflite --target stm32n6 --st-neural-art default@user_neuralart.json
cp st_ai_output/network_ecblobs.h .
cp st_ai_output/network.c .
cp st_ai_output/network_atonbuf.xSPI2.raw network_data.xSPI2.bin
arm-none-eabi-objcopy -I binary network_data.xSPI2.bin --change-addresses 0x70380000 -O ihex network_data.hex
```

以下のスクリプトは**Model/generate-n6-model.sh**にあります

#### 2. ネットワークデータをプログラム

これで、外部フラッシュにネットワークデータをプログラムできます。

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# 重みとパラメータ
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Model/network_data.hex
```

#### 3. `app_config.h`でNN情報を提供

アプリをネットワークと互換性を持たせるために、**Inc/app_config.h**の最後の行を編集する必要があります。

##### 後処理タイプ

このアプリケーションは4種類の物体検出後処理をサポートしています。これらの中から1つを選択できます。`POSTPROCESS_TYPE`をこれらの値の1つで編集してください。

```c
#define POSTPROCESS_OD_YOLO_V2_UF       (10) /* Yolov2 postprocessing; Input model: uint8; output: float32         */
#define POSTPROCESS_OD_YOLO_V5_UU       (11) /* Yolov5 postprocessing; Input model: uint8; output: uint8           */
#define POSTPROCESS_OD_YOLO_V8_UF       (12) /* Yolov8 postprocessing; Input model: uint8; output: float32         */
#define POSTPROCESS_OD_YOLO_V8_UI       (13) /* Yolov8 postprocessing; Input model: uint8; output: int8            */
```

##### NNサイズ情報

`NN_WIDTH`と`NN_HEIGHT`を編集してください。

**警告:** `NN_WIDTH * NN_BPP`は16の倍数である必要があります。

**警告:** RGB888フォーマットのみがテストされています。

##### クラスラベル

`NB_CLASSES`と`classes_table`を独自のクラスラベルとクラス数で変更してください。

##### 表示遅延

`DISPLAY_DELAY`を使用すると、表示される画像を遅延させて、モデルからの表示情報を表示される画像と整合させることができます。モデルの推論時間に応じてこの値を調整してください。

##### ユーザーファイルを通じた後処理パラメータの設定

後処理パラメータを変更するには、**Inc/postprocess_conf.h**を編集する必要があります。

後処理ライブラリのドキュメントは**Postprocess lib**で利用できます。

IOUしきい値、アンカー値、その他のパラメータを編集できます。

これらのパラメータの一部は、モデル（例：クラス数）と整合させる必要があります。

##### 出力バッファサイズの設定

`NN_BUFFER_OUT_SIZE`を編集して、出力テンソルのバイト単位のサイズを設定してください。

#### 4. アプリケーションのビルド

ネットワークデータがプログラムされ（ステップ2）、ネットワークの詳細が設定されたら（ステップ3）、以下に従ってアプリケーションをビルドできます：

[アプリケーションのビルドと実行](#アプリケーションのビルドと実行---開発モード)

#### 5. アプリケーションの実行

##### 開発モード

詳細については、[アプリケーションのビルドと実行](#アプリケーションのビルドと実行---開発モード)セクションを参照してください。

##### フラッシュからのブート

ファームウェアをプログラムするには、[外部フラッシュでのアプリのプログラム](#アプリケーションのビルドと実行---フラッシュからのブート)を参照してください。

### Hexファイルのプログラム方法

0. ボードが開発モード（ブートスイッチが開発モード位置）になっていることを確認してください。
1. STM32CubeProgrammerを開きます。
2. External loadersタブからMX66UW1G45G_STM32N6570-DKフラッシュを選択します。
3. ST-Link設定：モードを「Hot plug」に設定します。
4. ボードを接続します。
5. 「Erasing & programming」タブから、`Binary/ai_assistant_fsbl.hex`ファイルを選択します。
6. フラッシュが完了するまで待ちます。
7. 「Erasing & programming」タブから、`Binary/network_data.hex`ファイルを選択します。
8. フラッシュが完了するまで待ちます。
9. 「Erasing & programming」タブから、`Binary/AI_Assistant_Ref_Project.hex`ファイルを選択します。
10. フラッシュが完了するまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/selectBoard.JPG" style={{width:1000, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/flashHex.JPG" style={{width:1000, height:'auto'}}/></div>

## リソース

- **[PDF]** [AI Assistant回路図](https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/res/SCH_AI%20ASSISTANT_V1-1%20RELEASE_20250314.pdf)

## 技術サポート

この製品は**STMicroelectronics**によってサポートされています。
技術的な問題やお問い合わせについては、以下にご連絡ください：
**技術サポート連絡先：
 [[こちらをクリック](https://ols.st.com/s/)]**
