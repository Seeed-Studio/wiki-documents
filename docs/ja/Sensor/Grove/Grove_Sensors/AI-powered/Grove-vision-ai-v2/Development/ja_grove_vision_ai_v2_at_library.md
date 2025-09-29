---
title: Grove Vision AI V2 を AT コマンドで使用する方法
hide_title: false
description: このガイドでは、Grove Vision AI V2 を AT コマンドで使用する方法を説明します。
keywords:
  - Vision
  - Grove
  - AT
  - SSCMA
image: https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg
slug: /ja/grove_vision_ai_v2_at
last_update:
  date: 05/15/2025
  author: Spencer
mermaid: true
toc_max_heading_level: 3
---


## はじめに

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Vision AI V2</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/43.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Grove Vision AI V2 は、視覚アプリケーション向けの既製モデルを展開できる強力な AI カメラモジュールです。このモジュールは AI 機能に加えて、機能性と使いやすさを向上させるためのいくつかのハードウェア機能と使用オプションを提供します。

![](https://mermaid.ink/svg/pako:eNp1kk9vozAQxb_KyCciRSi4aRe4RemfXWmrVpuqh4qL155St-CJjMk2G-W7r02AZKXmNr_3xuN5mB2TpJDlrNZG1WJdGABL5KLoztIG4Vk3mgw888kkWABLqsheo0PpvBF1CCP3TQA_tcFbqir6o00ZBYIRxyZFroniOO6Fh9_vfsovlFQa3U0_KHAijWe_U42L1lEtus6AcOSxbVUL6xZSYtMsyThLVdRJcNCgF8-tBHCzQeOerC5LtKjCJlaFSJ0OowGj05-8FRJPowT-Msgj2oaMqH4oP1C_atkFWKFsrXbbaLDhfx-GhgkMg_r0qJZt4yu0K7QbLTEaDRgc6K1zse8p3HF85QN_8cxPb_jqFpWwddSV0NXHnR7R3ZMPTDZ8M09wxHOXnyCbMr9tLbTyf-gu2AVzb1hjwXJfKmE_ClaYve8TPuRqayTLnW1xytq18pGvtSitqAdxLcwL0SmyfMc-Wc7jS55m6cXFFU-yNJ0lU7ZlecKTePYtm3vmPMtmfD9lf7vzszg0Z_wyu-LzeZrw_T852RLp)

このページでは、**Grove Vision AI V2 用に特別に設計された Arduino ライブラリを効果的に利用する方法**をユーザーに案内します。インストールプロセス、主要機能をカバーし、ライブラリ関数を使用してモジュールを制御および構成する方法を示す実用的な例を提供します。これにより、ユーザーは簡単に革新的な視覚ベースのアプリケーションを作成できます。

## ファームウェアと AT コマンドセット

Grove Vision AI V2 には、AT コマンドセットをサポートするプリインストールされたファームウェアが付属しています。このコマンドセットを使用すると、複雑なプログラミング環境を必要とせずにモジュールの機能を制御および構成できます。

AT コマンドセットの仕様は [SSCMA-Micro](https://github.com/Seeed-Studio/SSCMA-Micro) で確認できます。AT コマンドセットは時間とともに進化する可能性があり、新しいファームウェアバージョンには追加のコマンドが含まれる場合があります。最新の機能にアクセスするために、ファームウェアを更新することをお勧めします。

:::note
新しいファームウェアをフラッシュする必要がある場合やファームウェアを更新する場合は、[SenseCraft AI](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) のウェブサイトにアクセスしてください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/at-diagram.png" alt="at diagram" width={320} height="auto" /></p>

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>AT プロトコルを確認</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Arduino ライブラリ

AT コマンドセットの使用を簡素化し、ユーザーフレンドリーなインターフェースを提供するために、[Seeed_Arduino_SSCMA](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA) という Arduino ライブラリが利用可能です。このライブラリは AT コマンドを簡単に使用できる関数にラップし、ユーザーが Grove Vision AI V2 を Arduino プロジェクトに迅速に統合できるようにします。

Arduino ライブラリは最新の AT コマンドセットとの互換性を維持しており、モジュールとの一貫した統一されたアプローチを保証します。このライブラリを利用することで、ユーザーは AT コマンドの低レベルの詳細を気にすることなく、アプリケーションの開発に集中できます。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

:::info

<div class="table-center">
<table align="center">
    <tr>
        <td>MCU</td>
        <td>ボードバージョン</td>
        <td>Grove(I2C)</td>
        <td>ピン(Uart)</td>
    </tr>
    <tr>
        <td>SAMD21</td>
        <td>1.8.5</td>
        <td>✅</td>
        <td>⚠️</td>
    </tr>
    <tr>
        <td>RP2040</td>
        <td>3.9.1</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>nRF52840 - nRF52 Boards</td>
        <td>1.1.8</td>
        <td>✅</td>
        <td>⚠️</td>
    </tr>
    <tr>
        <td>nRF52840 - mbed-enabled</td>
        <td>2.9.2</td>
        <td>✅</td>
        <td>⚠️</td>
    </tr>
    <tr>
        <td>ESP32C3</td>
        <td>2.0.17</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>ESP32S3</td>
        <td>2.0.17</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
</table>
</div>

\*⚠️: 正常に動作しない可能性があります
:::


## Grove Vision AI V2 を接続する

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/i2c-connect.jpg" width={420} height="auto" /></p>

Groveケーブルを使用して、Grove Vision AI V2を任意のMCUボードに接続します。

</TabItem>
<TabItem value="uart" label="XIAO-互換" default>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" width={420} height="auto" /></p>

この方法では、**UART**だけでなく**I2C**も使用して接続を確立できます。

:::tip シリアルボーレート
高い応答性を得るために、Grove Vision V2のシリアルボーレートはデフォルトで`921600`です。
そのため、ソフトウェアシリアルではなくハードウェアシリアルを使用して接続する必要があります。
:::
</TabItem>
</Tabs>

## *例 1:* 画像をキャプチャする

:::tip invokeの機能とは？
[invoke - FAQ](#faq_invoke)をチェックしてください。
:::

```cpp
// 1回呼び出し、フィルターなし、画像を含む
if (!AI.invoke(1, false, true)){
   if (AI.last_image().length() > 0){
      Serial.print("最後の画像:");
      Serial.println(AI.last_image());
   }
}
```

`AI.last_image()`は文字列であり、base64でエンコードされた画像データ(JPEG)を含みます。[🖱️解析方法を学ぶ](#base64tojpeg)

### 完全なコード

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

<!-- I2C -->

```cpp
#include <Seeed_Arduino_SSCMA.h>
SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
}

void loop()
{
    // 1回呼び出し、フィルターなし、画像を取得
    if (!AI.invoke(1, false, true)){
        if (AI.last_image().length() > 0){
            Serial.print("最後の画像:");
            Serial.println(AI.last_image());
        }
    }
}
```

</TabItem>
<TabItem value="xiao" label="XIAO-互換 (UART)" default>

<!-- UART Image-->
```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// 2つの内部UARTにマッピングされた2つのシリアルデバイスを定義
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
   AI.begin(&atSerial);
   Serial.begin(9600);
}

void loop()
{
    // 1回呼び出し、フィルターなし、画像を取得
    if (!AI.invoke(1, false, true)){
        if (AI.last_image().length() > 0){
            Serial.print("最後の画像:");
            Serial.println(AI.last_image());
        }
    }
}
```
</TabItem>
</Tabs>

<table align="center">
	<tr>
	    <th>デバイスを接続</th>
	    <th>ファームウェアをアップロード</th>
        <th>モニター</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_connect.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_code.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_monitor.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
</table>

## *例 2:* 推論結果を取得する

### 完全なコード

<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup() {
  AI.begin();
  Serial.begin(9600);
}

void loop() {
  if (!AI.invoke(1, false, false)) { // 1回呼び出し、フィルタなし、画像を含まない
    Serial.println("呼び出し成功");
    Serial.print("パフォーマンス: 前処理=");
    Serial.print(AI.perf().prepocess);
    Serial.print(", 推論=");
    Serial.print(AI.perf().inference);
    Serial.print(", 後処理=");
    Serial.println(AI.perf().postprocess);

    for (int i = 0; i < AI.boxes().size(); i++) {
      Serial.print("ボックス[");
      Serial.print(i);
      Serial.print("] ターゲット=");
      Serial.print(AI.boxes()[i].target);
      Serial.print(", スコア=");
      Serial.print(AI.boxes()[i].score);
      Serial.print(", x=");
      Serial.print(AI.boxes()[i].x);
      Serial.print(", y=");
      Serial.print(AI.boxes()[i].y);
      Serial.print(", 幅=");
      Serial.print(AI.boxes()[i].w);
      Serial.print(", 高さ=");
      Serial.println(AI.boxes()[i].h);
    }
    for (int i = 0; i < AI.classes().size(); i++) {
      Serial.print("クラス[");
      Serial.print(i);
      Serial.print("] ターゲット=");
      Serial.print(AI.classes()[i].target);
      Serial.print(", スコア=");
      Serial.println(AI.classes()[i].score);
    }
    for (int i = 0; i < AI.points().size(); i++) {
      Serial.print("ポイント[");
      Serial.print(i);
      Serial.print("]: ターゲット=");
      Serial.print(AI.points()[i].target);
      Serial.print(", スコア=");
      Serial.print(AI.points()[i].score);
      Serial.print(", x=");
      Serial.print(AI.points()[i].x);
      Serial.print(", y=");
      Serial.println(AI.points()[i].y);
    }
    for (int i = 0; i < AI.keypoints().size(); i++) {
      Serial.print("キーポイント[");
      Serial.print(i);
      Serial.print("] ターゲット=");
      Serial.print(AI.keypoints()[i].box.target);
      Serial.print(", スコア=");
      Serial.print(AI.keypoints()[i].box.score);
      Serial.print(", ボックス:[x=");
      Serial.print(AI.keypoints()[i].box.x);
      Serial.print(", y=");
      Serial.print(AI.keypoints()[i].box.y);
      Serial.print(", 幅=");
      Serial.print(AI.keypoints()[i].box.w);
      Serial.print(", 高さ=");
      Serial.print(AI.keypoints()[i].box.h);
      Serial.print("], ポイント:[");
      for (int j = 0; j < AI.keypoints()[i].points.size(); j++) {
        Serial.print("[");
        Serial.print(AI.keypoints()[i].points[j].x);
        Serial.print(",");
        Serial.print(AI.keypoints()[i].points[j].y);
        Serial.print("],");
      }
      Serial.println("]");
    }
  }
}
```

</TabItem>
<TabItem value="uart" label="XIAO-互換 (UART)" default>

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// 2つの内部UARTにマッピングされた2つのシリアルデバイスを定義
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup() {
  AI.begin( & atSerial);
  Serial.begin(9600);
}

void loop() {
  if (!AI.invoke(1, false, false)) { // 1回呼び出し、フィルタなし、画像を含まない
    Serial.println("呼び出し成功");
    Serial.print("パフォーマンス: 前処理=");
    Serial.print(AI.perf().prepocess);
    Serial.print(", 推論=");
    Serial.print(AI.perf().inference);
    Serial.print(", 後処理=");
    Serial.println(AI.perf().postprocess);

    for (int i = 0; i < AI.boxes().size(); i++) {
      Serial.print("ボックス[");
      Serial.print(i);
      Serial.print("] ターゲット=");
      Serial.print(AI.boxes()[i].target);
      Serial.print(", スコア=");
      Serial.print(AI.boxes()[i].score);
      Serial.print(", x=");
      Serial.print(AI.boxes()[i].x);
      Serial.print(", y=");
      Serial.print(AI.boxes()[i].y);
      Serial.print(", 幅=");
      Serial.print(AI.boxes()[i].w);
      Serial.print(", 高さ=");
      Serial.println(AI.boxes()[i].h);
    }
    for (int i = 0; i < AI.classes().size(); i++) {
      Serial.print("クラス[");
      Serial.print(i);
      Serial.print("] ターゲット=");
      Serial.print(AI.classes()[i].target);
      Serial.print(", スコア=");
      Serial.println(AI.classes()[i].score);
    }
    for (int i = 0; i < AI.points().size(); i++) {
      Serial.print("ポイント[");
      Serial.print(i);
      Serial.print("]: ターゲット=");
      Serial.print(AI.points()[i].target);
      Serial.print(", スコア=");
      Serial.print(AI.points()[i].score);
      Serial.print(", x=");
      Serial.print(AI.points()[i].x);
      Serial.print(", y=");
      Serial.println(AI.points()[i].y);
    }
    for (int i = 0; i < AI.keypoints().size(); i++) {
      Serial.print("キーポイント[");
      Serial.print(i);
      Serial.print("] ターゲット=");
      Serial.print(AI.keypoints()[i].box.target);
      Serial.print(", スコア=");
      Serial.print(AI.keypoints()[i].box.score);
      Serial.print(", ボックス:[x=");
      Serial.print(AI.keypoints()[i].box.x);
      Serial.print(", y=");
      Serial.print(AI.keypoints()[i].box.y);
      Serial.print(", 幅=");
      Serial.print(AI.keypoints()[i].box.w);
      Serial.print(", 高さ=");
      Serial.print(AI.keypoints()[i].box.h);
      Serial.print("], ポイント:[");
      for (int j = 0; j < AI.keypoints()[i].points.size(); j++) {
        Serial.print("[");
        Serial.print(AI.keypoints()[i].points[j].x);
        Serial.print(",");
        Serial.print(AI.keypoints()[i].points[j].y);
        Serial.print("],");
      }
      Serial.println("]");
    }
  }
}
```

</TabItem>
</Tabs>

<table align="center">
	<tr>
	    <th>デバイスを接続</th>
	    <th>ファームウェアをアップロード</th>
      <th>モニタリング</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_connect.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/reference_code.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/reference_monitor.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
</table>

## *例 3:* JPEG画像をSDカードに保存する

> 詳細は[アクショントリガー設定 - ATプロトコル](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md#set-action-trigger-experimental)セクションをご覧ください。

Grove Vision AI V2モジュールは、JPEG画像を外部SDカードに直接保存することができます。互換性を確保するために、SDカードを***FAT32***形式でクラスタサイズを`8192`に設定するか、**exFAT**ファイルシステムを使用することを推奨します。画像を保存する際、モジュールは既存でない場合に自動的に`Grove Vision AI (V2) Export`というデフォルトの保存パスを作成します。

:::info 注意
- ファームウェアバージョンが2024年4月18日以降であることを確認してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/jpeg_format_sd.png" alt="filesystem" width={220} height="auto" /></p>

この保存パス内では、保存アクションがトリガーされるたびに新しいフォルダが作成され、フォルダ名はインクリメントされた番号になります。最新のフォルダ名は保存パス内の隠しファイル`.sscma`に保存されます。このファイルは*ユーザーによって変更されるべきではありません*。変更するとエラーが発生する可能性があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/export_files.png" alt="export files" width={480} height="auto" /></p>

<details>
<summary>Pythonを使用してストリームのように画像をプレビューする方法</summary>

```python
import os
import platform
import tkinter as tk
from PIL import Image, ImageTk
import time

class ImagePlayer:
    def __init__(self, parent_directory, switch_time=1):
        self.parent_directory = parent_directory
        self.image_files = []
        self.current_index = 0
        self.switch_time = switch_time
        self.root = tk.Tk()
        self.label = tk.Label(self.root)
        self.label.pack()
        self.load_image_files()
    
    def load_image_files(self):
        # 親ディレクトリ内のすべてのサブディレクトリを取得
        directories = [os.path.join(self.parent_directory, folder) for folder in os.listdir(self.parent_directory) if os.path.isdir(os.path.join(self.parent_directory, folder))]

        # サブディレクトリを巡回して画像ファイルのパスを取得
        for directory in directories:
            image_files = [os.path.join(directory, file) for file in sorted(os.listdir(directory)) if file.endswith(('.jpg', '.jpeg', '.png'))]
            self.image_files.extend(image_files)

    def play_images(self):
        if self.current_index < len(self.image_files):
            image_file = self.image_files[self.current_index]
            image = Image.open(image_file)
            self.display_image(image)
            self.current_index += 1
            self.root.after(int(self.switch_time * 1000), self.play_images)
        else:
            self.root.destroy()

    def display_image(self, image):
        # ウィンドウに合わせて画像サイズを調整
        width, height = self.root.winfo_screenwidth(), self.root.winfo_screenheight()
        image.thumbnail((width, height))

        # Tkinterで使用可能な形式に画像を変換
        photo = ImageTk.PhotoImage(image)

        # ラベルに画像を表示
        self.label.config(image=photo)
        self.label.image = photo

    def start(self):
        self.root.geometry("240x240")  # ウィンドウサイズを設定
        self.root.title("Image Player")  # ウィンドウタイトルを設定

        self.root.after(0, self.play_images)  # 画像再生を開始
        self.root.mainloop()

# ImagePlayerオブジェクトを作成し、親ディレクトリのパスを指定
parent_directory = r"E:\Grove Vision AI (V2) Export"
player = ImagePlayer(parent_directory, switch_time=0.3)  # 画像切り替え時間をここでカスタマイズ（秒単位）

# 画像プレイヤーを開始
player.start()
```
</details>

`save_jpeg()`を呼び出すと、Grove Vision AI V2モジュールにATコマンド`AT+ACTION="save_jpeg()"`を送信することを意味します。
このコマンドは一度だけ呼び出す必要があります。

JPEG画像を保存したくない場合は、Grove Vision AI V2モジュールを再起動してもアクションセットをクリアする必要があります。

<div class="table-center">
<iframe width="380" height="300" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/insert_sd_visionv2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

```cpp
void setup()
{
   atSerial.println("AT+ACTION=\"\""); // `AI.clean_actions()`と同じ
   AI.clean_actions(); 
}
```

### 完全なコード
<Tabs groupId="grove_connect">
<TabItem value="i2c" label="Grove(I2C)" >

<!-- JPEG画像をSDカードに保存 -->

```cpp
#include <Seeed_Arduino_SSCMA.h>

SSCMA AI;

void setup()
{
  Serial.begin(9600); // シリアルポートを初期化
  AI.begin(); 
  AI.save_jpeg();
}

void loop()
{
  static int cnt = 0;
  // 呼び出すたびにJPEGを保存
  if (!AI.invoke(1, false, false)){
    Serial.printf("画像を記録 %d\n", ++cnt);
  } 
}

```

</TabItem>
<TabItem value="uart" label="XIAO-互換 (UART)" default>

<!-- JPEG画像をSDカードに保存 -->

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// 2つの内部UARTにマッピングされた2つのシリアルデバイスを定義
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
  Serial.begin(9600); // シリアルポートを初期化
  AI.begin(&atSerial);
  AI.save_jpeg();
}

void loop()
{
  static int cnt = 0;
  // 呼び出すたびにJPEGを保存
  if (!AI.invoke(1, false, true)){
    Serial.printf("画像を記録 %d\n", ++cnt);
  } 
}
```

</TabItem>
<TabItem value="at_actions" label="ATアクションを確認">

<!-- ATアクション -->

```cpp
#include <Seeed_Arduino_SSCMA.h>

#ifdef ESP32
#include <HardwareSerial.h>

// 2つの内部UARTにマッピングされた2つのシリアルデバイスを定義
HardwareSerial atSerial(0);

#else
#define atSerial Serial1
#endif

SSCMA AI;

void setup()
{
   Serial.begin(9600); // シリアルポートを初期化
   AI.begin(&atSerial);
   AI.save_jpeg();
}

void loop()
{
  atSerial.println("AT+ACTION?"); // アクション情報を取得するリクエスト

  String str_action = atSerial.readString(); // 応答を読み取る
  if(str_action.indexOf("save_jpeg") > 0){ // アクションが存在するか確認
      Serial.println("save_jpegが存在します");
      Serial.println("アクションをトリガー: clean_actions");
      AI.clean_actions(); // アクションをクリア
  }else{ // 存在しない場合、再度save_jpegアクションをトリガー
      Serial.println("save_jpegが存在しません");
      Serial.println("アクションをトリガー: save_jpeg");
      AI.save_jpeg();
  }
  delay(5000);
}
```

:::tip
動作しない場合は、SDカードが正しくフォーマットされ、正しく挿入されているか確認してください。
:::

</TabItem>
</Tabs>

<table align="center">
	<tr>
	    <th>デバイスを接続</th>
	    <th>ファームウェアをアップロード</th>
      <th>モニタリング</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/capture_image_connect.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/save_image_code.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/save_image_monitor.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
</table>

## Base64からJPEG画像へ {#base64tojpeg}

プログラミングでJPEG画像を取得する際、デコードされた画像を取得する方法は2つあります：

<Tabs>
<TabItem value="esp32" label="ESP32">

MCUがESP32の場合、以下のコードを使用して画像を取得できます：

```cpp
#include <string.h>

#include "mbedtls/base64.h"

#include <Seeed_Arduino_SSCMA.h>

#define DECODED_IMAGE_MAX_SIZE(15 * 1024) // 最大サイズを選択してください

static unsigned char jpegImage[DECODED_IMAGE_MAX_SIZE + 1];

size_t decode_base64_image(const unsigned char * p_data, unsigned char * decoded_str) {
  if (!p_data || !decoded_str)
    return 0;

  size_t str_len = strlen((const char * ) p_data);
  size_t output_len = 0;
  // デコード後の長さを取得
  int decode_ret = mbedtls_base64_decode(NULL, 0, & output_len, p_data, str_len);
  if (decode_ret == MBEDTLS_ERR_BASE64_INVALID_CHARACTER) {
    Serial.println(TAG, "Base64文字列に無効な文字が含まれています");
    return 0;
  }

  // デコード後の長さが妥当か確認
  if (output_len == 0 || output_len > DECODED_IMAGE_MAX_SIZE) {
    Serial.println("Base64デコード出力サイズが大きすぎるかゼロです。");
    return 0;
  }

  // 実際のデコード操作
  decode_ret = mbedtls_base64_decode(decoded_str, DECODED_IMAGE_MAX_SIZE, & output_len, p_data, str_len);
  if (decode_ret != 0) {
    Serial.println(TAG, "Base64文字列のデコードに失敗しました。エラー: %d", decode_ret);
    return 0;
  }

  Serial.println("str_len: %d, output_len: %d", str_len, output_len);

  return output_len;
}

SSCMA AI;

void setup() {
  AI.begin();
  Serial.begin(115200);
}

void loop() {
  if (!AI.invoke(1, false, true)) {
    if (AI.last_image().length() > 0) {
      Serial.print("最後の画像:");
      Serial.println(AI.last_image());
      size_t jpegImageSize = decode_base64_image(AI.last_image().c_str(), jpegImage);
      if (jpegImageSize > 0) {
        // JPEG画像を表示するための関数
        display_jpeg_image(jpegImage, jpegImageSize);
      }
    }
  }
}
```

</TabItem>
<TabItem value="arduino" label="Arduino" default>

```cpp
#include <base64.h>

#include <Seeed_Arduino_SSCMA.h>

#define atSerial Serial1 /* シリアルインターフェースを定義 */

SSCMA AI;

void setup() {
  AI.begin( & atSerial);
  Serial.begin(115200);
}

void loop() {
  // 一度呼び出し、フィルタなしで画像を取得
  if (!AI.invoke(1, false, true)) {
    if (AI.last_image().length() > 0) {
      String toEncode = AI.last_image();
      Serial.print("画像コード:");
      Serial.println(toEncode);
      String encoded_jpeg = base64::encode(toEncode);
      // JPEG画像を表示するための関数
      func_display_jpeg(encoded_jpeg);
    }
  }
}
```
</TabItem>
</Tabs>

:::tip なぜBase64エンコーディングを使用するのか？
Base64は、バイナリデータ（画像など）をASCII文字列にエンコードする方法です。これにより、JSONのようにバイナリをネイティブにサポートしないフォーマットにバイナリデータを含めることができます。

Base64エンコーディングは、バイナリデータをテキストベースのプロトコル（HTTP、JSON、XMLなど）で直接送信するのを避けるために使用されます。また、追加のパーシングライブラリを必要とせず、ほとんどのプログラミング言語にBase64エンコード/デコード機能が組み込まれています。Base64を使用することで、バイナリデータを標準のASCIIテキストとして安全に送信し、元のバイナリ形式に簡単にデコードできます。

Base64を画像にデコードするのに便利なオンラインツールが多数あります。例えば：
[Base64 Online Decoder](https://base64.guru/converter/decode/image)
Base64文字列をツールに貼り付けるだけで、デコードされた画像が表示されます。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/dev/e.g.base64.png" width={420} height="auto" /></p>

## カスタマイズとSDK開発

より高度なカスタマイズや機能を必要とするユーザー向けに、Grove Vision AI V2はSDK開発もサポートしています。このモジュールのHimaxメインコントローラーチップは、提供されているSDKを使用して直接プログラム可能であり、高度にパーソナライズされた機能を備えた産業用プロジェクトに対応できます。

SDK開発に興味のあるユーザーは、[sdio_app](https://github.com/Seeed-Studio/sscma-example-we2/tree/main/EPII_CM55M_APP_S/app/scenario_app/sdio_app)のような既存の例を参照できます。この例では、直接的なSDIO操作を示しており、カスタムプロジェクトを修正および実装するための出発点として役立ちます。

SDKの力を活用することで、ユーザーはGrove Vision AI V2の可能性を最大限に引き出し、特定のニーズに合わせたソリューションを作成できます。詳細なガイダンスについては、[前のWikiページ](/ja/grove_vision_ai_v2_himax_sdk)を参照してください。

## FAQとトラブルシューティング

### invokeの機能は何ですか？ {#faq_invoke}

Grove Vision V2からデータ値を取得するたびに、`invoke`関数を呼び出す必要があります：
```cpp
/**
 * @brief 指定された回数アルゴリズムを呼び出します
 * 
 * この関数は、指定された回数アルゴリズムを呼び出し、応答とイベントを待機します。
 * 結果は、前回の結果との差異に基づいてフィルタリングすることができ、イベント応答には
 * 結果データのみを含めるか、画像データも含めるかを設定できます。
 *
 * @param times アルゴリズムを呼び出す回数
 * @param filter trueの場合、前回の結果と異なる場合にのみイベント応答が送信されます
 *               （ジオメトリとスコアで比較）
 * @param show trueの場合、イベント応答には画像データも含まれます。falseの場合、イベント応答には
 *             結果データのみが含まれます
 * @return int 呼び出しが成功し、タイムアウト内に応答とイベントが受信された場合はCMD_OKを返します。
 *             それ以外の場合はCMD_ETIMEDOUTを返します
 *
 * パターン: AT+INVOKE=<N_TIMES,DIFFERED,RESULT_ONLY>\r
 * リクエスト: AT+INVOKE=1,0,1\r
 */
int SSCMA::invoke(int times, bool filter, bool show);
```

### `AI.begin()`は何をしますか？ {#faq_begin}

:::info
`SSCMA.begin()`を使用する場合、デフォルトではI2C（Wire）を使用して通信を行います。これは関数ヘッダーで定義されています：
```cpp
bool begin(TwoWire *wire = &Wire, int32_t rst = -1, uint16_t address = I2C_ADDRESS,
      uint32_t wait_delay = 2, uint32_t clock = SSCMA_IIC_CLOCK);
```
:::

## リソース

- [ATコマンドリファレンスマニュアル](https://github.com/Seeed-Studio/SSCMA-Micro/blob/dev/docs/protocol/at_protocol.md)
- [Seeed Arduino SSCMA - Arduinoライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)

## 参考資料

- [WiseEye2 AIプロセッサ - Himax](https://www.himax.com.tw/products/wiseeye-ai-sensing/wiseeye2-ai-processor/)
- [WiseEye2 技術ハイライト](https://himaxwiseeyeplus.github.io/)

## 貢献

私たちは、あらゆる形での貢献を歓迎します！このページに貢献したい場合は、以下の方法があります：

- [issue](https://github.com/Seeed-Studio/wiki-documents/issues)を開いてバグを報告したり、新機能を提案したりする
- [pull request](https://github.com/Seeed-Studio/wiki-documents/pulls)を作成してページの改善や修正を提出する
- ドキュメントを改善するために編集や追加を提案する
- 他のユーザーの質問に答えたり、サポートを提供する
- この製品を他の必要としている人々と共有する

始めるには、[貢献ガイドライン](https://raw.githubusercontent.com/Seeed-Studio/wiki-documents/docusaurus-version/CONTRIBUTING.md)を読んで、貢献方法やプルリクエストの提出プロセスについての詳細を確認してください。

すべての貢献に感謝し、より良いものにするためのご協力に感謝します！

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>