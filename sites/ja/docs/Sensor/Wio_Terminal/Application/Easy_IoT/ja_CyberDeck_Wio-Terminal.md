---
title: Cyber Desk on Wio Terminal using Platform IO, powered by Cursor AI
image: https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/CyberDesk_Wio-Terminal_1.gif
slug: /ja/CyberDeck_Wio-Terminal
last_update:
  date: 05/15/2025
  author: Eric Pan
---


# Wio Terminal PCモニター チュートリアル - サイバーパンクスタイル

- [**プロジェクト全体の概要**](#jump1)
- [**Cursor AI 使用チュートリアル**](#jump2)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/CyberDesk_Wio-Terminal.gif" style={{width:500, height:'auto'}}/></div>

## <span id="jump1"> プロジェクト概要 </span>

Wio Terminal をディスプレイ端末として使用し、コンピュータのさまざまなパフォーマンス指標をリアルタイムで監視するサイバーパンクスタイルのPCモニタリングシステムを作成します。

## ハードウェア要件

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)  
- USB-Cデータケーブル  
- Windowsを実行しているコンピュータ  

## ソフトウェア要件

- [VSCode](https://code.visualstudio.com/) + PlatformIOプラグイン  
- [Python 3.x](https://www.python.org/)
- Open Hardware Monitor（温度データを取得するため）  

## 詳細な手順

### 1. 環境設定

- Pythonパッケージをインストールします：
  ```bash
  pip install psutil pyserial GPUtil wmi pywin32
  ```

- VSCodeプラグインをインストールします：
  1. **PlatformIO IDE**プラグインをインストール  
  2. **OpenHardwareMonitor**をインストールして実行  

### 2. プロジェクトを作成

- PlatformIOプロジェクトを作成します：  
  1. VSCodeを開く  
  2. PlatformIOアイコンをクリック  
  3. 「新しいプロジェクト」を選択  
  4. 設定：  
     - **ボード:** "Seeed Wio Terminal"  
     - **フレームワーク:** "Arduino"  

### 3. コード実装

#### (a) `platformio.ini` を設定

```ini
[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
lib_deps = 
    Seeed_Arduino_LCD@2.1.0
```

#### (b) PCモニタリングスクリプト (`pc_stats.py`) を作成

```python
import psutil
import serial
import time
import GPUtil
import socket
import wmi
from datetime import datetime

def get_cpu_temp():
    try:
        w = wmi.WMI(namespace="root\wmi")
        temperature_info = w.MSAcpi_ThermalZoneTemperature()[0]
        temp = float(temperature_info.CurrentTemperature) / 10.0 - 273.15
        return max(0, min(temp, 100))
    except Exception as e:
        print(f"[WARN] CPU温度を読み取れません: {e}")
        return 0.0

# シリアルポートを設定（必要に応じてCOMポートを変更）
ser = serial.Serial('COM10', 115200)
while True:
    try:
        # システムデータを取得
        cpu_usage = psutil.cpu_percent()
        ram_usage = psutil.virtual_memory().percent
        cpu_temp = get_cpu_temp()
        disk_usage = psutil.disk_usage('/').percent
        
        # GPU情報を取得
        try:
            gpus = GPUtil.getGPUs()
            gpu_usage = gpus[0].load * 100
            gpu_temp = gpus[0].temperature
        except:
            gpu_usage = gpu_temp = 0
            
        # データをWio Terminalに送信
        data = f"{cpu_usage},{ram_usage},{cpu_temp},{gpu_usage},{gpu_temp},{disk_usage},{socket.gethostbyname(socket.gethostname())}\n"
        ser.write(data.encode())
        time.sleep(0.5)
        
    except KeyboardInterrupt:
        ser.close()
        break
```

#### (c) Wio Terminal コード (`main.cpp`) を作成

```cpp
#include <Arduino.h>
#include "TFT_eSPI.h"

TFT_eSPI tft;
int currentPage = 0;

// ボタンを定義
const int BTN_1 = WIO_KEY_A;
const int BTN_2 = WIO_KEY_B;
const int BTN_3 = WIO_KEY_C;

// PC状態構造体
struct PCStats {
    int cpuUsage = 0;
    int ramUsage = 0;
    float cpuTemp = 0.0;
    int diskUsage = 0;
    int gpuUsage = 0;
    float gpuTemp = 0.0;
    char ipAddress[16] = "0.0.0.0";
    unsigned long lastUpdate = 0;
} pcStats;

// 描画関数
void drawBox(int x, int y, int w, int h) {
    tft.drawRect(x, y, w, h, TFT_GREEN);
}

void drawTitle(const char* title) {
    tft.drawString("<<", 10, 10);
    tft.drawString(title, 40, 10);
    tft.drawString(">>", 270, 10);
    drawBox(5, 5, 310, 230);
    tft.drawLine(10, 30, 300, 30, TFT_GREEN);
}

// [その他の描画関数...]

void setup() {
    Serial.begin(115200);
    tft.begin();
    tft.setRotation(3);
    tft.setTextSize(2);
    
    pinMode(BTN_1, INPUT_PULLUP);
    pinMode(BTN_2, INPUT_PULLUP);
    pinMode(BTN_3, INPUT_PULLUP);
    
    drawPage(currentPage);
}

void loop() {
    // データを受信して解析
    if (Serial.available()) {
        String data = Serial.readStringUntil('\n');
        // データを解析...
    }
    
    // ボタン処理
    if (digitalRead(BTN_1) == LOW) {
        currentPage = 0;
        drawPage(currentPage);
        delay(200);
    }
    // [その他のボタン処理...]

    // ディスプレイを更新
    if (currentPage == 0) {
        drawSystemStatus();
        delay(100);
    }
}
```

### 4. プロジェクトを実行
1. コードをWio Terminalにアップロードします  
2. **OpenHardwareMonitor**を実行します  
3. Pythonスクリプトを実行します：
   ```bash
   python pc_stats.py
   ```
4. Wio Terminalのボタンを使用してページを切り替えます：  
   - **ボタンA:** システムステータス  
   - **ボタンB:** パフォーマンスモニタリング  
   - **ボタンC:** ネットワーク情報  

---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/cyberdesk_wio-terminal.jpg" style={{width:300, height:'auto'}}/></div>

## カスタマイズの提案

1. **表示スタイルの調整:** 色（例: `TFT_GREEN`）、レイアウト、フォントサイズを変更する。  
2. **アニメーションの追加:** サイバーパンク風の演出を強化するためにアニメーション効果を追加する。  
3. **新機能の追加:**  
   - ネットワーク速度の監視  
   - ディスクの読み書き速度  
   - システムプロセス情報  

---

## トラブルシューティング
1. **シリアル接続の問題:**  
   - COMポートが正しいか確認する  
   - ボーレート設定（115200）を確認する  

2. **温度読み取りの問題:**  
   - **OpenHardwareMonitor** が実行中であることを確認する  
   - 管理者権限を確認する  

3. **表示の問題:**  
   - 表示座標が境界を超えていないか確認する  
   - ゴースティングを防ぐために `clearArea` 関数を使用する  

---

## 高度な最適化

- データログ機能を追加する  
- 警告閾値を実装する  
- 表示テーマをカスタマイズする  
- グラフ表示を追加する  
- WiFi接続を有効にする  

このプロジェクトは初心者に最適であり、拡張の余地がたくさんあります。基本機能から始めて、徐々に必要な機能を追加してください。

---

## <span id="jump2">カーソルAI開発チュートリアル - Wio Terminal PCモニターを基に</span>

## 1. カーソルAIの基本

### 1.1 プロジェクトの初期化

1. カーソルエディタを開く。  
2. AIに作成したい内容を伝える:  
   > "PCのシステム情報をサイバーパンク風に表示するWio Terminalプロジェクトを作りたい。"  
3. AIが以下を支援:  
   - プロジェクト構造の提案  
   - 必要なファイルの作成  
   - 初期コードの提供  

---

### 1.2 コラボレーションモード

- **明確かつ具体的に説明する:** 一度に1つの機能に集中する。  
- **迅速にフィードバックを提供する:** 問題が発生した場合はAIに知らせる。  

---

## 2. 実践的なケーススタディ

### 2.1 基本的な表示機能の作成

**良いプロンプト:**  
> "CPU使用率、メモリ使用率、温度情報を表示するWio Terminalのプログラムを作るのを手伝ってください。"  

- AIが提供する内容:  
  - 必要なヘッダーファイル  
  - 基本的なコード構造  
  - 表示機能の実装  

---

### 2.2 特定の問題を解決する

**例:** 温度読み取りの問題を修正する  
**良いプロンプト:**  
> "CPU温度の読み取りが0になっています。どうすれば修正できますか？"  

- AIの回答:  
  1. 考えられる原因を分析  
  2. 複数の解決策を提供  
  3. 実装例を提示  

---

### 2.3 表示効果の最適化

**良いプロンプト:**  
> "サイバーパンク風の表示を最適化するにはどうすればいいですか？"  

- AIが以下を提供:  
  - デザインの提案  
  - 特定のコードの実装  

---

## 3. デバッグ技術

### 3.1 コードエラーの処理

- コンパイルエラーが発生した場合、エラーメッセージをAIにコピーする:  
  > "コンパイル中にこのエラーが発生しました: [エラーメッセージ]"  

- AIが以下を行う:  
  - エラー原因を分析  
  - 修正方法を提供  
  - 解決策を説明  

---

### 3.2 ロジックの問題の処理

**良い説明:**  
> "画面上の数字が更新時にゴースティングしています。どうすれば修正できますか？"  

- AIのプロセス:  
  1. 根本原因を理解する  
  2. `clearArea` 関数を提案する  
  3. 完全な解決策を提供する  

---

## 4. ベストプラクティス

### 4.1 適切な質問をする

1. **具体的に:**  
   - "特定の機能を実装したい。"  
2. **コンテキストを提供する:**  
   - "A機能を実装しましたが、次にB機能を追加したいです。"  
3. **問題を明確に説明する:**  
   - "特定の問題が発生しました。エラーメッセージは[エラー内容]です。"  

---

### 4.2 コードの最適化

1. **コードレビューを依頼する:**  
   - "このコードをレビューして改善点を提案してください。"  
2. **パフォーマンスの最適化:**  
   - "このコードの実行速度が遅いです。どうすれば最適化できますか？"  
3. **コードスタイルの改善:**  
   - "このコードをより読みやすく、保守しやすくするにはどうすればいいですか？"  

---

### 4.3 機能拡張

1. **段階的な開発:**  
   - "新しい機能を追加したいです。どこから始めればいいですか？"  
2. **モジュール化の依頼:**  
   - "この機能を将来の拡張のためにモジュール化するにはどうすればいいですか？"  

---

## 5. よくある落とし穴

### 5.1 避けるべきこと

- **不明確な問題:**  
  - ❌ 「コードが動きません。どうすればいいですか？」  
- **不完全な情報:**  
  - ❌ 「エラーがあります。直してください。」  
- **範囲が広すぎる:**  
  - ❌ 「プロジェクト全体を完成させるのを手伝ってください。」  

---

### 5.2 推奨される方法

- **明確な問題の説明:**  
  - ✅ 「CPU使用率の値が常に0です。これを修正するにはどうすればいいですか？」  
- **完全な情報を提供する:**  
  - ✅ 「このエラーが発生しました: [完全なエラー情報]。使用しているライブラリのバージョンは: ...」  
- **合理的なタスク分割:**  
  - ✅ 「まず基本的な表示を実装し、その後段階的に他の機能を追加しましょう。」  

---

## 6. 結論

- **段階的な開発:** 基本的な機能から始め、徐々に新しい機能を追加していきます。  
- **タイムリーな問題解決:** 問題が発生したらすぐに対処します。  
- **効果的なコミュニケーション:** ニーズを明確に説明し、コンテキストを提供します。  
- **継続的な最適化:** 定期的にコードを見直し、改善を行います。  

このプロジェクトを開発することで、Cursor AIが開発効率を大幅に向上させることを実感できます。重要なのは、AIと効果的に協力する方法を学ぶことです。明確な質問と適切に定義された要件が、より良い結果を得る助けとなります。