---
description: XIAO ESP32C6 用 MicroPython
title: XIAO ESP32C6 と MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32c6_micropython
last_update:
  date: 08/30/2023
  author: Hendra
---

# XIAO ESP32C6 用 Micropython

MicroPython は、Python 3 プログラミング言語の軽量で効率的な実装であり、Python 標準ライブラリの小さなサブセットを含み、マイクロコントローラーや制約のある環境で動作するように最適化されています。

2014年の初回リリース以来、micropython は ESP32 シリーズを含む多くのマイクロコントローラーをサポートしてきましたが、現在のところ ESP32C6 チップを公式にはサポートしていません。このファームウェアは自己コンパイルされたものであり、公式ファームウェアは既に開発中です。しばらくお待ちください。

このページでは、micropython のシンプルで使いやすい構文を使用して XIAO ESP32C6 の機能を使用する方法をガイドします。

## ハードウェアの準備

ここでは Seeed Studio XIAO ESP32C6 ボードを使用しています。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991254-seeedxiao-esp32c6-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## ソフトウェアの準備

このガイドでは、**Windows 10** と Thonny IDE および esptool を使用します。esptool を使用するために、Windows OS に Python 3 環境をインストールしてください。開始する前に、ファームウェアをダウンロードし、Thonny をインストールしてください。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>ファームウェアとサンプルコード</th>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/ESP32C6-MicroPy/XIAO_ESP32C6_Micropython.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 大変感謝いたします

<strong><font color={'8DC215'} size={"3"}>このwikiで使用されているXIAO ESP32C6 ボード用に設計されたファームウェアは、私たちの友人であるZhishuo Songによって作成されました。彼に心から感謝しています。</font></strong>

## はじめに

このファームウェアはXIAO ESP32C6 MicroPython プログラミング専用に設計されています。まずファームウェアをフラッシュし、その後例を使用します。

### ステップ1. ファームウェアのフラッシュ

デバイスマネージャーを開いてUSBシリアルポートアドレスを確認します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

ダウンロードしたzipファイルを展開し、フォルダに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205037972.png" alt="pir" width={600} height="auto" /></p>

パスボックスをクリックして「CMD」と入力し、Enterキーを押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205105289.png" alt="pir" width={600} height="auto" /></p>

cmdターミナルに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022204711119.png" alt="pir" width={600} height="auto" /></p>

pipコマンドを使用してesptoolをインストールします（Python 3が既にインストールされていることを確認してください）

```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

このコマンドを使用してXIAO ESP32C6のフラッシュメモリを消去します

```cpp
esptool.py --port COMXX --chip esp32c6 erase_flash
```

次のコマンドを使用してmicropythonファームウェアのインストールを進めてください

```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32c6  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 ESP32C6_MicroPython.bin
```

:::tip
PCのCOMポート番号でCOMXXを変更してください
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205457866.png" alt="pir" width={600} height="auto" /></p>

### ステップ2. サンプルコードをアップロードする

次に、サンプルコードをXIAO ESP32C6の内蔵フラッシュメモリにアップロードします。

この部分では、thonny IDEを使用して、まずポートを設定します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205437800.png" alt="pir" width={600} height="auto" /></p>

`blinker.py`サンプルプログラムを実行します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220104960.png" alt="pir" width={600} height="auto" /></p>

## WiFiからNTPで現在時刻を取得する

### ステップ1: ThonnyでNTP get now time from wifi`wifi_Ntp.py`ファイルを開く

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220645986.png" alt="pir" width={600} height="auto" /></p>

### ステップ2: 8行目でWiFiルーターのSSIDとパスワードを変更する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220714175.png" alt="pir" width={600} height="auto" /></p>

### ステップ3: コードを実行する

プログラムを実行すると、シェルウィンドウでXIAOが指定されたWiFiに接続され、NTPネットワーク時刻を取得していることが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220808948.png" alt="pir" width={600} height="auto" /></p>

## トラブルシューティング

プログラムが書き込めない場合は、BOOTボタンとRSTボタンを使用してボードをブートダウンロードモードに設定してみてください

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [HendraとshariltuMinの努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=c6&pane=issue&itemId=59874459&issue=Seeed-Studio%7Cwiki-documents%7C1117)に感謝し、あなたの作品は[展示](https://wiki.seeedstudio.com/contributors/)されます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
