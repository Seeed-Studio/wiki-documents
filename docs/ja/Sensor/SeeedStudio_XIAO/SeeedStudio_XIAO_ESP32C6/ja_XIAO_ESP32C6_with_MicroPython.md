---
description: MicroPython for XIAO ESP32C6
title: XIAO ESP32C6とMicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32c6_micropython
last_update:
  date: 05/15/2025
  author: Hendra
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32C6用MicroPython

MicroPythonは、Python 3プログラミング言語の軽量で効率的な実装であり、Python標準ライブラリの小さなサブセットを含み、マイクロコントローラーや制約のある環境での実行に最適化されています。

2014年の初リリース以来、MicroPythonはESP32シリーズを含む多くのマイクロコントローラーをサポートしてきましたが、現在のところESP32C6チップを公式にはサポートしていません。このファームウェアは自己コンパイルされたものであり、公式ファームウェアは現在開発中です。しばらくお待ちください。

このページでは、MicroPythonのシンプルで簡単な構文を使用して、XIAO ESP32C6の機能を活用する方法をガイドします。

## ハードウェア準備

ここでは、Seeed Studio XIAO ESP32C6ボードを使用します。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## ソフトウェア準備

このガイドでは、**Windows 10**とThonny IDEおよびesptoolを使用します。esptoolを使用するには、Windows OSにPython 3環境をインストールしてください。開始する前に、ファームウェアをダウンロードし、Thonnyをインストールしてください。

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

### 👍 感謝の意

<strong><font color={'8DC215'} size={"3"}>このWikiで使用されているXIAO ESP32C6ボード用に設計されたファームウェアは、私たちの友人であるZhishuo Song氏によって作成されました。心より感謝申し上げます。</font></strong>

## はじめに

このファームウェアは、XIAO ESP32C6のMicroPythonプログラミング専用に設計されています。まずファームウェアをフラッシュし、その後例を使用します。

### ステップ1. ファームウェアのフラッシュ

デバイスマネージャーを開いてUSBシリアルポートアドレスを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

ダウンロードしたZIPファイルを解凍し、フォルダに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205037972.png" alt="pir" width={600} height="auto" /></p>

パスボックスをクリックし、「CMD」と入力してEnterを押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205105289.png" alt="pir" width={600} height="auto" /></p>

CMDターミナルが開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022204711119.png" alt="pir" width={600} height="auto" /></p>

Python 3がすでにインストールされていることを確認し、pipコマンドを使用してesptoolをインストールします。

```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

以下のコマンドを使用して、XIAO ESP32C6のフラッシュメモリを消去します。

```cpp
esptool.py --port COMXX --chip esp32c6 erase_flash
```

次に、以下のコマンドを使用してMicroPythonファームウェアをインストールします。

```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32c6  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 ESP32C6_MicroPython.bin
```

:::tip
COMXXをPC上のCOMポート番号に置き換えてください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205457866.png" alt="pir" width={600} height="auto" /></p>

### ステップ2. サンプルコードのアップロード

次に、サンプルコードをXIAO ESP32C6の内部フラッシュメモリにアップロードします。

この部分ではThonny IDEを使用します。まずポートを設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205437800.png" alt="pir" width={600} height="auto" /></p>

`blinker.py`のサンプルプログラムを実行します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220104960.png" alt="pir" width={600} height="auto" /></p>

## NTPでWi-Fiから現在時刻を取得する

### ステップ1: Thonnyで`wifi_Ntp.py`ファイルを開く

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220645986.png" alt="pir" width={600} height="auto" /></p>

### ステップ2: 8行目でWi-FiルーターのSSIDとパスワードを変更する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220714175.png" alt="pir" width={600} height="auto" /></p>

### ステップ3: コードを実行する

プログラムを実行すると、シェルウィンドウでXIAOが指定されたWi-Fiに接続し、NTPネットワーク時刻を取得する様子が確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220808948.png" alt="pir" width={600} height="auto" /></p>

## トラブルシューティング

プログラムが書き込めない場合は、BOOTボタンとRSTボタンを使用してボードをブートダウンロードモードに設定してみてください。

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Hendraとshariltuminの努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=c6&pane=issue&itemId=59874459&issue=Seeed-Studio%7Cwiki-documents%7C1117)に感謝します。あなたの作業は[展示されます](https://wiki.seeedstudio.com/contributors/)。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>