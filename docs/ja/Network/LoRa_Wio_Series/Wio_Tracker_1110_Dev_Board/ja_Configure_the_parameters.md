---
description: Wio Tracker 1110 のパラメータを設定する
title: パラメータ設定
keywords:
- トラッカー
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/configure_param_for_wio_tracker
sidebar_position: 9
sidebar_class_name: hidden
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

開始する前に、まず [ツールチェーンのセットアップ](https://wiki.seeedstudio.com/ja/setup_toolchain_for_wio_tracker) を確認してください。

### リージョン設定

工場出荷時のファームウェアのデフォルトリージョンは EU868 です。異なる地域の周波数要件を満たすためにリージョンを設定するには、以下の手順に従ってリージョンを変更してください。

LoRaWAN サンプル内の 'Region' 部分を置き換えます。

```cpp
REGION = SMTC_MODEM_REGION_'Region'
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/set-region.png" alt="pir" width={800} height="auto" /></p>

その後、`Upload` をクリックしてプログラムをアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/program.png" alt="pir" width={800} height="auto" /></p>

また、右上の `Serial Monitor` ボタンを使用してログを確認することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port-monitor.png" alt="pir" width={800} height="auto" /></p>

### トライアド情報の設定

Wio Tracker 1110 開発ボードでは、DevEUI、AppEUI、および AppKey を設定することができます。これは、他のネットワークサーバーに登録する際に必要です。

`LoRaWAN/TTN Example` を開き、トライアド情報を定義して `Upload` をクリックします。

```cpp
static const uint8_t DEV_EUI[8]  = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
static const uint8_t JOIN_EUI[8] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
static const uint8_t APP_KEY[16] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/change-3-codes.png" alt="pir" width={800} height="auto" /></p>

<details>
<summary>情報</summary>

または、ネットワークサーバーによって生成されたトライアド情報を取得し、それを `Constants` 部分に入力してボード上で実行することもできます。

例: TTS から取得。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

</details>