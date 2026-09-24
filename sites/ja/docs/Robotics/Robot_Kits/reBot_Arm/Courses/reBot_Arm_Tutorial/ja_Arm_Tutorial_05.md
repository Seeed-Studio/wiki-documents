---
description: "Seeed Embodied Intelligence Beginner's Course の第5章 — CAN バスの基礎、標準フレームと拡張フレーム、CAN データリンク層、および SocketCAN。"
title: 第5章 - CAN バスとモーター通信
keywords:
  - reBot
  - CAN Bus
  - CAN Protocol
  - SocketCAN
  - DM Motor
  - RS Motor
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_5
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/ja/rebot_embodied_ai_course_chapter_5/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 2 · 第5章 · 理論</span>
    <h2>5. CAN バスとモーター通信</h2>
    <p>
      Seeed Embodied Intelligence Beginner's Course の第5章 — CAN バスの基礎、標準フレームと
      拡張データフレーム、CAN データリンク層、および SocketCAN について説明します。
    </p>
    <div className="hero-actions">
      <a href="#原理">CAN の原理</a>
      <a href="#プロトコル">CAN プロトコル</a>
      <a href="#socketcan">SocketCAN</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>この章で学ぶこと</strong>
    <span>5.1 CAN の基本原理</span>
    <span>5.2 CAN プロトコル</span>
    <span>5.3 SocketCAN</span>
  </div>
</section>

<RebotCourseNav />

<section className="section-card">
  <p>このセクションを学習した後、次のような疑問を理解できるようになります。</p>

- 1つのデータが CAN バス上でどのように送信されるか；
- CAN データフレームがどのような部分から構成されているか；
- CAN ID、DLC、Data がそれぞれ何を表しているか；
- 標準フレームと拡張フレームの違いは何か；
- CRC や ACK などのフィールドがどのような役割を持つか。

実際の開発では、最初から CAN フレーム内のすべてのビットを暗記する必要はありません。

:::tip
初心者段階で最も重要なのは、まず **ID, DLC, Data** を理解することです。
:::

</section>

## 5.1 CAN の基本原理

<section id="principles" className="section-card">
  <div className="section-title">
    <span>原理</span>
    <h2>5.1 CAN の基本原理</h2>
  </div>

CAN は Controller Area Network の略で、ISO によって国際標準化されたシリアル通信プロトコルです。CAN バスネットワーク構造には、クローズドループとオープンループの2つの形態があります。

一般に、ロボットアームやロボットで使用される CAN バスネットワーク構造はクローズドループ CAN バスネットワークであり、すなわちバスの両端に 120 オームの抵抗を接続し、2本の信号線でループを構成します。この CAN バスネットワークは ISO 11898 規格で定義されており、通信速度 125 kbit/s 〜 1 Mbit/s の高速・短距離 CAN ネットワークです。通信速度 1 Mbit/s のとき、最大バス長は 40 m です。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-5/ch5-01.png" alt="CAN bus network" />
</div>

バスは CAN_L と CAN_H の2本の信号線で構成されます。CAN は差動信号を伝送し、2本の信号線間の電圧差、すなわち CAN_H - CAN_L によってバスレベルを表します。論理 1 に対応するものをリセッシブレベル、論理 0 に対応するものをドミナントレベルと呼びます。ISO 11898 では、リセッシブレベルは電圧差 0 付近、ドミナントレベルは主に電圧差 2V 付近です。

</section>

## 5.2 CAN プロトコル

<section id="protocol" className="section-card">
  <div className="section-title">
    <span>プロトコル</span>
    <h2>5.2 CAN プロトコル</h2>
  </div>

| フレーム種別 | フレームの目的 |
| :--- | :--- |
| データフレーム | データを送信する |
| リモートフレーム | データを要求する |
| エラーフレーム | バスエラーを報告する |
| オーバーロードフレーム | 遅延を要求する |
| インターフレームスペース | 連続するフレームを分離する |

:::note
DM モーターは CAN 2.0 標準データフレームを使用し、RS モーターは CAN 2.0 拡張データフレーム形式を使用するため、以下ではこの2つのデータフレーム形式のみを紹介します。モーターのデータシート内のプロトコルセクションと照らし合わせながら、以下の説明を読むことを推奨します。
:::

### 5.2.1 reBot DM 標準データフレーム（合計 11 バイト）

| **バイト** | **フィールド**     | **ビット割り当て**                                       |
| -------- | ----------------- | -------------------------------------------------------- |
| Byte 1   | フレーム情報      | Bit 7: FF, Bit 6: RTR, Bit 5: X, Bit 4: X, Bits 3–0: DLC |
| Byte 2   | フレーム ID 1     | Bits 7–0: ID10–ID3                                       |
| Byte 3   | フレーム ID 2     | Bits 7–5: ID2–ID0, Bits 4–0: X                           |
| Byte 4   | データ 1          | DATA1                                                    |
| Byte 5   | データ 2          | DATA2                                                    |
| Byte 6   | データ 3          | DATA3                                                    |
| Byte 7   | データ 4          | DATA4                                                    |
| Byte 8   | データ 5          | DATA5                                                    |
| Byte 9   | データ 6          | DATA6                                                    |
| Byte 10  | データ 7          | DATA7                                                    |
| Byte 11  | データ 8          | DATA8                                                    |


**フレーム説明部（先頭 3 バイト）：**

- **Byte 1 はフレーム情報です。** Bit 7（FF）はフレーム形式を示します。標準フレームでは FF は 0 です。Bit 6（RTR）はフレーム種別を示します。RTR=0 はデータフレーム、RTR=1 はリモートフレームを表します。データフレームの場合、DLC は実際のデータ長を示します。
- **Byte 2〜5 はフレーム ID です。** 標準データフレームの ID は 11 ビットです。ID10 から ID0 まで順番に送信され、2<sup>11</sup> 種類のメッセージが存在し得ます。フレーム ID の範囲は 000〜7FF です。

:::warning
上位 7 ビットがすべてリセッシブになることは禁止されています（禁止設定: ID=1111111XXXX）。
:::

**フレームデータ部（最後の 8 バイト）：**

- **Byte 4〜11 はデータフレームの実データです。**

### 5.2.2 reBot RS 拡張データフレーム（13 バイト）

| **バイト** | **フィールド**     | **ビット割り当て**                                       |
| -------- | ----------------- | -------------------------------------------------------- |
| Byte 1   | フレーム情報      | Bit 7: FF, Bit 6: RTR, Bit 5: X, Bit 4: X, Bits 3–0: DLC |
| Byte 2   | フレーム ID 1     | Bits 7–0: ID28–ID21                                      |
| Byte 3   | フレーム ID 2     | Bits 7–0: ID20–ID13                                      |
| Byte 4   | フレーム ID 3     | Bits 7–0: ID12–ID5                                       |
| Byte 5   | フレーム ID 4     | Bits 7–3: ID4–ID0, Bits 2–0: X                           |
| Byte 6   | データ 1          | DATA1                                                    |
| Byte 7   | データ 2          | DATA2                                                    |
| Byte 8   | データ 3          | DATA3                                                    |
| Byte 9   | データ 4          | DATA4                                                    |
| Byte 10  | データ 5          | DATA5                                                    |
| Byte 11  | データ 6          | DATA6                                                    |
| Byte 12  | データ 7          | DATA7                                                    |
| Byte 13  | データ 8          | DATA8                                                    |

**フレーム説明部（先頭 5 バイト）：**

- **Byte 1 はフレーム情報です。** Bit 7（FF）はフレーム形式を示します。拡張フレームでは FF は 1 です。Bit 6（RTR）はフレーム種別を示します。RTR=0 はデータフレーム、RTR=1 はリモートフレームを表します。データフレームの場合、DLC は実際のデータ長を示します。
- **Byte 2〜5 はフレーム ID です。** 拡張形式の ID は 29 ビットです。ベーシック ID は ID28〜ID18、拡張 ID は ID17〜ID0 で表されます。ベーシック ID は標準形式の ID と同じです。2<sup>29</sup> 種類のメッセージが存在し得て、データリンク上にはギャップがあります（オペレーターからは透過的）。フレーム ID の範囲は 0000 0000〜1FFF FFFF です。

:::warning
上位 7 ビットがすべてリセッシブになることは禁止されています（禁止設定: basic ID=1111111XXXX）。
:::

**フレームデータ部（最後の 8 バイト）：**

- **Byte 6〜13 はデータフレームの実データです。**

### 5.2.3 CAN データリンク層

CAN バスは「グループチャット」として理解することができます。多くのデバイスがバスに接続されており、例えば：

- メインコントローラ；
- モーター；
- センサー；
- バッテリーマネジメントシステム；
- その他の制御モジュール。

すべてのデバイスは同じ CAN バスを共有します。あるデバイスがデータを送信したいとき、好き勝手に送ることはできず、CAN プロトコルで規定された形式に従ってデータを完全な **CAN データフレーム** にパッケージしなければなりません。

CAN フレームは、次のように単純化して理解できます。

**送信開始 → メッセージ番号 → データ長 → 実データ → データチェック → 受信確認 → 送信終了**

これに対応する CAN フレーム構造は、次のように簡略化できます。

**SOF → ID → 制御フィールド → DLC → Data → CRC → ACK → EOF**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-5/ch5-02.png" alt="CAN frame structure" />
</div>

詳細な説明は以下の表を参照してください。

| 名称 | 機能 |
| :--- | :--- |
| アイドルセグメント（バスアイドル） | バスはリセッシブレベル 1 にあり、どのノードもバスを操作していません。どのデバイスもデータを送信していないとき、CAN バスはアイドル状態です。このときは誰も話しておらず、全員が待機しています。 |
| フレーム開始（SOF） | SOF は 1 ビットのドミナントビット `0` に固定されています。CAN バスがアイドル状態のときは `1` であるため、バス上に突然 `0` が現れると、他のデバイスは「あるデバイスがデータ送信を開始した」と分かります。したがって、SOF は **「今から送信を始めます」** と理解できます。 |
| 仲裁セグメント（フレーム ID、RTR または SRR） | **ID** — このメッセージの番号として理解できます。例えばモーター制御では、`0x01`: モーター1の制御コマンド、`0x02`: モーター2の制御コマンド、などとできます。**ID はより正確には「メッセージの識別子または種類」を表し、ID の値が小さいほど優先度が高くなります。** <br/>**RTR** — 主に、通常のデータフレーム RTR=0 とリモート要求フレーム RTR=1 を区別するために使われます。日常的に通常の CAN データを送信する場合、RTR は一般的に 0 です。<br/>**SRR** — 拡張フレーム専用の仲裁ビットで、1 に固定されています。同じベーシック ID の下で、標準フレームが拡張フレームより優先されることを保証するために主に使用されます。 |
| 制御セグメント（IDE、予約ビット、DLC） | IDE ビットは標準フレームと拡張フレームを区別するために使用されます。**IDE = 1** は拡張フレームで、29 ビット ID。**IDE = 0** は標準フレームで、11 ビット ID です。拡張フレームは ID の範囲が広く、より多くのメッセージ番号を提供できます。<br/>**DLC** — 受信側にデータ量を知らせます。例えば：DLC = 1 は 1 Byte（8 ビット）のデータ、DLC = 4 は 4 Byte（32 ビット）のデータ、DLC = 8 は 8 Byte（64 ビット）のデータを示します。 |
| データフィールド | ここが実際のデータ内容で、長さは DLC に対応します。例えば、メインコントローラがモーターに対して、目標位置・目標速度・目標トルクを送信する必要がある場合などです。**各バイトが何を表すかは、デバイスメーカーが提供する CAN 通信プロトコルを確認してください。** |
| CRC セグメント | CAN データの「チェックコード」です。フレーム開始、仲裁セグメント、制御セグメント、データセグメントを含むすべてのデータビットに対して CRC 計算を行います。**CAN データの伝送中にエラーが発生していないかをチェックします。** CRC デリミタはリセッシブレベルでなければなりません。 |
| ACK セグメント | ACK — 送信側に「受信しました」と伝えます。送信側が送信を終えると、バスをリセッシブレベル 1 に解放します。受信側が正しく受信した場合、このビットでドミナントレベル 0 を返す必要があります。このとき送信側は ACK スロットを 0 として読み取り、ACK を受信したことを示します。ACK デリミタは、受信側がレベルを解放したときであり、リセッシブです。 |
| フレーム終了（EOF, **End Of Frame**） | 現在の CAN データ伝送が終了したことを示します。7 ビットのリセッシブ 1 です。 |

<div className="image-frame">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-5/ch5-03.png" alt="CAN データリンク層" />
</div>

</section>

## 5.3 SocketCAN

<section id="socketcan" className="section-card">
  <div className="section-title">
    <span>ツール</span>
    <h2>5.3 SocketCAN</h2>
  </div>

SocketCAN は、Linux システムにおける CAN プロトコルの主流な実装です。SocketCAN は socket API と Linux ネットワークスタック技術を使用して、CAN デバイスドライバをネットワークインターフェースとして実装しており、使いやすく高い互換性を備えています。

詳細な使用方法については、参考ドキュメントをご覧ください：<a href="https://docs.linuxkernel.org.cn/networking/can.html" target="_blank" rel="noopener noreferrer">https://docs.linuxkernel.org.cn/networking/can.html</a>

</section>

</div>
