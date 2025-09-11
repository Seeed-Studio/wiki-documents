---
description: SenseCAP Watcher Agentにファームウェアをフラッシュするためのガイド
title: Watcher Agentファームウェアのフラッシュ
sidebar_position: 1
keywords:
- SenseCAP
- Watcher
- Agent
- Firmware
- Flash
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /ja/flash_watcher_agent_firmware
last_update:
  date: 2025/09/04
  author: Twelve
---

# Watcher Agentファームウェアのフラッシュ

## 概要

このプロジェクトを可能にしたオープンソースの貢献に対して、[XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32)に特別な感謝を表します。

このガイドでは、EspressifのFlash Download Toolを使用して、SenseCAP WatcherデバイスにWatcher Agentファームウェアをフラッシュする手順を説明します。

:::danger 注意
このガイドで提供されるファームウェアには認証情報が必要な場合があります。必要に応じて、[sensecap@seeed.cc](mailto:sensecap@seeed.cc)にお問い合わせください。
:::

## 前提条件

### 必要なハードウェア

- SenseCAP Watcherデバイス
- USB Type-Cデータケーブル
- Windows PC

### 必要なソフトウェア

- [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6以降)
- [Watcher Agentファームウェアバイナリファイル](http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)

:::note
すでにWatcherデバイスをお持ちで、そのモデルが**-ENではない**場合、ファームウェアをフラッシュした後に認証情報を手動でフラッシュする必要があります。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/en_panel.jpg" style={{width:300, height:'auto'}}/></div>
詳細については、[認証情報のフラッシュ](#flashing-authentication-info)をご確認ください。
:::

## フラッシュプロセス

### ステップ1. Flash Download Toolのダウンロードとインストール

1. EspressifのオフィシャルウェブサイトからFlash Download Toolをダウンロードします：
   [Flash Download Tool v3.9.6](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip)
2. ダウンロードしたzipファイルを任意のディレクトリに展開します
3. インストールは不要です - 実行ファイルをダブルクリックするだけでツールが起動します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/flash%20download%20tool.jpg" style={{width:500, height:'auto'}}/></div>

### ステップ2. ファームウェアファイルの準備

1. Watcher Agent ファームウェア[バイナリファイル](http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)をダウンロードします
:::caution 注意
すべてのパスに特殊記号が含まれていないことを確認してください。
:::

### ステップ3. デバイスの接続

1. デバイス底面のType-Cポートを使用してWatcherをコンピュータに接続します
2. `flash_download_tool_3.9.7.exe`をダブルクリックしてツールを起動します
3. 以下の設定を行います：
   - ChipType: `ESP32-S3`を選択
   - WorkMode: `Develop`を選択
   - LoadMode: `UART`を選択

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ4. ファームウェア設定の構成

1. 最初の行の「...」ボタンをクリックして、ダウンロードしたファームウェアバイナリファイルを参照・選択します
2. ファームウェアファイルの横のチェックボックスが選択されていることを確認します
3. ファームウェアファイル選択後のアドレスフィールドに`0x0`と入力します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

### ステップ5. COMポートとフラッシュ設定の選択

以下の設定を行います：

- SPI SPEED: 80MHz
- SPI MODE: DIO
- FLASH SIZE: 32Mbit
- COM: デバイスマネージャーで、名前が「B」で終わるCOMポートを見つけて選択します — これをフラッシュ用に選択してください。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

:::note
STARTをクリックしてもフラッシュが開始されない場合は、STOPをクリックして「B」で終わるCOMポートを選択していることを確認してください。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>
:::

### ステップ6. フラッシュの消去

1. `ERASE`ボタンをクリックして既存のファームウェアをクリアします
2. 消去プロセスが完了するまで待ちます

### ステップ7. ファームウェアのフラッシュ

1. `START`ボタンをクリックしてフラッシュを開始します
2. ログウィンドウに進行状況情報が表示されるはずです
3. 進行状況が表示されない場合や失敗した場合は、他のCOMポートを試してください

### ステップ8. 成功の確認

ログウィンドウに成功メッセージが表示されたら、フラッシュプロセスは完了です。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ9. デバイスの再起動

1. Watcherデバイスのリセット穴を見つけます
2. ピンを使ってリセットボタンを軽く押します
3. デバイスが新しいファームウェアで再起動します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:500, height:'auto'}}/></div>

## トラブルシューティング

### よくある問題

1. **COMポートが検出されない**
   - 下部のType-Cポートを使用していることを確認してください
   - 別のUSBケーブルを試してください
   - USBドライバーが正しくインストールされているか確認してください

2. **フラッシュが失敗する**
   - 別のCOMポートを試してください
   - アドレス（0x0）が正しく入力されているか確認してください

3. **デバイスが応答しない**
   - ピンを使ってリセットボタンを軽く押してください
   - フラッシュ前に消去を試してください

### 認証情報のフラッシュ

Watcherモデルが**-ENではない**場合、ファームウェアをフラッシュした後に認証情報を手動でフラッシュする必要があります。

**手順：**

1. デバイスの**MACアドレス**を確認してください。
   - 製品ラベルまたはシリアルポート経由で確認できます。
   - ネイティブファームウェアを使用している場合は、デバイスの**設定->デバイス情報->WI-FI Mac**でも確認できます。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/en_panel.jpg" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/mac.jpg" style={{width:600, height:'auto'}}/></div>
2. **sensecap@seeed.cc**にSTA MACアドレスを記載したメールを送信し、認証ファイルとフラッシュツールをリクエストしてください。このスクリプトは、私たちがお送りするパッケージに含まれています。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools.jpg" style={{width:500, height:'auto'}}/></div>
3. esp-idfターミナルに移動し、私たちがお送りしたフォルダに移動して、**Pythonフラッシュスクリプト**を実行してください。
:::note
esp-idfをまだインストールしていない場合は、[ESP-IDFウェブサイト](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html)にアクセスし、公式ガイドに従ってダウンロードとインストールを行ってください。
:::
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash1.jpg" style={{width:500, height:'auto'}}/></div>
4. プログラムの指示に従い、対応するシリアルポート、serialBを入力し、""BURN""と入力してフラッシュしてください。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash5.jpg" style={{width:800, height:'auto'}}/></div>
5. プロセスが完了したら、デバイスのリセットボタンを押してください。
6. 上記の手順を完了すると、[SenseCraft AI-Watcher Agentプラットフォーム](https://sensecraft.seeed.cc/ai/watcher-agent)で登録できるようになります。

:::note
以下の問題が発生した場合は、esp-idfターミナルに移動してフォルダに移動し、以下の2つのコマンドを手動で入力してください：
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash4.jpg" style={{width:800, height:'auto'}}/></div>

```bash
espefuse.py -p <your_correct_serial_port> burn_block_data BLOCK_USR_DATA serial_number
espefuse.py -p <your_correct_serial_port> burn_key BLOCK_KEY0 license_key HMAC_UP
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash2.jpg" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash3.jpg" style={{width:800, height:'auto'}}/></div>
:::

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
