---
description: このガイドでは、Seeed Studio XIAO RS485 Expansion Board を素早くセットアップし、RS485 通信を開始する方法を説明します。
title: XIAO 用 RS485 Expansion Board
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.webp
slug: /XIAO-RS485-Expansion-Board
sku: 113991354
last_update:
  date: 10/20/2026
  author: Zeller
createdAt: '2024-11-26'
updatedAt: '2026-10-20'
url: https://wiki.seeedstudio.com/ja/XIAO-RS485-Expansion-Board/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO-RS485-Expansion-Board 入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.jpg" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>


:::tip

- V1.1 およびそれ以前のバージョンでは**ソフトウェア方向制御**を使用します。[ソフトウェアからソフトウェア方向の例](#ソフトウェア方向からソフトウェア方向)を参照してください。

:::

## 特長

- **Seeed Studio XIAO と互換**: Seeed Studio XIAO 開発ボード向けに設計されています。
- **長距離通信**: 最大 1,200 m（約 3,937 ft）までの RS-485 通信をサポートします。
- **5V または 12V DC 入力**: どちらの電源電圧にも対応し、オンボード回路で 12V を 5V に変換します。
- **2 つの 3 ピンターミナル**: RS-485 信号（A、B、GND）用と電源（INT、5V、12V）用のターミナルを分離しています。
- **コンパクト設計**: XIAO ボード約 2 枚分のサイズで、スペースに制約のあるプロジェクトに適しています。
- **選択可能な方向制御**: オンボードの 0 Ω 抵抗を設定することで、ハードウェア自動またはソフトウェア制御の RS-485 送受信切り替えを構成できます。出荷時はハードウェア自動方向制御に設定されています。
- **RX/TX 動作 LED**: データの受信および送信を表示します。
- **5V および 12V 電源 LED**: 対応する入力電圧の有無を表示します。

## ハードウェア概要

<Tabs>
<TabItem value="XIAO RS485 Expansion Board " label="XIAO RS485 Expansion Board " default>

- XIAO RS485 Expansion Board 表示図 V1.2 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_front_1.png" style={{width:1000, height:'auto'}}/></div>
<br/>
- XIAO RS485 Expansion Board 表示図 V1.2 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

### 準備するもの

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO RS485-Expansion-Board × 2</th>
   <th>Seeed Studio XIAO ESP32-C3 × 2 </th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/esp32.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>


### 接続回路図

- XIAO RS-485 Expansion Board V1.2 は TP8485E-SR トランシーバを使用しています。RS-485 信号は次のように XIAO のピンに割り当てられます：`RS485_TX` は D4、`RS485_RX` は D5、`RS485_DE` は D2。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_sch_1.png" style={{width:700, height:'auto'}}/></div>
<br/>
<div class="table-center">
  <table align="center">
    <tr>
        <th>2 枚の RS485 拡張ボードの接続</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_connect.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

- **5V OUT/IN スイッチ**: 5V 端子における電源の向きを制御します。このボードが他のデバイスに 5V を供給する場合は `OUT` に、端子からこのボードが 5V を受電する場合は `IN` に設定します。
- **120R スイッチ**: オンボードの 120 Ω 終端抵抗を RS-485 の A 線と B 線間に接続するには `ON` に、切り離すには `NC` に設定します。長距離配線では、バスの物理的な両端で終端を有効にし、中間のボードでは切り離したままにします。
- **INT**: 割り込み接続用の予備端子です。

:::tip

- V1.2 はデフォルトで**ハードウェア自動方向制御**に設定されているため、スケッチで D2 を使って方向を切り替える必要はありません。ソフトウェア方向制御を使用するには、オンボードの 0 Ω 抵抗の実装位置を変更してください。

:::

- ハードウェア自動方向用のゼロオーム抵抗の位置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS_485_Hardware.png" style={{width:600, height:'auto'}}/></div>

- ソフトウェア手動方向用のゼロオーム抵抗の位置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS_485_Software.png" style={{width:600, height:'auto'}}/></div>

## ソフトウェア概要

このプロジェクトでは、XIAO ESP32C3 は D4（GPIO6）と D5（GPIO7）を使用して RS485 拡張ボードと通信します。

### ハードウェア自動方向からハードウェア自動方向

ハードウェア自動方向制御を選択した場合、スケッチで DE ピンを制御する必要はありません。

**1. 送信側コード**

```cpp
#include <Arduino.h>

// Hardware -> Hardware: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Hardware sender ready");
  delay(500);
}

void loop() {
  Serial1.println("Hello from hardware sender"); // Send over the RS485 bus.
  Serial.println("Sent: Hello from hardware sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial.begin(115200)` はシリアルモニタ用の USB シリアル出力を開始します。
- `Serial1.begin(9600, SERIAL_8N1, D5, D4)` は 9600 ボーの RS-485 通信を開始します。D5 が RX、D4 が TX です。
- ボードが送信方向を自動制御するため、このスケッチでは D2 を使用しません。
- `Serial1.println()` は 1 秒ごとに 1 行のテキストを送信します。`Serial.println()` は USB 経由でローカルの送信状態を表示するだけで、受信側がメッセージを受信したことを確認するものではありません。

**2. 受信側コード**

```cpp
#include <Arduino.h>

// Hardware -> Hardware: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Hardware receiver ready");
  delay(500);
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial` は USB 経由でメッセージを表示します。`Serial1` は D5 を介して RS-485 トランシーバからデータを受信します。
- `Serial1.available()` は UART バッファ内に受信バイトが待機しているかどうかを確認します。
- `Serial1.readStringUntil('\n')` は改行またはタイムアウトまで読み込みます。`message.trim()` は `println()` によって送信される復帰文字を含む前後の空白を削除します。
- 結果のメッセージが空でない場合、`Serial.print()` と `Serial.println()` によって USB シリアルモニタに表示されます。
- ボードが方向を自動制御するため、このスケッチでは D2 を使用しません。

**3. テスト結果**

- 各 XIAO の USB シリアルモニタを開き、送受信されるメッセージを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.png" style={{width:600, height:'auto'}}/></div>

- データ転送中は、オンボードの TX および RX インジケータが点滅し、対応する動作を示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

### ハードウェア自動方向からソフトウェア方向

**1. 送信側コード**

```cpp
#include <Arduino.h>

// Hardware -> Software: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Software sender ready");
}

void loop() {
  Serial1.println("Hello from hardware sender"); // Send over the RS485 bus.
  Serial.println("Sent: Hello from hardware sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial.begin(115200)` は USB シリアル出力を開始します。`Serial1.begin(9600, SERIAL_8N1, D5, D4)` は D5 を RX、D4 を TX として RS-485 UART を 9600 ボーで開始します。
- このボードはハードウェア自動方向制御を使用するため、送信側は D2 を操作する必要はありません。
- `loop()` 内で、`Serial1.println()` は 1 秒ごとに RS-485 経由で 1 行のテキストを送信します。
- `Serial.println()` は USB を介してローカルの送信ステータスを表示します。受信側のシリアルモニタを確認して、受信を確認してください。

**2. 受信側コード**

ソフトウェアによる方向制御では、受信側で D2 を出力として設定し、LOW に保つことで受信モードを有効にします。

```cpp
#include <Arduino.h>

// Hardware -> Software: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 stays LOW to receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Hardware -> Software receiver ready");
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial` は USB シリアルモニタ用に使用され、`Serial1` は D5 を通じて RS-485 データを受信します。
- `pinMode(D2, OUTPUT)` は D2 を方向制御用に設定します。D2 を LOW に保つと受信モードが選択されます。
- `Serial1.available()` はバッファされたデータを確認します。`readStringUntil('\n')` は 1 行を読み取り、`trim()` は前後の空白を削除します。
- `message.length() > 0` によって空のメッセージを除外します。有効な受信テキストは USB シリアルモニタに表示されます。


**3. テスト結果**

- 送信側と受信側それぞれの XIAO で USB シリアルモニタを開き、送受信されたメッセージを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-r.png" style={{width:600, height:'auto'}}/></div>

- データ転送中、オンボードの TX および RX インジケータが点滅し、対応するアクティビティを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

### ソフトウェア方向制御からソフトウェア方向制御へ

ソフトウェアによる方向制御では、D2 が動作モードを選択します：LOW で受信、HIGH で送信です。

**1. 送信側コード**

```cpp
#include <Arduino.h>

// Software -> Software: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 controls transmit/receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Software -> Software sender ready");
}

void loop() {
  digitalWrite(D2, HIGH); // Enable RS485 transmission.
  delayMicroseconds(100); // Allow the transceiver to switch.
  Serial1.println("Hello from software sender"); // Send over the RS485 bus.
  Serial1.flush(true); // Wait for TX only; keep RX buffer intact.
  digitalWrite(D2, LOW); // Return to receive mode.
  Serial.println("Sent: Hello from software sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial` は USB を通してステータスを表示します。`Serial1` は D4 を通じて 9600 ボーで RS-485 データを送信します。
- D2 は方向を制御します：LOW で受信モード、HIGH で送信モードを選択します。
- 送信前に、スケッチは D2 を HIGH に設定し、トランシーバがモードを切り替えるのを短時間待ちます。
- `Serial1.println()` はテキストを送信します。`Serial1.flush(true)` は受信データをクリアせずに UART 送信の完了を待ちます。
- 送信後、スケッチは D2 を LOW に設定し、USB を通してローカルの送信ステータスを表示します。

**2. 受信側コード**

```cpp
#include <Arduino.h>

// Software -> Software: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 stays LOW to receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Software -> Software receiver ready");
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial.begin(115200)` は USB シリアル出力を開始します。`Serial1.begin(9600, SERIAL_8N1, D5, D4)` は D5 を RX、D4 を TX として RS-485 UART を開始します。
- D2 は方向制御用に設定され、トランシーバが受信モードのままになるよう LOW に保たれます。
- `Serial1.available()` がバッファされたデータを報告すると、`readStringUntil('\n')` が 1 行を読み取ります。
- `trim()` は前後の空白を削除します。メッセージが空でなければ、スケッチはそれを USB 経由で表示します。

**3. テスト結果**

- 送信側と受信側それぞれの XIAO で USB シリアルモニタを開き、送受信されたメッセージを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_r-t-r.png" style={{width:600, height:'auto'}}/></div>

- データ転送中、オンボードの TX および RX インジケータが点滅し、対応するアクティビティを示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

## リソース

- **📄[回路図]** [Seeed Studio XIAO-RS485-Expansion-Board Schematic V1.2](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS485-Breakout-Board-for-XIAO_V1.2_SCH_20260917.pdf)
- **🗃️[PCB 設計ファイル]** [Seeed Studio XIAO-RS485-Expansion-Board V1.2 Project](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS485-Breakout-Board-for-XIAO_V1.2_SCH&PCB_20260917.zip)
<br/>

- **📄[回路図]** [Seeed Studio XIAO-RS485-Expansion-Board Schematic V1.1](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.pdf)
- **🗃️[KiCad 回路図]** [Seeed Studio XIAO-RS485-Expansion-Board V1.1 SCH](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.kicad_sch)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
