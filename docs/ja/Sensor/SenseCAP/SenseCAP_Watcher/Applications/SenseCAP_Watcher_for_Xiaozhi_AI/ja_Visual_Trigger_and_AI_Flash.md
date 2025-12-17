---
description: SenseCAP Watcher Agent にファームウェアをフラッシュするためのガイド
title: ビジュアルトリガーと AI フラッシュ
sidebar_position: 4
keywords:
- SenseCAP
- Watcher
- Agent
- Firmware
- Flash
- Visual
- Activate
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /ja/visual_trigger_and_ai_flash
last_update:
  date: 12/04/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Watcher への AI モデルのフラッシュ

## 概要

このプロジェクトを可能にしたオープンソースの貢献に対して、[XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) に特別な感謝を申し上げます。

このガイドでは、SenseCAP Watcher にビジュアル認識トリガー会話ファームウェアをフラッシュする方法と、デバイス上の AI モデルを交換または更新する方法に焦点を当てています。これらの操作のための実践的な指導ガイドとして意図されています。

Watcher の機能、アプリケーション、使用例の完全な紹介については、以下を参照してください：[SenseCAP Watcher - 世界と積極的に相互作用する AI アシスタント](https://wiki.seeedstudio.com/ja/solutions/hello_watcher_llms/)

## 前提条件

### 必要なハードウェア

- SenseCAP Watcher デバイス  
- USB Type-C データケーブル  
- Windows PC  

:::note
**ビジュアルアクティベーションファームウェア**をフラッシュする場合で、Watcher デバイスのモデルが **-EN ではない**場合、通常の使用のために認証ファイルを手動でフラッシュする必要があります（一度だけ必要）。  
詳細な手順については、[Watcher Agent ファームウェアフラッシュガイド](https://wiki.seeedstudio.com/ja/flash_watcher_agent_firmware/)を参照してください。
:::

## ファームウェアフラッシュプロセス

<Tabs>
<TabItem value="sensecraft" label="SenseCraft AI" default>

<!-- :::caution Note
The following guide is for an internal testing website that has not yet been released.
The official version will be available soon.
Please use another method to flash the firmware for now.
::: -->

- 前提条件

  - [SenseCraft AI プラットフォーム](https://sensecraft.seeed.cc/ai/home)

- ステップ 1. プラットフォームを開き、ワークスペースで SenseCAP Watcher を選択

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI1.png" style={{width:800, height:'auto'}}/></div>

- ステップ 2. シリアルポート経由でプラットフォームに接続

  -  `Connect` をクリック 

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

  - 正しいシリアルポート（"A" で終わるもの）を選択

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>

  :::note
  macOS または Linux を使用している場合は、番号の小さいポートを選択してください。
  :::

  - `Connect` をクリック

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

- ステップ 3. デバイスバージョンの確認と更新

  - `Update` をクリック

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI9.png" style={{width:500, height:'auto'}}/></div>

  - 正しいシリアルポート（"B" で終わるもの）を選択
  :::note
  macOS または Linux を使用している場合は、番号の大きいポートを選択してください。
  :::

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI10.png" style={{width:500, height:'auto'}}/></div>

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div> 

  - 'Connect' をクリック

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI11.png" style={{width:500, height:'auto'}}/></div>

  - フラッシュしたいバージョンを選択し、`Confirm` をクリック

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI12.png" style={{width:500, height:'auto'}}/></div>

  - 更新と再起動プロセスを待機

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI13.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher1" label="Flash Download Tool">

- 前提条件

  - **ビジュアルトリガーファームウェア v2.0.4**: [ダウンロードリンク](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-en.bin)

  - [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6 以降)

- ステップ 1. デバイスに接続（デバイス底面の Type-C ポート）し、Flash Download Tool を開く

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

- ステップ 2. ファームウェア設定の構成

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

- ステップ 3. COM ポートとフラッシュ設定の選択

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

  - START をクリックしてもフラッシュが開始されない場合は、STOP をクリックして "B" で終わる COM ポートを選択していることを確認してください。
    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>

- ステップ 4. 消去とフラッシュ
  - `ERASE` ボタンをクリックして既存のファームウェアをクリア
  - 消去プロセスの完了を待機
  - `START` ボタンをクリックしてフラッシュを開始
  - ログウィンドウに進行状況情報が表示されるはずです
  - 進行状況が表示されないか失敗した場合は、他の COM ポートを試してください

- ステップ 5. 成功の確認

  - ログウィンドウに成功メッセージが表示されたら、フラッシュプロセスは完了です。

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

- ステップ 6. デバイスの再起動

  - Watcher デバイスのリセット穴を見つける
  - ピンを使ってリセットボタンを軽く押す
  - デバイスが新しいファームウェアで再起動します

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher2" label="コマンドライン" default>

- 前提条件

  - **ビジュアルトリガーファームウェア v2.0.4**: [ダウンロードリンク](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-en.bin)

  - [esptool.py](https://github.com/espressif/esptool)

- ステップ 1. ダウンロードしたファームウェアパッケージを展開し、esptool.py を使用してフラッシュを実行

  ```shell
  esptool.py -p /dev/ttyACM0 -b 2000000 write_flash 0 merged-binary.bin
  ```
  *(注意: システムに応じてポート `/dev/ttyACM0` を調整してください。例：Windows では `COM3`)*

- ステップ 2. デバイスの再起動

  - Watcher デバイスのリセット穴を見つける
  - ピンを使ってリセットボタンを軽く押す
  - デバイスが新しいファームウェアで再起動します

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="compile" label="ソースからコンパイル（開発者向け）">
- 前提条件

  - [ESP-IDF v5.5.1](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html#manual-installation)

  - [オープンソースリポジトリ（Xiaozhi AI コラボレーション）](https://github.com/Wvirgil123/xiaozhi-esp32/tree/main)

- ステップ 1. ESP-IDF CMD を開き、プロジェクトフォルダに移動
  ```shell
  cd xiaozhi-esp32
  ```

- ステップ 2. ターゲットチップの設定
  ```shell
  idf.py set-target esp32s3
  ```

- ステップ 3. 設定メニューを開く
  ```shell
  idf.py menuconfig
  ```

- ステップ 4. ボードタイプを SenseCAP Watcher に設定

  - Xiaozhi Assistant を選択

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig1.png" style={{width:700, height:'auto'}}/></div>

  - Board Type を選択

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig2.png" style={{width:700, height:'auto'}}/></div>

  - SenseCAP Watcher を選択

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig3.png" style={{width:700, height:'auto'}}/></div>

- ステップ 5. 必要に応じて追加設定を構成（オプション）

  - デフォルト表示言語と AEC（自動エコーキャンセレーション / 音声割り込み処理）

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig4.png" style={{width:700, height:'auto'}}/></div>

  - ウェイクワードとトリガー

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig5.png" style={{width:700, height:'auto'}}/></div>

    <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig6.png" style={{width:700, height:'auto'}}/></div>

  - アプリケーション固有のその他のオプションパラメータ

  - 設定完了後、メニューを保存して終了

- ステップ 7. ファームウェアのビルドとフラッシュ
  ```shell
  idf.py build flash
  ```

</TabItem>
</Tabs>

:::note
ファームウェアバージョン 1.8.8 以上のみがビジュアルウェイクアップ機能をサポートしています。
ファームウェアバージョン v2.0.3 以上では、ビジュアル検出を有効にするために Xiaozhi に "Turn on the inference switch" と言う必要があります。
:::

## AI モデルフラッシュプロセス

### 前提条件
- [SenseCraft AI プラットフォーム](https://sensecraft.seeed.cc/ai/home)

### ステップ 1. プラットフォームを開き、ワークスペースで SenseCAP Watcher を選択

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI1.png" style={{width:800, height:'auto'}}/></div>

### ステップ 2. シリアルポート経由でプラットフォームに接続

- `Connect` をクリック 
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

- 正しいシリアルポート（"A"で終わるもの）を選択します
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>
:::note
macOSまたはLinuxを使用している場合は、番号の小さいポートを選択してください。
:::

- `Connect`をクリックします
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

### ステップ3. 既存のモデルを確認し、新しいモデルに変更する

- モデル名とモデルバージョンを確認します

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI5.png" style={{width:500, height:'auto'}}/></div>

- `Select Model...`をクリックし、フラッシュしたいモデルをクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI6.png" style={{width:500, height:'auto'}}/></div>

- `Confirm`をクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI7.png" style={{width:500, height:'auto'}}/></div>

### ステップ4. 効果をプレビューし、パラメータを調整する

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI8.png" style={{width:400, height:'auto'}}/></div>

現在のビジュアルウェイクアップ機能では、以下の設定オプションが提供されています：

- **ターゲットID** (`target`)：検出するターゲットIDを指定します。このIDは使用するビジュアルモデルに依存し、デフォルト値は0です。
- **検出時間** (`duration`)：単位は秒で、ビジュアルウェイクアップの感度を調整するために使用されます。デフォルトは1秒です（このデフォルトには1秒のデバウンス処理は含まれません）。
- **信頼度閾値** (`threshold`)：ビジュアルモデルがオブジェクトを認識するための信頼度の下限で、検出感度を調整するために使用されます。パーセンテージで表され、デフォルトは75%です。
- **クールダウン期間** (`interval`)：単位は秒で、1つの会話が終了した後、再度トリガーされるまでに必要な待機時間を示し、同じオブジェクトによる頻繁な中断を避けるために使用されます。デフォルトは8秒です。

例えば、`threshold`パラメータを変更することで、モデルの感度を調整できます。現在の閾値が厳しすぎると感じる場合は、Watcherに「信頼度閾値を60%に設定してください」と言うだけです。

## トラブルシューティング

### よくある問題

1. **COMポートが検出されない**
   - 下部のType-Cポートを使用していることを確認してください
   - 別のUSBケーブルを試してください
   - USBドライバが正しくインストールされているか確認してください

2. **フラッシュが失敗する**
   - Himaxをフラッシュする際は、"A"で終わるCOMポートを選択してください。
   - ESP32-S3をフラッシュする際は、"B"で終わるCOMポートを選択してください。

3. **デバイスが応答しない**
   - ピンを使ってリセットボタンを軽く押してください
   - フラッシュ前に消去を試してください

4. **デバイスがビジュアル検出でウェイクアップしない**
   - シリアル出力に関連するログメッセージがあるか確認してください。
   - ファームウェアバージョンv2.0.3では、この機能を有効にするために小智に「推論スイッチをオンにして」と言う必要があります。

5. **シリアルにビジュアル認識ログが表示されるが、デバイスがまだウェイクアップできない**
   - SenseCraft AIプラットフォームに移動し、PersonモデルをAIチップにフラッシュしてください。

## FAQ

**Q: Himaxに他のAIモデルをフラッシュできますか？**

A: 現在、FaceとPersonモデルのみがサポートされています。他のモデルのフラッシュはまだサポートされておらず、将来のアップデートで利用可能になる予定です。

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>