---
description: reTerminal-FAQ
title: USBフラッシュドライブからOSを起動する方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Boot_OS_from_USB_flash_drive
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q7: How can I boot an OS from USB Flash Drive -->

以下の手順に従って、USBフラッシュドライブからOSを起動できます。ここでは起動順序を**USB起動 > eMMC起動**に変更します。これは、USB起動が失敗した場合、eMMCから起動することを意味します。

:::caution
この方法では、ホストPCとして**Ubuntu**または**MacOS**を使用する必要があります。
:::

- **ステップ1.** 4つのゴムカバーを取り外し、その下にある4つのネジを外してreTerminalの背面シェルを開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

- **ステップ2.** 2つのネジを取り外してヒートシンクを分解し、残りの4つのネジも取り外してケース全体を分解します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

- **ステップ3.** 以下の図に従って**ブートモードスイッチ**を下に倒します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

- **ステップ4.** reTerminalに接続した後、ホストPC内で**ターミナル**ウィンドウを開き、以下を入力して**パッケージリスト**を更新します

```sh
sudo apt update
```

- **ステップ5.** 以下のコマンドで**Git**をインストールします

```sh
sudo apt install git
```

- **ステップ6.** 日付が正しく設定されていない場合、Gitがエラーを発生させる可能性があります。以下を入力してこれを修正します

```sh
sudo date MMDDhhmm
```

**注意:** **MM**は月、**DD**は日、**hh**と**mm**はそれぞれ時間と分です。

- **ステップ7.** **usbboot**ツールリポジトリをクローンして入ります

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **ステップ8.** 以下を入力して**libusb**をインストールします

```sh
sudo apt install libusb-1.0-0-dev
```

- **ステップ9.** usbbootツールをビルドしてインストールします

```sh
make
```

- **ステップ10.** ブートローダー設定ファイルを開きます

```sh
sudo nano recovery/boot.conf
```

- **ステップ11.** **BOOT_ORDER**フィールドを以下に変更します

```sh
BOOT_ORDER=0xf15
```

reTerminalのデフォルトは、クローンされたrecovery/boot.confとは異なることに注意してください。
reTerminalのデフォルトは以下の通りです。
必要に応じてrecovery/boot.confを書き換えてください。

```
[all]
BOOT_UART=0
WAKE_ON_GPIO=0
POWER_OFF_ON_HALT=1

# Try  SD- > USB PCIe MSD -> USB 2.0 BCM XHCI -> Network ->  Loop
BOOT_ORDER=0xf2541

# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

**注意:** ここでUSB起動が失敗した場合、eMMC起動に切り替わります

- **ステップ12.** 以下を実行してEEPROMイメージを更新します

```sh
cd recovery
./update-pieeprom.sh
```

pieeprom.binファイルがCompute Module 4にフラッシュする準備ができました

- **ステップ13.** **usbboot**ディレクトリに戻ります

```sh
cd ..
```

- **ステップ14.** usbbootツールを実行してブートローダーEEPROMをフラッシュします

```sh
sudo ./rpiboot -d recovery
```

- **ステップ15.** USB Type-CケーブルでreTerminalをPCに接続します

これで、必要なファイルをreTerminalに転送するのに数秒かかります。

- **ステップ16.** reTerminalの電源を切り、ブートモードスイッチを元の位置に戻し、reTerminalシェルを組み立てます

- **ステップ17.** 適切なOSが入った起動可能なUSBフラッシュドライブを接続し、reTerminalのUSBポートの1つに接続してreTerminalの電源を入れます

これで、接続されたUSBドライブからreTerminalが起動するのが確認できます