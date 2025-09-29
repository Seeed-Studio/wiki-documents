---
description: Watcherのオープンソースリポジトリをダウンロードし、IDF環境を構築する方法を紹介します。
title: Watcher開発環境の構築
image: https://files.seeedstudio.com/wiki/watcher_getting_started/64.webp
slug: /ja/build_watcher_development_environment
sidebar_position: 1
last_update:
  date: 11/5/2024
  author: Citric
---

# Watcher開発環境の構築

## ESP-IDFのインストール

espressifの[公式インストールガイド](https://docs.espressif.com/projects/esp-idf/en/v5.2.1/esp32s3/get-started/index.html)を参照してください。

`factory_fw`サンプルはIDFのバージョンv5.2.1に基づいていることにご注意ください。

```
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
```

macOSまたはLinuxを使用している場合は、IDF環境初期化のために`get_idf`エイリアスを作成することを強く推奨します。

## 初回ビルド

### IDF環境の取得

```
get_idf
idf.py
```

IDFを正しくインストールした場合、`idf.py`コマンドの後にidf.pyツールのヘルプが表示されます。

```
$ idf.py
Usage: idf.py [OPTIONS] COMMAND1 [ARGS]... [COMMAND2 [ARGS]...]...

  ESP-IDF CLI build management tool. For commands that are not known to idf.py an attempt to execute it as a build system target will be
  made. Selected target: esp32s3

...

```

チップターゲットを`esp32s3`に設定します。

```
idf.py set-target esp32s3
```

### プロジェクトのビルド

```
idf.py build
```

最新のファクトリファームウェアのコードは`example/factory_firmware`にあります。

```
cd example/factory_firmware
idf.py build
```

### フラッシュ

SenseCAP Watcherを**USBデータケーブル**でPCまたはラップトップに接続してください。

**重要な注意事項！！！**

**底面（側面）のUSBポートのみがデータ転送に対応しています**

**背面のUSBポートはデバイスへの電源供給のみです。**

適切なデータケーブルと適切なUSB Cポートを使用してWatcherを接続すると、PCに1つのUSBデバイスエントリと2つのUARTデバイスが表示されます。これらはESP32S3に接続されたUARTとHimax SoCに接続されたUARTです。どのSoCがどのUARTを使用するかに観察されたパターンはありません。そのため、ログ出力が表示されるまで、すべてのUARTデバイスで以下のコマンドを試してください。

```
idf.py --port /dev/ttyACM0 monitor
```

`/dev/ttyACM0`をお使いのオペレーティングシステムの正しいUARTデバイス名に置き換えてください。例えば、macOSでは`/dev/tty.wchusbserial56F3067xxxx`のように見え、Windowsでは`COMx`のように見えます。ログ出力の進行が見えない場合は、次のUARTを試してください。

**重要な注意事項！！！**

`nvsfactory`という名前のパーティションには、デバイスが動作するための重要なファクトリデータが含まれています。このパーティションを消去しないよう注意してください。そのため、フラッシュ操作を実行する前にこのパーティションをバックアップすることを強く推奨します。

esptool.pyを使用してバックアップを行います。このツールはIDFインストールの一部なので、IDFインストールを通過していれば既に存在しているはずです。

```
# Linux / MacOS
which esptool.py

# Windows
where esptool.py
```

それでは`nvsfactory`パーティションをバックアップしましょう。

```
esptool.py --port /dev/tty.wchusbserial56F3067xxxx --baud 2000000 --chip esp32s3 --before default_reset --after hard_reset --no-stub read_flash 0x9000 204800 nvsfactory.bin
```

バックアップが完了したら、ファームウェアをフラッシュします。

```
idf.py --port /dev/ttyACM0 -b 2000000 app-flash
```

サブコマンド`app-flash`を使用してアプリケーションパーティションのみをフラッシュすることで、`nvsfactory`パーティションを保護し、最も重要なことに時間を節約できます。

### ログ出力の監視

```
idf.py monitor
```

`ctrl + ]`を使用して監視を終了します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>