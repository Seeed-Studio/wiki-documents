---
description: SenseCAP Watcher Agentのファームウェアをフラッシュするためのガイド
title: Watcher Agentファームウェアのフラッシュ
sidebar_position: 1
keywords:
- SenseCAP
- Watcher
- Agent
- ファームウェア
- フラッシュ
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /ja/flash_watcher_agent_firmware
last_update:
  date: 05/15/2025
  author: Zeke
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Watcher Agentファームウェアのフラッシュ

## 概要

このプロジェクトを可能にしてくれた[XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32)のオープンソースへの貢献に感謝します。

このガイドでは、EspressifのFlash Download Toolを使用してSenseCAP WatcherデバイスにWatcher Agentファームウェアをフラッシュする手順を説明します。

:::danger 警告
このファームウェアをフラッシュすると、Watcherの工場情報が消去されます。以下のコマンドを使用してバックアップを取ることができます：

esptool.py --chip esp32s3 --baud 2000000 --before default_reset --after hard_reset --no-stub read_flash 0x9000 204800 nvsfactory.bin
:::

## 必要条件

### 必要なハードウェア
- SenseCAP Watcherデバイス
- USB Type-Cデータケーブル
- Windows PC

### 必要なソフトウェア
- [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (バージョン3.9.6以上)
- [Watcher Agentファームウェアバイナリファイル]

## フラッシュ手順

### ステップ1. Flash Download Toolのダウンロードとインストール

1. Espressifの公式ウェブサイトからFlash Download Toolをダウンロードします：
   [Flash Download Tool v3.9.6](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip)
2. ダウンロードしたZIPファイルを任意のディレクトリに解凍します
3. インストールは不要です。実行可能ファイルをダブルクリックするだけでツールを起動できます

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/flash%20download%20tool.jpg" style={{width:500, height:'auto'}}/></div>

### ステップ2. ファームウェアファイルの準備

1. Watcher Agentファームウェアの[binaryファイル](http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)をダウンロードします
:::caution 注意
すべてのパスに特殊記号が含まれていないことを確認してください。
:::

### ステップ3. デバイスの接続

1. Watcherデバイスを底部のType-Cポートを使用してコンピュータに接続します
2. `flash_download_tool_3.9.7.exe`をダブルクリックしてツールを起動します
3. 以下の設定を構成します：
   - ChipType: `ESP32-S3`を選択
   - WorkMode: `Develop`を選択
   - LoadMode: `UART`を選択

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ4. ファームウェア設定の構成

1. 最初の行にある「...」ボタンをクリックして、ダウンロードしたファームウェアバイナリファイルを選択します
2. ファームウェアファイルの横にあるチェックボックスが選択されていることを確認します
3. ファームウェアファイル選択後のアドレスフィールドに`0x0`を入力します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

### ステップ5. COMポートとフラッシュ設定の選択

以下の設定を構成します：
- SPI SPEED: 80MHz
- SPI MODE: DIO
- FLASH SIZE: 32Mbit
- COM: 適切なCOMポートを選択（注：デバイスは2つのCOMポートを表示します）

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>

:::note
STARTをクリックしてもフラッシュが開始されない場合は、STOPをクリックして別のCOMポートを試してください。2つのCOMポートのうち、フラッシュに使用できるのは1つだけです。
:::

### ステップ6. フラッシュの消去

1. `ERASE`ボタンをクリックして既存のファームウェアを消去します
2. 消去プロセスが完了するまで待ちます

### ステップ7. ファームウェアのフラッシュ

1. `START`ボタンをクリックしてフラッシュを開始します
2. ログウィンドウに進行状況情報が表示されます
3. 進行状況が表示されない場合や失敗した場合は、別のCOMポートを試してください

### ステップ8. 成功の確認

ログウィンドウに成功メッセージが表示されたら、フラッシュプロセスが完了です。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ9. デバイスの再起動

1. Watcherデバイスのリセットホールを探します
2. ピンを使用してリセットボタンを軽く押します
3. デバイスが新しいファームウェアで再起動します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:500, height:'auto'}}/></div>

## トラブルシューティング

### よくある問題

1. **COMポートが検出されない**
   - 底部のType-Cポートを使用していることを確認してください
   - 別のUSBケーブルを試してください
   - USBドライバーが正しくインストールされているか確認してください

2. **フラッシュが失敗する**
   - 別のCOMポートを試してください
   - アドレス（0x0）が正しく入力されているか確認してください

3. **デバイスが応答しない**
   - ピンを使用してリセットボタンを軽く押してください
   - フラッシュ前に消去を試してください

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>