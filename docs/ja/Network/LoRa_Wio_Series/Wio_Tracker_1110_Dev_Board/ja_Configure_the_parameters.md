---
description: Wio_Tracker_1110のパラメータ設定
title: パラメータ設定
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/configure_param_for_wio_tracker
sidebar_position: 9
sidebar_class_name: hidden
last_update:
  date: 9/14/2023
  author: Jessie
---


開始する前に、まず[ツールチェーンのセットアップ](https://wiki.seeedstudio.com/ja/setup_toolchain_for_wio_tracker)を確認してください。

### リージョン設定

工場出荷時ファームウェアのデフォルトリージョンはEU868です。異なるリージョンの周波数要件を満たすためにリージョンを設定するには、以下の手順に従ってリージョンを変更できます。

LoRaWANサンプルの'Region'部分を置き換えてください。

```cpp
REGION = SMTC_MODEM_REGION_'Region'
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/set-region.png" alt="pir" width={800} height="auto" /></p>

次に`Upload`をクリックしてプログラムをアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/program.png" alt="pir" width={800} height="auto" /></p>

右上の`Serial Monitor`ボタンを使用してログを確認することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port-monitor.png" alt="pir" width={800} height="auto" /></p>

### Triad情報設定

Wio Tracker 1110開発ボードでは、ユーザーがDevEUI、AppEUI、AppKeyを設定できます。これは他のネットワークサーバーに登録する際に必要です。

`LoRaWAN/TTN Example`を開き、triad情報を定義して`Upload`をクリックします。

```cpp
static const uint8_t DEV_EUI[8]  = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
static const uint8_t JOIN_EUI[8] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
static const uint8_t APP_KEY[16] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/change-3-codes.png" alt="pir" width={800} height="auto" /></p>

<details>
<summary>情報</summary>

または、ネットワークサーバーによって生成されたtriad情報を取得し、`Constants`部分に入力してボード上で実行することもできます。

例：TTSから。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

</details>