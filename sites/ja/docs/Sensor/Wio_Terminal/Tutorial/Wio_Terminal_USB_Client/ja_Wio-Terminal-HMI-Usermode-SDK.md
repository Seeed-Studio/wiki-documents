---
description: Windows/MacOSでWio Terminalを使用してHMIディスプレイを構築する
title: Windows/MacOSでWio Terminalを使用してHMIディスプレイを構築する
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-HMI-Usermode-SDK
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Windows/MacOSでWio Terminalを使用してHMIディスプレイを構築する

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png"/></div>

このWikiでは、[**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)を使用して、Windows/Linux/MacOS上で動作する**ユーザーモードSDK**を利用してHMIディスプレイを構築する方法を紹介します。これにより、Wio Terminalの産業用途での可能性が広がります！

Raspberry PiとWio Terminalを組み合わせてHMIディスプレイとして使用したい場合は、[こちらのWiki](https://wiki.seeedstudio.com/ja/Wio-Terminal-HMI/)をご覧ください。

## 必要なハードウェア

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Wio Terminal ファームウェア

まず、PCを使用してWio TerminalにArduinoプログラムをアップロードする必要があります。

- [**Seeed_Arduino_USBDISP**](https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP)ライブラリをこちらからダウンロードしてください。

以下の2つの**例**が含まれています：`NullFunctional` と `USBDisplayAndMouseControl`：

1. **Wio Terminalの画面リフレッシュレートを高めたい場合**は、**`NullFunctional`** をWio Terminalにアップロードしてください。
2. **Wio TerminalをUSBマウスとしても使用したい場合**は、**`USBDisplayAndMouseControl`** をWio Terminalにアップロードしてください。

:::note
**注意事項を必ずお読みください**。ユーザーモードSDKでは、`USBDISP().begin(true);` が `USBDISP().begin(true, true);` に変更されます。
:::

### `uf2` メソッド

利便性のために、Wio Terminalのファームウェアをアップロードするための`uf2`メソッドも提供しています。以下から`uf2`ファイルをダウンロードしてください。

- [NullFunctional](http://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/NullFunctional-sdk.uf2) の`uf2`ファイルをダウンロード。

- [USBDisplayAndMouseControl](https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/USBDisplayAndMouseControl-sdk.uf2) の`uf2`ファイルをダウンロード。

電源スイッチを素早く2回スライドさせてブートローダーモードに入ります。詳細については[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/#faq)も参照してください。

PCに`Arduino`という名前の外部ドライブが表示されます。ダウンロードした`uf2`ファイルを`Arduino`ドライブにドラッグしてください。

## ホストデバイスのファームウェア

今回はホストデバイスがPCになります。ユーザーモードSDKを使用してWio TerminalをHMIディスプレイとして使用する方法を見ていきましょう！

### MacOS/Linux OS - C++ SDK

- ファームウェアリポジトリをダウンロードします：

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp.git
```

- ユーザーモードSDKのパスに移動します：

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/rpusbdisp-drv/src
```

`rpusbdisp.cc`を開き、**Wio Terminalのファームウェア（NullFunctionalまたはUSBDisplayAndMouseControl）に応じてマクロを定義**します。使用しているものをアンコメントしてください：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros.png"/></div>

- ユーザーモードSDKのパスに戻ります：

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk
```

- ドライバを作成してビルドします：

```sh
make
```

:::note
`libusb`などの依存ライブラリが必要になる場合があります。MacOSでは[`brew`](https://brew.sh/)を、Linux OSでは`apt-get`を使用してインストールできます。
:::

- ビルドディレクトリに移動します：

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/build/
```

- デモを実行します：

```sh
sudo ./rpusbdispdemo --demo 1
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/demo.gif"/></div>

Wio Terminalが表示を開始し、グラフィックが描画されるのが確認できます。このソースコードは以下にあります：`seeed-linux-usbdisp/drivers/usermode-sdk/demo/src/main.cc`。

#### 複数画面

このC++ SDKは複数画面（複数のWio Terminal）もサポートしています。2画面を使用する場合は、デモ2を実行してください：

```sh
sudo ./rpusbdispdemo --demo 2
```

**注意：** 最大4画面までのデモが提供されています。アプリケーションの参考としてソースコードを確認してください。

### Windows - Python SDK

Windowsでは、Python上でユーザーモードSDKを実行できます！まず、Pythonをインストールし、依存ライブラリをインストールしてください：

:::note
**Pythonはクロスプラットフォームであり、このデモはWindows/Linux/MacOSのすべてで実行可能です。**
:::

```sh
pip3 install pyusb
```

- Pythonデモのパスに移動します：

```sh
cd ~/seeed-linux-usbdisp/drivers/python-demo/
```

- `simple-test.py`を開き、Wio Terminal内のファームウェアに応じて正しいマクロを定義し、保存します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros-2.png"/></div>

- Pythonデモを実行します：

```sh
python3 simple-test.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/simple-test.gif"/></div>

#### 複数画面

このPython SDKも複数画面（複数のWio Terminal）をサポートしています。`USBDisplay.py`を参考にしてください。

この例では、4つのWio Terminalをディスプレイとして使用しており、以下のような形式になっています：

```py
devices = list(usb.core.find(find_all=True, idVendor=0x2886, idProduct=0x802D))
dev1 = devices[0] # デバイス0
dev2 = devices[1] # デバイス1
dev3 = devices[2] # デバイス2
dev4 = devices[3] # デバイス3
```

## シンプルデモ

この例では、Python を使用して PC 側から Wio Terminal に画像を簡単に転送します。

- デモのパスに移動します:

```sh
cd ~/seeed-linux-usbdisp/drivers/python-demo/
```

- `image.jpg` をダウンロードし、`image-test.py` と同じ場所に保存します。

**注意:** 必ず **Wio Terminal のファームウェアに対応するマクロを選択してください**。そうしないとエラーが発生します。

- デモを実行します:

```sh
python3 image-test.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/image-demo.png"/></div>

## リソース

- [rpusbdisp インターフェースプロトコルドキュメント](https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/rpusbdisp_interface_protocol.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>