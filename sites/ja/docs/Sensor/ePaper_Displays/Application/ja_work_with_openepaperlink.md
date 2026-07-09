---
description: OpenDisplay と OpenEPaperLink エコシステムを使用して、Bluetooth Low Energy 経由で reTerminal E1001、E1002、E1003、XIAO ePaper Display Board EN04、および XIAO ePaper Breakout Board パスを含む Seeed の ePaper ハードウェアを駆動します。
title: OpenEPaperLink / OpenDisplay を使う
keywords:
  - ePaper ディスプレイ
  - OpenEPaperLink
  - OEPL
  - OpenDisplay
  - reTerminal E1001
  - reTerminal E1002
  - reTerminal E1003
  - EN04
  - ePaper Breakout Board
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
slug: /EN04_opendisplay
sidebar_position: 9
last_update:
  date: 06/30/2026
  author: dimo
aliases:
  - /epaper_breakout_board_with_oepl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/EN04_opendisplay/
updatedAt: '2026-06-30'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# OpenEPaperLink / OpenDisplay を使う

[OpenDisplay](https://opendisplay.org/) と [OpenEPaperLink (OEPL)](https://openepaperlink.de/) は、**Bluetooth Low Energy (BLE)** 経由で ePaper ディスプレイを駆動するためのオープンソースエコシステムです。スマートフォン、コンピュータ、または Home Assistant ホストがディスプレイに直接接続できるため、基本的なワークフローでは 802.15.4 アクセスポイントは不要です。

このガイドでは、2 つの Seeed ハードウェアパスを扱います：

- **OpenDisplay Toolbox パス** — **reTerminal E1001**、**reTerminal E1002**、**reTerminal E1003**、および **XIAO ePaper Display Board EN04** 向けの、すぐに使える OpenDisplay ファームウェアに推奨されるパスです。
- **OEPL_BLE パス** — **Seeed Studio XIAO 用 ePaper Breakout Board** と **XIAO nRF52840 シリーズボード** を用いたモジュラーな DIY 構成に便利なパスです。

どちらのパスでもユーザー体験は似ています。ファームウェアをインストールし、BLE 経由でデバイスを設定し、その後イメージをアップロードします。使用するツールやサポートされるプリセットが異なるため、自分のハードウェアに合ったタブに従ってください。

## 対応ハードウェア

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E シリーズ" default>

OpenDisplay Toolbox には、**reTerminal E1001**、**reTerminal E1002**、**reTerminal E1003** 用のプリセットが含まれています。

<div class="table-center">
	<table align="center">
		<tr>
			<th>reTerminal E1001</th>
			<th>reTerminal E1002</th>
			<th>reTerminal E1003</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
		<tr>
			<td align="center">7.5 インチ モノクロ、800 × 480</td>
			<td align="center">7.3 インチ Spectra 6 色、800 × 480</td>
			<td align="center">10.3 インチ モノクロ、1404 × 1872、タッチ対応</td>
		</tr>
		<tr>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1001" target="_blank" rel="noopener noreferrer">Toolbox で開く</a></td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1002" target="_blank" rel="noopener noreferrer">Toolbox で開く</a></td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1003" target="_blank" rel="noopener noreferrer">Toolbox で開く</a></td>
		</tr>
	</table>
</div>

完成品の reTerminal E シリーズデバイス上で OpenDisplay ファームウェアを直接実行したい場合は、このパスを使用してください。

:::caution
OpenDisplay ファームウェアをインストールすると、現在デバイス上で動作しているファームウェアは置き換えられます。公式の reTerminal E-Series Firmware Hub または製品 Wiki で推奨されているファームウェアパッケージを使用して、復元用のパスを必ず用意しておいてください。
:::

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ePaper Display Board EN04</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
		<tr>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?driver=en04" target="_blank" rel="noopener noreferrer">Toolbox で EN04 を開く</a></td>
		</tr>
	</table>
</div>

EN04 は nRF52840 ベースの ePaper ドライバーボードです。対応する ePaper パネルを BLE に特化したコントローラと組み合わせたい場合、OpenDisplay にとって最も直接的な DIY パスです。

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

<div class="table-center">
	<table align="center">
		<tr>
			<th>4.26 インチ モノクロ ePaper ディスプレイ</th>
			<th>Seeed Studio XIAO 用 ePaper Breakout Board</th>
			<th>Seeed Studio XIAO nRF52840 Sense Plus</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

モジュラーな OEPL_BLE ビルドを行いたい場合は、このパスを使用してください。XIAO nRF52840 シリーズはこの DIY キットを駆動でき、コミュニティの OEPL ワークフローでは、設定とイメージアップロード用に別々のツールが提供されています。

</TabItem>
</Tabs>

## なぜ OpenDisplay / OpenEPaperLink を使うのか？

- **BLE ファーストのワークフロー** — 専用の 802.15.4 アクセスポイントなしで、設定とイメージのアップロードが行えます。
- **ブラウザベースのツール** — 対応ブラウザから、ファームウェアのインストール、プリセットの選択、デバイスの設定、イメージのアップロードができます。
- **Seeed ハードウェアプリセット** — OpenDisplay Toolbox には reTerminal E1001、E1002、E1003、EN04 用のプリセットが含まれています。
- **Home Assistant 対応** — OpenDisplay デバイスは、Home Assistant の公式 OpenDisplay インテグレーションを通じて追加できます。
- **オープンソースエコシステム** — ファームウェア、ツール、インテグレーションは公開リポジトリで開発されています。

## ステップ 1: ハードウェアのセットアップ

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E シリーズ" default>

**ステップ 1.** reTerminal E シリーズデバイスを USB-C データケーブルでコンピュータに接続します。

**ステップ 2.** デバイスの電源を入れ、コンピュータの近くに置きます。ブラウザは、ファームウェアのインストールには USB を、設定には BLE を使用します。

**ステップ 3.** 自分のハードウェアに合った OpenDisplay Toolbox プリセットを選択します：

<div class="table-center">
	<table align="center">
		<tr>
			<th>デバイス</th>
			<th>Toolbox プリセット</th>
			<th>ディスプレイ</th>
		</tr>
		<tr>
			<td>reTerminal E1001</td>
			<td><code>reterminal-e1001</code></td>
			<td>7.5 インチ モノクロ、800 × 480</td>
		</tr>
		<tr>
			<td>reTerminal E1002</td>
			<td><code>reterminal-e1002</code></td>
			<td>7.3 インチ Spectra 6 色、800 × 480</td>
		</tr>
		<tr>
			<td>reTerminal E1003</td>
			<td><code>reterminal-e1003</code></td>
			<td>10.3 インチ モノクロ、1404 × 1872</td>
		</tr>
	</table>
</div>

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**ステップ 1.** ePaper パネルの FPC ケーブルを EN04 のコネクタに挿入し、ラッチをロックします。

:::tip
50 ピンコネクタの場合、FPC に印刷された `1` と `50` のマークを、ボード上の対応するマークと合わせてください。下の EN04 キットでは、FPC の金属接点側が上向きになります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 2.** バッテリーを JST コネクタに接続します。赤い線を **+** に、黒い線を **-** に接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

**ステップ 3.** EN04 ボードを USB-C データケーブルでコンピュータに接続します。

:::caution
ボードに電源を入れる前にバッテリーの極性を確認してください。極性が逆のバッテリーコネクタを使用するとハードウェアが損傷する可能性があります。
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

**ステップ 1.** XIAO nRF52840 シリーズボードを ePaper Breakout Board に取り付けます。

**ステップ 2.** ePaper パネルの FPC ケーブルをブレイクアウトボードのコネクタに挿入し、ラッチをロックします。

**ステップ 3.** USB-C データケーブルで XIAO をコンピュータに接続します。

</TabItem>
</Tabs>

## ステップ 2: ファームウェアをインストールする

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E シリーズ" default>

OpenDisplay は reTerminal E シリーズ向けに直接使用できる Toolbox プリセットを提供しています。

**ステップ 1.** Chrome または Edge で対応する Toolbox プリセットを開きます：

- [reTerminal E1001 Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1001)
- [reTerminal E1002 Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1002)
- [reTerminal E1003 Toolbox preset](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1003)

**ステップ 2.** 選択したプリセットが使用しているデバイスと一致していることを確認します。

**ステップ 3.** **Install firmware (USB)** をクリックします。

**ステップ 4.** ブラウザのペアリングダイアログで、reTerminal を接続したときに表示される USB シリアルデバイスを選択します。

**ステップ 5.** インストーラが完了し、デバイスが再起動するまで待ちます。

インストール後、次のステップで BLE 設定を続行します。

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

現在の OpenDisplay フローでは、EN04 のセットアップに Toolbox を使用します。

**ステップ 1.** Chrome または Edge で [OpenDisplay Toolbox for EN04](https://opendisplay.org/firmware/toolbox/index.html?driver=en04) を開きます。

**ステップ 2.** 接続している ePaper ディスプレイに一致するパネルを選択します。

**ステップ 3.** **Install firmware (USB)** をクリックし、ブラウザの指示に従います。

**ステップ 4.** ブラウザからブートローダーモードへの切り替えを求められた場合は、EN04 ボードのリセットボタンを 2 回押し、新しく検出された USB デバイスを選択します。

**ステップ 5.** ファームウェアのインストールが完了するまで待ちます。

EN04 は OpenDisplay ファームウェアで再起動し、その後 BLE 経由で設定できるようになります。

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

XIAO nRF52840 + Breakout Board のパスでは、OEPL Config Builder が接続できるようになる前に **OEPL_BLE** ファームウェアを使用します。

**ステップ 1.** [OEPL_BLE リリースページ](https://github.com/OpenEPaperLink/OEPL_BLE/releases) を開き、使用している XIAO nRF52840 ボードに対応するファームウェアパッケージをダウンロードします。

<div class="github_container" style={{textAlign: 'center'}}>
	<a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases" target="_blank" rel="noopener noreferrer">
	<strong><span><font color={'FFFFFF'} size={"4"}> Download OEPL_BLE Firmware</font></span></strong>
	</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

**ステップ 2.** XIAO のリセットボタンを 2 回押します。USB ドライブとして認識されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** ダウンロードした `.uf2` ファームウェアファイルをその USB ドライブにドラッグします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

次回の電源投入時に、XIAO は再起動して OEPL_BLE ファームウェアを実行します。

</TabItem>
</Tabs>

## ステップ 3: BLE 経由でデバイスを設定する

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E シリーズ" default>

**ステップ 1.** 同じ OpenDisplay Toolbox ページで **Configure over Bluetooth** をクリックします。

**ステップ 2.** BLE ペアリングダイアログで reTerminal デバイスを選択します。

**ステップ 3.** Toolbox が選択したプリセットを書き込むまで待ちます。

**ステップ 4.** ディスプレイがリフレッシュするか、OpenDisplay の起動／テスト画像が表示されることを確認します。

これでデバイスは OpenDisplay ツールまたは Home Assistant を通じて画像をアップロードする準備が整いました。

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**ステップ 1.** OpenDisplay Toolbox で、ドライバーボードとして **EN04** が選択されていることを維持し、一致するパネルオプションを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>

**ステップ 2.** **Configure over Bluetooth** をクリックします。

**ステップ 3.** BLE ペアリングダイアログで EN04 デバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png" style={{width:500, height:'auto'}}/></div>

**ステップ 4.** Toolbox が設定を書き込み、ディスプレイがリフレッシュするまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

**ステップ 1.** [OEPL Config Builder](https://config.openepaperlink.org/) を開きます。

**ステップ 2.** **Connect** をクリックし、BLE ペアリングダイアログから XIAO nRF52840 デバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

**ステップ 3.** ビルダーパネルを使用して、ホスト IC、電源設定、ディスプレイ、LED、センサー、バス、バイナリ入力を設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

**ステップ 4.** Seeed 4.26 インチ白黒 ePaper のセットアップでは、以下のサンプル設定をインポートします。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank" rel="noopener noreferrer">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>4.26" サンプル設定 (JSON)</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

**ステップ 5.** **Write Config** をクリックして、設定を MCU に保存します。

</TabItem>
</Tabs>

## ステップ 4: 画像をアップロードする

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E シリーズ" default>

OpenDisplay デバイスは、ブラウザのディスプレイツールを通じて画像を受信できます。

**ステップ 1.** [OpenDisplay display tool](https://opendisplay.org/firmware/display/index.html) を開きます。

**ステップ 2.** **Connect** をクリックし、BLE ペアリングダイアログから reTerminal デバイスを選択します。

**ステップ 3.** **Select Image** をクリックし、ローカルの画像ファイルを選択します。

**ステップ 4.** **Upload Image** をクリックします。

転送が完了すると、ePaper ディスプレイがリフレッシュされ、アップロードした画像が表示されます。

:::tip
最もきれいな表示結果を得るには、使用しているパネルに合った画像サイズを使用してください：

- reTerminal E1001: 800 × 480 px
- reTerminal E1002: 800 × 480 px
- reTerminal E1003: 1404 × 1872 px
:::

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**ステップ 1.** [OpenDisplay display tool](https://opendisplay.org/firmware/display/index.html) を開きます。

**ステップ 2.** **Connect** をクリックし、BLE ペアリングダイアログから EN04 デバイスを選択します。

**ステップ 3.** **Select Image** をクリックし、ローカルの画像ファイルを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>

**ステップ 4.** **Upload Image** をクリックします。転送が完了すると ePaper ディスプレイがリフレッシュされます。

:::tip
接続しているパネルに合った画像サイズを使用してください。例えば、7.3 インチ Spectra 6 パネルでは 800 × 480 px を使用します。
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

OEPL Image Uploader は、OEPL_BLE パス用の別個の BLE Web ツールです。

**ステップ 1.** [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html) を開きます。

**ステップ 2.** **E-Paper prefix filter(s)** に `OEPL` と入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

**ステップ 3.** BLE 経由で XIAO デバイスに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

**ステップ 4.** **Select File** をクリックし、ローカルの画像を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

**ステップ 5.** **Upload Image** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

アップローダーに **Upload Complete** と表示されたら、ePaper ディスプレイはリフレッシュされています。

</TabItem>
</Tabs>

## Home Assistant との連携

Home Assistant には、OpenDisplay ファームウェアデバイス向けの公式 **OpenDisplay** インテグレーションがあります。これは BLE 経由で通信し、ディスプレイに画像を送信するための `opendisplay.upload_image` アクションを提供します。

### 前提条件

- Home Assistant 2026.4 以降。
- アクティブな BLE 接続をサポートする動作中の Bluetooth セットアップ。
- 電源が入っており、Bluetooth の通信範囲内にある OpenDisplay ファームウェアデバイス。

次の Bluetooth パスが利用できます：

- Home Assistant Green、または対応する Bluetooth ハードウェアを備えたその他の Home Assistant ホスト。
- ESPHome ファームウェア 2022.9.3 以降を実行している ESPHome Bluetooth Proxy。

:::info
Shelly Bluetooth プロキシはパッシブ BLE センサーには便利ですが、OpenDisplay の画像アップロードにはアクティブな BLE 接続が必要です。このワークフローには Home Assistant の Bluetooth アダプタまたは ESPHome Bluetooth Proxy を使用してください。
:::

### デバイスを追加する

**Step 1.** Home Assistant で **Settings > Devices & services** に移動します。

**Step 2.** デバイスが自動検出された場合は、OpenDisplay カードの **Add** をクリックします。

**Step 3.** 自動検出されない場合は **Add Integration** をクリックし、**OpenDisplay** を検索してセットアップフローに従います。

**Step 4.** デバイス名とエリアを割り当てます。

デバイスが追加されると、Home Assistant は Bluetooth 経由で OpenDisplay デバイスを検出して接続できるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

### Home Assistant から画像をアップロードする

画像を Home Assistant のローカルメディアフォルダに保存し、`opendisplay.upload_image` を呼び出します。

```yaml
action: opendisplay.upload_image
data:
  device_id: "your_device_id"
  image:
    media_content_id: "media-source://media_source/local/photo.png"
    media_content_type: "image/png"
```

スケジュールされた更新には、オートメーション内で同じアクションを使用します。

```yaml
triggers:
  - trigger: time
    at: "08:00:00"
actions:
  - action: opendisplay.upload_image
    data:
      device_id: "your_device_id"
      image:
        media_content_id: "media-source://media_source/local/daily.png"
        media_content_type: "image/png"
```

:::tip
Home Assistant のオートメーションを使用して、`opendisplay.upload_image` を呼び出す前に新しい PNG を生成またはコピーします。その後の BLE 転送は OpenDisplay インテグレーションがディスプレイまで処理します。
:::

### オプション：カスタム Draw ペイロード

OpenDisplay コミュニティは、テキスト、アイコン、図形、QR コード、画像、プロット、プログレスバーを Home Assistant のペイロードから直接描画するための `drawcustom` ワークフローを備えた HACS インテグレーションも維持しています。

あらかじめ用意した画像をアップロードするのではなく、特に draw コマンドレイアウトが必要な場合はこのパスを使用してください。

<div class="github_container" style={{textAlign: 'center'}}>
	<a class="github_item" href="https://github.com/OpenDisplay-org/Home_Assistant_Integration" target="_blank" rel="noopener noreferrer">
	<strong><span><font color={'FFFFFF'} size={"4"}> OpenDisplay HACS インテグレーション</font></span></strong>
	</a>
</div>

Home Assistant のビジュアルエディタでオートメーションを作成し、時間トリガーを追加してから、OpenDisplay の draw アクションを追加し、対象デバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

## ESPHome Bluetooth Proxy の使用

ESPHome Bluetooth Proxy は、ディスプレイが Home Assistant ホストから離れている場合に Bluetooth のカバレッジを拡張し、信頼性を向上させます。

### 前提条件

- XIAO ESP32S3 などの ESP32 デバイス。
- Home Assistant にインストールされた ESPHome。
- 初回書き込み用の USB データケーブル。

### 手順付き設定

**Step 1.** ESP32 デバイスを、書き込みに使用するコンピュータまたは Home Assistant ホストに接続します。

**Step 2.** 新しい ESPHome デバイスを作成し、以下の例と同様の Bluetooth Proxy 設定を使用します。

```yaml
esphome:
  name: esps3-proxy
  friendly_name: ESP32S3 Bluetooth Proxy

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

logger:
  level: INFO

esp32_ble_tracker:
  scan_parameters:
    active: true

bluetooth_proxy:
  active: true

api:
  encryption:
    key: "YOUR_ENCRYPTION_KEY"

ota:
  - platform: esphome
    password: "YOUR_OTA_PASSWORD"

wifi:
  ssid: "YOUR_WIFI_SSID"
  password: "YOUR_WIFI_PASSWORD"

captive_portal:
```

**Step 3.** ESPHome で **Install** をクリックし、ESP32 デバイスにファームウェアを書き込みます。

**Step 4.** ESP32 が Wi-Fi に接続したら、Home Assistant で検出された Bluetooth Proxy を追加します。

**Step 5.** 画像アップロード中は、プロキシを OpenDisplay デバイスの近くに置いてください。

プロキシが動作していると、Home Assistant には Bluetooth Proxy が接続済みとして表示され、ePaper ディスプレイはそのプロキシ経由で検出できるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png" style={{width:700, height:'auto'}}/></div>

## おまけ：3D プリントマウント

7.3 インチ Spectra パネル付きの EN04 用に、このコミュニティモデルは IKEA RODALM フォトフレーム用のインサートを提供します：

- **[MakerWorld]** [Seeed 7.3" Spectra Insert for IKEA RODALM Frame](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## リソース

- **[Web Tool]** [OpenDisplay Toolbox](https://opendisplay.org/firmware/toolbox/index.html)
- **[Web Tool]** [OpenDisplay display tool](https://opendisplay.org/firmware/display/index.html)
- **[Web Tool]** [OEPL Config Builder](https://config.openepaperlink.org/)
- **[Web Tool]** [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html)
- **[Home Assistant]** [Official OpenDisplay Integration](https://www.home-assistant.io/integrations/opendisplay/)

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
