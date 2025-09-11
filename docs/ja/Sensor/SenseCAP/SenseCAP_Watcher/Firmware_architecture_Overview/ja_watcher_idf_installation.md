---
description: Watcherのオープンソースリポジトリをダウンロードし、IDF環境を構築する方法を紹介します。
title: Watcher開発環境の構築
image: https://files.seeedstudio.com/wiki/watcher_getting_started/64.webp
slug: /ja/build_watcher_development_environment
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Watcher開発環境の構築

## ESP-IDFのインストール

Espressifの[公式インストールガイド](https://docs.espressif.com/projects/esp-idf/en/v5.2.1/esp32s3/get-started/index.html)を参照してください。

`factory_fw`の例は、IDFのバージョンv5.2.1に基づいていることに注意してください。

```
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
```

macOSまたはLinuxを使用している場合は、IDF環境の初期化用にエイリアス`get_idf`を作成することを強くお勧めします。

## 初回ビルド

### IDF環境の取得

```
get_idf
idf.py
```

IDFを正しくインストールしている場合、`idf.py`コマンドの後にidf.pyツールのヘルプ出力が表示されます。

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

SenseCAP Watcherを**USBデータケーブル**を使用してPCまたはノートパソコンに接続します。

**注意!!!**

**データ転送が可能なのは側面の底部にあるUSBポートのみです**

**背面のUSBポートはデバイスに電力を供給するだけです。**

Watcherを適切なデータケーブルで正しいUSB-Cポートから接続すると、PC上で1つのUSBデバイスエントリと2つのUARTデバイスが表示されます。これらはESP32S3に接続されたUARTとHimax SoCに接続されたUARTです。どのSoCがどのUARTを使用するかについては特定のパターンは観察されていません。そのため、ログ出力が表示されるまで以下のコマンドをすべてのUARTデバイスで試してください。

```
idf.py --port /dev/ttyACM0 monitor
```

`/dev/ttyACM0`をお使いのオペレーティングシステム上の正しいUARTデバイス名に置き換えてください。例えば、MacOSでは`/dev/tty.wchusbserial56F3067xxxx`のように表示され、Windowsでは`COMx`のように表示されます。ログ出力の進行が見られない場合は、次のUARTを試してください。

**注意!!!**

`nvsfactory`という名前のパーティションにはデバイスが動作するための重要なファクトリデータが含まれています。このパーティションを消去しないよう注意してください。そのため、フラッシュ操作を行う前にこのパーティションをバックアップすることを強くお勧めします。

バックアップにはesptool.pyを使用します。このツールはIDFインストールの一部であるため、IDFインストールを完了していればすでに存在しているはずです。

```
# Linux / MacOS
which esptool.py

# Windows
where esptool.py
```

では、`nvsfactory`パーティションをバックアップしましょう。

```
esptool.py --port /dev/tty.wchusbserial56F3067xxxx --baud 2000000 --chip esp32s3 --before default_reset --after hard_reset --no-stub read_flash 0x9000 204800 nvsfactory.bin
```

バックアップが完了したら、ファームウェアをフラッシュする準備が整いました。

```
idf.py --port /dev/ttyACM0 -b 2000000 app-flash
```

サブコマンド`app-flash`を使用してアプリケーションパーティションのみをフラッシュします。これにより`nvsfactory`パーティションを保護し、さらに時間を節約できます。

### ログ出力の監視

```
idf.py monitor
```

`ctrl + ]`を使用してモニタリングを終了します。

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>