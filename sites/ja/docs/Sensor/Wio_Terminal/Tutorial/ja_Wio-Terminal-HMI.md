---
description: Raspberry Pi 用 HMI ディスプレイを Wio Terminal を使用して構築する
title: Raspberry Pi 用 HMI ディスプレイを構築する
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-HMI
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Raspberry Pi 用 HMI ディスプレイを Wio Terminal を使用して構築する

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/Wio-Terminal-HMI.gif"/></div>

このウィキでは、[**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) を使用して [**Raspberry Pi**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html)、[**Nvidia Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html)、[**BeagleBone**](https://www.seeedstudio.com/beaglebone-c-954.html)、さらには [**Odyssey X86J4105**](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html) 用の **HMI (Human Machine Interface) USB ディスプレイ** として使用する方法を紹介します！これにより、Wio Terminal は HMI USB ディスプレイとして機能し、さらに強力になり、より多くの産業シナリオで使用できるようになります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"/></div>

**複数の Wio Terminal をホストデバイスに接続**することが可能です。理論上、USB ポートが十分にあれば、いくつでも接続できます！Raspberry Pi では、最大 4 台の Wio Terminal（RPI には 4 つの USB ポートがあります）を接続して、**拡張モード**および**ミラーモード**で HMI ディスプレイとして使用できます。詳細は以下をご覧ください！

## 必要なハードウェア

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Raspberry Pi**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html) / [**Nvidia Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) / [**BeagleBone**](https://www.seeedstudio.com/beaglebone-c-954.html) / [**Odyssey X86J4105**](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html)

## Wio Terminal ファームウェア

まず、PC を使用して Wio Terminal に Arduino プログラムをアップロードする必要があります。

- [**Seeed_Arduino_USBDISP**](https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP) ライブラリをこちらからダウンロードしてください。

2 つの**サンプル**、`NullFunctional` と `USBDisplayAndMouseControl` が用意されています：

1. **Wio Terminal の画面リフレッシュレートを高くしたい場合**は、**`NullFunctional`** を Wio Terminal にアップロードしてください。
2. **Wio Terminal を USB マウスとしても使用したい場合**は、**`USBDisplayAndMouseControl`** を Wio Terminal にアップロードしてください。

### `uf2` メソッド

利便性のために、Wio Terminal のファームウェアをアップロードするための `uf2` メソッドも提供しています。以下から `uf2` ファイルをダウンロードしてください。

- [NullFunctional](http://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/NullFunctional.uf2) の `uf2` ファイルをダウンロードしてください。

- [USBDisplayAndMouseControl](https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/USBDisplayAndMouseControl.uf2) の `uf2` ファイルをダウンロードしてください。

電源スイッチを素早く 2 回スライドさせてブートローダーモードに入ります。詳細については、[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/#faq) も参照してください。

PC に `Arduino` という名前の外部ドライブが表示されるはずです。ダウンロードした `uf2` ファイルを `Arduino` ドライブにドラッグしてください。

## ホストデバイスのファームウェア

次に、ホストデバイス（Raspberry Pi、Jetson Nano、または Odyssey X86J4105）でディスプレイドライバを設定します。

### Raspberry Pi

Raspberry Piの場合、まずすべての設定済みソースからパッケージ情報をダウンロードする必要があります：

```sh
sudo apt-get update
```

- **カーネルヘッダー、カーネル、build-essential、dkms**などの必要なパッケージをインストールするには、以下のコマンドをターミナルで実行します：

```sh
sudo apt-get install raspberrypi-kernel-headers raspberrypi-kernel build-essential dkms
```

- Raspberry Piを再起動します：

```sh
sudo reboot
```

- Raspberry Piにディスプレイドライバをダウンロードします：

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp
```

- ドライバを作成してビルドします：

```sh
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make & sudo make install
sudo reboot
```

- **設定ファイルをシステムの場所に移動**します：

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/
```

!!!注意
        選択可能な異なる画面構成がありますが、デフォルトでは1つのWio Terminalが1つの画面として設定されています。

- サービスを再起動します：

```sh
sudo service lightdm restart
```

- ディスプレイ設定のために以下のコマンドをターミナルで実行します：

```sh
sudo raspi-config
```

- Raspberry Piソフトウェア設定ツールが開いたら、以下の場所に移動します：

```sh
Display Options > Resolution
```

- "default"以外の解像度を選択します：

```sh
例: DMT Mode 82 1920x1080 60Hz 16:9  
```

- Raspberry Piの電源を切ります：

```sh
sudo poweroff
```

- Wio TerminalをRaspberry PiのUSBポートに接続します。

- Raspberry Piの電源を入れます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-new.png"/></div>

これで、Wio TerminalにRaspberry Piのデスクトップが表示されるはずです！もしWio Terminalに`USBDisplayAndMouseControl`ファームウェアをロードしている場合、ボタンや5方向スイッチを使ってRaspberry Piのマウスを操作することもできます。

!!!注意
    このバージョンのUSBディスプレイドライバはホットスワップをサポートしていません。

### Jetson Nano、Beaglebone、および Odyssey X86

Nvidia Jetson NanoおよびOdyssey X86J4105（Ubuntu）の場合、以下のように**Linuxドライバ**をインストールします。ターミナルで以下を実行してください：

**注意:** Odyssey X86J4105については、UbuntuおよびDebian OSでのみテストされています。他のLinux OSでは動作しない可能性があります。

```sh
sudo apt install --reinstall linux-headers-$(uname -r)
```

- ディスプレイドライバをダウンロードします：

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp
```

- ドライバを作成してビルドします：

```sh
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make & sudo make install
sudo reboot
```

- **設定ファイルをシステムの場所に移動**します：

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/
```

- サービスを再起動します：

```sh
sudo service lightdm restart
```

- Wio TerminalをデバイスのUSBポートに接続します！

## 画面表示の設定

前述のように、Raspberry Piに**複数**のWio Terminalを接続することができ、それにより`10-disp.conf`ファイルを編集して画面の配置（画面の位置）を設定できます。以下のように3つの他の画面拡張設定を提供しています。

### 画面設定 1

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-1-removebg.png"/></div>

```py
# 4画面拡張
# パターン: 1  2  
#          : 3  4
```

これは`seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`内の`10-disp-1.conf`です。このファイルを`/usr/share/X11/xorg.conf.d/`にコピーし、`10-disp.conf`という名前にします：

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp-1.conf /usr/share/X11/xorg.conf.d/10-disp.conf
```

### 画面設定 2

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-2-removebg.png"/></div>

```py
# 4画面拡張
# パターン: 1
#          : 2  3  4
```

これは`seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`内の`10-disp-2.conf`です。

### 画面設定 3

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-3-removebg.png"/></div>

```py
# 4画面拡張
# パターン: 1  2  3  4
```

これは`seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`内の`10-disp-3.conf`です。

### 画面設定 4

ミラーモード：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-4.png"/></div>

```py
# 4画面クローン表示
```

これは`seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`内の`10-disp-4.conf`です。

## PtQtGraphの例

さらに、[**PyQtGraph**](http://www.pyqtgraph.org/)を使用して、Wio TerminalのGUIを簡単に描画することができます！

- まず、PyQtGraphの依存関係をインストールしましょう：

```sh
sudo apt update
sudo apt install python3 python3-distutils python3-pyqt5 python3-pip python3-numpy -y
sudo pip3 install pyqtgraph
```

- 画面用のマクロをエクスポートします：

```sh
export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb1
```

**注意:** `fb1`は最初の画面を指し、`fb2`は2番目、`fb3`は3番目、そしてその後も同様です。`echo $QT_QPA_PLATFORM`を使用してマクロを確認することができます。

- 以下のPyQtGraphの例のPythonファイルをコピーし、`test.py`という名前で保存してください：

```py
# -*- coding: utf-8 -*-
"""
一般的な画像解析ツールを示します。
ここで示される多くの機能は、ImageViewウィジェットによってすでに提供されていますが、
ここではユーザーインターフェースをより細かく制御できる低レベルのアプローチを提示します。
"""
import pyqtgraph as pg
from pyqtgraph.Qt import QtCore, QtGui
import numpy as np


# 画像データを列優先ではなく行優先として解釈
pg.setConfigOptions(imageAxisOrder='row-major')

pg.mkQApp()
win = pg.GraphicsLayoutWidget()
win.setWindowTitle('pyqtgraph example: Image Analysis')

# 画像を表示するためのプロットエリア (ViewBox + 軸)
p1 = win.addPlot(title="")

# 画像データを表示するためのアイテム
img = pg.ImageItem()
p1.addItem(img)

# 画像領域を選択するためのカスタムROI
roi = pg.ROI([-8, 14], [6, 5])
roi.addScaleHandle([0.5, 1], [0.5, 0.5])
roi.addScaleHandle([0, 0.5], [0.5, 0.5])
p1.addItem(roi)
roi.setZValue(10)  # ROIを画像の上に描画するように設定

# 等高線描画
iso = pg.IsocurveItem(level=0.8, pen='g')
iso.setParentItem(img)
iso.setZValue(5)

# コントラスト/カラー制御
hist = pg.HistogramLUTItem()
hist.setImageItem(img)
win.addItem(hist)

# 等高線レベルを設定するためのドラッグ可能な線
isoLine = pg.InfiniteLine(angle=0, movable=True, pen='g')
hist.vb.addItem(isoLine)
hist.vb.setMouseEnabled(y=False) # ユーザー操作を少し簡単にする
isoLine.setValue(0.8)
isoLine.setZValue(1000) # 等高線をコントラスト制御の上に配置

# ROIデータを表示するための別のプロットエリア
win.nextRow()
p2 = win.addPlot(colspan=2)
p2.setMaximumHeight(250)
win.resize(800, 800)
win.show()


# 画像データを生成
data = np.random.normal(size=(200, 100))
data[20:80, 20:80] += 2.
data = pg.gaussianFilter(data, (3, 3))
data += np.random.normal(size=(200, 100)) * 0.1
img.setImage(data)
hist.setLevels(data.min(), data.max())

# スムーズ化されたデータから等高線を構築
iso.setData(pg.gaussianFilter(data, (2, 2)))

# 画像の位置とスケールを設定
img.scale(0.2, 0.2)
img.translate(-50, 0)

# 画像に合わせてズーム
p1.autoRange()  


# ユーザー操作を処理するためのコールバック
def updatePlot():
    global img, roi, data, p2
    selected = roi.getArrayRegion(data, img)
    p2.plot(selected.mean(axis=0), clear=True)

roi.sigRegionChanged.connect(updatePlot)
updatePlot()

def updateIsocurve():
    global isoLine, iso
    iso.setLevel(isoLine.value())

isoLine.sigDragged.connect(updateIsocurve)

def imageHoverEvent(event):
    """マウスカーソルの下にある位置、ピクセル、値を表示します。
    """
    if event.isExit():
        p1.setTitle("")
        return
    pos = event.pos()
    i, j = pos.y(), pos.x()
    i = int(np.clip(i, 0, data.shape[0] - 1))
    j = int(np.clip(j, 0, data.shape[1] - 1))
    val = data[i, j]
    ppos = img.mapToParent(pos)
    x, y = ppos.x(), ppos.y()
    p1.setTitle("pos: (%0.1f, %0.1f)  pixel: (%d, %d)  value: %g" % (x, y, i, j, val))

# 画像にカスタムホバー関数を使用するようにモンキーパッチを適用。
# これは一般的には推奨されません（ImageItemをサブクラス化するべきです）が、
# このような非常に単純な使用では機能します。
img.hoverEvent = imageHoverEvent


## Qtイベントループを開始（インタラクティブモードまたはpysideを使用している場合を除く）。
if __name__ == '__main__':
    import sys
    if (sys.flags.interactive != 1) or not hasattr(QtCore, 'PYQT_VERSION'):
        QtGui.QApplication.instance().exec_()
```

- この例を実行します：

```sh
python3 test.py
```

- PyQtGraphのスクリプトでマウスがクラッシュすることがあるかもしれません。その場合は、Raspberry Piのデスクトップを無効にすることで解決できます。`sudo raspi-config` -> `Boot options` -> `Desktop/CLI` -> `Console Autologin`を選択してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/raspi.png"/></div>

これでPyQtGraphのスクリプトを実行すると、問題なく動作します！

<div align="center"><img width = "600" src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"/></div>

異なる画面で異なるPyQtGraphスクリプトを以下のように実行することができます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/4qt.jpg"/></div>

## Usermod SDK

このUSBディスプレイドライバはPCでも動作します。詳細については、**[こちらのWiki](https://wiki.seeedstudio.com/ja/Wio-Terminal-HMI-Usermode-SDK/)** をご確認ください。

## さらなる開発

より大きな画面が必要ですか？より高い解像度が必要ですか？または、より高いリフレッシュレートが必要ですか？詳細については、produce@seeed.cc にお問い合わせください。

## リソース

- [PyQtGraph公式ドキュメント](https://pyqtgraph.readthedocs.io/en/latest/)
- [Screen xorg.conf設定ドキュメント](https://www.x.org/releases/current/doc/man/man5/xorg.conf.5.xhtml)

## FAQ

**Q.** Wio Terminal をRaspberry Piに接続してRaspberry Piを起動すると、Wio Terminal のLCDが完全に白くなります。

**A.** Wio Terminal をRaspberry Piに接続したまま、次のディレクトリに移動してください：`seeed-linux-usbdisp/drivers/linux-driver`。その後、以下のコマンドを実行してください：`make & sudo make install`。その後、`sudo reboot` を実行してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>