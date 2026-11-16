---
description: 物理ボタン、MUI と Base UI、Bluetooth ペアリング、メッセージング、GNSS、microSD マップを使って SenseCAP MeshPager X2 シリーズを使い始めましょう。
title: Meshtastic を使い始める
keywords:
  - MeshPager X2 Series
  - Meshtastic
slug: /x2_get_started_for_meshtastic
sidebar_position: 1
last_update:
  date: 11/12/2026
  author: Yves
createdAt: '2026-08-28'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/ja/x2_get_started_for_meshtastic/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

SenseCAP MeshPager X2 シリーズは物理ボタンを使用して、2 つの Meshtastic インターフェースを操作します。グラフィカルなページと地図を備えた **MUI** と、情報画面とメニューを備えた **Base UI** です。

仕様、コネクタ、ピン配置については、[SenseCAP MeshPager X2 Series Introduction](/ja/meshpager_x2_intro/) を参照してください。

:::caution 電源を入れる前に
動作バンドに合った LoRa アンテナを接続してください。**4.4 V 充電**に対応した指定の X2 バッテリを使用します。最大充電電圧 4.2 V のセルは適していません。
:::

## ファームウェアを書き込む

すでにファームウェアがインストールされている場合は、[Get Started](/ja/x2_get_started_for_meshtastic/#get-started) に進んでください。

1. USB データケーブルを使用して X2 をコンピュータに接続します。
2. Web Serial をサポートするブラウザ（デスクトップ版 Chrome や Edge など）で [Meshtastic Web Flasher](https://flasher.meshtastic.org/) を開きます。
3. **Select Target Device** を開き、**Seeed MeshPager X2** を探します。利用可能であればそれを選択し、互換性のあるファームウェアバージョンを選びます。
4. **Flash** をクリックし、ダウンロードモードに入る手順と X2 の現在の USB ポートを選択する手順に従います。書き込みが完了するまで USB を接続したままにします。

:::info X2 が一覧にない場合
このガイドを確認した時点では、X2 は公開 Web Flasher のデバイス一覧に含まれていませんでした。**Seeed MeshPager X2** が見つからない場合は、X2 のファクトリイメージと [Manual Firmware Installation](/ja/x2_get_started_for_meshtastic/#manual-firmware-installation) を使用してください。X2 に対して他のデバイスモデルを選択しないでください。
:::

X2 を強制的にファームウェア書き込みモードにするには、**Power と Return を同時に押し続けたまま**、**USB ケーブルを接続します**。両方のボタンを **1 秒間**押し続けてから離します。

ダウンロードした X2 の `.factory.bin` を書き込むには、[Manual Firmware Installation with esptool](/ja/x2_get_started_for_meshtastic/#manual-firmware-installation) に従ってください。

:::caution X2 用ファームウェアのみを使用
**Seeed MeshPager X2**（`seeed_meshpager_x2`）用のファームウェアを使用し、イメージに付属する手順に従ってください。フル消去は必要な場合にのみ有効にし、その前に設定をバックアップしてください。
:::

## はじめに

### 電源オンと操作

1. バッテリを充電するために、安定化された **5 V USB 電源** を USB-C ポートに接続します。
2. **Power** キーを使って X2 を起動します。充電専用画面から抜けるには、Power を離してから、約 **5 秒間**押し続けます。
3. Base UI または MUI が起動するまで待ちます。

USB 接続中にシャットダウンすると、X2 が充電専用画面に戻る場合があります。

#### 強制再起動

X2 を強制的に再起動するには、**Power を押しながら、給電された USB-C（Type-C）ケーブルを同時に接続します**。

### ボタン操作

| キー | Base UI | MUI |
| --- | --- | --- |
| Up / Down | メニュー項目、ノード、またはメッセージスレッドをスクロールします。Home からはメッセージ作成画面を開きます。 | ナビゲーションアイコンやコントロールをハイライトします。 |
| Left / Right | 情報画面を切り替えるか、キーボードのキー間を移動します。 | Right でハイライトされたページに入ります。ページ内ではタブを切り替えたり、スライダーを調整したり、キーボードのキー間を移動したりします。 |
| Confirm (左側のオレンジキー) | 画面のメニューを開くか、項目を選択します。 | ハイライトされた項目をアクティブにします。 |
| Hold Confirm | 対応している場合、選択中のコントロールの長押しアクションを実行します。 | 対応している場合、選択中のコントロールの長押しアクションを実行します。 |
| Return | 入力をキャンセルするか、メニューを閉じます。 | キーボード、リスト、ダイアログを閉じるか、1 つ前の階層に戻ります。 |
| Power | 短押し：画面オフ／復帰。約 4 秒間長押し：シャットダウン。 | 短押し：画面オフ／復帰。約 4 秒間長押し：シャットダウン。 |

このガイドでは、**選択** とは方向キーで項目をハイライトし、**Confirm** を押すことを意味します。**Confirm** は画面左下のオレンジキーで、横線のマークが付いています。**Left/Right** は方向パッドを指します。

### UI の切り替え

以下から切り替え方向を選びます。再フラッシュは不要です。

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0'}}>
  <figure style={{textAlign: 'center', margin: 0, width: '280px', maxWidth: '100%'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142916.png" alt="Close-up of MeshPager X2 Base UI showing battery, node, satellite, and channel-utilization information" width={1276} height={1010} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>Base UI</strong> — 情報画面とメニュー。</figcaption>
  </figure>
  <figure style={{textAlign: 'center', margin: 0, width: '280px', maxWidth: '100%'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142835.png" alt="Close-up of MeshPager X2 MUI showing the Home page and navigation icons along the left edge" width={1546} height={1172} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>MUI</strong> — グラフィカルなページと地図。</figcaption>
  </figure>
</div>

<Tabs groupId="x2-ui-switch">
<TabItem value="base-to-mui" label="Base UI から MUI へ">

1. Left/Right を使って **System** に移動し、Confirm を押します。
2. **Reboot/Shutdown → Switch to MUI → Yes** を選択します。
3. X2 が MUI で再起動するまで待ちます。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <video controls playsInline muted preload="none" poster="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui-poster.jpg" width={360} height={640} style={{maxWidth: '100%', height: 'auto'}} aria-label="MeshPager X2 demonstration: select Switch to MUI in Base UI and confirm the restart">
    <source src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui.mp4" type="video/mp4" />
    <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-to-mui.mp4">Base UI から MUI へのデモをダウンロードします。</a>
  </video>
  <figcaption>Base UI から MUI へ。動画は再起動中に終了します。</figcaption>
</figure>

</TabItem>
<TabItem value="mui-to-base" label="MUI から Base UI へ">

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-menu-portrait.jpg" alt="X2 MUI Settings and Tools screen with red outlines around the Settings icon and Reboot / Shutdown menu entry" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. メニューを開きます。</strong> ナビゲーションバーで Settings をハイライトし、Right を押して入ります。Reboot / Shutdown を選択し、Confirm を押します。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-select-portrait.jpg" alt="X2 reboot menu with red outlines around the Bluetooth icon and left orange Confirm key used to switch to Base UI" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Confirm を長押しして UI を切り替えます。</strong> Left/Right を使って Bluetooth アイコンをハイライトします。<strong>Confirm（左側のオレンジキー）を押し続け</strong>、<strong>Reboot into BaseUI?</strong> ダイアログが表示されるまで待ってからキーを離します。</figcaption>
  </figure>
</div>

**3. 再起動を確定します。** **OK** を選択し、X2 が Base UI で再起動するまで待ちます。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <video controls playsInline muted preload="none" poster="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base-poster.jpg" width={360} height={640} style={{maxWidth: '100%', height: 'auto'}} aria-label="MeshPager X2 demonstration: hold Confirm on the MUI Bluetooth icon and confirm the switch to Base UI">
    <source src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base.mp4" type="video/mp4" />
    <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-to-base.mp4">MUI から Base UI へのデモをダウンロードします。</a>
  </video>
  <figcaption>MUI から Base UI へ。動画は再起動中に終了します。</figcaption>
</figure>

</TabItem>
</Tabs>

### スマートフォンとの接続

**ステップ 1. X2 で Bluetooth を有効にします。**

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

Bluetooth は MUI から切り替えた後は有効になっています。手動で有効にするには、**System** を開き、Confirm を押して **Bluetooth Toggle** を選択します。再起動を求められたら従ってください。Wi-Fi が Bluetooth ペアリングを妨げる場合は、先に Wi-Fi を無効にします。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 640, margin: '1.5rem auto'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-home.png" alt="X2 Base UI Home screen with BT off and the example node name outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. Bluetooth の状態を確認します。</strong> <code>BT off</code> は Bluetooth が無効であることを意味します。ここに表示されているノード名は例です。アプリでは自分の X2 を探してください。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-bluetooth-toggle.png" alt="X2 Base UI System Action menu with Bluetooth Toggle and the left orange Confirm key outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Bluetooth を有効にします。</strong> System 画面で Confirm を押し、Bluetooth Toggle を選択し、表示される再起動プロンプトに従います。</figcaption>
  </figure>
</div>

</TabItem>
<TabItem value="mui" label="MUI">

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-menu-portrait.jpg" alt="X2 MUI Settings and Tools screen with red outlines around the Settings icon and Reboot / Shutdown menu entry" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. メニューを開きます。</strong> Settings に入り、Reboot / Shutdown を選択して Confirm を押します。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-bluetooth-select-portrait.jpg" alt="X2 の再起動メニュー。Bluetooth アイコンと左側のオレンジ色の Confirm キーが赤枠で囲まれている" width={900} height={1100} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. Bluetooth 接続モードに入ります。</strong> Left/Right を使用して Bluetooth アイコンをハイライトし、Confirm（左側のオレンジ色のキー）を短く押します。</figcaption>
  </figure>
</div>

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-145102.png" alt="MeshPager X2 の MUI Bluetooth 接続画面。Bluetooth アイコン、Programming mode ラベル、6 桁のペアリング PIN が表示されている" width={480} height={341} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption><strong>3. ペアリング PIN を待ちます。</strong> Bluetooth 接続画面に Programming mode と 6 桁の PIN が表示されます。</figcaption>
</figure>

:::caution MUI に戻る
設定が完了したら、**Confirm** を押して MUI に戻ります。
:::

</TabItem>
</Tabs>

**Step 2. Meshtastic アプリをダウンロードする**

[Click here](https://meshtastic.org/downloads/) から **iOS** または **Android** 用の Meshtastic アプリをダウンロードします。

**Step 3. デバイスとペアリングする**

スマートフォンで Bluetooth を有効にし、Meshtastic アプリを開いて、要求される Bluetooth または Nearby Devices の権限を付与します。以下のスクリーンショットはアプリのワークフローを示しています。リストから X2 のデバイス名を選択します。

<Tabs groupId="x2-phone-os">
<TabItem value="ios" label="iOS">

1. Meshtastic アプリで **Bluetooth** パネルを開き、**Available Radios** の下から X2 を選択します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="Meshtastic iOS アプリの Bluetooth パネル。Available Radios の下で例示の無線機がハイライトされている" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

2. X2 の画面に表示されているコードを入力し、**Pair** をタップして接続します。固定 PIN を設定している場合は、その PIN を使用します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="PIN 入力フィールドと Pair ボタンが表示された iOS の Bluetooth ペアリング要求" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="android" label="Android">

1. Meshtastic アプリで **Connection** パネルを開き、**BLE** を選択してから、デバイス一覧から X2 を選びます。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="Meshtastic Android アプリの Connection パネル。BLE が選択され、近くの無線機が一覧表示されている" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

2. X2 の画面に表示されているコードを入力し、**OK** をタップして接続します。固定 PIN を設定している場合は、その PIN を使用します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="PIN 入力フィールドと OK ボタンがハイライトされた Android の Bluetooth ペアリング要求" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

設定を変更する前に、デバイス構成が読み込まれるまで待ちます。

### LoRa を設定する

メッシュで通信する前に、**region** を設定します。この設定はデバイスが使用する周波数帯を制御し、あなたの所在地、X2 の **863–928 MHz** 無線ハードウェア、およびアンテナに合わせる必要があります。

**リージョン一覧**

| **Region Code** | **説明** | **周波数範囲 (MHz)** | **デューティサイクル (%)** | **出力制限 (dBm)** |
| :---: | :---: | :---: | :---: | :---: |
| UNSET | 未設定 | N/A | N/A | N/A |
| US | アメリカ合衆国 | 902.0 - 928.0 | 100 | 30 |
| EU_868 | 欧州連合 868MHz | 869.4 - 869.65 | 10 | 27 |

より包括的な一覧については、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。上記の出力制限は Meshtastic のリージョン制限であり、X2 の実際の送信出力はハードウェアとファームウェアにも依存します。

:::info EU_868 のデューティサイクル
EU_868 には **10% のデューティサイクル制限** があり、直近 1 時間を 1 分ごとにローリングして計算されます。デバイスがこの制限に達すると、再び送信が許可されるまで送信を停止します。
:::

<Tabs groupId="x2-lora-method">
<TabItem value="base" label="Base UI">

1. Left/Right を使って **LoRa** に移動し、Confirm を押します。
2. **LoRa Region** を選択し、リージョンを選んで、表示されるプロンプトを確認します。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 640, margin: '1.5rem auto'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-lora-region.png" alt="X2 Base UI の LoRa Actions メニュー。LoRa Region と Confirm キーが赤枠で囲まれている" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>リージョン設定を開きます。</strong> LoRa Region を選択し、次の画面で自分の所在地に合ったリージョンを選びます。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-lora-info.png" alt="X2 Base UI の LoRa Info 画面。例として US リージョン、LongTurbo プリセット、周波数、および BLE 識別子が表示されている" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>現在の設定を確認します。</strong> LoRa Info にはリージョン、モデムプリセット、周波数が表示されます。この例では US / LongTurbo を使用しています。あなたの所在地とグループに適した設定を使用してください。</figcaption>
  </figure>
</div>

LoRa Info に表示される 4 文字の **BLE** ラベルは、Bluetooth ペアリング PIN ではなくデバイス識別子です。ペアリング時には、X2 のペアリングプロンプトに表示される PIN、または設定した固定 PIN を使用してください。

</TabItem>
<TabItem value="mui" label="MUI">

1. **Settings → Region** に入ります。
2. リージョンを選択して **OK** を選びます。表示された場合は再起動します。

</TabItem>
<TabItem value="phone" label="Configure on Phone">

Meshtastic アプリを X2 に接続し、構成が読み込まれるまで待ちます。使用しているスマートフォンに応じて、以下の手順を選択します。

<Tabs groupId="x2-phone-os">
<TabItem value="ios" label="iOS">

1. 接続ページに **Set LoRa Region** が表示されている場合は、それをタップします。表示されていない場合は、**Settings** のデバイス構成から **LoRa** を開きます。
2. 自分の所在地に合わせて **Region** を設定し、構成を保存します。
3. X2 が再起動した場合は再接続し、リージョンが **UNSET** ではなくなっていることを確認します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="Meshtastic iOS アプリの LoRa 設定とリージョン選択画面" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="android" label="Android">

1. アプリメニューから **Radio Configuration → LoRa** を開きます。
2. **Region** を選択して構成を保存します。
3. X2 が再起動した場合は再接続し、選択したリージョンを確認します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="Meshtastic Android アプリの LoRa 設定画面。リージョンセレクターが表示されている" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

スクリーンショットはスマートフォンアプリのワークフローを示したものです。接続済みの X2 を選択してください。メニュー名はアプリのバージョンによって異なる場合があります。

</TabItem>
</Tabs>

他のノードと通信するには、**modem preset、frequency slot、channel name、pre-shared key** を一致させる必要があります。これらの設定を構成するか、スマートフォンアプリでグループのチャンネル構成をインポートできます。

送信出力とデューティサイクルの設定は、現地の規制に準拠していなければなりません。詳細は [Meshtastic LoRa configuration](https://meshtastic.org/docs/configuration/radio/lora/) を参照してください。

### マップの使用

<span id="microsd-and-offline-maps"></span>
<span id="wi-fi"></span>

マップの表示には MUI を使用します。現在地を表示するには、GPS を有効にして屋外で測位が完了するまで待ちます。[Configure GPS](/ja/x2_get_started_for_meshtastic/#configure-gps) を参照してください。

<Tabs groupId="x2-map-mode">
<TabItem value="offline" label="Offline Map">

オフラインマップには **MUI** と microSD カードが必要です。

**Step 1. カードを準備する。**

1. フォーマットの前にカードをバックアップしてください。フォーマットすると内容は消去されます。カードは **MBR パーティション方式と FAT32** で準備します。
2. [Meshtastic UI map starter kit](https://github.com/meshtastic/device-ui/tree/master/maps) から `osm.zip` や `atlas.zip` などのスタイル ZIP をダウンロードします。
3. アーカイブをカードのルートに展開し、その中のフォルダー構造を保持します。抽出したファイルの周りに新たな `maps` フォルダーを追加するのではなく、結果のパスを確認してください：

```text
microSD root/
└── maps/
    └── <style>/
        └── <zoom>/
            └── <x>/
                └── <y>.png
```

たとえば、`osm` という名前のスタイルは `/maps/osm/` 配下に配置します。`/maps/maps/osm/` のような余分なフォルダ階層は避けてください。

4. コピーが完了したら、カードを安全に取り外します。

:::tip 概要マップから始める
公式のスターターキットアーカイブには、**ズームレベル 1–6** の全世界タイルが含まれています。マップが読み込まれることを確認するには、ズームレベル 6 以下までズームアウトしてください。道路レベルの詳細を得るには、より高いズームレベルで自分のエリアをカバーするタイルをダウンロードする必要があります。スターターキットだけではそのような詳細は含まれていません。[map download instructions](https://github.com/meshtastic/device-ui/tree/master/maps#downloading-tiles) を参照してください。
:::

**Step 2. カードを挿入してマップを開く。**

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142948.png" alt="MeshPager X2 microSD card slot with the outer cover removed" width={600} height={242} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>X2 の microSD カードスロット。</figcaption>
</figure>

1. カードを挿入または取り外しする前に、X2 の電源を切り、USB を取り外します。
2. microSD カードを奥まで挿入し、X2 の電源を入れて MUI に入ります。
3. 現在地で GNSS を有効にし、屋外で測位が完了するまで待ちます。
4. **Map** を開き、タイルに合ったスタイルを選択します。

ダウンロード済みタイルは、Wi‑Fi や携帯電話回線がなくても動作します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151638.png" alt="MeshPager X2 MUI Locations Map showing street tiles, location markers, zoom buttons, and navigation controls" width={600} height={455} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>位置マーカー、ズーム、ナビゲーション操作を備えた MUI マップ。</figcaption>
</figure>

**ステップ 3. ボタンで操作してナビゲートする。**

| マップの状態 | 操作 |
| --- | --- |
| 閲覧 | 方向キーでパンします。 |
| コントロールを開く | Confirm を押します。 |
| ズームまたは位置 | Up/Down でコントロールを選択し、Confirm を押します。 |
| マップに戻る | Return を押します。 |
| ナビゲーションバーに戻る | もう一度 Return を押します。 |

</TabItem>
<TabItem value="online" label="オンラインマップ">

**ステップ 1. GPS を有効にする。**

**Home** を開き、**location/GPS control** を選択して、長押しで GNSS を有効にします（無効な場合）。再起動を求められたら再起動し、その後屋外で測位が完了するまで待ちます。

**ステップ 2. Wi‑Fi を設定して有効にする。**

MUI で **Settings → Wi‑Fi** を開き、Wi‑Fi ネットワーク名（**WiFi SSID**）とパスワード（**WiFi pre-shared Key**）を入力し、**OK** を選択します。どちらもデバイス上で直接設定できます。

:::tip
**2.4 GHz** の Wi‑Fi ネットワークに接続してください。**5 GHz** Wi‑Fi には対応していません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="MUI Wi-Fi settings with the network name, password, and OK button highlighted" width={450} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" /></p>

**Home** で、**0.0.0.0** が表示されたグレーの Wi‑Fi アイコンは無効状態を示します。割り当てられた IP アドレスが表示された白い Wi‑Fi アイコンは接続状態を示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="MUI Home screen comparing disabled Wi-Fi with 0.0.0.0 and connected Wi-Fi with an assigned IP address" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" /></p>

**Wi‑Fi アイコン** を長押しすると、Wi‑Fi をオンまたはオフにできます。X2 では、方向キーでアイコンを選択し、**Confirm（左側のオレンジ色のキー）を長押し**して長押し操作を行います。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="MUI Home screen with the Wi-Fi icon highlighted for a long press to change its state" width={450} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" /></p>

Bluetooth 接続モードでは Wi‑Fi が無効になります。必要に応じて MUI に戻った後に再度有効にしてください。オンラインマップには、インターネットに接続された Wi‑Fi ネットワークが必要です。

**ステップ 3. マップを表示する。**

**Map** を開き、マップタイルが読み込まれるまで待ちます。新しいエリアを読み込む間は、Wi‑Fi をインターネットに接続したままにしてください。

</TabItem>
</Tabs>

### メッセージの送信と閲覧

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

**メッセージを作成する**

1. Left/Right を使って **Home** 情報画面に移動します。
2. Up または Down を押してメッセージ作成画面を開きます。
3. **[Select Destination]** を選択し、チャンネルまたはノードを選びます。
4. 定型メッセージを選択して送信するか、**[-- Free Text --]** を選択してキーボードを開きます。
5. 方向キーと Confirm を使って文字を入力します。キーボードの backspace キーで削除します。
6. キーボードの **Enter** キーを選択して送信します。**Return** で入力をキャンセルします。

**Messages** 画面から作成画面を開くこともできます：Confirm を押し、**Message Action** メニューで **New Preset Msg** を選択します。定型文を選ぶ前やフリーテキストを入力する前に、宛先を確認してください。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', maxWidth: 640, margin: '1.5rem auto'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-new-preset-message.png" alt="X2 Base UI Message Action menu with New Preset Msg and the Confirm key outlined in red" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>メッセージ作成画面を開く。</strong>Messages で Confirm を押し、New Preset Msg を選択します。宛先と定型メッセージを選ぶか、Free Text を選択してキーボードを開きます。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-base-ui-keyboard.png" alt="X2 Base UI free-text keyboard with the character keys and ENTER outlined in red, addressed to the example LongTurbo channel" width={900} height={1200} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>入力して送信する。</strong><code>To:</code> の横に表示される受信者を確認し、方向キーと Confirm で文字を入力し、ENTER を選択して送信します。LongTurbo は例としての宛先です。</figcaption>
  </figure>
</div>

作成画面が利用できない場合は、スマートフォンアプリで **Canned Message** モジュールを有効にし、オンスクリーンキーボード対応のファームウェアを使用してください。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151656.png" alt="MeshPager X2 Base UI showing the Message sent to LongFast confirmation" width={480} height={390} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Base UI：LongFast チャンネルにメッセージを送信したところ。</figcaption>
</figure>

**メッセージを読む**

Left/Right でメッセージ画面に移動し、Up/Down でスレッドをスクロールし、Confirm で会話アクションを開きます。

</TabItem>
<TabItem value="mui" label="MUI">

**ノードリストからダイレクトメッセージを開始する**

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-node-select.png" alt="X2 node list with red outlines around the Nodes icon, selected node 9028, direction Right, and the left orange Confirm key" width={940} height={1270} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. ノードを選択する。</strong>ナビゲーションバーで Nodes を選択し、Right を押してリストに入ります。Up/Down でノードを選択し、その会話が開くまで Confirm（左側のオレンジ色のキー）を長押しします。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-open-keyboard.png" alt="X2 conversation with red outlines around recipient Meshtastic 9028, the keyboard icon, and the orange Confirm key" width={925} height={1215} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. キーボードを開く。</strong>上部の受信者名を確認します。フォーカスをテキスト入力欄に移動し、Right を押してキーボードアイコンを選択し、Confirm を押して開きます。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-type-send.png" alt="X2 on-screen keyboard with red outlines around the typed letter w, the keyboard, and the lower-right submit checkmark" width={825} height={1085} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>3. 入力して送信する。</strong>方向キーで文字を選択し、Confirm を押して入力します。右下のチェックマークを選択し、Confirm を押して送信します。</figcaption>
  </figure>
</div>

<figure style={{maxWidth: 320, margin: '1.5rem auto', textAlign: 'center'}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-message-sent.png" alt="X2 conversation after submission, with red outlines around recipient Meshtastic 9028 and the outgoing message w" width={770} height={1065} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>4. 送信済みメッセージを確認する。</strong>キーボードが閉じ、送信済みメッセージが会話に表示されます。この例では <code>w</code> を Meshtastic 9028 に送信しています。</figcaption>
</figure>

チャンネル会話の場合は **Channels** を開いてチャンネルを選択します。既存の会話に戻るには、**Messages** を開いてチャットを選択します。

**Return** は送信せずにキーボードを閉じます。もう一度押すとチャットリストに戻ります。

<h4 id="mute-and-unmute-a-channel">チャンネルをミュート／ミュート解除する</h4>

1. ナビゲーションバーで **Channels** を選択し、**Right** を押してチャンネルリストに入ります。Up/Down で、例の **LongTurbo** のような設定済みチャンネルを選択します。
2. **Confirm を長押し**（左側のオレンジ色のキー）して、ベルアイコンが**オレンジ色の斜線付きベル**に変わるまで押し続け、キーを離します。これでチャンネル通知はミュートされます。
3. 同じチャンネルのミュートを解除するには、**再度 Confirm を長押し**し、**白いベル**が戻るまで押し続けてからキーを離します。

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-select.png" alt="X2 Group Channels page with red outlines around the Channels icon, selected LongTurbo channel, and left orange Confirm key" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>1. チャンネルを選択する。</strong>左側のオレンジ色の Confirm キーを長押しして、ミュート状態を切り替えます。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-muted.png" alt="Confirm を押し続けた後、赤枠で囲まれたオレンジ色の取り消し線付きベルが表示された選択中の LongTurbo チャンネル" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>2. ミュート。</strong> オレンジ色の取り消し線付きベルは、そのチャンネルの通知がミュートされていることを示します。</figcaption>
  </figure>
  <figure style={{margin: 0}}>
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-mui-channel-unmuted.png" alt="再度 Confirm を押し続けた後、赤枠で囲まれた白いベルが表示された選択中の LongTurbo チャンネル" width={1080} height={1680} style={{width: '100%', height: 'auto'}} loading="lazy" />
    <figcaption><strong>3. ミュート解除。</strong> Confirm をもう一度押し続けて白いベルを元に戻し、そのチャンネルの通知を有効にします。</figcaption>
  </figure>
</div>

</TabItem>
</Tabs>

ダイレクトメッセージを行うには、まずデバイス同士でノード情報と公開鍵を交換する必要があります。

## 上級者向けの使い方

<span id="advanced-tutorial"></span>

### Web サイト経由で接続

<span id="connect-via-web-client"></span>

[Meshtastic Web Client](https://client.meshtastic.org/) を使用して、ブラウザからメッセージを読み取り、テキストを送信し、ノードを設定します。選択した接続方法をサポートするファームウェアとともに、デスクトップ版の **Chrome または Edge** を使用してください。ブラウザのサポート状況は異なるため、[Web Client compatibility guide](https://meshtastic.org/docs/software/web-client/) を参照してください。

**ステップ 1. Web Client を開く。**

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="Meshtastic Web Client のランディングページ" width={1000} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

**ステップ 2. 接続を追加する。** **New Connection** を選択します。スクリーンショットはクライアントのワークフローを示したものであり、デバイス名やポート番号は一例です。接続時には自分の X2 を選択してください。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="Meshtastic Web Client の New Connection ボタン" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

**ステップ 3. 接続方法を選ぶ。**

<Tabs groupId="x2-web-connection">
<TabItem value="bluetooth" label="Bluetooth">

1. X2 で Bluetooth を有効にします。MUI で、[Phone Connection](/ja/x2_get_started_for_meshtastic/#phone-connection) で説明されている Bluetooth 接続モードに入ります。
2. ブラウザが接続できるように、X2 からスマホアプリを切断します。
3. Web Client で **Bluetooth** を選択し、ブラウザのデバイスピッカーで X2 を選びます。表示された場合はペアリングを完了します。
4. ノード設定が読み込まれるまで待ち、その後チャンネルまたは会話を開きます。

</TabItem>
<TabItem value="serial" label="USB Serial">

1. Meshtastic を実行した状態で X2 の電源を入れ、USB **データ** ケーブルで接続します。ファームウェアダウンロードモードは Web Client を使用するためではなく、書き込み用です。
2. Web Flasher、シリアルモニタ、その他 X2 のシリアルポートを使用しているアプリケーションを閉じます。
3. Web Client で **Serial** を選択し、表示された場合は **New device** を選び、ブラウザのデバイスピッカーで X2 の USB ポートを選択します。
4. ノード設定が読み込まれるまで待ち、その後チャンネルまたは会話を開きます。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="Meshtastic Web Client のシリアル接続とブラウザのシリアルポートピッカー" width={1000} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

USB デバイスは **USB JTAG/serial debug unit** と表示される場合があります。X2 を再接続したり USB ポートを変更した場合は、その都度現在のポートを選択してください。

</TabItem>
</Tabs>

**ステップ 4. 接続を確認する。** まだ接続されていない場合は、追加したデバイスを選択して接続します。するとクライアントにノードのステータスが表示され、設定が読み込まれます。メッセージビューを開き、チャンネルまたはノードとの会話を選択します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="Meshtastic Web Client で接続済みとして表示されているノードの例" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

### GPS を設定する

<span id="gnss-positioning"></span>

X2 を屋外で空がよく見える場所に置き、衛星の捕捉を待ちます。

<Tabs groupId="x2-ui-mode">
<TabItem value="base" label="Base UI">

Left/Right を使って **Position** に移動し、Confirm を押して **On/Off Toggle → Enabled** を選択します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151648.png" alt="MeshPager X2 Base UI の Position 画面。衛星数、緯度、経度、高度が表示されている" width={480} height={407} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Base UI の位置情報画面。</figcaption>
</figure>

</TabItem>
<TabItem value="mui" label="MUI">

**Home** に入り、**location/GPS control** をハイライトします。GNSS が無効な場合は、Confirm を押し続けて有効にします。表示されたら再起動します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-151629.png" alt="MeshPager X2 の MUI Home ページ。位置情報コントロールが選択され、座標、衛星数、高度が表示されている" width={480} height={385} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>Home ページでの MUI の位置情報ステータス。</figcaption>
</figure>

</TabItem>
</Tabs>

**スマートフォンで設定する**

Meshtastic アプリを X2 に接続し、デバイスの無線設定内の **Position** を開いて、以下の設定を調整します。変更を保存し、デバイスが再起動した場合は再接続してください。

| 設定 | 制御内容 |
| --- | --- |
| GPS Mode | X2 の GNSS 受信機を有効または無効にします。 |
| GPS Update Interval | デバイスが新しい GNSS 位置情報を要求する頻度。 |
| Position Broadcast Interval | デバイスがメッシュ上に自分の位置をブロードキャストする頻度。 |
| Smart Position | 設定されたしきい値に従い、動きに基づいて位置情報をブロードキャストできるようにします。 |
| Fixed Position | 固定位置を使用します。デバイスの位置を移動に追従させたい場合は無効にします。 |

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="GPS 更新と位置情報ブロードキャストのための Meshtastic スマホアプリの Position 設定" width={500} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

間隔を短くすると更新頻度は高くなりますが、消費電力やメッシュトラフィックが増加します。デバイスの移動頻度に適した間隔を選択してください。[Meshtastic Position configuration](https://meshtastic.org/docs/configuration/radio/position/) も参照してください。

**iOS の位置情報許可**

Meshtastic アプリで **スマホの位置情報** を使用する場合や、それをノードと共有する場合は、位置情報アクセスを許可し、iOS の設定で Meshtastic に対して **Precise Location** を有効にしてください。この権限はスマホが提供する位置情報を制御するものであり、X2 内蔵の GNSS 受信機は独立して自らの位置を取得します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="Meshtastic に対して Precise Location が有効になっている iOS の位置情報許可設定" width={250} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

### センサー接続

X2 には、環境測定、コンパス方位、動き検知のためのセンサーが内蔵されています。使用したい機能に応じて設定してください：

| センサー | 機能 | 設定 |
| --- | --- | --- |
| SPA06-003 気圧センサー | 気圧およびセンサー温度の測定。 | スマホアプリの **Telemetry → Environment**。 |
| BMM350 磁力計 | コンパス方位。 | Base UI の **Position → Compass** および **Compass Calibrate**。 |
| 6 軸 IMU | 加速度および角速度の測定。 | 対応するファームウェア機能で使用されます。環境 Telemetry ページには 6 軸の生データは表示されません。 |

**環境テレメトリを有効にする**

<Tabs groupId="x2-phone-os">
<TabItem value="ios" label="iOS">

1. X2 に接続し、**Settings → Module Configuration → Telemetry** を開きます。
2. **Environment Metrics Enabled** を有効にし、**Environment Metrics** の間隔を設定します。
3. Base UI に対応する環境測定値を表示したい場合は **Show on device screen** を有効にし、設定を保存します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryIOS.png" alt="環境測定と画面表示のための Meshtastic iOS アプリの Telemetry 設定" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="android" label="Android">

1. X2 に接続し、**Module Configuration → Telemetry** を開きます。
2. **Environment metrics module enabled** を有効にし、その更新間隔を設定します。
3. Base UI に対応する環境測定値を表示するには **Environment metrics on-screen enabled** を有効にし、その後設定を保存します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TelemetryL2.png" alt="環境メトリクスと画面表示オプションを備えた Meshtastic Android アプリの Telemetry 設定" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

スクリーンショットではノードや測定値は一例です。X2 の環境テレメトリは、検出されたセンサーとインストールされているファームウェアでサポートされている測定値を表示します。コンパスキャリブレーションを有効にしたり、加速度計やジャイロスコープの生データを送信したりはしません。コンパスを使用するには、[Other Function](/ja/x2_get_started_for_meshtastic/#other-function) の **Position** タブを使用してください。

### Other Function

<span id="sensors-display-and-audio"></span>

方向キーを使ってコントロールをハイライトします。**Confirm を押して**選択し、**Confirm を押し続けて**長押しアクションを実行します。**Return** を押してダイアログを閉じるか戻ります。メニューの有無は、インストールされているファームウェアと有効なモジュールによって異なります。

<Tabs groupId="x2-other-ui">
<TabItem value="mui" label="MUI">

<Tabs groupId="x2-mui-function-page">
<TabItem value="menu" label="メニューバー">

| X2 の操作 | 効果 |
| --- | --- |
| **Home** で Confirm を長押し | MUI をノードの設定とデータと再同期します。 |
| **Nodes** で Confirm を長押し | ノードフィルターを開きます。 |
| **Settings** で Confirm を長押し | ディスプレイをロックします。Power を押して復帰し、設定されている場合は画面 PIN を入力します。 |

</TabItem>
<TabItem value="home" label="ホームページ">

| ハイライトされているコントロール | X2 の操作 | 効果 |
| --- | --- | --- |
| メッセージアイコン | Confirm を押す | メッセージ一覧を開きます。 |
| ノードアイコン | Confirm を押す | オンラインノード一覧を開きます。 |
| 時計 | Confirm を押す | 日付/時刻と稼働時間を切り替えます。 |
| LoRa アイコン | Confirm を長押し | LoRa 送信を有効または無効にします。 |
| 通知アイコン | Confirm を長押し | 通知を有効または無効にします。 |
| 通知アイコン | Confirm を押す | サウンド、バナー、サウンド＋バナーを順に切り替えます。 |
| GPS アイコン | Confirm を長押し | GNSS を有効または無効にします。表示された場合は再起動します。 |
| Wi-Fi アイコン | Confirm を長押し | Wi-Fi を有効または無効にするか、認証情報がない場合は Wi-Fi 設定を開きます。 |
| MQTT アイコン | Confirm を長押し | MQTT モジュールを有効または無効にします。表示された場合は再起動します。 |
| QR コードアイコン | Confirm を押す | デバイスの QR コードを表示します。 |

MQTT を使用する前に、スマホアプリで MQTT サーバーと関連するチャネルのアップリンク/ダウンリンク設定を構成してください。Home のショートカットでモジュールのオン/オフを切り替えます。セットアップについては [Meshtastic MQTT configuration](https://meshtastic.org/docs/configuration/module/mqtt/) を参照してください。

</TabItem>
<TabItem value="node" label="ノードページ">

| X2 の操作 | 効果 |
| --- | --- |
| ノードをハイライトして Confirm を押す | その詳細を開きます。 |
| ノードをハイライトして Confirm を長押し | そのノードとのダイレクトメッセージ画面を開きます。 |
| ノードの位置コントロールを選択 | 位置データが利用可能な場合、そのノードが報告した位置を地図上に表示します。 |

図解された X2 キーボードのワークフローについては、[Send and Read Messages](/ja/x2_get_started_for_meshtastic/#send-and-read-messages) を参照してください。

</TabItem>
<TabItem value="channel" label="チャネルページ">

チャネルを選択して Confirm を押すと、そのチャネルの会話を開きます。チャネルで Confirm を長押しすると、その通知をミュートまたはミュート解除します。ベルは**白いベル**と**オレンジ色の打ち消し線付きベル**の間で切り替わります。詳しくは [Mute and Unmute a Channel](/ja/x2_get_started_for_meshtastic/#mute-and-unmute-a-channel) を参照してください。

</TabItem>
<TabItem value="message" label="メッセージページ">

会話を選択して Confirm を押すと、その会話を開きます。会話を削除するには、その会話で **Confirm を長押し**して **delete** ボタンを表示させ、そのボタンを選択します。これによりローカルの会話履歴が削除されます。

</TabItem>
<TabItem value="settings" label="設定ページ">

ナビゲーションバーから **Settings** を開き、設定項目をハイライトして Confirm を押します。ダイアログを離れる前に、変更を保存または確定してください。

| 設定 | 効果 |
| --- | --- |
| User Short Name / User Long Name | ノードに表示される名前を変更します。 |
| Lock: Screen / Settings | 画面ロックと設定ロックの PIN を構成します。 |
| Region | LoRa の地域を選択します。 |
| Modem Preset | 無線モデムのプリセットを選択します。 |
| Channel | チャネル設定を編集します。 |
| Device Role | ノードの役割を選択します。 |
| Wi-Fi | ネットワーク名とパスワードを設定します。 |
| Screen Timeout | ディスプレイがアクティブなままになる時間を設定します。 |
| Screen Brightness | バックライトを調整します。 |
| Theme | ライトとダークの外観を切り替えます。 |
| Language | 表示言語を変更します。 |
| Configuration Reset → Factory Reset | 既定の設定に戻します。 |
| Configuration Reset → NodeDB Reset | 保存されているノード情報を消去します。 |
| Configuration Reset → Clear Chat History | ローカルのチャット履歴を消去します。 |
| Reboot / Shutdown → 緑の再起動アイコン | X2 を再起動します。 |
| Reboot / Shutdown → 赤い電源アイコン | X2 の電源を切ります。USB が接続されている場合、充電画面に戻ることがあります。 |

リセット手順とスクリーンショットについては、[Factory Reset](/ja/x2_get_started_for_meshtastic/#factory-reset) および [NodeDB Reset](/ja/x2_get_started_for_meshtastic/#nodedb-reset) を参照してください。

</TabItem>
<TabItem value="tools" label="ツール">

**Settings & Tools** を開き、**Tools** に切り替えます。ツールをハイライトして Confirm を押します。ツールが対象ノードを求めたら、そのノードを選択します。

| ツール | 機能 |
| --- | --- |
| Mesh Detector | 最近検出されたノードを表示します。 |
| Signal Scanner | RSSI や SNR を含む受信信号情報を確認します。 |
| Trace Route | 選択したノードへの経路を要求し、その応答を表示します。 |
| Statistic | パケットおよびデコードの統計情報を表示します。 |
| Packet Log | メッシュパケットの動作を確認します。 |

経路または信号の結果には、該当ノードからのトラフィックが必要です。応答を待ち、リンクを評価する際は [Signal Quality](/ja/x2_get_started_for_meshtastic/#signal-quality) を確認してください。

</TabItem>
</Tabs>

</TabItem>
<TabItem value="base" label="Base UI">

情報画面に移動するには Left/Right を使用し、Confirm を押してアクションメニューを開き、Up/Down と Confirm で項目を選択します。

<Tabs groupId="x2-base-function-page">
<TabItem value="home" label="Home">

| アクション | 効果 |
| --- | --- |
| Sleep Screen / Toggle Backlight | ファームウェアに応じて、ディスプレイをオフにするかバックライトを切り替えます。Power を押して X2 を復帰させます。 |
| Send Position | GNSS が有効で有効な位置情報が利用可能な場合、現在位置をブロードキャストします。 |
| Send Node Info | ノード情報をアナウンスします。GNSS が無効な場合に表示されるオプションです。 |

</TabItem>
<TabItem value="node" label="Node">

選択したノードの **Node Action** メニューを開きます。

| アクション | 効果 |
| --- | --- |
| Favorite / Unfavorite | ノードをお気に入りに追加または削除します。 |
| Trace Route | 選択したノードへの経路を要求します。 |
| Mute Notifications / Unmute Notifications | そのノードの通知を変更します。 |

</TabItem>
<TabItem value="position" label="Position">

| アクション | 効果 |
| --- | --- |
| On/Off Toggle | GNSS を有効または無効にします。 |
| Format | 座標の表示形式を選択します。 |
| Smart Position | 動きに基づくブロードキャストを構成します。 |
| Update Interval | GNSS の更新間隔を設定します。 |
| Broadcast Interval | 位置情報のブロードキャスト間隔を設定します。 |
| Compass | **Dynamic**、**Fixed Ring**、**Freeze Heading** のいずれかを選択します。 |
| Compass Calibrate | **30-second** のコンパスキャリブレーションを開始します。 |

キャリブレーションを行うには、**Compass Calibrate** を選択し、画面の指示に従って X2 をさまざまな向きに回転させます。磁石や大きな金属物から離し、カウントダウンが終了するまで待ちます。キャリブレーションオプションは、ファームウェアが対応センサーを検出した場合にのみ利用できます。

</TabItem>
<TabItem value="lora" label="LoRa">

| アクション | 効果 |
| --- | --- |
| LoRa Region | 動作地域を選択します。 |
| Device Role | ノードの役割を選択します。 |
| Radio Preset | モデムプリセットを選択します。 |
| Frequency Slot | 選択した地域とプリセットに対する周波数スロットを選択します。 |
| Transmit Enabled | 無線送信を有効または無効にします。 |

プリセットと周波数スロットの変更は、通信したいノードと調整してください。

</TabItem>
<TabItem value="system" label="System">

| アクション | 効果 |
| --- | --- |
| Notifications | 通知およびシステムサウンドを構成します。 |
| Display Options | ファームウェアで利用可能なディスプレイ設定を調整します。 |
| Bluetooth Toggle | Bluetooth を有効または無効にします。 |
| WiFi Toggle | Wi-Fi を有効または無効にします。先にネットワーク認証情報を構成してください。 |
| Reboot/Shutdown | 再起動、シャットダウン、または UI の切り替えを行います。 |

</TabItem>
</Tabs>

</TabItem>
</Tabs>

マイクとスピーカーは、将来の音声メッセージ機能アップデートのためのハードウェアを提供します。通知音は上記のコントロールを使用して構成できます。

## FAQ

### デバイスが BLE 経由でスマホとペアリングできない

<span id="x2-is-not-listed-in-the-phone-app"></span>

- **MUI では**、スマホアプリで X2 を検索する前に Bluetooth ペアリングモードに入ってください。**Settings → Reboot / Shutdown** を開き、**Bluetooth アイコン**をハイライトして **Confirm を短く押します**。ペアリング画面が表示されるのを待ち、X2 に表示される PIN を使用します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="MUI Settings, Reboot / Shutdown menu, and Bluetooth pairing mode" width={800} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

X2 では、方向キーを使ってコントロールをハイライトし、**Confirm** を押して選択します。X2 のボタン図については、[Phone Connection](/ja/x2_get_started_for_meshtastic/#phone-connection) を参照してください。

- **Base UI では**、Wi-Fi を有効にすると Bluetooth は無効になります。Wi-Fi を使い続けるには、スマホを同じネットワークに接続し、Meshtastic アプリで **Network** を選択して X2 の IP アドレスを使用します。代わりに BLE でペアリングするには、Wi-Fi を無効にし、X2 で **System → Bluetooth Toggle** を有効にします。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" alt="Meshtastic phone app Network connection settings" width={350} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

- スマホで Bluetooth を有効にし、アプリに **Bluetooth / Nearby Devices** の権限を付与します。すでに X2 に接続している他のスマホやブラウザがあれば切断し、再度スキャンします。
- それでもペアリングに失敗する場合は、スマホの Bluetooth 設定で古い X2 のペアリングを削除し、Meshtastic アプリから再接続します。現在画面に表示されている PIN か、設定済みの固定 PIN を入力してください。

### デバイスが Wi-Fi に接続できない

<span id="wi-fi-does-not-connect-or-turns-off"></span>

1. **2.4 GHz Wi-Fi** ネットワークを使用してください。X2 は 5 GHz Wi-Fi をサポートしません。接続をテストするには、2.4 GHz に設定したスマホのテザリングを試してください。
2. Wi-Fi 名とパスワード（大文字・小文字を含む）を確認し、それらを保存した後に Wi-Fi を有効にします。[Map Usage](/ja/x2_get_started_for_meshtastic/#map-usage) の **Online Map** タブに従ってください。
3. MUI の Home ページで Wi-Fi アイコンと IP アドレスを確認します。グレーのアイコンと空の IP フィールドは、Wi-Fi が無効であるか、接続されていないことを示します。白いアイコンと IP アドレスが表示されていれば、接続されています。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="接続前と接続後の Wi-Fi アイコンと IP アドレスを表示している MUI ホーム画面" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

Bluetooth 接続モードに入ると Wi-Fi は無効になります。MUI に戻ったら、オンラインマップが必要なときに再度 Wi-Fi を有効にしてください。マップタイルをダウンロードするには、その Wi-Fi ネットワークにインターネット接続も必要です。

### デバイスが自動的に電源オフになる

**説明**

- X2 が電源投入後まもなく電源オフになる、または繰り返し再起動します。
- シリアルログが停止し、デバイスが応答しなくなります。

**トラブルシュート**

1. バッテリー残量と USB 電源接続を確認します。画面だけが暗くなっている場合は、**Power** を短く押して X2 がまだ動作しているか確認します。画面のタイムアウトとシャットダウンは異なります。
2. X2 に充電画面だけが表示される場合は Power を離し、その後約 **5 秒間** 押し続けて Meshtastic を起動します。設定の保存中やファームウェア書き込み中に電源を中断しないでください。
3. デバイスが依然として応答しない場合は、[Forced Restart](/ja/x2_get_started_for_meshtastic/#forced-restart) に従ってください。その後も繰り返し再起動する場合は、原因特定のため起動時のシリアルログを取得します。
4. 安定した電源供給でも問題が続く場合は、互換性のある X2 ファームウェアをクリーンインストールします。全消去のファクトリーイメージ手順については、[Manual Firmware Installation](/ja/x2_get_started_for_meshtastic/#manual-firmware-installation) に従ってください。

:::caution クリーンインストール
フル消去を行うと、設定、チャンネル、キー、および保存データが削除されます。続行する前に必要なものは必ず保存してください。再インストール後は、LoRa リージョンとチャンネルを再設定します。
:::

### 工場出荷時リセット

工場出荷時リセットを行うと、デフォルト設定が復元されます。リセット前に保持したい設定やチャンネル情報を保存してください。

<Tabs groupId="x2-faq-reset-method">
<TabItem value="mui" label="MUI で設定">

1. **Settings → Configuration Reset** を開きます。
2. **Factory Reset** を選択し、方向キーと Confirm を使って **OK** を選択します。
3. X2 がデフォルト設定で再起動するまで待ちます。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FactoryResetMUI.png" alt="Factory Reset とその確認ダイアログを表示している MUI の Configuration Reset メニュー" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="phone" label="スマートフォンで設定">

Meshtastic アプリで X2 に接続し、そのデバイス設定を開いて **Factory Reset** を選択します。リセットを確認し、X2 が再起動するまで待ちます。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="Meshtastic スマートフォンアプリの Factory Reset ボタン" width={400} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
</Tabs>

再起動後に X2 へ再接続し、メッシュを使用する前に正しい **LoRa リージョン** と **チャンネル** を設定してください。

### ダイレクトメッセージが失敗する

<span id="direct-messages-fail"></span>

まず、両方のノードが互換性のある LoRa 設定を使用しており、直接またはメッシュ経由で通信可能な範囲内にあることを確認します。共有チャンネルメッセージの送信を試してください。チャンネルメッセージは動作するがダイレクトメッセージが失敗する場合は、以下の保存されたノード情報とキーを確認します。

#### NodeDB リセット

NodeDB にはメッシュ上で検出されたノードに関する情報が保存されます。たとえば、相手ノードがキーを変更する前に保存された古いエントリがあると、ダイレクトメッセージを妨げることがあります。NodeDB をリセットするとローカルのノードデータベースが消去され、デバイスはノードを再検出できるようになります。

<Tabs groupId="x2-faq-reset-method">
<TabItem value="mui" label="MUI で設定">

**Settings → Configuration Reset** を開き、**NodeDB Reset** を選択して **OK** を選択します。X2 上で方向キーと Confirm を使用します。デバイスは再起動します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodedbL2.png" alt="NodeDB Reset とその確認ダイアログを表示している MUI の Configuration Reset メニュー" width={900} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

</TabItem>
<TabItem value="phone" label="スマートフォンで設定">

データベースをリセットしたいノードに Meshtastic アプリを接続します。**Settings → Device → Device Config → Reset NodeDB** を開き、確認します。メニュー名はアプリのバージョンによって異なる場合があります。

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device が選択された Meshtastic アプリの Settings 画面" width={300} style={{maxWidth: '100%', height: 'auto', alignSelf: 'flex-start'}} loading="lazy" />
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Meshtastic アプリの Device Config ページにある Reset NodeDB ボタン" width={300} style={{maxWidth: '100%', height: 'auto', alignSelf: 'flex-start'}} loading="lazy" />
</div>

</TabItem>
</Tabs>

ノードリストが再構築されるまで時間を置き、その後でユーザー情報を交換してからダイレクトメッセージを再試行してください。

#### ユーザー情報の交換

ノードは、暗号化されたダイレクトメッセージに必要な **public key** を含むユーザー情報を定期的にブロードキャストします。ノードの情報が欠落している、または古い場合は、スマートフォンアプリでそのノードのエントリを開き、**Exchange User Info** を選択します。交換が完了するまで待ち、必要に応じてもう一方のノードからも同様に行います。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Exchange User Info を表示している Meshtastic アプリのノードメニュー" width={300} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

ダイレクトメッセージを再送信し、その配信ステータスを確認します。送信者側の会話画面にのみメッセージが表示されている場合、それは受信完了を意味しません。

#### 秘密鍵の再生成

ノード情報を更新してもダイレクトメッセージが依然として失敗する場合は、スマートフォンアプリの **Security** 設定から該当ノードのキーペアを再生成できます。**Regenerate Private Key** を使用して変更を保存し、指示に従ってデバイスを再起動します。

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="秘密鍵の再生成用 Security 設定を表示している Meshtastic スマートフォンアプリ" width={600} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
</figure>

:::note キー再生成後
ノードの public key が変更されるため、他のノードはその新しい情報を取得する必要があります。必要に応じて、他方のノードのリストから古いエントリを削除し、再度ユーザー情報を交換してください。**private key は機密情報として保持**し、他のノードと共有されるのは **public key** のみです。詳しくは [Meshtastic Security configuration](https://meshtastic.org/docs/configuration/radio/security/) を参照してください。
:::

### 信号品質

- **SNR (signal-to-noise ratio)** は、受信信号がバックグラウンドノイズに対してどれだけ強いかを測定します。値が高いほど、一般的にリンクが明瞭であることを示します。LoRa は負の SNR の信号も受信できますが、使用可能な限界はモデムプリセットに依存します。
- **RSSI (received signal strength indicator)** は、dBm 単位の受信信号電力を測定します。値のマイナスが小さいほど信号は強くなります。たとえば、**−90 dBm** は **−110 dBm** よりも強い信号です。

実際のメッセージ配信状況と合わせて両方の値を確認してください。単一の SNR または RSSI の読み値だけでは、デバイスの故障を断定できません。リンクを改善するには、動作バンドに合ったアンテナを使用し、その接続を確認し、障害物や干渉から離れた高く開けた場所へ移動してください。

### コンピュータが X2 を検出できない、またはシリアルポートに接続できない

1. USB **データ** ケーブルを使用し、X2 を接続する前後でコンピュータのポート一覧を確認します。充電画面だけでは USB データ接続が確立されているとは限りません。
2. X2 を再接続する、USB ポートを変更する、またはダウンロードモードに入るたびにポートを再確認します。macOS では `/dev/cu.usbmodem...` の末尾が変わることがあります。
3. ポートを使用している他のフラッシャー、シリアルモニタ、ブラウザ接続を閉じます。Linux では [USB access permissions](/ja/x2_get_started_for_meshtastic/#linux-usb-access) も確認してください。
4. ポート一覧にデバイスが表示されない場合は、別のデータケーブルを試すか、USB 接続を確認するためにコンピュータへ直接接続します。
5. ファームウェアインストールの場合は、[Flash Firmware](/ja/x2_get_started_for_meshtastic/#flash-firmware) に記載されているようにフラッシュモードに入ります。Web Client の場合は、Meshtastic を通常どおり実行します。

フラッシャーが **No serial data received** と表示する場合、ブートローダーとの通信が確立されていません。このメッセージだけでは、フラッシュ容量の問題やデバイスの不良を特定することはできません。

### Linux での USB アクセス

X2 を接続する前後でシリアルポートを比較します：

```bash
ls /dev/ttyACM* /dev/ttyUSB* 2>/dev/null
```

アクセスが拒否される場合は、検出されたポートのパーミッションを確認します（必要に応じて `/dev/ttyACM0` を置き換えてください）：

```bash
ls -l /dev/ttyACM0
```

Ubuntu/Debian では、ポートが `dialout` に属している場合、ユーザーをそのグループに追加します：

```bash
sudo usermod -aG dialout "$USER"
```

ログアウトして再ログインし、再試行します。ポートを使用している他のアプリケーションを閉じます。ダウンロードモードに入った後は、ポート名を再確認してください。

### GNSS が位置を表示しない

- [Configure GPS](/ja/x2_get_started_for_meshtastic/#configure-gps) を使用して GNSS を有効にします。
- 空がよく見える屋外に移動し、測位を取得する時間を確保します。長時間使用していなかった後の初回測位は、その後の測位より時間がかかる場合があります。
- マップ上に位置が表示される前に、X2 上で衛星と位置のステータスを確認します。
- 移動しているのに位置が固定されたままの場合は、スマートフォンアプリの **Fixed Position** 設定と GNSS 更新間隔を確認します。詳しくは [Meshtastic Position configuration](https://meshtastic.org/docs/configuration/radio/position/) を参照してください。

### オフラインマップが空白になる

1. カードの **MBR/FAT32** フォーマットと `/maps/<style>/<zoom>/<x>/<y>.png` フォルダ構造を確認します。
2. カードにコピーしたスタイルと同じスタイルを MUI で選択します。
3. ダウンロードしたタイルが、表示している場所とズームレベルをカバーしていることを確認します。公式スターターキットのみをインストールしている場合は、ズームレベルを **6 以下** まで縮小します。
4. 現在位置については、GNSS の測位を待ちます。カードが検出されない場合は、X2 の電源を切り、USB を取り外してからカードを挿し直してください。

準備手順については、[Map Usage](/ja/x2_get_started_for_meshtastic/#map-usage) を参照してください。

### ファームウェアの手動インストール

[esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32s3/) を使用して、X2 の **`.factory.bin`** を **`0x0`** に書き込みます。この結合イメージには、ブートローダー、パーティションテーブル、およびアプリケーションが含まれています。アプリケーションのみの `.bin` は、この手順には適していません。

:::caution フル消去
以下のフラッシュコマンドは、設定、チャンネル、保存データを含むすべての内部フラッシュを消去します。続行する前に、必要なものは必ずバックアップしてください。
:::

1. [X2 factory firmware 2.8.1.0046b50](https://files.seeedstudio.com/wiki/MeshPagerX2/firmware-seeed_meshpager_x2-2.8.1.0046b50.factory%20copy.bin) をダウンロードします。ダウンロードしたファイル名 **`firmware-seeed_meshpager_x2-2.8.1.0046b50.factory copy.bin`** を **`x2.factory.bin`** に変更し、PC 上の任意のフォルダに配置します。
2. [Python 3.10 以降](https://www.python.org/downloads/) をインストールします。
3. USB データケーブルで X2 をコンピュータに接続します。Web Flasher、Web Client、およびポートを占有している可能性のあるシリアルモニタをすべて閉じます。
4. `x2.factory.bin` を含むフォルダでターミナルを開き、使用しているシステムに応じて以下のコマンドを実行します。まず **1200 bps リセット**を送信し、その後 **`--before usb-reset`** を付けて esptool を使用します。

1200 bps のステップはリセットをトリガーし、esptool がファームウェアの書き込みを行います。**1200 bps はファームウェア転送速度ではありません。** リセット後に USB ポートが一度消えて別の名前で再認識される場合があるため、フラッシュ前にもう一度ポート一覧を確認してください。

<Tabs groupId="x2-manual-flash-os">
<TabItem value="windows" label="Windows">

**PowerShell** で esptool をインストールし、シリアルポートを一覧表示します：

```powershell
py -3 -m venv .venv
.\.venv\Scripts\python.exe -m pip install --upgrade "esptool>=5,<6"
.\.venv\Scripts\python.exe -m serial.tools.list_ports
```

`COM5` を X2 の現在のポートに置き換え、**1200 bps リセット**を送信します：

```powershell
.\.venv\Scripts\python.exe -c "import serial,time; s=serial.Serial('COM5',1200,timeout=0.2); s.dtr=True; time.sleep(0.5); s.dtr=False; s.close(); time.sleep(2)"
.\.venv\Scripts\python.exe -m serial.tools.list_ports
```

もう一度ポートを確認します。以下の `COM5` を X2 が現在使用しているポートに置き換え、フラッシュします：

```powershell
.\.venv\Scripts\python.exe -m esptool --chip esp32s3 --port COM5 --baud 460800 --before usb-reset write-flash --erase-all 0x0 x2.factory.bin
```

</TabItem>
<TabItem value="linux-macos" label="Linux / macOS">

esptool をインストールし、シリアルポートを一覧表示します：

```bash
python3 -m venv .venv
./.venv/bin/python -m pip install --upgrade "esptool>=5,<6"
./.venv/bin/python -m serial.tools.list_ports
```

Ubuntu/Debian の場合、最初のコマンドで不足していると表示されたら、`sudo apt install python3-venv` で `python3-venv` をインストールしてください。

`/dev/ttyACM0` を X2 の現在のポートに置き換えます。macOS では、対応する `/dev/cu.usbmodem...` ポートを使用します。**1200 bps リセット**を送信し、その後もう一度ポート一覧を表示します：

```bash
./.venv/bin/python -c "import serial,time; s=serial.Serial('/dev/ttyACM0',1200,timeout=0.2); s.dtr=True; time.sleep(0.5); s.dtr=False; s.close(); time.sleep(2)"
./.venv/bin/python -m serial.tools.list_ports
```

以下の `/dev/ttyACM0` を X2 が現在使用しているポートに置き換え、フラッシュします：

```bash
./.venv/bin/python -m esptool --chip esp32s3 --port /dev/ttyACM0 --baud 460800 --before usb-reset write-flash --erase-all 0x0 x2.factory.bin
```

Linux でパーミッションエラーが報告された場合は、[Linux USB Access](/ja/x2_get_started_for_meshtastic/#linux-usb-access) に従ってください。

</TabItem>
</Tabs>

esptool が **`Hash of data verified`** と表示して完了するまで、USB 接続を維持してください。その後、Power と Return の両方を離した状態で X2 を再起動し、LoRa リージョンとチャンネルを再設定します。

esptool が **No serial data received** と表示する場合は、ポートを占有している別のアプリケーションがないか確認し、1200 bps リセットをやり直して、新たに認識されたポートを選択してください。転送速度を下げるだけでは、X2 をダウンロードモードに移行させることはできません。

ソフトウェアリセットが利用できない場合は、[Flash Firmware](/ja/x2_get_started_for_meshtastic/#flash-firmware) で説明されている X2 のボタン手順を使用し、その後ポートを再確認してください。必要なリセット動作は、インストールされているファームウェアやハードウェアリビジョンによって異なる場合があります。

接続は確立されているものの書き込みが繰り返し失敗する場合は、`--baud 115200` を付けて書き込みコマンドを再試行してください。

## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank" rel="noopener noreferrer">
    <img
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg"
      alt="Facebook 上の Seeed Studio Meshtastic コミュニティに参加する"
      style={{width: '90%', maxWidth: '800px', height: 'auto'}}
      loading="lazy"
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed Studio 技術フォーラム"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Seeed Studio サポートへのお問い合わせ"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Studio の Discord コミュニティ"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Seeed Studio Wiki ディスカッション"></a>
</div>
