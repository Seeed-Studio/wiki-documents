---
description: XIAO_nRF52840_NFC ライブラリを使用した XIAO nRF52840（Sense）の NFC 利用方法。
title: 両バージョン向け NFC の使い方
keywords:
  - xiao
  - nRF52840
  - NFC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-NFC-Usage
sku: 102010448, 102010469
last_update:
  date: 07/16/2026
  author: Morgan
createdAt: '2026-05-25'
url: https://wiki.seeedstudio.com/ja/XIAO-BLE-Sense-NFC-Usage/
updatedAt: '2026-07-17'
---

# Seeed Studio XIAO nRF52840（Sense）での NFC の使い方

**Seeed Studio XIAO nRF52840 シリーズ**の両方には、nRF52840 に内蔵された NFCT（Near Field Communication Tag）ペリフェラルをベースとした**NFC（近距離無線通信）モジュール**が搭載されています。NFC Type 2 Tag 機能をサポートしており、外部 NFC アンテナを接続することで、XIAO nRF52840 を NFC タグとして動作させ、スマートフォンやその他の NFC リーダーから読み取ることができます。

この Wiki では、ライブラリのインストール、ハードウェア接続、アンテナのチューニング、セットアップの検証、自分だけの NFC タグの作成まで、NFC の使用ワークフロー全体を順を追って説明します。

:::note
このチュートリアルは **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)** ライブラリに基づいています。Seeed nRF52 Boards バージョン **1.1.13** でテストおよび確認済みです。
:::

## 事前準備

ボードライブラリのインストールについては、Seeed nRF52 Boards のインストールを完了するために **[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)** を参照してください。すでにインストール済みの場合は、次に進みましょう。

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-selecting-board-NRF52840-for-nfc.png" /></div>

:::note
Boards Manager で必ず **Seeed XIAO nRF52840** ボードを選択してください。古い「Seeed nRF52 mbed-enabled Boards」ライブラリは**すでにメンテナンスされておらず**、使用すべきではありません。
:::

## 必要なハードウェア

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840</th>
        <th>Seeed Studio XIAO nRF52840 Plus</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_front.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840plus.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
    <tr>
        <th>Seeed Studio XIAO nRF52840 Sense</th>
        <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840senceplus.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::tip
基本的な NFC 機能は、NFC1/NFC2 にアンテナをはんだ付けするだけで動作します。コミュニティでのテスト（Seeed フォーラムの **[andriandreo](https://forum.seeedstudio.com/u/andriandreo/summary)** 氏に特に感謝します）の結果、以下の 2 種類のアンテナは、追加の回路チューニングなしで、はんだ付け直後から動作することが確認されました。

- **MOLEX 1462360051**
- **TAOGLAS FXR.07.A.DG**

その後、TAOGLAS FXR.07.A.DG の問い合わせ距離をさらに向上させるために、各 NFC パッド（D14, D15）から GND へ **43 pF** のチューニングコンデンサを 2 個追加しました。約 40 pF というコンデンサ値は、nRF52840 MCU プロダクト仕様データシートの **「6.14.10 NFCT antenna recommendations」** 節から算出したものです。

不安定な動作（ポップアップが途中で止まる、検出が断続的になるなど）が発生する場合は、マッチングコンデンサを追加することで信頼性が大幅に向上します。詳細は [Antenna Tuning](#antenna-tuning) を参照してください。

より実践的なテスト結果については、[元のフォーラムディスカッション](https://forum.seeedstudio.com/t/xiao-nrf52840-nfc-antenna-insights/277696)もチェックしてみてください。
:::

## 必要なソフトウェア

<div class="table-center">
  <table align="center">
    <tr>
        <th>項目</th>
        <th>バージョン / 備考</th>
    </tr>
    <tr>
        <td>Arduino IDE</td>
        <td>1.8.x 以降</td>
    </tr>
    <tr>
        <td>Seeed nRF52 Boards</td>
        <td><strong>1.1.13</strong>（Arduino IDE の Boards Manager からインストール）</td>
    </tr>
    <tr>
        <td><a href="https://github.com/limengdu/XIAO_nRF52840_NFC">XIAO_nRF52840_NFC</a> ライブラリ</td>
        <td><a href="https://github.com/limengdu/XIAO_nRF52840_NFC">GitHub</a> からダウンロードし、<strong>Sketch &gt; Include Library &gt; Add .ZIP Library</strong> からインストール（下記参照）</td>
    </tr>
    <tr>
        <td>NFC Tools アプリ</td>
        <td><a href="https://play.google.com/store/apps/details?id=com.wakdev.wdnfc">Android</a> / <a href="https://apps.apple.com/us/app/nfc-tools/id1252962749">Apple</a></td>
    </tr>
  </table>
</div>

### XIAO_nRF52840_NFC ライブラリのインストール

このライブラリは Arduino Library Manager には**含まれていない**ため、GitHub から手動でインストールする必要があります。

- **Step 1.** **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)** の GitHub リポジトリにアクセスし、緑色の **Code** ボタンをクリックして **Download ZIP** を選択します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_nRF52840_NFC" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<!-- TODO: Screenshot of GitHub Download ZIP button -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-download-zip.png" style={{width:800, height:'auto'}}/></div>

- **Step 2.** Arduino IDE を開き、**Sketch > Include Library > Add .ZIP Library...** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-installed.png" style={{width:800, height:'auto'}}/></div>

- **Step 3.** ダウンロードした ZIP ファイル（`XIAO_nRF52840_NFC-main.zip`）を選択します。ステータスバーに **"Library added to your libraries"** と表示されるはずです。

- **Step 4.** Arduino IDE を再起動します。再起動後、**File > Examples > XIAO_nRF52840_NFC** の下にサンプルが表示されるはずです。

<!-- TODO: Screenshot of examples menu showing XIAO_nRF52840_NFC -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-examples.png" style={{width:1000, height:'auto'}}/></div>

## ハードウェア接続

XIAO nRF52840 の NFC ピンはボードの裏面にあり、**P0.09** と **P0.10** と表示されています。

```
D14 (P0.09) — NFC1 — Antenna end A
D15 (P0.10) — NFC2 — Antenna end B
```

以下のように、NFC アンテナを P0.09 と P0.10 にはんだ付けします。

このチュートリアルでは、デモとして Nordic 推奨の NFC アンテナを接続した **Seeed Studio XIAO nRF52840** を使用します。

**表面（フロント）ビュー：**

<!-- TODO: Photo of antenna soldered to XIAO (front) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-board-with-A-F.jpg" alt="Antenna soldered to XIAO front view" width={550} height="auto" /></p>

**裏面（バック）ビュー：**

<!-- TODO: Photo of antenna soldered to XIAO (back) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-board-with-A-B.jpg" alt="Antenna soldered to XIAO back view" width={550} height="auto" /></p>

:::caution

- NFC アンテナは差動信号であり、**極性はありません** — どちらの端子を D14 または D15 に接続してもかまいません。
- 2 本のピンは、**XIAO nRF52840** および **XIAO nRF52840 Sense** では工場出荷時に NFC アンテナモード（UICR = `0xFFFFFFFF`）として設定されています。**XIAO nRF52840 Plus** および **XIAO nRF52840 Sense Plus** では、デフォルトで GPIO として設定されている場合があるため、まず UICR を確認してください（[Step 1](#step-1-check-uicr-pin-configuration) を参照）。
- はんだ付け前に、マルチメータでアンテナ端子間の直流抵抗を測定することを推奨します（通常 1～3 Ω）。これにより導通を確認し、ショートを排除できます。

:::

### アンテナのチューニング

NFC は共振 LC タンク回路に依存しています。アンテナコイルがインダクタンス（L）を提供し、マッチングコンデンサがキャパシタンス（C）を提供します。これらが組み合わさることで、ターゲット周波数で共振する回路が形成されます。

```
f = 1 / (2π√(LC))
```

ターゲットは**13.56 MHz**です。外付けコンデンサがない場合、nRF52840 内部の約 4 pF の寄生容量だけが関与するため、共振点は 13.56 MHz から大きく外れてしまいます。NFC 機能自体は動作しますが、通信が不安定になる可能性があります。スマートフォンのポップアップに「NFC タグを検出」と表示されても内容が完全に読めなかったり、シリアル出力にエラーコードが表示されたりします。マッチング用コンデンサを追加して LC タンクを共振させることで、信頼性が大幅に向上します。

:::tip
以下の操作はすべて **[Nordic Official NFC Antenna Design](https://docs.nordicsemi.com/bundle/nwp_026/page/WP/nwp_026/nWP_026_intro.html)** ドキュメントに基づいています。チップは、**共振時に差動 100 Ω の負荷**を見たときにのみフルパワーを出力します。
:::

#### 固定パラメータ

<div class="table-center">
  <table align="center">
    <tr>
        <th>項目</th>
        <th>固定値</th>
        <th>出典</th>
    </tr>
    <tr>
        <td>動作周波数 f</td>
        <td>13.56 MHz</td>
        <td>グローバル NFC 規格、nRF52840 にハードコード済み</td>
    </tr>
    <tr>
        <td>負荷インピーダンス</td>
        <td>100 Ω（差動）</td>
        <td>Nordic ホワイトペーパー nWP_026</td>
    </tr>
  </table>
</div>

#### 必要な測定項目

- **コイルインダクタンス L** — DMM / LCR メータ / VNA を使って 100 kHz で測定し、単位は µH。
- **コイル損失抵抗 R** — 同じ画面に表示される直列抵抗値を読み取り、単位は Ω。

#### ステップ 1: インピーダンス事前チェック

インピーダンス変換式を使用します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC1.png" alt="Impedance formula" width={250} height="auto" /></p>

目標値：**90–120 Ω**、100 Ω に近いほど良好です。

<div class="table-center">
  <table align="center">
    <tr>
        <th>結果</th>
        <th>意味</th>
        <th>次のステップ</th>
    </tr>
    <tr>
        <td>&lt; 60 Ω</td>
        <td>アンテナが小さすぎる</td>
        <td>巻き数を増やすか、コイル面積を大きくする</td>
    </tr>
    <tr>
        <td>90 – 120 Ω</td>
        <td><strong>合格</strong></td>
        <td>ステップ 2 へ進む</td>
    </tr>
    <tr>
        <td>&gt; 150 Ω</td>
        <td>アンテナが大きすぎる</td>
        <td>巻き数を減らすか、コイル面積を小さくする</td>
    </tr>
  </table>
</div>

> このゲートを通過してから初めてコンデンサ値を計算します。そうでなければ、どんなコンデンサ値も意味がありません。

#### ステップ 2: 共振用容量の計算

固定 13.56 MHz の式：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC2.png" alt="Capacitance formula" width={250} height="auto" /></p>

これにより必要な**総容量**が得られます。π ネットワークの場合は等分します：

**C1 = C2 = C / 2**

最も近い E12 系列の値（例：39 pF、47 pF、56 pF、68 pF …）を選択します。

#### 推奨アンテナ

LCR メータを持っておらず、既知のスタートポイントを使いたい場合は、標準的な 13.56 MHz NFC コイルアンテナが XIAO nRF52840 でうまく動作します。以下はテスト時に使用したアンテナです：

<!-- Antenna photo: see Hardware Connection section (NRF52840NFC-final-output-successfully.jpg) -->

<div class="table-center">
  <table align="center">
    <tr>
        <th>パラメータ</th>
        <th>値</th>
    </tr>
    <tr>
        <td>タイプ</td>
        <td>13.56 MHz NFC コイル</td>
    </tr>
    <tr>
        <td>直流抵抗</td>
        <td>約 2.3 Ω</td>
    </tr>
    <tr>
        <td>接続</td>
        <td>NFC1 / NFC2 に直接はんだ付け</td>
    </tr>
  </table>
</div>

:::note
上記のアンテナは Seeed Studio 製品ではありません。ここで示した仕様に近い 13.56 MHz NFC コイルアンテナであれば、どれでも使用できます。重要なのは、インダクタンスを測定し、上記の式を使ってマッチング用コンデンサ値を計算することです。
:::

## NFC セットアップ & サンプル

以下のワークフローでは、まず NFC ハードウェア構成を検証し、その後に独自の NFC タグを作成する手順を説明します。ここでは、nRF52840 の NFCT ペリフェラルをシンプルな Arduino API にラップした **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)** ライブラリを使用します。

このライブラリには 6 つのサンプルスケッチが含まれています：

<div class="table-center">
  <table align="center">
    <tr>
        <th>カテゴリ</th>
        <th>サンプルスケッチ</th>
        <th>目的</th>
    </tr>
    <tr>
        <td rowspan="2"><strong>検証</strong></td>
        <td><code>xiao-nrf52840-nfc-probe</code></td>
        <td>UICR ピン設定の確認 + RF リンクの検証</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-restore-uicr</code></td>
        <td>NFC ピンが GPIO に変更されている場合に復元する</td>
    </tr>
    <tr>
        <td rowspan="1"><strong>Plus 向け修正</strong></td>
        <td><code>xiao-nrf52840-plus-bootloader-verify</code></td>
        <td>UICR 復元前に Plus バリアントのブートローダを検証する</td>
    </tr>
    <tr>
        <td rowspan="3"><strong>デモ</strong></td>
        <td><code>xiao-nrf52840-nfc-tag-readonly</code></td>
        <td>読み取り専用タグ — スマートフォンが固定 URL を読み取る</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-tag-writable</code></td>
        <td>書き込み可能タグ — スマートフォンからタグへデータを書き込める</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-tag-persistent</code></td>
        <td>永続タグ — データが電源再投入後も保持される（Flash に保存）</td>
    </tr>
  </table>
</div>

### ステップ 1: UICR ピン設定の確認

**目的**：P0.09 / P0.10 が NFC アンテナピンとして設定されていることを確認します。

**File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-probe** を開き、ボードに書き込みます。（ステップ 1 と 2 は同じスケッチを共有しているため、1 回の書き込みで両方を実行できます。）

シリアルモニタを **115200 baud** で開きます。最初の数行に現在の UICR ステータスが表示されます：

<!-- TODO: Screenshot of Serial Monitor showing UICR check PASS -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-probe-result.png" style={{width:1000, height:'auto'}}/></div>

**出力の読み取り方：**

<div class="table-center">
  <table align="center">
    <tr>
        <th>UICR 値</th>
        <th>意味</th>
        <th>アクション</th>
    </tr>
    <tr>
        <td><code>0xFFFFFFFF</code></td>
        <td>NFC アンテナモード ✅</td>
        <td>ステップ 2 に進む</td>
    </tr>
    <tr>
        <td><code>0xFFFFFFFE</code></td>
        <td>GPIO モード ❌</td>
        <td>まず（Plus バリアントでは）<code>xiao-nrf52840-plus-bootloader-verify</code> を書き込み、その後 <code>xiao-nrf52840-nfc-restore-uicr</code> を書き込み、シリアルモニタで <code>RESTORE_NFC</code> を送信し、<code>Verify result: PASS</code> を確認してからボードの電源を入れ直します</td>
    </tr>
  </table>
</div>

:::note
**XIAO nRF52840** と **XIAO nRF52840 Sense** は、工場出荷時に UICR = `0xFFFFFFFF`（NFC モード）に設定されています。ほとんどの場合、このステップは合格となり、追加の操作は不要です。**XIAO nRF52840 Plus** と **XIAO nRF52840 Sense Plus** は GPIO モードで出荷される場合があります — 出力が `0xFFFFFFFE` を示している場合は、以下の復元手順に従ってください。
:::

### ステップ 2: プローブ — RF リンクの検証

**目的**：スマートフォンからの NFC コマンドフレームがボードに届いていることを確認します。

UICR チェックの後、同じスケッチは自動的に **Probe モード** に入ります。このモードでは、タグはどのフレームにも**応答しません**。受信方向だけを切り出すことで、RF リンクが生きているかどうかを簡単に確認できます。

スマートフォンの NFC エリアをアンテナに数秒間近づけ、その後シリアルモニタの出力を確認します：

<!-- TODO: Screenshot of Serial Monitor showing Probe results with phone -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-probe-result-with-phone.png" style={{width:800, height:'auto'}}/></div>

**重要な指標：**

<div class="table-center">
  <table align="center">
    <tr>
        <th>カウンタ</th>
        <th>意味</th>
        <th>合格基準</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>スマートフォンの 13.56 MHz RF フィールドを検出</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>FIELD_LOST</code></td>
        <td>RF フィールドが消失</td>
        <td>FIELD_DETECT に近い値</td>
    </tr>
    <tr>
        <td><code>READER_FRAMES</code></td>
        <td>スマートフォンから受信した NFC コマンドフレーム</td>
        <td><strong>&gt; 0</strong>（重要）</td>
    </tr>
  </table>
</div>

> `READER_FRAMES > 0` は、スマートフォンのコマンドフレームがボードに正常に届き、双方向 RF リンクが確立されていることを意味します。この段階では（Probe モードは応答しないため）、スマートフォン側にポップアップは**表示されないはず**です。

**よくあるエラーコード：**

<div class="table-center">
  <table align="center">
    <tr>
        <th>エラーコード</th>
        <th>名称</th>
        <th>意味</th>
    </tr>
    <tr>
        <td><code>0x01</code></td>
        <td><code>FRAMEDELAYTIMEOUT</code></td>
        <td>フレーム遅延タイムアウト — 期待された間隔内に次のコマンドを受信できなかった</td>
    </tr>
    <tr>
        <td><code>0x02</code></td>
        <td><code>NFCANTENNAERROR</code></td>
        <td>NFCT がアンテナを駆動できない — 通常はインピーダンス不整合またはアンテナ未接続が原因</td>
    </tr>
    <tr>
        <td><code>0x80</code></td>
        <td>RX フレーム受信エラー</td>
        <td>フレームは受信したが CRC / パリティチェックに失敗した（Readonly 段階で現れる場合あり）</td>
    </tr>
  </table>
</div>

## デモ 1: 読み取り専用タグ

**目的**：固定 URL をブロードキャストするシンプルな NFC タグです。スマートフォンがそれを読み取り、ポップアップを表示します — 最も一般的な NFC のユースケースです。

**File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-readonly** を開いて書き込みます。スマートフォンをアンテナの上に 2〜3 秒間置きます。

<!-- TODO: Screenshot of Serial Monitor showing Readonly results -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-readonly-output.png" style={{width:1000, height:'auto'}}/></div>

スマートフォンには、`https://seeedstudio.com` というリンクを含むポップアップが表示されるはずです。

<!-- TODO: Photo of antenna soldered to XIAO + phone showing NFC pop-up -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-final-output-successfully.png" alt="アンテナをはんだ付けし、スマートフォンにNFCポップアップが表示された様子" width={300} height="auto" /></p>

**主要な指標:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>カウンタ</th>
        <th>意味</th>
        <th>合格基準</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>スマートフォンの13.56 MHz RFフィールドを検出</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>SELECTED</code></td>
        <td>スマートフォンがアンチコリジョン＋SELECTハンドシェイクを完了</td>
        <td><strong>&gt; 0</strong>（コア指標）</td>
    </tr>
    <tr>
        <td><code>READ</code></td>
        <td>スマートフォンがNDEFデータページの読み取りに成功</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>FAST_READ</code></td>
        <td>受信したFAST_READリクエストの数</td>
        <td>0 または少数（正常）</td>
    </tr>
    <tr>
        <td><code>UNSUPPORTED</code></td>
        <td>スマートフォンが未サポートのコマンドを送信</td>
        <td>少し発生するのは正常</td>
    </tr>
  </table>
</div>

> `SELECTED > 0` が重要なしきい値です：アンチコリジョンフローが通過し、スマートフォンがType 2 Tagを認識したことを意味します。`READ > 0` は、実際にNDEFページが読み取られたことを示します。最終的な確認は、スマートフォンに完全なURLポップアップが表示されることです。
:::note
URLはスケッチ内にハードコードされています。変更するには、スケッチを開いてNDEFメッセージを修正し、再度アップロードしてください。タグデータはRAMに保存されており、電源を切ると失われます。
:::

## デモ2: 書き込み可能タグ

**目的**: スマートフォンが読み取りと書き込みの両方を行えるNFCタグ。タグはデフォルトURI（`https://seeedstudio.com`）から開始し、スマートフォンは **NFC Tools** アプリを使って新しいNDEFコンテンツでそれを上書きできます。

**File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-writable** を開き、アップロードします。

**テスト手順:**

- **ステップ1.** **115200ボー**でシリアルモニタを開きます。ブートログにはタグID（NFCID1）、初期メモリダンプ、およびデフォルトURI（`https://seeedstudio.com`）が表示されます。

<!-- TODO: Screenshot of Serial Monitor showing Writable boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-boot-log.png" style={{width:1000, height:'auto'}}/></div>

ブートログには、タグがブロードキャストするデフォルトURIも出力されます:

<!-- TODO: Screenshot of Serial Monitor showing default URI in boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-boot-log-of-URI.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ2.** まずスマートフォンでタグを読み取ります。スマートフォンは `https://seeedstudio.com` を検出するはずです。

- **ステップ3.** **NFC Tools**（または任意のNFCライターアプリ）を開き、タグに書き込みたい内容を入力します。この例では、シンプルなテキスト `hello!` を書き込みます。内容を入力したら、**"Write / XX Bytes"** をクリックします — バイト数はコンテンツの長さによって変わります。

<!-- TODO: Screenshot of NFC Tools write screen -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-nfc-tools-write.png" style={{width:300, height:'auto'}}/></div>

- **ステップ4.** 再度タグを読み取ります。スマートフォンには、今書き込んだ新しいコンテンツ（`hello!`）が表示されるはずです。

<!-- TODO: Screenshot of phone showing written content -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-writable-final-output.png" style={{width:300, height:'auto'}}/></div>

スマートフォンがNFCフィールドから離れると、シリアルモニタには、読み取り後の書き込みセッション全体を反映した更新済みの主要指標が表示されます:

<!-- TODO: Screenshot of Serial Monitor showing key indicators after reading written tag -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-writable-result-with-phone.png" style={{width:1000, height:'auto'}}/></div>

**主要な指標:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>カウンタ</th>
        <th>意味</th>
        <th>合格基準</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>スマートフォンの13.56 MHz RFフィールドを検出</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>SELECTED</code></td>
        <td>スマートフォンがアンチコリジョン＋SELECTハンドシェイクを完了</td>
        <td><strong>&gt; 0</strong>（コア指標）</td>
    </tr>
    <tr>
        <td><code>READ</code></td>
        <td>スマートフォンがNDEFデータページの読み取りに成功</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>WRITE</code></td>
        <td>スマートフォンがタグへのデータ書き込みに成功</td>
        <td><strong>&gt; 0</strong>（コア指標）</td>
    </tr>
    <tr>
        <td><code>FAST_READ</code></td>
        <td>受信したFAST_READリクエストの数</td>
        <td>0 または少数（正常）</td>
    </tr>
    <tr>
        <td><code>WRITE_REJECTED</code></td>
        <td>書き込みが拒否された回数（保護されたページ）</td>
        <td>0（標準的なアプリでは発生しないはず）</td>
    </tr>
    <tr>
        <td><code>UNSUPPORTED</code></td>
        <td>スマートフォンが未サポートのコマンドを送信</td>
        <td>少し発生するのは正常</td>
    </tr>
  </table>
</div>

> `WRITE > 0` はWritableにおける重要なしきい値です：スマートフォンがタグへのデータ書き込みに成功したことを意味します。`WRITE_REJECTED` は常に `0` のままであるべきです — これが増加する場合は、書き込みセッション中に何か問題が発生したことを示します。

:::note
書き込まれたデータは **RAMのみに** 保存され、電源を切ると失われてデフォルトURIに戻ります — そのため、繰り返し書き込みテストを行うのが容易です。電源オフ後も保持する必要があるデータには、以下の **Persistent Tag** デモを使用してください。
:::

## デモ3: 永続タグ

**目的**: 電源を切ってもデータが保持されるNFCタグ。NDEFコンテンツはnRF52840の内部Flashメモリ（LittleFS）に保存されるため、ボードの電源を切って再投入した後でも保持されます — 長期運用に最適です。

**File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-persistent** を開き、アップロードします。

**テスト手順:**

- **ステップ1.** 初回起動時に、**115200ボー**でシリアルモニタを開きます。ブートログにはデフォルトURIと `Storage state: no stored content, using default URI` が表示されます。

<!-- TODO: Screenshot of Serial Monitor showing Persistent first boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-boot-log-first.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ2.** スマートフォンでタグを読み取ります。初回起動時、スマートフォンは `https://seeedstudio.com` を検出します。

- **ステップ3.** **NFC Tools**（または任意のNFCライターアプリ）を開き、タグに新しいテキストまたはURLレコードを書き込みます。この例では、シンプルなテキスト `hi!` を書き込みます。内容を入力したら、**"Write / XX Bytes"** をクリックします — バイト数はコンテンツの長さによって変わります。

<!-- TODO: Screenshot of NFC Tools writing "hi!" -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-nfc-tools-write.png" style={{width:300, height:'auto'}}/></div>

- **ステップ4.** スマートフォンがNFCフィールドから離れた後、シリアルモニタには `Storage: tag content saved to flash` と表示され、内部Flashへの書き込みが完了したことが確認できます。

<!-- TODO: Screenshot of Serial Monitor showing saved to flash -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-saved-to-flash.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ5.** **ボードの電源を入れ直します（パワーサイクル）** — USBケーブルを抜き、再度接続します。

- **ステップ6.** 再起動後、シリアルモニタには `Storage state: previous content restored from flash` と表示され、書き込んだ内容が電源オフ後も保持されていることが確認できます。

<!-- TODO: Screenshot of Serial Monitor showing restored from flash after reboot -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-boot-log-restored.png" style={{width:1000, height:'auto'}}/></div>

- **ステップ7.** 再度スマートフォンでタグを読み取ります。スマートフォンには、ステップ3で書き込んだ内容が表示されるはずです — 電源を入れ直した後でも同じです。

<!-- TODO: Screenshot of phone showing "hi!" after reboot -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-phone-hi-after-reboot.png" style={{width:300, height:'auto'}}/></div>

<!-- TODO: Screenshot of phone showing restored content after reboot + serial indicators -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-result-after-reboot.png" style={{width:1000, height:'auto'}}/></div>

**主要な指標:**

主要な指標は書き込み可能タグと同じです — 一覧については [Writable Tag table](#demo-2-writable-tag) を参照してください。

> ブートログ内の `Storage state: previous content restored from flash` が、Persistentにおける中核的な確認項目です：データがパワーサイクルを生き延びたことを意味します。`Storage: tag content saved to flash` は、各書き込みがFlashに保存されたことを確認します。

:::note
ステップ7では、スマートフォンは復元されたコンテンツを **読み取るだけ** で、何も書き込みません。そのため、カウンタ内の `WRITE` は0のままですが、これは想定どおりです。`WRITE > 0` が見られるのは、前の書き込みセッション（ステップ3〜4）の間だけです。
:::

:::note

- 保存されたコンテンツは、スケッチ領域とは別の **内部Flashファイルシステム**（`/nfc-tag-data.bin`）に存在し、スケッチを再アップロードしても保持されます。
- いつでもデフォルトURIを復元するには、シリアルモニタで `RESET_TAG` を送信します。
- Flashへの保存は、スマートフォンがフィールドから離れた後、書き込みセッションごとに1回行われます。スマートフォンを早く離しすぎると、コンテンツが不完全になる場合があります — その場合は、再度書き込めば修正できます。

:::

:::tip
**3つのデモのまとめ:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>デモ</th>
        <th>データ保存先</th>
        <th>電源オフ後も保持されるか</th>
        <th>スマートフォンから書き込み可能</th>
    </tr>
    <tr>
        <td>読み取り専用タグ</td>
        <td>RAM</td>
        <td>❌</td>
        <td>❌</td>
    </tr>
    <tr>
        <td>書き込み可能タグ</td>
        <td>RAM</td>
        <td>❌</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>永続タグ</td>
        <td>Flash</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
  </table>
</div>
:::

## リソース

- **[GitHub]** [XIAO_nRF52840_NFC Library](https://github.com/limengdu/XIAO_nRF52840_NFC) — このチュートリアルで使用しているオープンソースのNFCライブラリ

## 謝辞

XIAO nRF52840 上での NFC アンテナ（MOLEX 1462360051 および TAOGLAS FXR.07.A.DG）の広範な実環境テストを行ってくださった **[andriandreo](https://forum.seeedstudio.com/u/andriandreo/summary)** 氏と、コンデンサ計算のガイダンスおよび iPhone 互換性トラブルシューティングにご協力いただいた **[PJ_Glasso](https://forum.seeedstudio.com/u/PJ_Glasso/summary)** 氏に特別な感謝を申し上げます。

ここで取り上げていない NFC の問題に遭遇した場合は、元のフォーラムスレッドで有用なヒントが見つかるかもしれません：

- [XIAO nRF52840 NFC アンテナのインサイト](https://forum.seeedstudio.com/t/xiao-nrf52840-nfc-antenna-insights/277696)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
