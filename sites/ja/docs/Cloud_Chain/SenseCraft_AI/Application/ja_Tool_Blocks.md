---
description: SenseCraft AI アプリケーションを作成する際に利用できるツールブロックのリファレンスです。
title: ツールブロック
keywords:
  - tool blocks
  - sensecraft ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/tool-blocks
sidebar_position: 2
last_update:
  date: 03/30/2026
  author: Rida
createdAt: '2026-03-30'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/application/tool-blocks/
---
# ツールブロックの使用

デプロイフローでは、SenseCraft AI に統合された機能をワンクリックで挿入できます。これにより、アプリ作成時とエンドユーザーへのデプロイの両方が効率化されます。

## AI Vision

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12 4c2.787 0 5.263 1.257 7.026 2.813c.885.781 1.614 1.658 2.128 2.531c.505.857.846 1.786.846 2.656s-.34 1.799-.846 2.656c-.514.873-1.243 1.75-2.128 2.531C17.263 18.743 14.786 20 12 20c-2.787 0-5.263-1.257-7.026-2.813c-.885-.781-1.614-1.658-2.128-2.531C2.34 13.799 2 12.87 2 12s.34-1.799.846-2.656c.514-.873 1.243-1.75 2.128-2.531C6.737 5.257 9.214 4 12 4m0 2c-2.184 0-4.208.993-5.702 2.312c-.744.656-1.332 1.373-1.729 2.047C4.163 11.049 4 11.62 4 12s.163.951.569 1.641c.397.674.985 1.39 1.729 2.047C7.792 17.007 9.816 18 12 18s4.208-.993 5.702-2.312c.744-.657 1.332-1.373 1.729-2.047c.406-.69.569-1.261.569-1.641s-.163-.951-.569-1.641c-.397-.674-.985-1.39-1.729-2.047C16.208 6.993 14.184 6 12 6m0 3q.132 0 .261.011a2 2 0 0 0 2.728 2.728A3 3 0 1 1 12 9"/></svg>対応ハードウェア上で、物体認識、検出、分類などのタスク向けに AI ビジョンモデルをデプロイします。推論結果は、設定に応じて MQTT、GPIO、またはシリアル（Serial）経由でリアルタイムにストリーミングできます。

このツールブロックは現在、**検出 (Detection)** と **分類 (Classification)** をサポートしています。セグメンテーションとポーズ推定は今後のリリースで追加予定です。

### 対応デバイス

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Grove - Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)
- [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html)
- [SenseCAP A1102](https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html)
- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

### モデルを選択

- **SenseCraft AI model:** モデルライブラリから、コミュニティによって公開共有されている高品質なモデルを選択します。
- **My model:** 自分のプライベート保存リストからモデルを選択します。
- **Upload model:** サードパーティプラットフォームで学習したモデルファイルをアップロードします。モデル名、タスク種別 (Task)、モデルカテゴリ（Class ID と Class Name）、モデルファイルの添付、および対応デバイスの選択が必要です。アップロード後、モデルは **My model** に表示されます。
- **Train model:** 新しいモデルを学習する、または既存モデルから再学習するには、トレーニングエントリを開き、ウィザードに従います。完了したら **Historical models** を開き、**Send to SenseCraft** を選択し、アップロードフローを完了して結果を **My model** に保存します。

:::caution
プライベートモデルを含むアプリケーションをコミュニティに公開すると、そのモデルは自動的にパブリックになります。
:::

### デバイスを選択

ドロップダウンから、このモデルがサポートするリストの中から実際に使用するハードウェアを選択します。

### 推奨パラメータ

シナリオに合わせて推論およびデバイス設定を調整します。これらの値は、デプロイ時にデバイスへデフォルト値として書き込まれます。

- **Confidence threshold:** モデルが最終予測を出力するかどうかの判定基準です。しきい値を上げると誤検出（偽陽性）が減る傾向があり、下げると見逃し（偽陰性）が減る傾向があります。
- **IOU threshold:** 検出タスクでは、IoU は予測ボックスと正解ボックスを比較します。しきい値を高くすると重なり合う物体を分離しやすくなりますが、高すぎると 1 つの物体に対して重複ボックスが出る場合があります。しきい値を低くすると重複をまとめやすくなりますが、低すぎると近接した 2 つの物体が 1 つにまとめられてしまう可能性があります。

#### 出力モード

- **None:** 電源投入後、別のトリガーが動作するまで推論は開始されません。推論を必要なときだけ実行する省電力構成に適しています。
- **MQTT:** 電源投入直後から推論を開始し、結果を Wi-Fi 経由で MQTT 送信します。
  - **SenseCraft official service (recommended):** アプリケーション用の Dev Kit を選択または作成すると、MQTT が自動的に設定されます。[SenseCraft Data platform](https://sensecap.seeed.cc) を開いて、受信データの閲覧と処理を行います。
  - **Third-party service:** 自前またはサードパーティの MQTT ブローカーを使用し、パラメータを手動で設定します。
- **GPIO:** GPIO ピンをレベル信号で駆動します。
  - **Trigger conditions:** オブジェクト、条件、信頼度しきい値を用いてルールを定義します。
  - **Trigger actions:** 条件が一致したとき、デバイスはピンを High/Low にする、SD カードにキャプチャを保存する、LED を点灯するなどの動作を行えます。
- **Serial:** [SSCMACore library](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA?tab=readme-ov-file#seeed_arduino_sscma-library) を使用して、UART (GPIO)、I2C、または SPI 経由で推論データを出力します。

```text
**UART (GPIO)**
Baud Rate Value: 921600
Data Format: 8N1
TX: GPIO43
RX: GPIO44

**I2C**
Slave Address: 0x62
SDA: GPIO5 (PULLUP)
SCL: GPIO6 (PULLUP)
Protocol:
- READ：0x10，0x01, LEN << 8, LEN & 0xff
- WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
- AVAIL(to read): 0x10，0x03
- RESET(clear buffer): 0x10，0x06

**SPI**
Slave CPOL0 CPHA0
MOSI GPIO9 (PULLUP)
MISO GPIO8,
SCLK GPIO7 (PULLUP)
CS GPIO4 (PULLUP)
Protocol:
- READ：0x10，0x01, LEN << 8, LEN & 0xff
- WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
- AVAIL(to read): 0x10，0x03
- RESET(clear buffer): 0x10，0x06
```

## AI Audio

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12 3a1 1 0 0 1 .993.883L13 4v16a1 1 0 0 1-1.993.117L11 20V4a1 1 0 0 1 1-1M8 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M4 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m16 0a1 1 0 0 1 .993.883L21 10v4a1 1 0 0 1-1.993.117L19 14v-4a1 1 0 0 1 1-1"/></svg>対応ハードウェア上で、音声認識向けの AI オーディオモデルをデプロイします。結果は、設定に応じて MQTT、GPIO、またはシリアル経由でストリーミングできます。

### 対応デバイス

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)

### モデルを選択

- **SenseCraft AI model:** ライブラリから、コミュニティ共有モデルを選択します。
- **My model:** 自分のプライベートリストから選択します。
- **Upload model:** サードパーティプラットフォームで学習したモデルファイルをアップロードします。モデル名とカテゴリ（Class ID と Class Name）を指定します。アップロード後、モデルは **My model** に表示されます。
- **Train model:** 新規または更新モデルを学習し、ビジョンモデルと同様に **Historical models** から SenseCraft へ送信します。

:::caution
プライベートモデルを含むアプリケーションをコミュニティに公開すると、そのモデルは自動的にパブリックになります。
:::

### デバイスを選択

オーディオモデルは現在、XIAO ESP32S3 Sense のみをサポートしています。

### 推奨パラメータ

シナリオに合わせて値を微調整します。

- **Confidence threshold:** ビジョンの場合と同様の役割で、見逃しと誤検出のトレードオフを調整します。
- **Output mode:** オーディオモデルのデフォルト出力経路です。

## AI Vibration

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M7.71 5.012a1 1 0 0 1 .76.582l1.147 2.582l2.524-2.84a1 1 0 0 1 1.662.258l1.147 2.582l2.525-2.84a1 1 0 0 1 1.661.258l1.778 4a1 1 0 0 1-1.828.812L17.94 7.824l-2.525 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.524 2.84a1 1 0 0 1-1.661-.258L7.272 7.824l-2.525 2.84a1 1 0 0 1-1.494-1.328l3.555-4a1 1 0 0 1 .901-.324m0 8a1 1 0 0 1 .76.582l1.147 2.582l2.524-2.84a1 1 0 0 1 1.662.258l1.147 2.582l2.525-2.84a1 1 0 0 1 1.661.258l1.778 4a1 1 0 0 1-1.828.812l-1.147-2.582l-2.525 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.524 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.525 2.84a1 1 0 0 1-1.494-1.328l3.555-4a1 1 0 0 1 .901-.324"/></svg>「正常」な振動を学習し、その逸脱を検知することで、振動異常検知をデプロイします。

### 対応デバイス

- XIAO ESP32S3 Sense（[3-axis accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html) 搭載）

### 推奨パラメータ

セットアップに合わせてサンプリング、電源投入時の挙動、GPIO、および出力を調整します。

- **Sampling window:** 単位時間あたりのサンプル数です。大きすぎると推論が遅くなり、小さすぎると正常振動を十分に学習できない可能性があります。
- **Enable default power-on inference:** Off の場合、電源投入時に推論は自動開始されません。省電力用途では外部トリガーを使用します。
- **GPIO:** 異常振動時にピンを駆動します（例：レベルを設定する、LED を点滅させるなど）。
- **Output mode:** 振動モデルのデフォルト出力経路です。

## コンテナアプリのデプロイ

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12.01 2.378a2.5 2.5 0 0 1 2.985 2.29l.005.161v.551c1.503-.3 2.9.792 2.995 2.288l.005.161v.55c1.503-.3 2.9.793 2.995 2.289l.005.162v6.53a3 3 0 0 1-2.239 2.902l-.173.04l-6.598 1.32a2.5 2.5 0 0 1-2.985-2.29L9 19.17v-.55l-.01.002a2.5 2.5 0 0 1-2.985-2.29L6 16.17v-.55l-.01.002a2.5 2.5 0 0 1-2.985-2.29L3 13.17V6.64a3 3 0 0 1 2.238-2.902l.174-.04zm6.392 7.961l-6.598 1.32a1 1 0 0 0-.804.98v6.531a.5.5 0 0 0 .598.49l6.598-1.32a1 1 0 0 0 .804-.98v-6.53a.5.5 0 0 0-.598-.49m-3-3L8.804 8.66A1 1 0 0 0 8 9.64v6.531a.5.5 0 0 0 .598.49L9 16.58v-3.94a3 3 0 0 1 2.412-2.942L16 8.78v-.95a.5.5 0 0 0-.598-.49m-3-3L5.804 5.66A1 1 0 0 0 5 6.64v6.531a.5.5 0 0 0 .598.49L6 13.58V9.64a3 3 0 0 1 2.412-2.942L13 5.78v-.95a.5.5 0 0 0-.598-.49"/></svg>コンテナアプリケーションを数クリックでエッジデバイスにデプロイします。

### 注目アプリ

組み込みライブラリには、次のアプリが含まれており、今後も拡充されます。

- **Home Assistant** — オープンソースのホームオートメーションハブ
- **Ollama** — オープンソースの大規模言語モデルをエッジ上でローカル実行
- **OpenClaw** — コンテナ化されたエッジアプリケーションをデプロイおよび管理するためのオープンソースプラットフォーム
- **reComputer AI Suite** — reComputer ハードウェア向けに最適化された Computer Vision (CV)、Vision-Language Models (VLM)、Large Language Models (LLM)

**M1 Gate**、**Raspberry Pi 4 / 5**、**NVIDIA Jetson**、**Seeed reComputer** と互換性があります。

### SenseCraft Fleet との連携方法

コンテナアプリは [**SenseCraft Fleet**](https://seeed-fleet.com) 上で管理され、[**SenseCraft AI**](https://sensecraft.seeed.cc/ai)（**`Applications`** 配下）を通じてデプロイされます：

- **SenseCraft Fleet** はコンテナイメージを保存する場所です。ここでイメージをアップロードし、設定スキーマを定義し、デバイスをバインドします。
- **SenseCraft AI** は、ライブラリからアプリを選択し、ターゲットデバイスを選び、設定して、デプロイを実行する場所です。

SenseCraft AI アカウントは SenseCraft Fleet と自動的にリンクされ、バインドされたデバイスとアプリは両プラットフォーム間で同期されます。

### 対応プラットフォーム

アプリはプラットフォーム固有です — イメージとターゲットデバイスは一致している必要があります：

- **Linux / ARM64** — 例：Seeed reComputer、Raspberry Pi 4 / 5、NVIDIA Jetson、M1 Gate
- *Linux / AMD64 — 近日対応予定*

### 設定ワークフロー

**アプリを選択：** SenseCraft Fleet のアプリライブラリ（組み込みカタログ）から選択します。カスタマイズしたコンテナアプリをアップロードしたい場合は、[**SenseCraft Fleet**](https://seeed-fleet.com) から追加する必要があります。

**アプリを設定：** 各アプリは、作者が SenseCraft Fleet 上で定義した設定項目を公開します。特別な要件がない限り、通常は何も設定する必要はありません。

### デプロイメントワークフロー

**ステップ 1 — アプリを選択：** **Deploy Container App** をクリックします。SenseCraft AI が SenseCraft Fleet からアプリライブラリ全体（組み込みカタログとアップロード済みのカスタムアプリ）を読み込み、名前・アイコン・説明付きで表示します。

**ステップ 2 – デバイスをバインド：** すでにバインド済みデバイスがある場合はステップ 3 に進みます。そうでない場合は、デバイスの電源を入れ、ネットワークに接続し、ハードウェアに応じて次の方法でバインドします：

- **Seeed ファクトリーイメージが動作している Seeed デバイス：** デバイスの **CPU ID** または **MAC アドレス** の下 6 桁を入力すると即座にバインドされます。
- **ファクトリーイメージがない Seeed デバイス、またはサードパーティ製デバイス：** デバイスの IP アドレスを取得し、ターミナルを開いて SSH 接続し、バインドフローに表示されるバインドコマンドを実行します。

バインドが完了すると、そのデバイスはバインド済みデバイス一覧に表示されます。

**ステップ 3 — ターゲットデバイスを選択：** アプリのプラットフォームと互換性のあるバインド済みデバイス一覧から選択します。非互換デバイスは自動的に除外されます。

**ステップ 4 — アプリを設定：** アプリ作者が公開した設定項目を入力します。コントロールタイプとデフォルト値については、上記の [Configuration workflow](#configuration-workflow) セクションを参照してください。

**ステップ 5 — ワンクリックデプロイ：** **Deploy** をクリックします。SenseCraft AI はライブ進行状況インジケーターを表示し、各フェーズのステータスをストリーミングします。失敗した場合は、ポップアップに正確なエラー内容が表示されるので、修正して再試行できます。新しい値で再デプロイすると既存のデプロイメントが自動的に置き換えられます。

:::note
現在は単一イメージの Docker アプリに対応しています。Docker Compose（マルチコンテナアプリ）はロードマップに含まれています。
:::

## ファームウェアを書き込む

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M16.586 3A2 2 0 0 1 18 3.586L20.414 6A2 2 0 0 1 21 7.414V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.414A2 2 0 0 1 3.586 6L6 3.586A2 2 0 0 1 7.414 3zM19 9H5v10h14zm-7 1a1 1 0 0 1 1 1v3.186l.414-.414a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0l-2.121-2.121a1 1 0 1 1 1.414-1.414l.414.414V11a1 1 0 0 1 1-1m4.586-5H7.414l-2 2h13.172z"/></svg>事前にコンパイルされたファームウェアバイナリを、別途フラッシュツールをインストールすることなく、ブラウザから直接 ESP32 デバイスに書き込みます。ファームウェアがすでにすべてのパラメータを組み込んでコンパイルされている場合に使用します。

**対応デバイス：**

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) *(近日対応予定)*
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html) *(近日対応予定)*
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html) *(近日対応予定)*

### 前提条件：

**1 つにマージされた `.bin` ファイル。** ブートローダー、パーティション、アプリのバイナリが別々にある場合は、アップロード前にマージしてください。

- **Arduino IDE 2.x：** マージ済みバイナリは **`Sketch → Export Compiled Binary`** を実行したときに **のみ** 生成されます。出力された `*.ino.merged.bin` は、`.ino` ファイルと同じ場所の `build/` フォルダに書き込まれます。
- **旧 Arduino IDE / 手動マージ：** **Export Compiled Binary** はブートローダー、パーティション、アプリの `.bin` ファイルを別々に書き出します — アップロード前に `esptool.py merge_bin` でマージしてください。Seeed Studio フォーラムのガイドを参照してください：[How to export a single merged `.bin` file from Arduino IDE](https://forum.seeedstudio.com/t/how-to-export-compiled-binary-create-a-single-bin-file-for-production-and-test/274990)。

### 設定ワークフロー

1. **Upload firmware** をクリックし、`.bin` ファイルをアップロードします。
2. プルダウンから **デバイスタイプを選択** します。

### デプロイメントワークフロー

1. デバイスをコンピュータに接続します。
2. **Flash firmware** をクリックします。ボタンには現在のフェーズが表示され、その下に進行状況バーとデバッグログが表示されます：シリアル接続 → デバイス検出 → 書き込み → 再起動。
3. 書き込みが完了したら、プレビューウィンドウで動作を確認します。

いずれかのステップで失敗した場合は、エラーポップアップに原因が表示されるので、修正して再試行できます。

## Node-RED

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 128 128" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'#8F0000'}}><path fill="currentColor" d="M64 0L8.61 32.033v63.979L64 128l55.39-31.986V32.053zm.023 5.3a1 1 0 0 1 .471.132l50.022 28.873c.306.176.523.502.523.855v57.744c0 .354-.217.68-.523.856l-50.022 28.879a.99.99 0 0 1-.988 0l-50.1-28.877a.99.99 0 0 1-.494-.856V35.16c0-.353.188-.679.494-.855l50.1-28.873a1 1 0 0 1 .517-.131zM64 7.43l-49.06 28.3v17.088h20.308c3.273.019 6.052 2.326 6.363 5.524c2.41-.304 3.891-.97 4.95-1.94c1.24-1.138 2.095-2.763 3.136-4.652c1.042-1.889 2.316-4.057 4.643-5.654c1.88-1.291 4.649-1.93 7.902-2.09v-1.127c0-3.478 2.713-6.281 6.192-6.281h25.183c3.479 0 6.586 2.803 6.586 6.28v6.188c0 3.479-3.121 6.325-6.6 6.325h-25.18c-3.478 0-6.18-2.846-6.18-6.325v-.802c-2.46.146-4.36.605-5.472 1.369c-1.43.98-2.323 2.4-3.311 4.191c-.92 1.667-1.95 3.622-3.666 5.342c9.2 1.46 13.774 4.955 17.426 8.148c4.393 3.842 7.916 6.9 19.728 6.987v-.856c0-3.478 2.979-6.383 6.457-6.383h19.657V35.73zm4.434 33.52c-1.175 0-2.143.754-2.143 1.929v6.187c0 1.175.956 1.973 2.13 1.973h25.184c1.175 0 2.047-.798 2.047-1.973V42.88c0-1.175-.86-1.93-2.035-1.93zM14.94 56.774v10.287h20.307c1.175 0 2.047-.776 2.047-1.95v-6.188c0-1.175-.873-2.149-2.047-2.149zm26.793 5.983l-.002 2.353c0 3.479-3.004 6.303-6.482 6.303H14.941v20.92L64 120.641l49.06-28.307v-6.479H93.407c-3.478 0-6.457-2.744-6.457-6.222v-1.074c-12.79-.17-18.177-4.186-22.554-8.014c-4.562-3.989-8.474-7.564-22.66-7.787zm51.674 8.656c-1.174 0-2.107.857-2.107 2.031v6.08c0 1.175.933 1.979 2.107 1.979h19.655v-10.09z"/></svg>[Node-RED](https://nodered.org) ブロックは、reCamera 向けのビジュアルなロジックフローを構築するのに役立ちます。

### 公式リソース

- [GitHub](https://github.com/node-red/node-red)
- [Documentation](https://nodered.org/docs/)

### 対応デバイス

- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

### ワークフローの準備

Node-RED ブロックを追加した後、次のいずれかの方法でフローを設定します：

1. **新しいワークフローを作成：** reCamera（有線または無線）に接続し、Dashboard を開いてオンラインで編集します。
2. **ローカルファイルをアップロード：** すでに作成済みの JSON フローをアップロードします。システムはファイルタイプを検証し、確実にパースできるようにします。

### AI ビジョンモデルを選択

JSON フローにはモデルバイナリは埋め込まれません。このフローで使用するモデルを指定します：

- **デバイス内蔵：** reCamera にプリインストールされているモデルを使用します。分類・検出・セグメンテーション・ポーズ推定用の YOLO11n バリアントが含まれます。
- **公開モデル：** 他のユーザーが reCamera 向けに共有した SenseCraft 公開モデルを参照します。
- **My model：** 自分のプライベートライブラリから選択します。

:::caution
**My model** のプライベートモデルを使用してアプリを公開コミュニティに公開する場合、そのモデルも公開されます。公開前に確認のプロンプトが表示されます。
:::

## Aily Blockly

<img src="https://github.com/ailyProject.png" alt="" style={{width:'1.25em',height:'1.25em',verticalAlign:'-0.3em',marginRight:'0.35em',borderRadius:'4px'}}/>[Aily Blockly](https://aily.pro) はビジュアルプログラミング環境です。このブロックを使うと、Aily Blockly で作成したプログラムを、エッジデバイスにワンステップで書き込むことができます。

### 公式リソース

- [GitHub](https://github.com/ailyProject/aily-blockly)
- [Documentation - Global site](https://aily.pro/doc)
- [Documentation - Mainland China site](https://yiyu.pro/doc)

### 対応デバイス

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)

### プロジェクト ID を紐付ける

公開されている Aily Blockly テンプレートを指すプロジェクトコードを入力します。

#### Project ID を取得する方法

1. Aily Blockly でプロジェクトを作成し、**`Build (F5)`** をクリックしてコンパイルします。
2. コンパイルが成功したら、**Cloud Space** パネルを開き、**`Sync this project to cloud`** をクリックします。
3. ラベル表示された領域（**`ID: …`**）に Project ID が表示されるので、数字のみを使用します。
4. プロジェクトを変更するたびにこれらの手順を繰り返し、クラウド上のコピーを最新の状態に保ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/tool_blocks/aily-get-project-id.png" alt="Aily Blockly の Project ID を取得する方法" style={{width:1000, height:'auto'}}/></div>
