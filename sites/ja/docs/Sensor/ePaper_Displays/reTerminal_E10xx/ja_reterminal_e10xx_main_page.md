---
description: この記事は、reTerminal E シリーズのまとめページです。
title: reTerminal E シリーズ
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /reterminal_e10xx_main_page
sku: 100017057,100073581
sidebar_position: 1
last_update:
  date: 08/05/2026
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_main_page/
---
# reTerminal E シリーズ ePaper ディスプレイ概要

:::tip ブラウザで ESPHome YAML を生成、またはデモをフラッシュ
すぐに始めるには **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)** を開きます。**ESPHome** カードを選択し、デバイス（E1001 / E1002 / E1003 / E1004）を選び、必要なオンボード機能にチェックを入れて、対応する ESPHome YAML を生成します。または、ブラウザ（デスクトップ版 Chrome または Edge）から直接デモ用ファームウェアを書き込むこともできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Hub 🖱️</font></span></strong>
    </a>
</div><br />
:::

## はじめに

reTerminal E シリーズは、Seeed Studio による ESP32-S3 搭載の ePaper ディスプレイ端末ファミリーで、**常時表示・低消費電力の情報表示** に特化して設計されています。ラインナップは 4 つのモデル — **E1001, E1002, E1003, E1004** — からなり、7.3 インチから 13.3 インチまでのモノクロおよびフルカラーのパネルをカバーし、タッチ操作対応や数か月単位のバッテリー駆動オプションも用意されています。すべて同じソフトウェアスタック（SenseCraft HMI、Home Assistant / ESPHome、Arduino など）を共有しているため、一度覚えれば、あとは用途に合ったフォームファクタを選ぶだけです。

電力を継続的に消費する従来のディスプレイとは異なり、reTerminal E シリーズはコンテンツを再描画するときだけ電流を消費するため、デジタルフォトフレーム、スマートホームダッシュボード、小売サイネージ、会議室ボード、教室ディスプレイなど、常時表示が求められる用途に最適です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

## 製品ラインナップ概要

4 つのモデル、1 つのエコシステム。**画面サイズ**、**カラーかモノクロか**、**タッチ対応**、**バッテリー寿命** で選びましょう：

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:240, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center"><strong>7.5" モノクロ</strong><br/>4 階調グレースケール<br/>約 3 か月バッテリー</td>
      <td align="center"><strong>7.3" フルカラー</strong><br/>E Ink® Spectra™ 6<br/>約 3 か月バッテリー</td>
      <td align="center"><strong>10.3" モノクロ</strong><br/>16 階調グレースケール + タッチ</td>
      <td align="center"><strong>13.3" フルカラー</strong><br/>E Ink® Spectra™ 6<br/>約 6 か月バッテリー</td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer"><strong>E1001 を購入</strong></a><br/><a href="https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer"><strong>E1002 を購入</strong></a><br/><a href="https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer"><strong>E1003 を購入</strong></a><br/><a href="https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer"><strong>E1004 を購入</strong></a><br/><a href="https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
    </tr>
  </table>
</div>

## 仕様比較

4 つのモデルはすべて、同じ ESP32-S3 プラットフォーム、Wi-Fi 4 / Bluetooth 5.0 無線、オンボード T/H センサとブザー、USB-C 5 V / 1 A 入力、0～40 °C の動作温度範囲を備え、金属筐体に収められています。違いは主に **ディスプレイパネル**、**リフレッシュ動作**、**バッテリー**、**拡張性**、**認証** にあります：

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">項目</th>
			<th align="center">reTerminal E1001</th>
			<th align="center">reTerminal E1002</th>
			<th align="center">reTerminal E1003</th>
			<th align="center">reTerminal E1004</th>
		</tr>
		<tr>
			<td align="center"><strong>ディスプレイサイズ</strong></td>
			<td align="center">7.5"</td>
			<td align="center">7.3"</td>
			<td align="center">10.3"</td>
			<td align="center">13.3"</td>
		</tr>
		<tr>
			<td align="center"><strong>ディスプレイタイプ</strong></td>
			<td align="center">モノクロ<br/>(4 階調グレースケール)</td>
			<td align="center">フルカラー<br/>(E Ink® Spectra™ 6)</td>
			<td align="center">モノクロ<br/>(16 階調グレースケール)</td>
			<td align="center">フルカラー<br/>(E Ink® Spectra™ 6)</td>
		</tr>
		<tr>
			<td align="center"><strong>解像度</strong></td>
			<td align="center">800 × 480</td>
			<td align="center">800 × 480</td>
			<td align="center">1404 × 1872</td>
			<td align="center">1200 × 1600</td>
		</tr>
		<tr>
			<td align="center"><strong>部分リフレッシュ</strong></td>
			<td align="center">✅</td>
			<td align="center">❌</td>
			<td align="center">✅</td>
			<td align="center">❌</td>
		</tr>
		<tr>
			<td align="center"><strong>リフレッシュ時間</strong></td>
			<td align="center">2～5 秒</td>
			<td align="center">15～20 秒</td>
			<td align="center">2～3 秒</td>
			<td align="center">約 20 秒</td>
		</tr>
		<tr>
			<td align="center"><strong>タッチ</strong></td>
			<td align="center">—</td>
			<td align="center">—</td>
			<td align="center">✅ 静電容量式タッチ<br/>(SenseCraft HMI v1.1.2+)</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td align="center"><strong>プロセッサ</strong></td>
			<td align="center" colspan="4">ESP32-S3（8 MB PSRAM 搭載）</td>
		</tr>
		<tr>
			<td align="center"><strong>ストレージ</strong></td>
			<td align="center">32 MB Flash<br/>microSD 最大 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD 最大 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD 最大 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD 最大 32 GB<br/>(<strong>16 GB 付属</strong>)</td>
		</tr>
		<tr>
			<td align="center"><strong>無線</strong></td>
			<td align="center" colspan="4">2.4 GHz Wi-Fi 802.11 b/g/n + Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>オンボードセンサ</strong></td>
			<td align="center" colspan="4">温度・湿度センサ</td>
		</tr>
		<tr>
			<td align="center"><strong>オーディオ</strong></td>
			<td align="center" colspan="4">ブザー（サウンドアラート）· マイク端子を E1001 / E1002 / E1003 に予約</td>
		</tr>
		<tr>
			<td align="center"><strong>バッテリー</strong></td>
			<td align="center">2000 mAh<br/>約 3 か月</td>
			<td align="center">2000 mAh<br/>約 3 か月</td>
			<td align="center">3000 mAh<br/>約 6 か月</td>
			<td align="center">5000 mAh<br/>約 6 か月</td>
		</tr>
		<tr>
			<td align="center"><strong>バッテリー監視</strong></td>
			<td align="center" colspan="4">✅ オンボードのバッテリー電圧監視</td>
		</tr>
		<tr>
			<td align="center"><strong>電源入力</strong></td>
			<td align="center" colspan="4">USB-C 5 V / 1 A</td>
		</tr>
		<tr>
			<td align="center"><strong>動作温度</strong></td>
			<td align="center" colspan="4">0～40 °C</td>
		</tr>
		<tr>
			<td align="center"><strong>筐体</strong></td>
			<td align="center" colspan="4">金属</td>
		</tr>
		<tr>
			<td align="center"><strong>寸法</strong></td>
			<td align="center">176 × 120 × 53 mm<br/>(スタンドなし 17 mm)</td>
			<td align="center">176 × 120 × 53 mm<br/>(スタンドなし 17 mm)</td>
			<td align="center">224 × 187 × 18.6 mm</td>
			<td align="center">376 × 311 × 40 mm</td>
		</tr>
		<tr>
			<td align="center"><strong>拡張</strong></td>
			<td align="center">8 ピンヘッダ<br/>UART / I²C / GPIO</td>
			<td align="center">8 ピンヘッダ<br/>UART / I²C / GPIO</td>
			<td align="center">ピンヘッダ<br/>UART / I²C / GPIO</td>
			<td align="center">2 × 4 ヘッダ<br/>UART / I²C / GPIO / ADC</td>
		</tr>
		<tr>
			<td align="center"><strong>認証</strong></td>
			<td align="center">FCC / CE / TELEC<br/>PSE / RoHS / UKCA</td>
			<td align="center">FCC / CE / TELEC<br/>PSE / RoHS / UKCA</td>
			<td align="center">FCC / CE</td>
			<td align="center">FCC / CE</td>
		</tr>
		<tr>
			<td align="center"><strong>希望小売価格 (MSRP)</strong></td>
			<td align="center">&#36;69.00</td>
			<td align="center">&#36;99.00</td>
			<td align="center">&#36;159.90</td>
			<td align="center">&#36;279.90</td>
		</tr>
	</table>
</div>

## 選び方

以下のクイックガイドを使って、1 つのモデルに絞り込みましょう。複数の行が当てはまる場合は、**最後に一致した行** が通常は最適な選択です。

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">優先したいポイントが…</th>
			<th align="center">おすすめモデル</th>
			<th align="center">理由</th>
		</tr>
		<tr>
			<td>最も低コスト / テキスト中心の情報ボード / 高速な部分リフレッシュ</td>
			<td align="center"><strong>E1001</strong></td>
			<td>7.5インチのモノクロ4階調グレースケール、部分更新対応、リフレッシュレート 2～5 秒。</td>
		</tr>
		<tr>
			<td>E1001 と同じフォームファクタで、鮮やかなフルカラーコンテンツを表示したい場合</td>
			<td align="center"><strong>E1002</strong></td>
			<td>7.3インチ Spectra™ 6 フルカラーパネル — ギャラリー、レシピ、子どものお手伝いチャート、小売サイネージに最適。注意：フルカラーは、より豊かなビジュアル表現と引き換えに部分更新ができず、フルリフレッシュは約 15～20 秒です。</td>
		</tr>
		<tr>
			<td>タッチ操作 / インタラクティブダッシュボード / 大型モノクロリーダー</td>
			<td align="center"><strong>E1003</strong></td>
			<td>10.3インチ 16階調グレースケール、静電容量式タッチ（HMI v1.1.2 以降）対応、バッテリー駆動は最大 6 か月。</td>
		</tr>
		<tr>
			<td>最大サイズで最も高精細な、フォトフレームグレードのカラー表示</td>
			<td align="center"><strong>E1004</strong></td>
			<td>13.3インチ Spectra™ 6 フルカラー、1200×1600、5000 mAhバッテリー、16 GB microSDプリインストール。</td>
		</tr>
		<tr>
			<td>今すぐ Home Assistant / ESPHome 連携が必要</td>
			<td align="center"><strong>E1001 / E1002 / E1003 / E1004</strong></td>
			<td>4 つすべてのモデルが ESPHome を通じて Home Assistant をサポートします。E1003 と E1004 には ESPHome 2026.7.0 以降が必要です。</td>
		</tr>
		<tr>
			<td>TRMNL E-Ink ダッシュボードを使いたい</td>
			<td align="center"><strong>E1001 / E1002 / E1003 / E1004</strong></td>
			<td>4 つすべてのモデルがサポートされています。E1002 と E1004 はカラーパネルですが、現在 TRMNL ではモノクロモードで動作します。</td>
		</tr>
		<tr>
			<td>バッテリー寿命が最重要要件</td>
			<td align="center"><strong>E1003 / E1004</strong></td>
			<td>デフォルトのリフレッシュ設定で最大 6 か月のバッテリー寿命。</td>
		</tr>
	</table>
</div>

## reTerminal E1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"3"}>reTerminal E1001 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手</font></span></strong>
  </a>
</div><br />

reTerminal E1001 は、4 階調グレースケールに対応した 7.5 インチのモノクロ ePaper ディスプレイを搭載しています。800×480 の解像度により、きわめて少ない電力消費で、くっきりとしたテキストと鮮明な画像を表示できます。モノクロディスプレイは、テキストの視認性とバッテリー寿命を重視するアプリケーションに最適です。

### 主な特長

- 7.5 インチ モノクロ ePaper ディスプレイ（4 階調グレースケール）
- 800×480 解像度
- 超低消費電力で長時間のバッテリー駆動を実現
- カレンダー、ToDo リスト、情報表示などテキスト中心のアプリケーションに最適

## reTerminal E1002

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1002 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手</font></span></strong>
  </a>
</div><br />

reTerminal E1002 は、ACeP（Advanced Color ePaper）技術を採用した鮮やかな 7.3 インチ フルカラー ePaper ディスプレイを搭載しています。このカラーディスプレイは、ePaper 技術ならではの省電力性を維持しつつ、多色表示による視覚的に魅力的なコンテンツを実現します。視覚的な区別やデザイン性が重要なアプリケーションに最適です。

### 主な特長

- ACeP 技術を採用した 7.3 インチ フルカラー ePaper ディスプレイ
- 800×480 解像度
- 低消費電力を維持しながら豊かな色表現を実現
- ギャラリー表示、カラフルなダッシュボード、ビジュアル重視のアプリケーションに最適

## reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1003 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手</font></span></strong>
  </a>
</div><br />

reTerminal E1003 は、16 階調グレースケールと 1404×1872 ピクセルの高解像度を備えた 10.3 インチ オープンソース モノクロ ePaper ディスプレイで、最大 6 か月のバッテリー寿命を実現します。タッチ操作は現在、SenseCraft HMI ファームウェア v1.1.2 でサポートされています。ESP32-S3 を搭載し、SenseCraft HMI のノーコード UI デザインをネイティブにサポートするほか、Arduino、PlatformIO、ESPHome（Home Assistant）によるさらなる開発も可能です。

タッチ関連の Arduino ライブラリは、今後オープンソースとして公開予定であり、パネルのカスタマイズ性がさらに高まります。詳細なアップデートは追って共有されます。ESPHome はすでに E1003 のディスプレイドライバと GT911 静電容量式タッチをサポートしています — 詳細は [ESPHome cookbooks](/ja/reterminal_e10xx_with_esphome) を参照してください。

### 主な特長

- 10.3 インチ モノクロ ePaper ディスプレイ（HMI ファームウェア v1.1.2 でタッチ操作をサポート）
- 1404×1872 の高解像度に対応した 16 階調グレースケール
- 超低消費電力動作により最大 6 か月のバッテリー寿命
- SenseCraft HMI をネイティブサポートし、Arduino、PlatformIO、ESPHome（Home Assistant）とも互換

## reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1004 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>今すぐ入手</font></span></strong>
  </a>
</div><br />

reTerminal E1004 は、13.3 インチ フルカラー ePaper ディスプレイと最大 6 か月のバッテリー寿命を備えています。ESP32-S3 を搭載し、SenseCraft HMI によるノーコードのダッシュボード作成と画像アップロードをサポートするほか、ESPHome を介した Home Assistant、Arduino、ESP-IDF による高度な開発ワークフローにも対応します。E1004 のディスプレイドライバには **2026.7.0 以降** の ESPHome が必要です — 詳細は [ESPHome cookbooks](/ja/reterminal_e10xx_with_esphome) を参照してください。

### 主な特長

- 13.3 インチ フルカラー ePaper ディスプレイ
- 常時表示シナリオ向けに最大 6 か月のバッテリー寿命
- SenseCraft HMI のノーコードサポートを備えた ESP32-S3 プラットフォーム
- Home Assistant / ESPHome、Arduino、ESP-IDF と互換

## SenseCraft HMI — デフォルトのノーコードプラットフォーム

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/sensecraft_hmi_overview" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI Wiki</font></span></strong>
  </a>
</div><br />

すべての reTerminal E シリーズ デバイスには、出荷時から **SenseCraft HMI** ファームウェアが搭載されており、1 行もコードを書くことなくすぐに使い始めることができます。Web アプリ側でログイン、ダッシュボード設計、デバイスへの OTA（無線）デプロイをまとめて処理します：

- **AI Generator** — ダッシュボードの内容を自然文で説明すると、AI が自動でレイアウトします。
- **Gallery** — デジタルフォトフレーム用途向けに、画像やスライドショーをパネルへ直接プッシュします。
- **Canvas** — ウィジェットをドラッグ＆ドロップしてカスタムダッシュボードを構築します。
- **RSS / Web Content** — ニュース、天気、カレンダー、任意の Web フィードを画面にライブ表示します。
- **Touch interaction** — E1003 では HMI ファームウェア v1.1.2 以降で完全サポート。

ノーコードワークフロー以上の制御が必要な場合でも、各デバイスは基盤となる ESP32-S3 へアクセスできるため、いつでも ESPHome / Home Assistant、Arduino、そして以下のアプリケーションチュートリアルに切り替えることができます。すぐに使える ESPHome YAML が必要な場合は、[Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/) の ESPHome カードを使用し、必要な機能にチェックを入れてください。

## アプリケーション & チュートリアル

SenseCraft HMI に加えて、reTerminal E シリーズは複数の業界標準プラットフォームやビジュアル UI デザインツールと連携します。以下のマトリクスでは、各チュートリアルがどのモデルを現在カバーしているかを確認できます。

### スマートホーム & ダッシュボードフレームワーク

<div class="table-center">
	<table align="center">
		<tr>
			<th>Tutorial</th>
			<th>What it does</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome">ESPHome — Display</a></td>
			<td>デバイスを Home Assistant に接続し、YAML を使ってシンプルな電子ペーパーグラフィックを描画します。デバイスと機能を選択して、<a href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/">Firmware Hub</a> からスターター用の YAML を生成します。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome_advanced">ESPHome — I/O、バッテリー、タッチ &amp; 電源</a></td>
			<td>ボタン、ブザー、オンボード LED、バッテリー監視、ディープスリープ、マルチページダッシュボード、および静電容量式タッチ（E1003）。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome_rtc_sd_microphone">ESPHome — RTC, SD &amp; Microphone</a></td>
			<td>PCF8563 RTC の時刻同期、microSD カード検出、およびオンボード PDM マイクのセットアップ。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅ <em>（マイクなし）</em></td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_trmnl">TRMNL 対応</a></td>
			<td>TRMNL プラットフォームを通じて E-Ink ダッシュボードを展開します。</td>
			<td align="center">✅</td>
			<td align="center">✅ <em>（モノクロモード）</em></td>
			<td align="center">✅</td>
			<td align="center">✅ <em>（モノクロモード）</em></td>
		</tr>
	</table>
</div>

### ノーコード / ビジュアル UI デザインツール

<div class="table-center">
	<table align="center">
		<tr>
			<th>チュートリアル</th>
			<th>できること</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_squareline_vision">SquareLine Vision を使う</a></td>
			<td>ブラウザ上でドラッグ &amp; ドロップで LVGL UI を作成し、そのままコンパイル可能なコードとしてエクスポートします。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_eezstudio">EEZ Studio を使う</a></td>
			<td>HMI 画面をビジュアルに設計し、Arduino IDE を通じてデプロイします。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_lopaka">Lopaka を使う</a></td>
			<td>モノクロおよびカラー電子ペーパーのレイアウト用コードをエクスポートできる、Web ベースの描画ツールです。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
	</table>
</div>

### コードベース開発

<div class="table-center">
	<table align="center">
		<tr>
			<th>チュートリアル</th>
			<th>できること</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino">Arduino — 電子ペーパーディスプレイ</a></td>
			<td>Seeed_GFX または GxEPD2 ライブラリを使用して、電子ペーパー画面にテキスト、グラフィック、画像を描画します。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals">Arduino — オンボードペリフェラル</a></td>
			<td>オンボード LED、ブザー、3 つのユーザーボタン、SHT4x センサー、バッテリーモニター、および microSD カードを制御します。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_arduino_peripherals_2">Arduino — RTC、低消費電力、オーディオ &amp; タッチ</a></td>
			<td>RTC 時刻管理、ディープスリープ / ライトスリープ、I2S マイク録音、および静電容量式タッチ描画（マイク &amp; タッチは E1003 のみ）。</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
	</table>
</div>

:::tip
デバイスごとのスタートガイド（開封、Wi-Fi 設定、ファームウェア更新）をお探しですか？上のマトリクスにリンクされている製品 Wiki へジャンプしてください：
[E1001](https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1001) ·
[E1002](https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1002) ·
[E1003](https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1003) ·
[E1004](https://wiki.seeedstudio.com/ja/getting_started_with_reterminal_e1004).
:::

## リソース

- [SenseCraft HMI ドキュメント](https://wiki.seeedstudio.com/ja/sensecraft_hmi_overview/)
- [ESP32-S3 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [reTerminal MIC 無線認証書](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reTerminal_MIC_Radio_Certificate.pdf)

## FCC に関するお知らせ

適合性に責任を負う当事者によって明示的に承認されていない変更または改造は、ユーザーの本機器の操作権限を無効にする可能性があります。本機器は FCC 規則 Part 15 に適合しています。動作は次の 2 つの条件に従います：

(1) 本機器は有害な干渉を引き起こしてはならないこと。

(2) 本機器は、望ましくない動作を引き起こす可能性のある干渉を含め、受信したあらゆる干渉を受け入れなければならないこと。本送信機は、他のアンテナまたは送信機と同一場所で使用したり、共同で動作させたりしてはなりません。

注：本機器は試験の結果、FCC 規則 Part 15 に基づくクラス B デジタル機器の規定値に適合していることが確認されています。これらの規定値は、住宅環境での有害な干渉に対して妥当な保護を提供するよう設計されています。本機器は無線周波エネルギーを生成、使用、および放射することがあり、取扱説明書に従って設置および使用しないと、無線通信に有害な干渉を引き起こすおそれがあります。ただし、特定の設置環境で干渉が発生しないことを保証するものではありません。本機器がラジオやテレビの受信に有害な干渉を引き起こしていると判断される場合（本機器の電源を入切することで確認可能）、ユーザーは次のいずれか 1 つ以上の対策を講じて干渉の解消を試みることが推奨されます：

– 受信アンテナの向きまたは設置場所を変更する。

– 機器と受信機の距離を離す。

– 受信機が接続されている回路とは異なる回路のコンセントに機器を接続する。

– 販売店または経験豊富なラジオ / テレビ技術者に相談する。本機器は、管理されていない環境に対して規定された FCC の放射線曝露制限に適合しています。本機器は、放射部と人体との距離が最低 20cm 以上となるように設置および使用してください。

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
