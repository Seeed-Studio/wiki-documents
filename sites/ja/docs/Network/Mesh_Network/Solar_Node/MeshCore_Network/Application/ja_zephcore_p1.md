---
description: Seeed Studio の LoRa メッシュデバイス上で、Zephyr ベースの MeshCore ファームウェアである ZephCore を試してみましょう。
title: Zephyr 開発
keywords:
  - ZephCore
  - Zephyr RTOS
  - MeshCore
  - LoRa mesh
image: https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorephoto.png" 
slug: /zephcore_getting_started_p1
sku: 114993633,114993643
sidebar_position: 3
last_update:
  date: 11/24/2026
  author: Michelle Huang
createdAt: 2026-11-24T00:00:00.000Z
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/ja/zephcore_getting_started_p1/
---

## ZephCore と MeshCore の関係

MeshCore によって、LoRa デバイスはオフグリッドでメッセージをやり取りできます。 [ZephCore project](https://github.com/liquidraver/ZephCore) は、Zephyr オペレーティングシステム上に構築された MeshCore のコミュニティポートです。1 台のデバイスで ZephCore を試し、MeshCore を実行している友人にメッセージを送ることができます。両方の無線機で設定を一致させる必要があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorephoto.png" alt="ZephCore GitHub project" width={800} height="auto" /></p>

| 何が変わるのか？ | MeshCore ファームウェア | ZephCore ファームウェア |
| --- | --- | --- |
| ファームウェアプラットフォーム | Arduino ベースの MeshCore ファームウェア | Zephyr RTOS 上に構築されたポート |
| LoRa ネットワーク | MeshCore の LoRa メッシュ | 同じ MeshCore メッシュ |
| モバイルアプリ | BLE Companion 対応の MeshCore アプリ | 対応する BLE Companion ビルドを備えた同じアプリ |

## Zephyr とは？

Zephyr は、小型デバイス向けのオープンソースリアルタイムオペレーティングシステムです。トラッカーでは、ボタンが押されたときにプロセッサを起動したり、GPS 受信機を読み取ったり、ディスプレイを更新したりできます。ZephCore はこれらのサービスを利用してメッシュノードを動作させます。

## デバイスを選ぶ

スマートフォンから Bluetooth 経由でメッセージを送りたい場合は **Companion** を選択します。近くのノードのメッセージを中継したい場合は **Repeater** を選択します。

| デバイス | 画像 | ZephCore でのボード名 |
| --- | --- | --- |
| [Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/1-100030144-wio-tracekr-l1-pro-meshcore.jpg" alt="Wio Tracker L1 Pro in the MeshCore getting started guide" width={160} height="auto" /></p> | `wio_tracker_l1` |
| [SenseCAP MeshTracker X1](https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html) | <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png" alt="SenseCAP MeshTracker X1 in the MeshCore getting started guide" width={160} height="auto" /></p> | `meshtracker_x1` |
| [SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="SenseCAP T1000-E in the MeshCore getting started guide" width={160} height="auto" /></p> | `t1000_e` |
| [SenseCAP Solar Node P1 Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/image1_2.jpeg" alt="SenseCAP Solar Node P1 Pro in the MeshCore getting started guide" width={160} height="auto" /></p> | `sensecap_solar` が対応するボード名です |

[board list](https://github.com/liquidraver/ZephCore/blob/master/docs/supported_boards.md) と [firmware releases](https://github.com/liquidraver/ZephCore/releases) で、お使いのボード向けにどのビルドが利用可能かを確認してください。

## ZephCore を書き込む

ファームウェアを切り替える前に、無線設定を保存し、ノード ID を保持したい場合はバックアップしてください。ファームウェアを切り替えると、ノードを再設定する必要があります。

1. **接続。** USB データケーブルでデバイスをコンピュータに接続します。Chrome または Edge で [ZephCore Web Flasher](https://zephcore.meshcore.dev/) を開きます。
2. **選択。** 上の表を使って、正確なボードとロールを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/ZephcoreSeeedproduct.png" alt="Seeed Studio devices in the ZephCore Web Flasher" width={900} height="auto" /></p>

3. **書き込み。** 指示に従って USB デバイスを選択し、ファームウェアをインストールします。フラッシャーが完了を報告するまで待ちます。
4. **テスト。** 近くの MeshCore ノードと同じ地域向け無線プリセットを選択します。Companion の場合は、MeshCore アプリでペアリングし、メッセージを送信して返信を依頼します。Repeater の場合は、リレーを介してメッセージが 2 台目のノードに届くことを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorefirst.jpg" alt="ZephCore startup screen on the L1 Pro" width={550} height="auto" /></p>

## ZephCore で何ができる？

### バッテリー消費を測定する

誰もメッセージを送信していないときでも、LoRa パケットを待ち受けるには電力を消費します。対応する SX126x 無線機では、ZephCore は短いウィンドウで受信することで、**平均電流を削減** できます。 

### スマホを取り出さずに L1 Pro を確認する

L1 Pro では、ジョイスティックを使って OLED ステータス画面を切り替え、デバイス上でバッテリー残量を確認できます。これは、トラッカーが手元にあり、スマートフォンがしまわれているときに便利です。画面のない X1 と T1000-E では、MeshCore アプリを使って Companion のステータスを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/ZephCore%20Menu.jpg" alt="ZephCore menu on the L1 Pro OLED" width={550} height="auto" /></p>

### Zephyr 上のゲームを試す

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcoregame.gif" alt="ZephCore game demonstration" width={480} height="auto" /></p>

## 最初の ZephCore ファームウェアをビルドする

Git、Zephyr ツール、およびお使いの ZephCore リビジョンに必要な SDK をインストールします。[ZephCore build instructions](https://github.com/liquidraver/ZephCore)

新しいフォルダから、プロジェクトとその依存関係をダウンロードします：

```bash
git clone https://github.com/liquidraver/ZephCore.git zephcore
west init -l zephcore
west update
```

同じフォルダから、L1 Pro 用ファームウェアをビルドします：

```bash
west build -b wio_tracker_l1 zephcore --pristine
```

ここで、`west` は Zephyr のコマンドラインツールであり、`-b` はボードを選択します。このコマンドはコンピュータ上でファームウェアをコンパイルします。最初の編集を試すには、L1 Pro のステータス画面上のラベルを変更し、再ビルドして、プロジェクトの手順に従ってローカルビルドをインストールします。新しいラベルによって、自分のファームウェアが動作していることを目で確認できます。

ソースコードを読み進める際は、ハードウェアの接続方法を確認するために **Devicetree** を、ビルドで有効になっている機能を確認するために **Kconfig** を探してください。

## 技術サポート & 製品ディスカッション

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