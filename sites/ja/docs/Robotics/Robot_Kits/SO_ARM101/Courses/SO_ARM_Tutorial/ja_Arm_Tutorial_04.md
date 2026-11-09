---
description: "SO-ARM Physical AI ビギナーコース第 4 章 — 関節・リンク・自由度がアームを構成する仕組み、バスサーボアクチュエータとは何か、そして STS3215 シリアルバス・サーボ ID・制御ボードの連携を理解します。"
title: 第 4 章 - ロボットアームとバスサーボの基礎
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - ロボットアーム
  - サーボ
  - STS3215
  - バスサーボ
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_4
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_4/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 2 · 第 4 章 · 理論</span>
    <h2>4. ロボットアームとバスサーボの基礎</h2>
    <p>
      関節・リンク・自由度がアームを構成する仕組み、バスサーボアクチュエータとは何か、そして STS3215 シリアルバス・サーボ ID・制御ボードの連携を理解します。
    </p>
    <div className="hero-actions">
      <a href="#arm-anatomy">アームの構造</a>
      <a href="#bus-servo">バスサーボ</a>
      <a href="#wiring">配線と電源</a>
    </div>
  </div>
</section>

## 4.1 復習：関節、リンク、自由度

<section id="arm-anatomy" className="section-card">
  <div className="section-title">
    <span>構造</span>
    <h2>4.1 復習：関節、リンク、自由度</h2>
  </div>

第 1 章ではロボットアームを「複数の関節とリンクの協調」と定義しました。今度はそれを SO-ARM に具体的にマッピングします。各アームには 5 つの回転関節と 1 つの平行グリッパがあります：

| 関節 | 名称 | 役割 |
| :--- | :--- | :--- |
| 1 | 肩旋回（ベース） | アーム全体を左右に回転 |
| 2 | 肩上下 | 上腕を上げ下げ |
| 3 | 肘 | 前腕を上げ下げ |
| 4 | 手首ピッチ | グリッパを上下に傾ける |
| 5 | 手首回転 | グリッパを自身の軸で回転 |
| 6 | グリッパ | フィンガーを開閉 |

5 つの回転自由度で、アームの作業空間内の任意の把持点にグリッパを位置・姿勢ともに持っていけます。グリッパは**エンドエフェクタ** — 実際にワークに触れる部分です。

各関節は 1 個の Feetech STS3215 バスサーボで駆動されます。リーダー・フォロワーの SO-ARM ペアは合計 **12 個のサーボ**を使います — これがこのロボットの実行系のすべてです。

</section>

## 4.2 サーボアクチュエータとは

<section id="servo" className="section-card">
  <div className="section-title">
    <span>アクチュエータ</span>
    <h2>4.2 サーボアクチュエータとは</h2>
  </div>

**アクチュエータ**はコマンドを運動に変換します。ロボットアームでは一般に、何らかのフィードバック付きの電動機を使います。**サーボ**（サーボモータ）は次の 3 つを 1 つの筐体に収めたものです：

1. 回転を生む**DC モーター**；
2. 速度をトルクに変える**減速ギアボックス**；
3. **位置センサー**（ポテンショメータまたは磁気エンコーダ）と、目標角度へ駆動し続ける制御回路。

サーボに目標位置を送ると、そこへ移動して保持します — 外部コントローラは不要です。この「角度へ動いて保持する」動作こそ関節に必要なものです。

### 減速比が重要な理由

ギアボックスの減速比は、モーター 1 回転あたりの出力回転量 — つまり得られるトルクを決めます。SO-ARM は関節ごとに異なる減速比の STS3215 サーボを使います：

| サーボ型番 | 減速比 | 使用箇所 |
| :--- | :--- | :--- |
| ST-3215-C044（7.4V） | 1:191 | SO101 リーダー L1、L3 |
| ST-3215-C001（7.4V） | 1:345 | SO101 リーダー L2 |
| ST-3215-C046（7.4V） | 1:147 | SO101 リーダー L4〜L6 |
| ST-3215-C001（7.4V）/ C018（12V）/ C047（12V） | 1:345 | フォロワー F1〜F6 |

- **大きな減速比（1:345）** = 高トルク・低速 — 自重と負荷を支える箇所（フォロワー関節、リーダー肩 L2）に必要；
- **小さな減速比（1:147 / 1:191）** = 高速・軽量 — 人手で動かすリーダー関節に使用。

:::note
SO-ARM101 リーダーの L1〜L3 は SO-ARM100 と減速比が異なるため、第 6 章のサーボ設定は自分のキットのバージョンに厳密に合わせる必要があります。減速比が想定と異なるサーボは、誤ったキャリブレーションと誤った追従を招きます。
:::

</section>

## 4.3 シリアルバス：1 本のケーブルで 6 つのサーボ

<section id="bus-servo" className="section-card">
  <div className="section-title">
    <span>通信</span>
    <h2>4.3 シリアルバス：1 本のケーブルで 6 つのサーボ</h2>
  </div>

従来のホビーサーボはそれぞれ個別の PWM 信号線が必要です。STS3215 は**シリアルバスサーボ**：全サーボが共有の 3 ピンバス（GND、VCC、DATA）に接続され、次のサーボへデイジーチェーンされます。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="SO-ARM101 サーボバス配線" />
</div>

2 つの概念がこれを成立させています：

- **サーボ ID**：バス上の各サーボには ID（SO-ARM では関節に対応する 1〜6）があります。バス上のコマンドは宛先 ID を運ぶため、6 つのサーボが 1 本の線を共有しても混線しません。工場設定（第 6 章）では ID は 1 個ずつ書き込まれます。
- **ボーレート**：サーボと制御ボードは通信速度が一致している必要があります。設定ツールは全サーボに一貫したボーレートを書き込みます。

バスプロトコルは各サーボの現在位置・温度・電圧・負荷の**読み取り**も可能にします — テレオペレーション中にリーダーが人の動きをリアルタイムに報告し、フォロワーの状態がデータセットへ記録される仕組みです。

:::danger
全サーボが 1 本のバスを共有するため、ID の書き込みはその ID を持つ全サーボに影響します。重複 ID（例：2 つのサーボが ID 4 に応答）がある状態で ID 4 を書き換えると**両方**変わってしまいます。だからこそ ID は常に接続した 1 個のサーボずつ書き込むのです — 第 7 章のデバッグツールが最初に他のサーボを外すよう求める理由もこれです。
:::

</section>

## 4.4 サーボ制御ボード・配線・電源

<section id="wiring" className="section-card">
  <div className="section-title">
    <span>配線</span>
    <h2>4.4 サーボ制御ボード・配線・電源</h2>
  </div>

各アームには小さな **LeRobot サーボ制御ボード**があります：片側に 3 ピンのサーボバスソケット、もう片側に PC への USB-C コネクタと DC 電源ジャックです。

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-2-install-controller-board-soarm-en.webp" alt="サーボ制御ボードの取り付け" />
</div>

最も多いハードウェア故障を防ぐルール：

- **USB-C はデータのみ。** USB ケーブルではサーボは給電されません — 動かすには DC 電源も接続が必要です；
- **電圧はサーボ種類に一致**：7.4V 版 STS3215 には 5V、12V 版には 12V。リーダーは常に 7.4V モーター（5V 電源）。Pro キットのフォロワーは 12V 電源を使います；
- **サーボケーブル・USB ケーブル・電源コネクタの抜き差しは必ず電源オフで**；
- 最初のサーボ（ID 1、ベース）が制御ボードに接続され、以降の各サーボは直前のサーボに接続します。サーボの LED が消えていたら、その手前のケーブルが緩んでいる可能性があります。

</section>

## 4.5 まとめ

<section id="summary" className="section-card">
  <div className="section-title">
    <span>まとめ</span>
    <h2>4.5 まとめ</h2>
  </div>

- SO-ARM 1 本 = 5 つの回転関節 + グリッパ、関節ごとに 1 個の STS3215 バスサーボ；
- サーボ = モーター + ギアボックス + 位置フィードバック。減速比は速度をトルクに変えます；
- 6 つのサーボが 3 ピンのシリアルバス 1 本を共有。サーボ ID で区別され、位置は読み戻せます；
- 制御ボードは USB（データ）と DC（電源）をバスへ橋渡しします — 両方の接続が必須で、電圧も正しく。

次章でソフトウェア環境を構築し、その後モーターの設定と組み立てに進みます。

</section>

</div>
