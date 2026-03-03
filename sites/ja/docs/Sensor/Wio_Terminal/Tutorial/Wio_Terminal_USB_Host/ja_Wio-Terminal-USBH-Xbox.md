---
description: Xbox
title: Xbox
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-USBH-Xbox
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio TerminalでXbox ONEコントローラーを使用する

このリポジトリでは、Wio TerminalでXbox ONEコントローラーを使用する方法を紹介します。この例を使用すると、Wio Terminalを使ってXboxコントローラーでゲームをプレイすることができます！

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200109132336.gif"/></div>

## 必要なもの

この例を実行するには、**USB OTGアダプター**と**USB to Serialモジュール**が必要です。OTGアダプターはXboxコントローラーを接続するために使用し、USB to SerialモジュールはWio Terminalからの出力を読み取るために使用します。

**注意:** この例ではXbox ONEコントローラーを使用しています。Xbox 360コントローラーやクローン製品を使用する場合は、例の`XBOXOLD.ino`を確認してください。

## 手順

1. `Arduino IDE`を使用してコードをWio Terminalにアップロードします。

2. コードのアップロードに使用したUSB Type-CケーブルをWio Terminalから取り外します。

3. **Xbox ONEコントローラー**を**OTGアダプター**に接続し、それをWio TerminalのUSB-Cポートに接続します。
      - **`Xbox ONE Controller`** -> **`OTG Adaptor`** -> **`Wio Terminal(Type-C Port)`**

4. **USB to Serialモジュール**を以下のようにWio Terminalに接続します：
      - **`TXD(USB to Serial Module)`** -> **`RXD(Pin 10 on Wio Terminal)`**
      - **`RXD(USB to Serial Module)`** -> **`TXD(Pin 8 on Wio Terminal)`**
      - **`3.3V(USB to Serial Module)`** -> **`3.3V(Pin 1 on Wio Terminal)`**
      - **`GND(USB to Serial Module)`** -> **`GND(Pin 6 on Wio Terminal)`**

5. USB to Serialモジュールをコンピュータに接続します。使用するUSB to Serialモジュールに応じて、**モジュール用のUSBドライバーをダウンロード**し、コンピュータが認識できるようにします。

6. Windowsユーザーの場合、デバイスマネージャーを開いて認識されているか確認します。新しい`COM`ポートが表示されるはずです。
      - Macユーザーの場合、ターミナルで`ls /dev/cu.*`を使用してモジュールの利用可能性を確認します。

7. シリアルデータを表示するには：
      - **Windows:** [PuTTY](https://www.putty.org/)をダウンロードしてインストールします。`Serial`を選択し、シリアルラインの`COM`をデバイスマネージャーに表示されたCOMポートに変更し、速度を`115200`に設定して「Open」を押します。ターミナルが表示されます。Xbox ONEコントローラーのボタンを押し始めると、シリアル出力が表示されるはずです！

      - **Mac:** ターミナルを開き、`brew install screen`を使用して`screen`をインストールします。インストール後、**`screen /dev/cu.usbserial 115200`**コマンドを使用します。`/dev/cu.usbserial`は上記で確認したものに一致させてください。Wio Terminalからのシリアル出力が表示されるはずです！

**重要な注意:** Wio TerminalのUSBポートはUSB用に使用されているため、別のプログラムをWio Terminalにアップロードするには、電源ボタンを2回押してブートローダーモードに入る必要があります（LEDが暗くなります）。その後、再びポートが表示されるはずです。

## USBホストの設定

Wio TerminalでUSBホストを有効にするには、2つのピンを設定する必要があります。`PIN_USB_HOST_ENABLE`を**LOW**に、`OUTPUT_CTR_5V`を**HIGH**に設定します。

これを行うには、`void setup()`内に以下のコードを追加するだけです：

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## 完全なコード

```cpp
#include <XBOXONE.h>
#define SerialDebug Serial1

USBHost UsbH;
XBOXONE Xbox(&UsbH);

void setup() {
  SerialDebug.begin(115200);
  if (UsbH.Init()) {
    SerialDebug.print(F("\r\nUSBホストが起動しませんでした"));
    while (1); // 停止
  }
  SerialDebug.print(F("\r\nXBOX USBライブラリが開始されました"));

  // Wio TerminalでUSBホストを有効にするためのピンを設定
  digitalWrite(PIN_USB_HOST_ENABLE, LOW);
  digitalWrite(OUTPUT_CTR_5V, HIGH);

}
void loop() {
  UsbH.Task();
  if (Xbox.XboxOneConnected) {
    if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500 || Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500 || Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500 || Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {
      if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500) {
        SerialDebug.print(F("LeftHatX: "));
        SerialDebug.print(Xbox.getAnalogHat(LeftHatX));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500) {
        SerialDebug.print(F("LeftHatY: "));
        SerialDebug.print(Xbox.getAnalogHat(LeftHatY));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500) {
        SerialDebug.print(F("RightHatX: "));
        SerialDebug.print(Xbox.getAnalogHat(RightHatX));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {
        SerialDebug.print(F("RightHatY: "));
        SerialDebug.print(Xbox.getAnalogHat(RightHatY));
      }
      SerialDebug.println();
    }

    if (Xbox.getButtonPress(L2) > 0 || Xbox.getButtonPress(R2) > 0) {
      if (Xbox.getButtonPress(L2) > 0) {
        SerialDebug.print(F("L2: "));
        SerialDebug.print(Xbox.getButtonPress(L2));
        SerialDebug.print("\t");
      }
      if (Xbox.getButtonPress(R2) > 0) {
        SerialDebug.print(F("R2: "));
        SerialDebug.print(Xbox.getButtonPress(R2));
        SerialDebug.print("\t");
      }
      SerialDebug.println();
    }

    // 振動効果を設定
    static uint16_t oldL2Value, oldR2Value;
    if (Xbox.getButtonPress(L2) != oldL2Value || Xbox.getButtonPress(R2) != oldR2Value) {
      oldL2Value = Xbox.getButtonPress(L2);
      oldR2Value = Xbox.getButtonPress(R2);
      uint8_t leftRumble = map(oldL2Value, 0, 1023, 0, 255); // トリガー値をバイトにマッピング
      uint8_t rightRumble = map(oldR2Value, 0, 1023, 0, 255);
      if (leftRumble > 0 || rightRumble > 0)
        Xbox.setRumbleOn(leftRumble, rightRumble, leftRumble, rightRumble);
      else
        Xbox.setRumbleOff();
    }

    if (Xbox.getButtonClick(UP))
      SerialDebug.println(F("Up"));
    if (Xbox.getButtonClick(DOWN))
      SerialDebug.println(F("Down"));
    if (Xbox.getButtonClick(LEFT))
      SerialDebug.println(F("Left"));
    if (Xbox.getButtonClick(RIGHT))
      SerialDebug.println(F("Right"));

    if (Xbox.getButtonClick(START))
      SerialDebug.println(F("Start"));
    if (Xbox.getButtonClick(BACK))
      SerialDebug.println(F("Back"));
    if (Xbox.getButtonClick(XBOX))
      SerialDebug.println(F("Xbox"));
    if (Xbox.getButtonClick(SYNC))
      SerialDebug.println(F("Sync"));

    if (Xbox.getButtonClick(L1))
      SerialDebug.println(F("L1"));
    if (Xbox.getButtonClick(R1))
      SerialDebug.println(F("R1"));
    if (Xbox.getButtonClick(L2))
      SerialDebug.println(F("L2"));
    if (Xbox.getButtonClick(R2))
      SerialDebug.println(F("R2"));
    if (Xbox.getButtonClick(L3))
      SerialDebug.println(F("L3"));
    if (Xbox.getButtonClick(R3))
      SerialDebug.println(F("R3"));


    if (Xbox.getButtonClick(A))
      SerialDebug.println(F("A"));
    if (Xbox.getButtonClick(B))
      SerialDebug.println(F("B"));
    if (Xbox.getButtonClick(X))
      SerialDebug.println(F("X"));
    if (Xbox.getButtonClick(Y))
      SerialDebug.println(F("Y"));
  }
  delay(1);
}
```