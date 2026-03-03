---
description: マウス
title: マウス
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-USBH-Mouse
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio TerminalでUSBマウスを使用する

このリポジトリでは、Wio TerminalでUSBマウスを使用する方法を紹介します。この例を実装することで、マウスからWio Terminalにデータを入力することができます！

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108160611.gif"/></div>

## 必要条件

この例を実行するには、**USB OTGアダプタ**と**USB to Serialモジュール**が必要です。OTGアダプタはマウスを接続するために使用され、USB to SerialモジュールはWio Terminalからの出力を読み取るために使用されます。

## 手順

1. `Arduino IDE`を使用してコードをWio Terminalにアップロードします。

2. コードをアップロードするために使用したUSB Type-CケーブルをWio Terminalから取り外します。

3. **マウス**を**OTGアダプタ**に接続し、それをWio TerminalのUSB-Cポートに接続します。
      - **`マウス`** -> **`OTGアダプタ`** -> **`Wio Terminal(Type-Cポート)`**

4. **USB to Serialモジュール**を以下のようにWio Terminalに接続します：
      - **`TXD(USB to Serialモジュール)`** -> **`RXD(Wio Terminalのピン10)`**
      - **`RXD(USB to Serialモジュール)`** -> **`TXD(Wio Terminalのピン8)`**
      - **`3.3V(USB to Serialモジュール)`** -> **`3.3V(Wio Terminalのピン1)`**
      - **`GND(USB to Serialモジュール)`** -> **`GND(Wio Terminalのピン6)`**

5. USB to Serialモジュールをコンピュータに接続します。使用するUSB to Serialモジュールに応じて、モジュールを認識できるように**USBドライバをダウンロード**してください。

6. Windowsユーザーの場合、デバイスマネージャを開いて認識されているか確認します。新しい`COM`ポートが表示されるはずです。
      - Macユーザーの場合、ターミナルで`ls /dev/cu.*`を使用してモジュールの利用可能性を確認します。

7. シリアルデータを表示するには：
      - **Windows:** [PuTTY](https://www.putty.org/)をダウンロードしてインストールします。`Serial`を選択し、シリアルラインの`COM`をデバイスマネージャに表示されたCOMポートに変更します。また、速度を`115200`に変更して「Open」を押します。ターミナルが表示されます。マウスを押したり動かしたりすると、シリアル出力が表示されるはずです！

      - **Mac:** ターミナルを開き、`brew install screen`を使用して`screen`をインストールします。インストール後、**`screen /dev/cu.usbserial 115200`**コマンドを使用します。`/dev/cu.usbserial`は上記で確認したものと一致する必要があります。Wio Terminalからのシリアル出力が表示されるはずです！

**重要な注意:** Wio TerminalのUSBポートがUSB用に使用されているため、別のプログラムをWio Terminalにアップロードするには、電源ボタンを2回押してブートローダーモードに入る必要があります（LEDが暗くなります）。その後、ポートが再び表示されるはずです。

## USBホストの設定

Wio TerminalでUSBホストを有効にするには、2つのピンを設定する必要があります。`PIN_USB_HOST_ENABLE`を**LOW**に設定し、`OUTPUT_CTR_5V`を**HIGH**に設定します。

以下のコードを`void setup()`に追加することで簡単に設定できます：

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## 完全なコード

```cpp
#include <MouseController.h>
#define SerialDebug Serial1

uint32_t lastUSBstate = 0;

// USBコントローラーを初期化
USBHost usb;

// USBにマウスコントローラーを接続
MouseController mouse(usb);

// マウスボタンの状態を保持する変数
bool leftButton = false;
bool middleButton = false;
bool rightButton = false;

// マウスの移動を検知する関数
void mouseMoved() {
  SerialDebug.print("Move: ");
  SerialDebug.print(mouse.getXChange());
  SerialDebug.print(", ");
  SerialDebug.println(mouse.getYChange());
}

// ボタンが押された状態でのマウス移動を検知する関数
void mouseDragged() {
  SerialDebug.print("DRAG: ");
  SerialDebug.print(mouse.getXChange());
  SerialDebug.print(", ");
  SerialDebug.println(mouse.getYChange());
}

// マウスボタンの押下を検知する関数
void mousePressed() {
  SerialDebug.print("Pressed: ");
  if (mouse.getButton(LEFT_BUTTON)) {
    SerialDebug.print("L");
    leftButton = true;
  }
  if (mouse.getButton(MIDDLE_BUTTON)) {
    SerialDebug.print("M");
    middleButton = true;
  }
  if (mouse.getButton(RIGHT_BUTTON)) {
    SerialDebug.print("R");
    rightButton = true;
  }
  SerialDebug.println();
}

// マウスボタンの解放を検知する関数
void mouseReleased() {
  SerialDebug.print("Released: ");
  if (!mouse.getButton(LEFT_BUTTON) && leftButton == true) {
    SerialDebug.print("L");
    leftButton = false;
  }
  if (!mouse.getButton(MIDDLE_BUTTON) && middleButton == true) {
    SerialDebug.print("M");
    middleButton = false;
  }
  if (!mouse.getButton(RIGHT_BUTTON) && rightButton == true) {
    SerialDebug.print("R");
    rightButton = false;
  }
  SerialDebug.println();
}

void setup()
{
  SerialDebug.begin( 115200 );
  SerialDebug.println("Mouse Controller Program started");

  if (usb.Init())
      SerialDebug.println("USB host did not start.");

  delay( 20 );

  // Wio TerminalでUSBホストを有効にするためのピン設定
  digitalWrite(PIN_USB_HOST_ENABLE, LOW);
  digitalWrite(OUTPUT_CTR_5V, HIGH);

}

void loop()
{
  // USBタスクを処理
  usb.Task();

  uint32_t currentUSBstate = usb.getUsbTaskState();
  if (lastUSBstate != currentUSBstate) {
    SerialDebug.print("USB state changed: 0x");
    SerialDebug.print(lastUSBstate, HEX);
    SerialDebug.print(" -> 0x");
    SerialDebug.println(currentUSBstate, HEX);
    switch (currentUSBstate) {
      case USB_ATTACHED_SUBSTATE_SETTLE: SerialDebug.println("Device Attached"); break;
      case USB_DETACHED_SUBSTATE_WAIT_FOR_DEVICE: SerialDebug.println("Detached, waiting for Device"); break;
      case USB_ATTACHED_SUBSTATE_RESET_DEVICE: SerialDebug.println("Resetting Device"); break;
      case USB_ATTACHED_SUBSTATE_WAIT_RESET_COMPLETE: SerialDebug.println("Reset complete"); break;
      case USB_STATE_CONFIGURING: SerialDebug.println("USB Configuring"); break;
      case USB_STATE_RUNNING: SerialDebug.println("USB Running"); break;
    }
    lastUSBstate = currentUSBstate;
  }
}
```