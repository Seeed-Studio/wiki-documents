---
description: XIAO ESP32S3 Sense 用 MicroPython
title: XIAO ESP32S3 プロジェクト MicroPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/XIAO_ESP32S3_Micropython
last_update:
  date: 05/15/2025
  author: Hendra
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32S3 Sense (カメラ、Wi-Fi) 用 MicroPython

MicroPython は、Python 3 プログラミング言語の軽量で効率的な実装であり、Python 標準ライブラリの小さなサブセットを含み、マイクロコントローラーや制約のある環境での実行に最適化されています。

2014 年の初リリース以来、MicroPython は多くのマイクロコントローラーをサポートしており、その中には Xiao ESP32S3 Sense 開発ボードの主要なプロセッサである ESP32S3 も含まれています。

このページでは、MicroPython のシンプルで簡単な構文を使用して Xiao ESP32S3 Sense の機能を活用する方法を説明します。

## ハードウェア準備

ここでは Seeed Studio XIAO ESP32S3 Sense ボードを使用します。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## ソフトウェア準備

このガイドでは、**Windows 10** と Thonny IDE、および esptool を使用します。esptool を使用するには、Windows OS に Python 3 環境をインストールしてください。開始する前に、ファームウェアをダウンロードし、Thonny をインストールしてください。

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

### 👍 感謝の意

<strong><font color={'8DC215'} size={"3"}>この Wiki で使用されている XIAO ESP32S3 Sense ボード用に設計されたファームウェアは、私たちの友人 shariltumin によって作成されました。心より感謝申し上げます。</font></strong>

## はじめに

このファームウェアは、XIAO ESP32S3 の MicroPython プログラミング専用に設計されています。まずファームウェアをフラッシュし、その後例を使用します。

### ステップ 1. ファームウェアのフラッシュ

デバイスマネージャーを開いて USB シリアルポートアドレスを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

ダウンロードした ZIP ファイルを解凍し、フォルダに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/firmware%20folder.jpg" alt="pir" width={600} height="auto" /></p>

パスボックスをクリックし、「CMD」と入力して Enter を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/cmd_on_folder.jpg" alt="pir" width={600} height="auto" /></p>

これでコマンドプロンプトに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/on_cmd.jpg" alt="pir" width={600} height="auto" /></p>

Python 3 がすでにインストールされていることを確認し、pip コマンドを使用して esptool をインストールします。
```cpp
pip install esptool
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/esptool_install.jpg" alt="pir" width={600} height="auto" /></p>

以下のコマンドを使用して Xiao ESP32S3 のフラッシュメモリを消去します。

```cpp
esptool.py --port COMXX erase_flash
```

次に、以下のコマンドを使用して MicroPython ファームウェアをインストールします。
```cpp
esptool.py --port COMXX --baud 460800 --before default_reset --after hard_reset --chip esp32s3  write_flash --flash_mode dio --flash_size detect --flash_freq 80m 0x0 firmware.bin 
```

:::tip
COMXX を PC 上のポート COM 番号に置き換えてください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/device_manager.jpg" alt="pir" width={600} height="auto" /></p>

### ステップ 2. サンプルコードのアップロード

次に、サンプルコードを Xiao ESP32S3 Sense の内部フラッシュメモリにアップロードします。

この部分では Thonny IDE を使用します。まずポートを設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/configure_port_thonny.png" alt="pir" width={600} height="auto" /></p>

次に、ビュー メニューでファイルオプションにチェックを入れます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/check_the_files.png" alt="pir" width={600} height="auto" /></p>

サンプルコードが解凍されたフォルダに移動し、ファイルを右クリックして以下の画像のようにオプションを選択してファイルをアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/upload_the_file.png" alt="pir" width={600} height="auto" /></p>

すべてのサンプルコードを Xiao ESP32S3 ボードにアップロードした後、streamin_server.py ファイルと Wifi.py ファイルの両方で Wi-Fi 設定をローカル Wi-Fi 構成に基づいて変更してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/wifi_configuration.png" alt="pir" width={600} height="auto" /></p>


### ステップ 3. ストリーミング例のテスト

ストリーミングをテストする前に、pipを使用してopencvのPythonライブラリをインストールしてください。

```cpp
pip install opencv-python
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/install_opencv.png" alt="pir" width={600} height="auto" /></p>

opencvのPythonライブラリが正常にインストールされた後、Thonnyに戻り、`streamin_server.py`を実行してXiao ESP32S3ボードのIPアドレスをコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_script.png" alt="pir" width={600} height="auto" /></p>

次に、解凍したzipフォルダに戻り、PythonのIDLEを使用して`steamin_client.py`を開き、IPアドレス部分をXiao ESP32S3ボードと同じに変更します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/change_ip.png" alt="pir" width={600} height="auto" /></p>

その後、ファイルを実行してみてください。Xiao ESP32S3 Senseボードからストリーミング画像を表示する新しいウィンドウが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-MicroPy/run_the_client.jpeg" alt="pir" width={600} height="auto" /></p>

:::caution
ストリーミング例を起動すると、Xiao ESP32S3 Senseボードがかなり熱くなる可能性があります。
:::

## その他の可能性

この例を使用することで、迅速かつ簡単なCCTVプロジェクトを作成することができます。また、Xiao ESP32S3 Senseは小型であるため、プロジェクトをシームレスにすることができます。

## トラブルシューティング

カメラが正常に初期化されない（フレームを表示してからフリーズする）場合やWi-Fiに再接続できない場合は、ボードを抜いてThonny IDEを再起動してください。

## ✨ 貢献者プロジェクト

- このプロジェクトはSeeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Hendraとshariltuminの努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35979545)に感謝します。あなたの作業は[展示されます](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>