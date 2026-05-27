---
description: Seeed Jetson DevelopTool を使用して、USB または Ethernet 経由で Seeed Jetson デバイスをホスト PC に接続する方法。
title: デバイスを接続
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - デバイス接続
  - SSH
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_connect_device
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/ja/jetson_developtool_connect_device/
---

Seeed Jetson DevelopTool は、タスクに応じて 2 つの方法で Jetson デバイスに接続します：

| 接続タイプ | 用途 |
|-----------------|----------|
| **USB（リカバリーモード）** | Flash Center を使用したファームウェア書き込み |
| **Ethernet / SSH** | デバイス管理、リモート開発、アプリマーケット、スキル、PC ネットワーク共有 |

## USB 接続（リカバリーモード）

ファームウェアを書き込むにはリカバリーモードが必要です。リカバリーモードに入るには：

1. Jetson デバイスの電源を切ります。
2. デバイス上の **Recovery** ボタンを押し続けます。
3. Recovery を押し続けたまま、デバイスとホスト PC 間を USB-C ケーブルで接続する（またはデバイスの電源を入れる）。
4. 2 秒後に Recovery ボタンを離します。

DevelopTool で **Flash Center** を開き、**Detect Device** をクリックして USB 接続が認識されていることを確認します。

:::tip
Linux では、次のコマンドでデバイスが認識されているか確認できます：

```bash
lsusb | grep NVIDIA
```

`NVIDIA Corp. APX` のようなエントリが表示されるはずです。
:::

:::caution
Windows では、WSL2 経由の USB パススルーには `usbipd` ツールが必要です。信頼性の高い書き込みにはネイティブ Linux を推奨します。
:::

## Ethernet / SSH 接続

書き込み以外のすべての機能では、DevelopTool は Ethernet（または設定済みであれば Wi-Fi）経由で SSH を用いて Jetson に接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-device-connection.png" style={{width:800, height:'auto'}}/></div>

**手順：**

1. Jetson とホスト PC を同じネットワークに接続するか、[PC Network Sharing](/ja/jetson_developtool_remote_development) を有効にした直接接続の Ethernet ケーブルを使用します。
2. DevelopTool で **Remote Dev** タブを開きます。
3. **Device Connection** パネルに Jetson の IP アドレス、SSH ユーザー名、パスワードを入力します。
4. **Connect** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/connect-device-connection.png" style={{width:800, height:'auto'}}/></div>

接続されると、デバイスステータスパネルに CPU、GPU、メモリ、温度のリアルタイム情報が表示されます。

:::tip
Jetson の IP アドレスが分からない場合は、初回起動時に [Jetson Init](/ja/jetson_developtool_remote_development) シリアルウィザードを使用してネットワークを設定し、割り当てられた IP を表示させてください。
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
