---
description: Wio Tracker L2 シリーズ向け SD カードチュートリアル。フォーマット、地図生成、地図インストールを含みます
title: SD カードの使用
keywords:
  - Meshtastic
  - Wio Tracker L2
  - MUI
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /l2_sd_card
sku: 100029766
sidebar_position: 1
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/l2_sd_card/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

オフラインマップを使用すると、**Wio Tracker L2** はインターネット接続なしでローカルに地図タイルを表示できます。これは、遠隔地やネットワーク接続が限られた場所で運用する際に便利です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={600} height="auto" /></p>

## 前提条件

作業を始める前に、以下のものを準備してください。

### ハードウェア

- Wio Tracker L2
- microSD カード（容量：**8 GB–32 GB**、ファイルシステム：**FAT32**）
- コンピュータ
- microSD カードリーダー

### ソフトウェア

- Meshtastic ファームウェア
- オフラインマップパッケージ

:::tip

お使いのデバイスに MUI がインストールされていない場合は、先にファームウェアのインストールを完了してください。

:::

## microSD カードの準備

### ステップ 1. microSD カードをフォーマットする

[ここをクリック](https://www.sdcard.org/downloads/formatter/)してフォーマッタをダウンロードします：

ソフトウェアをインストールしたら、次の操作を行います：

1. microSD カードをカードリーダーに挿入します。
2. **SD Memory Card Formatter** を起動します。
3. microSD カードを選択します。
4. `Quick format` を選択します。
5. **Format** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardFormat.png" alt="pir" width={400} height="auto" /></p>

これで、オフラインマップを保存する準備が整いました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FormatSucceed.png" alt="pir" width={400} height="auto" /></p>

:::warning

フォーマットを行うと、microSD カード上のすべてのデータが完全に削除されます。続行する前に、重要なファイルは必ずバックアップしてください。

:::
### ステップ 2. ディレクトリ構造を作成する
MUI がマップを認識するには、SD カードのルートに特定のフォルダ階層で配置する必要があります：
1. maps（小文字）という名前のフォルダを作成します。
2. maps フォルダ内に、CartoDark などスタイル用のサブフォルダを作成します。
3. 最終的なパスは次のようになります：SD_ROOT/maps/CartoDark/


###  ステップ 3. オフラインマップをダウンロードする

[ここをクリック](https://github.com/meshtastic/device-ui/tree/master/maps)して、公式ダウンロードページからオフラインマップパッケージをダウンロードします。 

ダウンロードしたパッケージには、MUI に必要なすべての地図データが含まれています。`atlas.zip`、`dark-matter-brown.zip`、`osm.zip`、`positron.zip` は 4 種類の異なる地図ファイルパッケージです。好みに応じて、1 つまたは複数を選んでダウンロードできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Downloadmap.png" alt="pir" width={400} height="auto" /></p>

###  ステップ 4. マップファイルをコピーする

1. microSD カードを開きます。
2. ダウンロードした ZIP パッケージを `maps` フォルダに展開します。

ディレクトリ構造は次のようになります：

```text
microSD
└── maps
    ├── atlas
        └── 0
        └── ...
        └── 8
    ├── dark-matter-brown
    └── osm
```

:::note

特別な指示がない限り、**maps** フォルダの名前を変更しないでください。

:::

コピー処理が完了したら、microSD カードを安全に取り外します。その後、カードを L2 に挿入して地図を確認できます。