---
description: XIAO ESP32C6 用 MicroPython
title: XIAO ESP32C6 と MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32c6_micropython
last_update:
  date: 08/30/2023
  author: Hendra
---

# XIAO ESP32C6 用 Micropython

MicroPython は、Python 3 プログラミング言語の軽量で効率的な実装であり、Python 標準ライブラリの小さなサブセットを含み、マイクロコントローラーや制約のある環境で動作するように最適化されています。

このページでは、micropython のシンプルで簡単な構文を使用して XIAO ESP32C6 の機能を使用する方法をガイドします。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## ソフトウェアの準備

このガイドでは、**Windows 10** と Thonny IDE および esptool を使用します。esptool を使用するには、Windows OS に Python 3 環境をインストールしてください。開始する前に、ファームウェアをダウンロードし、Thonny をインストールしてください。

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

### 👍 心より感謝

<strong><font color={'8DC215'} size={"3"}>この wiki で使用されている XIAO ESP32C6 ボード用に設計されたファームウェアは、私たちの友人である Zhishuo Song によって作成されました。彼には本当に感謝しています。</font></strong>

## 入門ガイド

このファームウェアは XIAO ESP32C6 MicroPython プログラミング専用に設計されています。まずファームウェアをフラッシュし、その後例を使用します。

### ステップ 1. ファームウェアのフラッシュ

デバイスマネージャーを開いて USB シリアルポートアドレスを確認します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

ダウンロードした zip ファイルを展開し、フォルダに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205037972.png" alt="pir" width={600} height="auto" /></p>

パスボックスをクリックして「CMD」と入力し、Enter を押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205105289.png" alt="pir" width={600} height="auto" /></p>

cmd ターミナルに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022204711119.png" alt="pir" width={600} height="auto" /></p>

pip コマンドを使用して esptool をインストールします（Python 3 が既にインストールされていることを確認してください）

```bash
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

:::caution ボードをブートローダーモードにする
フラッシュする前に、XIAO ESP32C6 をブートローダー（ダウンロード）モードにする**必要があります**。これを行うには：
1. **BOOT** ボタンを押し続けます。
2. BOOT を押し続けながら、**RESET** ボタンを押して離します。
3. **BOOT** ボタンを離します。

ボードがブートローダーモードでない場合、フラッシュは **"Write timeout"** エラーで失敗し、モジュールが破損する可能性があります。
:::

このコマンドを使用して XIAO ESP32C6 のフラッシュメモリを消去します

```bash
esptool --port COMXX --chip esp32c6 erase-flash
```

次に、このコマンドを使用して micropython ファームウェアをインストールします

```bash
esptool --port COMXX --baud 460800 --before default-reset --after hard-reset --chip esp32c6 write-flash --flash-mode dio --flash-size detect --flash-freq 80m 0x0 ESP32C6_MicroPython.bin
```

:::tip
COMXX を PC の COM ポート番号に変更してください。タイムアウトエラーでフラッシュが失敗する場合は、ボーレートを `115200` に下げてみてください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205457866.png" alt="pir" width={600} height="auto" /></p>

### ステップ 2. サンプルコードのアップロード

次に、サンプルコードを XIAO ESP32C6 の内部フラッシュメモリにアップロードします。

この部分では、Thonny IDE を使用して、まずポートを設定します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022205437800.png" alt="pir" width={600} height="auto" /></p>

`blinker.py` サンプルプログラムを実行します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220104960.png" alt="pir" width={600} height="auto" /></p>

## WiFi から NTP で現在時刻を取得

### ステップ1: Thonny で `wifi_Ntp.py` ファイルを開く

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220645986.png" alt="pir" width={600} height="auto" /></p>

### ステップ2: 8行目で WiFi ルーターの SSID とパスワードを変更する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220714175.png" alt="pir" width={600} height="auto" /></p>

### ステップ3: コードを実行する

プログラムを実行すると、シェルウィンドウで XIAO が指定された WiFi に接続され、NTP ネットワーク時刻を取得することが確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_micropython/image-20241022220808948.png" alt="pir" width={600} height="auto" /></p>

## トラブルシューティング

- **"Write timeout" またはシリアル例外エラー**: フラッシュする前にボードが**ブートローダーモード**であることを確認してください。**BOOT** ボタンを押し続け、**RESET** を押して離し、その後 **BOOT** を離します。また、ボーレートを下げてみてください（例：`460800` の代わりに `--baud 115200` を使用）。
- **コマンドが見つからない（`esptool.py`）**: `pip install esptool` でインストールした場合は、`esptool`（`.py` なし）を使用してください。一部のシステムでは、代わりに `python -m esptool` を使用する必要がある場合があります。
- **モジュールの破損**: モジュールが破損したように見える場合は、ブートローダーモードに入り、`esptool --port COMXX --chip esp32c6 erase-flash` でフラッシュを消去してから、ファームウェアを再フラッシュしてみてください。

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- [Hendra と shariltumin の努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=c6&pane=issue&itemId=59874459&issue=Seeed-Studio%7Cwiki-documents%7C1117) に感謝し、あなたの作品は[展示](https://wiki.seeedstudio.com/ja/contributors/)されます。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
