---
description: Seeed リレー選択ガイド
title: Seeed リレー選択ガイド

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeed_Relay_Page
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus 用

---


![](https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/back.jpg)

私たちはウェブサイト上でさまざまな種類のリレーをリリースしています。選択に迷うことがあるかもしれません。その悩みを理解しています。ここでは、これらのリレーの違い、それぞれの利点や欠点について説明します。

バザールにあるすべてのリレーについては、[bazaar relay tag](https://www.seeedstudio.com/tag/relay.html)をクリックして確認してください。

始める前に、Seeed リレーのクイック選択図を確認しましょう。

<div align="center">
  <figure>
    <a href="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/Relay.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/Relay.png" alt="Seeed リレー クイック選択図" title="Seeed リレー クイック選択図" /></a>
    <figcaption><b>図 1</b>. <i>Seeed リレー クイック選択図。図をクリックすると元のファイルを表示できます</i></figcaption>
  </figure>
</div>

詳細については、以下の表を参照してください。おそらく、必要なのはこの表だけかもしれません。

|名前|サムネイル|動作電圧|入力電流|定格負荷|接触抵抗|絶縁抵抗|動作時間|リリース時間|入力インターフェース|タイプ|購入リンク|
|----|-----|-----|------|------|------|-------|------|------|------|---|---|
|[Grove - Relay](https://www.seeedstudio.com/Grove-Relay-p-769.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/grove_relay.jpg" />|3.3V-5V|100mA|5A@250VAC<br />5A@30VDC|50mΩ<br />@6VDC 1A|100MΩ|最大10ms|最大5ms|デジタル|電磁式|[今すぐ購入](https://www.seeedstudio.com/Grove-Relay-p-769.html)|
|[Grove - SPDT Relay(30A)](https://www.seeedstudio.com/Grove-SPDT-Relay-30-p-1473.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/spdt30.jpg" />|5V|185mA|30A@250VAC<br />30A@30VDC|最大100mΩ|最小100MΩ@500VDC|最大15ms|最大10ms|デジタル|電磁式|[今すぐ購入](https://www.seeedstudio.com/Grove-SPDT-Relay-30-p-1473.html)|
|[Grove - 2-Channel SPDT Relay](https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/spdt2.jpg" />|5V|90mA|10A@250VAC<br />10A@30VDC|最大100mΩ|最小100MΩ@500VDC|最大10ms|最大5ms|デジタル|電磁式|[今すぐ購入](https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html)|
|[Grove - 4-Channel SPDT Relay](https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/spdt4.jpg" />|5V|90mA|10A@250VAC<br />10A@30VDC|最大100mΩ|最小100MΩ@500VDC|最大10ms|最大5ms|I2C|電磁式|[今すぐ購入](https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html)|
|[Grove - Solid State Relay](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/ssr1.jpg" />|3V-5V|最小16mA<br />典型20mA<br />最大50mA|4A@220VAC||1000MΩ|10ms|10ms|デジタル|ソリッドステート|[今すぐ購入](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html)|
|[Grove - Solid State Relay V2](https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/ssr.jpg" />|4V-6V||2A@100VAC to 240VAC||最小1000MΩ@500VDC|負荷電源サイクルの1/2 + 最大1ms|負荷電源サイクルの1/2 + 最大1ms|デジタル|ソリッドステート|[今すぐ購入](https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html)|
|[Grove - 2-Channel Solid State Relay](https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/ss2.jpg" />|4V-6V||2A@100VAC to 240VAC||最小1000MΩ@500VDC|負荷電源サイクルの1/2 + 最大1ms|負荷電源サイクルの1/2 + 最大1ms|デジタル|ソリッドステート|[今すぐ購入](https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html)|
|[Grove - 4-Channel Solid State Relay](https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay-p-3130.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/ssr4.jpg" />|4V-6V||2A@100VAC to 240VAC||最小1000MΩ@500VDC|負荷電源サイクルの1/2 + 最大1ms|負荷電源サイクルの1/2 + 最大1ms|I2C|ソリッドステート|[今すぐ購入](https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay-p-3130.html)|
|[Grove - 8-Channel Solid State Relay](https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/ssr8.jpg" />|4V-6V||2A@100VAC to 240VAC||最小1000MΩ@500VDC|負荷電源サイクルの1/2 + 最大1ms|負荷電源サイクルの1/2 + 最大1ms|I2C|ソリッドステート|[今すぐ購入](https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html)|
|[Grove - 2-Coil Latching Relay](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/2coil.jpg" />|5V||1A@125VAV<br />3A@30VDC|最大50mΩ|1000MΩ@500VDC|最大4.5ms|最大3.5ms|デジタル|電磁式|[今すぐ購入](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html)|
|[Grove - Dry-Reed Relay](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/dry-reed.jpg" />|5V||0.1A@100VAC<br />0.5A@24VDC|最大150mΩ|100MΩ @500VDC<br />1000MΩ @100VDC|最大1ms|最大0.5ms|デジタル|リードリレー|[今すぐ購入](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html)|
|[Grove - Optocoupler Relay (M281)](https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html)|<img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/thumbnail.jpg" />|3.3-5V||1000mA| |100GΩ|最大1.4ms|最大0.2ms|デジタル|ソリッドステート|[今すぐ購入](https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html)|

<div>
  <div align="center"><b>表 1.</b><i>Seeed リレーのパラメータ</i></div><br />
</div>

**[こちらをクリック](https://files.seeedstudio.com/wiki/Seeed_Relay_Page/res/Relay-Selection.html)** すると、別タブで完全な表を表示できます。

## 用語集

リレーは電気的に操作されるスイッチです。リレーは2つの接点が切断されると開き、2つの接点が接触するとオンになります。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/relay.jpg" alt="リレー" title="リレー" />
  <figcaption><b>図 2</b>. <i>リレー接点</i></figcaption>
</figure>
</div>

各接点は入力端子または出力端子に接続されています。入力端子は**ポール (Pole)**、出力端子は**スロー (Throw)** と呼ばれます。端子の数に応じて、リレーは以下のような種類に分けられます：**SPST**、**SPDT**、**DPDT** など。

**SPST（単極単投）:**  
SPST は最もシンプルなリレーで、ボタンのように考えることができます。この「ボタン」は通常開いており、トリガー信号が来るとポール接点がスロー接点に接続され、これを閉じると呼びます。オンまたはオフの状態だけが必要なアプリケーションに最適です。SPST の代表的な例として、[Grove - Relay](https://www.seeedstudio.com/Grove-Relay-p-769.html) があります。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/SPST.jpg" alt="SPST" title="SPST" />
  <figcaption><b>図 3</b>. <i>SPST リレー</i></figcaption>
</figure>
</div>

**SPDT（単極双投）:**  
SPDT リレーはしばしば A/B スイッチと呼ばれます。図 3 に示されているように、2つのスローがあります。この種類のリレーは、2つのオプションを選択するのに最適です。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/SPDT.jpg" alt="SPDT" title="SPDT" />
  <figcaption><b>図 4</b>. <i>SPDT リレー</i></figcaption>
</figure>
</div>

これらの2つのスローはそれぞれ **NC** と **NO** と呼ばれ、ポールは **COM** と呼ばれます。NC は通常接続 (Normally Connected)、NO は通常開いている (Normally Open) を意味します。つまり、トリガー信号がない場合、NC 端子は COM 端子に接続されます。トリガー信号が来ると、NC 端子は切断され、NO 端子が COM 端子に接続されます。例えば、[Grove - 2-Channel SPDT Relay](https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html) を参照してください。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/pin_map.jpg" alt="Grove - 2-Channel SPDT Relay" title="Grove - 2-Channel SPDT Relay" />
  <figcaption><b>図 5</b>. <i>Grove - 2-Channel SPDT リレー</i></figcaption>
</figure>
</div>

現在、当ウェブサイトには SPST と SPDT リレーのみが掲載されています。他の種類のリレーを確認したい場合は、[NATIONAL INSTRUMENTS のリレーページ](http://www.ni.com/white-paper/3960/en/) を参照してください。

**ラッチングリレー**

ラッチングリレーは、パルス電圧の入力によってセット（ON）またはリセット（OFF）されるリレーです。入力電圧が途切れた後でも、このリレーは次の反転入力を受け取るまでセットまたはリセット状態を維持します。このリレーはキープリレーとも呼ばれます。  
一方、非ラッチングリレーは、作動している間のみその状態を維持します。当ウェブサイトに掲載されているリレーのほとんどは非ラッチングリレーですが、[Grove - 2-Coil Latching Relay](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html) は例外です。

## リレーの種類

当ウェブサイトには十数種類以上のリレーが掲載されていますが、一般的には以下の3種類に分類されます：**電磁リレー（Electromechanical Relay）**、**ソリッドステートリレー（Solid State Relay）**、および**リードリレー（Reed Relay）**です。分類情報は**表1**の最終列に記載されています。

### 電磁リレー（Electromechanical Relay）

#### 原理

当バザールで取り扱っているリレーの多くは電磁リレーです。通常、電磁リレーはコイル、アーマチュア（可動鉄片）、および接点で構成されています。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/Electromechanical_Relays.JPG" alt="Electromechanical Relay" title="Electromechanical Relay" />
  <figcaption><b>図6</b>. <i>電磁リレー</i></figcaption>
</figure>
</div>

コイルに電流が流れると、誘導された磁場がアーマチュアを動かし、接点を開閉します。

#### 長所と短所  

**長所:**

- 大きな突入電流に耐えることができる
- 高い機械的構造の信頼性を持ち、外部の電磁環境の影響を受けにくい
- 安価でコストパフォーマンスが高い
- 比較的高電圧・高電流の負荷に対応可能

**短所:**

- 他の種類のリレーに比べて動作速度が遅く、通常5～15msでスイッチングおよび安定化
- パッケージサイズが大きく、サイズに敏感な用途には不向き
- 機械的摩耗のため、他の種類のリレーに比べて寿命が短い傾向がある

### ソリッドステートリレー（Solid State Relays）

#### 原理

ソリッドステートリレー（SSR）は、制御端子に小さな外部電圧が加えられるとオンまたはオフを切り替える電子スイッチングデバイスです。ソリッドステートリレーは通常、半導体デバイスを使用して高電圧負荷の導通および遮断を行います。一般的なソリッドステートリレーは、LEDドライバと感光性MOSFETで構成されています。トリガー信号が来るとLEDが点灯し、感光性MOSFETを作動させ、高電圧回路がオンになります。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/SSR_IN.JPG" alt="Solid State Relay" title="Solid State Relay" />
  <figcaption><b>図7</b>. <i>ソリッドステートリレー</i></figcaption>
</figure>
</div>

#### 長所と短所  

**長所:**

- 高速スイッチング速度。スイッチング時間はLEDのオン・オフに必要な時間に依存し、約1msおよび0.5msです。例えば、使用しているG3MC202pシリーズSSRでは、負荷電源サイクルの1/2 + 1msです。
- 完全に静音で動作し、ほぼ無音
- 物理的な接点がないためスパークが発生せず、爆発性環境での使用が可能
- 可動部品がなく接点の摩耗や炭素の蓄積がないため、寿命が長い
- 一体型リードフレームを採用したコンパクトで薄型のSSRは、PCB、端子、ヒートシンクを統合しており、機械式リレーよりも小型で、より多くのチャンネルを統合可能
- 物理的な衝撃に影響されにくい

**短所:**

- 接触抵抗が比較的大きく、通常100オーム以上であるため、より多くの熱を発生し、ファンによる冷却が必要
- 高コストでコストパフォーマンスが低い
- AC負荷にのみ対応

:::tip
一部のソリッドステートリレーはDC負荷に対応していますが、Seeedで現在販売されているソリッドステートリレーはすべてDC負荷に対応していません。
:::

### リードリレー（Reed Relays）

#### 原理

リードリレーは、電磁石を使用して1つまたは複数のリードスイッチを制御するスイッチです。接点は磁性材料でできており、電磁石が直接作用するため、アーマチュアを動かす必要がありません。細長いガラス管に密封され、ガラス管内に不活性ガスを充填することで、接点が腐食から保護されます。

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/Reed_Relay.JPG" alt="Reed Relay" title="Reed Relay" />
  <figcaption><b>図8</b>. <i>リードリレー</i></figcaption>
</figure>
</div>

図7に示すように、トリガー信号がない場合、軸方向の磁場は生成されず、リードブレードは剛性のため切断されたままです。信号がトリガーされると、横方向の磁場が生成され、リードが磁化されます。一方の接点がN極、もう一方がS極となり、接続されます。

#### 長所と短所  

**長所:**

- 低消費電力、小型
- 不活性ガスで密封されているため、温度や湿度などの環境要因の影響をほとんど受けず、高い環境適応性を持つ
- スイッチング速度が速く、電磁リレーの約10倍

**短所:**

- 低負荷電圧および低電流
- 誘導負荷に影響を受けやすい

:::note
リードリレーを誘導負荷（モーターなど）で使用する場合、リレーと負荷の間に保護回路を追加する必要があります。
:::

## 特殊機能リレー

上記で説明した一般的なリレーに加えて、当ウェブサイトではいくつかの特殊機能リレーを提供しています。

**1. リレーシールド v3.0**

Arduino用のリレーシールドも提供しています。このシールドは4つの機械式リレーを統合しており、8A、30Vの負荷を扱うことができます。

<div align="center">
<figure>
  <a href="https://www.seeedstudio.com/Relay-Shield-v3-0-p-2440.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/seeed_relay_shield.jpg" alt="Relay Shield v3.0" title="Relay Shield v3.0" /></a>
  <figcaption><b>図9</b>. <i>リレーシールド。クリックして詳細を確認できます</i></figcaption>
</figure>
</div>

**2. Heelightリレー**

音声コマンドでリレーを制御することができます。面白くないですか!?

<div align="center">
<figure>
  <a href="https://www.seeedstudio.com/Heelight-Relay-p-2935.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/Heelight_Relay.jpg" alt="Heelight Relay" title="Heelight Relay" /></a>
  <figcaption><b>図10</b>. <i>Heelightリレー。クリックしてこの魔法のリレーを確認できます</i></figcaption>
</figure>
</div>

**3. 315MHz コーデック適応型ワイヤレスリレー**

ワイヤレスリレーは、シングルチャンネルリレーを備えたコーデック適応型RF受信機です。

<div align="center">
<figure>
  <a href="https://www.seeedstudio.com/315MHz-Codec-Adaptive-Wireless-Relay-p-550.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/315MHz%20Codec-Adaptive%20Wireless%20Relay.jpg" alt="Wireless Relay" title="Wireless Relay" /></a>
  <figcaption><b>図11</b>. <i>ワイヤレスリレー。クリックして詳細を確認できます</i></figcaption>
</figure>
</div>

## リソース

- **[PDF]** [Seeed Relay Page PDF版](https://files.seeedstudio.com/wiki/Seeed_Relay_Page/Datasheet/Seeed_Relay_Page.pdf)

- **[ZIP]** [Seeedリレーモジュールデータシート](https://files.seeedstudio.com/wiki/Seeed_Relay_Page/Datasheet/Seeed_Relay_Module_Datasheet.zip)

- **[ZIP]** [Seeedリレー簡易選択表＆図表](https://files.seeedstudio.com/wiki/Seeed_Relay_Page/res/Seeed_relay_select.zip)

## 技術サポート＆製品ディスカッション

当社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>