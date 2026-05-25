---
description: SenseCAP Watcher Agent にファームウェアを書き込むためのガイド
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
slug: /visual_trigger_and_ai_flash
last_update:
  date: 12/04/2025
  author: Twelve
translation:
  skip:
    - zh-CN
createdAt: '2025-10-17'
updatedAt: '2025-12-04'
url: https://wiki.seeedstudio.com/ja/visual_trigger_and_ai_flash/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Watcher への AI モデルのフラッシュ

## 概要

このプロジェクトを実現するうえで多大な貢献をしてくださったオープンソースプロジェクト [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) に特別な感謝を申し上げます。

このガイドでは、SenseCAP Watcher に「ビジュアル認識トリガー会話」ファームウェアを書き込む方法と、デバイス上の AI モデルを置き換えたり更新したりする方法に焦点を当てています。これらの操作を実践的に説明する手順ガイドです。

Watcher の機能、アプリケーション、ユースケースの詳細な紹介については、[SenseCAP Watcher - 世界と能動的に対話する AI アシスタント](https://wiki.seeedstudio.com/ja/solutions/hello_watcher_llms/) を参照してください。

## 前提条件

### 必要なハードウェア

- SenseCAP Watcher デバイス  
- USB Type-C データケーブル  
- Windows PC  

:::note
**Visual Activation Firmware** をフラッシュし、かつお使いの Watcher デバイスのモデルが **-EN ではない** 場合、通常使用のために認証ファイルを手動でフラッシュする必要があります（1 回のみ必要）。  
詳しい手順については、[Watcher Agent Firmware フラッシュガイド](https://wiki.seeedstudio.com/ja/flash_watcher_agent_firmware/)を参照してください。
:::

## ファームウェアのフラッシュ手順

<Tabs>
<TabItem value="sensecraft" label="SenseCraft AI" default>

<!-- :::caution Note
The following guide is for an internal testing website that has not yet been released.
The official version will be available soon.
Please use another method to flash the firmware for now.
::: -->

**前提条件**

- [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)

**Step 1.** **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP Watcher`** から SenseCAP Watcher ワークスペースにアクセスするか、この[ワークスペースへの直接リンク](https://sensecraft.seeed.cc/ai/device/local/37)を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/watcher_workspace.png" style={{width:800, height:'auto'}}/></div>

**Step 2. シリアルポート経由でプラットフォームに接続する**

- `Connect` をクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

- 正しいシリアルポート（末尾が “A” のもの）を選択します

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>

:::note
macOS または Linux を使用している場合は、番号が小さい方のポートを選択してください。
:::

- `Connect` をクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

**Step 3. デバイスバージョンの確認と更新**

- `Update` をクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI9.png" style={{width:500, height:'auto'}}/></div>

- 正しいシリアルポート（末尾が "B" のもの）を選択します

  :::note
  macOS または Linux を使用している場合は、番号が大きい方のポートを選択してください。
  :::

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI10.png" style={{width:500, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>

- 'Connect' をクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI11.png" style={{width:500, height:'auto'}}/></div>

- フラッシュしたいバージョンを選択し、`Confirm` をクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI12.png" style={{width:500, height:'auto'}}/></div>

- 更新と再起動のプロセスが完了するまで待ちます

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI13.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher1" label="Flash Download Tool">

**前提条件**

- **Visual Trigger Firmware v2.0.4**: [ダウンロードリンク](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-en.bin)

- [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip)（バージョン 3.9.6 以降）

**Step 1. デバイス（本体底面の Type-C ポート）を接続し、Flash Download Tool を開きます**

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

**Step 2. ファームウェア設定を構成する**

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

**Step 3. COM ポートとフラッシュ設定を選択する**

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

- START をクリックしてもフラッシュが開始されない場合は、STOP をクリックし、末尾が “B” の COM ポートを選択しているか確認してください。

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>

**Step 4. 消去とフラッシュ**

- 既存のファームウェアを消去するために `ERASE` ボタンをクリックします
- 消去プロセスが完了するまで待ちます
- `START` ボタンをクリックしてフラッシュを開始します
- ログウィンドウに進行状況が表示されるはずです
- 進行状況が表示されない、または失敗する場合は、別の COM ポートを試してください

**Step 5. 成功を確認する**

- ログウィンドウに成功メッセージが表示されたら、フラッシュプロセスは完了です。

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

**Step 6. デバイスを再起動する**

- Watcher デバイス上のリセットホールを探します
- ピンを使ってリセットボタンを軽く押します
- デバイスは新しいファームウェアで再起動します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="flasher2" label="Command Line" default>

- 前提条件

  - **Visual Trigger Firmware v2.0.4**: [ダウンロードリンク](https://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/merged-binary-en.bin)

  - [esptool.py](https://github.com/espressif/esptool)

**Step 1. ダウンロードしたファームウェアパッケージを展開し、esptool.py を使用してフラッシュを実行します**

```shell
esptool.py -p /dev/ttyACM0 -b 2000000 write_flash 0 merged-binary.bin
```

*(注: ポート `/dev/ttyACM0` はお使いのシステムに合わせて調整してください。例: Windows では `COM3` など)*

**Step 2. デバイスを再起動する**

- Watcher デバイス上のリセットホールを探します
- ピンを使ってリセットボタンを軽く押します
- デバイスは新しいファームウェアで再起動します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:300, height:'auto'}}/></div>

</TabItem>

<TabItem value="compile" label="ソースからコンパイル（開発者向け）">
- 前提条件

  - [ESP-IDF v5.5.1](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html#manual-installation)

  - [オープンソースリポジトリ（Xiaozhi AI コラボレーション）](https://github.com/Wvirgil123/xiaozhi-esp32/tree/main)

**Step 1. ESP-IDF CMD を開き、プロジェクトフォルダに移動する**

```shell
cd xiaozhi-esp32
```

**Step 2. 対象チップを設定する**

```shell
idf.py set-target esp32s3
```

**Step 3. 設定メニューを開く**

```shell
idf.py menuconfig
```

**Step 4. ボードタイプを SenseCAP Watcher に設定する**

- Xiaozhi Assistant を選択します

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig1.png" style={{width:700, height:'auto'}}/></div>

- Board Type を選択します

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig2.png" style={{width:700, height:'auto'}}/></div>

- SenseCAP Watcher を選択します

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig3.png" style={{width:700, height:'auto'}}/></div>

**Step 5. 必要に応じて追加設定を行う（オプション）**

- 既定の表示言語と AEC（Automatic Echo Cancellation / 音声割り込み処理）

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig4.png" style={{width:700, height:'auto'}}/></div>

- ウェイクワードとトリガー

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig5.png" style={{width:700, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/menuconfig6.png" style={{width:700, height:'auto'}}/></div>

- アプリケーション固有のその他のオプションパラメータ

- 設定が完了したら、メニューを保存して終了します

**Step 7. ファームウェアをビルドしてフラッシュする**

```shell
idf.py build flash
```

</TabItem>
</Tabs>

:::note
ビジュアルウェイクアップ機能をサポートするのは、ファームウェアバージョン 1.8.8 以降のみです。
v2.0.3 より上のファームウェアバージョンでは、ビジュアル検出を有効にするために Xiaozhi に「Turn on the inference switch」と話しかける必要があります。
:::

## AI モデルのフラッシュ手順

- 前提条件

  - [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)

**Step 1.** **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP Watcher`** から SenseCAP Watcher ワークスペースにアクセスするか、この[ワークスペースへの直接リンク](https://sensecraft.seeed.cc/ai/device/local/37)を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/watcher_workspace.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2. シリアルポートでプラットフォームに接続する**

- `Connect` をクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI2.png" style={{width:800, height:'auto'}}/></div>

- 正しいシリアルポート（末尾が “A” のもの）を選択します

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI3.png" style={{width:500, height:'auto'}}/></div>

:::note
macOS または Linux を使用している場合は、番号が小さい方のポートを選択してください。
:::

- `Connect` をクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI4.png" style={{width:500, height:'auto'}}/></div>

**ステップ 3. 既存モデルの確認と新しいモデルへの変更**

- モデル名とモデルバージョンを確認します

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI5.png" style={{width:500, height:'auto'}}/></div>

- `Select Model...` をクリックし、書き込みたいモデルをクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI6.png" style={{width:500, height:'auto'}}/></div>

- `Confirm` をクリックします

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI7.png" style={{width:500, height:'auto'}}/></div>

**ステップ 4. 効果をプレビューし、パラメータを調整する**

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI8.png" style={{width:400, height:'auto'}}/></div>

現在のビジュアルウェイクアップ機能では、次の設定オプションが利用できます：

- **Target ID** (`target`)：検出するターゲット ID を指定します。この ID は使用するビジュアルモデルに依存し、デフォルト値は 0 です。
- **Detection Duration** (`duration`)：単位は秒で、ビジュアルウェイクアップの感度を調整するために使用します。デフォルトは 1 秒です（このデフォルトには 1 秒のデバウンス処理は含まれません）。
- **Confidence Threshold** (`threshold`)：ビジュアルモデルが物体を認識するための信頼度の下限で、検出感度を調整するために使用します。パーセンテージで表され、デフォルトは 75% です。
- **Cooldown Period** (`interval`)：単位は秒で、1 回の会話が終了してから再度トリガーされるまでに必要な待ち時間を示し、同じ物体による頻繁な割り込みを避けるために使用します。デフォルトは 8 秒です。

例えば、`threshold` パラメータを変更することでモデルの感度を調整できます。現在のしきい値が厳しすぎると感じた場合は、Watcher に「信頼度のしきい値を 60% に設定してください」と話しかけてください。

## トラブルシューティング

### よくある問題

1. **COM ポートが検出されない**
   - 下側の Type-C ポートを使用していることを確認してください
   - 別の USB ケーブルを試してください
   - USB ドライバが正しくインストールされているか確認してください

2. **フラッシュに失敗する**
   - Himax をフラッシュする場合は、末尾が “A” の COM ポートを選択してください。
   - ESP32-S3 をフラッシュする場合は、末尾が “B” の COM ポートを選択してください。

3. **デバイスが反応しない**
   - ピンを使ってリセットボタンを軽く押してください
   - フラッシュする前に一度消去を試してください

4. **ビジュアル検出でデバイスがウェイクアップしない**
   - シリアル出力に関連するログメッセージがあるか確認してください。
   - ファームウェアバージョン v2.0.3 では、この機能を有効にするために Xiaozhi に「Turn on inference switch」と話しかける必要があります。

5. **シリアルにビジュアル認識ログが表示されるが、デバイスが依然としてウェイクアップしない**
   - SenseCraft AI Platform にアクセスし、Person モデルを AI チップにフラッシュしてください。

## FAQ

**Q: Himax に他の AI モデルを書き込むことはできますか？**

A: 現在サポートされているのは Face モデルと Person モデルのみです。他のモデルの書き込みはまだサポートされておらず、今後のアップデートで利用可能になる予定です。

## テクニカルサポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>