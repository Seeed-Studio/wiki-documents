---
description: XIAO ESP32S3 Sense用MicroPython
title: XIAO ESP32S3 プロジェクト MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/XIAO_ESP32S3_Micropython
last_update:
  date: 08/30/2023
  author: Hendra
---

# XIAO ESP32S3 Sense用Micropython（カメラ、Wi-Fi）

MicroPythonは、Python標準ライブラリの小さなサブセットを含み、マイクロコントローラーや制約のある環境で動作するように最適化された、軽量で効率的なPython 3プログラミング言語の実装です。

2014年の最初の開始以来、micropythonはXiao ESP32S3 Sense開発ボードのメインブレインであるESP32S3を含む多くのマイクロコントローラーをすでにサポートしています。

このページでは、micropythonのシンプルで簡単な構文を使用してXiao ESP32S3 Senseの機能を使用する方法をガイドします

## ハードウェアの準備

ここではSeeed Studio XIAO ESPS3 Senseボードを使用しています。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
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
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/XIAO_ESP32S3_Micropython.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 👍 大変感謝いたします

<strong><font color={'8DC215'} size={"3"}>このwikiで使用されているXIAO ESP32S3 Senseボード用に設計されたファームウェアは、私たちの友人であるshariltumin氏によって作成されました。彼には本当に感謝しています。</font></strong>

## はじめに

このファームウェアはXIAO ESP32S3 MicroPythonプログラミング専用に設計されています。まずファームウェアをフラッシュし、その後例を使用します。

### ステップ1. ファームウェアのフラッシュ

デバイスマネージャーを開いてUSBシリアルポートアドレスを確認します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

ダウンロードしたzipファイルを解凍し、フォルダに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/firmware%20folder.jpg" alt="pir" width={600} height="auto" /></p>

パスボックスをクリックして「CMD」と入力し、Enterキーを押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/cmd_on_folder.jpg" alt="pir" width={600} height="auto" /></p>

cmdターミナルに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/on_cmd.jpg" alt="pir" width={600} height="auto" /></p>

pipコマンドを使用してesptoolをインストールします（Python 3が既にインストールされていることを確認してください）

```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

このコマンドを使用してXiao ESP32S3のフラッシュメモリを消去します

```cpp
esptool.py --port COMXX erase_flash
```

次のコマンドを使用してmicropythonファームウェアのインストールを進めてください

```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32s3  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 firmware.bin 
```

:::tip
PCのCOMポート番号でCOMXXを変更してください
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

### ステップ2. サンプルコードのアップロード

次に、サンプルコードをXiao ESP32S3 senseの内部フラッシュメモリにアップロードします。

この部分では、Thonny IDEを使用しています。まず、ポートを設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/configure_port_thonny.png" alt="pir" width={600} height="auto" /></p>

次に、表示メニューでファイルオプションにチェックマークを付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/check_the_files.png" alt="pir" width={600} height="auto" /></p>

サンプルコードが展開されているフォルダに移動し、ファイルを右クリックして下の画像のようなオプションを選択してファイルをアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/upload_the_file.png" alt="pir" width={600} height="auto" /></p>

すべてのサンプルコードがxiao esp32s3ボードにアップロードされた後、お使いのローカルWiFi設定に基づいて、streaming_server.pyファイルとWifi.pyファイルの両方でWiFi認証情報を変更してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/wifi_configuration.png" alt="pir" width={600} height="auto" /></p>

### ステップ3. ストリーミングサンプルのテスト

ストリーミングをテストする前に、pipを使用してopencv pythonライブラリをインストールしてください。

```cpp
pip install opencv-python
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/install_opencv.png" alt="pir" width={600} height="auto" /></p>

opencv pythonライブラリが正常にインストールされた後、thonnyに戻ってstreamin_server.pyを実行し、xiao ESP32S3 ボードのIPアドレスをコピーします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_script.png" alt="pir" width={600} height="auto" /></p>

次に、解凍したzipフォルダに戻り、pythonのIDLEを使用してsteamin_client.pyを開き、IPアドレス部分をxiao ESP32S3 ボードと同じになるように変更します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/change_ip.png" alt="pir" width={600} height="auto" /></p>

次にファイルを実行してみると、Xiao ESP32S3 senseボードからのストリーミング画像を表示する新しいウィンドウが表示されるはずです

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_client.jpeg" alt="pir" width={600} height="auto" /></p>

:::caution
ストリーミングの例を起動する際、Xiao ESP32S3 Sense Boardはかなり熱くなる可能性があります。
:::

## さらなる可能性

この例を使用することで、高速でシンプルなCCTVプロジェクトを作成でき、Xiao ESP32S3 senseはサイズが小さいため、プロジェクトをシームレスに実現できます

## トラブルシューティング

カメラが正常に初期化されない場合（フレームを表示してからフリーズする）またはwifiに再接続できない場合は、ボードを抜いてThonny IDEを再起動してみてください。

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [HendraとshariltuMinの努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35979545)に感謝し、あなたの作品は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができる限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
