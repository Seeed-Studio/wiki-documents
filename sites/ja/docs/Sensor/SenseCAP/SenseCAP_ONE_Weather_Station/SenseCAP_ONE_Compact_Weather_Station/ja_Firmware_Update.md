---
description: SenseCAP ONE 気象センサー ファームウェア更新
title: ファームウェア更新
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /firmware_update
last_update:
  date: 03/19/2026
  author: Kian
createdAt: '2026-03-19'
url: https://wiki.seeedstudio.com/ja/firmware_update/
updatedAt: '2026-03-31'
---
## SenseCAP ONE 気象センサー ファームウェア更新

:::tip
    このファームウェア更新は、SenseCAP ONE V2 気象ステーション専用です。
:::

### V1 と V2 気象ステーションの違い

V1 と V2 の気象ステーションは、**白いラベルに記載された SKU** またはベース部分のデザインによって見分けることができます。

さらに、USB Type-C ポートの位置も異なります。V1 では白いラベルと同じ側にあり、V2 では反対側にあります。

<div class="table-center">

| 製品名              |      V1 SKU          |       V2 SKU         |
| -------------------- | -------------------- | -------------------- |
| S200                 |        なし          |      101991044       |
| S500                 |      101990693       |      101991021       |
| S600-A               |        なし          |      101991232       |
| S700                 |      101990787       |      101991022       |
| S700-A               |        なし          |      101991050       |
| S700-B               |        なし          |      101991102       |
| S700-C               |        なし          |      101991141       |
| S800                 |        なし          |      101991023       |
| S900                 |      101990784       |        なし          |
| S1000                |      101990902       |      101991024       |

</div>

### SenseCAP ONE Configuration Tool

SenseCAP ONE Configuration Tool は、デバイスを設定するためのグラフィカルインターフェースを提供します。以下の GitHub リンクからツールをダウンロードできます。

&lt;https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases&gt;

ご利用の環境に応じて、Windows、macOS、または Linux 用のソフトウェアを選択してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png" /></div>

次の画像は、SenseCAP ONE Configuration Tool のメインインターフェースを示しています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png" /></div>

### ファームウェア更新手順

1. `SenseCAP One Configuration Tool` を開きます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_One_Configuration_Tool.png" /></div>

2. Type-C ケーブルでデバイスをコンピュータに接続します

3. ソフトウェアを開き、デバイスに対応する正しい `COM` ポートを選択し、`"Connect"` をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Connect.png" /></div>

4. 接続後、`"Firmware Update"` をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Firmware_Update.png" /></div>

5. 対象ボードと対応するファームウェアファイルを選択します

- `Master board` または `Slave Board1` を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Master_board.png" /></div>

- `"Local File"` をクリックし、ファームウェアフォルダを参照します

- `"Update"` をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update.png" /></div>

6. `"Update"` をクリックした後、デバイスの Reset ボタン（Type-C ポートの横）を押します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset.png" /></div>

ボタンを押してから数秒後に、更新プロセスが開始されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update2.png" /></div>

7. 更新が完了したら、再度 Reset ボタンを押し、画面上で `"OK"` をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset2.png" /></div>

8. 上記の手順を繰り返して、`Slave Board 1` に別のファームウェアを書き込みます。

9. 完了したら Firmware Update ウィンドウを閉じ、`"Disconnect"` をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Disconnect.png" /></div>

これで気象ステーションのファームウェア更新手順はすべて完了です。

## ファームウェアリソース

### 2025-04

- [Master Board ファームウェア](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/Firmware/sensecap-one-communication-v2_v4.7_release_20250407_154759.bin)

- [Slave Board 1 ファームウェア](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/Firmware/sensecap-one-driver-v2_v4.1_release_20250423_194038.bin)
