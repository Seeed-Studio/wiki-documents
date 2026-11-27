---
description: このガイドでは、LoRa で長いテキストを送信するとエアタイムが長くなる理由と、2 台の SenseCAP T1000-E トラッカーで OSHI Mesh を使って送信する方法を説明します。
title: 長文テキストの送信
draft: true
keywords:
  - Meshtastic
  - Long Text Transmission
  - OSHI Mesh
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Oshifirst.png
slug: /meshtastic_long_text_transmission
sku: 114993369
sidebar_position: 1
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-11-25'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/ja/meshtastic_long_text_transmission/
---

## はじめに

### LoRa における短いテキストと長いテキストの違い

*エアタイム*とは、無線が送信に費やす時間のことです。同じ無線設定では、パケット数が多いほど一般的にエアタイムも多くなります。拡散率が高い場合や帯域幅が狭い場合、各パケットにかかる時間が長くなります。

| | 短いテキスト | OSHI Mesh を使った長いテキスト |
| --- | --- | --- |
| **送信パケット数** | データパケット 1 個| いくつかのデータパケットに加え、配達確認、および欠落したフラグメントに対する要求や再送。 |
| **リレーのトラフィック** | 各リレーは単一のデータパケットを転送できます。 | リレーは各フラグメントを転送でき、メッシュ全体で送信が増えます。 |
| **他のトラフィックへの影響** | エアタイムが少ない| エアタイムが多い。混雑したチャネルでは、送信の重なりによりパケットロスや遅延が発生する可能性があります。 |
| **配達の条件** | データパケット 1 個が届けばよい。 | すべてのフラグメントが届く必要があります。安定したリンクと、再送のための十分なエアタイムがあると有利です。 |


### LoRa におけるメッセージ長の制限

標準的な Meshtastic のテキストメッセージは、1 パケットにおよそ **230 バイト** 収まります。絵文字や多くの非英語文字は、それぞれ複数バイトを使用します。

[OSHI Mesh](https://github.com/Lastoneparis/oshi-mesh-protocol) は、3 つのステップで長文テキストをサポートします。

1. **分割。** 送信側はメッセージを番号付きフラグメントに分割し、Meshtastic 互換のパケットに載せます。
2. **抜けを埋める。** 受信側は欠落したフラグメントを要求し、送信側がその部分を再送できるようにします。
3. **再構成と確認。** 受信ノードはフラグメントを順番に並べ直し、完全なメッセージに対する受領確認を送信できます。

![長文テキストがパケットに分割され、欠落したパケットが LoRa 経由で再送され、メッセージが再構成される](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Deliverylogic.png)

### OSHI Mesh

![OSHI Messenger の Web サイトとアプリのプレビュー](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Oshifirst.png)

- **OSHI Mesh** は、OSHI の [オープンソース無線ファームウェア](https://github.com/Lastoneparis/oshi-mesh-firmware) です。Meshtastic 互換の LoRa 設定、チャネル、キーを使用します。どちらかのファームウェアを実行しているノードは、設定次第で互いのトラフィックを中継できます。長文メッセージ、配達確認、ストア・アンド・フォワードは OSHI Mesh Protocol を使用します。
- **使用する場面。** 携帯電話サービスが利用できず、全文が届いたことを確認したい状況で、経路案内や現場引き継ぎなど、複数段落の更新をときどき送信する場合に使用します。対応アプリビルドを使えば、数千文字のメッセージを送信できます。正確な長さは、テキストが使用するバイト数によって異なります。

## T1000-E に OSHI Mesh を書き込む

![SenseCAP T1000-E、マグネット式データケーブル、OSHI Mesh のフラッシュページ](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/OshiT1000-E.png)

両方のトラッカーですでに OSHI Mesh ファームウェア `2.8.1.fda175c` が動作している場合は、同じファームウェアを使ったアプリのセットアップに進んでかまいません。

1. **SenseCAP T1000-E** の UF2 ファイルを **Boards that install a different way** からダウンロードします。 [OSHI Mesh flash page](https://oshi-messenger.com/lora/flash/)
2. **手動で DFU モードに入ります。** マグネット式データケーブルの USB 側をコンピュータに接続します。トラッカーのボタンを押し続けたまま、ボタンを離さずにマグネットコネクタをトラッカーにすばやく 2 回接続します。緑色の LED が点灯したままになり、**T1000-E** ドライブが表示されます。DFU モードの詳細な手順を見るには[こちらをクリック](https://wiki.seeedstudio.com/ja/sensecap_t1000_e/#step-1-enter-dfu-mode)してください。

   ![T1000-E のマグネット式データケーブルと Finder に表示された DFU ドライブ](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/T1000-EDFU.png)

3. UF2 ファイルを **T1000-E** ドライブにコピーします。トラッカーは自動的に再起動します。2 台目のトラッカーについても同じ操作を行います。

すでに Meshtastic CLI をインストールしている場合は、USB 接続されたトラッカーで DFU モードに入ることができます。`<YOUR_PORT>` をそのシリアルポートに置き換えてください。

```bash
meshtastic --port <YOUR_PORT> --enter-dfu
```

## アプリをセットアップして長文メッセージを送信する

**アプリ要件。** OSHI Mesh 上で長い LoRa メッセージをサポートする OSHI ビルドを搭載した Android スマートフォンを 2 台使用します。

1. 各スマートフォンで OSHI を開き、**Settings → LoRa Node** を開いて 1 台のトラッカーとペアリングします。デフォルト PIN の入力を求められた場合は、`123456` を入力します。
2. 両方のトラッカーを、設置場所に合った同じ LoRa リージョンに設定し、デフォルトチャネルを使用します。 
3. 短いメッセージをやり取りして、各スマートフォンが相手の連絡先ノードを学習できるようにします。これにより、送信側は長文メッセージに対する配達確認を受け取れるようになります。
4. いくつかの段落を送信します。ステータスが **Queued** から **Sent**、**Delivered** へと進む様子を確認します。2 台目のスマートフォンで、すべての段落がまとめて正しい順序で表示されていることを確認します。

## 想定される動作

- **アプリでの配達時間。** 上記の近距離セットアップでは、長文メッセージ 1 通あたり **1～2 分程度** を見込んでください。メッセージサイズ、無線設定、チャネルのトラフィック、リレー、再送などによって待ち時間は変動します。
- **EU_868 でのキューイングされたメッセージ。** ファームウェアは、地域のデューティサイクル制限を守るため、長文メッセージのエアタイムを直近 1 時間のローリングウィンドウで追跡します。長文送信を数回行うと、新しいメッセージが **Queued** のままになり、利用可能なエアタイムが増えるまで待機する場合があります。デモでは、長文メッセージは 1 回に 1 通ずつ送り、送信の合間に数分待つようにしてください。

## ストア・アンド・フォワード

OSHI ノードは、オフラインの連絡先ノードがすでに既知であれば、最大 **72 時間** メッセージを保持できます。メッセージを保持しているノードの電源を入れたままにしておくと、連絡先ノードがオンラインに戻り到達可能になったときに、そのメッセージを転送できます。 [OSHI Mesh の機能概要](https://oshi-messenger.com/lora/why-oshi-mesh)

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