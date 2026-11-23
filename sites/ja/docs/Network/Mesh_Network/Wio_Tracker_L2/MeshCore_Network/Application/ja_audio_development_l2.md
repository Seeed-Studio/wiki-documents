---
description: Wio Tracker L2 Pro 上でのローカルオーディオ開発について説明します。Cairn を用いた音声制御プロジェクト、オーディオの保存および再生を含みます。このワークフローでは MeshCore 経由の音声伝送はサポートされていません。
title: オーディオ開発
keywords:
  - Wio Tracker L2 Pro
  - MeshCore
  - Cairn
  - Audio
  - I2S
image: https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_music.jpg
slug: /meshcore_audio_development_l2
sku: 100029766
sidebar_position: 2
last_update:
  date: 11/16/2026
  author: Michelle Huang
createdAt: 2026-09-19T00:00:00.000Z
updatedAt: '2026-09-24'
url: https://wiki.seeedstudio.com/ja/meshcore_audio_development_l2/
---

## オーディオ開発の境界を理解する

マイクとスピーカーにより、デバイスは音声を取得して再生できます。音声メッセージを別のデバイスに送信するには、十分な無線エアタイムも必要です。

| ユースケース | 原理 | 開発の境界 |
| --- | --- | --- |
| 音楽や録音ファイルを再生する | ローカルオーディオ<br/>LoRa を必要としない | ✅ |
| ボイスメモを録音する | ローカルオーディオ<br/>LoRa を必要としない | ✅ |
| ローカル音声制御を開発する | デバイス上での認識とローカルアクション<br/>カスタムファームウェア実装が必要 | ✅ |
| MeshCore 経由で短い音声クリップを送信する | オーディオトラフィックが共有チャネルを飽和させ、緊急メッセージをブロックする可能性がある | ❌ |
| 連続した音声通話やトランシーバーのようなストリーミング | オーディオトラフィックが共有チャネルを飽和させ、緊急メッセージをブロックする可能性がある | ❌ |

### オーディオ開発がサポートされる範囲

L2 Pro 上でのオーディオ開発は現在、**ローカルでの処理、保存、および再生**に限定されています。サポートされる開発方向は次のとおりです。

- **ローカル音声制御：** デバイス上でコマンドを認識し、それを用いてローカルアクションをトリガーする
- **オーディオ録音と保存：** マイク入力を取得し、録音を microSD に保存する。
- **オーディオ再生：** 音楽や録音したボイスメモを再生する。
- **ローカル通知音：** テキストメッセージや他のイベントが到着したときに、LoRa 経由でサウンドファイルを送信することなく、ローカルに保存されたサウンドを再生する。

:::warning
**MeshCore ネットワーク経由でのボイスメッセージ伝送は、この L2 Pro オーディオ開発ワークフローではサポートされていません。**

LoRa メッシュノードは限られた無線エアタイムを共有します。オーディオ転送はチャネルを長時間占有する可能性があり、中継や再送がさらに負荷を増やします。これにより深刻な輻輳が発生し、メッシュ通信が停止状態に陥ることで、緊急メッセージがチャネルにアクセスできなかったり、時間内に到達しなくなったりするおそれがあります。

オーディオの取得、音声処理、保存、および再生はデバイス上に留めてください。メッシュネットワーク上でオーディオペイロードを送信しないでください。
:::

### ローカルオーディオ開発のヒント

カスタムのローカルオーディオアプリケーションを作成する場合、次の点を計画してください。

- **入力と出力：** マイクとスピーカーの経路を個別に検証し、マイクゲインと再生音量を含めて確認する。
- **ローカル音声認識：** ESP32-S3 の処理能力とメモリ予算に適合する、デバイス上で動作する認識エンジンを選択する。
- **ストレージ：** 利用可能な microSD 容量に収まるサンプル形式と録音時間を選択し、カード容量が一杯になった場合や書き込み失敗時の処理を行う。
- **タスクスケジューリング：** オーディオ処理やファイルアクセスが、メッシュパケット処理やタッチスクリーンインターフェースをブロックしないようにする。

## L2 Pro におけるハードウェア基盤

### オーディオ信号経路

L2 Pro のオーディオサブシステムは、I2S インターフェース、コーデック回路、マイク経路を使用します。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/l2_audio_hardware_schematic.png" style={{width:600, height:'auto'}}/>
</div>

### オーディオピンマッピング

| インターフェース | ボード信号 | ESP32-S3 GPIO | 用途 |
| --- | --- | --- | --- |
| I2S | `CODEC_I2S0_MCLK` | GPIO10 | マスタークロック |
| I2S | `CODEC_I2S0_SCLK` | GPIO11 | ビットクロック（BCLK とも呼ばれる） |
| I2S | `CODEC_I2S0_LRCK` | GPIO12 | ワードセレクト／フレームクロック（WS とも呼ばれる） |
| I2S | `CODEC_I2S0_DSDIN` | GPIO16 | ESP32-S3 TX → コーデックデータ入力；再生 |
| I2S | `CODEC_I2S0_SDOUT` | GPIO15 | オーディオデータ出力 → ESP32-S3 RX；録音 |
| I²C | `IIC0_SDA` | GPIO47 | 周辺機器設定データ |
| I²C | `IIC0_SCL` | GPIO48 | 周辺機器設定クロック |


## L2 Pro に Cairn をインストールする

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_page.png" style={{width:600, height:'auto'}}/>
</div>

### Cairn について

[Cairn](https://github.com/cvhviz/CAIRN) は、独自のデバイス上インターフェースを備えた MeshCore コンパニオンファームウェアの、コミュニティ開発によるフォークです。L2 Pro 向けビルドは、タッチスクリーンメッセージングとローカルオーディオツールを組み合わせ、公式 MeshCore クライアントと連携して動作します。別のビルドを使用する場合は、[release notes](https://github.com/cvhviz/CAIRN/releases) を確認してください。 

### 準備

次を準備します。

- LoRa アンテナを接続した **Wio Tracker L2 Pro** を 1 台。

- USB-C **データケーブル** と、Chrome または Edge を実行しているコンピュータ。

- 音楽および録音用の microSD カード。Cairn は **FAT32 でフォーマットされた 8～32 GB の SDHC** を推奨しています。exFAT は、ドキュメント化されている L2 Pro カードワークフローではサポートされていません。

- 再生テスト用の短い MP3 または WAV ファイル。


### ファームウェアの書き込み

**ステップ 1：L2 Pro ファームウェアをダウンロードする**

[Cairn Releases](https://github.com/cvhviz/CAIRN/releases) を開き、**Assets** を展開します。**`WioL2Pro`** を含むファイルを選択します。

この初回インストールチュートリアルでは、**`-full.bin`** をダウンロードしてください。アプリケーションをすでに含んでいるため、`-update.bin` を別途書き込む必要はありません。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_firmware.png" style={{width:900, height:'auto'}}/>
</div>

**ステップ 2：ダウンロードモードに入る**

1. L2 Pro をコンピュータに接続し、電源スイッチをオンにします。

2. **User/Boot** を押し続けます。

3. 押し続けたまま **RST** を押して離します。

4. **User/Boot** を離します。

**ステップ 3：ブラウザ経由で書き込む**

1. [Espressif の Web Flasher](https://espressif.github.io/esptool-js/) を開きます。

2. **Connect** をクリックし、デバイスのシリアルポートを選択します。

3. **Erase Flash** を選択し、完了するまで待ちます。

4. ファームウェアアドレスを **`0x0`** に設定し、ダウンロードした L2 Pro の `-full.bin` を選択します。

5. **Program** をクリックし、書き込みが完了するまで待ちます。

6. フラッシャーとの接続を切断し、**RST** を押して Cairn を起動します。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Carin_web_flasher.png" style={{width:900, height:'auto'}}/>
</div>

## Cairn のオーディオインターフェースを試す

### Audio ハブを開く

準備した microSD カードを挿入します。**Home** から下にスワイプして **Audio** カードを探すか、クイックパネルから **Audio** を開きます。ハブからプレーヤーとレコーダーにアクセスできます。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_audio_hub.jpg" style={{width:600, height:'auto'}}/>
</div>

### microSD から音楽を再生する

1. カードのルートに **`music`** という名前のフォルダを作成します。

2. 短い MP3 または WAV ファイルをその中にコピーし、コンピュータから安全にカードを取り外します。

3. カードを L2 Pro に挿入し、プレーヤーを開いて **Library → Music** からファイルを選択します。

4. 低い音量から再生を開始し、動作を確認します。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_music.jpg" style={{width:600, height:'auto'}}/>
</div>

### ボイスメモを録音する

1. Audio ハブから **Recorder** を開きます。

2. 設定を開き、録音品質、マイクゲイン、時間制限を選択します。

3. 短い録音を開始し、マイクの近くで話してから停止します。

4. **Library → Recordings** を開いて再生します。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_record.jpg" style={{width:600, height:'auto'}}/>
</div>

レコーダーは、時計が設定されている場合は日時を用いて、**`Recordings`** 内に WAV ファイルを保存します。8 kHz または 16 kHz での録音、検出された音声で録音を開始する **Voice start**、およびマーカーを提供します。ステータスバーには、マイクがアクティブな間 **MIC** または **REC** が表示されます。


### カスタム通知音を試す

ルートレベルの **`Sounds`** フォルダに短い MP3 または WAV をコピーします。**Settings → Hardware → Sound** を開き、イベントを選択して、カードのサウンド一覧からファイルを選びます。


### 試してみる価値のあるその他の Cairn 機能

- **スタンドアロンメッセージング：** タッチスクリーンキーボード、クイック返信、絵文字を使って、チャンネルおよびダイレクト会話を行います。

- **地図と測位：** デバイス上の地図、GPS 情報、近くのノード位置を確認し、外出前にオフラインカバレッジを準備します。

- **無線インスペクション：** パケットトラフィック、信号情報、スペクトラム／バンドスキャンを確認し、ローカルの無線状況を把握します。

- **ファイルアクセス：** microSD カードを取り外さずに、Wi-Fi 転送や USB ドライブモードを試してカード内容を管理します。

- **デバイスのパーソナライズ：** テーマ、ボタン動作、バッテリー履歴表示を試してみてください。

## トラブルシューティング

- **ブラウザがデバイスを検出できない：** USB データケーブルを確認し、他のシリアルアプリケーションを閉じてから、User/Boot + RST の手順をやり直してください。


- **音楽ファイルが表示されない：** FAT32 でフォーマットされているか、ルートレベルの `Music` フォルダ、および MP3/WAV 形式を確認します。ストレージページを使用してカードを確認または再スキャンします。


- **録音が無音になる：** ゲインと録音設定を確認します。カスタムファームウェアの場合は、再生とは別に、マイクの初期化と GPIO15 RX 経路を検証してください。

## 技術サポートと製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

