---
description: SenseCAP Watcher Agent にファームウェアをフラッシュするためのガイド
title: Watcher Agent ファームウェアのフラッシュ
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
  date: 12/04/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

# Watcher Agent ファームウェアのフラッシュ

## 概要

このプロジェクトを可能にしたオープンソースの貢献に対して、[XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) に特別な感謝を表します。

このガイドでは、Espressif の Flash Download Tool を使用して SenseCAP Watcher デバイスに Watcher Agent ファームウェアをフラッシュする手順を説明します。

:::danger 注意
このガイドで提供されるファームウェアには認証情報が必要な場合があります。必要に応じて [sensecap@seeed.cc](mailto:sensecap@seeed.cc) にお問い合わせください。
:::

## 前提条件

### 必要なハードウェア

- SenseCAP Watcher デバイス
- USB Type-C データケーブル
- Windows PC

### 必要なソフトウェア

- [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6 以降)
- [Watcher Agent ファームウェアバイナリファイル](https://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)

:::note
既に Watcher デバイスをお持ちで、そのモデルが **-EN ではない** 場合、ファームウェアをフラッシュした後に認証情報を手動でフラッシュする必要があります。  
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/en_panel.jpg" style={{width:300, height:'auto'}}/></div>
詳細については、[認証情報のフラッシュ](#認証情報のフラッシュ) をご確認ください。
:::

## フラッシュプロセス

### ステップ 1. Flash Download Tool のダウンロードとインストール

1. Espressif の公式ウェブサイトから Flash Download Tool をダウンロードします：
   [Flash Download Tool v3.9.6](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip)
2. ダウンロードした zip ファイルを任意のディレクトリに展開します
3. インストールは不要です - 実行ファイルをダブルクリックするだけでツールが起動します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/flash%20download%20tool.jpg" style={{width:500, height:'auto'}}/></div>

### ステップ 2. ファームウェアファイルの準備

1. Watcher Agent ファームウェア [バイナリファイル](https://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin) をダウンロードします
:::caution 注意
すべてのパスに特殊記号が含まれていないことを確認してください。
:::

### ステップ 3. デバイスの接続

1. デバイス底面の Type-C ポートを使用して Watcher をコンピュータに接続します
2. `flash_download_tool_3.9.7.exe` をダブルクリックしてツールを起動します
3. 以下の設定を行います：
   - ChipType: `ESP32-S3` を選択
   - WorkMode: `Develop` を選択
   - LoadMode: `UART` を選択

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 4. ファームウェア設定の構成

1. 最初の行の "..." ボタンをクリックして、ダウンロードしたファームウェアバイナリファイルを参照・選択します
2. ファームウェアファイルの横のチェックボックスが選択されていることを確認します
3. ファームウェアファイル選択後のアドレスフィールドに `0x0` と入力します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

### ステップ 5. COM ポートとフラッシュ設定の選択

以下の設定を行います：

- SPI SPEED: 80MHz
- SPI MODE: DIO
- FLASH SIZE: 32Mbit
- COM: デバイスマネージャーで、名前が "B" で終わる COM ポートを見つけて、フラッシュ用にこれを選択します。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

:::note
START をクリックしてもフラッシュが開始されない場合は、STOP をクリックして "B" で終わる COM ポートを選択していることを確認してください。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>
:::

### ステップ 6. フラッシュの消去

1. `ERASE` ボタンをクリックして既存のファームウェアをクリアします
2. 消去プロセスが完了するまで待ちます

### ステップ 7. ファームウェアのフラッシュ

1. `START` ボタンをクリックしてフラッシュを開始します
2. ログウィンドウに進行状況情報が表示されるはずです
3. 進行状況が表示されない場合や失敗した場合は、他の COM ポートを試してください

### ステップ 8. 成功の確認

ログウィンドウに成功メッセージが表示されたら、フラッシュプロセスは完了です。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

### ステップ 9. デバイスの再起動

1. Watcher デバイスのリセット穴を見つけます
2. ピンを使ってリセットボタンを軽く押します
3. デバイスが新しいファームウェアで再起動します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:500, height:'auto'}}/></div>

## トラブルシューティング

### よくある問題

1. **COM ポートが検出されない**
   - 底面の Type-C ポートを使用していることを確認してください
   - 別の USB ケーブルを試してください
   - USB ドライバが正しくインストールされているか確認してください

2. **フラッシュが失敗する**
   - 別の COM ポートを試してください
   - アドレス (0x0) が正しく入力されているか確認してください

3. **デバイスが応答しない**
   - ピンを使ってリセットボタンを軽く押してください
   - フラッシュ前に消去を試してください

### 認証情報のフラッシュ

Watcher モデルが **-EN ではない** 場合、ファームウェアをフラッシュした後に認証情報を手動でフラッシュする必要があります。  

**手順：**

1. デバイスの **MAC アドレス** を確認します。  
   - 製品ラベルまたはシリアルポート経由で確認できます。  
   - ネイティブファームウェアを使用している場合は、デバイスの **Settings->About Device->WI-FI Mac** でも確認できます。  

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/en_panel.jpg" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/mac.jpg" style={{width:600, height:'auto'}}/></div>

:::danger 注意
提供する STA MAC アドレスが正しいことを確認してください。  
認証ファイルは **一度だけ** フラッシュでき、間違ったアドレスを使用するとデバイスが正しくバインドできなくなります。  
また、認証ファイルは一度だけフラッシュすれば十分であることにご注意ください。
:::

2. STA MAC アドレスを記載して **sensecap@seeed.cc** にメールを送信し、認証ファイルとフラッシュツールを要求してください。このスクリプトは、お送りするパッケージに含まれています。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools.jpg" style={{width:500, height:'auto'}}/></div>
3. esp-idf ターミナルに移動し、お送りしたフォルダに移動して、**Python フラッシュスクリプト** を実行してください。
:::note
まだ esp-idf をインストールしていない場合は、[ESP-IDF ウェブサイト](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html) にアクセスし、公式ガイドに従ってダウンロード・インストールしてください。
:::
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash1.jpg" style={{width:500, height:'auto'}}/></div>
4. プログラムの指示に従って対応するシリアルポート、serialB を入力し、""BURN"" と入力してフラッシュします。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/authentication_flash5.jpg" style={{width:800, height:'auto'}}/></div>
5. プロセスが完了したら、デバイスのリセットボタンを押してください。  
6. 上記の手順の後、[SenseCraft AI-Watcher Agent プラットフォーム](https://sensecraft.seeed.cc/ai/watcher-agent) で登録できるようになります

:::note
以下の問題が発生した場合は、esp-idf ターミナルに移動してフォルダに移動し、以下の 2 つのコマンドを手動で入力してください：
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
