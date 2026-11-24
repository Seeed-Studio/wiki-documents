---
# Document type: project
description: "reSpeaker Clip を DeepSeek Harness (DSH) と組み合わせて音声入力に使用します。デバイスを接続し、ローカルの SenseVoice 認識を準備して、RTC ライブ音声や SD 録音を編集可能なチャット下書きに変換します。"
title: "DSH で音声入力に reSpeaker Clip を使用する"
keywords:
  - reSpeaker Clip
  - DeepSeek Harness
  - DSH
  - SenseVoice
  - speech-to-text
  - RTC
  - BLE
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /respeaker_clip_for_agent
sku: 100020126
last_update:
  date: 11/20/2026
  author: Wang Kunpeng
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_for_agent/
---

# DSH で音声入力に reSpeaker Clip を使用する

reSpeaker Clip を DeepSeek Harness (DSH) と組み合わせて音声入力に使用します。デバイスを接続し、ローカルの SenseVoice 認識を準備して、RTC ライブ音声や SD 録音を編集可能なチャット下書きに変換します。


## 1. Clip デバイスを準備する

このガイドでは、RTC は Clip の BLE を介したリアルタイム音声伝送を指します。SD モードでは録音が Clip 上に保存され、録音停止後に Bluetooth 経由で同期されます。

デバイスボタンを RTC 入力に使用するには、[ファームウェア書き込みガイド](/ja/respeaker_clip_firmware_quick_start)に従って `clip_agent` ブランチのファームウェアを書き込みます。非 RTC（SD）モードでは、ここで説明するワークフローにこの追加ファームウェア更新は不要です。

[Firmware repository, clip_agent branch](https://github.com/Ant-wkp/reSpeaker_Clip/tree/clip_agent)



## 2. プラグインをインストールしてデバイスを接続する

1. **プラグインをインストールする**

   DSH で **Plugins → Add plugin** を開き、`dsh-clip-for-agent` と入力してプラグインをインストールして有効化します。続行する前に再起動を求められた場合は、DSH を再起動してください。

   [npm package](https://www.npmjs.com/package/dsh-clip-for-agent) · [GitHub repository](https://github.com/Ant-wkp/dsh-clip-for-agent)

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-1.jpg" alt="pir" width={1080} height="auto" /></p>

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-2.jpg" alt="pir" width={1080} height="auto" /></p>

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-3.jpg" alt="pir" width={1080} height="auto" /></p>
2. **デバイスを接続する**

   パソコンの Bluetooth と Clip の電源をオンにします。左サイドバーで **Clip** を開き、**Scan for devices** をクリックします。自分のデバイスを見つけて **Pair and connect** をクリックします。OS に表示される Bluetooth ペアリングのプロンプトを完了します。
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-4.jpg" alt="pir" width={1080} height="auto" /></p>

3. **音声認識を準備する**

   **Clip → Speech recognition** で、案内に従って公式の音声認識コンポーネントと SenseVoice モデルをインストールします。**Install official speech recognition** が表示された場合は、Clip パネルでそのままクリックします。DSH から再起動を求められた場合は再起動し、このパネルに戻ってモデルの準備を完了します。

   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-for-dsh-5.jpg" alt="pir" width={1080} height="auto" /></p>

## 3. 音声でテキストを入力する

**Clip → Recording results → Recording mode** で **RTC live audio** または **SD recording (sync on stop)** を選択します。その後、テキストを入力したいチャットを開きます。

1. **RTC モード**

   このモードは入力レイテンシが低く、上記の `clip_agent` ファームウェアが必要です。デバイスボタンをダブルプレスして音声入力を開始し、再度ダブルプレスして停止します。プラグインは録音中に音声を受信し、録音停止後にデコードと文字起こしを行います。

2. **非 RTC（SD）モード**

   デバイスボタンを長押しして録音を開始し、再度長押しして停止します。音声は Bluetooth で転送されて文字起こしされる前に Clip 上に保存されるため、停止後の待ち時間は長くなります。

チャット入力欄の Clip マイクボタンや、Clip パネルの録音ボタンから録音を開始することもできます。画面上の停止ボタンを使って録音を終了します。


## トラブルシューティング

- **スキャンにデバイスが表示されない。** Bluetooth と Clip の電源がオンになっていることを確認し、Clip をパソコンに近づけてから再度スキャンしてください。
- **モデルが準備完了にならない。** **Clip → Speech recognition** を開き、ダウンロードの進行状況を確認するか、表示される案内に従って再試行してください。録音を行う前に、モデルが準備完了になるまで待ちます。
- **SD の同期または文字起こしに失敗する。** **Clip → Recording results** から再試行してください。デバイスを再接続した後は、**Sync latest SD recording** を選択することもできます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
