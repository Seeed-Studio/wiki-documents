---
description: この Wiki では、reComputer Robotics J3011 上で EM12-G GNSS 位置決めモジュールをインストールおよび構成する方法を説明します。
title: reComputer Robotics J3011 向け EM12-G GNSS モジュール
keywords:
  - Jetson
  - reComputer Robotics
  - J3011
  - GNSS
  - EM12-G
image: https://files.seeedstudio.com/wiki/GNSS_for_jetson/2.png
slug: /em12_g_gnss_module_for_recomputer_robotics_j3011
sku: 100001302
last_update:
  date: 07/01/2026
  author: Dongxu Jin
url: https://wiki.seeedstudio.com/ja/em12_g_gnss_module_for_recomputer_robotics_j3011/
createdAt: '2026-07-01'
updatedAt: '2026-07-01'
---

# reComputer Robotics J3011 向け EM12-G GNSS モジュールセットアップガイド

EM12-G は、測位アプリケーション向けに設計されたマルチコンステレーション GNSS 受信モジュールです。標準的な M.2 Key B フォームファクタを採用しており、NVIDIA Jetson や Raspberry Pi などの組み込みコンピューティングプラットフォームと互換性があります。複雑な都市環境や開けた屋外環境において、安定かつ信頼性の高いリアルタイム測位サービスを提供できます。

本ガイドでは、reComputer Robotics J3011 上の J401 キャリアボードを例として、EM12-G GNSS 位置決めモジュールの取り付け、電源投入、および設定方法を説明します。

## 注意事項

- **シリアルデバイス名は変わる可能性があります**: この Wiki では、NMEA データポートとして `/dev/ttyUSB1`、AT コマンドポートとして `/dev/ttyUSB2` をデフォルトとして使用しています。実際の USB シリアルノードはカーネルの列挙順序に依存するため、ポートは `ttyUSB0` や `ttyUSB3` など別のノードとして現れる場合があります。コマンドがファイルが存在しないと報告した場合は、まず `ls /dev/ttyUSB* /dev/ttyACM*` を実行して実際のデバイスノードを確認し、以下のコマンド中のポート名を置き換えてください。
- **屋外での測位が必須です**: GNSS の初回測位は屋内ではほとんど成功しません。必ず開けた屋外で一連のテストを行ってください。

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/1.png"/></div>

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/2.png"/></div>

## ハードウェアの取り付け

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/3.jpg"/></div>

モジュールをデバイスに取り付けた後、モジュール上で `G` とマークされた端子に**パッシブアンテナ**を接続します。デバイスを開けた屋外に設置してください。初回の衛星探索には約 3〜5 分かかる場合があります。

## 既存の GPIO プロセスをクリアする

古い GPIO 制御プロセスがピンを占有したままになっていることによる電源投入失敗を避けるため、まず既存の `gpioset` プロセスをクリアします:

```bash
sudo pkill -f gpioset || true
```

:::note
`|| true` によって、既存の `gpioset` プロセスが見つからない場合でも、後続の操作が継続されるようになります。
:::

## GPIO を介してモジュールの電源を入れる

:::danger
このセクションの GPIO コマンドは J401 キャリアボード専用です。これは J401 上の EM12-G モジュール専用の電源投入シーケンスです。別のキャリアボードを使用している場合は、まずそのキャリアボードのハードウェア回路図を確認してください。他のキャリアボード上でこれらの GPIO コマンドを実行しないでください。そうしないと、モジュールの電源が入らなかったり、ハードウェアが損傷したりする可能性があります。
:::

J401 キャリアボードでは、EM12-G の電源イネーブルおよびウェイクアップピンは Jetson の GPIO によって制御されます。以下の 3 つのコマンドを順番に実行し、バックグラウンドで動作させ続けてください:

```bash
sudo gpioset --mode=time --sec=200000 2 14=0 &
sudo gpioset --mode=time --sec=200000 2 12=0 &
sudo gpioset --mode=time --sec=200000 1 13=1 &
```

:::note
3 つのコマンドはすべて実行する必要があります。これらはそれぞれモジュールの電源イネーブル、リセット、および `W_DISABLE#` ピンを制御し、J401 に必要な電源投入シーケンスを構成します。
:::

## シリアルデバイスを待つ

モジュールの電源投入後、USB シリアルの列挙には数秒から数十秒かかる場合があります。NMEA データポートを手動でポーリングします:

```bash
for i in $(seq 1 60); do
    [ -e /dev/ttyUSB1 ] && echo "/dev/ttyUSB1 detected." && break
    echo "Waiting... ($i/60)"
    sleep 1
done
```

60 秒経過しても `/dev/ttyUSB1` が検出されない場合は、次のコマンドを実行して実際のシリアルポートを確認してください。また、アンテナが正しく接続されていること、およびモジュールが M.2 スロットに正しく挿入されていることも確認してください。

```bash
ls /dev/ttyUSB* /dev/ttyACM*
```

デバイスノードの存在を確認したら、次のコマンドを実行します。ターミナルに GNSS NMEA 出力が表示されるはずです。

```bash
sudo stdbuf -oL cat /dev/ttyUSB1
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/4.png"/></div>

## AT コマンドの設定

別のターミナルウィンドウを開き、AT コマンドポートに接続します。本ガイドでのデフォルトポートは `/dev/ttyUSB2` です。

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/5.png"/></div>

`minicom` に入ったら、NMEA 出力を設定し GNSS を有効化します:

```bash
# Set NMEA output
AT+QGPSCFG="outport","usbnmea"
AT+QCFG="gpsdrx",0

# Enable GNSS
AT+QGPS=1
```

GNSS を有効化すると、AT コマンドターミナルには `OK` が返され、先ほどのターミナルでは NMEA メッセージの出力が始まるはずです。初回の衛星探索には 3〜5 分かかる場合があります。開けた屋外でモジュールをテストしてください。

- `$GPGGA`、`$GPRMC` などのセンテンスが継続的に更新されていれば、モジュールとの通信は正常に動作しています。
- GGA センテンスでは、6 番目のフィールドが測位品質を示します。`1` は有効な測位を取得していることを意味し、`0` はまだ測位を取得していないことを意味します。屋外でさらに 1〜5 分待機してください。
- 出力を停止するには `Ctrl+C` を押します。

以下は、有効な緯度・経度データを含む測位情報の例です:

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/GNSS_for_jetson/6.png"/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
