---
description: キーボード
title: キーボード
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-USBH-Keyboard
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio TerminalでUSBキーボードを使用する

このリポジトリでは、Wio TerminalでUSBキーボードを使用する方法を紹介します。この例を実装することで、キーボードからWio Terminalにデータを入力することができます！

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108143407.gif"/></div>

## 必要なもの

この例を実行するには、**USB OTGアダプタ**と**USB to Serialモジュール**が必要です。OTGアダプタはキーボードを接続するために使用し、USB to SerialモジュールはWio Terminalからの出力を読み取るために使用します。

## 手順

1. `Arduino IDE`を使用してコードをWio Terminalにアップロードします。

2. コードをアップロードするために使用したUSB Type-CケーブルをWio Terminalから取り外します。

3. **キーボード**を**OTGアダプタ**に接続し、それをWio TerminalのUSB-Cポートに接続します。
      - **`キーボード`** -> **`OTGアダプタ`** -> **`Wio Terminal(Type-Cポート)`**

4. **USB to Serialモジュール**を以下のようにWio Terminalに接続します：
      - **`TXD(USB to Serialモジュール)`** -> **`RXD(Wio Terminalのピン10)`**
      - **`RXD(USB to Serialモジュール)`** -> **`TXD(Wio Terminalのピン8)`**
      - **`3.3V(USB to Serialモジュール)`** -> **`3.3V(Wio Terminalのピン1)`**
      - **`GND(USB to Serialモジュール)`** -> **`GND(Wio Terminalのピン6)`**

5. USB to Serialモジュールをコンピュータに接続します。使用するUSB to Serialモジュールに応じて、コンピュータが認識できるように**USBドライバをダウンロード**してください。

6. Windowsユーザーの場合、デバイスマネージャを開いて認識されているか確認します。新しい`COM`ポートが表示されるはずです。
      - Macユーザーの場合、ターミナルで`ls /dev/cu.*`を使用してモジュールの利用可能性を確認します。

7. シリアルデータを表示するには：
      - **Windows:** [PuTTY](https://www.putty.org/)をダウンロードしてインストールします。`Serial`を選択し、シリアルラインの`COM`をデバイスマネージャに表示されたCOMに変更し、速度を`115200`に設定して「Open」を押します。ターミナルが表示されます。接続されたキーボードで入力を開始すると、シリアル出力が表示されるはずです！

      - **Mac:** ターミナルを開き、`brew install screen`を使用して`screen`をインストールします。インストール後、**`screen /dev/cu.usbserial 115200`**コマンドを使用します。`/dev/cu.usbserial`は上記で確認したものに一致させてください。Wio Terminalからのシリアル出力が表示されるはずです！

**重要な注意点:** Wio TerminalのUSBポートがUSB用に使用されているため、別のプログラムをWio Terminalにアップロードするには、電源ボタンを2回押してブートローダーモードに入る必要があります（LEDが暗くなります）。その後、再びポートが表示されるはずです。

## USBホストの設定

Wio TerminalでUSBホストを有効にするには、2つのピンを設定する必要があります。`PIN_USB_HOST_ENABLE`を**LOW**に、`OUTPUT_CTR_5V`を**HIGH**に設定します。

これを簡単に行うには、以下のコードを`void setup()`に追加します：

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## 完全なコード

```cpp
#include <KeyboardController.h>
#define SerialDebug Serial1


// USBコントローラを初期化
USBHost usb;

// USBにキーボードコントローラを接続
KeyboardController keyboard(usb);

void printKey();

// この関数はキー押下を検出します
void keyPressed() {
  SerialDebug.print("押下:  ");
  printKey();
}

// この関数はキーリリースを検出します
void keyReleased() {
  SerialDebug.print("リリース: ");
  printKey();
}

void printKey() {
  // getOemKey()はキーに関連付けられたOEMコードを返します
  SerialDebug.print(" キー:");
  SerialDebug.print(keyboard.getOemKey());

  // getModifiers()は修飾キーのビットフィールドを返します
  int mod = keyboard.getModifiers();
  SerialDebug.print(" 修飾:");
  SerialDebug.print(mod);

  SerialDebug.print(" => ");

  if (mod & LeftCtrl)
    SerialDebug.print("左Ctrl ");
  if (mod & LeftShift)
    SerialDebug.print("左Shift ");
  if (mod & Alt)
    SerialDebug.print("Alt ");
  if (mod & LeftCmd)
    SerialDebug.print("左Cmd ");
  if (mod & RightCtrl)
    SerialDebug.print("右Ctrl ");
  if (mod & RightShift)
    SerialDebug.print("右Shift ");
  if (mod & AltGr)
    SerialDebug.print("AltGr ");
  if (mod & RightCmd)
    SerialDebug.print("右Cmd ");

  // getKey()はOEMキーと修飾キーを組み合わせたASCII変換を返します
  SerialDebug.write(keyboard.getKey());
  SerialDebug.println();
}

uint32_t lastUSBstate = 0;

void setup()
{
  SerialDebug.begin( 115200 );
  SerialDebug.println("キーボードコントローラプログラム開始");

  if (usb.Init())
   SerialDebug.println("USBホストが開始されませんでした。");

  delay( 20 );

  // USBホストを有効にするためのピンを設定
  digitalWrite(PIN_USB_HOST_ENABLE, LOW);
  digitalWrite(OUTPUT_CTR_5V, HIGH);

}

void loop()
{
  // USBタスクを処理
  usb.Task();

  uint32_t currentUSBstate = usb.getUsbTaskState();
  if (lastUSBstate != currentUSBstate) {
    SerialDebug.print("USB状態が変更されました: 0x");
    SerialDebug.print(lastUSBstate, HEX);
    SerialDebug.print(" -> 0x");
    SerialDebug.println(currentUSBstate, HEX);
    switch (currentUSBstate) {
      case USB_ATTACHED_SUBSTATE_SETTLE: SerialDebug.println("デバイスが接続されました"); break;
      case USB_DETACHED_SUBSTATE_WAIT_FOR_DEVICE: SerialDebug.println("切断され、デバイスを待機中"); break;
      case USB_ATTACHED_SUBSTATE_RESET_DEVICE: SerialDebug.println("デバイスをリセット中"); break;
      case USB_ATTACHED_SUBSTATE_WAIT_RESET_COMPLETE: SerialDebug.println("リセット完了"); break;
      case USB_STATE_CONFIGURING: SerialDebug.println("USB設定中"); break;
      case USB_STATE_RUNNING: SerialDebug.println("USB実行中"); break;
    }
    lastUSBstate = currentUSBstate;
  }
}
```